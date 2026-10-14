# Bentwood chair — interactive 3D

A static GitHub Pages viewer for a photo-inspired chair modeled in Blender.

## View

https://tomasvicar.github.io/wooden-chair-3d/

Drag to orbit, scroll or pinch to zoom, toggle rotation, or reset the camera. The GLB download contains the chair geometry and baked wood texture. Dimensions are estimates from a single photograph.

## Files

- `index.html`, `styles.css`, `app.js`: responsive static page.
- `assets/wooden-chair.glb`: self-contained glTF 2.0 model.
- `assets/chair-preview.png`: rendered loading poster.
- `assets/model-viewer.min.js`: Google model-viewer 4.4.0, distributed under Apache-2.0 (see `assets/model-viewer-LICENSE.txt`).

Serve locally with `python -m http.server 8000` and open http://localhost:8000. GitHub Pages publishes the root of `main`.

Viewer documentation: https://modelviewer.dev/
