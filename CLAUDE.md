# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, Next.js core-web-vitals + TypeScript rules)

No test framework is configured.

## Architecture

This is a **Next.js 16** portfolio site ("VS Design") using the App Router, React 19, Tailwind CSS v4, and the React Compiler (`reactCompiler: true` in next.config.ts).

### Routing

- `/` — home page with hero section
- `/works` — project gallery
- `/works/[slug]` — individual case study (statically generated from `src/lib/projects.ts`)
- `/about`, `/contact` — static pages

### Project structure

- `src/app/` — App Router pages and layouts
- `src/components/layout/` — Navbar (with inline SVG logo + dark mode toggle), MobileMenu, FooterWrapper
- `src/components/sections/` — page sections (HeroSection, WorksSection, AboutSection, ContactSection, FooterSection)
- `src/lib/projects.ts` — project data and `Project` type definition (all case studies are defined here as a static array)
- `src/lib/siteConfig.ts` — site-wide metadata

### Styling

- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`). Theme tokens are wired in `src/app/globals.css` via `@theme inline`.
- **Design tokens** live in `src/styles/tokens.css` — all colors, font sizes, spacing, radii, and transitions are CSS custom properties mapped 1:1 from Figma.
- **Typography classes** (`.hero`, `.h1`–`.h5-caps`, `.p1`–`.p3`, `.link`, `.caption-sm`, etc.) are defined in `globals.css` as composite styles matching Figma text styles.
- **Fonts**: PP Neue Montreal (local, `--font-sans`) and Instrument Serif (Google Fonts, `--font-serif`), loaded in `src/app/layout.tsx`.
- **Dark mode**: toggled via `.dark` class on `<html>`, stored in `localStorage`. Semantic color aliases (`--color-bg`, `--color-fg`, `--color-muted`, `--color-border`) swap in `.dark` selector in `tokens.css`.
- **Breakpoints**: `sm: 390px`, `md: 768px`, `lg: 1024px`, `xl: 1440px`.

### Path alias

`@/*` maps to `./src/*` (configured in tsconfig.json).
