# NEME — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1 | UI framework |
| react-dom | ^19.1 | DOM renderer |
| react-router-dom | ^7.6 | Client-side routing (4 pages) |
| framer-motion | ^12.9 | Scroll-triggered entrance animations, hover effects, staggered reveals |
| lucide-react | ^0.511 | Icons (PhoneOff, Wrench, ShieldCheck, Phone, Zap, CalendarCheck, PlayCircle, Calendar, Mail, Linkedin, Menu, X, ArrowRight) |
| tailwindcss | ^4.1 | Utility-first styling |
| @tailwindcss/vite | ^4.1 | Tailwind Vite integration |
| typescript | ^5.8 | Type safety |
| @types/react | ^19.1 | React type definitions |
| @types/react-dom | ^19.1 | ReactDOM type definitions |
| vite | ^6.3 | Build tool |
| @vitejs/plugin-react | ^4.4 | React Vite plugin |

---

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| Navbar | Custom | Fixed top, scroll-aware border, mobile hamburger overlay. Active page highlighted in teal. |
| Footer | Custom | Two-row layout with wordmark, nav links, copyright. |
| Layout | Custom | Wraps all pages: renders Navbar + `<Outlet>` (React Router) + Footer. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| CTAButton | Custom | All pages — primary (filled teal pill) and secondary (outline teal pill) variants via props. |
| SectionWrapper | Custom | All sections — applies max-width, responsive padding, and optional Framer Motion entrance animation. |

### Home Page Sections

| Section | Notes |
|---------|-------|
| HeroSection | Full viewport height, headline with teal accent word, subheadline, CTA. Hero abstract image positioned absolute on right. |
| TrustPillarsSection | 3-column grid of pillar cards with Lucide icons. |
| WhatWeDoSection | Two-column layout (text left, CSS decorative visual right). |
| IndustriesSection | Centered label + description + flex-wrap pill badges. |
| ClosingCTASection | Centered headline + large CTA button with subtle radial gradient background. |

### Services Page Sections

| Section | Notes |
|---------|-------|
| ServicesHeader | Centered page title + subtitle. |
| SolutionCardsSection | 3-column grid of solution cards with left teal border accent and hover lift. |
| DemoCTASection | Video placeholder box (dashed border) + CTA below. |
| ExpansionNoteSection | Single centered italic line. |

### About Page Sections

| Section | Notes |
|---------|-------|
| AboutHeader | Centered page title. |
| MissionSection | Single-column centered paragraph block. |
| TeamSection | 2-column grid of team member cards with circular photos. |

### Contact Page Sections

| Section | Notes |
|---------|-------|
| ContactHeader | Centered title + subtitle. |
| BookingWidgetSection | Styled placeholder container for future Calendly/Google Calendar embed. |
| ContactDetailsSection | 2-column grid: email card + LinkedIn card. |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero staggered entrance (label → headline → subheadline → CTA) | Framer Motion | Parent `motion.div` with `staggerChildren: 0.2` in `transition`. Each child is a `motion.*` with `initial={{ opacity: 0, y: 30 }}` `animate={{ opacity: 1, y: 0 }}`. | Low |
| Scroll-triggered fade-in + translateY | Framer Motion | `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` on section elements. Reusable pattern wrapped in SectionWrapper or applied directly. | Low |
| Staggered card reveals (trust pillars, solution cards, team) | Framer Motion | Parent container with `staggerChildren: 0.1` (or 0.15), children animate `opacity` and `y`. | Low |
| Button hover (scale + shadow) | CSS + Tailwind | `hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(29,158,117,0.3)] transition-all duration-300` | Low |
| Mobile menu overlay slide-in | Framer Motion | `AnimatePresence` + `motion.div` with `initial={{ x: '100%' }}` `animate={{ x: 0 }}` `exit={{ x: '100%' }}`. | Low |
| Team member entrance (slide from opposite sides) | Framer Motion | Left member: `initial={{ opacity: 0, x: -30 }}`, right member: `initial={{ opacity: 0, x: 30 }}`, both `whileInView={{ opacity: 1, x: 0 }}`. Falls back to fade-in on mobile. | Low |

**Animation Library Choice: Framer Motion**
- Single library handles all needs: entrance animations, scroll triggers, stagger, hover states, AnimatePresence for mobile menu.
- Declarative API fits React component model well.
- `whileInView` with `viewport={{ once: true }}` replaces need for a separate intersection observer library.
- No complex effects requiring GSAP — all animations are straightforward fade/slide/scale.

---

## State & Logic

This is a presentational portfolio site with minimal state:

| State | Scope | Solution |
|-------|-------|----------|
| Mobile menu open/close | Navbar | `useState<boolean>` local to Navbar component |
| Scroll position (for nav border) | Navbar | `useEffect` with scroll listener, or `useScroll` from Framer Motion |
| Current route (active nav link) | Navbar | `useLocation` from react-router-dom |

No global state management needed. No API calls. No forms.

---

## Project Structure

```
/mnt/agents/output/app/
├── public/
│   ├── hero-abstract.png
│   ├── team-naila.jpg
│   ├── team-engineer.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAButton.tsx
│   │   └── SectionWrapper.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustPillarsSection.tsx
│   │   │   ├── WhatWeDoSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   └── ClosingCTASection.tsx
│   │   ├── services/
│   │   │   ├── ServicesHeader.tsx
│   │   │   ├── SolutionCardsSection.tsx
│   │   │   ├── DemoCTASection.tsx
│   │   │   └── ExpansionNoteSection.tsx
│   │   ├── about/
│   │   │   ├── AboutHeader.tsx
│   │   │   ├── MissionSection.tsx
│   │   │   └── TeamSection.tsx
│   │   └── contact/
│   │       ├── ContactHeader.tsx
│   │       ├── BookingWidgetSection.tsx
│   │       └── ContactDetailsSection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Routing Setup

React Router v7 with `BrowserRouter` in `main.tsx`, route definitions in `App.tsx`:

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
```

---

## Tailwind Configuration

Extend theme with brand colors:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07071A',
          panel: '#0F172A',
        },
        teal: {
          DEFAULT: '#1D9E75',
          muted: '#9FE1CB',
          glow: 'rgba(29, 158, 117, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
};
```

---

## Key Decisions

1. **No shadcn/ui components needed** — the design is fully custom with no standard UI patterns (no forms, dialogs, tables, etc.). All components are bespoke.
2. **No GSAP** — all animations are simple fade/slide/scale that Framer Motion handles declaratively. No scroll-scrubbing, no complex timelines.
3. **No state management library** — only 2 pieces of local UI state (mobile menu, scroll position), both confined to Navbar.
4. **React Router for multi-page** — the brief specifies 4 distinct pages, so SPA routing is appropriate. All CTAs link to `/contact`.
5. **CSS-only decorative visual** — the "What We Do" section's right-side visual is pure CSS (circles + dots), no additional image asset needed.
