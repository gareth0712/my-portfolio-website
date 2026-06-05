---
name: Robin Noguier
url: https://robin-noguier.com/
slug: robin-noguier
category: uiux
industry: dev-portfolio
reachable: true
---

# Robin Noguier

**One-liner:** An Awwwards SOTD + Developer Award portfolio that renders its entire project showcase inside a single WebGL canvas, fusing editorial serif typography with spring-physics scroll and mouse-reactive light to make a one-page portfolio feel like an immersive product.

## Overview
Personal portfolio of Robin Noguier, a French interactive/product designer (ex-Ueno) based in Portugal. Built with developer Lorenzo Cadamuro. The homepage is a vertical stack of project "slides," each a full-viewport hero with a giant serif title, a short blurb, an "OPEN CASE STUDY" CTA, and a perspective-skewed project image rendered in WebGL. Overall impression: confident, editorial, technically flexed but restrained — it sells craft through the medium itself rather than through copy. Won Awwwards Site of the Day + Developer Award and CSS Design Awards recognition.

## Layout & Information Architecture
- Single-page scroll-driven IA. Each scroll "page" = one project (e.g. "Fun"), occupying a full viewport.
- Two-column hero grid: left = text column (eyebrow/title/description/CTA), right = floating skewed media. Generous whitespace; low text density, one idea per screen.
- Minimal global chrome: top-left wordmark "ROBIN NOGUIER," top-right "ABOUT" link. A vertical dotted scroll-progress indicator pinned to the right edge doubles as a slide pager.
- Deep content lives in dedicated routes: `/project/<slug>/` case studies and `/about/`. Home is a curated index, not a content dump.

## Navigation
- Almost no traditional nav. Only two real links on the home DOM: the current project CTA (`/project/fun/`) and `/about/`. Navigation is the scroll itself — projects advance as discrete spring-animated transitions, not free scroll.
- Wordmark returns home; right-edge dot rail signals position and count within the project set.
- Page changes (home → case study) use React-Spring `useTransition` for component cross-fades rather than hard route swaps, so it feels like an app, not a site.

## Typography
- **Eksell Display** (Letters from Sweden) — a high-contrast humanist serif — for the oversized project titles ("Fun"). This is the signature voice: editorial, warm, distinctive.
- **Silka** (geometric grotesque, weights 400/700) for body copy, eyebrows, CTAs. Clean sans pairs against the expressive serif.
- Big type-scale jump: display titles dwarf body text, creating instant hierarchy with only two type roles. Eyebrow label in caps/small for the section tag ("Fun").

## Color & Theme
- Effectively a 3-color system per project: a muted brand background (hero shows a desaturated teal/slate blue), white/light text, and the photographic image as the color accent. Root background is pure black between/under canvas layers.
- Tonal, low-saturation palette keeps focus on imagery and type. Each project can re-skin its background, giving the single page chapter-like variety without breaking cohesion.
- High contrast text-on-tone keeps it legible despite the muted base.

## Imagery / Media
- All homepage imagery (project stills, video previews, background) is drawn by Three.js via R3F — not plain `<img>`/`<video>`. This lets every image carry shader effects.
- Art direction: project media floats as a plane skewed in 3D perspective (slight rotation/curl), reinforcing depth and the "physical object" feel.
- A small thumbnail/device mock sits under the CTA as a secondary preview.

## Motion & Interaction
- **Scroll-hijacked slide transitions** driven by **React-Spring** spring physics — projects snap/interpolate in rather than scrolling linearly. (Synthetic teleport-scrolls don't repaint the canvas, confirming the scroll is virtualized, not native.)
- **Mouse-reactive lighting**: GLSL shaders bind a light/highlight to cursor position over the media — moving the mouse shifts the highlight across the image plane.
- **3D perspective skew** on media planes that responds to scroll/transition state.
- Page-level transitions via `useTransition` for app-like route changes; some sequences use Bezier-Easing curves instead of springs where a precise easing is wanted.
- Dotted right-rail acts as both progress meter and microinteraction anchor.

## Tech / Stack (if known)
- **Next.js + React** (confirmed: `__NEXT_DATA__` present). SSR/static routing.
- **Three.js via React-Three-Fiber (R3F)** — every WebGL element is a React component (reusable, isolated, state-reactive). Single `<canvas>` in the DOM.
- **GLSL shaders** for image effects (mouse-bound light).
- **React-Spring** for spring-physics animation; **Bezier-Easing** for custom curves; `useTransition` for page changes.
- **Prismic** headless CMS with custom slice/modules for content.
- Sources: Lorenzo Cadamuro's Medium build write-up; Awwwards/CSSDA listings; Codrops tutorial reconstructing these scroll animations.

## Notable Techniques (steal-worthy)
- Render the whole portfolio inside one WebGL canvas so images can carry shaders (mouse light, perspective) that DOM `<img>` can't.
- Treat each WebGL element as a React component (R3F) for reusability/isolation — animation logic lives in component state, not imperative spaghetti.
- Spring-physics scroll/slide transitions (React-Spring) for an app-like, snappy feel instead of native scroll.
- Two-font system only: one expressive display serif (Eksell) + one neutral sans (Silka) carries the entire hierarchy.
- Per-project background re-skin within a single page for chapter variety without losing cohesion.
- Dotted right-rail that fuses scroll progress + pager into one quiet wayfinding element.

## What to steal for a personal portfolio
- **Pair an editorial display serif with a clean grotesque** and let an oversized title do the branding — cheap, high-impact, no WebGL required.
- **One idea per viewport**: eyebrow → huge title → one-line value prop → single CTA. Ruthless density control reads as confidence.
- **Float the project image with a subtle 3D/skew transform** (CSS `perspective`/`rotate` is a low-cost approximation of the WebGL plane) for depth.
- **Use spring easing** (Framer Motion / react-spring) on section transitions instead of linear scroll for a premium feel.
- **Skin each project with its own muted background color** to give a one-pager visual rhythm.
- If you want the WebGL flex: a single R3F canvas with a mouse-tracked light shader on project thumbnails is the highest signal-to-effort hero you can build.

## Screenshots
- shots/robin-noguier/01-hero.png (hero: "Fun" project — teal stage, oversized Eksell title, skewed WebGL media plane, bottom-left thumbnail strip, right-edge dot rail)
- shots/robin-noguier/02-mid.png (same stage — scroll drives the carousel, not a document; layout unchanged)
- shots/robin-noguier/03-lower.png (thumbnail strip morphed into a 2x2 grid + next project peeking from bottom edge — carousel mid-transition)
- shots/robin-noguier/04-full.png (full-page capture)

## Live verification notes (this teardown)
- Confirmed Next.js: scripts under `_next/static/...`, `#__next` root present.
- Confirmed single `<canvas>` (Three.js/R3F), GA + GTM loaded.
- Confirmed font tokens: `eksell_rm_large`/`eksell_rm_small` (display serif) + `silka_rm` (body sans); body default fontFamily falls back to `"Times New Roman"`, hero h1 ~118px.
- DOM nav is just two real links: the active "OPEN CASE STUDY" CTA and "ABOUT"; project names (Fun, Esperanto, Blurr, Ueno, Airbnb, Google, SnickSnack, Iv-Skaya, Eagle Films) are clickable canvas-driven items, not anchors.
- Correction to prior note: screenshots 02/03 are NOT blank — the WebGL stage repaints on scroll (thumbnail strip animates into a 2x2 grid and the next project peeks in), so the canvas does respond to scroll-driven carousel state.
