## 2025-06-25 - Next.js Static Export CSP Limitation
**Vulnerability:** Missing Content Security Policy (CSP) headers due to Next.js static export build (`output: 'export'`) not supporting the `headers` option in `next.config.ts`.
**Learning:** When packaging a Next.js application for environments like Android using Capacitor with a static export, CSP cannot be configured via standard HTTP headers from the Next.js server.
**Prevention:** CSP must be enforced using a `<meta>` tag in the root layout (`src/app/layout.tsx`) to ensure baseline security.
