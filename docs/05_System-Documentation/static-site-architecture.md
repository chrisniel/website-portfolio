# Static Site Architecture

## Runtime

```text
Browser
  -> index.html
  -> projects/*.html
  -> assets/css/styles.css
  -> assets/js/main.js
  -> assets/js/term-definitions.js
  -> public images, optional videos, and models
  -> pinned <model-viewer> CDN module after visitor interaction
```

There is no server application, API, database, authentication system, package manager, or build step.

## Responsibilities

- `index.html`: visible content, semantic structure, links, and section order.
- `assets/css/styles.css`: design tokens, layout, themes, responsive rules, and accessibility presentation.
- `projects/*.html`: static project details, media galleries, and case-study content.
- `assets/js/main.js`: mobile-menu behavior, theme preference, mixed image/video carousel state,
  model selection, galleries, deferred 3D loading, and current footer year.
- `assets/js/term-definitions.js`: canonical short definitions and the reusable, accessible explanation popover.
- `assets/images/`: public optimized images and model posters.
- `assets/videos/projects/`: approved optimized project videos; currently contains guidance only.
- `assets/models/`: public optimized `.glb` files stored as normal Git binaries so GitHub Pages can
  serve them directly.
- `docs/`: planning, status, architecture, asset records, and walkthroughs; not application runtime code.

## Hosting

The intended host is GitHub Pages, serving the repository root as static files.

## Privacy And Security Boundary

Every deployed HTML, CSS, JavaScript, image, and model is public. The frontend must never contain secrets or private credentials.

## Optional 3D Dependency

The BantayGabi model-library page pins Google `<model-viewer>` version 4.3.1 from Google's
hosted-library CDN. The script and GLB are requested only after the visitor chooses to load the
interactive model. During loading, the viewer remains rendered with zero opacity so its final
`load` event can complete while the poster stays visible. A 45-second timeout removes a stalled
viewer and restores a retry control. Five model-selection cards update the same viewer stage, up to
three rendered-view choices, and fact fields without creating multiple viewer elements. The
overview page never references a GLB. Posters, gallery images, and written descriptions remain
available if the library, WebGL, or model fails.

GitHub Pages cannot serve Git LFS objects. Web-ready GLB, MP4, and WebM files therefore use normal
Git binary storage and must remain below GitHub's normal per-file limit. Large future media should
use a separate public media host and only after Chris approves that hosting choice.

## Mixed Media Carousel

`projects/bantaygabi.html` uses semantic `data-media-*` attributes for a manual image/video
carousel. The first of eight WebP captures is present in HTML; the remaining images use lazy-loaded
thumbnails. A video element has no source until a visitor selects a future video item, preventing an
early video request. Switching items pauses a playing video.

On desktop, the navigation rail overlays the left of the media stage with a semi-transparent
background. At the existing `68rem` breakpoint, it becomes a horizontal rail below the stage. The
same CSS and JavaScript can support a future Kumpuni page without adding a framework.

## Technical-Term Explanations

Selected unfamiliar terms use semantic buttons with `data-term` keys. `assets/js/term-definitions.js`
is the single source for their labels and explanations. The popover supports mouse, keyboard, and
touch activation, closes with Escape or an outside selection, and is supplementary: the surrounding
page remains understandable without opening it.

## `main-files/`

The local `main-files/` tree belongs to an earlier Flutter/ASP.NET idea. It is empty, untracked, and not used by the current website. The active site lives at the repository root and under `assets/`.
