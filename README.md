# Chris Daniel — Website Portfolio

A simple static portfolio for Chris Daniel's Blender 3D, Unity game development, and software work.

## Current Status

The responsive landing page includes verified projects, skills, About information, professional experience, education, an approved portfolio email, and the primary `ChrisNiel` GitHub profile. BantayGabi and Minecraft have dedicated static detail pages, BantayGabi has an eight-image game preview and a five-model click-to-load library, and selected technical terms include optional plain-language explanations.

## Technology

- Semantic HTML
- Responsive CSS
- Small vanilla JavaScript enhancements
- Google `<model-viewer>` 4.3.1, loaded from its CDN only after visitor interaction
- GitHub Pages-compatible static hosting

There is no backend, database, login, analytics service, or build system.

## Project Structure

```text
index.html                         Main portfolio page
projects/bantaygabi.html           Concise BantayGabi project overview
projects/bantaygabi-models.html    Dedicated click-to-load 3D model library
projects/minecraft-server-administration.html
                                   Minecraft server case study
assets/css/styles.css              Layout, colors, responsive design, and themes
assets/js/main.js                  Navigation, theme, mixed media, 3D loading, and footer year
assets/js/term-definitions.js      Technical definitions and accessible explanation popover
assets/images/                     Public backgrounds, posters, and project images
assets/videos/projects/            Approved web-ready project videos when available
assets/models/                     Public optimized GLB models
docs/README.md                     Documentation map and folder purposes
docs/07_Walkthrough/               Beginner-friendly usage instructions
docs/08_Tracking/                  Implementation and continuity tracking
AGENTS.md                          Rules for AI-assisted work
```

## Preview Locally

The simplest homepage preview is to open `index.html` in a browser. Use the local-server method when testing `projects/bantaygabi-models.html` because browsers commonly restrict model loading from `file://` pages.

If Python 3 is installed, serving the folder locally more closely matches web hosting:

```powershell
python -m http.server 8000 --bind 0.0.0.0
```

Then visit `http://localhost:8000` and stop the server with `Ctrl+C`.

To test from a phone on the same Wi-Fi network, run `ipconfig`, find the computer's active IPv4
address, and visit `http://YOUR-PC-IP:8000`. `localhost` on a phone refers to the phone itself, not
the computer. Allow Python through Windows Firewall for **Private networks** if Windows asks.

## Customize Before Publishing

1. Add approved, optimized project images under `assets/images/projects/`.
2. Add decorative backgrounds under `assets/images/backgrounds/` only when text remains readable.
3. Record image/model ownership in `docs/04_Source-Design-Documents/asset-register.md`.
4. For another interactive showcase, provide one `.glb` file under `assets/models/` and its poster under `assets/images/posters/`.
5. Keep private email addresses, passwords, tokens, raw CV files, and private project material out of the repository.
6. Keep each web-ready model or video below GitHub's normal 100 MB per-file limit. Use separate
   media hosting for anything larger; Git LFS files cannot be served by GitHub Pages.

See the [static portfolio walkthrough](docs/07_Walkthrough/static-portfolio-guide.md) for detailed guidance.

## Publish With GitHub Pages

After the repository is pushed to GitHub:

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the default branch and the root (`/`) folder.
5. Save and wait for GitHub to display the public URL.

The `origin` remote is `https://github.com/chrisniel/website-portfolio.git`. Push the reviewed `main`
branch there, then enable Pages.

## Known Limitations

- The five BantayGabi GLBs are approximately 7.1–8.4 MB each. A later 1K texture pass should improve
  loading on slower connections, but the click-to-load versions are suitable for an initial release.
- The 3D viewer requires an internet connection to download the pinned `<model-viewer>` library on first use.
- The game repositories were inspected, but a whole-environment web tour still needs a separate,
  optimized, permission-cleared web export.
- No form submissions or visitor data are stored.
- Automated static and HTTP checks are available, but the current in-app visual browser runtime has
  a local version mismatch; the expanded preview/model rails need one final manual click/swipe check.
- The empty local `main-files/` scaffold is not part of the active site.
