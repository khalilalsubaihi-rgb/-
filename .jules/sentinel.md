
## 2025-02-14 - Content Security Policy with Next.js Static Export
**Vulnerability:** Missing Content Security Policy (CSP) headers leaving the application susceptible to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Next.js applications configured for static export (`output: 'export'`) do not support standard HTTP headers configured in `next.config.ts`.
**Prevention:** For statically exported Next.js apps, CSP must be enforced using an `<meta httpEquiv="Content-Security-Policy">` tag in the `src/app/layout.tsx` file instead of relying on server-side headers.
