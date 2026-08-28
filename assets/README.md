# Website Assets

This folder contains files loaded by the public portfolio website.

## Structure

```text
css/                 Website styles
js/                  Small browser interactions
models/              Optimized public `.glb` showcase models
images/backgrounds/  Decorative section backgrounds
images/posters/      Lightweight previews shown before a 3D model loads
images/projects/     Project thumbnails and screenshots
```

## Public-File Warning

Everything in this folder will be publicly downloadable when the website is published. Do not add private source files, secrets, personal records, or assets without permission to publish them.

## Naming

- Use lowercase descriptive names with hyphens: `bantaygabi-hallway.webp`.
- Add a version only when replacing a heavily cached asset: `character-v2.glb`.
- Avoid spaces and vague names such as `final-final2.png`.

## Optimization

- Resize images to the largest size actually displayed.
- Prefer WebP or AVIF for web images when practical.
- Use a poster image for every interactive model.
- Export only the optimized `.glb`; keep raw Blender/Photoshop sources outside the published website unless intentionally shared.
