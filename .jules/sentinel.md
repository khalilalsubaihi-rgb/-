## 2024-05-18 - Missing Content Security Policy in Static Export
**Vulnerability:** Missing Content Security Policy (CSP) for Next.js static export build.
**Learning:** Next.js static exports (output: "export") do not support setting CSP headers via next.config.ts. CSP must be enforced using a <meta> tag in the layout.
**Prevention:** Always verify how security headers are applied based on the build and export strategy.
