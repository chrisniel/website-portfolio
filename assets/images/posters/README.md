# 3D Poster Images

A poster is the lightweight image visitors see before an interactive 3D model downloads.

- Use WebP when practical.
- Match the viewer's intended aspect ratio.
- Show the model from a clear, recognizable angle.
- Keep text out of the image when possible.
- Give the file the same base name as its model plus `-poster`.

Example pair:

```text
assets/models/kumpuni-toolbox.glb
assets/images/posters/kumpuni-toolbox-poster.webp
```

The active library includes rendered gate and house views named with the model identifier plus a
view such as `-front`, `-angle`, `-aerial`, or `-wide`. Keep each image descriptive, WebP-compressed,
and recorded in the asset register.
