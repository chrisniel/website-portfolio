# Animation Experiment Guide

This guide explains the lightweight animation experiment on the `develop` branch. The published
`main` branch is not changed by these local files until Chris intentionally merges and pushes them.

## What Was Added

- Major page areas fade upward once when they enter the viewport.
- Homepage project and skill cards receive a short stagger instead of appearing simultaneously.
- The decorative **Forms / Play / Build** cards drop gently into their existing positions.
- Primary and secondary actions transition through the existing accent colors on pointer hover.
- Project and skill cards lift slightly only on devices that have a precise mouse or trackpad.
- The 3D model status displays three jumping dots while the viewer or model is loading.
- The BantayGabi 3D-library promotion reveals its large-house image before the accompanying copy.
- BantayGabi still-image previews slide horizontally on wider screens and rise a shorter distance on
  phones; poster/live-3D changes crossfade without moving the interactive canvas.
- One accent outline glides between preview choices while each real button keeps its accessible
  `aria-pressed` selection state.

The implementation uses only the existing files:

- `assets/css/styles.css` contains the motion appearance, durations, responsive rules, and
  reduced-motion fallback.
- `assets/js/main.js` observes when content enters the viewport and manages the loading-dot markup.
- `projects/bantaygabi.html` selects the large residential-house render for the library promotion.

No Motion.dev package, third-party animation library, build command, or paid service is required.

## How The Reveal Works

The JavaScript finds the existing section containers. It adds a `data-reveal` attribute only when
the browser supports `IntersectionObserver` and the visitor has not requested reduced motion. The
observer adds `is-revealed` when each target enters the screen, then stops observing that target.

This is called a **progressive enhancement**: the content is normal and visible first, and the
animation is added only when the browser can safely support it. If JavaScript fails or the observer
is unavailable, nothing is hidden.

Project and skill cards use a 150-millisecond delay between cards. On a narrow phone, cards usually
enter the viewport one at a time, so the result naturally becomes simpler than the desktop stagger.

## How The Preview Transitions Work

The gallery still uses ordinary buttons and one existing stage image. Before an animated still-image
change, `prepareImage()` asks the browser to load and decode the selected image. A short safety
timeout prevents a slow or suspended decode from trapping the interface. The outgoing image then
fades and moves slightly before the selected source is applied; the incoming image completes the
motion. This avoids adding duplicate full-size images to the page.

On desktop, forward and backward selections move in the corresponding horizontal direction. At
`42rem` and below, both directions become a small upward reveal because vertical movement is easier
to follow in the narrow stage. Video changes and poster/live-viewer changes use opacity only.

Every request receives a private token. If someone taps several choices quickly, an older request
sees that its token is no longer current and stops before changing the stage. This is the
**latest-selection-wins** rule.

The moving outline is a decorative `span` inserted by JavaScript. It copies the selected button's
position and size but has `pointer-events: none` and `aria-hidden="true"`. If JavaScript is unavailable,
the original active button border remains, so selection never depends on the decorative effect.

## Reduced Motion And Touch Devices

The `prefers-reduced-motion: reduce` block in `assets/css/styles.css` removes movement and keeps all
content visible. Visitors can enable this preference in their operating system or browser.

The card lift is inside a pointer/hover media query, so it does not run on ordinary touchscreens.
At the tablet breakpoint, the left/right BantayGabi reveal becomes a short vertical reveal to avoid
horizontal movement on the smaller layout.

## Loading Dots

`updateModelStatus()` in `assets/js/main.js` always keeps a readable message such as
**Loading 3D model 25%** inside the existing live region. The three dots are decorative and carry
`aria-hidden="true"`, so screen readers hear the useful status once rather than announcing each dot.
The status also exposes `aria-busy="true"` only while loading.

## Safe Manual Test

1. Make sure the terminal is in the repository root.
2. Start the local site with `python -m http.server 8000` if it is not already running.
3. Open `http://127.0.0.1:8000/index.html`.
4. Reload once and check that **Forms / Play / Build** settle into place.
5. Scroll through Projects and Skills slowly; cards should reveal once and remain visible.
6. With a mouse, hover a project card, skill card, and button. Cards should move only slightly and
   buttons should not shift position.
7. Open `http://127.0.0.1:8000/projects/bantaygabi.html` and check the large-house library panel.
8. Open the 3D model library, load a model, and confirm the dots appear during loading and disappear
   when the viewer succeeds or reports a problem.
9. In the game-preview rail, try the arrows and several thumbnails. The image should follow the
   selection direction, the caption should update, and rapid clicks should end on the final choice.
10. In the 3D library, choose different models and rendered views. Still images should slide, while
    opening or closing the interactive viewer should only crossfade.
11. Repeat at phone width. Preview images should rise a short distance, the active outline should
    follow the selected button, and the page must not scroll sideways.
12. If available, enable reduced motion temporarily and reload; everything should appear immediately
    without entrance movement.

## Safe Customization

- Reveal distance and duration: search for `[data-reveal]` in `assets/css/styles.css`.
- Project/skill stagger: change `index * 150` inside `setupEntranceMotion()` in
  `assets/js/main.js`. A smaller number is faster.
- Hero timing: search for `.hero-art.is-card-motion-ready` in `assets/css/styles.css`.
- Loading-dot speed: search for `.loading-dots span` and `model-loading-dot` in the stylesheet.
- Image movement and duration: search for `transitionMedia()` in `assets/js/main.js`. `30px` is the
  wider-screen entry distance, `14px` is the phone entry distance, and `260` is the entry duration.
- Moving-outline speed: search for `.media-selection-indicator` in `assets/css/styles.css`.

Change one value at a time and test desktop, phone, and reduced-motion mode afterward. Avoid hiding
content directly in HTML because that would remove the progressive fallback.

## Deferred Pinned-Section Idea

The later idea where the Hero or Projects panel stays fixed while its inner content exits is usually
called a **pinned section**, **sticky panel**, or **scrollytelling** interaction. It should first be
prototyped on one desktop transition. Phones, short screens, keyboard section links, and visitors who
prefer reduced motion should retain normal document scrolling.

The later hero-orbit idea can add two or three small nodes that move slowly along the existing
ellipses. It should remain subtle, avoid looking like a loading spinner, and become static when the
visitor prefers reduced motion.
