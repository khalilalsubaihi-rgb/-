## 2025-02-14 - Content Security Policy (CSP) enforcement via meta tag

**Vulnerability:** Next.js static export build (`output: 'export'`) lacks Content Security Policy (CSP) enforcement because `next.config.ts` headers are not supported for static exports.
**Learning:** We cannot rely on standard HTTP response headers for CSP when Next.js is configured for static export in tools like Capacitor. Instead, the CSP must be implemented via a `<meta>` tag.
**Prevention:** Always enforce CSP using a `<meta>` tag within `src/app/layout.tsx` when a project utilizes Next.js static exports, ensuring basic protections such as `default-src 'self'` are applied.
