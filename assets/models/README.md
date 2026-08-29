# 3D Models

This folder contains the five public click-to-load BantayGabi previews:

- `bantaygabi-subdivision-gate.glb`
- `bantaygabi-house-01.glb`
- `bantaygabi-house-04.glb`
- `bantaygabi-house-05.glb`
- `bantaygabi-large-house.glb`

They are approximately 7.1–8.4 MB each, primarily because their textures are embedded. Only the
model selected by a visitor is downloaded. A later texture-size pass can improve loading further,
but the current click-to-load files are suitable for the first publication.

For another showcase entry, provide:

- One `.glb` model, such as `bantaygabi-prop.glb`.
- One matching poster under `assets/images/posters/`, such as `bantaygabi-prop-poster.webp`.
- A short model title and accessible description.
- Confirmation that Chris owns the model or has permission to publish it.

Before adding or replacing a `<model-viewer>` model, check:

- Unused objects, materials, and animations are removed.
- Texture sizes are reasonable for phones.
- The model works locally in the official `<model-viewer>` editor.
- The model is tested on a real phone as well as a desktop browser.

Do not place private game builds or raw working files here.
