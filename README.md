<p align="center"><img src="assets/readme-hero.svg" alt="4found" width="100%"></p>

# 4found

4found is the public web presence and product surface for a technology studio focused on building digital experiences, internal systems, and client-facing software. This repository contains the production website, its interactive presentation layer, reusable components, and server-side contact flow.

## What this repository contains

- A Next.js App Router application written in TypeScript.
- A responsive public landing experience with reusable navigation and footer components.
- Theme-aware UI foundations and shared global design tokens.
- Server-side contact handling under `app/api/contact`.
- Plan/detail routes under `app/plan/[id]`.
- Agent guidance and UI-development skills kept alongside the project for consistent autonomous development.

## Architecture

```text
Browser
  |
  v
Next.js App Router
  |-- app/page.tsx              Public experience
  |-- app/plan/[id]/page.tsx    Plan detail pages
  |-- app/api/contact/route.ts  Server-side contact endpoint
  |
  +-- components/               Shared visual building blocks
      |-- Navbar.tsx
      |-- Footer.tsx
      +-- ThemeProvider.tsx
```

The repository intentionally keeps presentation components separate from API handling so future backend integrations can evolve without coupling them to page layout code.

## Local development

Requirements:

- Node.js 20 or newer recommended.
- npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production builds should be verified before deployment:

```bash
npm run build
```

## Configuration and secrets

Do not commit local environment files or credentials. Store deployment secrets in the hosting provider and keep only placeholder/example configuration in Git.

Recommended local pattern:

```text
.env.local          local values, never committed
.env.example        placeholders only, safe to commit
```

Before adding a new integration, verify that browser-exposed variables contain only values that are intentionally public. Server credentials must remain server-only.

## Repository layout

| Path | Purpose |
| --- | --- |
| `app/` | Routes, layouts, pages, and server endpoints |
| `components/` | Shared UI and theme components |
| `.agents/` | Project-local agent instructions and reusable UI skills |
| `public/` | Static web assets |
| `next.config.ts` | Next.js configuration |
| `eslint.config.mjs` | Linting configuration |

## Development standards

Changes should preserve responsive behavior, keyboard accessibility, semantic HTML, reduced-motion support, and good Core Web Vitals. Keep private credentials out of source, validate untrusted input at API boundaries, and prefer server-side handling for sensitive operations.

## Deployment

The application is suitable for a standard Next.js deployment workflow. Configure environment values in the deployment platform, run the production build, and smoke-test the public pages plus contact endpoint after each release.

## Security notes

- Never place API secrets in client components.
- Validate and rate-limit public form endpoints when adding production integrations.
- Keep `.env*`, private keys, certificates, and local service credentials ignored.
- Rotate a credential immediately if it has ever been committed, even after deleting the file from the latest branch.

## Status

This repository is the active 4found web project. Project-specific implementation guidance is also available in `AGENTS.md` and the checked-in agent skill documentation.
