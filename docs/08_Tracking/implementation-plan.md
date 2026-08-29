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
