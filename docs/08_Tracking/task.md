# Task Continuity — Static Portfolio

## Current Delivery Status

**Published version is live; the committed gallery motion is stable and hero orbit nodes are
implemented on `develop`.** Chris committed the verified gallery work at `4ef2d93`, then approved a
smaller decorative orbit pass before the separate scrollytelling experiment. Live review found a
small wiggle in the first checkpoint-based orbit movement; the path is now continuous and awaits
Chris's visual confirmation before the orbit pass is considered ready.

## Current Goal

Have Chris visually verify the corrected continuous, collision-safe hero orbits before the separate
scrollytelling experiment begins.

## In Progress

- Chris: verify the corrected orbit speed, visual weight, spacing at line crossings, and phone
  appearance.
- Keep Motion.dev and scrollytelling deferred as separate work.
- Do not commit, push, merge, or publish the experiment without Chris's separate approval.

## Completed

- Replaced the reported 16-checkpoint orbit wiggle with a continuous CSS ellipse that animates only
  `offset-distance`, while retaining static fallback positions for older browsers.
- Verified four continuous paths, no animated layout coordinates, at least 102px measured separation,
  containment and no overflow at five responsive widths, plus four static reduced-motion positions.
- Added two decorative nodes per existing hero ellipse with a primary/companion hierarchy.
- Used one 18-second period, opposite partners, and a 2.1-second cross-path phase to prevent visible
  collisions; after smoothing, measured approximately 147px desktop and 115px phone clearance
  through a complete cycle.
- Added four distinct static reduced-motion positions and kept every node non-focusable,
  pointer-transparent, and inside an `aria-hidden` parent.
- Verified no overflow or escaped node at 320px, 390px, 768px, 1024px, and 1440px widths.

- Added directional desktop still-image swaps and shorter vertical phone swaps to the BantayGabi
  game carousel and 3D render gallery, with caption feedback and preloading safety.
- Added latest-selection-wins cancellation so rapid clicks finish on the newest choice.
- Kept the live 3D viewer on crossfades for ready, open, and close changes; its canvas is never slid.
- Added one decorative, reduced-motion-aware active outline per preview group while retaining
  button semantics and the existing non-JavaScript active-border fallback.
- Verified desktop, 390px phone, rapid selection, static render, simulated viewer, reduced-motion,
  JavaScript, CSS, version, localhost, and Git-whitespace behavior.
- Preserved Chris's tuned 1000-millisecond section transition and 150-millisecond card stagger.

- Added dependency-free one-time section reveals, desktop/card staggering, a restrained hero-card
  settle, button gradient transitions, and pointer-only project/skill hover lift.
- Added readable 3D loading text with three decorative jumping dots and `aria-busy` state; success,
  error, retry, model selection, and reopening continue to clear the loading treatment.
- Replaced the BantayGabi library-promotion gate poster with the large residential-house render and
  gave the image and copy a paired desktop reveal that becomes a simple vertical reveal on smaller
  screens.
- Verified a true 390px emulated viewport has no horizontal overflow; reduced-motion mode leaves all
  content visible and creates no entrance-motion state.
- Recorded Chris's pinned-section/scrollytelling concept as a later desktop-first prototype rather
  than expanding the current animation pass.

- Published and verified `https://chrisniel.github.io/website-portfolio/`; the homepage, three detail
  pages, shared CSS/JavaScript, and a representative GLB responded successfully after deployment.
- Added the post-launch scaled-laptop/short-screen hero treatment without changing the existing
  desktop-sidebar or stacked tablet/phone architecture.
- Top-aligned the hero illustration, contained its sticky position to the desktop hero, and flattened
  the decorative cards so they make a weaker promise of click interaction.
- Replaced the ambiguous promotional-style project links with semantic, button-styled **View project
  details** and **View case study** actions; Kumpuni remains correctly unlinked.
- Added the sticky-header section-anchor offset for tablet and phone layouts.
- Passed controlled responsive captures, phone overflow metrics, sticky-boundary measurements,
  semantic/reference checks, JavaScript syntax, CSS balance, localhost HTTP, and Git whitespace.
- Completed the authorized final top-to-bottom review of all four public pages, shared CSS and
  JavaScript, public assets, model mappings, documentation, Git configuration, and working-tree diff.
- Proofread the visitor-facing copy and tightened the marketing, contact-privacy, and model workflow
  wording without inventing results or adding promotional buzzwords.
- Added the missing **Background** destination to all project-page navigation menus, restored focus
  to the mobile menu button after Escape closes the panel, and standardized safe new-tab link values.
- Corrected displayed GLB download sizes to decimal web sizes (7.50–8.82 MB) and reconciled the
  asset register, README, feature record, model guide, and walkthrough with the files on disk.
- Improved the light-theme project-tag contrast from 3.93:1 to 4.82:1 while preserving the approved
  palette; reviewed text combinations now meet the applicable WCAG AA target.
- Passed HTML semantics and local-reference checks, JavaScript syntax, CSS structure and contrast,
  model-header and metadata validation, asset registration, privacy/secret scans, responsive-menu
  geometry, 35-resource localhost HTTP checks, and Git whitespace checks.
