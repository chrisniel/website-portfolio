# Game Repository Onboarding Summary

Reviewed: 2026-08-29
Review mode: Read-only file, documentation, and Git inspection. Unity was not opened and no game files were changed.

## 1. Executive Summary

Two local Unity repositories were examined to determine their real development state and identify
safe material for Chris Daniel's static portfolio.

| Repository | Evidence-based description | Portfolio recommendation |
| --- | --- | --- |
| BantayGabi | Large Unity horror-game technical prototype with story, player, environment, graphics, multiplayer, and automated PlayMode foundations | Keep the existing “In development” case study and strengthen it with approved gameplay/environment captures |
| Kumpuni: Graveyard Tech | Early systems prototype with detailed electronics-repair interactions, modular C# assemblies, and test artifacts, but no scenes registered in Build Settings | Present later as an “Experimental systems prototype,” not as a playable or finished game |

Neither repository contains a web application, backend, database, login system, or deployment
pipeline. The portfolio must use exported public media rather than linking directly to Unity project
files.

## 2. Comparison At A Glance

| Area | BantayGabi | Kumpuni |
| --- | --- | --- |
| Unity version | `6000.4.10f1` | `6000.3.22f1` |
| Render pipeline | Universal Render Pipeline 17.4.0 | Universal Render Pipeline 17.3.0 |
| Approximate local repository size | 34.31 GB, including generated Unity folders | 13.98 GB, including generated Unity folders |
| C# files under `Assets/` | 229 | 103 |
| Unity scenes under `Assets/` | 24 | 3 |
| Scenes enabled in Build Settings | 3 | 0 |
| Prefabs under `Assets/` | 150 | 10 |
| FBX files under `Assets/` | 93 | 9 |
| Git LFS entries observed | 519 | 45 |
| Current Git state | Three paths reported modified; two contain visible text differences | Clean working tree |
| Automated-test evidence | Documentation reports a 185-pass PlayMode baseline | Documentation reports an earlier 121 EditMode / 30 PlayMode baseline; newer corrective tests still require developer execution |
| CI/CD | Not configured | Not found |

The local sizes are not the expected website download sizes. Unity's generated `Library/`, logs,
caches, and other local working data account for much of the disk usage and must never be copied
into the portfolio.

## 3. BantayGabi

### Project Overview

BantayGabi is an early-stage Filipino first-person horror project. The inspected repository contains
gameplay and story prototypes, player and interaction systems, CCTV, objectives, time/curfew,
combat, environment rendering, graphics configuration, testing utilities, and multiplayer
scaffolding.

Story Version 4 is documented as the target design. Version 3 scenes remain the current technical
prototype foundation while migration work remains incomplete.

### Technology Stack

- Engine: Unity `6000.4.10f1`.
- Language: C#.
- Rendering: Universal Render Pipeline `17.4.0`, ShaderLab, Shader Graph, texture arrays, custom
  water, foliage, terrain, fog, and cloud work.
- Input/gameplay packages: Unity Input System, AI Navigation, Splines, Timeline, ProBuilder, and
  Visual Scripting.
- Multiplayer: Netcode for GameObjects plus Unity multiplayer packages.
- 3D interchange: Unity FBX tools and glTFast.
- Mobile/performance: Adaptive Performance and Android provider packages.
- Testing: Unity Test Framework `1.6.0`, primarily PlayMode tests.
- Package manager: Unity Package Manager.
- Backend/database/authentication: Not applicable to the inspected project.

One package is loaded directly from an unpinned GitHub URL:
`com.cqf.urpvolumetricfog`. A future game-maintenance pass should pin it to a reviewed tag or commit
for reproducible setup. This is a game-repository recommendation, not a portfolio dependency.

### Repository Structure

- Repository root: documentation, contribution rules, Git/LFS configuration, and helper tools.
- Unity root: `bantayGabi-v2/`.
- Primary custom source: `bantayGabi-v2/Assets/_BantayGabi/`.
- Current custom model area: `Assets/_BantayGabi/Models/`.
- Older and much larger material: `Assets/_BantayGabi/ModelsOld/`, `ArtOld/`, `MaterialsOld/`, and
  `PrefabsOld/`.
- Project documentation: `docs/01_Project_Status/` through `docs/14_UI_Design/`.
- Generated local folders such as `Library/`, `Logs/`, and `UserSettings/` exist on disk and should
  remain ignored.

