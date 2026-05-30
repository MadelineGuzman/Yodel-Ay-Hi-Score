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

function Get-ProjectResourceFiles {
    param([string] $ProjectPath)
    $project = Get-Content -Raw -LiteralPath $ProjectPath
    $matches = [regex]::Matches($project, '"file"\s*:\s*"([^"]+)"')
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
    "Yodel_Ay_Hi_Score_Main_Build.json",
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
$projectPath = Join-Path $workspace "Yodel-Ay-Hi-Score.json"
$projectResourceFiles = @()
if (Test-Path -LiteralPath $projectPath) {
    $projectResourceFiles = Get-ProjectResourceFiles -ProjectPath $projectPath
}
$resourceNames = New-NameSet (($resourceFiles + $projectResourceFiles) | ForEach-Object { [IO.Path]::GetFileName($_) })
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
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			user-select: none;
		}

		body {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		canvas {
			display: block;
		}

		#yodel-mobile-controls {
			display: none;
		}

		@media (pointer: coarse), (max-width: 900px) {
			#yodel-mobile-controls {
				display: block;
				inset: 0;
				pointer-events: none;
				position: fixed;
				z-index: 10000;
			}

			.yodel-mobile-control {
				align-items: center;
				background: rgba(8, 18, 28, 0.38);
				border: 2px solid rgba(255, 255, 255, 0.45);
				border-radius: 50%;
				box-shadow: 0 6px 18px rgba(0, 0, 0, 0.32);
				color: rgba(255, 255, 255, 0.82);
				display: flex;
				font: 700 34px/1 system-ui, sans-serif;
				height: 68px;
				justify-content: center;
				pointer-events: auto;
				position: fixed;
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
				touch-action: none;
				-webkit-tap-highlight-color: transparent;
				-webkit-touch-callout: none;
				-webkit-user-drag: none;
				-webkit-user-select: none;
				user-select: none;
				width: 68px;
			}

			#yodel-left-control {
				bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
				left: 18%;
				transform: translateX(-50%);
			}

			#yodel-right-control {
				bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
				left: 82%;
				transform: translateX(-50%);
			}

			#yodel-jump-control {
				bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
				left: 50%;
				transform: translateX(-50%);
			}
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
$data = $data.Replace('"adaptGameResolutionAtRuntime":true', '"adaptGameResolutionAtRuntime":false')
Set-Content -LiteralPath $dataPath -Value $data -NoNewline
Write-Host "Fixed sizeOnStartupMode for centered canvas."

# Keep mobile builds from switching to adaptWidth at runtime. It zooms/crops this
# 800x780 game on tall phone screens, so mobile controls are handled by a DOM
# overlay outside the canvas instead.
Get-ChildItem -File -LiteralPath $workspace -Filter "code*.js" | ForEach-Object {
    $sceneCode = Get-Content -Raw -LiteralPath $_.FullName
    $originalSceneCode = $sceneCode
    $sceneCode = $sceneCode.Replace('gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");', 'gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");')
    $sceneCode = $sceneCode.Replace('gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);', 'gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, false);')
    foreach ($arrowObject in @("GDLeft_9595Arrow_9595ButtonObjects", "GDRight_9595Arrow_9595ButtonObjects", "GDJump_9595Arrow_9595ButtonObjects")) {
        $sceneCode = [regex]::Replace(
            $sceneCode,
            "($([regex]::Escape($arrowObject))\d+\[i\]\.getBehavior\(""Opacity""\)\.setOpacity\()\d+(\);)",
            '${1}0${2}'
        )
    }
    if ($sceneCode -match "GDMicToggleObjects") {
        $sceneCode = $sceneCode.Replace(
            'runtimeScene.getScene().getVariables().getFromIndex(0)',
            'runtimeScene.getGame().getVariables().get("MicEnabled")'
        )
        $sceneCode = [regex]::Replace(
            $sceneCode,
            '((?:gdjs\.[A-Za-z0-9_]+\.GDMicToggleObjects\d+\[i\])\.getBehavior\("Text"\)\.setText\()"MIC: ON"(\);)',
            '${1}runtimeScene.getGame().getVariables().get("MicEnabled").getAsBoolean() ? "MIC: ON" : "MIC: OFF"${2}'
        )
        $sceneCode = [regex]::Replace(
            $sceneCode,
            '((?:gdjs\.[A-Za-z0-9_]+\.GDMicIconObjects\d+\[i\])\.setColor\()"0;255;0"(\);)',
            '${1}runtimeScene.getGame().getVariables().get("MicEnabled").getAsBoolean() ? "0;255;0" : "255;0;0"${2}'
        )

        # Preserve the player's mic preference across scene transitions. The
        # first setBoolean(true) in these generated files is the "turn mic on"
        # branch of the toggle; later ones are scene-start initializers.
        $setMicOnPattern = 'runtimeScene\.getGame\(\)\.getVariables\(\)\.get\("MicEnabled"\)\.setBoolean\(true\);'
        $setMicOnMatches = [regex]::Matches($sceneCode, $setMicOnPattern)
        if ($setMicOnMatches.Count -gt 1) {
            for ($i = $setMicOnMatches.Count - 1; $i -ge 1; $i--) {
                $match = $setMicOnMatches[$i]
                $sceneCode = $sceneCode.Remove($match.Index, $match.Length).Insert($match.Index, '/* Preserve global MicEnabled preference. */')
            }
        }
    }
    if ($sceneCode -ne $originalSceneCode) {
        Set-Content -LiteralPath $_.FullName -Value $sceneCode -NoNewline
    }
}
Write-Host "Patched mobile resize, hidden canvas arrow visuals, and global mic preference."

