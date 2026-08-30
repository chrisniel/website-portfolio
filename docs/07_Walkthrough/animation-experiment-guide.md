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
- Four decorative nodes travel around the two hero ellipses: one accent and one smaller companion
  per path, with fixed phases that prevent visible collisions.

The implementation uses only the existing files:

- `assets/css/styles.css` contains the motion appearance, durations, responsive rules, and
  reduced-motion fallback.
- `assets/js/main.js` observes when content enters the viewport and manages the loading-dot markup.
- `index.html` contains the four decorative orbit-node spans inside the existing hidden illustration.
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

## How The Hero Orbits Work

Each existing `.orbit` contains two empty spans. In browsers that support CSS motion paths, each
span follows a true ellipse by changing only its `offset-distance`. This produces one continuous
curve instead of approximating the ellipse with short straight segments, so the nodes no longer
appear to wiggle at direction changes. The same percentage-based path follows the wide and tall
ellipses at every responsive size, while each parent still supplies its own rotation.

The original `left` and `top` values remain as intentional static positions for an older browser
that does not support elliptical motion paths. This is a **progressive fallback**: modern browsers
receive the full movement, while older browsers keep the decoration in a safe visible position.

All nodes use the same 18-second period and direction. Partners on one ellipse stay half a lap apart.
The second ellipse begins 2.1 seconds later than the first, so the relative phases never drift and
the nodes do not converge at the places where the lines cross. The larger node uses the warm accent;
the companion is smaller and dimmer to avoid a loading-spinner appearance.

The orbit containers already have `aria-hidden="true"`, and the nodes cannot receive focus or pointer
input. Under `prefers-reduced-motion: reduce`, CSS removes their animations and leaves all four at
different fixed positions.

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
5. Watch both hero ellipses for one full lap if practical. Each should carry two nodes, and the nodes
   should remain separated when they pass the line crossings.
6. Scroll through Projects and Skills slowly; cards should reveal once and remain visible.
7. With a mouse, hover a project card, skill card, and button. Cards should move only slightly and
   buttons should not shift position.
8. Open `http://127.0.0.1:8000/projects/bantaygabi.html` and check the large-house library panel.
9. Open the 3D model library, load a model, and confirm the dots appear during loading and disappear
   when the viewer succeeds or reports a problem.
10. In the game-preview rail, try the arrows and several thumbnails. The image should follow the
   selection direction, the caption should update, and rapid clicks should end on the final choice.
11. In the 3D library, choose different models and rendered views. Still images should slide, while
    opening or closing the interactive viewer should only crossfade.
12. Repeat at phone width. The orbit nodes must stay inside the hero, preview images should rise a
    short distance, the active outline should
    follow the selected button, and the page must not scroll sideways.
13. If available, enable reduced motion temporarily and reload; everything should appear immediately
    without entrance movement, and the four hero nodes should stay at different fixed positions.

## Safe Customization

- Reveal distance and duration: search for `[data-reveal]` in `assets/css/styles.css`.
- Project/skill stagger: change `index * 150` inside `setupEntranceMotion()` in
  `assets/js/main.js`. A smaller number is faster.
- Hero timing: search for `.hero-art.is-card-motion-ready` in `assets/css/styles.css`.
- Loading-dot speed: search for `.loading-dots span` and `model-loading-dot` in the stylesheet.
- Image movement and duration: search for `transitionMedia()` in `assets/js/main.js`. `30px` is the
  wider-screen entry distance, `14px` is the phone entry distance, and `260` is the entry duration.
- Moving-outline speed: search for `.media-selection-indicator` in `assets/css/styles.css`.
- Orbit speed: change `18s` in `.orbit-node`. Keep the same duration on all four nodes to preserve
  the collision-safe phase relationship.
- Orbit appearance: adjust `.orbit-node` and `.orbit-node-companion`; keep the companion smaller and
  dimmer than the primary node.
- Orbit curve: keep the `offset-path` ellipse and animate only `offset-distance`. Adding `left` or
  `top` checkpoints again would make the browser approximate the curve and can reintroduce a wiggle.

Change one value at a time and test desktop, phone, and reduced-motion mode afterward. Avoid hiding
content directly in HTML because that would remove the progressive fallback.

## Deferred Pinned-Section Idea

The later idea where the Hero or Projects panel stays fixed while its inner content exits is usually
called a **pinned section**, **sticky panel**, or **scrollytelling** interaction. It should first be
prototyped on one desktop transition. Phones, short screens, keyboard section links, and visitors who
prefer reduced motion should retain normal document scrolling.
