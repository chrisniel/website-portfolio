# Static Site Architecture

## Runtime

```text
Browser
  -> index.html
  -> assets/css/styles.css
  -> assets/js/main.js
  -> optional public images and models
```

There is no server application, API, database, authentication system, package manager, or build step.

## Responsibilities

- `index.html`: visible content, semantic structure, links, and section order.
- `assets/css/styles.css`: design tokens, layout, themes, responsive rules, and accessibility presentation.
- `assets/js/main.js`: mobile-menu behavior, theme preference, and current footer year.
- `assets/images/`: public optimized images.
- `assets/models/`: future optimized public `.glb` files.
- `docs/`: planning, status, architecture, asset records, and walkthroughs; not application runtime code.

## Hosting

The intended host is GitHub Pages, serving the repository root as static files.

## Privacy And Security Boundary

Every deployed HTML, CSS, JavaScript, image, and model is public. The frontend must never contain secrets or private credentials.

## `main-files/`

The local `main-files/` tree belongs to an earlier Flutter/ASP.NET idea. It is empty, untracked, and not used by the current website. The active site lives at the repository root and under `assets/`.
