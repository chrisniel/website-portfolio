# Changelog

All notable project changes are recorded here.

## 2026-08-29 — Final Portfolio Asset Integration And Repository Setup

### Added

- Eight supplied WebP BantayGabi environment captures in the manual game-preview carousel.
- Four additional click-to-load house GLBs, bringing the 3D library to five selectable models.
- Eleven supplied model renders with synchronized front, angle, aerial, and wide views.
- Confirmed portfolio Git remote at `https://github.com/chrisniel/website-portfolio.git`.

### Changed

- Replaced the blurred temporary BantayGabi image with the supplied compressed captures.
- Expanded the model library to support up to three rendered choices per selected model while
  continuing to reuse one interactive viewer.
- Updated Chris's official experience to **Electrician · Part-time** at **Criz Iron Works and
  Construction Services**, with administrative work described as occasional support.
- Removed optimization-roadmap language from the public model page and kept the visitor-facing
  explanation focused on click-to-load behavior.
- Updated asset records, architecture, status, roadmap, walkthrough, and publishing guidance.

### Verified

- All supplied GLBs have valid GLB headers and parseable glTF metadata.
- All 23 copied assets matched their source SHA-256 hashes.
- Four HTML pages, both JavaScript files, local references, duplicate IDs, image alternative text,
  new-tab safety, five model mappings, eight preview mappings, diff whitespace, and local HTTP
  delivery passed.

### Limitation

- Automated visual click-through is unavailable because the local in-app browser runtime has a
  version mismatch. The expanded rails and multi-model switching require one final manual check;
  Chris previously confirmed the responsive site works on his phone.

## 2026-08-29 — Publication Readiness And 3D Loading Recovery

### Fixed

- Corrected the BantayGabi viewer loading state that could leave the interface at 100% without
  revealing the model.
- Kept the active viewer rendered but transparent during loading so its final load event can finish.
- Added a 45-second timeout that returns to the poster and enables a clear retry action.
- Allowed a failed external viewer-script request to be tried again.
- Changed web-ready GLB, MP4, and WebM handling from Git LFS to normal Git storage because GitHub
  Pages cannot serve LFS objects.

### Changed

- Rewrote highlighted homepage, BantayGabi, model-library, and Minecraft text around Chris's work
  and what visitors can explore.
- Simplified Minecraft server facts into visitor-friendly installed-content and capacity labels,
  highlighted the NeoForge environment's automation focus, and clarified its archived status.
- Documented why client-side encryption and `.gltf`/`.bin` splitting do not provide copy protection
  for a publicly viewable 3D model, and retained the simpler GLB preview approach.
- Removed public implementation-stage wording about approved assets, prepared video support,
  placeholder media, reusable viewer plumbing, and page-layout rationale.
- Updated publication, architecture, status, style, walkthrough, and tracking documentation.

### Verified

- JavaScript syntax, CSS brace balance, duplicate IDs, image alternative text, new-tab safety,
  local asset references, loading/retry invariants, Git attributes, diff whitespace, and local HTTP
  delivery passed.
- The 7,496,004-byte GLB is served successfully through the local HTTP preview.

### Limitation

- Automated browser click-through remains unavailable because the bundled browser controller is
  missing a local runtime file. Chris reported that the site works on his phone; the final remaining
  check is against the hosted GitHub Pages URL after publication.

## 2026-08-29 — Game Repository Review And Media Upgrade

### Added

- Read-only onboarding report comparing the BantayGabi and Kumpuni Unity repositories.
- Detailed approved plan for a mixed image/video overview carousel and multi-model library.
- Beginner walkthrough for preparing permission-safe screenshots, videos, posters, and web models.
- BantayGabi mixed-media overview carousel using two approved existing images.
- Video-ready player state that leaves video files unloaded until selected and pauses hidden video.
- Scalable model-selection card and model-specific viewer, render, description, and fact fields.
- Phone testing instructions using the computer's local Wi-Fi address.

### Changed

- Moved all gameplay-context media out of the dedicated model library.
- Added a semi-transparent left preview rail on desktop and horizontal rail on tablets/phones.
- Updated the current model library to use one reusable viewer for future selectable models.

