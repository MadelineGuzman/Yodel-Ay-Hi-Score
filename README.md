# 🏔️ Yodel-Ay-Hi-Score!

> **Yodel your way to the top of the mountain — and beyond.**

A voice-controlled vertical platformer built in GDevelop for a game jam. Scream, yodel, or just breathe loud enough and your little goat will fly. The mountain goes all the way up. So do you.

**▶️ [Play it now](https://madelineguzman.github.io/Yodel-Ay-Hi-Score/)**

---

## How to Play

| Input | Action |
|---|---|
| **Yell / yodel / make noise** | Jump (louder = higher) |
| **← →** or **A / D** | Move left / right |
| Reach the top of each level | Advance to the next |

> **Microphone permission is required.** Your browser will ask — allow it. Nothing is recorded or transmitted; volume level is read locally in-browser.

---

## Levels

| Level | Setting | Collectible | Hazards |
|---|---|---|---|
| 1 | Snowy mountain base camp | 🌸 Flowers | — |
| 2 | Icy ascent | 🍄 Icy mushrooms | Falling rocks, moving platforms |
| 3 | Atmosphere / space | ⭐ Stars | — |
| Finale | Outer space | — | Escape in the UFO |

---

## Tech Stack

- **Engine:** [GDevelop](https://gdevelop.io/) (HTML5 export)
- **Renderer:** PixiJS (bundled by GDevelop)
- **Audio:** Howler.js (bundled by GDevelop)
- **Microphone input:** Web Audio API via GDevelop MicrophoneInput extension
- **Hosting:** GitHub Pages (branch: `main`, root folder)

---

## Local Development

Microphone access requires a secure context — don't open `index.html` directly with `file://`. Use a local server:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Then open **http://127.0.0.1:8000**

---

## Publishing a New Export

After exporting from the GDevelop editor to a local folder:

```powershell
# Promote the export to the repo root (dry run: omit -Stage to preview)
.\publish-gdevelop-export.ps1 .\Yodel_1

# Stage everything for commit when ready
.\publish-gdevelop-export.ps1 .\Yodel_1 -Stage
```

The script:
- Promotes runtime files to the repo root (where GitHub Pages serves from)
- Preserves the GDevelop `.json` project file, `assets/`, and repo files
- Removes stale media and scene scripts from previous exports
- Reapplies the centered canvas CSS and PIXI global shim (overwritten by GDevelop on each export)
- Validates that all referenced resources resolve before finishing

---

## GitHub Pages Setup

- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`

---

*Made with ☕ and questionable vocal choices by Syzygy Gaming.*
