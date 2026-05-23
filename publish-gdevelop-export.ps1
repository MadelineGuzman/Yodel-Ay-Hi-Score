param(
    [Parameter(Position = 0)]
    [string] $ExportPath = ".\Yodel_1",

    [switch] $Stage
)

$ErrorActionPreference = "Stop"

function Resolve-RequiredPath {
    param([string] $Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        throw "Path not found: $Path"
    }
    return (Resolve-Path -LiteralPath $Path).Path
}

function Assert-InWorkspace {
    param(
        [string] $Workspace,
        [string] $Path
    )
    if ($Path -ne $Workspace -and -not $Path.StartsWith($Workspace + [IO.Path]::DirectorySeparatorChar)) {
        throw "Refusing to touch a path outside the workspace: $Path"
    }
}

function Get-ResourceFiles {
    param([string] $DataJsPath)
    $data = Get-Content -Raw -LiteralPath $DataJsPath
    $matches = [regex]::Matches($data, '"file"\s*:\s*"([^"]+)"')
    $files = New-Object 'System.Collections.Generic.List[string]'
    foreach ($match in $matches) {
        $file = $match.Groups[1].Value.Replace("/", "\")
        if ($file) {
            $files.Add($file)
        }
    }
    return $files
}

function New-NameSet {
    param([object[]] $Names = @())
    $set = New-Object 'System.Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
    foreach ($name in $Names) {
        [void] $set.Add($name)
    }
    return $set
}

$workspace = (Resolve-Path -LiteralPath ".").Path
$export = Resolve-RequiredPath $ExportPath
Assert-InWorkspace -Workspace $workspace -Path $export

if ($export -eq $workspace) {
    throw "ExportPath must be a separate export folder, not the repository root."
}

$requiredExportFiles = @("index.html", "data.js")
foreach ($file in $requiredExportFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $export $file))) {
        throw "Export folder is missing required file: $file"
    }
}

$preserveNames = New-NameSet @(
    ".git",
    ".gitattributes",
    ".gitignore",
    ".nojekyll",
    "README.md",
    "Yodel-Ay-Hi-Score.json",
    "Yodel-Ay-Hi-Score.json.autosave",
    "assets",
    "publish-gdevelop-export.ps1"
)

$exportNames = New-Object 'System.Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
Get-ChildItem -Force -LiteralPath $export | ForEach-Object {
    [void] $exportNames.Add($_.Name)
}

Write-Host "Promoting GDevelop export from: $export"

# Remove old export-managed runtime directories when the fresh export includes them.
Get-ChildItem -Force -Directory -LiteralPath $export | ForEach-Object {
    $destination = Join-Path $workspace $_.Name
    if ((Test-Path -LiteralPath $destination) -and -not $preserveNames.Contains($_.Name)) {
        $resolvedDestination = (Resolve-Path -LiteralPath $destination).Path
        Assert-InWorkspace -Workspace $workspace -Path $resolvedDestination
        Remove-Item -LiteralPath $resolvedDestination -Recurse -Force
    }
}

# Copy the fresh export into the Pages root.
Get-ChildItem -Force -LiteralPath $export | ForEach-Object {
    if ($preserveNames.Contains($_.Name)) {
        Write-Host "Preserving repo/editor item: $($_.Name)"
    } else {
        Copy-Item -LiteralPath $_.FullName -Destination $workspace -Recurse -Force
    }
}

# Remove stale top-level media files that are no longer referenced by the new export.
$resourceFiles = Get-ResourceFiles -DataJsPath (Join-Path $workspace "data.js")
$resourceNames = New-NameSet ($resourceFiles | ForEach-Object { [IO.Path]::GetFileName($_) })
$mediaExtensions = New-NameSet @(".png", ".jpg", ".jpeg", ".webp", ".gif", ".ttf", ".fnt", ".mp3", ".wav", ".ogg", ".mp4", ".webm")

Get-ChildItem -File -LiteralPath $workspace | ForEach-Object {
    if (
        -not $preserveNames.Contains($_.Name) -and
        $mediaExtensions.Contains($_.Extension) -and
        -not $resourceNames.Contains($_.Name) -and
        -not $exportNames.Contains($_.Name)
    ) {
        Remove-Item -LiteralPath $_.FullName -Force
        Write-Host "Removed stale root asset: $($_.Name)"
    }
}

