---
name: Obys Agency
url: https://obys.agency/
slug: obys-agency
category: uiux
industry: agency
reachable: true
---

# Obys Agency

**One-liner:** A Ukrainian (Kharkiv) studio whose own 2026 site fuses Swiss/neo-grotesque editorial discipline with a bespoke synchronized-scroll work index and WebGL hover-bloom previews — minimalist on the surface, deeply engineered underneath (custom font, in-house rAF animation engine, Strapi + plain CSS).

## Overview
Obys is a concept-driven design studio (founded 2018, Awwwards Studio of the Year 2019 & 2023). The homepage IS the work index — there is no marketing hero with a tagline; instead the entire viewport is a living, scroll-driven gallery of ~20 case studies. The impression is that of a print art-director's contact sheet brought to life: restrained black-on-white, oversized custom type, generous negative space, and motion that only reveals itself on interaction. It targets prospective high-end brand/web clients and the design community (it's a portfolio that doubles as a flex of front-end craft).

## Layout & Information Architecture
Three-zone editorial grid that all scroll in sync:
- **Left column** — a vertical text list of every project name (Makhno, Source Unknown, Autex, Eminente, …). The currently-centered project is rendered black/active; the rest sit muted grey. Acts as a live table-of-contents + progress indicator.
- **Center column** — the scrolling media stack. The active project's image sits dead-center, framed by bracket glyphs `( )` that act as a fixed "viewfinder" the content scrolls through.
- **Right column** — per-project metadata: category tags (e.g. "Fashion, Photography" / "Creative Direction, Web Design/Dev") and a numeric index ("10"). Plus a persistent studio blurb and `info@obys.agency`.
- **Corners** — top-left oversized `OBYS®` wordmark; top-right nav + live CEST clock; bottom-left layout toggle (Vertical / Horizontal / Grid); bottom-right `©2026 Obys`.

The IA is radically flat: one page = the whole portfolio. Whitespace is the dominant material; density is deliberately low so each work tile gets full attention. The user picks a *view mode* (vertical scroll list, horizontal scroll, or a 12-column grid) rather than navigating pages.

## Navigation
Minimal persistent chrome, fixed to viewport corners (does not scroll away). Primary nav is just **Work · About · Contact** top-right; **Contact** is a button (likely opens an overlay/modal rather than a route). The real "navigation" is the three layout-mode toggles bottom-left — Vertical (default), Horizontal, Grid — which re-flow the same dataset into different browsing metaphors. Wayfinding comes from the always-visible left name-list + center viewfinder brackets + right-side index number, so you always know where you are in the set. No hamburger, no mega-menu — wayfinding is spatial, not menu-driven.

## Typography
- **Custom typeface: OTF Obys NG** — an in-house neo-grotesque built to work as both display and text, treated as a "living system" defining rhythm/spacing/hierarchy. Computed `font-family` resolves to `"Obys", serif` (serif is just the fallback).
- Massive display scale for the `OBYS®` wordmark (200px+ optical), dropping to small, tightly-tracked grotesque captions for metadata and the studio blurb — a deliberate dramatic scale jump (hero/caption, almost nothing in between).
- Strongly left-aligned, ragged-right, generous leading on the blurb. Pure Swiss/International Typographic Style influence: type and grid do the design work, no decoration.

