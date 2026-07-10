# Me

A newspaper-style personal site built with React + Vite.

## Structure

```
src/
  App.jsx              — assembles all the blocks below
  index.css            — all design tokens (colors, fonts) and styles
  data/content.js       — ALL your editable text lives here
  components/
    Dateline.jsx        — thin top bar (city, volume/year)
    Masthead.jsx         — big name + tagline
    MainNav.jsx           — nav links
    LeadStory.jsx         — the "about" front-page feature, with drop cap
    Seam.jsx              — the signature divider (code brackets → staff ticks)
    SectionFront.jsx       — reusable block, used once for Research, once
                             for Compositions
    Footer.jsx              — contact links
```

## Editing content

Almost everything you'll want to change day-to-day is in `src/data/content.js`:
your name, tagline, about text, thesis/research entries, and pieces list.
You shouldn't need to touch the `.jsx` files unless you want to change the
layout itself.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for deployment

```bash
npm run build
```

This produces a `dist/` folder of static files — deployable as-is to
GitHub Pages, Netlify, or Vercel with no backend required.

## Adding a new page (e.g. a standalone /cv or /compositions page)

This starter is single-page. If you want real routing later, add
`react-router-dom` and split `App.jsx` into route components — the
existing components (`SectionFront`, `Seam`, etc.) can be reused as-is
on any new page.
