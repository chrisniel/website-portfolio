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

## Dependency-Free Animation Experiment — 2026-08-31

### Goal

Test a restrained motion layer on the `develop` branch without changing the published `main`
branch, the static architecture, or the meaning and availability of any portfolio content.

### Intended Result

- Page sections reveal once with a short fade and small vertical movement.
- Homepage project and skill cards reveal with a brief stagger and receive a small pointer-only
  hover lift.
- The decorative **Forms / Play / Build** cards settle into their existing positions when the hero
  loads; they do not follow the visitor through the whole page.
- Primary and secondary actions receive a restrained color-gradient transition without moving the
  clickable target.
- The 3D model status shows three decorative jumping dots while the viewer script or model is
  loading, while retaining readable live-region text and percentage progress.
- The BantayGabi library promotion reveals its image before its copy and uses the approved large
  residential-house render as the visual.

### Affected Files

- `assets/css/styles.css`
- `assets/js/main.js`
- `index.html`
- `projects/bantaygabi.html`
- `projects/bantaygabi-models.html`
- `projects/minecraft-server-administration.html`
- Closest tracking, walkthrough, and changelog documentation.

### Acceptance Criteria

- No animation library, framework, build step, backend, or paid service is introduced.
- Content remains visible and usable when JavaScript or `IntersectionObserver` is unavailable.
- `prefers-reduced-motion: reduce` removes the entrance, hover-movement, and loading-dot motion.
- Mobile uses shorter reveal distances and does not depend on hover.
- Scroll-linked hero pinning remains deferred.
- Loading, success, timeout, error, model switching, closing, and reopening keep their existing text
  and behavior.
- All four pages request the same updated shared-asset version.
- JavaScript syntax, CSS structure, local references, responsive layout, localhost delivery, and Git
  whitespace checks pass before Chris performs the final visual test.

### Deferred Follow-Up

- Prototype a desktop-only pinned-section or “scrollytelling” transition in which a major section
  remains in the viewport while its inner content exits and the next differently colored section
  becomes the focus.
- Test the idea on one Hero → Projects transition before considering Projects → Skills; keep normal
  document scrolling on phones, short laptop screens, and reduced-motion configurations.
- Preserve section-link navigation and avoid creating a scroll trap or applying the effect to every
  part of the portfolio.

---

## Publication Readiness Fix And Editorial Pass — 2026-08-29

### Goal

Prepare the current static portfolio for an initial public release by fixing the BantayGabi 3D
viewer that can remain at 100% loading and replacing implementation-stage wording with concise,
visitor-focused project descriptions.

### Intended Result

- The selected 3D model remains renderable while loading, then replaces its poster when ready.
- A slow or stalled model load returns to the poster with a clear retry option after a timeout.
- Closing, reopening, and switching to a render image continue to work without stacking viewers.
- Public copy explains Chris's work and what visitors can explore instead of discussing unfinished
  website plumbing or internal approval steps.
- The site remains plain HTML, CSS, and JavaScript with no new dependency or paid service.

### Affected Files

- `assets/js/main.js`
- `assets/css/styles.css`
- `.gitattributes`
- `index.html`
- `projects/bantaygabi.html`
- `projects/bantaygabi-models.html`
- `projects/minecraft-server-administration.html`
- Closest tracking, walkthrough, status, and changelog documentation.

### Acceptance Criteria

- Loading a model never applies `display: none` to the active viewer before its `load` event.
- Successful loading reveals the model and enables **Close 3D**.
- A stalled load times out, removes the unusable viewer, preserves the poster, and enables retry.
- Viewer errors also preserve a useful poster and retry state.
- No highlighted public section uses internal wording such as “approved assets,” “prepared video
  support,” or “without crowding the project story.”
- Existing keyboard, touch, responsive, theme, carousel, and image-switching behavior remains intact.
- Static validation and local HTTP checks pass; the interactive viewer receives a documented manual
  browser and phone verification step because automated browser control is unavailable.
- Web-ready GLB, MP4, and WebM files use normal Git storage so GitHub Pages serves the real files
  instead of unsupported Git LFS pointers; oversized future media must use separate hosting.

### Publication Recommendation

Publish after this focused fix, the automated checks, and one final desktop/phone model test. The
portfolio does not need every future video or model before its first release; those are normal
content updates for later.

---

## Approved Project Detail Pages — 2026-08-29

### Goal

Add simple static detail pages for BantayGabi and the Minecraft Server Administration Portfolio,
using approved project media and the existing visual design.

### Affected Files

- `index.html`: add internal links and accurate project statuses.
- `projects/bantaygabi.html`: add the first project detail page and click-to-load 3D showcase.
- `projects/minecraft-server-administration.html`: add the documented server case study.
- `assets/css/styles.css`: add shared detail-page, gallery, and responsive styles.
- `assets/js/main.js`: support the optional 3D viewer and image gallery controls.
- Approved project assets and the closest related documentation.

### Prerequisites And Decisions

- Keep plain HTML, CSS, and JavaScript; do not introduce a framework or backend.
- Pin Google `<model-viewer>` version `4.3.1` and load it only after visitor interaction.
- Serve locally over HTTP when testing 3D; browsers may restrict models when pages use `file://`.
- Treat all portfolio pages, screenshots, and models as public files.
- Present active game projects as “In development” and Minecraft as an archived, documented case study.

### Acceptance Criteria

- Homepage project cards link to the correct internal detail pages.
- The BantayGabi page displays a landscape poster before the model is requested.
- The GLB is not downloaded until the visitor selects the load control.
- Loading, ready, and failure messages are understandable.
- The model has a written fallback description and the page remains useful without JavaScript/WebGL.
- The Minecraft page accurately summarizes the three documented server environments and uses privacy-safe media.
- Pages remain readable and operable at 320px, 390–430px, 768px, 1024px, and desktop widths.
- Navigation, theme selection, focus indicators, and reduced-motion behavior remain consistent.
- Documentation, asset register, task continuity, and changelog are updated with the delivery.

---

## 3D Gallery State Fix — 2026-08-29

### Reported Problem

After the gate model loads, selecting **Game Preview** leaves the 3D viewer visually covering the
image. The viewer also has no direct close control.

### Intended Result

- Selecting any image thumbnail always hides the loaded custom viewer and displays that image.
- A keyboard-accessible **Close 3D** button returns to the gate poster.
- Reopening the model reuses the already-loaded viewer without downloading or creating another one.
- Loading, error, thumbnail, theme, and mobile behaviors remain unchanged.

### Affected Files