### Documented

- Unity versions, packages, scenes, Build Settings, source structure, test evidence, deployment
  gaps, Git differences, documentation drift, and public-asset risks.
- Desktop semi-transparent left thumbnail rail, mobile horizontal rail, complete-media display,
  manual controls, click-to-load video, and no-autoplay requirements.
- Honest Kumpuni positioning as an experimental systems prototype rather than a playable game.

### Limitations

- Neither Unity project was opened or modified, and historical test counts were not re-run.
- No gameplay video or additional model was invented; those public assets are still required.
- Automated visual browser testing remains unavailable because the bundled local browser runtime is
  incomplete; static, HTTP, and manual QA guidance are provided.
- Public use of game assets remains subject to ownership, collaborator permission, privacy, spoiler,
  and third-party license review.

## 2026-08-29 — Project Detail Pages And First 3D Showcase

### Added

- Dedicated BantayGabi project page with real media, contribution details, and development notes.
- Click-to-load 3D gate showcase using pinned Google `<model-viewer>` 4.3.1.
- Dedicated Minecraft server administration case study with three privacy-safe screenshots.
- Responsive project galleries, server-profile cards, accessible controls, loading feedback, and failure guidance.
- Beginner walkthrough for previewing, replacing, and safely publishing project media.
- Dedicated BantayGabi 3D model-library page with one reusable viewer and verified model facts.
- Reusable click, keyboard, and touch explanations for selected technical terms across the portfolio.

### Changed

- Homepage project cards now use real media and link to their internal detail pages.
- Project statuses now distinguish active development from an archived, documented case study.
- Architecture, status, asset register, 3D plan, README, and Git binary-image handling updated.
- Moved the full interactive showcase off the BantayGabi overview; the overview now uses a lightweight poster and model-library link.

### Fixed

- Selecting the BantayGabi Game Preview now explicitly hides the already-loaded custom 3D viewer.
- Added a keyboard-accessible **Close 3D** control that returns to the poster and reuses the loaded model when reopened.

### Limitations

- The current BantayGabi GLB remains approximately 7.5 MB and needs the planned 1K texture optimization.
- The 3D viewer library requires an internet connection and the model should be tested through local HTTP.
- Automated visual browser testing is not configured; manual phone and browser review remains recommended.
- The model library currently contains one approved asset; the whole-environment tour remains deferred.

## 2026-08-28 — Professional Content And Asset Readiness

### Added

- Verified BantayGabi, Kumpuni, and Minecraft server administration project cards.
- Grouped game-development, technical-art, and development/system skills.
- Stronger About content plus compact professional experience and ICT education.
- Primary `ChrisNiel` GitHub links; LinkedIn remains intentionally omitted.
- Prepared folders and guidance for project images, backgrounds, 3D posters, and `.glb` models.
- Documentation map, current status, content roadmap, 3D feature plan, asset register, architecture guide, and UI style guide.

### Changed

- Replaced generic project-category placeholders with CV-backed public information.
- Documented `main-files/` as an unused, untracked scaffold from the deferred Flutter/ASP.NET architecture.

### Deferred

- `<model-viewer>` integration until one optimized model and poster image are available.
- Real project media, GitHub Pages publication, and automated browser checks.

## 2026-08-28 — Initial Static Portfolio

### Added

- Responsive single-page portfolio for Blender 3D, Unity, and software work.
- Desktop side navigation and a mobile-friendly top navigation based on the draft layout sketches.
- Accessible mobile navigation, theme selection, skip link, and semantic page sections.
- Approved public portfolio email and direct email action in the contact section.
- Beginner-friendly setup and customization walkthrough.
- Root-level AI agent instructions and task-continuity documentation.

### Changed

- Selected a dependency-free HTML, CSS, and JavaScript architecture.
- Narrowed Git LFS rules to large creative source and media formats.
- Expanded repository ignore rules and project documentation.
- Reclassified the earlier Flutter, ASP.NET, and Hugging Face proposal as deferred research.

### Deferred

- Real project content and approved public social-profile links.
- Backend, database, authentication, admin uploads, saved messages, and persistent analytics.
