# Deferred Research: Hugging Face Asset Hosting

> **Status as of 2026-08-28:** This is not the active application architecture. The approved first version is a plain static HTML, CSS, and JavaScript site hosted on GitHub Pages.

## Why This Was Deferred

The first portfolio does not need Flutter, ASP.NET Core, a database, private login, or browser-based uploads. GitHub Pages can host the website itself, while large public media can be evaluated separately when real project assets are ready.

Adding an asset-hosting service before measuring real file sizes and traffic would create unnecessary setup and another service for Chris to maintain.

## Corrected Research Notes

- Hugging Face Hub repositories can store and serve versioned public files.
- Public storage is described as best-effort and is governed by current account and repository policies; it should not be documented as an unlimited guarantee.
- Hugging Face currently uses Xet for large-file storage while preserving Git LFS-style compatibility.
- Public files can use HTTPS `/resolve/` URLs, but those requests are rate-limited and applications must handle HTTP `429` responses.
- Private files must not be accessed from static browser code using a secret token. A secure server would be required to protect private credentials.
- Browser compatibility, CORS behavior, video seeking, caching, and 3D loading performance must be tested with a real sample before choosing this service.

## Evaluation Checklist For Later

1. Measure the optimized size of the actual model or video.
2. Confirm that GitHub Pages and the GitHub repository cannot reasonably host it.
3. Review the asset host's current acceptable-use, storage, and bandwidth policies.
4. Upload one non-sensitive public sample.
5. Test it on desktop and mobile connections.
6. Confirm loading, retry, caching, and fallback behavior.
7. Document how the asset can be moved to another host if policies or limits change.

## Official References

- [Hugging Face storage limits](https://huggingface.co/docs/hub/storage-limits)
- [Hugging Face rate limits](https://huggingface.co/docs/hub/rate-limits)
- [Hugging Face Xet storage](https://huggingface.co/docs/hub/xet/index)
- [Hugging Face file downloads](https://huggingface.co/docs/huggingface_hub/en/package_reference/file_download)

## Decision

Do not implement Hugging Face integration yet. Revisit this document when Chris has at least one real, optimized 3D model or video that is too large for the chosen website-hosting workflow.
