# Future 3D Model Showcase Plan

Status: Five-model library implemented on 2026-08-29 with supplied GLBs and rendered views;
final hosted verification remains after GitHub Pages is enabled.

## Goal

Allow visitors to inspect selected portfolio models interactively without slowing the first page load.

## Approved Inputs

- Five BantayGabi GLBs under `assets/models/`.
- Twelve matching WebP poster and angle renders under `assets/images/posters/`.
- Visitor-facing titles, descriptions, alternative text, and verified model facts.
- BantayGabi project association.
- Chris's approval to use the supplied portfolio assets.

## Planned Behavior

1. Show the poster immediately.
2. Display a clear “Load 3D model” control.
3. Download the model only after interaction or when appropriate near the viewport.
4. Enable camera controls while preserving vertical touch scrolling.
5. Show a readable fallback if WebGL or the model load fails.
6. Keep a normal project image and description available for accessibility and low-power devices.
7. Allow visitors to close the viewer, return to the poster, and reopen the loaded model without creating a duplicate viewer.
8. Keep the viewer renderable but transparent during loading, and restore the poster plus retry
   control when loading fails or exceeds 45 seconds.

## Implemented Technical Direction

- Use Google's `<model-viewer>` 4.3.1 web component rather than a custom Three.js scene.
- Keep the website static; no backend is required.
- Inject the pinned CDN module only after the visitor selects the load control.
- Reuse one viewer for every model; model files remain unloaded until selected.
- Keep the interactive viewer on `projects/bantaygabi-models.html`; the project overview uses only a poster and link.

## Acceptance Criteria

- Desktop and mobile visitors can load, rotate, and zoom the model.
- The page remains scrollable on touch devices.
- The model is not part of the initial page download.
- The poster remains visible until the model is ready.
- Loading and failure states are understandable.
- A keyboard/screen-reader-friendly description is present.

## Current Limitations

- The GLBs are approximately 7.1–8.4 MB because their embedded textures remain large.
- Unity ShaderLab and texture-array behavior does not transfer directly to a standard web viewer;
  the exported glTF materials are the web representation.
- Local testing should use an HTTP server rather than opening the project page through `file://`.
- Manual review on a real phone is still recommended before publication.

## Approved Next Version

- Remove gameplay-context media from the model-library page.
- Add compact selectable model cards based on Chris's model-page sketches.
- Reuse one viewer for all models.
- Give each model one to three angle images and synchronized technical facts.
- Keep model files click-to-load and preserve close/reopen behavior.
- Add gameplay images/videos to a separate overview carousel with a semi-transparent left rail on
  desktop and a horizontal bottom rail on phones.
- Do not autoplay or automatically advance media.
- Do not add a whole-environment model until a deliberately optimized export is approved.

## 2026-08-29 Delivery Result

- Gameplay context was removed from the model library.
- A compact five-card model selector now drives the current model state.
- The existing viewer stage remains the only place where `<model-viewer>` is created.
- One to three rendered views, title, description, and technical facts stay synchronized with the
  selected gate or house model.
- The BantayGabi overview now owns a separate image/video-ready carousel.
- Real video remains later content work, not missing application behavior.
