---
name: Jack McDade
url: https://jackmcdade.com
slug: jack-mcdade
category: portfolio
industry: design-studio
reachable: true
---

# Jack McDade

**One-liner:** A defiantly anti-minimalist personal site that turns "ignore every clean-portfolio convention" into a coherent, memorable brand — 80s/90s kitsch, hand-drawn annotations, and chunky display type executed with enough craft that the chaos reads as intentional, not amateur.

## Overview
Personal site of Jack McDade — designer, developer, and creator of the Statamic CMS. The hero literally states the thesis: "I'm tired of boring websites." It's a portfolio + content hub (articles, YouTube videos, interviews, design work) and a funnel to his Radical Design Course. The entire site is a live demonstration of his design philosophy: be weird, be memorable, break the rules on purpose. Overall impression: loud, playful, retro, and deeply personal — the opposite of the templated dark-mode-gradient SaaS portfolio. It works because every "rule break" is deliberate and consistent.

## Layout & Information Architecture
Single long-scroll homepage broken into full-bleed color-blocked bands, each with its own background color (dark teal hero → cyan band → content cards). No conventional 12-col grid feel; layout is asymmetric and intentionally irregular. One section right-aligns its body copy with a self-aware caption ("aligned this text to the right for no real reason other than to mess with you") — breaking alignment conventions as a joke that doubles as a personality signal. Generous vertical whitespace inside the cyan band lets the oversized type breathe. Density is low-to-medium: big type, big images, lots of air, punctuated by busy decorative clusters (palm trees, flamingo, pink tiger, squiggle arrows). Content modules: hero with portrait → course CTA banner → recent articles list → tilted polaroid photo stack → personal bio manifesto.

## Navigation
Top horizontal nav, icon + label pairs (each link has a small custom doodle icon above the word): Radical Design Course, Videos, Interviews, Articles, Design Work, Connect. Logo wordmark top-left in the display font. Not a hamburger on desktop — flat, fully-exposed nav. Wayfinding is simple because the site is shallow. The nav icons are hand-styled to match the overall illustrated aesthetic rather than generic line icons. Two social links (YouTube, Twitter/X) anchor the hero bottom.

## Typography
Three-font system, all doing distinct jobs:
- **peachy-keen-jf** (display) — a rounded, ultra-bold retro sans used for all headings and the logo. h1 ~60px, set in butter-yellow on the dark hero and in dark teal on the cyan band. This is the brand voice; it carries the 80s/90s feel single-handedly.
- **Nanum Pen Script** (handwritten) — used for body copy in feature sections and for the doodled marginalia ("That's me!", arrow callouts). Makes the page feel hand-annotated, like a sketchbook.
- **code-saver** (monospace) — accents/code/labels.
- **system-ui stack** — fallback/utility body text.
Hierarchy is driven by extreme size + color contrast, not by a refined modular scale. Pairing of a fat retro display + casual handwriting + mono is unusual and is the signature move.

## Color & Theme
High-saturation retro palette. Hero band: dark teal (#1a3a3a-ish) with butter-yellow headline (rgb 247,244,116). Adjacent band: full electric cyan (#00FFFF) with dark teal type on it. Accent props in hot pink (flamingo, tiger), green palms, and a yellow "RADICAL DESIGN" sticker card with a hard black offset drop-shadow (sticker/comic aesthetic). Contrast is bold and intentional — yellow-on-teal and teal-on-cyan are vibrant but legible at the large sizes used. No gradients-as-crutch; color is flat, blocky, and confident. This is "maximalist retro," not dark-mode-minimal.

## Imagery / Media
- Painterly/cutout treatment of Jack's portrait with neon paint-splash strokes (cyan/magenta/yellow) ringed by a hand-drawn circle — the focal art.
- Decorative 80s/90s props: palm trees, pink flamingo, pink tiger — composed around the hero like stage scenery.
- Tilted polaroid-style photo frames (white border, rotation, soft shadow) including an animated GIF still labeled "Cool Runnings" — personal photos presented as scattered snapshots.
- Hand-drawn squiggle/loop arrows connecting captions to elements (illustration as connective tissue, not just decoration).
- Sticker-card graphics with hard offset shadows. Art direction is consistent: everything looks hand-made, retro, and warm.

## Motion & Interaction
Powered by Alpine.js (v2) for lightweight interactivity. Search results and the site's own copy describe it as a "wacky thing" with large images and playful behavior. Expect hover wobbles/scale on the doodle nav icons and cards, and parallax/entrance reveals on the decorative props as you scroll between color bands (static screenshots can't capture these). The handwritten arrows and captions are positioned to feel like they animate/point on reveal. Cursor is default (`auto`) — no custom cursor gimmick; the personality comes from the art, not pointer tricks. Restraint here is notable: the site is loud visually but doesn't overload with heavy JS motion.

## Tech / Stack (if known)
- **CMS:** Statamic (Jack is its creator) — Laravel/PHP/Blade under the hood.
- **JS:** Alpine.js v2 (CDN), plus a Vite-built bundle (`/build/assets/site-*.js`) — so Tailwind CSS + Vite is the near-certain front-end pipeline.
- **Analytics:** Fathom (privacy-focused, `cdn.usefathom.com`).
- **Fonts:** self-hosted/served webfonts peachy-keen-jf, code-saver, plus Google's Nanum Pen Script.
- No heavy WebGL/Three.js/GSAP detected — the wow-factor is art direction + typography, not a render engine.

## Notable Techniques (steal-worthy)
- **Thesis-as-hero:** state your design philosophy as the headline ("I'm tired of boring websites") so the site argues for itself.
- **Three-font personality system:** fat retro display + handwriting + mono, each with a clear job — instantly recognizable.
- **Color-blocked full-bleed bands** instead of a uniform background — each scroll section is a new "room."
- **Hand-drawn marginalia** (arrows, captions in a script font) to guide the eye and inject voice — illustration as UX wayfinding.
- **Self-aware copy** that comments on its own design choices ("aligned right just to mess with you") — turns a rule-break into a joke that builds rapport.
- **Sticker/comic drop-shadow cards** (hard offset black shadow, slight rotation) for a tactile, physical-object feel.
- **Lightweight stack, heavy personality** — Alpine + Tailwind, no render engine; proof you don't need WebGL to be memorable.

## What to steal for a personal portfolio
- Pick a single strong point of view and make the homepage *be* that argument, not just list projects.
- Commit to a distinctive type system (one bold display face does 80% of the brand work) instead of safe Inter/Helvetica.
- Use full-bleed color bands to chunk a long scroll into memorable, differentiated sections.
- Add a handwritten/script font + a few hand-drawn arrows for warmth and to direct attention — cheap, high-personality.
- Inject self-aware microcopy: it signals confidence and makes a stranger like you.
- Tilted polaroid/sticker framing with offset shadows is an easy way to make flat images feel physical and crafted.
- You don't need GSAP/Three.js — Alpine + Tailwind + strong art direction is enough to stand out. Spend the effort on craft, not framework weight.

## Screenshots
- shots/jack-mcdade/01-hero.png
- shots/jack-mcdade/02-mid.png
- shots/jack-mcdade/03-lower.png
- shots/jack-mcdade/04-full.png
