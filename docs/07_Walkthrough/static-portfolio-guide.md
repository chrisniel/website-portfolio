# Static Portfolio Walkthrough

This guide explains the first portfolio version in beginner-friendly steps.

## What Was Created

- `index.html`
  - Contains the visible page structure and wording.
  - Includes the header, introduction, project categories, About section, approved contact details,
    and footer.
- `assets/css/styles.css`
  - Controls colors, spacing, cards, the desktop side menu, the mobile top menu, focus indicators, and light/dark themes.
- `assets/js/main.js`
  - Opens and closes the mobile navigation.
  - Saves the visitor's light/dark theme preference when browser storage is available.
  - Keeps the footer year current.
  - Chooses one approved decorative sidebar image after a desktop-sized page loads.
  - Changes project gallery images and loads the optional 3D viewer after a visitor asks for it.
- `assets/js/term-definitions.js`
  - Stores short technical definitions and opens accessible explanations for highlighted terms.
- `projects/bantaygabi.html`
  - Contains the concise BantayGabi case study and link to the model library.
- `projects/bantaygabi-models.html`
  - Contains the five-model click-to-load library, rendered views, and synchronized model facts.
- `projects/minecraft-server-administration.html`
  - Contains the archived Minecraft server administration case study and gallery.
- `AGENTS.md`
  - Defines how AI assistants should plan, test, document, and explain future work.
- `README.md`
  - Provides project setup, architecture, customization, and GitHub Pages instructions.
- `docs/08_Tracking/implementation-plan.md`
  - Records the approved architecture, acceptance criteria, and deferred features.
- `docs/08_Tracking/task.md`
  - Records completed, current, remaining, and deferred work so an interrupted task can continue safely.
- `CHANGELOG.md`
  - Records completed deliveries by date.

## Preview The Website

- Quick method:
  - Open the repository folder.
  - Double-click `index.html`.
- Local-server method, if Python 3 is installed:
  - Open PowerShell in the repository folder.
  - Run `python -m http.server 8000`.
  - Open `http://localhost:8000` in a browser.
  - Press `Ctrl+C` in PowerShell when finished.

## Add A Real Project

- Open `index.html` in a code editor.
- Find the `<section id="projects">` area.
- Choose one `<article class="project-card">` block.
- Replace its category wording with:
  - The real project name.
  - A short explanation of what it is.
  - Chris's role and the tools used.
  - A public link only if one is available.
- Add meaningful alternative text when a real project image is introduced.
- Do not claim a project is playable or downloadable unless the link has been verified.

The first three cards now contain verified CV-backed information for BantayGabi, Kumpuni, and the Minecraft Server Administration Portfolio. Future edits should keep the descriptions accurate as those projects change.

## Add Contact Details

- The contact section currently includes the approved public portfolio email `kurisuniel@gmail.com`.
- Open `index.html` and find `<section id="contact">` when that address needs to change.
- Add GitHub or LinkedIn only after Chris confirms which profiles should be public.
- Remember that every value placed in a static page is publicly readable.

## Add Or Replace Images

- Use the existing `assets/images/` folders for approved web-ready media.
- Prefer WebP or AVIF for web images when practical.
- Keep a useful JPEG or PNG fallback when browser/tool compatibility requires it.
- Resize images to the largest size the page actually displays.
- Avoid committing raw multi-gigabyte creative source files solely for display.

Use the prepared folders:

- `assets/images/projects/` for thumbnails, screenshots, and renders.
- `assets/images/backgrounds/` for subtle decorative backgrounds.
- `assets/images/posters/` for the preview displayed before an interactive model loads.
- `assets/models/` for optimized public `.glb` models.

Before publishing any asset, add it to `docs/04_Source-Design-Documents/asset-register.md`.

## Customize The Desktop Sidebar

Each public HTML page contains one `data-sidebar-images` value inside the
`<div class="sidebar-feature">` block. It is a comma-separated list of approved image paths. On a
fresh desktop page load, `assets/js/main.js` chooses one path from that list. It does not start a
timer, remember the choice, or collect visitor information.

To replace an option safely:

