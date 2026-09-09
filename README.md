<p align="center"><img src="assets/readme-hero.svg" alt="4found" width="100%"></p>

# 4found

**The public website for 4found — a small technology studio where potential clients can understand what the team builds, explore plans/services, and contact the team about a project.**

## Why this website exists

A company website should do more than show animations and technology names. For 4found, the practical job of this site is to help a visitor quickly answer three questions:

1. **What can 4found build for me?**
2. **Why should I trust the team with my project?**
3. **How do I start a conversation or choose a plan?**

The site is useful for:

- small businesses that need a modern website or web application;
- clients who want a clear place to review 4found's services and approach;
- leads who need an easy contact path before discussing requirements, quotation and delivery;
- showcasing completed work, capabilities and future case studies;
- giving the company one professional public identity instead of relying only on social profiles or chat messages.

## What a visitor should be able to do

```text
Land on 4found
     |
     +--> Understand the company
     +--> Explore services / plans
     +--> Review work and capabilities
     +--> Decide whether the team fits the project
     +--> Contact 4found
```

## What this repository contains

- the public 4found website;
- reusable navigation, footer and theme components;
- plan/detail pages for presenting offers cleanly;
- a server-side contact flow so enquiries do not need to expose private handling logic in browser code;
- visual and interaction foundations that can be expanded with client work, case studies, testimonials and project evidence.

## Architecture

```text
Visitor
  |
  v
Next.js public website
  |-- Home / company presentation
  |-- Plan and service detail pages
  |-- Contact experience
  |
  +-- Server-side contact endpoint
```

The implementation uses Next.js App Router and TypeScript, but the technical stack is secondary to the visitor goal: make 4found understandable, credible and easy to contact.

## Repository layout

| Path | Purpose |
| --- | --- |
| `app/` | Public routes, layouts, plan pages and server endpoints |
| `components/` | Shared visual and theme components |
| `.agents/` | Project-local development guidance and reusable skills |
| `public/` | Static website assets |
| `next.config.ts` | Next.js configuration |
| `eslint.config.mjs` | Linting configuration |
| `assets/` | Repository presentation artwork |

## Local development

Requirements:

- Node.js 20 or newer recommended;
- npm.

```bash
npm install
npm run dev
```

Verify a production build before deployment:

```bash
npm run build
```

## Content priorities

As the studio grows, the most valuable additions are not more framework badges. They are evidence that helps a client make a decision:

- real client case studies;
- before/after project outcomes;
- clear service scope and what is not included;
- delivery process and milestones;
- testimonials where permission has been granted;
- screenshots, demos and measurable results;
- simple contact/quotation steps;
- company mission, team and trust information.

## Configuration and secrets

Do not commit local environment files or credentials. Store deployment secrets in the hosting provider and keep only placeholder/example configuration in Git.

```text
.env.local          local values, never committed
.env.example        placeholders only, safe to commit
```

Anything placed in browser-exposed environment variables should be treated as public. Sensitive operations belong on the server.

## Quality expectations

The public website should preserve:

- responsive behavior across mobile and desktop;
- keyboard accessibility and semantic HTML;
- reduced-motion support;
- fast first load and sensible Core Web Vitals;
- readable copy before decorative motion;
- clear calls to action;
- secure server-side handling of forms and integrations.

## Security notes

- Never place API secrets in client components.
- Validate and rate-limit public form endpoints before production traffic grows.
- Keep `.env*`, private keys, certificates and service credentials ignored.
- Treat all form input as untrusted.
- Rotate a credential immediately if it has ever been committed.

## Topics and tags

`startup` · `digital-agency` · `software-studio` · `business-website` · `client-website` · `web-development` · `nextjs` · `typescript` · `creative-development` · `portfolio` · `service-business` · `4found`

## Suggested GitHub About description

> Public website for 4found, helping businesses understand the studio's services, explore project plans and contact the team for websites, software and digital experiences.

## Status

This repository is the active public 4found web project. Project-specific development guidance also lives in `AGENTS.md` and the checked-in agent skill documentation.

<p align="center"><sub>The website's job is simple: make 4found easy to understand, trust and contact.</sub></p>
