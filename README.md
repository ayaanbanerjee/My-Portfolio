# Ayan Banerjee — Portfolio

A premium, production-ready developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Design direction: a dark, terminal-inflected "engineer's desk" aesthetic — monospace labels, a live-typing terminal in the hero, git/status-style badges on projects, and a warm amber signal color against deep charcoal. Built as an original design (not a clone of any reference site).

## Tech stack

- Next.js 15 (App Router, React Server Components where possible)
- React 19 + TypeScript (strict mode)
- Tailwind CSS 3 (custom design tokens — see `tailwind.config.ts`)
- Framer Motion (scroll reveals, page-load sequence, magnetic buttons, marquee)
- lucide-react (icon set)

## Getting started

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, global providers
  page.tsx           Assembles all sections
  globals.css         Global styles, scrollbar, selection, grain texture
components/
  Navbar.tsx          Sticky glass nav, active-section pill, mobile menu
  Hero.tsx            Hero with typing terminal, marquee, CTAs
  About.tsx           Summary, education timeline, stats
  Experience.tsx      Work experience cards
  Skills.tsx          Categorized skill chips
  Projects.tsx        Project cards (live demo / repo / status / features)
  Services.tsx        Service offering cards
  Contact.tsx         Copy-to-clipboard rows, contact form (mailto), socials
  Footer.tsx          Footer with nav, socials, resume link
  Loader.tsx          Terminal-style boot loading screen
  CustomCursor.tsx     Magnetic dot + ring custom cursor (fine-pointer only)
  ScrollProgress.tsx  Top scroll progress bar
  MagneticButton.tsx  Reusable magnetic-hover button
  SectionHeading.tsx  Reusable eyebrow + heading + description block
  Reveal.tsx          Scroll-reveal wrapper (fade + blur + slide)
hooks/
  useMagnetic.ts      Magnetic hover-follow behavior
  useIsMobile.ts      Viewport breakpoint hook
lib/
  data.ts             ALL resume content lives here (single source of truth)
  utils.ts            `cn()` className helper
public/
  Ayan_Banerjee_Resume.pdf   Downloadable resume (served at /Ayan_Banerjee_Resume.pdf)
```

## Content source & links

Every piece of contact info, work experience, project detail, and skill in
`lib/data.ts` is taken directly from the provided CV. Two notes on links:

- **LinkedIn, GitHub, and the Employee Management System live demo** are the
  three hyperlinks that were actually embedded in the CV PDF, so those are
  wired in exactly as-is.
- **PackVerse** is listed as an ongoing project in the CV with no live URL or
  repository link included — rather than invent one, the project card shows
  it honestly as "Repository not yet public." When you have a real
  live/GitHub URL for it, add `liveUrl` / `githubUrl` to its entry in
  `lib/data.ts` and the buttons will appear automatically.
- Project card visuals are original abstract browser-mockup graphics (CSS/
  SVG), not real screenshots — since no product screenshots were provided.
  Swap in real screenshots by dropping images into `public/projects/` and
  referencing them in `lib/data.ts` + `components/Projects.tsx`.

To update any content (name, links, experience, projects, skills), edit
**`lib/data.ts`** only — every component reads from it.

## Animations implemented

- Page-load terminal boot sequence (`Loader.tsx`)
- Scroll-triggered fade/slide/blur reveals on every section (`Reveal.tsx`)
- Hero: staggered entrance, animated typing terminal, infinite marquee,
  floating ambient blobs
- Magnetic buttons that follow the cursor on hover
- Custom cursor (dot + ring) with hover-state scaling, fine-pointer only
  (falls back to native cursor on touch devices)
- Sticky navbar with animated active-section pill + glass blur on scroll
- Top scroll-progress bar
- Card hover lifts, border-glow, and micro-interactions throughout

All animations respect `prefers-reduced-motion`.

## Accessibility & performance

- Semantic landmarks, `aria-label`s on icon-only controls
- Visible focus rings (`:focus-visible`)
- `next/font` for zero-layout-shift, self-hosted Google Fonts
- Reduced-motion media query support
- Mobile-first responsive breakpoints (mobile / tablet / laptop / desktop)

## Customizing the theme

Colors, type scale, spacing, and animation tokens are centralized in
`tailwind.config.ts` (`base`, `ink`, `signal`, `wire` color groups, plus
`display-1/2/3` fluid type sizes). Change values there to re-theme the
entire site consistently.
