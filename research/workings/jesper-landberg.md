---
name: Jesper Landberg
url: https://jesperlandberg.com
slug: jesper-landberg
category: portfolio
industry: awwwards
reachable: true
---

# Jesper Landberg

**One-liner:** One of the most awarded independent creative developers alive (30+ Awwwards SOTD, FWA, Webby, 2x Awwwards Independent of the Year), whose current site is a deliberately stripped-back Swiss-typographic index that flexes restraint and craft over spectacle.

## Overview
Personal portfolio of Jesper Landberg, a Swedish independent creative developer (founder of Alpacka/Twotwentytwo studio) famous for buttery GSAP motion and signature scroll/drag/cursor interactions used across dozens of award-winning client sites. NOTE: the live site at capture time is an interim "Full site soon" placeholder — a pure-typography index of 28 selected works linking out to the live client sites, with no project images, video, or WebGL on the page itself. It reads as an intentional editorial statement: just the name, the role, a numbered index, recognition, and contact. The full immersive site (the one that won the awards) is being rebuilt. Audience: studios, agencies, and high-end clients evaluating a top-tier dev-for-hire.

## Layout & Information Architecture
Two-column editorial layout on a stark white canvas. LEFT column: the name "Jesper Landberg" set huge, pinned/sticky so it stays anchored the entire scroll. CENTER column carries all content in a single vertical flow: tagline ("Independent / Creative Developer / Selected Index (28)") → the 28-item project index (newest first, 2025 → 2021, each line a project name with a superscript year) → "Recognition" → "Contact". Generous, almost luxurious whitespace; the right two-thirds of the viewport is mostly empty by design. Top-right corner holds a single small circular dot button + "Full site soon" label. No hero image, no cards, no grid of thumbnails — density is deliberately low and the eye is forced onto typography and the index. Single-page, no sub-routes in this interim build.

## Navigation
Effectively no traditional nav — the page IS the navigation. The 28 project titles are the primary links (each opens the live client site in a new context). A fixed `<header>` (`s:fixed top-0 left-0 w-full, pointer-events-none, z-10`) holds the corner dot and "Full site soon". Wayfinding is purely scroll + the sticky left-column name acting as a persistent anchor/brand mark. Contact links (Email, X, Instagram, LinkedIn) live at the bottom as plain text links. Mobile collapses the corner dot to `top-15 right-15` via Tailwind responsive prefixes.

## Typography
Single typeface doing all the work: **Suisse Int'l** (`font-family: suisse, sans-serif`) — the quintessential neo-grotesque Swiss workhorse, signalling design literacy. Massive scale contrast: H1 name ~50px+ and the index titles set large and bold, against tiny labels ("Recognition", "Contact", "Full site soon") and superscript years in a much smaller size. Tight, confident letter-spacing; left-aligned ragged-right. Hierarchy is created almost entirely through size jumps and the superscript-year device rather than color or weight variety. Pure black (#000) type on pure white — maximum legibility, zero decoration.

## Color & Theme
Monochrome to the extreme: body `background: rgb(255,255,255)`, text `rgb(0,0,0)`. No accent color, no gradient, no dark mode toggle. The only non-text graphic element is the small black filled circle (`bg-current rounded-full`) in the top-right. The restraint is the brand: a developer this awarded can afford to ship black-on-white and let reputation + craft carry it.

## Imagery / Media
None on the page itself (verified: 0 `<img>`, 0 `<video>`, 0 `<canvas>`). This is the headline finding for the interim build — it is 100% type. All visual richness is offloaded to the 28 outbound links (the live client sites). For the consolidation: do NOT expect on-page photography/WebGL here; the award-winning imagery lives in the linked projects (The Lookback, Griflan, 111w57, 53West53, etc.).

## Motion & Interaction
On-page motion is minimal but present in the scaffolding: the corner dot carries a `js-scale` class (JS-driven hover scale micro-interaction) and `cursor-pointer`; the sticky left-column name produces a scroll-pinned parallax-like effect as the index scrolls past it. Per research, Jesper's signature interactions (on his full/award sites, not this placeholder) are the ones worth studying: a circular cursor "mask" that reveals the next project underneath and "pulls up" into a page transition; horizontal-scrolling project images locked against vertically-scrolling titles; smooth-scroll inertia; drag-based horizontal navigation. These are GSAP-driven and are his calling card across CodePen (@ReGGae) and Codrops demos.

## Tech / Stack (if known)
- **Nuxt.js (Vue 2 era)** — confirmed: `_nuxt/` bundle paths, `window.__NUXT__` with `serverRendered: true`, `manifest.js`/`payload.js`. SSR/static-generated.
- **Tailwind CSS** — confirmed via utility classes with custom responsive prefixes (`s:`, `max-s:`), e.g. `s:fixed s:top-0 w-full pt-15 s:pt-25 pointer-events-none z-10` and `h-14 w-14 rounded-full bg-current before:-inset-15`.
- **Suisse Int'l** web font.
- **GSAP** — Jesper's well-documented animation tool of choice across his work and demos (not exposed on `window` here because it's module-scoped in the Nuxt bundle; `js-scale` hooks indicate vanilla JS + GSAP interaction layer rather than Vue transitions).
- Likely a smooth-scroll lib (Lenis or his own) on the full site; not detected as a global on this interim build.

## Notable Techniques (steal-worthy)
- **Confidence through subtraction:** a black-on-white, image-free type index as a portfolio. Reputation does the selling; restraint signals seniority.
- **Sticky brand anchor + scrolling index:** large name pinned in a side column while the work list scrolls past it — cheap to build, reads expensive.
- **Superscript-year index pattern:** `Project Name ⁽²⁰²⁵⁾` — an editorial, museum-catalog way to list work that scales cleanly and needs no thumbnails.
- **Numbered "Selected Index (28)"** framing — quantifies output and curates simultaneously; the count itself is a flex.
- **`js-scale` / `bg-current` micro-interaction primitives:** tiny, reusable hover-scale and currentColor-driven shapes instead of bespoke SVG.
- **Tailwind with custom screen prefixes (`s:`, `max-s:`)** for terse, readable responsive logic.
- **Outbound-link portfolio:** zero on-site case-study maintenance — the live client sites ARE the case studies.

## What to steal for a personal portfolio
- Lead with a **two-column editorial layout**: pinned name/identity on one side, a scrolling Swiss-type work index on the other. Works beautifully even before you have polished case studies.
- Use a **numbered, year-tagged index** as your primary work browser instead of a thumbnail grid — it's faster to build, easier to maintain, and looks far more refined.
- Ship a **"Full site soon" interim** that is still genuinely good: a great placeholder is better than a mediocre full site. Black-on-white type + your name + a list can be enough to look elite.
- Adopt **one strong typeface (a neo-grotesque like Suisse/Helvetica Now/Inter) and extreme size contrast** rather than multiple fonts or colors.
- Keep a **small, reusable interaction kit** (hover-scale dot, currentColor shapes, sticky anchors) you can apply consistently — then layer GSAP cursor/scroll effects on top once the structure is solid.
- For the ambitious version: study his **circular-cursor page-reveal transition** and **horizontal-image / vertical-title scroll lock** (CodePen @ReGGae, Codrops) as the signature "wow" upgrade.

## Screenshots
- shots/jesper-landberg/01-hero.png (name + tagline + top of index, "Full site soon" + corner dot)
- shots/jesper-landberg/02-mid.png (sticky left name with 2024→2022 index scrolling past)
- shots/jesper-landberg/03-lower.png (Contact block: Email / X / Instagram / LinkedIn)
- shots/jesper-landberg/04-full.png (full-page capture)