- Visually reviewed all eight BantayGabi development captures and three Minecraft screenshots; no
  player names, chat, server addresses, private paths, credentials, or personal data are visible.
- Recorded Chris's successful desktop and physical-phone verification as the final interaction
  evidence; automated live-browser interaction remains unavailable but is no longer the only check.
- Added one desktop-only, randomized approved sidebar image per page load without a timer,
  dependency, persistent storage, or mobile image request.
- Added a keyboard-accessible **Portfolio focus** block and GitHub link consistently across all four
  public pages, with a short-window fallback that preserves access to the theme button.
- Corrected the intended brand spacing by separating the **CD** mark and Chris's name, while
  restoring the original navigation-link spacing.
- Inset the desktop **CD** and theme circles by `0.75rem` so they align with sidebar text instead of
  touching the viewport edge, without adding a second inset to tablet/phone layouts.
- Fixed the open mobile navigation width by anchoring it to the header's right edge with a
  viewport-safe width; all five links now remain readable at common phone widths.
- Verified matching `?v=20260830-6` shared assets on all four public pages, balanced CSS, valid
  JavaScript syntax, successful localhost responses, and clean Git diff whitespace. Automated
  browser interaction remains unavailable, so the phone-width menu click-through is Chris's manual
  check.
- Replaced the first bordered sidebar-card interpretation with artwork that begins beneath
  **Contact**, fills the remaining sidebar, fades according to the selected theme, and reaches the
  bottom behind the theme control.
- Made only the BantayGabi project-status card sticky within its desktop contribution section and
  returned it to static positioning when the layout stacks.
- Blended the 4:3 phone model stage with the 16:9 poster background without cropping the gate.
- Refined the model workflow heading, explanation, checklist, and on-demand wording for the
  five-asset library.
- Passed focused JavaScript, CSS, four-page consistency, local-reference, localhost HTTP, HTML ID,
  external-link, visual desktop/responsive capture, and Git whitespace checks for this polish pass.
- Separated model-card metadata from synchronized output fields so selecting a model no longer
  replaces all five cards with a fact such as the GLB file size.
- Corrected exact numbered render-attribute reads and restored all seven supplied rendered views.
- Added an explicit hidden-render layout rule so models never show empty render choices.
- Replaced the incomplete panel experiment with a discoverable desktop **Previews** edge tab that
  expands on pointer hover or keyboard focus and stays complete on touch/tablet/phone layouts.
- Added beginner guidance for the model-switching syntax and Blender face-orientation, normals,
  Solidify, and double-sided-material options.
- Passed JavaScript syntax, five-model/seven-render mapping, output-target, regression-pattern,
  hidden-state, localhost HTTP, and diff-whitespace checks for the stabilization delivery.
- Identified mixed browser caching from the screenshot evidence and versioned the shared stylesheet
  and JavaScript consistently across all four public pages.
- Confirmed all four pages request matching version values and that the corrected versioned assets
  return HTTP 200 through the running localhost server.
- Replaced the clipped full panel with a width-based translucent desktop bar, hid collapsed
  thumbnail contents, and synchronized the full-width caption text with the panel state.
- Aligned four stale visitor-facing phrases across the homepage, BantayGabi overview metadata and
  library callout, and Minecraft return card.
- Completed the full local code, copy, responsive-rule, asset, privacy, security, Git, and HTTP
  review with no blocking automated finding; the remaining limitation is visual interaction QA.
- Visually checked fresh headless Edge captures at 1440px and a 500px responsive layout; the
  collapsed bar is seamless and the complete responsive rail remains readable below the media.
- Repository onboarding and Git inspection.
- Decision to use a basic static website without a backend.
- Initial implementation plan and acceptance criteria.
- Initial static page, responsive navigation, theme selection, and project-category cards.
- Repository rules, configuration, README, walkthrough, and changelog updates.
- Draft homepage and model-showcase sketches incorporated as layout references.
- Dependency-free HTTP, JavaScript syntax, CSS structure, asset-reference, ID, anchor, and secret-pattern checks.
- Initial branch standardized as `main` and reviewed files prepared for the first commit.
- CV reviewed as private source material; only the explicitly approved portfolio email was selected for publication.
- Approved CV-backed projects, skills, About content, all compact professional roles, and ICT education added.
- Primary `ChrisNiel` GitHub profile and Minecraft case-study link added; LinkedIn omitted.
- Asset folders and practical documentation created for project media and the future 3D showcase.
- `main-files/` confirmed as unused and untracked by the active static website.
- HTTP delivery, JavaScript syntax, CSS structure, internal navigation, GitHub link safety, privacy, documentation presence, and deferred-3D checks passed.
- Approved BantayGabi and Minecraft project detail pages implemented and linked from the homepage.
- Landscape BantayGabi gallery and click-to-load `<model-viewer>` 4.3.1 integration added.
- Minecraft case-study gallery populated with three privacy-safe screenshots from the documented repository.
- Real homepage project media and accurate “In development” / “Archived case study” statuses added.
- Responsive layout, accessible gallery controls, 3D loading/error states, and beginner walkthrough delivered.
- JavaScript syntax, local-asset resolution, duplicate-ID, image-alt, new-tab safety, secret-pattern, Git attribute, CSS structure, HTTP response, and diff-whitespace checks passed.
- Fixed the loaded 3D viewer remaining visible over the Game Preview by adding an explicit custom-viewer visibility state.
- Added a **Close 3D** control that restores the poster and reopens the already-loaded viewer without creating another model element.
- HTTP, JavaScript syntax, close-control, visibility-state, and diff-whitespace checks passed; automated browser click-through remains unavailable because the local browser-control runtime is incomplete.
- Dedicated `projects/bantaygabi-models.html` page added with the approved gate model, reference image, verified model facts, and one reusable viewer stage.
- BantayGabi overview changed to a lightweight poster and model-library handoff with no GLB reference.
- Reusable technical-term popover added for 16 selected definitions across the homepage and project pages.
- Model library, term-definition coverage, JavaScript syntax, HTML ID, local-reference, HTTP response, single-viewer, and diff-whitespace checks passed.
- Read-only onboarding review completed for `bantayGabi-Official` and `Kumpuni-GraveyardTech`.
- Git differences, Unity versions, packages, scenes, Build Settings, source areas, tests, deployment
  clues, documentation drift, privacy risks, and public-media candidates documented.