# Remove stale generated scene code files that are not referenced by the fresh index.
$indexPath = Join-Path $workspace "index.html"
$index = Get-Content -Raw -LiteralPath $indexPath
Get-ChildItem -File -LiteralPath $workspace -Filter "code*.js" | ForEach-Object {
    if ($index -notmatch [regex]::Escape($_.Name)) {
        Remove-Item -LiteralPath $_.FullName -Force
        Write-Host "Removed stale scene script: $($_.Name)"
    }
}

# Reapply the browser centering wrapper that GDevelop overwrites on export.
$stylePattern = '(?s)<style>.*?</style>'
$centeredStyle = @'
<style>
		html, body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: #000000;
			overflow: hidden;
		}

		body {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		canvas {
			display: block;
		}
	</style>
'@

if ($index -notmatch $stylePattern) {
    throw "Could not find a <style> block in index.html to patch."
}
$index = [regex]::Replace($index, $stylePattern, $centeredStyle, 1)
Set-Content -LiteralPath $indexPath -Value $index -NoNewline
Write-Host "Reapplied centered canvas CSS."

# Reapply the PIXI global shim that this export/runtime needs in browser builds.
$pixiPath = Join-Path $workspace "pixi-renderers\pixi.js"
if (Test-Path -LiteralPath $pixiPath) {
    $pixi = Get-Content -Raw -LiteralPath $pixiPath
    if ($pixi -notmatch 'globalThis\.PIXI\s*=\s*PIXI;') {
        $pixi = $pixi -replace '(?m)^// Disabled to avoid warnings in Chrome', "globalThis.PIXI = PIXI;`r`n// Disabled to avoid warnings in Chrome"
        Set-Content -LiteralPath $pixiPath -Value $pixi -NoNewline
        Write-Host "Reapplied PIXI global shim."
    }
}

# Remove stale local export-folder metadata from data.js.
$dataPath = Join-Path $workspace "data.js"
$data = Get-Content -Raw -LiteralPath $dataPath
$data = $data.Replace("\\Yodel_1", "").Replace("\Yodel_1", "")

# Fix canvas centering: GDevelop exports sizeOnStartupMode as "adaptWidth" which
# pins the canvas to the left edge. "noChanges" lets the runtime center it correctly.
$data = $data.Replace('"sizeOnStartupMode":"adaptWidth"', '"sizeOnStartupMode":"noChanges"')
Set-Content -LiteralPath $dataPath -Value $data -NoNewline
Write-Host "Fixed sizeOnStartupMode for centered canvas."

# Verify exported resources resolve from the Pages root.
$missingExportResources = @()
$resourceFiles = Get-ResourceFiles -DataJsPath $dataPath
foreach ($resource in $resourceFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $workspace $resource))) {
        $missingExportResources += $resource
    }
}
if ($missingExportResources.Count -gt 0) {
    throw "Missing exported resources: $($missingExportResources -join ', ')"
}
Write-Host "Export resource check passed."

# Verify GDevelop editor resources still resolve. This protects the assets/ folder.
$projectPath = Join-Path $workspace "Yodel-Ay-Hi-Score.json"
if (Test-Path -LiteralPath $projectPath) {
    $project = Get-Content -Raw -LiteralPath $projectPath
    $projectRefs = [regex]::Matches($project, '"file"\s*:\s*"([^"]+)"')
    $missingProjectResources = @()
    foreach ($match in $projectRefs) {
        $resource = $match.Groups[1].Value.Replace("/", "\")
        if ($resource -and -not (Test-Path -LiteralPath (Join-Path $workspace $resource))) {
            $missingProjectResources += $resource
        }
    }
    if ($missingProjectResources.Count -gt 0) {
        throw "Missing GDevelop editor resources: $($missingProjectResources -join ', ')"
    }
    Write-Host "GDevelop editor resource check passed."
}

if ($Stage) {
    git add -A
    Write-Host "Staged changes with git add -A."
}

Write-Host "Publish cleanup complete."
