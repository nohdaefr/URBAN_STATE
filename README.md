# Urban Estate — אורבן אסטייט

A premium, fully-functional Hebrew/RTL real estate marketing site, built as a portfolio-grade
production project. React + TypeScript + Tailwind CSS + React Router.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint        # oxlint
```

Requires Node 18+.

## What's here

- **9 pages**: Home, Properties (list + filters), Property Details, About, Contact,
  Favorites, Buying Guide, Selling Guide, 404 — plus three legal pages (terms,
  privacy, accessibility) linked from the footer so no link is dead.
- **Full Hebrew RTL UI**, editorial typography (Heebo for UI, Frank Ruhl Libre for
  display headlines), a restrained clay/charcoal/ivory design system defined in
  `tailwind.config.js` and `src/index.css`.
- **Working demo interactions**: search, filtering, sorting, favorites (persisted to
  `localStorage`), an image gallery with lightbox, mobile bottom-sheet filters, a
  full-screen mobile nav, contact/lead forms with Hebrew validation and success
  states, empty/error/loading states throughout.
- **Reusable component architecture**: `PropertyCard`, `PropertyGrid`, `SearchBar`,
  `FilterControls`, `PropertyGallery`, `AgentCard`, `ContactForm`, `TestimonialCard`,
  `CityCard`, `Header`/`Footer`, etc. — see `src/components`.
- **Typed data layer** in `src/data` (`types.ts`, `properties.ts`, `agents.ts`,
  `cities.ts`, `testimonials.ts`, `content.ts`) — add more properties by appending to
  the `properties` array; every UI piece reads from this one source.
- **Route-level code splitting** (`React.lazy`) so the initial JS payload stays lean.
- **SEO basics**: per-page `<title>`/meta description via `useDocumentMeta`, Open
  Graph tags, JSON-LD `RealEstateAgent` structured data, semantic heading hierarchy.
- **Accessibility**: semantic landmarks, a "skip to content" link, visible focus
  states, labelled form fields with live error messages, `prefers-reduced-motion`
  support, keyboard-navigable gallery lightbox (Esc / arrow keys).

## Images

Property, agent and city photography is sourced from Unsplash by URL
(`src/data/properties.ts`, `agents.ts`, `cities.ts`) — swap any `img(...)` call or
`photo` field for your own photography or a DAM/CDN URL whenever you're ready; no
other code needs to change.

Every image goes through `<SmartImage>` (`src/components/ui/SmartImage.tsx`), which
automatically falls back to a bundled, on-brand placeholder
(`public/images/ph/*.jpg`) if a remote photo ever fails to load — offline dev, a
dead link, a network-restricted environment — so the layout never shows a broken
image icon. Regenerate that placeholder set anytime with:

```bash
python3 scripts/gen_placeholders.py
```

## Notes

- All property/agent/testimonial content is realistic placeholder copy for a
  fictional company ("Urban Estate") — written specifically for this project, not
  lorem ipsum.
- Nothing here calls a real backend: the search/filter/favorites/forms are all
  local React state (+ `localStorage` for favorites), by design, per the brief.
- The map on the property details page is a stylised SVG placeholder, clearly
  labelled as such — wire up a real maps provider when you have an API key.
