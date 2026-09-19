# Northnode agency site

Production Vite + React implementation of the Northnode marketing site.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Source architecture

```text
src/
├── app/          # Application composition
├── components/   # Reusable layout, UI, and system components
├── config/       # Site-wide configuration and navigation
├── data/         # Service and process content models
├── hooks/        # Reusable state and animation orchestration
├── sections/     # Independently maintained page sections
├── styles/       # Global foundations and site presentation
└── utils/        # Framework-independent helpers
```

Add a capability or security offering in `src/data/services.js`; the relevant section renders it automatically. Global brand/contact settings live in `src/config/site.js`. New page sections should be added under `src/sections` and composed in `src/app/App.jsx`.

The production build separates React, animation, and icon dependencies into cacheable vendor chunks and emits source maps for observability.