- `projects/bantaygabi.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- Related task, walkthrough, and changelog documentation.

---

## Dedicated Model Library And Technical Explanations — 2026-08-29

### Goal

Keep the BantayGabi overview concise while adding a dedicated, reusable 3D model-library page and
short explanations for unfamiliar technical terms across the public portfolio.

### Approved Scope

- Add `projects/bantaygabi-models.html` using the existing page shell and one reusable viewer.
- Move the full interactive gate experience from the BantayGabi overview into the model library.
- Keep a compact poster and clear link on the overview page.
- Add reusable definitions for selected technical terms such as Unity, ShaderLab, GLB, Forge,
  NeoForge, PaperMC, Git, GitHub, and Git LFS.
- Open definitions through semantic buttons that work with mouse, keyboard, and touch.
- Keep the proposed whole-environment tour deferred until Chris supplies the game repository path.

### Affected Files

- `index.html`
- `projects/bantaygabi.html`
- `projects/bantaygabi-models.html`
- `projects/minecraft-server-administration.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/js/term-definitions.js`
- Related README, architecture, walkthrough, task, feature-plan, and changelog documentation.

### Acceptance Criteria

- The BantayGabi overview links clearly to the dedicated model library without loading the GLB.
- The model library shows the poster first and downloads the GLB only after visitor interaction.
- Only one `<model-viewer>` element can exist in the model-library stage at a time.
- Image switching, close, reopen, loading, and error states remain understandable.
- Highlighted technical terms expose a short definition through click, Enter, or Space.
- The definition popover closes through Escape, outside selection, or selecting the term again.
- Popovers fit within small screens and do not require hover.
- Pages remain readable at phone, tablet, laptop, and desktop widths.
- No environment scene, gameplay code, backend, framework, paid service, or new public private data is added.

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

---

## Approved Repository-Informed Media And Model Upgrade — 2026-08-29

Status: **Approved and implemented on 2026-08-29. Real video, additional models, and physical-phone
review remain content/QA follow-ups.**

### Goal

Improve the BantayGabi overview with a fast mixed image/video preview and restructure the dedicated
model page around selectable models, one reusable viewer, one to three angle images, and accurate
technical details. Keep the portfolio as plain static HTML, CSS, and JavaScript.

### Evidence And Approved Direction

- Both game repositories were inspected read-only.
- BantayGabi has suitable environment, graphics, testing, and gameplay material, but public captures
  and ownership approval are still required.
- Kumpuni is an experimental repair-systems prototype and should not be presented as playable.
- Chris approved keeping game media on the overview and model media on the model-library page.
- Chris approved the hand-drawn model-page direction: large preview, model/angle choices, details,
  and additional model cards.
- Chris requested a quick mixed-media slider where all available images/videos remain visible in a
  small or semi-transparent navigation area.

### Architecture Decision

Use two related but separate components:

1. **Overview media carousel** — images and videos only.
2. **Model library** — selectable model cards, one click-to-load 3D viewer, model-specific angle
   images, and model facts.

Do not place gameplay video inside the model library. Do not place interactive 3D models inside the
overview carousel. This keeps each page understandable and prevents unnecessary downloads.

### Feature A — BantayGabi Mixed Image/Video Preview

#### Desktop Layout

- Use one large 16:9 media stage.
- Show the complete selected image or video with `object-fit: contain`; letterboxing is acceptable
  when the source aspect ratio differs.
- Place a compact vertical thumbnail rail inside the left side of the stage.
- Give the rail a dark semi-transparent background, border, and blur only when browser support is
  available.
- Keep several thumbnails visible at once and allow the rail to scroll when more items exist.
- Provide visible previous/next controls for quick movement without requiring precise scrolling.

#### Phone And Narrow-Tablet Layout

- Move the thumbnail rail below the stage.
- Use native horizontal scrolling with comfortable tap targets and scroll snapping.
- Keep previous/next controls available.
- Do not depend on hover or a custom swipe library.

#### Supported Media States

Each entry must declare one type:

- `image`
- `video`

The first image loads normally. Other images use browser lazy loading. Video behavior:

- Show a poster first.
- Do not autoplay.
- Do not loop by default.
- Create or assign the video source only when the visitor selects that entry.
- Use native browser controls.
- Pause the video when another entry is selected.
- Preserve the paused time while the visitor remains on the page.
- Provide a written fallback if the browser cannot play the file.

#### Interaction And Accessibility

- Every thumbnail is a real `<button>` with an understandable accessible label.
- Mark the selected item with `aria-pressed="true"` and a visible active border.
- Keep selection available through click, tap, `Tab`, `Enter`, and `Space`.
- Previous/next buttons update the same selected state.
- When the thumbnail rail has keyboard focus, optional Left/Right or Up/Down arrow behavior may move
  between items, but normal `Tab` navigation must still work.
- Announce the selected title and media type through a small `aria-live="polite"` status.
- Respect `prefers-reduced-motion`; no sliding animation is required for those visitors.
- No automatic carousel movement.

#### Initial Content

The component may be implemented with the current temporary poster plus labeled placeholders, but
the preferred first public set is:

1. BantayGabi environment poster.
2. Short environment/gameplay video and matching poster.
3. Lighting/weather or material image.
4. Optional optimization comparison.

No placeholder should imply that unavailable gameplay is already public.

### Feature B — Dedicated Multi-Model Library

#### Page Order

1. Compact model-library introduction.
2. Model-selection cards.
3. One large reusable model viewer.
4. One to three selected-model angle thumbnails.
5. Selected-model description and technical facts.
6. Optional deeper workflow/optimization note.

This follows Chris's `ModelsPreviewSamplePage2.png` sketch while retaining the existing site header,
theme, and accessible controls.

#### Model Selector

- Use compact visual cards resembling the “cube” choices in the sketch.
- Each card contains a poster, model name, short category, and selected state.
- Hover may lift or highlight a card on pointer devices.
- Click, tap, and keyboard activation are the real selection methods.
- Selecting a model updates the stage, angle images, description, and facts without opening a new
  page.
- On phones, model cards become a horizontally scrollable row.

#### Reusable Viewer Rules

- Keep only one `<model-viewer>` element in the page.
- Continue loading the `<model-viewer>` library only after visitor interaction.
- Do not download a model merely because its selection card is visible.
- When a new model is selected, return to its poster and require an explicit load action unless its
  GLB was already loaded during the same tab session.
- Preserve the existing loading progress, failure message, Close 3D control, and poster fallback.
- Do not let an earlier loaded model cover a later image or model poster.
- Dispose of or replace old model state cleanly instead of creating stacked viewers.

#### Model-Specific Preview Images

- Each model has one to three angle images directly below the viewer.
- Selecting an angle temporarily replaces/hides the 3D viewer.
- Returning to the 3D choice reuses an already loaded model when possible.
- Images use `object-fit: contain` so the complete model remains visible.
- The current gameplay-context thumbnail is removed from the model page.

#### Initial And Future Models

- Initial entry: approved subdivision gate.
- Recommended next candidates after ownership and export review:
  - Guard post
  - Street light
  - Subdivision/inside-fence kit
- Do not use large `ModelsOld/characters/` assets as the next entries.
- Kumpuni's smartphone/tool prototypes require explicit publication approval before export.

### Feature C — Environment Link

- Add an `Explore Game Environment` action near the overview media only after a destination exists.
- The simplest first destination is a section on the BantayGabi overview containing environment
  images/video and a plain-language contribution summary.
- A dedicated `bantaygabi-environment.html` page is optional and should be created only if enough
  approved material exists to justify it.
- A whole-environment interactive web tour remains deferred. Unity scenes cannot be placed directly
  in a static webpage; a separate optimized GLB export would be required.

### Feature D — Kumpuni Presentation

- Keep the homepage card honest: experimental systems prototype, in development.
- Do not add a playable link.
- Create a detail page only after at least one approved clean screenshot exists.
- The first detail page should focus on the repair-workbench interaction architecture and clearly
  label all footage as prototype material.
- Do not copy story documents, code, raw source assets, or proprietary models into the portfolio.

### Prerequisites Before Implementation

- Chris reviews this plan.
- At least one approved BantayGabi video and its poster are available, or Chris accepts an image-only
  first implementation with video support prepared but unused.
- Each public media item has confirmed ownership/permission.
- Every new model has a web-ready GLB, poster, one to three angle images, and verified facts.
- Video files are compressed for web delivery; a practical target is a 15–45 second H.264 MP4 of
  roughly 10–25 MB where quality permits.
- Large media hosting is discussed before any file approaches normal repository-hosting limits.

### Expected Affected Files

- `projects/bantaygabi.html`
- `projects/bantaygabi-models.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/projects/` and `assets/images/posters/`
- `assets/videos/projects/` if an approved video is supplied
- `assets/models/` for each approved optimized GLB
- `docs/03_Feature-Plans/3d-showcase-plan.md`
- `docs/04_Source-Design-Documents/asset-register.md`
- `docs/05_System-Documentation/static-site-architecture.md`
- `docs/06_UI-Design/style-guide.md`
- `docs/07_Walkthrough/project-detail-pages-guide.md`
- `docs/08_Tracking/task.md`
- `CHANGELOG.md`

### Implementation Sequence

1. Confirm and register public media ownership.
2. Add the overview carousel's semantic HTML using the current poster as the safe initial item.
3. Add mixed image/video selection state, previous/next controls, video pause behavior, and status
   announcements in `main.js`.
4. Add desktop left-rail and mobile bottom-rail styles with reduced-motion handling.
5. Remove Game Context from the model library.
6. Convert the model catalog into a selectable model control connected to the single viewer.
7. Add model-specific angle choices and synchronized facts.
8. Add real media files only after optimization and permission checks.
9. Run automated static checks and the manual verification route below.
10. Update the asset register, architecture, walkthrough, task tracker, and changelog.

### Acceptance Criteria

#### Overview Carousel

- The complete selected image or video is visible without cropping important content.
- The thumbnail rail is semi-transparent and placed on the left at desktop sizes.
- The rail moves below the media and scrolls horizontally on phones.
- Previous/next buttons and thumbnail buttons select the same media state.
- No media changes automatically.
- Videos do not autoplay and are paused when hidden.
- A video file is not requested before its entry is selected.
- The carousel works with mouse, keyboard, and touch.
- The selected entry is visually and programmatically identifiable.
- Failure to load a video leaves a useful poster and message.

#### Model Library

- Game preview images and videos do not appear in the model library.
- Model cards update one reusable viewer rather than creating multiple viewers.
- One to three angle images can replace and return to the viewer safely.
- The loaded viewer never remains on top of a newly selected image.
- Each model's title, description, facts, poster, GLB, and angle images stay synchronized.
- Model files remain click-to-load.
- The page remains useful without JavaScript, WebGL, or the external viewer library.

#### Responsive And Accessible Behavior

- No page-level horizontal overflow at 320px, 390–430px, 768px, 1024px, and desktop widths.
- Buttons have visible focus indicators and at least comfortable touch-target sizing.
- Native page scrolling remains available while interacting with rails or the 3D viewer.
- Reduced-motion preference removes nonessential animated transitions.
- Alternative text describes image content rather than repeating filenames.
- Video captions are supplied if future videos contain important spoken content.

#### Performance And Privacy

- Initial overview load does not include GLB or video downloads.
- Images use appropriate dimensions, lazy loading, and WebP where practical.
- No secret, private path, private contact detail, debug log, collaborator-only material, or
  unapproved third-party asset is published.
- Every added asset has a current asset-register entry.

### Verification Plan

Automated safe checks:

- JavaScript syntax.
- Duplicate HTML IDs.
- Missing local `src`, `href`, `poster`, and model references.
- Required video controls and poster attributes.
- Single-viewer invariant.
- Image alternative text.
- New-tab link safety.
- Secret-pattern scan of public text files.
- CSS brace/structure check.
- `git diff --check`.
- Local HTTP response checks.

Manual checks for Chris:

1. Select every thumbnail on desktop and phone widths.
2. Start a video, select another preview, and confirm the hidden video pauses.
3. Use previous/next controls at the first and last items.
4. Navigate the complete carousel and model selector using only the keyboard.
5. Load, close, reopen, switch away from, and return to each 3D model.
6. Test with the browser offline after the page loads to confirm useful fallbacks remain.
7. Check that no private or spoiler-heavy information appears in media.

### Non-Goals

- No framework, package manager, backend, database, authentication, or paid service.
- No automatic slideshow.
- No direct Unity scene streaming.
- No public playable game build.
- No publication of raw FBX, source textures, game code, or repository documents.
- No Kumpuni page until public media is approved.

### Delivery Verification — 2026-08-29

Passed automated checks:

- JavaScript syntax for both public scripts.
- Local references across every HTML page.
- Duplicate HTML IDs.
- Image alternative-text presence.
- External new-tab safety using `noopener` or `noreferrer`.
- Video controls, `preload="none"`, no eager `src`, and pause-on-switch implementation.
- One model-showcase stage and no Game Context entry on the model page.
- CSS brace balance and `git diff --check`.
- HTTP 200 responses for the homepage, all project pages, current project image, GLB, JavaScript,
  and CSS.
- HTTP 200 response through the computer's LAN address while the server was bound to `0.0.0.0`.

Manual checks still required:

- Physical-phone layout, touch scrolling, and Windows Firewall connectivity.
- Visual desktop/tablet/phone review because the bundled in-app browser runtime is missing a local
  service file.
- Real video selection/pause behavior after an approved MP4 and poster are added.
- Multi-model switching after a second approved model exists.

## Minecraft Visitor-Copy Cleanup — 2026-08-29

### Intended Result

Make the Minecraft case study easier for non-technical visitors to scan while keeping its facts
accurate and its archived/private status clear.

### Affected Files

- `projects/minecraft-server-administration.html`
- `docs/07_Walkthrough/project-detail-pages-guide.md`
- `docs/08_Tracking/task.md`
- `CHANGELOG.md`

### Approved Changes

- Replace implementation-heavy labels such as “Inventory,” “JARs,” and “configured slots” with
  plain visitor-facing descriptions.
- Replace the screenshot-count fact with the NeoForge environment's practical focus.
- Rewrite the privacy callout as a concise archived-project status note.
- Keep the linked Minecraft documentation repository unchanged.

### Verification

- Confirm the updated facts and status text appear exactly once.
- Re-run HTML ID, local-reference, link-safety, diff-whitespace, and local HTTP checks.

Verification completed on 2026-08-29: all four HTML pages passed duplicate-ID, local-reference, and
new-tab safety checks; both JavaScript files passed syntax checks; edited files had no trailing
whitespace; `git diff --check` passed; and the updated Minecraft page returned HTTP 200 with the new
copy present and the replaced wording absent.

### Deferred Decisions

- Do not add client-side model encryption: it needs a separate security/experience decision and is
  not part of the Minecraft wording approval.
- Keep scroll-reveal motion as an optional post-publication enhancement; no dependency is approved.

## Final Pre-Publication Examination — 2026-08-29

### Intended Result

Connect the local project to Chris's confirmed portfolio repository and complete one final review of
the public experience before GitHub Pages is enabled.

### Affected Areas

- Git remote configuration for `https://github.com/chrisniel/website-portfolio.git`.
- All public HTML, CSS, JavaScript, images, posters, and 3D preview assets.
- Visitor-facing wording, navigation, accessibility, responsive behavior, privacy, and performance.
- Publication, walkthrough, tracking, and changelog documentation where findings require alignment.