# Add mobile-only controls outside the GDevelop canvas, so they can sit in the
# letterbox/black area without changing the game layout or desktop behavior.
$index = Get-Content -Raw -LiteralPath $indexPath
$mobileControlsMarkup = @'
	<div id="yodel-mobile-controls" aria-hidden="true">
		<button class="yodel-mobile-control" id="yodel-left-control" type="button" aria-label="Move left" draggable="false">◀</button>
		<button class="yodel-mobile-control" id="yodel-right-control" type="button" aria-label="Move right" draggable="false">▶</button>
		<button class="yodel-mobile-control" id="yodel-jump-control" type="button" aria-label="Jump" draggable="false">▲</button>
	</div>

	<script>
	(function() {
		const controls = document.getElementById('yodel-mobile-controls');
		if (!controls) return;
		controls.addEventListener('selectstart', (event) => event.preventDefault());
		controls.addEventListener('dragstart', (event) => event.preventDefault());
		controls.addEventListener('touchmove', (event) => event.preventDefault(), { passive: false });

		const keyState = new Map();
		const keyInfo = {
			Left: { key: 'ArrowLeft', code: 'ArrowLeft', keyCode: 37 },
			Right: { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 },
			Space: { key: ' ', code: 'Space', keyCode: 32 }
		};

		function makeKeyEvent(name, type) {
			const info = keyInfo[name];
			return new KeyboardEvent(type, {
				key: info.key,
				code: info.code,
				keyCode: info.keyCode,
				which: info.keyCode,
				bubbles: true,
				cancelable: true
			});
		}

		function emitKey(name, type) {
			document.dispatchEvent(makeKeyEvent(name, type));
			window.dispatchEvent(makeKeyEvent(name, type));
		}

		function press(name) {
			if (keyState.get(name)) return;
			keyState.set(name, true);
			emitKey(name, 'keydown');
		}

		function release(name) {
			if (!keyState.get(name)) return;
			keyState.set(name, false);
			emitKey(name, 'keyup');
		}

		function bindHold(id, name) {
			const button = document.getElementById(id);
			if (!button) return;
			const start = (event) => {
				event.preventDefault();
				press(name);
			};
			const end = (event) => {
				event.preventDefault();
				release(name);
			};
			button.addEventListener('pointerdown', start);
			button.addEventListener('pointerup', end);
			button.addEventListener('pointercancel', end);
			button.addEventListener('pointerleave', end);
			button.addEventListener('contextmenu', (event) => event.preventDefault());
		}

		function bindTap(id, name) {
			const button = document.getElementById(id);
			if (!button) return;
			button.addEventListener('pointerdown', (event) => {
				event.preventDefault();
				press(name);
				window.setTimeout(() => release(name), 220);
			});
			button.addEventListener('pointerup', (event) => event.preventDefault());
			button.addEventListener('pointercancel', (event) => event.preventDefault());
			button.addEventListener('pointerleave', (event) => event.preventDefault());
			button.addEventListener('contextmenu', (event) => event.preventDefault());
		}

		bindHold('yodel-left-control', 'Left');
		bindHold('yodel-right-control', 'Right');
		bindTap('yodel-jump-control', 'Space');
		window.addEventListener('blur', () => {
			release('Left');
			release('Right');
			release('Space');
		});
	})();
	</script>
