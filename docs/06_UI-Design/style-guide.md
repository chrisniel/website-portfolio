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

## Game Media Carousel

- Show the complete selected image or video with `object-fit: contain`.
- Desktop uses a semi-transparent thumbnail rail over the left side of the stage.
- Tablet and phone layouts move the rail below the stage and use horizontal scrolling.
- Never advance previews automatically or autoplay videos.
- Keep previous/next controls, selected borders, and real button semantics.
- Hover may enhance a card, but click, keyboard, and touch remain the required controls.
- Pause a video whenever another preview is selected.

## Model Library

- Show compact model-selection cards before the viewer.
- Keep one reusable viewer and one to three model-specific angle choices.
- Keep gameplay images and videos on the project overview, not in the model library.
- Model selectors and preview rails scroll inside their component rather than creating page-level
  horizontal overflow.
- Keep the poster visible while the transparent viewer finishes loading; never apply `display: none`
  to the active viewer before its load event.
- If loading stalls, return to the poster with a clear retry action instead of leaving progress at 100%.

## Accessibility

- Preserve the skip link and semantic section headings.
- Keep visible keyboard focus.
- Maintain readable contrast over backgrounds.
- Do not communicate project status through color alone.
- Respect reduced-motion preferences.
- Keep interactive targets comfortable for touch use.

## Technical-Term Explanations

- Use the dotted-underlined term style only for unfamiliar technical language.
- Explain a term at its first useful appearance instead of marking every repetition.
- Keep explanations to one short plain-language sentence when possible.
- Do not require hover; term controls must also work with keyboard and touch.
- Keep the normal sentence understandable even when the explanation is never opened.

## Responsive Checks

- Phone: menu opens, text does not overflow, cards stack, media rails scroll horizontally, and
  controls remain tappable.
- Tablet: two-column card layouts remain readable.
- Desktop: left navigation does not squeeze the main content.
