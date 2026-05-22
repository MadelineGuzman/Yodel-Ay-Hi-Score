# Yodel-Ay-Hi-Score

GDevelop HTML5 export for **Yodel-Ay-Hi-Score**.

## Local Testing

Run a local web server from this repository root:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

Do not open `index.html` directly with `file://`; browser APIs used by the game, especially microphone access, need a proper web origin.

## GitHub Pages

Use GitHub Pages with:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The build root is this repository root, where `index.html`, `data.js`, `code*.js`, `pixi-renderers/`, `Extensions/`, and the exported assets live.

## Microphone

Microphone access requires a secure browser context. `localhost` and `127.0.0.1` are valid for local testing, and GitHub Pages serves over HTTPS for hosted testing.
