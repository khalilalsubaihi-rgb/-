## 2026-07-01 - Content Security Policy with Next.js Static Export
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing potential Cross-Site Scripting (XSS) and other injection attacks.
**Learning:** For Next.js projects configured for static export (`output: 'export'` in `next.config.ts`), HTTP headers cannot be configured using `next.config.ts`. CSP must be enforced using a `<meta>` tag within the HTML `<head>` (e.g., in `src/app/layout.tsx`).
**Prevention:** When implementing security headers in Next.js applications, always verify the output mode. If using static export, rely on meta tags for CSP.
