# AI Agent Working Rules

These rules apply to AI-assisted work throughout this repository.

## 1. Plan Before Implementation

- Before changing code, briefly describe the intended result, affected files, and prerequisites.
- Maintain the active plan in `docs/08_Tracking/implementation-plan.md`.
- Ask user before making a major architecture decision, adding a paid service, or introducing a framework or dependency.

## 2. Maintain Task Continuity

- Keep `docs/08_Tracking/task.md` current with completed, in-progress, remaining, and deferred work.
- Read the task file before resuming interrupted work.

## 3. Provide Beginner-Friendly Walkthroughs

- Document meaningful deliveries under `docs/07_Walkthrough/`.
- Include exact file paths, simple usage steps, and safe customization guidance.
- Explain unfamiliar terms in plain language because this project is also a learning resource for user.

## 4. Update The Changelog

- Add a dated entry to `CHANGELOG.md` for every completed code delivery.
- Describe user-visible changes, documentation changes, and important limitations.

## 5. Keep Related Files Aligned

- When behavior, setup, structure, or deployment changes, update the closest related documentation in the same delivery.
- Do not duplicate documentation that should have one canonical source.

## 6. Recommend Simple Best Practices

- Prefer the simplest reliable, accessible, responsive, and maintainable solution.
- Explain important recommendations and tradeoffs without assuming advanced knowledge.

## 7. Testing And Debugging

- Implementation requests authorize safe, non-destructive automated checks that are directly related to changed files.
- Explain which checks were run and their results.
- Ask before destructive diagnostics, installing new tools, using paid services, changing external systems, or testing with private/production data.
- Provide a short manual verification guide for user after meaningful UI changes.

## 8. Make Surgical Changes

- Do not rewrite functioning code or add unrelated features.
- Use the minimum complexity required for the approved goal.

## 9. Clarify Material Unknowns

- Ask user when missing information would materially change cost, architecture, security, privacy, or the visible result.
- Use clearly labeled placeholders for non-sensitive content such as project descriptions or contact links when appropriate.

## 10. Protect Privacy And Secrets

- Never commit passwords, tokens, private keys, or private contact information.
- Static frontend files are public; do not place secrets in HTML, CSS, or browser JavaScript.