'@
if ($index -notmatch 'id="yodel-mobile-controls"') {
    $index = $index.Replace("<body>`r`n", "<body>`r`n`r`n$mobileControlsMarkup`r`n")
    $index = $index.Replace("<body>`n", "<body>`n`n$mobileControlsMarkup`n")
    Set-Content -LiteralPath $indexPath -Value $index -NoNewline
    Write-Host "Injected mobile DOM controls."
}

# Mute audio when the player navigates away from the tab, resume on return.
$visibilityScript = @'
	<script>
	document.addEventListener('visibilitychange', function() {
		if (typeof Howler !== 'undefined') {
			Howler.mute(document.hidden);
		}
	});
	</script>
'@
$index = Get-Content -Raw -LiteralPath $indexPath
if ($index -notmatch 'visibilitychange') {
    $index = $index.Replace("</body>", "$visibilityScript</body>")
    Set-Content -LiteralPath $indexPath -Value $index -NoNewline
    Write-Host "Injected tab visibility audio mute."
}

# GDevelop's cursor-on-object check can still hit hidden objects. On itch.io,
# the click/touch used to start the iframe can carry into LEVEL 1 and trigger
# the hidden next-level button unless we also require the button to be visible.
$level1CodePath = Join-Path $workspace "code2.js"
if (Test-Path -LiteralPath $level1CodePath) {
    $level1Code = Get-Content -Raw -LiteralPath $level1CodePath
    if ($level1Code -notmatch 'GDNEXT_9595LEVEL_9595BUTTONObjects1\[i\]\.isVisible\(\)') {
        $hiddenButtonGuardPattern = @'
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDNEXT_95959595LEVEL_95959595BUTTONObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
'@
        $hiddenButtonGuardReplacement = @'
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDNEXT_95959595LEVEL_95959595BUTTONObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[k] = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
'@
        if (-not $level1Code.Contains($hiddenButtonGuardPattern)) {
            throw "Could not patch LEVEL 1 hidden next-level button guard in code2.js."
        }
        $level1Code = $level1Code.Replace($hiddenButtonGuardPattern, $hiddenButtonGuardReplacement)
        Set-Content -LiteralPath $level1CodePath -Value $level1Code -NoNewline
        Write-Host "Patched LEVEL 1 hidden next-level button guard."
    }
}

# Verify exported resources resolve from the Pages root.
$missingExportResources = @()
$resourceFiles = Get-ResourceFiles -DataJsPath $dataPath
$soundReferenceNames = New-Object 'System.Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
Get-ChildItem -File -LiteralPath $workspace -Filter "code*.js" | ForEach-Object {
    $sceneCode = Get-Content -Raw -LiteralPath $_.FullName
    $soundMatches = [regex]::Matches($sceneCode, 'playSound(?:OnChannel)?\([^"]*"([^"]+\.(?:wav|mp3|ogg))"')
    foreach ($match in $soundMatches) {
        [void] $soundReferenceNames.Add([IO.Path]::GetFileName($match.Groups[1].Value))
    }
}
$audioExtensions = New-Object 'System.Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
foreach ($extension in @(".mp3", ".wav", ".ogg")) {
    [void] $audioExtensions.Add($extension)
}
foreach ($resource in $resourceFiles) {
    $resourceName = [IO.Path]::GetFileName($resource)
    $resourceExtension = [IO.Path]::GetExtension($resource)
    $isUnusedStaleAudio = $audioExtensions.Contains($resourceExtension) -and -not $soundReferenceNames.Contains($resourceName)
    if (-not $isUnusedStaleAudio -and -not (Test-Path -LiteralPath (Join-Path $workspace $resource))) {
        $missingExportResources += $resource
    }
}
if ($missingExportResources.Count -gt 0) {
    throw "Missing exported resources: $($missingExportResources -join ', ')"
}
Write-Host "Export resource check passed."

# Verify GDevelop editor resources still resolve. This protects the assets/ folder.
if (Test-Path -LiteralPath $projectPath) {
    $missingProjectResources = @()
    foreach ($resource in (Get-ProjectResourceFiles -ProjectPath $projectPath)) {
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
