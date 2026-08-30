# Project Detail Pages — Beginner Walkthrough

This guide explains how to preview and safely update the BantayGabi and Minecraft pages.

## Open The Pages

The homepage and project pages link to:

- `projects/bantaygabi.html`
- `projects/bantaygabi-models.html`
- `projects/minecraft-server-administration.html`

Normal text and images work when you double-click an HTML file. The 3D model should be tested
through a small local web server because browsers can block model files opened through `file://`.

## Preview The Interactive Model

1. Open PowerShell in `D:\OtherProjects\Website-Portfolio`.
2. Run `python -m http.server 8000 --bind 0.0.0.0`.
3. Open `http://localhost:8000/projects/bantaygabi-models.html`.
4. Select each of the five model cards and confirm its title, facts, poster, and rendered views update.
5. Select **Load interactive 3D model** for one model.
6. Drag the model to rotate it and use the mouse wheel or pinch gesture to zoom.
7. Select every available rendered view and confirm each image replaces the 3D model.
8. Return to **3D model**, then select **Close 3D** and confirm the poster returns.
9. Select **Open interactive 3D model** and confirm the already-loaded viewer returns immediately.
10. Switch to another model and confirm its viewer, images, facts, and description stay
   synchronized.
11. If loading genuinely stalls for 45 seconds, confirm the poster remains and the retry button appears.
12. Press `Ctrl+C` in PowerShell when finished.

The page downloads Google's pinned `<model-viewer>` library and only the selected 7.5–8.8 MB GLB
after its load button is selected. An internet connection is needed for the library.

## Test On A Phone

`localhost` works only on the computer running the server. On a phone, `localhost` means the phone
itself.

1. Connect the computer and phone to the same Wi-Fi network.
2. Open PowerShell in `D:\OtherProjects\Website-Portfolio`.
3. Run `python -m http.server 8000 --bind 0.0.0.0`.
4. In another PowerShell window, run `ipconfig`.
5. Find the active Wi-Fi adapter's **IPv4 Address**. It commonly begins with `192.168`, but it can
   change after reconnecting or restarting the router.
6. On the phone, open `http://YOUR-PC-IP:8000/projects/bantaygabi.html`.
7. If Windows asks, allow Python through Windows Firewall for **Private networks** only.
8. Keep the PowerShell server window open while testing. Press `Ctrl+C` when finished.

If the phone cannot connect:

- Confirm both devices use the same Wi-Fi rather than mobile data or a guest network.
- Confirm the URL uses `http://`, the correct IPv4 address, and port `:8000`.
- Confirm the server window still says it is serving on port 8000.
- Do not disable Windows Firewall; allow only the Python private-network prompt if needed.

## Test The BantayGabi Media Carousel

1. Open `projects/bantaygabi.html` through the local server.
2. At desktop width, confirm the semi-transparent preview rail is on the left of the large media.
3. Select all eight image choices and use the previous/next arrow buttons from both ends.
4. At phone width, confirm the rail moves below the media and scrolls horizontally.
5. Confirm the complete selected image remains visible rather than stretched or heavily cropped.
6. When a real video is added later, start it, change previews, and confirm it pauses.

On a desktop with a mouse, the left panel now collapses to a narrow **Previews** tab so it does not
cover the image while you are looking at it. Move the pointer over that tab to expand it. Pressing
`Tab` until a preview control receives focus also expands it for keyboard users. At tablet and phone
widths, or on a touch-first device, the complete rail stays visible below the image because touch
screens do not have dependable hover.

While the desktop panel is collapsed, only the translucent **Previews** bar remains—thumbnail pieces
should not show. The caption gradient always spans the full lower edge, while its text slides right
when the panel opens and returns left when it closes. The description does not disappear on a timer,
so visitors can read it at their own pace.

## Understand The Model-Switching Fix

The model cards in `projects/bantaygabi-models.html` contain values beginning with `data-model-`.
Think of these as small labels that let JavaScript find information in the HTML.