- Approved mixed image/video overview carousel documented with a desktop left thumbnail rail,
  mobile bottom rail, complete-media display, manual controls, lazy video loading, and no autoplay.
- Approved model-library redesign documented with model-selection cards, one reusable viewer,
  one to three model-specific angle images, synchronized facts, and no gameplay media.
- Beginner game-media preparation guide added.
- BantayGabi overview carousel implemented with two approved images, manual previous/next controls,
  semi-transparent desktop navigation, and a phone-friendly horizontal rail.
- Video behavior prepared without publishing a fake file: no eager source, no autoplay, native
  controls, poster support, and automatic pause when another preview is selected.
- Model library gameplay context removed and replaced with a scalable model selector, one reusable
  viewer, model-specific front render, description, and technical facts.
- Shared carousel/model styles and JavaScript prepared for a future Kumpuni detail page without
  publishing an empty page now.
- JavaScript syntax, HTML references, duplicate IDs, image alternative text, new-tab safety,
  feature invariants, CSS balance, diff whitespace, localhost HTTP, asset HTTP, and LAN HTTP checks
  passed.
- Phone testing walkthrough added. Automated visual browser control remains unavailable because the
  bundled local browser runtime is incomplete, so physical-phone appearance remains a manual check.
- Corrected the 3D viewer loading state so the active element remains renderable until its load
  event, with a 45-second timeout and recoverable retry state.
- Rewrote highlighted public copy into visitor-focused project descriptions.
- Corrected Git attributes so GitHub Pages receives the real GLB and future web-ready MP4/WebM files
  instead of unsupported Git LFS pointers.
- JavaScript syntax, CSS structure, HTML IDs, image alternative text, new-tab safety, local
  references, wording checks, Git attributes, diff whitespace, and localhost HTTP delivery passed.
- Minecraft server facts simplified to visitor-friendly content/capacity wording, the NeoForge
  automation focus added, and the archived-private status note clarified.
- Public-model protection guidance documented: keep source-quality files private, publish only a
  reduced GLB preview, and do not treat browser-side encryption or `.gltf`/`.bin` splitting as copy
  protection.
- Four-page HTML validation, JavaScript syntax, edited-file whitespace, Git diff-whitespace, and
  localhost HTTP checks passed for the Minecraft copy delivery.
- Connected `origin` to `https://github.com/chrisniel/website-portfolio.git` and confirmed the empty
  remote repository is reachable.
- Added eight supplied WebP game captures, four additional GLBs, and eleven model renders; all 23
  copied files matched their source hashes.
- Expanded the 3D library to five selectable models with synchronized facts and up to three rendered
  views while preserving one click-to-load viewer.
- Corrected Chris's official role and current company name to **Electrician · Part-time** at **Criz
  Iron Works and Construction Services**.
- Completed the final code/security review with no blocking findings; 32 public HTTP resources and
  all release invariants passed.

## Future Backlog — Not Part Of The Completed Delivery

These are optional later tasks, not unfinished work from the current delivery.

- Reduce the BantayGabi models' embedded textures to the planned 1K size and re-test them.
- Add Kumpuni media and a detail page when approved assets exist.
- Add the first approved BantayGabi gameplay video and poster to the prepared carousel.
- Replace the supplied development captures with HUD-free versions if cleaner screenshots are
  recorded later; the current captures are acceptable for launch.
- Prototype the approved pinned-section/scrollytelling idea as a separate desktop-first experiment,
  with normal document flow on phones, short screens, and reduced-motion setups.
- Consider a slow, reduced-motion-aware timed sidebar crossfade after publication; the first release
  intentionally keeps one image stable until the next page load.

## Deferred

- Admin dashboard, authentication, backend, database, saved contact messages, and persistent analytics.
- Whole-environment interactive web tour until a deliberately optimized, permission-cleared web
  export exists; the Unity scene itself cannot be published directly.