The repository-level agent rule requires future game changes to be documented in the matching
topic folder under `docs/`.

### Main Entry Points

The current Unity Build Settings enable:

1. `Assets/_BantayGabi/Scenes/Menu/Scene_MainMenu.unity`
2. `Assets/_BantayGabi/Scenes/Main/Scene_Main_MapSetupOld.unity`
3. `Assets/_BantayGabi/Scenes/Multiplayer/Scene_FreeRoam_MainMap.unity`

The repository also contains newer `Scene_Main_MapSetup.unity`, story-night scenes, test scenes,
and Online Fun scenes. The Build Settings still choosing `Scene_Main_MapSetupOld.unity` should be
verified by the game team before a public build is described as current.

Main C# areas include:

- `Scripts/Player/`
- `Scripts/Interaction/`
- `Scripts/Objectives/`
- `Scripts/Story/`
- `Scripts/AI/` and `Scripts/Enemies/`
- `Scripts/Combat/`
- `Scripts/CCTV/`
- `Scripts/Environment/`
- `Scripts/Settings/`
- `Scripts/Multiplayer/` and `Scripts/OnlineFunMode/`
- `Scripts/Editor/`

Assembly-definition files separate many of these systems, which is a positive maintainability
signal and is worth mentioning as technical project work.

### Frontend, Backend, Data, And Authentication

The user interface is Unity UI rather than a web frontend. Menus, status overlays, player HUDs,
and settings are handled inside the Unity project.

No conventional web backend, database, ORM, account login, or authorization system was found.
Multiplayer networking is game-session infrastructure and should not be described as a public web
service.

### Available Commands

The repository documentation describes these developer operations:

- Open `bantayGabi-v2/` in Unity `6000.4.10f1`.
- Pull required large assets with Git LFS before opening Unity.
- Run Unity PlayMode tests in batch mode.
- Rebuild generated test scenes through
  `BantayGabi.Editor.DebugOverlaySceneUtility.RebuildAllTestScenes`.
- Prepare or build a Windows playable through the repository's Unity editor utilities.

No command was executed during this onboarding review because Unity can rewrite project files and
the current game working tree already contains uncommitted changes.

### Testing Setup

The repository includes nineteen visible PlayMode test source files covering player control,
interactions, objectives, story nights, combat, CCTV, menu/loading, debugging, and online mode.
Repository documentation reports a previous full-suite baseline of 185 passed and 0 failed.

That number is historical evidence only. This review did not run Unity, so it does not claim that
the current branch still passes all tests.

### Deployment Setup

- Windows build preparation and build utilities are documented.
- Android/mobile performance work is present.
- Three scenes are currently registered in Build Settings.
- CI/CD is explicitly not configured.
- No website deployment integration exists.

### Git Difference Review

Current branch: `opt/main-map-ModelsandFoliage-2026-08-15`.

No staged changes were found. Git reports these working-tree paths as modified:

1. `Assets/VolumetricClouds/VolumetricClouds.mat`
2. `Assets/_BantayGabi/PrefabsOld/Environment/Props/GATE_Peds_Subd.prefab`
3. `ProjectSettings/QualitySettings.asset`

Visible text differences exist in the cloud material and quality settings:

- The cloud material enables `_OUTPUT_CLOUDS_DEPTH` and contains changed near-plane and wind
  displacement values. Some values look like serialized runtime/editor state, so their intent
  should be confirmed before committing.
- `m_CurrentQuality` changes from index `1` (`URP_PC_Medium`) to index `2` (`URP_PC_High`). This may
  be an intentional local quality selection rather than a project-wide default decision.
- The gate prefab is reported modified by status, but its content diff is empty in this review.
  Line-ending or file-stat metadata is a likely explanation; it should not be staged blindly.
- Git also reports LF-to-CRLF warnings for several Unity YAML files.

These game-repository changes belong to Chris/the game team and were not altered.

### Portfolio-Suitable Material

The strongest low-complexity model candidates are current environment assets under
`Assets/_BantayGabi/Models/Environment/`, including:

- Guard post
- Street light
- Subdivision and inside-fence kits
- Small modular building assets

The existing gate is already approved and published as a web GLB. The `ModelsOld/characters/`
assets are much larger, more difficult to optimize, potentially spoiler-sensitive, and may involve
shared ownership. They should not be the next web-model targets.

Recommended public captures:

- One clean wide environment shot.
- One lighting or weather comparison.
- One short game-preview clip showing environment/technical-art work.
- One optional graphics/performance comparison that does not expose debug paths or private data.

### BantayGabi Risks And Missing Information

- Current Build Settings and documentation disagree about the main-map scene name.
- The root README names an older rendering branch than the inspected active branch.
- A recent commit message references preparing for a Unity 6.3 LTS downgrade, while the locked
  project version remains `6000.4.10f1`; do not change Unity versions without team approval.
- The working tree is not clean.
- The direct GitHub package is not pinned to a tag or commit.
- Third-party and collaborative asset licenses must be confirmed before any model, texture,
  character, music, or story material is published.
- Plot-heavy scenes and documents may contain spoilers.

## 4. Kumpuni: Graveyard Tech

### Project Overview

Kumpuni is a first-person electronics-restoration and techno-horror concept set around a repair
stall. The codebase is beyond an empty pre-production shell: it contains modular workbench,
interaction, camera, tools, repair-part, UI, and test code. However, it is still not a portfolio-
ready playable game because its current corrective interaction work needs verification and its
Build Settings contain no scenes.

The accurate public label is **Experimental systems prototype — in development**.

### Technology Stack

- Engine: Unity `6000.3.22f1`.
- Language: C#.
- Rendering: Universal Render Pipeline `17.3.0` and Shader Graph.
- Input/platforms: Unity Input System with PC and mobile interaction designs.
- Architecture packages: Unity's ECS and gameplay-storytelling feature bundles.
- Animation/tweening: PrimeTween from a repository-local package archive.
- Mobile/performance: Adaptive Performance with the Android provider.
- Commerce package: Unity Purchasing is installed, although no public store workflow was reviewed.
- Testing: Unity Test Framework through EditMode and PlayMode assemblies.
- Package manager: Unity Package Manager.
- Backend/database/authentication: Not applicable to the inspected prototype.

### Repository Structure

- Unity root: `Kumpuni_GraveyardTech/`.
- Primary custom source: `Kumpuni_GraveyardTech/Assets/_Kumpuni/`.
- Test assets: `Assets/_TestingSite/`.
- Prototype models: `Assets/_Kumpuni/Model/Prototypes/`.
- Project documentation: `Docs/`.
- Root continuity documents: `task.md` and `implementation_plan.md`.
- Local Unity-generated folders exist and should remain ignored.

No `AGENTS.md` or `RULES.md` was found in this repository. Its README and contributor guide still
document conventions: custom assets under `_Kumpuni`, source art under `_SourceArt`, feature/fix
branches, and mobile-performance constraints.

### Main Entry Points

Three scene files exist:

1. `Assets/_Kumpuni/Scenes/Scene_Bootstrapper.unity`
2. `Assets/_Kumpuni/Scenes/Scene_Shop_World.unity`
3. `Assets/_Kumpuni/Scenes/Scene_UI_Master.unity`

`ProjectSettings/EditorBuildSettings.asset` currently has an empty `m_Scenes` list. Consequently,
there is no verified player-build entry point.

Main C# assemblies are divided into:

- `Scripts/Core/`
- `Scripts/Camera/`
- `Scripts/Player/`
- `Scripts/Interaction/`
- `Scripts/Gadgets/`
- `Scripts/Tools/`
- `Scripts/UI/`

This separation supports the repository's current repair-workbench focus.

### Frontend, Backend, Data, And Authentication

The UI is Unity UI. The inspected architecture includes workbench interaction, touch gestures,
camera control, repair tools, gadget parts, event channels, and runtime variables.

No web frontend, server backend, database, ORM, authentication, or authorization system was
found. Narrative and game-state concepts are local Unity systems.

### Available Commands

The repository expects contributors to open the Unity root with `6000.3.22f1` and use Unity's Test
Runner for EditMode and PlayMode coverage. The task file also reserves final compilation, tests,
PC visual checks, and physical-device touch checks for developer execution.

No verified automated build command, enabled Build Settings scene list, or CI workflow was found.

### Testing Setup

The repository contains several test assemblies under `Assets/_TestingSite/Tests/`, including:

- Core event-channel and runtime-variable tests.
- Camera and mobile-loupe tests.
- Gadget repair, thermal, adhesive, screws, storage, and assembly tests.
- Player input, touch gestures, loupe raycasting, and workbench session tests.

