# Future 3D Model Showcase Plan

Status: Waiting for a real model and poster image.

## Goal

Allow visitors to inspect one portfolio model interactively without slowing the rest of the page.

## Required Inputs From Chris

- Optimized public `.glb` model.
- Matching WebP poster image.
- Model title.
- Short accessible description.
- Project association, such as BantayGabi or Kumpuni.
- Confirmation of ownership or permission to publish.

## Planned Behavior

1. Show the poster immediately.
2. Display a clear “Load 3D model” control.
3. Download the model only after interaction or when appropriate near the viewport.
4. Enable camera controls while preserving vertical touch scrolling.
5. Show a readable fallback if WebGL or the model load fails.
6. Keep a normal project image and description available for accessibility and low-power devices.

## Technical Direction

- Use Google's `<model-viewer>` web component rather than a custom Three.js scene.
- Keep the website static; no backend is required.
- Add the dependency only when the required files exist.
- Start with one viewer and measure real mobile performance before adding more.

## Acceptance Criteria

- Desktop and mobile visitors can load, rotate, and zoom the model.
- The page remains scrollable on touch devices.
- The model is not part of the initial page download.
- The poster remains visible until the model is ready.
- Loading and failure states are understandable.
- A keyboard/screen-reader-friendly description is present.
