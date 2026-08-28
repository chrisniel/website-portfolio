# Chris Daniel — Website Portfolio

A simple static portfolio for Chris Daniel's Blender 3D, Unity game development, and software work.

## Current Status

The first responsive landing page is implemented. Project images, project links, and public contact details are intentionally marked as coming soon rather than filled with invented information.

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

1. Replace the three “Projects coming soon” cards in `index.html` with real project information.
2. Add optimized images under `assets/images/` when needed.
3. Replace the contact placeholder with public links that Chris wants visitors to use.
4. Keep private email addresses, passwords, and API tokens out of the repository unless they are intentionally public.

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

- The project cards and contact details are placeholders.
- No form submissions or visitor data are stored.
- Large 3D models and videos have not been integrated.
- Automated browser testing and deployment automation are not configured yet.