1. Put the web-ready image under `assets/images/projects/`.
2. Replace one path inside `data-sidebar-images` on all four public HTML pages.
3. Use `assets/images/...` in `index.html` and `../assets/images/...` in files under `projects/`.
4. Keep the filenames comma-free because commas separate the choices.
5. Refresh several times at desktop width and confirm each possible image remains subtle and the
   text stays readable.

The artwork is decorative and deliberately absent from tablet/phone navigation. JavaScript checks
the desktop width and a safe minimum window height before assigning the background, so mobile and
short-window visitors do not download an image they cannot see. The **Portfolio focus** text and
GitHub link are normal HTML and remain keyboard accessible. On a regular desktop, the artwork begins
with a soft theme-colored fade beneath **Contact**, continues to the bottom edge, and intentionally
crops to fill the narrow sidebar. Its borderless presentation is controlled by the
`.sidebar-feature` rules in `assets/css/styles.css`.

The circular **CD** mark and theme button each use a `0.75rem` desktop left inset so they align with
the navigation text instead of touching the browser edge. The brand margin resets after the sidebar
becomes the tablet/mobile top bar because that layout already supplies its own container padding.

On phone widths, the open navigation is anchored to the header's right edge with a viewport-safe
width. This keeps all five links readable instead of sizing the menu from the small group of header
buttons. The desktop sidebar artwork keeps its existing treatment; no additional image mask is used.

## Update The First 3D Showcase

- The first model and poster are connected from `projects/bantaygabi-models.html`.
- Replace the GLB or poster at the same paths to update them without changing HTML.
- Keep the model title and accessible description accurate when its appearance changes.
- Treat a later 1K embedded-texture pass as an optional loading improvement, then re-test every GLB
  after replacing it. The current click-to-load models are accepted for the first publication.
- Test the exported GLB in the browser because Unity custom shaders do not transfer exactly.
- See `docs/07_Walkthrough/project-detail-pages-guide.md` for exact preview and testing steps.

No cache file needs to be created manually. Normal browser caching will be used when the files are eventually hosted.

## Manual Verification

- Use the navigation links to reach Projects, About, and Contact.
- Toggle between light and dark themes.
- Refresh several times at desktop width and confirm the sidebar shows one stable decorative image
  per page load, with readable focus text and a simple GitHub link.
- Confirm the image fades smoothly after **Contact**, reaches the bottom without a card border, and
  uses a light or dark fade that matches the selected theme.
- Confirm the desktop **CD** and theme circles align with the navigation text rather than touching
  the left viewport edge.
- Narrow the browser window and confirm the menu button appears.
- Open the phone menu at 320px, 375px, 390px, and 430px widths and confirm the full panel stays
  inside the viewport with readable **Background** and **Contact** links.
- Confirm the sidebar image and focus block are absent after the navigation changes into a top bar.
- Press `Tab` repeatedly and confirm the focused link or button has a visible outline.
- Press `Escape` while the mobile menu is open and confirm it closes.
- Confirm no project, contact, or social link is presented as real before Chris supplies it.
- Confirm the BantayGabi and Kumpuni cards are labeled in development.
- Open the BantayGabi and Minecraft detail pages from their homepage cards.
- Open the BantayGabi model library, select “Load interactive 3D model,” and confirm the gate rotates.
- Open the primary GitHub and Minecraft repository links in new tabs.

## Features Intentionally Deferred

- Admin dashboard and private login.
- Backend and database.
- Contact-form message storage.
- Persistent click/view analytics.
- Direct browser uploads.
- Large video delivery and the whole-environment web tour.

## Unused Local Scaffold

`main-files/` is an empty local folder tree from the earlier Flutter/ASP.NET idea. The static website does not read from it, and Git does not track empty directories. New website work belongs at the repository root or under `assets/`.

## Draft Design References

- `docs/00_Draft/HomepageSample.png` informed the wide-screen side-menu layout.
- `docs/00_Draft/ModelsShowcasePage.png` informed the project-card showcase grid.
- The current version combines both ideas into one page to keep navigation and hosting simple.
