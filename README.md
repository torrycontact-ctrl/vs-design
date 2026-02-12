# VS Design — Portfolio Site

A portfolio site built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # ESLint check
```

## Page Routes

| Route           | Description                                 |
| --------------- | ------------------------------------------- |
| `/`             | Home — hero section with works carousel     |
| `/works`        | Works listing page                          |
| `/works/[slug]` | Individual case study (statically generated) |
| `/about`        | About page                                  |
| `/contact`      | Contact page                                |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Typography classes, button styles
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── works/
│       ├── page.tsx            # Works listing
│       └── [slug]/page.tsx     # Case study template
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation + dark mode toggle
│   │   ├── MobileMenu.tsx      # Mobile nav overlay (<lg)
│   │   └── FooterWrapper.tsx   # Conditional footer
│   ├── sections/
│   │   ├── HeroSection.tsx     # Home hero
│   │   ├── WorksSection.tsx    # Works carousel
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── FooterSection.tsx
│   ├── ImageGallery.tsx        # Horizontal scroll gallery with arrows
│   ├── ProjectMeta.tsx         # Client / Website / Industry / Services / Timeline
│   └── ServiceTag.tsx          # Tag pill component
├── lib/
│   ├── projects.ts             # Project data array + TypeScript interfaces
│   └── siteConfig.ts           # Site-wide metadata
└── styles/
    └── tokens.css              # Design tokens (colors, spacing, typography)
```

## How to Add a New Project

1. Open `src/lib/projects.ts`.
2. Add a new object to the `projects` array:

```ts
{
  slug: "my-project",           // URL slug → /works/my-project
  title: "My Project",
  services: "WEB DESIGN, BRANDING",
  thumbnail: "/images/Works/Light/my-project.png",
  heroImage: "/images/Works/Light/my-project-hero.png",

  // Optional metadata
  client: "Acme Corp",
  website: { label: "acme.com", url: "https://acme.com" },
  industry: "Technology",
  timeline: "Jan 2025 – Mar 2025",

  // Content sections (rendered in order)
  contentBlocks: [
    {
      heading: "Section Heading",
      paragraphs: ["First paragraph.", "Second paragraph."],
    },
  ],

  // Image blocks between content (rendered in order)
  imageBlocks: [
    { type: "single", images: [{ src: "/images/Project/img.png", alt: "Description" }], height: 672 },
    { type: "double", images: [
      { src: "/images/Project/left.png", alt: "Left" },
      { src: "/images/Project/right.png", alt: "Right" },
    ]},
    { type: "full", images: [{ src: "/images/Project/full.png", alt: "Full width" }] },
  ],

  // Results section
  results: {
    heading: "Results Heading",
    paragraphs: ["Results description."],
  },
  resultsGalleryImages: [
    { src: "/images/Project/gallery1.png", alt: "Gallery 1", width: 600, height: 400 },
  ],
}
```

3. Place images in `public/images/` — they are served statically.
4. The page is automatically generated via `generateStaticParams`.

### Image Block Types

| Type     | Mobile                | Desktop                 |
| -------- | --------------------- | ----------------------- |
| `single` | Full width, 200px h   | Full width, 672–768px h |
| `double` | Side-by-side, 160px h | Side-by-side, 672px h   |
| `full`   | Full width, 200px h   | Full width, 896px h     |

## How to Customize Theme Colors

All design tokens live in `src/styles/tokens.css`.

### Semantic Colors (light mode defaults)

```css
--color-bg: var(--color-white);        /* page background */
--color-fg: var(--color-black);        /* text color */
--color-muted: var(--color-gray-500);  /* secondary text */
--color-border: var(--color-gray-200); /* borders */
```

### Dark Mode Overrides

Dark mode is toggled via a `.dark` class on `<html>`. Override semantic colors in the `.dark` selector at the bottom of `tokens.css`:

```css
.dark {
  --color-bg: var(--color-neutral-900);
  --color-fg: var(--color-white);
  --color-muted: var(--color-neutral-400);
  --color-border: var(--color-neutral-700);
}
```

### Brand / Accent Colors

```css
--color-custom-light-pink:    #fff9fe;  /* gradient start */
--color-custom-butter-yellow: #fff4db;  /* button hover */
--color-custom-pink:          #f4c5f7;  /* gradient mid */
--color-custom-nude-purple:   #ceccfa;  /* gradient end */
```

The home page gradient is defined in `src/app/globals.css` under `.home-gradient` and `body`.

### Breakpoints

| Token | Value  |
| ----- | ------ |
| `sm`  | 390px  |
| `md`  | 768px  |
| `lg`  | 1024px |
| `xl`  | 1440px |

## Fonts

- **PP Neue Montreal** (sans-serif) — loaded locally from `public/fonts/`
- **Instrument Serif** (serif) — loaded via Google Fonts

Both are configured in `src/app/layout.tsx` and exposed as `--font-sans` and `--font-serif` CSS variables.

## Dark Mode

Dark mode is class-based (`.dark` on `<html>`), persisted to `localStorage`, and toggled via the sun/moon button in the navbar. The toggle uses `useSyncExternalStore` to observe DOM class changes reactively.

## Deploy on Vercel

```bash
npm run build
```

Or connect the repository to [Vercel](https://vercel.com) for automatic deployments.
