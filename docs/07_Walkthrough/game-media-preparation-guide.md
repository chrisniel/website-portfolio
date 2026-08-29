# Preparing Game Media For The Portfolio — Beginner Walkthrough

This guide explains how to prepare screenshots, videos, and 3D models from the two Unity projects
without connecting the website directly to either game repository.

## Important Separation

The website lives at:

`D:\OtherProjects\Website-Portfolio`

The game repositories live at:

- `D:\game_development\Projects\bantayGabi-Official`
- `D:\game_development\Projects\Kumpuni-GraveyardTech`

GitHub Pages can publish only files copied into the portfolio repository. Never copy an entire
Unity `Assets/`, `Library/`, `Packages/`, or `ProjectSettings/` directory into the website.

## Before Publishing Any Media

For every item, confirm:

1. Chris or the project team owns it or has permission to publish it.
2. It contains no private names, chats, paths, addresses, tokens, logs, or server details.
3. It does not reveal unreleased story spoilers unless the team approves them.
4. Music, fonts, logos, and third-party textures visible in the capture allow public use.
5. The public copy is recorded in
   `D:\OtherProjects\Website-Portfolio\docs\04_Source-Design-Documents\asset-register.md`.

## BantayGabi Capture Suggestions

Useful source scenes include the menu, main-map prototype, and dedicated testing scenes under:

`D:\game_development\Projects\bantayGabi-Official\bantayGabi-v2\Assets\_BantayGabi\Scenes`

Recommended first media set:

- One wide nighttime environment image.
- One image emphasizing the gate, guard post, lighting, water, terrain, or foliage work.
- One short environment/gameplay video.
- An optional before/after image showing a graphics or optimization improvement.

Do not use the Unity Console, Inspector, file browser, or a debug overlay as the main screenshot.
They are useful evidence during development but usually make a public portfolio image harder to
understand.

## Kumpuni Capture Suggestions

The most relevant prototype scene is:

`D:\game_development\Projects\Kumpuni-GraveyardTech\Kumpuni_GraveyardTech\Assets\_Kumpuni\Scenes\Scene_Shop_World.unity`

Kumpuni currently has no scene enabled in Build Settings, so any capture should be described as a
prototype preview rather than finished gameplay.

A useful first set would be:

- One repair-mat overview.
- One focused gadget-part interaction.
- One short workbench interaction clip.

Do not publish Kumpuni assets until ownership permission is confirmed. Its repository README marks
the material as proprietary.

## Prepare An Image

1. Capture at 1920×1080 or another landscape resolution.
2. Crop away desktop borders, private overlays, and empty space.
3. Keep the complete subject visible. Avoid stretching the image.
4. Export the website copy as WebP when practical.
5. Aim for roughly 150–500 KB for a normal image; a detailed hero image may be larger when the
   quality difference is visible.
6. Use a descriptive filename such as `bantaygabi-night-environment.webp`.
7. Place the approved copy in
   `D:\OtherProjects\Website-Portfolio\assets\images\projects\`.

The original screenshot can remain in a private project archive. The portfolio needs only the
optimized public copy.

## Prepare A Video

1. Record a short, stable demonstration—usually 15 to 45 seconds is enough.
2. Avoid copyrighted background music unless permission is confirmed.
3. Remove personal notifications, account names, and private overlays.
4. Export an H.264 MP4 at 720p or 1080p.
5. Prefer a small clip, roughly 10–25 MB when visual quality allows.
6. Capture a separate poster image so the website does not download or decode the video immediately.
7. Place the approved files under:

   - Video: `D:\OtherProjects\Website-Portfolio\assets\videos\projects\`
   - Poster: `D:\OtherProjects\Website-Portfolio\assets\images\posters\`

The planned player will use native browser controls, will not autoplay, and will pause when another
preview is selected.

## Prepare A 3D Model

Do not place an FBX from Unity directly on the website. Make a public export instead.

1. Choose a model with confirmed ownership.
2. Make a duplicate/export copy outside the working Unity scene.
3. Remove hidden geometry and textures that are unnecessary for the public view.
4. Convert supported materials to a standard glTF/GLB representation.
5. Prefer 1K textures unless a close inspection clearly needs more detail.
6. Export one `.glb` file.
7. Create one lightweight poster plus one to three optional angle images.
8. Test the GLB in a web viewer before adding it to the portfolio.
9. Put the public GLB under `D:\OtherProjects\Website-Portfolio\assets\models\`.

Good next BantayGabi candidates are the smaller current environment models—guard post, street
light, or fence kits. Avoid the very large character files in `ModelsOld/` as the next target.

## Information To Record For Each Model

- Public model name.
- Project association.
- Creator and permission.
- Triangle and vertex count.
- Material count.
- GLB file size.
- Texture resolution.
- One-sentence description of Chris's contribution.
- Known differences between the Unity material and the browser version.

## Final Manual Check

Before approving a new media item:

- Open it at full size.
- Check that the whole subject is visible.
- Test the page at desktop and phone widths.
- Confirm images have useful alternative text.
- Confirm videos have controls and do not autoplay.
- Confirm selecting another preview pauses the hidden video.
- Confirm the page remains understandable if the video or 3D model fails to load.
- Update the asset register and changelog.
