---
name: Robb Owen
url: https://robbowen.digital
slug: robb-owen
category: portfolio
industry: awwwards
reachable: true
---

# Robb Owen

**One-liner:** A restrained, illustration-led creative-developer portfolio that wins on craft and personality rather than WebGL spectacle — bespoke line-art, an editorial serif system, and tasteful accent-pop motion make it feel handmade and accessible (Jammies "Personal site of the year" nominee).

## Overview
Personal site of Robb Owen, an independent creative developer from Abergavenny, South Wales. Audience is prospective clients/employers and the dev community. The homepage is a single scroll funnel: identity hero → "Let's work together" pitch → "Open Source" showcase (SynthWave '84, Tornis, Rekishi). Top-level routes exist for Work, About, Writing. Overall impression: confident, calm, and personal — the opposite of a maximalist 3D portfolio. It leans on a strong custom illustration system and a tight color/type palette rather than heavy motion libraries, which makes it read as crafted rather than templated.

## Layout & Information Architecture
Generous-whitespace, content-left / illustration-right two-column rhythm. The hero is asymmetric: large serif headline anchored left, a full-bleed line-art self-portrait bleeding off the right edge, with a diagonal hatch-fill panel behind the name as a visual anchor. Below, sections stack vertically with lots of breathing room (often a full viewport of negative space between blocks — see the gap between hero and "Let's work together"). The Open Source section becomes a list of horizontal cards: bespoke illustration on the left, heading + paragraph + outline-button CTA on the right, separated by thin rules. A small left-aligned vertical tick/divider line is used as a recurring wayfinding/structural motif. Low information density by design — each screen does one job.

## Navigation
Minimal persistent top bar: logo (mountain mark) at left, a "MENU" toggle button (expanded=false → opens an overlay/drawer exposing Home / Work / About / Writing plus social links: Bluesky, Instagram, GitHub, RSS, Email), and a standalone "HIRE ME" CTA (a prefilled `mailto:` with an emoji subject line — nice touch) at right. Includes an accessibility "Skip to content" link as the first focusable element. A "SCROLL" affordance sits at the bottom of the hero. Nav is light/transparent over the pale background; it is not a heavy mega-menu — wayfinding is intentionally simple.

## Typography
Single-family serif system: **Bitter** (Google Fonts, weights 400/700) for headings and body, `display=swap`. The whole site is a serif — unusual and distinctive for a dev portfolio (most reach for a grotesque sans). Big editorial scale on the hero ("Hi, my name is **Robb**." with "Robb" in bold 700 as the emphasis word, trailing period in accent teal). Body copy uses inline bold to highlight phrases ("independent creative developer", "the wider, the better"). Section labels ("MENU", "SCROLL", "HIRE ME") are small, letter-spaced uppercase for contrast against the large serif. Hierarchy is driven by size + weight within one family rather than by pairing two typefaces.

## Color & Theme
Light theme on a very pale blue-white background (`rgb(244, 249, 252)`). Ink is a deep navy for text. Accent system is blue + electric purple/violet, with a teal-green pop used sparingly (the period after headings, dot-grid textures). Default link color is classic browser blue (`rgb(0,0,238)`) in places. Contrast is high (navy on near-white). No dark mode observed. Texture instead of gradients: diagonal hatch fills and dotted half-tone grids fill empty rectangles, giving a screen-printed / risograph feel rather than flat or glassy surfaces.

## Imagery / Media
The signature asset is **bespoke SVG line-art** (31 inline `<svg>` on the page). The hero is a hand-drawn portrait of Robb in the brand's blue/purple line style. Each open-source project gets its own custom isometric illustration: SynthWave '84 = a glowing hexagon on a perspective grid (matching the theme's retro-synth vibe), Tornis = a watchtower among pines (literal pun — "tornis"/lookout monitors viewport state), Rekishi = a looping ribbon/knot. No photography, no video, **no canvas/WebGL** (`canvas` count = 0). Art direction is consistent: 1–2px outline, flat pale-blue fills, purple accents, occasional dot/hatch shading.

## Motion & Interaction
No GSAP/Three/Lenis globals detected (`window.gsap/THREE/Lenis` all false; `<html class="js">` only) — motion is hand-rolled in a single `main.js`. Reviewers specifically praised the "elegant motion design," so animation is present but subtle: scroll-triggered reveals, the "SCROLL" affordance, menu open/close transitions, and hover states on the outline-button CTAs and project cards. Because it's vanilla JS + SVG/CSS rather than a physics/WebGL stack, motion stays lightweight and accessible. The emoji-prefilled `mailto:` and the playful illustrations are the microinteraction personality, not cursor trails or parallax spectacle.

## Tech / Stack (if known)
Static / Jamstack site (Jammies "Personal site of the year" nominee — that award is Jamstack-conf's). Served from own domain with hand-authored asset pipeline: a single `assets/css/styles.css` and a single `assets/js/main.js` (no framework bundle, no hydration markers, no `meta generator`). Heavy use of inline SVG for illustrations and icons. Fonts via Google Fonts (Bitter). No detected React/Vue/Next, no GSAP, no Three.js, no Lenis — strong signal of a static site generator (Eleventy is the common Jamstack choice for this profile) with bespoke vanilla-JS interactions. RSS feed present (`feed.xml`), consistent with an SSG blog ("Writing").

## Notable Techniques (steal-worthy)
- **One-family serif identity** (Bitter everywhere) — instantly differentiates from the sea of sans-serif dev portfolios; hierarchy via size/weight, not pairing.
- **Bespoke per-project line-art illustrations** that pun on the product (watchtower for a viewport-monitor lib) — turns a generic "projects" list into brand storytelling.
- **Texture over gradient**: diagonal hatch fills + dotted half-tone grids fill negative space, giving a riso/screen-print look with near-zero asset weight (it's SVG/CSS).
- **Emoji-prefilled `mailto:` "HIRE ME"** — subject line `🤘 Hi Robb, I'd like to hire you` lowers friction and injects personality with zero backend.
- **Accent "period" detail** — the colored full-stop after each heading ("Robb.", "Open Source.") is a tiny repeatable brand signature.
- **Lightweight hand-rolled motion** (single `main.js`, no animation lib) proving you can earn motion-design praise without GSAP/WebGL.
- **Accessibility-first scaffolding**: skip-link, real headings hierarchy, semantic nav — "ambitious yet accessible" is lived, not claimed.

## What to steal for a personal portfolio
- Pick **one distinctive typeface** and commit to it across heads + body; let weight and scale do the hierarchy work.
- Replace stock screenshots with **custom illustrations that visually pun on each project** — far more memorable and shows craft.
- Use **SVG hatch/dot textures** to fill whitespace instead of gradients or images — cheap, brand-consistent, performant.
- Give the primary CTA personality: a **prefilled mailto** (or similar) is a one-line change that feels human.
- Don't reach for WebGL by default — **subtle vanilla scroll/hover motion** on a clean light theme can outscore a heavy 3D build on taste.
- Keep a **tiny repeatable signature** (here: the accent period) so the brand is recognizable across pages.
- Build it as a **static/Jamstack site** (single CSS + single JS) for speed and to keep a blog ("Writing") + RSS in the same system.

## Screenshots
- shots/robb-owen/01-hero.png
- shots/robb-owen/02-mid.png
- shots/robb-owen/03-lower.png
- shots/robb-owen/04-full.png