The task file records an earlier verified baseline of 121 EditMode and 30 PlayMode tests passing.
It also states that later Domain 12-B corrective code and regression artifacts require itemized
developer verification. The earlier counts must not be presented as proof of the latest branch.

### Deployment Setup

- Target platforms are documented as Windows/Steam and Android/iOS.
- No scenes are enabled in Build Settings.
- No CI/CD or release packaging workflow was found.
- No public playable should be linked from the portfolio yet.

### Git Difference Review

Current branch: `feature/core-mechanics-domain_testing`, tracking the matching origin branch.

The working tree is clean: no staged, unstaged, or untracked differences were reported. The latest
visible commits focus on Domain 12-B repair interactions, mobile/visual issues, and documentation.

Git initially rejected inspection because Windows reports different repository ownership. The
review used a command-scoped read-only `safe.directory` setting and did not alter global Git
configuration.

### Documentation Alignment Findings

- The README still labels the project “Day-0 Pre-Production,” while the task tracker describes a
  much more developed Domain 12-B repair-interaction prototype.
- The README's repository example names a `ThirdParty/` directory, while the inspected project has
  `Assets/Plugins/PrimeTween/`.
- The implementation plan describes the corrective Domain 12-B work as planned, while the task
  tracker marks its code delivery complete and its developer verification incomplete.
- These mismatches should be reconciled inside Kumpuni before using repository text as public
  portfolio copy.

### Portfolio-Suitable Material

The prototype model folder contains small candidates such as:

- `Fakeme_X10_Smartphone.fbx`
- Magnetic screw tray
- Heat gun, brush, multimeter, screwdriver, soldering iron, spudger, and tweezers

These assets are technically convenient for web export, but the README marks the repository's art,
code, design documents, and narrative as proprietary. Explicit owner/team approval is required
before copying or exporting any of them.

Recommended future public captures, after the scene is stable:

- A clean repair-mat overview.
- A close-up of one interaction such as screw removal or focused-part inspection.
- A short clip demonstrating the workbench system without presenting the project as playable.

### Kumpuni Risks And Missing Information

- No Build Settings scenes or verified player build.
- New corrective interaction behavior is not fully developer-verified.
- README, implementation plan, and task tracker disagree about the current phase.
- Public ownership/permission is not established for individual assets.
- The detailed story repository contains material that should not be copied into a public site.
- Unity Purchasing is installed, but a need for it was not established during this review.

## 5. Shared Privacy, Licensing, And Publication Findings

- No obviously secret-named tracked files such as `.env`, private key, keystore, or service-account
  files appeared in the filename scan. This was not a full security audit.
- Do not publish raw Unity project directories, `ProjectSettings`, source textures, scripts, or
  story documents through the portfolio.
- Do not assume that an asset is publishable merely because it appears under a custom project
  folder.
- Confirm collaborator/team permission and third-party licenses for every exported model, texture,
  audio track, logo, and video.
- Public screenshots must hide usernames, file paths, private chats, server addresses, debug logs,
  access tokens, and unreleased story spoilers.
- Prefer newly captured screenshots and videos made specifically for the portfolio.

## 6. Recommended Portfolio Sequence

1. Implement the approved mixed image/video preview on the BantayGabi overview using only media
   that Chris explicitly approves.
2. Remove game-context media from the model page and restructure it around model selection, one
   reusable 3D viewer, one to three angle images, and model facts.
3. Capture one short BantayGabi gameplay/environment clip and two to four supporting still images.
4. Select the next small environment model from BantayGabi's current `Models/Environment/` folder,
   confirm ownership, export a web GLB, and create one to three WebP angle previews.
5. Keep the whole-environment web tour deferred until a deliberately optimized export is available;
   do not attempt to publish a Unity scene directly.
6. Revisit Kumpuni after its interaction fixes and Build Settings are verified. Start with a small
   screenshot/video case study rather than a playable download.

## 7. Onboarding Checklist

- [x] Repository structures inspected.
- [x] Unity versions and major packages identified.
- [x] Main scenes and Build Settings checked.
- [x] Custom source and test areas located.
- [x] Backend, database, and authentication marked not applicable.
- [x] Documented commands and build clues reviewed.
- [x] Testing artifacts and historical baselines identified without claiming fresh results.
- [x] Deployment/CI setup checked.
- [x] Git differences compared without modifying either repository.
- [x] Privacy, licensing, documentation drift, and publication risks recorded.
- [x] Portfolio-ready next steps proposed.