- Labels such as `data-model-size` store a value on each selectable model card.
- Labels ending in `-output`, such as `data-model-size-output`, identify the separate place where
  that value should be displayed.
- Render labels contain a number, such as `data-model-angle-1-src`. JavaScript reads that exact
  written name with `getAttribute()` so the browser cannot interpret the number differently.
- An unavailable render button uses the standard `hidden` attribute, and the stylesheet has a
  matching `.gallery-thumb[hidden]` rule that keeps it out of the layout.

Keeping the stored values and output locations separate prevents JavaScript from replacing the
contents of the five model cards. When testing a JavaScript change, use `Ctrl+F5` once so the browser
does not reuse an older cached copy.

Each public HTML page also adds the same small version query to the shared CSS and JavaScript URLs,
for example `main.js?v=20260830-7`. The query does not create another file or need a backend. It tells
the browser that this release should be downloaded separately from an older cached copy. When a
future code delivery changes either shared file, update both version values on all four HTML pages.

## Fix A See-Through GLB In Blender

The website should not alter the supplied GLB to hide geometry problems. If the inside of a model
looks transparent, inspect and repair the source in Blender:

1. Open the source model and enable **Viewport Overlays → Face Orientation**.
2. Enter Edit Mode, press `A` to select the mesh, then press `Shift+N` and choose
   **Recalculate Outside**. Outward-facing surfaces should display consistently.
3. If a wall or roof is only a flat plane, add a small **Solidify** modifier so it has real thickness.
   This is usually the best choice for building parts that should have an inside and outside.
4. If the surface is intentionally paper-thin, disable **Backface Culling** in its material so the
   exported GLB can mark that material as double-sided.
5. Export a new GLB, replace only its matching file under `assets/models/`, then repeat the local
   model test above before committing it.

Make a backup of the Blender source before applying modifiers. Replacing a GLB with the same public
filename avoids HTML or JavaScript changes, but its model facts may need updating if the geometry
count or file size changes.

## Replace The BantayGabi Media

- 3D models: `assets/models/bantaygabi-*.glb`
- Model renders: `assets/images/posters/bantaygabi-*.webp`
- Game previews: `assets/images/projects/bantaygabi-game-preview-*.webp`
- Future project videos: `assets/videos/projects/`

Keeping the same filenames avoids an HTML change. If a filename changes, update every matching
`src`, `poster`, or `data-model-*` value in `projects/bantaygabi-models.html`.

The overview carousel uses `data-media-*` values in `projects/bantaygabi.html`. A future video item
needs a video path, a poster image, a title, a description, and useful fallback text. Do not add an
empty or fake video entry.

Before replacing the GLB:

- Test the exported file outside Unity.
- Prefer 1K textures for this asset unless a real close-up needs more detail.
- Confirm that custom ShaderLab effects have an acceptable standard glTF version.
- Keep a lightweight landscape WebP poster.
- Update `docs/04_Source-Design-Documents/asset-register.md`.

## Protect A Public 3D Preview

Anything a public browser can display can eventually be copied from that browser. Client-side
encryption can restrict a password-protected preview, but it cannot make an automatically decrypted
public model secret: the browser must receive the decryption key and the usable model data.

For this portfolio:

- Keep the editable Blender/Unity source, original textures, and highest-quality export private.
- Publish only a deliberately reduced GLB preview with the detail needed for portfolio viewing.
- Do not switch to `.gltf` plus `.bin` as a security measure. It exposes the model structure and
  external binary resource as separate public requests; it is a packaging choice, not protection.
- Keep GLB for the current static page because one self-contained preview file is simpler to manage.
- If a future preview must be limited to selected people, use a genuinely access-controlled host and
  understand that an authorized viewer can still capture the delivered asset.

Do not use ProtectStatic for the model. Its own project documentation marks it as deprecated and
states that binary assets are unsupported.