### Supplied Asset Integration

Chris's ignored `temp.txt` identified `D:\OtherProjects\showcase-portfolio` as the approved source
folder for additional public previews. Read-only inspection confirmed:

- Four additional GLB house assets plus the already-published subdivision gate.
- Two rendered WebP views for each small/medium house, three for the large house, and two additional
  gate views.
- Eight 1920×1080 WebP game captures with no visible player names, addresses, chat, or credentials.

For the launch delivery:

- Copy only the web-ready GLBs and WebP images into the website; do not copy duplicate PNG captures.
- Replace the blurred temporary game image with the supplied WebP sequence.
- Present all five models in the existing horizontal selector and support up to three rendered views
  per selected model.
- Keep every GLB click-to-load and ensure switching models never downloads an unselected model.
- Record each published asset and remove obsolete temporary-asset wording from public copy and docs.

### Review Rules

- Treat the supplied posters, screenshots, and GLB as public portfolio previews; keep editable source
  projects and higher-quality source assets outside the website repository.
- Confirm that the five-model library and supplied rendered angles are complete for launch. Video
  remains a later content addition rather than a missing launch requirement.
- Remove or rewrite only wording that exposes internal planning, approval workflow, placeholder
  implementation details, or confusingly technical copy without helping a visitor.
- Do not introduce a framework, backend, paid service, encryption layer, or animation dependency.

