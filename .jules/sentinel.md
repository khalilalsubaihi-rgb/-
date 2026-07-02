## 2026-07-02 - Added Strict CSP Meta Tag
**Vulnerability:** Missing Content Security Policy (CSP) headers, exposing the application to XSS and injection vulnerabilities.
**Learning:** Next.js static exports (`output: 'export'`) do not support CSP headers in `next.config.ts`. CSP must be enforced using a `<meta>` tag in `src/app/layout.tsx`. Because the Next.js framework relies on inline scripts for React hydration and routing (and static exports don't support dynamic nonces), the `script-src` must include `'unsafe-inline'` and `'unsafe-eval'`.
**Prevention:** Always ensure CSP is configured correctly based on the build output type. For Next.js static exports, use the meta tag approach in the root layout with the appropriate strict-as-possible rules.