## Color & Theme
Near-monochrome. Body is `rgb(255,255,255)` white with `rgb(0,0,0)` black text (light mode). Imagery skews black-and-white / desaturated, so color only enters via the case-study photography itself (e.g. the Eminente tile's small color insert). No gradients, no accent color in the chrome — contrast and type weight carry all hierarchy. Maximum AAA-grade black-on-white legibility. (Note: the preloader/initial state renders on a black canvas with a circular masked preview and a counting `%` indicator — "94" was caught mid-load — so the load sequence inverts to dark before settling to white.)

## Imagery / Media
Case-study tiles are art-directed stills (architecture, fashion, product, editorial). One `<canvas>` element present = native WebGL layer used for hover/preview effects. Per Codrops, case-study tiles "hide inside a strict twelve-column grid until hovered, then bloom into full-bleed WebGL video," with micro shadow shifts (~2px) echoing a parallax handset. 38 `<img>` on the page; no `<video>` in static DOM (video is WebGL-driven, injected on interaction). The circular masked image at the top is a signature framed-preview motif.

## Motion & Interaction
- **Synchronized scroll engine** — left name-list, center media column, and right metadata all advance together as one timeline; the bracket "viewfinder" stays fixed while content scrolls through it.
- **In-house animation system** — NOT GSAP-driven here. Motion runs on a custom engine built on `requestAnimationFrame` + the Web Animations API for frame-precise timing control.
- **WebGL hover-bloom** — grid tiles expand from contained still to full-bleed WebGL video on hover; subtle 2px shadow slide adds depth.
- **Layout-mode morph** — toggling Vertical/Horizontal/Grid animates the same dataset between three browsing metaphors.
- **Live CEST clock** + animated `%` preloader (counts up over a circular mask reveal).
- **Performance-conscious motion**: LCP ≈1.3s desktop / 1.7s on 4G; variable fonts load a subset first then full axes after idle; tweens pause in background tabs; `prefers-reduced-motion` freezes glyph morphs and swaps slide-ins for fades.

## Tech / Stack (if known)
- **Animation:** in-house rAF + Web Animations API engine (not stock GSAP for the core), plus **native WebGL** for tile/video effects.
- **CMS:** Strapi (headless) feeding the case-study data.
- **Styling:** plain hand-written CSS (no Tailwind/utility framework) — "minimal and direct."
- **Custom font:** OTF Obys NG (variable, subset-then-full loading strategy).
- No `meta[name=generator]` exposed; rendering appears bespoke/SPA-like.
- Source: Obys' own write-up on Codrops ("Designing Ourselves: The New Obys Identity and Website", May 2026).

## Notable Techniques (steal-worthy)
- **Viewfinder bracket cursor** — fixed `( )` glyphs that content scrolls *through*, turning a scroll list into a "now selecting" framing device. Cheap to build, instantly distinctive.
- **Tri-column synchronized scroll** — name list + media + metadata locked to one scroll timeline so context is never lost.
- **Multiple layout modes for one dataset** (Vertical/Horizontal/Grid) — lets the visitor choose their browsing rhythm; great craft signal.
- **Hover-to-bloom WebGL video** — still tile contained in grid, explodes to full-bleed motion only on intent.
- **Custom variable font as the brand** — type *is* the identity; subset-first loading keeps LCP fast despite heavy type animation.
- **Corner-anchored persistent chrome** (logo / nav / clock / mode-toggle / copyright) framing a content "stage" in the middle.
- **Accessibility-aware motion** — full `prefers-reduced-motion` fallback path baked in, not an afterthought.

## What to steal for a personal portfolio
- Make the **work index the homepage** — skip the generic hero; let projects be the first thing seen.
- Add a **fixed viewfinder/active-marker** the project list scrolls through — turns a boring list into a deliberate selection UI with almost no extra DOM.
- **Sync a left name-list with the center media** so hovering/scrolling a name highlights its work — strong wayfinding, easy with scroll-position math.
- Offer **a single alternate layout toggle** (e.g. list ↔ grid) — reads as craft without doubling the build.
- Lean on **one strong (even free variable) grotesque at extreme scale contrast** + strict black-on-white; restraint > effects for a junior dev's credibility.
- **Always ship `prefers-reduced-motion` fallbacks** and pause animations in background tabs — Obys proves heavy motion + fast LCP can coexist.
- You do NOT need GSAP for everything — a small `requestAnimationFrame` loop driving the scroll-sync is enough and lighter.

## Screenshots
- shots/obys-agency/01-hero.png (black load/hero state: circular masked preview + centered tile stack + counting % indicator)
- shots/obys-agency/02-mid.png (full tri-column system: OBYS® wordmark, name list, viewfinder brackets, metadata, mode toggle)
- shots/obys-agency/03-lower.png (further scroll through the work stack)
- shots/obys-agency/04-full.png (full-page capture)