### Verification Plan

- Inspect the complete Git diff and repository state.
- Scan all public text and source files for secrets, private paths, debug text, placeholders, and
  implementation-stage wording.
- Validate duplicate IDs, internal references, external-link safety, image alternative text, and
  JavaScript/CSS structure.
- Verify homepage, project pages, public images, poster, model, scripts, and stylesheet over HTTP.
- Exercise navigation, galleries, model load/close/reopen/image switching, theme, keyboard controls,
  and representative desktop/phone layouts when browser automation is available.
- Record blocking findings, optional later improvements, and the final publication recommendation.

### Review Result

**Code review: Approved with one manual verification comment. Security risk: Low in the reviewed
static-site scope. No critical, high, or medium findings remain.**

- `origin` is configured and the supplied repository is reachable with no remote branch content.
- Five GLBs have valid headers and parseable glTF metadata; each remains below GitHub's 100 MB
  per-file limit and outside Git LFS.
- Twenty-three copied GLB/WebP assets matched their source SHA-256 hashes.
- Eight game captures were visually inspected; they contain no player names, addresses, chat, or
  credentials. Their visible development HUD is part of the supplied capture and may be replaced by
  cleaner captures later, but it does not block publication.
- `temp.txt` and the replaced blurred poster remain ignored and will not enter the commit.
- The public email is intentional. Theme preference is the only browser-stored value; there is no
  form, backend, authentication, API, cookie, analytics, upload, or user-data flow.
- The pinned external `<model-viewer>` script is the only runtime dependency and is requested only
  after visitor interaction.
- JavaScript syntax, CSS balance, four-page IDs/references/anchors/alternative text/buttons/links,
  five model mappings, eight media mappings, GLB parsing, privacy patterns, Git attributes, diff
  whitespace, and 32 local HTTP resources passed.
- Automated visual click-through could not run because the local in-app browser components have a
  version mismatch. Before pushing, manually swipe the eight-image rail and switch/load at least two
  models on desktop or phone.

Publication recommendation: safe to commit now and push after the short manual interaction check.
After GitHub Pages is enabled, repeat the hosted checks documented in the project walkthrough.

## Model-Library Stabilization — 2026-08-30

### Intended Result

Repair the model selector and rendered-view controls found during Chris's manual testing, then make
the overview preview panel less obstructive on mouse-based desktop screens without hiding controls
from keyboard or touchscreen users.

### Affected Files

- `assets/js/main.js`
- `assets/css/styles.css`
- `projects/bantaygabi-models.html`
- `docs/07_Walkthrough/project-detail-pages-guide.md`
- `docs/08_Tracking/task.md`
- `CHANGELOG.md`

### Approved Changes

- Keep model-card source metadata separate from the text fields updated elsewhere on the page.
- Read numbered render attributes without relying on ambiguous `dataset` name conversion.
- Ensure unavailable render choices remain hidden even though gallery choices use a grid layout.
- On hover-capable desktop devices, collapse the left preview panel to a visible **Previews** edge
  tab and expand it when hovered or when one of its controls has keyboard focus.
- Keep the complete preview rail visible below the media at the existing tablet/phone breakpoint.
- Leave the model's see-through underside as a later model/material export improvement.
- Add one shared version query to the CSS and JavaScript references on every public page so a
  browser cannot combine the updated stylesheet with an older cached script.
- Do not add a framework, dependency, backend, or paid service.