## Replace Minecraft Screenshots

The public copies are under `assets/images/projects/` and begin with `minecraft-neoforge-`.
Do not connect the website directly to the separate local server repository because GitHub Pages
can only publish files inside this portfolio repository.

Before adding a screenshot, check that it does not show:

- Player names or private chat
- Server addresses or private IP addresses
- Discord tokens, webhooks, or credentials
- Logs, console windows, or personal file paths

The visible server-profile facts use plain labels such as **Installed content** and **Capacity** so
visitors do not need to know what a JAR file or configured slot means. Keep the detailed filenames,
configuration notes, and troubleshooting records in the linked documentation repository rather
than crowding the public overview.

## Add A Technical-Term Explanation

1. Open `assets/js/term-definitions.js`.
2. Add one short entry using a lowercase key, a readable label, and a plain-language description.
3. In the relevant HTML page, wrap the first useful occurrence in a semantic button:

```html
<button class="term-button term-button-inline" type="button" data-term="glb">GLB</button>
```

4. Make sure the `data-term` value exactly matches the definition key.
5. Test it with a mouse, `Tab` plus `Enter`, touch if available, and the `Escape` key.

Do not mark every repeated term. Too many explanation controls make paragraphs harder to read.

## Manual Checks After Changes

- Use `Ctrl+F5` once after this stabilization update so the newest JavaScript and CSS load.
- Open both project pages at desktop width.
- Open the BantayGabi model library from the overview page.
- On the BantayGabi contribution section, confirm the project-status card follows the text while
  scrolling and stops when that section ends.
- Narrow the browser to roughly 320px and confirm there is no sideways page scrolling.
- Confirm the project-status card returns to normal document flow after the two columns stack.
- Open and close the mobile menu, including with the `Escape` key.
- Switch between light and dark themes.
- Use `Tab` to reach every gallery choice, link, and button.
- Confirm the selected media, model, and angle choices have visible borders.
- Confirm all eight game thumbnails and all five model cards can be reached by scrolling their rails.
- Confirm model cards remain complete after switching among all five models.
- Confirm only supplied rendered views appear and no empty **Additional render** choice is visible.
- On mouse-based desktop, confirm the **Previews** edge tab expands on hover and keyboard focus.
- Confirm no thumbnail fragments remain in the collapsed bar and the caption text follows the panel.
- At tablet/phone width, confirm the complete preview rail stays visible without hover.
- After loading 3D, confirm every image choice hides the viewer completely.
- Confirm **Close 3D** returns to the poster and reopening does not create a second viewer.
- Before loading 3D at phone width, confirm the poster remains uncropped and the extra stage area
  blends into the same gray background instead of showing black bands.
- Confirm a failed or very slow load leaves the poster visible and provides a retry button.
- Confirm the project page remains understandable before loading 3D or when loading fails.
- Open several highlighted terms, confirm only one explanation appears, and close it with Escape.

## First GitHub Pages Publication Check

Before publishing, confirm `git check-attr filter -- assets/models/*.glb` reports `filter:
unspecified` for every model. This means Git will upload the real web models rather than Git LFS
pointers that GitHub Pages cannot serve.

After GitHub Pages provides the public URL:

1. Open the homepage in a private/incognito browser window.
2. Open both project detail pages and the BantayGabi model library.
3. Load, rotate, close, and reopen at least two different models on desktop and phone.
4. Select every rendered view for those models, then return to **3D model**.
5. Test the public email link and GitHub links.
6. If all five checks work, share the public portfolio link.

Record the public URL and the date these hosted checks pass in `docs/08_Tracking/task.md`. A local
preview confirms the site code works on Chris's computer; the hosted check additionally confirms
that GitHub Pages published the real image, script, stylesheet, and model files.

The site can be published without a gameplay video, another model, Kumpuni screenshots, a custom
domain, or analytics. Those are optional later improvements.
