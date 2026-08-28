# Portfolio UI Style Guide

## Design Direction

- Creative, modern, and practical rather than corporate-heavy.
- Wide screens use a left navigation rail inspired by the homepage sketch.
- Smaller screens use a compact top header and menu.
- Project media should support the content instead of reducing readability.

## Existing Tokens

Colors, spacing, radii, shadows, and the content width are CSS custom properties at the top of `assets/css/styles.css`.

## Images

- Use project-owned media whenever possible.
- Backgrounds may be softly blurred or darkened with an overlay.
- Keep important images as semantic `<img>` elements with useful alternative text.
- Avoid image-filled buttons; use stable colors for readable labels and interaction states.

## Accessibility

- Preserve the skip link and semantic section headings.
- Keep visible keyboard focus.
- Maintain readable contrast over backgrounds.
- Do not communicate project status through color alone.
- Respect reduced-motion preferences.
- Keep interactive targets comfortable for touch use.

## Responsive Checks

- Phone: menu opens, text does not overflow, cards stack, and links remain tappable.
- Tablet: two-column card layouts remain readable.
- Desktop: left navigation does not squeeze the main content.