### Acceptance Checks

- Switching among all five model cards never replaces or removes their card contents.
- The selected model's poster, title, description, facts, and every supplied render stay aligned.
- Models with one render show one render choice; models with two renders show two; no empty
  **Additional render** choice appears.
- Selecting a render replaces the stage poster/viewer with the correct image, and selecting
  **3D model** restores the poster or already-loaded viewer state.
- The preview panel has a visible discovery tab on desktop, expands on pointer hover and keyboard
  focus, and remains fully visible at tablet/phone widths.
- Every public page requests the same versioned stylesheet and JavaScript, and those versioned URLs
  return HTTP 200 through the local server.
- Reduced-motion preferences remove the nonessential panel animation through the existing rule.
- JavaScript syntax, HTML mappings, CSS structure, local references, HTTP responses, and Git
  whitespace checks pass before handoff.

### Manual Check For Chris

Use the already-running Python server, refresh both BantayGabi pages, select all five models and
their available renders, then confirm the preview panel behavior once with a mouse and once at a
phone-sized browser width.

### Automated Verification Result

Completed on 2026-08-30:

- `assets/js/main.js` passed Node.js syntax validation.
- The page contains five model cards, seven supplied render sources, and exactly one output target
  for each synchronized fact.
- The ambiguous numbered `dataset` reads and the incorrect `.media-container` selector are absent.
- The explicit hidden-render rule is present.
- Both BantayGabi pages, the shared JavaScript, and the stylesheet returned HTTP 200 through Chris's
  already-running local Python server.
- `git diff --check` passed.

Visual pointer, keyboard, and phone-width interaction remains Chris's short manual check because the
automated browser controller is unavailable in this local environment.

### Cache Follow-Up Evidence — 2026-08-30

Chris's next screenshot showed the new hidden-render CSS behavior together with the old JavaScript
behavior that replaced all model cards with `8.25 MB`. That combination is only possible when the
browser receives files from two revisions. Per-model page reloads were considered and rejected:
they would add flicker, reset the interactive viewer, lose the current scroll position, and create
more state to maintain without fixing the stale-asset cause.

The approved minimal correction is a matching release query on `styles.css` and `main.js`
across all four public HTML pages. The website remains a dependency-free static site; the query only
gives the changed files a new browser-cache address.

Verification confirmed that all four pages contain both matching version values. The versioned
JavaScript and stylesheet return HTTP 200, the served JavaScript contains the corrected output and
render selectors, and neither the old numbered `dataset` read nor a Git whitespace error remains.

## Preview-Seam Refinement And Final Local Review — 2026-08-30

### Intended Result

Remove the visible cut and leftover thumbnail fragments from the collapsed desktop preview panel,
allow the media caption to use the released space, and complete another full local quality review
before the first public link is shared.

### Affected Files And Prerequisites

- `assets/css/styles.css` for the approved visual refinement.
- Public HTML, CSS, JavaScript, media mappings, Git configuration, and visitor-facing copy for the
  read-only review; edit only when a concrete issue is found.
- `docs/07_Walkthrough/project-detail-pages-guide.md`, `docs/08_Tracking/task.md`, and
  `CHANGELOG.md` for aligned delivery notes.
- Chris's existing Python server for HTTP verification. No dependency installation is required.

### Approved Behavior

- Replace negative movement and clipping with a narrow width-based **Previews** bar on
  mouse-capable desktop screens.
- Hide thumbnail contents visually while collapsed so no cut cards or double border remain.
- Use a softer unfocused background and restore the full panel opacity while hovered or focused.
- Let the caption gradient span the full media width at all times.
- Smoothly move only the caption text padding when the preview panel opens or closes.
- Keep caption content available rather than hiding it after a timer.
- Preserve the complete static rail at tablet/phone widths and expand the desktop panel for keyboard
  focus; retain the existing reduced-motion override.
- Add no animation library yet. Motion remains an optional separately approved post-release task.

### Full Review Scope

- Inspect the complete Git diff and all four public HTML pages from top to bottom.
- Review visitor-facing wording for planning notes, placeholders, internal/private details,
  confusing implementation language, stale facts, spelling, and unnecessary text.
- Validate JavaScript syntax, CSS structure, model/media mappings, local references, duplicate IDs,
  image alternatives, button labels, anchors, external-link safety, and versioned shared assets.
- Scan tracked public files for secret-like values, private paths, debug output, unsafe HTML or script
  patterns, and unintended browser storage or data collection.
- Verify representative HTML, image, GLB, CSS, and JavaScript resources through localhost.
- Review responsive behavior for 320–375px, 390–430px, 768px, 1024px, and desktop rules, with
  honest manual limitations where visual browser automation remains unavailable.

### Publication Boundary

Do not push, enable GitHub Pages, publish a release, or add Motion during this delivery. After the
automated review, Chris will perform the final pointer, keyboard, desktop, and phone interaction
check before a local commit or later manual push.

The final local test version is `?v=20260830-2`, which distinguishes the seamless-panel refinement
from the earlier cache-alignment test.

### Final Local Review Result

**Code review: Approved with one manual visual check. Security risk: Low in the reviewed static-site
scope. No critical, high, or medium finding remains. Nothing was pushed or published.**

- Reviewed the complete working-tree diff and the visible text, metadata, dynamic labels, links, and
  image alternatives on all four public pages.
- Corrected four stale/inconsistent public phrases: the single-gate BantayGabi metadata and library
  description, the homepage Minecraft title, and the Minecraft return card's single-model wording.
- Confirmed four pages have no duplicate IDs, missing local references, missing image `alt`
  attributes, unsafe new-tab links, buttons without an explicit type, or broken same-page anchors.
- Confirmed five model cards, seven supplied model renders, eight overview images, no eager overview
  GLB request, no autoplay, and no public form.
- Confirmed 35 unique local HTML, CSS, JavaScript, image, and GLB URLs return HTTP 200 through the
  running Python server, including the `?v=20260830-2` shared assets.
- Both public JavaScript files pass Node.js syntax validation; CSS braces balance; the old clipping
  rule is absent; `git diff --check` passes.
- Five GLBs have valid version-2 headers and declared lengths; twenty WebPs have valid RIFF/WebP
  headers; no binary media changed during this delivery; every GLB remains below 9 MB and outside
  Git LFS.
- Strong scans found no private-key block, common GitHub/OpenAI/AWS token pattern, bearer token,
  unsafe `innerHTML`, `document.write`, `eval`, dynamically constructed function, inline event
  handler, JavaScript URL, or console-debug output in the tracked public source.
- The intentional public portfolio email appears; no phone number or private Windows user path is
  present in public HTML. Theme preference remains the only browser-local stored value.
