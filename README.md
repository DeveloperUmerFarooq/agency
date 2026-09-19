<div align="center">
  <img src="public/favicon.svg" width="84" height="84" alt="Northnode logo" />

  # Northnode

  **Complex software. Clearly engineered.**

  A refined, motion-rich agency website for a senior software engineering and cybersecurity team.

  [![React](https://img.shields.io/badge/React-19-76E8E2?style=flat-square&logo=react&logoColor=111310)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-8-BFFB4F?style=flat-square&logo=vite&logoColor=111310)](https://vite.dev/)
  [![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=111310)](https://gsap.com/)
  [![Oxlint](https://img.shields.io/badge/lint-Oxlint-297E7A?style=flat-square)](https://oxc.rs/docs/guide/usage/linter)

  [Getting started](#getting-started) · [Architecture](#architecture) · [Customization](#customization) · [Production](#production)
</div>

---

## Overview

Northnode is a production-ready single-page marketing experience built with React and Vite. It combines a sharp editorial layout with responsive interactions, accessible navigation, locally hosted fonts, and carefully scoped GSAP motion.

The codebase is deliberately organized for growth: content, configuration, behavior, reusable UI, and page sections are kept separate so new services and sections can be added without turning the application shell into another monolith.

## Highlights

- **Purposeful motion** — scroll reveals, parallax, process animation, and interactive glows powered by GSAP.
- **Responsive by design** — layouts and navigation adapt cleanly from wide desktop displays to small mobile screens.
- **Accessible foundations** — keyboard navigation, skip link, visible focus states, semantic landmarks, and reduced-motion support.
- **Data-driven services** — capabilities, security services, and delivery phases render from simple content models.
- **Resilient application shell** — graceful error boundary and guarded root initialization.
- **Production-focused output** — optimized builds, source maps, and separately cacheable React, animation, and icon chunks.
- **Self-hosted typography** — no runtime dependency on third-party font services.

## Tech stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Interface | React 19 | Component composition and interaction state |
| Tooling | Vite 8 | Development server and optimized production builds |
| Motion | GSAP + ScrollTrigger | Scroll-linked and entrance animation |
| Icons | Lucide React | Lightweight, consistent interface icons |
| Quality | Oxlint | Fast static analysis |
| Styling | Modern CSS | Responsive layout, visual effects, and design tokens |

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone <your-repository-url>
cd agency
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run lint` | Run Oxlint across the codebase |
| `npm run build` | Generate the optimized production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally for final review |

## Architecture

```text
src/
├── app/
│   └── App.jsx                 # Thin application composition layer
├── components/
│   ├── layout/                 # Header and footer
│   ├── system/                 # Error and application-level safeguards
│   └── ui/                     # Reusable presentational components
├── config/
│   └── site.js                 # Brand, contact, and navigation settings
├── data/
│   └── services.js             # Capabilities, security services, and phases
├── hooks/
│   ├── useMobileNavigation.js  # Navigation state and keyboard behavior
│   └── usePageAnimations.js    # Centralized GSAP lifecycle
├── sections/                   # Independently maintained page sections
├── styles/
│   ├── global.css              # Fonts, tokens, resets, and accessibility
│   └── site.css                # Page presentation and responsive rules
├── utils/
│   └── pointerGlow.js          # Shared pointer-position helper
└── main.jsx                    # React entry point
```

### Design principles

1. **Keep `App.jsx` declarative.** It should compose the page, not contain section implementation details.
2. **Keep repeatable content in data files.** A new offering should usually be a data entry, not duplicated markup.
3. **Keep behavior reusable.** Shared interaction logic belongs in hooks or framework-independent utilities.
4. **Keep sections independent.** A section owns its semantic markup while shared primitives stay in `components/`.
5. **Keep global settings centralized.** Contact information and navigation should have one source of truth.

## Customization

### Add a capability

Add an entry to `CAPABILITIES` in `src/data/services.js`:

```jsx
{
  id: '04',
  name: 'Cloud Platforms',
  eyebrow: 'Reliable infrastructure',
  description: 'Infrastructure designed for secure, observable growth.',
  tags: ['AWS', 'Docker', 'Kubernetes'],
  signal: 'CLOUD / SCALE',
  icon: Cloud,
}
```

The expertise section renders the entry automatically. If the design grows beyond the three featured card layouts, add a corresponding layout rule in `src/styles/site.css`.

### Add a security service

Add another object to `SECURITY_SERVICES` in `src/data/services.js`:

```js
{
  id: '05',
  title: 'Cloud security',
  description: 'Review identity, network, storage, and deployment controls.',
}
```

### Change brand or contact details

Edit `src/config/site.js`. The footer, contact section, and navigation consume this centralized configuration.

### Add a page section

1. Create the section in `src/sections/`.
2. Keep repeatable copy in `src/data/` when appropriate.
3. Import and compose the section in `src/app/App.jsx`.
4. Add its navigation entry in `src/config/site.js` if it needs one.
5. Add section styling in `src/styles/site.css`.

## Motion and accessibility

Animations are initialized inside a scoped GSAP context and cleaned up when the application unmounts. Visitors who enable **Reduce Motion** receive the complete content without scroll animation. The mobile menu supports Escape-to-close behavior and exposes its state through the appropriate ARIA attributes.

When introducing new motion:

- animate transform and opacity where possible;
- keep selectors scoped to a section;
- register cleanup through the existing animation hook;
- provide a readable non-animated state;
- avoid making essential information depend on hover or animation.

## Production

Create a deployable bundle with:

```bash
npm run lint
npm run build
```

The generated `dist/` directory can be deployed to any static host. Configure the host to:

- serve `index.html` at the site root;
- enable Brotli or gzip compression;
- cache hashed files under `dist/assets/` for a long duration;
- serve HTML with a short cache lifetime;
- redirect HTTP traffic to HTTPS;
- add security headers appropriate for your deployment environment.

React, GSAP, and Lucide are emitted as separate chunks to improve long-term browser caching. Production source maps are enabled for error monitoring; restrict or remove public source-map access if your hosting policy requires it.

## Quality checklist

Before merging or deploying changes:

```bash
npm run lint
npm run build
npm run preview
```

- Check desktop and mobile layouts.
- Navigate the page using only the keyboard.
- Test with reduced motion enabled.
- Confirm internal links and the project email address.
- Review the browser console for runtime warnings.
- Run a performance and accessibility audit against the production preview.

---

<div align="center">
  <strong>Northnode</strong><br />
  Engineering confidence into every release.
</div>
