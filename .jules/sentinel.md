## 2026-06-28 - [Added Content Security Policy]
**Vulnerability:** Next.js application compiled to static export (`output: 'export'`) was missing a Content-Security-Policy (CSP).
**Learning:** Next.js static exports do not support HTTP response headers configured via `next.config.ts`. The CSP must be enforced using a `<meta>` tag within the root layout (`src/app/layout.tsx`).
**Prevention:** When developing Next.js static exports, always remember to add security policies via `<meta>` tags in the document head since server-side header configuration is unavailable.
