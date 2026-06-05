---
name: Teenage Engineering
url: https://teenage.engineering/
slug: teenage-engineering
category: uiux
industry: hardware
reachable: true
---

# Teenage Engineering

**One-liner:** A masterclass in product-as-hero art direction — cinematic full-bleed product photography on pure black, wrapped in a Swiss-grid information architecture and a custom pictographic navigation system that is itself a piece of design.

## Overview
The site is the storefront and brand home for Teenage Engineering, a Stockholm hardware/synth/audio design company. It serves prospective buyers, existing owners (guides/support), and design admirers. The overriding impression is restraint and confidence: the products do all the talking. There is almost no marketing copy on the homepage — just product names, photography, and discreet "buy now" links. It reads like a printed product catalog translated to web: editorial, dense-but-orderly, and unmistakably on-brand. The aesthetic mirrors the physical products (the OP-1, PO series, EP-133 K.O. II) — minimal, utilitarian, playful, engineered.

## Layout & Information Architecture
- Pure Swiss/International Typographic Style applied to web: everything sits on a strict, mathematically aligned grid. CSS asset names confirm a primitive layout system (`grid`, `flex`, `container`, `block`).
- Homepage is a vertical stack of full-bleed product "hero blocks." Each product gets an edge-to-edge cinematic image, a lowercase product name, and a row of small "buy now" links to its store SKUs (main unit + accessories).
- Sequence on capture: featured release (sinus transmission soundtrack with vinyl render) → EP-133 K.O. II → EP-40 "riddim n' ting" → field system (TP-7 / CM-15 / TX-6) → OB-4 → pocket operator grid (PO-12 through PO-35) → "explore all products" → country/region selector → footer.
- Density is high but never cluttered — generous black negative space between blocks gives each product room to breathe. The grid does the organizing work, not boxes/borders.
- The pocket operator section is a compact text-link matrix (9+ SKUs as plain links), a deliberate contrast to the cinematic blocks above — list density where the catalog is deep.

## Navigation
- Top nav is a custom **pictographic / iconographic system**, not a conventional text menu. Each top-level destination is a small line-art glyph (a flower for "products," a cabinet for "store," a film-frame, a magnifying "finder," the "TX-O" logo mark) with a tiny stack of text sub-links beneath it (instruments / audio / designs under products; visit store / cart / checkout / deals under store; etc.).
- The nav doubles as a mega-menu and a brand statement — it looks like a control panel / schematic, echoing the hardware faceplates.
- Includes a Japanese-text block in the nav region (the brand has a strong JP audience), reinforcing the "engineering datasheet" feel.
- A persistent `search` button ("finder") and a country/region `<select>` (defaults by geo) handle wayfinding and localization.
- Logo "teenage engineering" set in two lowercase lines at far left — the wordmark itself is a layout element.

## Typography
- Single custom typeface: **`te-20`** (served via fonts.net / Monotype web fonts — confirmed in computed styles: `font-family: te-20, Unicode, sans-serif`). It is a tight, geometric, monospaced-leaning grotesque that matches the silkscreen lettering on their hardware.
- Almost everything is **lowercase** — product names, nav labels, CTAs. The few uppercase moments (e.g. "SINUS TRANSMISSION COMPLETED / ORIGINAL MOTION PICTURE SOUNDTRACK") are reserved for cinematic billing-style titles, used as deliberate contrast.
- No semantic `<h1>` on the homepage (querySelector h1 = none) — hierarchy is created purely through scale, weight, position, and photography, not heading markup. (An accessibility trade-off worth noting.)
- Type is small and precise — captions and SKU labels are tiny, reinforcing the technical-datasheet voice. Letter-spacing is tight.
- Beyond `te-20`, the loaded `document.fonts` set reveals a family of house cuts (`te-40`, `UniversTE20T`, `UniversTE40L` — Univers-derived) plus **per-product/per-campaign display faces**: `franxurter`, `TechnoType`, `swingus`, `riddim`, `riddimscript`, `ttregular`, `te-vjs`. Each product spotlight can carry its own typographic voice (e.g. the EP-40 "riddim n' ting" panel uses `riddim`/`riddimscript`) while the `te-20` house grotesque keeps the system coherent.

## Color & Theme
- **Pure black** (`rgb(0,0,0)`) background sitewide. This is the defining choice: it turns every product photo into a spotlit studio object and unifies disparate product imagery.
- Text is predominantly white/light-gray on black; body text color computes to black (used where blocks invert to light backgrounds, e.g. the EP-133 white-faceplate shot).
- Accent color comes almost entirely **from the products themselves** — orange light streaks on the K.O.-Sidekick mixer shot, the red record button, the colored vinyl. The brand restrains its own palette so product color reads as the accent. No decorative gradients, no brand-color washes.
- Contrast is high and intentional; the black canvas + selective product lighting creates depth without any UI chrome.

