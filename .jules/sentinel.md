
## 2024-05-20 - [Add Content Security Policy for static Next.js app]
**Vulnerability:** Next.js applications configured for static export (`output: 'export'`) do not support Next.js' native `headers` configuration in `next.config.ts`, making them vulnerable to lacking basic security headers like Content-Security-Policy.
**Learning:** For static export Next.js apps, Content Security Policy can be enforced by adding a `<meta httpEquiv="Content-Security-Policy" content="..." />` tag in the `<head>` of `app/layout.tsx`.
**Prevention:** Always ensure a CSP meta tag is included in the root layout for Next.js applications that are built with `output: 'export'`.
