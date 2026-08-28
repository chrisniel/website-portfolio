# Chris Daniel — Website Portfolio

A simple static portfolio for Chris Daniel's Blender 3D, Unity game development, and software work.

## Current Status

The responsive landing page now includes verified projects, skills, About information, professional experience, education, an approved portfolio email, and the primary `ChrisNiel` GitHub profile. Real project images and interactive 3D models are the next content step.

## Technology

- Semantic HTML
- Responsive CSS
- Small, dependency-free JavaScript enhancements
- GitHub Pages-compatible static hosting

There is no backend, database, login, analytics service, or build system.

## Project Structure

```text
index.html                         Main portfolio page
assets/css/styles.css              Layout, colors, responsive design, and themes
assets/js/main.js                  Mobile navigation, theme selection, and footer year
assets/images/                     Future backgrounds, posters, and project images
assets/models/                     Future optimized public GLB models
docs/README.md                     Documentation map and folder purposes
docs/07_Walkthrough/               Beginner-friendly usage instructions
docs/08_Tracking/                  Implementation and continuity tracking
AGENTS.md                          Rules for AI-assisted work
```

## Preview Locally

The simplest preview is to open `index.html` in a browser.

If Python 3 is installed, serving the folder locally more closely matches web hosting:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000` and stop the server with `Ctrl+C`.

## Customize Before Publishing

1. Add approved, optimized project images under `assets/images/projects/`.
2. Add decorative backgrounds under `assets/images/backgrounds/` only when text remains readable.
3. Record image/model ownership in `docs/04_Source-Design-Documents/asset-register.md`.
4. For the first interactive showcase, provide one `.glb` file under `assets/models/` and its poster under `assets/images/posters/`.
5. Keep private email addresses, passwords, tokens, raw CV files, and private project material out of the repository.

See the [static portfolio walkthrough](docs/07_Walkthrough/static-portfolio-guide.md) for detailed guidance.

## Publish With GitHub Pages

After the repository is pushed to GitHub:

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the default branch and the root (`/`) folder.
5. Save and wait for GitHub to display the public URL.

This repository has no remote yet, so publishing must wait until Chris creates or chooses a GitHub repository.

## Known Limitations

- Project images have not been added yet.
- No form submissions or visitor data are stored.
- Interactive 3D is waiting for an optimized `.glb` and matching poster.
- Automated browser testing and deployment automation are not configured yet.
- The empty local `main-files/` scaffold is not part of the active site.