- Read-only Git checks confirmed the portfolio and Minecraft documentation repositories each expose
  a `main` branch at their linked GitHub destinations.
- `temp.txt` and the obsolete PNG poster remain ignored. There is no backend, authentication,
  database, upload, analytics, cookie, API, package manager, or newly added dependency to audit.
- Headless Edge static captures at 1440px desktop and a 500px responsive layout visually confirmed
  the clean translucent collapsed bar, full-width caption gradient, absence of thumbnail fragments,
  readable text, and the complete mobile-style rail below the media.

Manual limitation: the available static capture cannot perform the final live hover/focus animation
or reproduce Chris's exact physical phone. Chris should verify caption movement, keyboard expansion,
and the unchanged real-phone rail before a local commit. The known
single-sided Compact House material remains a later Blender/GLB content correction, not a website
release blocker.

## Approved First-Release Sidebar And Detail Polish — 2026-08-30

### Intended Result

Add restrained personality to the unused lower portion of the desktop sidebar and complete the
small layout and wording refinements Chris approved, without starting the separately requested
last full-site examination.

### Affected Files And Prerequisites

- All four public HTML pages for one consistent sidebar focus block and page-relative approved
  image paths.
- `assets/css/styles.css` for desktop-only sidebar presentation, slightly roomier navigation,
  the sticky BantayGabi status card, and a poster-background blend at narrow widths.
- `assets/js/main.js` for one randomized sidebar image per desktop page load, with no timer.
- `projects/bantaygabi-models.html` for the approved factual workflow-copy refinement.
- The static portfolio and project-detail walkthroughs, task tracker, and changelog for aligned
  beginner guidance and delivery history.
- Chris's existing local Python server for focused HTTP verification. No new dependency, service,
  image, backend, or build step is required.

### Approved Behavior

- Use one randomly selected, already-approved project image in the lower desktop sidebar on each
  fresh page load; do not rotate it on a timer.
- Keep the artwork decorative, softly blurred and desaturated, and faded into the sidebar
  background so navigation and controls remain readable.
- Add a compact **Portfolio focus** block and primary GitHub link above the theme control.
- Do not request the decorative image at tablet or phone widths, and hide the block on short
  desktop windows where it could crowd navigation or the theme button.
- Slightly increase the vertical spacing between desktop navigation choices while preserving the
  existing mobile-menu spacing.
- Make only the BantayGabi project-status card sticky on desktop; let its grid container stop the
  card at the end of the contribution section, and keep it static after the layout stacks.
- Preserve the taller phone model stage and remove the unfinished-looking poster bands by blending
  the model library's poster-mode background instead of cropping the gate.
- Refine the model-export explanation so it describes the multi-asset library accurately and uses
  **reviewed** rather than implying every geometry issue is already corrected.
- Defer the timed sidebar slideshow and Motion.dev scroll effects until a separately approved later
  delivery.

### Verification Boundary

Run focused checks for this implementation: JavaScript syntax, four-page sidebar consistency,
desktop-only image initialization, link safety, CSS structure and responsive overrides, HTML IDs
and local references, localhost responses, and Git whitespace. Do not begin the requested **LAST
FINAL** top-to-bottom UI and paragraph examination until Chris gives a separate go signal.

### Publication Boundary

Do not commit, push, enable GitHub Pages, or publish during this pass. Chris will visually review
the implementation first and separately authorize the last overall examination.

### Focused Verification Result

Completed on 2026-08-30 without starting the separately reserved last full-site review:

- Both public JavaScript files passed Node.js syntax validation and CSS braces balance to zero.
- Each of the four public pages contains exactly one sidebar feature, one decorative artwork target,
  and matching `?v=20260830-3` CSS and JavaScript references.
- All twelve page-relative sidebar image paths resolve locally; the initializer contains one
  desktop width/height guard and no sidebar timer or `setInterval` behavior.
- The sticky class appears only on the approved BantayGabi status card, and the responsive CSS
  explicitly returns it to static positioning after the detail grid stacks.
- The plural workflow heading is present, the old singular heading is absent, and the narrow-screen
  model-showcase background rule is limited to the existing phone media block.
- All four pages, both versioned shared assets, and the three possible sidebar images returned HTTP
  200 through the already-running local server.
- The four pages have no duplicate IDs or unsafe new-tab links, all possible sidebar images exist,
  and `git diff --check` passed.
- Fresh 1440×1000 and 500px-wide Edge captures confirmed a balanced desktop sidebar, the unchanged
  mobile top navigation, and an uncropped gate poster whose extra 4:3 stage area blends continuously.
- Temporary browser profiles and screenshots used for verification were removed after inspection.

Chris's remaining focused manual check is to refresh several times, observe the sticky card while
scrolling, and confirm the regular browser matches the static captures. The requested **LAST FINAL**
UI, copy, privacy, and release-readiness examination remains paused until Chris gives the go signal.

## Seamless Sidebar Clarification — 2026-08-30

### Evidence And Root Cause

Chris's follow-up screenshots clarified two details that the first polish pass interpreted
incorrectly:

- The requested spacing adjustment was between the circular **CD** brand mark and **Chris Daniel**,
  not between the navigation links. The brand remained at its original `0.75rem` gap while the menu
  gap was changed unnecessarily.
- The lower artwork was expected to become part of the sidebar itself. The implemented
  `margin-top: auto`, outer border, inner glass panel, and pill link instead made it appear as a
  separate card with a large empty gap after **Contact**.

### Approved Correction

- Restore the original navigation-link gap and increase only the brand mark/name gap consistently
  in light and dark themes.
- Let the artwork region begin immediately after the navigation, grow through the remaining sidebar
  height, and reach the bottom edge behind the theme control.
- Remove the outer border, rounded container, inner translucent card, and pill-button treatment.
- Shift the decorative image slightly downward, keep a soft blur, and use theme-aware gradients to
  fade it seamlessly from the sidebar background after **Contact**.
- Keep the focus copy and GitHub link readable as simple overlaid content, preserve keyboard focus,
  and keep the entire feature absent from tablet/phone layouts and short desktop windows.
- Update both shared asset query values to `?v=20260830-4` on all pages because Chris has already
  loaded the first `-3` sidebar CSS.

### Verification Boundary

Use focused desktop, short-desktop, and mobile checks for this clarification. Do not broaden the
work into the separately reserved **LAST FINAL** site examination.

### Correction Verification Result

Completed on 2026-08-30:

- Exact CSS checks confirmed the `1rem` brand gap, restored `0.35rem` navigation gap, flex-filling
  artwork region, negative overlap beneath **Contact**, and absence of borders or panel backgrounds
  on both the feature and its content.
- Separate light and dark image-opacity rules are present, CSS braces balance, both JavaScript files
  pass Node.js syntax validation, and `git diff --check` passes.
