## 2024-05-15 - [High] Missing Content Security Policy (CSP) for Next.js Static Export
**Vulnerability:** The Next.js application was exported as a static site (`output: 'export'`), which doesn't support the normal CSP headers in `next.config.ts`, leading to an application without CSP protection.
**Learning:** Next.js static exports must use `<meta>` tags in `layout.tsx` for enforcing Content Security Policy since the standard `headers()` function and `next.config.ts` headers are not applicable in standard static HTML files.
**Prevention:** For any project using Next.js static export (`output: 'export'`), verify that a CSP is explicitly implemented via `<meta>` tags in the root layout or individual pages if needed, instead of relying on `next.config.ts`.
