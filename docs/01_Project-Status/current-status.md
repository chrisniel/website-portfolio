# Current Project Status

Updated: 2026-08-31

## Working

- Responsive single-page static portfolio.
- Public GitHub Pages deployment at `https://chrisniel.github.io/website-portfolio/`.
- Desktop side navigation and mobile menu.
- Light and dark themes.
- Real CV-backed project, skill, About, experience, and education content.
- Approved public email and primary GitHub link.
- Local preview without a build step.
- Concise BantayGabi overview with real media and a dedicated click-to-load model library.
- Minecraft server administration detail page with three privacy-safe screenshots.
- Responsive image galleries on both project pages.
- Click, keyboard, and touch explanations for selected technical terms.
- Manual BantayGabi carousel with eight compressed environment captures and prepared click-to-load
  video support.
- Semi-transparent desktop preview rail that becomes a horizontal rail on tablets and phones.
- Five-model selection layout with one reusable 3D viewer, one to three model-specific rendered
  views, descriptions, and facts.
- Recoverable model loading that keeps the viewer renderable until ready and restores a retry
  option after a stalled or failed request.
- Web-ready GLB, MP4, and WebM files configured for normal Git storage so GitHub Pages can serve
  them directly.

## Ready For More Content

- Additional approved decorative background images when they add useful variety.
- Additional optimized project screenshots, posters, and models when they add new information.
- Kumpuni media when it becomes available.
- Approved BantayGabi gameplay/environment video and its poster image.

## Not Implemented

- Custom domain.
- Analytics, backend, database, contact form, authentication, or admin dashboard.

## Post-Publication Notes

- The public site is built from `main` and `/(root)` through GitHub Pages. Future pushes to `main`
  publish the next approved version automatically.
- The five GLBs can be published in their current click-to-load form; a later texture pass remains a
  recommended performance improvement rather than a launch blocker.
- The game repositories have been inspected. Public media still requires per-asset ownership,
  spoiler, privacy, and optimization approval.
- Kumpuni has no scenes registered in Unity Build Settings and its latest interaction corrections
  still require itemized developer verification, so it should remain an experimental prototype.
- The whole-environment interactive tour still requires a separate optimized web export; a Unity
  scene cannot be published directly.
- Git remote `origin` is configured for `https://github.com/chrisniel/website-portfolio.git`.

## Latest Delivery

- Added a responsive hero adjustment for scaled or short laptop viewports, top-aligned the desktop
  illustration, and kept its sticky movement contained to the hero section.
- Changed homepage project destinations into clear internal-navigation buttons and reduced the
  control-like appearance of the decorative **Forms / Play / Build** cards.
- Verified the published URL and then checked the local feedback revision through controlled
  desktop, scaled-laptop, short-laptop, and emulated phone captures.
- Added one stable randomized desktop-sidebar image, a compact portfolio-focus block, and consistent
  navigation across the homepage and all three detail pages.
- Corrected the phone-menu width, aligned the desktop brand and theme controls, and returned keyboard
  focus to the menu button when Escape closes the mobile navigation.
- Chris completed the final desktop and phone interaction check and confirmed the current site is
  working correctly in his browser.
- The 3D viewer loading regression was corrected and a 45-second recovery timeout was added.
- Public wording now focuses on Chris's work and the visitor experience instead of internal
  implementation notes.
- GitHub Pages asset handling was corrected so the public GLBs are not stored through Git LFS.
- Eight supplied WebP game captures and four additional house GLBs were integrated into the public
  BantayGabi pages.
- Headless Edge viewport emulation now supplements static, structural, syntax, privacy, localhost,
  and Chris's physical-device checks; external CDN and final hosted behavior are still rechecked
  after each approved publication.
