# Static Portfolio Walkthrough

This guide explains the first portfolio version in beginner-friendly steps.

## What Was Created

- `index.html`
  - Contains the visible page structure and wording.
  - Includes the header, introduction, project categories, about section, contact placeholder, and footer.
- `assets/css/styles.css`
  - Controls colors, spacing, cards, the desktop side menu, the mobile top menu, focus indicators, and light/dark themes.
- `assets/js/main.js`
  - Opens and closes the mobile navigation.
  - Saves the visitor's light/dark theme preference when browser storage is available.
  - Keeps the footer year current.
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

## Add Contact Details

- The contact section currently includes the approved public portfolio email `kurisuniel@gmail.com`.
- Open `index.html` and find `<section id="contact">` when that address needs to change.
- Add GitHub or LinkedIn only after Chris confirms which profiles should be public.
- Remember that every value placed in a static page is publicly readable.

## Add Images Later

- Create `assets/images/` when the first real image is ready.
- Prefer WebP or AVIF for web images when practical.
- Keep a useful JPEG or PNG fallback when browser/tool compatibility requires it.
- Resize images to the largest size the page actually displays.
- Avoid committing raw multi-gigabyte creative source files solely for display.

## Manual Verification

- Use the navigation links to reach Projects, About, and Contact.
- Toggle between light and dark themes.
- Narrow the browser window and confirm the menu button appears.
- Press `Tab` repeatedly and confirm the focused link or button has a visible outline.
- Press `Escape` while the mobile menu is open and confirm it closes.
- Confirm no project, contact, or social link is presented as real before Chris supplies it.

## Features Intentionally Deferred

- Admin dashboard and private login.
- Backend and database.
- Contact-form message storage.
- Persistent click/view analytics.
- Direct browser uploads.
- Live 3D model and large video delivery.

## Draft Design References

- `docs/00_Draft/HomepageSample.png` informed the wide-screen side-menu layout.
- `docs/00_Draft/ModelsShowcasePage.png` informed the project-card showcase grid.
- The current version combines both ideas into one page to keep navigation and hosting simple.
