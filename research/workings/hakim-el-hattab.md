---
name: Hakim El Hattab
url: https://hakim.se
slug: hakim-el-hattab
category: portfolio
industry: awwwards
reachable: true
---

# Hakim El Hattab

**One-liner:** The portfolio of reveal.js's creator reads like a magazine essay, not a case-study grid — giant editorial serif prose, inline "+++" expanders, and a dense mosaic of *live, animating* project thumbnails that prove craft instead of describing it.

## Overview
Hakim El Hattab is a Swedish front-end developer/interface designer, creator of reveal.js, co-founder of Slides.com, and author of dozens of "meaningfully pointless" interactive experiments (served to 140M+ people). The site is a single long-scroll page targeting fellow developers, designers, and potential collaborators/clients. Overall impression: confident restraint. A pure-white canvas, near-black text, one blue accent, and a content-first hierarchy where the work (animated previews) carries the visual weight rather than chrome or layout tricks. It is the inverse of a typical Awwwards WebGL hero — no fullscreen 3D scene, no loader spectacle. The flex is the *quantity and quality of real interaction work* embedded directly on the page.

## Layout & Information Architecture
- Single-column, long-scroll page (6 `<section>`s, ~69 links).
- Top: an oversized prose introduction set as flowing paragraphs (not headline + subhead) — the bio reads like body copy at display size.
- Middle/lower: a dense, irregular mosaic/grid of project thumbnails (apps, libraries, experiments, games) — roughly newspaper-like packing rather than a strict uniform grid. Each tile is a live preview, not a static image.
- Bottom: a compact Q&A block (4 toggle questions) + contact/social row (Email, Twitter, GitHub, CodePen) + "opensource" link.
- Generous whitespace around the intro; high density in the project mosaic. The contrast between airy prose and packed project field is the core compositional move.

## Navigation
- No persistent top nav bar, no hamburger, no mega menu. The only fixed-ish element is a Twitter bird glyph top-right.
- Wayfinding is the scroll itself: intro → projects → Q&A → contact. The page *is* the nav.
- Inline "+++" buttons act as progressive-disclosure expanders within sentences (e.g. after "working on Slides. +++" and "minimalist games. +++") — micro-navigation that reveals more text in place instead of routing away.
- Q&A questions ("Where are you based?", "What are you working on?", "Where have you worked?", "Are you available for hire?") are buttons that expand answers — an FAQ-as-nav pattern.

## Typography
- **Display/body face:** Libre Caslon Condensed (`font-family: LibreCaslonCondensed, sans-serif` — the serif is the real face; sans is just the fallback). A high-contrast condensed Caslon used at large sizes for the intro gives an editorial, print-magazine voice — unusual for a dev portfolio that would normally reach for Inter/a grotesque.
- Scale: the intro paragraphs are set very large (display-size body copy), creating a "read me first" focal block; project labels and Q&A drop to small UI sizes.
- Hierarchy comes from size + the single blue accent on links, not from weight stacks or all-caps. Headings in DOM are `h3` (kept low-key); the big intro is paragraph text, deliberately.
- Treatment: tight, literary, left-aligned. The condensed serif at scale is the signature.

## Color & Theme
- Background: pure white (`html` rgb(255,255,255); body transparent over it).
- Text: near-black `rgb(34,34,34)` — soft black, not #000, for a gentler editorial feel.
- Accent: a single saturated blue on inline links ("Slides", "@hakimel"). One accent, used sparingly, so every blue word reads as actionable.
- The grey `+++` expander marks are deliberately low-contrast (a noted accessibility weakness — flagged in external reviews as insufficient contrast).
- No gradients, no dark mode, no decorative color. Color discipline is near-total: white / soft-black / one blue.

## Imagery / Media
- The project mosaic thumbnails are **live, animating mini-previews** (e.g. real running canvases/CSS animations of his experiments — sphere particles, blobs, magnetic trails, etc.), served from a CDN (`d1835mevib0k1p.cloudfront.net/portfolio/v2/...`). Thumbnails for apps (Slides, ResumeFilter, MotionScribe, reveal.js) show actual product UI.
- No photography of the person, no stock, no illustration. Art direction = "the work is the imagery."
- The home page itself has **no WebGL canvas** (0 `<canvas>` on the index, no Three.js) — the heavy visual experiments live behind links at `lab.hakim.se/*`. The portfolio shell is intentionally lightweight HTML/CSS.

## Motion & Interaction
- Custom cursor: body carries `he-mouse` class and a `.cursor` element exists — bespoke pointer treatment.
- Load orchestration: body cycles `loading` → `ready` classes (`he loading he-mouse ready`), implying a scripted intro/reveal sequence rather than instant paint.
- Inline `+++` expanders: clicking reveals additional sentence/paragraph text in place — a microinteraction that keeps the reader in flow.
- Q&A toggles: expand/collapse answers inline.
- Project thumbnails animate continuously and/or react on hover (his signature is hover/scroll-driven micro-experiments).
- Search/press notes his broader signature: "animated, interactive and sometimes unexpected" — depth-modal (Avgrund), fold-in menus (Meny), physics toys, particle morphs. These define his interaction language even though the index page keeps motion subtle.

## Tech / Stack (if known)
- **No JS framework.** Page is hand-authored HTML with inline `<script>` blocks (only external scripts are Google Tag Manager `gtag` and Cloudflare insights beacon). No React/Vue/Next signature in the DOM.
- Custom CSS + vanilla JS for cursor, load sequence, and expanders.
- Fonts self-hosted/named (Libre Caslon Condensed).
- Assets on AWS CloudFront CDN; site fronted by Cloudflare (DNS + analytics beacon).
- The linked experiments (`lab.hakim.se`) are where Canvas/WebGL/CSS3D live; many are open source on his GitHub (`hakimel`).

## Notable Techniques (steal-worthy)
- **Bio as oversized editorial prose** in a condensed serif — replaces the generic "Hi, I'm X" hero with a literary read-me block.
- **Inline `+++` progressive disclosure** inside running sentences — adds depth without new pages or modals; keeps reading momentum.
- **Live animating project thumbnails** instead of static screenshots — the portfolio demonstrates skill rather than claiming it.
- **FAQ-as-navigation** ("Are you available for hire?" toggles) — answers hiring questions inline, doubling as conversion copy.
- **Radical color/chrome restraint** (white / soft-black / one blue, no nav bar) — lets the work be the only spectacle.
- **Framework-free, CDN-served, lightweight shell** — a credibility signal for a front-end specialist (the medium is the message).

## What to steal for a personal portfolio
- Lead with personality in *large editorial body copy*, not a templated hero headline — a condensed serif at display size instantly differentiates from the Inter/grotesque crowd.
- Make project tiles *move* (even a tiny looping CSS/canvas preview) so the grid proves capability on sight.
- Use inline expanders (`+++` / "read more" in-sentence) for optional depth — keeps the page short for skimmers, rich for the curious.
- Bake hiring/availability answers into a lightweight Q&A toggle near the footer — pre-empts the recruiter's first questions.
- Commit to one accent color and kill all other chrome; restraint reads as confidence.
- Caveat to avoid copying: his low-contrast grey `+++` and condensed serif at small sizes fail contrast/legibility checks — keep interactive affordances above WCAG AA.

## Screenshots
- shots/hakim-el-hattab/01-hero.png
- shots/hakim-el-hattab/02-mid.png
- shots/hakim-el-hattab/03-lower.png
- shots/hakim-el-hattab/04-full.png