- Every public page contains exactly one sidebar feature and matching `?v=20260830-4` CSS and
  JavaScript references; no current public page, walkthrough, or changelog entry retains `-3`.
- The homepage and both versioned shared assets return HTTP 200 through localhost, and all public
  pages retain unique IDs.
- Fresh 1440×1000 dark and light captures showed the image fading beneath **Contact**, continuing
  borderlessly to the bottom, and using the correct theme treatment. A 1440×650 capture showed the
  artwork safely hidden with the theme control still reachable, and a 500px capture showed the
  unchanged mobile top bar with the wider brand spacing.
- The temporary light-theme helper, screenshots, and browser profiles were removed after review.

The clarification is ready for Chris's regular-browser check. The separate **LAST FINAL** review
remains paused until his explicit go signal.

## Desktop Left-Edge Control Inset — 2026-08-30

### Evidence And Root Cause

Chris's close-up screenshots confirmed that the remaining spacing issue is the distance between the
browser's left edge and the circular **CD** and theme controls. The desktop header uses the complete
15rem sidebar width without inline container padding. Navigation links and focus copy already add a
`0.75rem` internal inset, but the brand link had no left margin and the absolutely positioned theme
button used `left: 0`.

### Approved Correction

- Give only the desktop brand link and theme button a `0.75rem` left inset so their circles align
  visually with the navigation and focus text.
- Reset the brand margin when the layout changes to the tablet/mobile top bar, which already has
  container padding.
- Keep the integrated background artwork flush with both sidebar edges.
- Update both shared asset query values to `?v=20260830-5` on all four pages because Chris has
  already loaded version `-4`.
- Verify at regular desktop, short desktop, and mobile widths without beginning the separate
  **LAST FINAL** review.

### Inset Verification Result

Completed on 2026-08-30:

- Exact CSS checks confirmed a `0.75rem` desktop brand margin, a `left: 0.75rem` theme position, and
  an explicit zero brand margin in the tablet/mobile media block.
- All four public pages contain matching `?v=20260830-5` stylesheet and JavaScript references; the
  homepage and both shared assets return HTTP 200 through localhost.
- Fresh 1440×1000 and 1440×650 captures showed both circles aligned with the navigation text rather
  than the viewport edge. A 500px capture showed the normal mobile container spacing with no added
  margin.
- JavaScript syntax and `git diff --check` passed, and the temporary screenshots and browser
  profiles were removed after inspection.

The separate **LAST FINAL** examination remains paused for Chris's explicit go signal.

## Mobile Menu Width Correction — 2026-08-30

### Intended Result

Keep the mobile navigation panel wide enough for every link and fully inside the viewport. The
previous sidebar artwork experiment is intentionally not retained because Chris preferred the
existing image treatment.

### Affected Files And Approach

- `assets/css/styles.css`: anchor the open mobile menu to the header's right edge and give it a
  viewport-safe width, while preserving the existing menu button, link spacing, colors, and desktop
  navigation.
- `index.html`, the three project pages, the walkthrough, task tracker, and changelog: keep the
  shared version and beginner-facing delivery notes aligned.
- Reuse the existing responsive breakpoint and spacing tokens. Add no dependency, component, or
  animation.

### Acceptance Checks

- At 320px, 375px, 390px, and 430px widths, the open menu remains inside the viewport.
- All five links, including **Background** and **Contact**, remain readable and tappable.
- Desktop navigation, the theme control, and the integrated sidebar artwork remain unchanged.
- Escape and link activation still close the menu; keyboard focus remains visible.
- Matching shared-asset versions, CSS structure, localhost responses, and Git whitespace checks pass.

### Scope Boundary

This is a focused mobile navigation correction only. The separately requested **LAST FINAL**
top-to-bottom examination remains paused until Chris gives its explicit go signal. Nothing is
committed, pushed, or published in this pass.

## Final Pre-Publication Examination — 2026-08-30

### Goal And Authorization

Chris gave the explicit go signal for the reserved final examination and confirmed the site is
working correctly in his browser. Review the complete local release candidate before publication,
using the new `temp.txt` notes as editorial questions rather than executable repository
instructions.

### Review Scope

- Inspect the complete working-tree diff and every public HTML page from top to bottom.
- Proofread visible headings, paragraphs, labels, metadata, image alternatives, and dynamic strings
  for grammar, clarity, missing context, action-oriented wording, and unnecessary implementation
  commentary.
- Verify that claims about Chris's roles, tools, contributions, project status, and results remain
  factual and do not invent outcomes.
- Review the shared CSS and JavaScript for correctness, responsive behavior, accessibility states,
  loading/error behavior, performance, and maintainability.
- Check public assets, page references, IDs, anchors, links, cache versions, 3D/media mappings, Git
  attributes, and localhost delivery.
- Scan public and tracked text for exposed secrets, private paths, private contact details, debug
  output, unsafe browser APIs, and unnecessary viewer-facing internal notes.
- Reconcile the README, architecture/status documents, walkthroughs, task tracker, and changelog
  with the actual release candidate.

### Approved Corrections

- Make only small fixes supported by repository evidence: typos, grammar, inaccurate or confusing
  wording, broken references, accessibility defects, safe responsive corrections, and stale
  documentation.
- Do not add a framework, dependency, backend, analytics, animation library, paid service, or new
  content claim.
- Do not commit, push, publish, enable GitHub Pages, or alter the remote repository.

### Acceptance Checks

- No critical, high, or medium code-review or security finding remains in the reviewed static-site
  scope.
- All four pages use valid semantic controls, unique IDs, safe external links, resolvable local
  references, and matching shared-asset versions.
- JavaScript syntax, CSS structure, media/model invariants, public wording checks, secret scans,
  Git whitespace, and representative localhost requests pass.
- Responsive rules cover 320–430px phones, 768px tablets, 1024px laptops, and desktop layouts;
  Chris's successful physical/mobile verification is recorded as manual evidence.
- The task tracker and changelog state the final approval result and any honest remaining limits.

### Publication Boundary

The review may approve the local release candidate, but publication remains a separate action.
Chris subsequently authorized a local commit after completing his verification. Push and GitHub
Pages publication remain separate manual actions.

### Final Examination Result

**Approved locally with no blocking finding.** All four public pages, shared styles and scripts,
public images and GLBs, documentation, and the working-tree diff were reviewed. Small corrections
were limited to navigation consistency, Escape-key focus restoration, external-link hardening,
visitor-facing wording, accurate decimal model sizes, light-theme tag contrast, asset registration,
and documentation alignment.