## Imagery / Media
- The entire experience is carried by **high-end studio product photography** — dramatic, directional lighting, shallow depth of field, often shot in near-darkness with rim/edge lighting so the product emerges from black (37 `<img>` on the page).
- Art direction is consistent: every product is photographed as a precious object, frequently at an angle, with cinematic light streaks and reflections (the mixer shot with orange laser-like streaks is a standout).
- A vinyl-record render for the soundtrack release adds a tactile, physical-media touch.
- Notably **no `<video>` and no `<canvas>`** detected on the homepage — the cinematic feel is achieved with still photography and CSS, not WebGL or video backgrounds. Restraint over spectacle.

## Motion & Interaction
- No GSAP or Three.js globals were exposed (`window.gsap`/`window.THREE` undefined) and there is no canvas/video, so motion is lightweight — scroll-reveal of stacked product blocks and hover states on links/CTAs rather than heavy physics or WebGL scenes.
- Interaction model is editorial and direct: hover a product → "buy now" links surface; the pictographic nav reveals its text sub-links. The "wow" is in art direction and typographic precision, not in flashy scroll-jacking.
- This is a deliberate counter-position to typical Awwwards motion-heavy sites: the craft is in stillness, composition, and restraint.

## Tech / Stack (if known)
- CSS assets use **Vite-style hashed filenames** (`root.QSqwWqQS.css`, `grid.BPtO4oiR.css`, `button.B8x4Racb.css`) split per-component (`form`, `block`, `flex`, `grid`, `container`, `button`, `app-context`) — strongly implies a modern component-based build (Vite) with a hand-rolled CSS/layout primitive system.
- No `__NEXT_DATA__`, no React/Vue root markers exposed, no `meta[name=generator]` — suggests a custom/in-house SSR framework or a stripped, framework-agnostic build rather than an off-the-shelf CMS. (Could be SSR'd then hydration-minimal; globals not exposed.)
- Web fonts via **Monotype/fonts.net** (MTI tracking script present) serving the proprietary `te-20` face.
- Analytics: Google Tag Manager / gtag (`G-BJE1ZP05H0`) + Google Ads conversion (`AW-924686147`).
- Self-hosted assets under `teenage.engineering/assets/` — integrated storefront + checkout (`/store/checkout`) suggests an in-house commerce backend, not Shopify-on-subdomain.

## Notable Techniques (steal-worthy)
- Pictographic nav: replace text menu items with custom line-art glyphs that echo the product/brand visual language — the nav becomes a brand artifact, not just utility.
- Pure-black canvas as a product-unifier: lets mismatched product photography read as one cohesive studio set, and makes product color the only accent.
- Product-as-hero, copy-as-afterthought: near-zero marketing prose; product name + price-link + photograph carry each section.
- Custom proprietary typeface tying web to physical product silkscreen — total typographic identity.
- Mixing density modes: cinematic full-bleed blocks for flagship products, then a compact text-link matrix for the deep PO catalog — right density for the content type.
- Lowercase-everything voice with rare uppercase cinematic titles as deliberate contrast.

## What to steal for a personal portfolio
- **Commit to one canvas color and let your work be the color.** A pure-black (or pure-white) background with restrained UI chrome makes any embedded media/screenshot look intentional and premium. Reserve all saturation for the project thumbnails.
- **Build a tiny custom icon/glyph nav** instead of a generic text navbar — a personal pictographic system (even 4-5 hand-drawn SVG glyphs) instantly signals craft and is memorable.
- **Pick one strong typeface and go all-lowercase** for a calm, confident, designy voice; reserve uppercase for a single billing-style headline as contrast.
- **Let layout hierarchy come from a strict grid + scale + position, not from cards/borders.** Generous negative space between full-bleed sections reads as confidence.
- **Resist motion-for-motion's-sake.** TE proves you can be Awwwards-tier with still photography, a grid, and immaculate art direction — cheaper to build and faster to load than WebGL.
- **Per-component split CSS** (Vite hashed chunks) is a clean, cacheable architecture worth mirroring for a fast portfolio.

## Screenshots
- shots/teenage-engineering/01-hero.png (pictographic nav + soundtrack release hero with vinyl render)
- shots/teenage-engineering/02-mid.png (EP-133 K.O. II white faceplate, inverted light block)
- shots/teenage-engineering/03-lower.png (K.O.-Sidekick mixer, cinematic orange light streaks; SKU buy-now links)
- shots/teenage-engineering/04-full.png (full-page stacked product-block composition)
