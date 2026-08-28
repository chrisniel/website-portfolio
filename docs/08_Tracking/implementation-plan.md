# Static Portfolio — Initial Implementation Plan

## Goal

Create a small, beginner-friendly portfolio website for Chris Daniel that can be hosted as static files on GitHub Pages.

## Approved Architecture

- Plain HTML, CSS, and JavaScript.
- No frontend framework or package manager.
- No backend, database, authentication, uploads, or server-side contact form.
- Large 3D models and videos will be added later and hosted separately if necessary.

## Prerequisites

- A modern web browser.
- Git for version control.
- Optional: Python 3 for serving the website locally.
- A GitHub account when Chris is ready to publish.

## Implementation Steps

1. Create the semantic portfolio page and responsive navigation.
2. Add a small design system using CSS custom properties.
3. Add progressive JavaScript enhancements for the menu, theme preference, and current year.
4. Document placeholder content that Chris must replace before launch.
5. Correct the repository rules, Git ignore rules, and Git LFS patterns.
6. Update the README, walkthrough, task tracker, contribution guide, and changelog.
7. Run safe local syntax and link checks without installing dependencies.
8. Prepare the repository for its first baseline commit.

## Acceptance Criteria

- The site opens from `index.html` without a build step.
- Navigation reaches the Projects, About, and Contact sections.
- The layout adapts to phone, tablet, and desktop widths.
- Keyboard focus is visible and semantic landmarks are present.
- The theme control works when JavaScript is available.
- Placeholder project/contact content is clearly identified and does not invent Chris's details.
- Documentation accurately explains local preview and GitHub Pages publishing.
- No secret, backend, database, or paid service is required.

## Deferred Features

- Admin dashboard and private login.
- Browser-based asset uploads.
- Stored contact-form messages.
- Persistent per-project analytics.
- Live 3D model rendering and large video hosting.
- ASP.NET Core API and database.

---

## Approved Content And Asset Readiness Update

### Goal

Replace generic homepage placeholders with approved CV-backed information and prepare clear folders and documentation for future images and interactive 3D models.

### Scope

1. Add the BantayGabi, Kumpuni, and Minecraft server administration projects.
2. Add grouped game-development, technical-art, and development/system skills.
3. Strengthen the About section using verified experience without inflated claims.
4. Add compact professional experience and ICT education, including Chris's other approved roles.
5. Add the primary `ChrisNiel` GitHub profile and omit LinkedIn.
6. Add asset instructions for project images, background images, poster images, and optimized `.glb` files.
7. Document each `docs/` folder with only practical project files.
8. Keep `<model-viewer>` deferred until one real model/poster pair is available.

### Additional Acceptance Criteria

- Project cards use verified names, roles, status, and descriptions from the CV.
- Private phone, location, and older email remain absent.
- External GitHub links open safely in a new tab.
- Skills and experience remain readable on phone and desktop layouts.
- Asset documentation explains naming, optimization, poster images, and licensing.
- The empty, untracked `main-files/` scaffold is not used by the live website.