Automated checks passed for HTML structure and references, JavaScript syntax, CSS structure and
reviewed color contrast, responsive mobile-menu geometry, GLB headers and metadata, public asset
registration, privacy and secret patterns, unsafe browser APIs, Git attributes and whitespace, and
35 unique localhost resources. Chris's successful desktop and physical-phone review supplies the
final visual and interaction evidence.

Honest non-blocking limitations remain: model downloads are 7.50–8.82 MB, the interactive viewer
loads its pinned component from a third-party CDN only after visitor action, current BantayGabi
captures include development HUD elements, and the Compact House underside remains a source-model
face/material issue for a later Blender correction. The hosted GitHub Pages URL still needs one
post-publication verification. Chris subsequently authorized the local commit; no push or
publication occurred in this review.

## Post-Launch Responsive Feedback Polish — 2026-08-31

### Goal And Evidence

Refine the published homepage after feedback from a normal 1080p desktop, scaled Windows laptops,
a Mac laptop, and a physical phone. Preserve the approved visual identity while preventing the hero
heading and illustration from feeling oversized or vertically disconnected when operating-system
display scaling reduces the browser's effective CSS viewport.

The screenshots also show two interaction expectations worth correcting: the underlined project
name resembles an external promotional link on mobile, and the raised **Forms / Play / Build**
illustration cards look clickable even though the hero artwork is decorative.

### Affected Files And Approach

- `index.html`: group project statuses and detail links into clear action rows, rename links to
  task-oriented labels, and preserve semantic anchors for navigation.
- `assets/css/styles.css`: add a wide-but-constrained laptop/short-screen hero adjustment, top-align
  and contain the sticky hero artwork, refine the hero type hierarchy, flatten the decorative art
  cards, and give project-detail links a recognizable button treatment.
- All four public HTML pages: advance the shared asset version so the published site requests the
  corrected stylesheet immediately after the next push.
- Tracking, walkthrough, and changelog files: record the behavior and beginner-friendly manual test.

No framework, JavaScript interaction, dependency, backend, analytics, or new public media is needed.

### Acceptance Checks

- At spacious desktop widths, the hero remains two-column and visually consistent with the release.
- At 125–150% scaling or a short laptop viewport, the headline is smaller, the artwork starts near
  the hero eyebrow, and the artwork follows only within the hero section.
- At 1088px and below, the existing stacked layout remains static; phones do not receive sticky
  artwork or a new horizontal overflow path.
- The introduction is slightly more prominent without competing with the headline.
- Decorative hero cards no longer use the strongest raised-control treatment and remain excluded
  from keyboard focus and assistive-technology navigation.
- BantayGabi and Minecraft use clear internal-navigation buttons; Kumpuni retains only its honest
  development status until a detail page exists.
- Project actions remain readable, tappable, and wrapping-safe at 320–430px phone widths.
- HTML semantics and references, JavaScript syntax, CSS structure, responsive geometry, shared
  versions, localhost resources, and Git whitespace checks pass.

### Scope Boundary

This delivery addresses only evidence from the first public feedback round. Motion effects, timed
slideshows, new project media, content expansion, and model optimization remain separate later work.
Do not commit, push, or republish without Chris's next explicit approval.

### Delivery Result

Implemented locally with no dependency or JavaScript change. The hero now uses a measured
wide/short-laptop adjustment, the illustration top-aligns and sticks only within its desktop hero,
and its internal cards use a flatter decorative treatment. Homepage project destinations are clear
button-styled links, while Kumpuni retains only its development status. Mobile section anchors now
account for the sticky header.

Source and localhost checks passed. Headless Edge captures were reviewed at 1920×1024, 1536×864,
1280×720, and an emulated 390×844 phone. The phone reported `innerWidth` and `scrollWidth` of 390px
with no overflow. At 1536×864, the artwork moved from 77px at page start to its 32px sticky inset,
then left the viewport with the hero boundary. The changes remain uncommitted and unpublished for
Chris's browser review.

## Responsive Media Transitions — 2026-08-31

### Intended Result

Make manual preview changes feel connected without delaying navigation or adding a library. Static
images should move horizontally on wider screens and rise a shorter distance on phones. Switching
between a poster and the live 3D viewer should crossfade because the viewer is an interactive
surface rather than another still image. The active preview outline should glide to the selected
choice as an optional shared-layout-style detail.

### Affected Files And Prerequisites

- `assets/js/main.js`: add reusable image preparation, latest-selection-wins swapping, caption
  feedback, and active-indicator positioning; connect them to the BantayGabi carousel and model
  gallery without changing their media data or model-loading lifecycle.
- `assets/css/styles.css`: style the progressive active indicator and give animated media stable
  compositor behavior while preserving the existing fallback borders.
- All four public HTML pages: advance the shared asset version after the changed CSS and JavaScript.
- Existing walkthrough, task tracker, and changelog: explain the behavior, tests, and safe tuning.

No package, build tool, framework, paid service, or Motion.dev dependency is required. Chris's
approved 1000-millisecond section reveal and 150-millisecond card stagger remain unchanged.

### Acceptance Checks

- Desktop still-image selections use a restrained directional slide and fade; phone selections use
  a shorter upward fade that does not introduce horizontal overflow.
- Incoming images are prepared before the visible swap, and rapid selections resolve to the newest
  choice rather than allowing an older animation to overwrite it.
- Poster/live-3D changes crossfade only; the interactive model canvas is never slid across the stage.
- Captions update with the selected preview, videos remain manual and lazy, and existing 3D loading,
  retry, close, reopen, model-switching, and timeout states remain functional.
- The active outline follows click, arrow, keyboard, model, and render selections; the normal active
  border remains as a progressive fallback if JavaScript is unavailable.
- Reduced-motion mode performs immediate swaps and retains visible selection state.
- JavaScript syntax, CSS structure, four-page versions and references, responsive geometry,
  interaction regression checks, localhost responses, and Git whitespace pass.

### Scope Boundary

Pinned-section scrollytelling and animated orbit nodes in the hero illustration are documented as
the next separate experiments. This delivery does not commit, push, merge, or publish anything.

### Delivery Result

Implemented locally on `develop` with the existing Web Animations API and no package. The carousel
and model-render gallery share image preparation, a 900-millisecond preload safety limit,
latest-selection-wins cancellation, responsive movement, and one resized/repositioned active
outline. Viewer opening, successful load, and closing use crossfades only. Chris's 1000-millisecond
section transform and 150-millisecond card stagger remain unchanged.

Automated Edge checks passed for directional desktop and vertical phone keyframes, rapid final-state
accuracy, one active button and indicator, a true 390px document width with no overflow, static
render selection, simulated ready-viewer open/close behavior, and reduced-motion updates with zero
JavaScript animation calls. JavaScript syntax, CSS balance, shared versions, localhost responses,
and Git whitespace also pass. The changes remain uncommitted and unpublished for Chris's review.
