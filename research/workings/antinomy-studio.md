---
name: Antinomy Studio
url: https://antinomy.studio/
slug: antinomy-studio
category: uiux
industry: design-studio
reachable: true
---

# Antinomy Studio

**One-liner:** A near-monochrome, type-led studio site that proves restraint is a flex — almost no chrome, full-bleed media reveals, buttery Lenis scroll and WebGL, all on a 2-colour palette that still won Awwwards SOTD.

## Overview
Antinomy is a global creative + dev studio (Amsterdam, Berlin, New York) whose homepage doubles as a thesis statement: clarity over decoration. The page is a single long scroll — a giant editorial headline, three featured project tiles, an awards line, and a contact-forward footer. The impression is confident and quiet: tiny UI text, enormous statement type, lots of empty white, and media that does the heavy lifting. It reads like a print art-direction portfolio ported to the browser with motion polish. Audience is brand/marketing decision-makers shopping for a high-end studio.

## Layout & Information Architecture
- Single-page narrative scroll. Sections in order: hero statement → "we create brand experiences" → "our work spans…" with 3 project tiles → awards statement → lifestyle/office imagery → client logo row → oversized "Mail" contact footer.
- Extreme whitespace. The hero is mostly empty white with a one-line centered micro-caption ("ANTINOMY IS A GLOBAL CREATIVE STUDIO…") before any imagery appears.
- Two-up grid for project tiles (I-D, Atlantic/MetaMask, Gemini) — square-ish cards with logo-forward art over flat brand-colored backgrounds.
- Heading hierarchy is deliberate: h1 is the small uppercase tracking label (12px!), while the visual headlines are large h2/h3 — semantics decoupled from visual size for SEO + art direction.
- Density oscillates: vast empty zones punctuated by full-bleed image moments. The rhythm itself is the design.

## Navigation
- Fixed top bar: left wordmark "Antinomy" (with an "A" mark that animates in), right an inline comma-separated nav — "Home, Projects, About, Contact." styled as running text, not buttons.
- Nav stays pinned and flips legibility against scrolling content (dark text turns to mixed color over imagery in the mid screenshot — contrast-aware blend).
- No hamburger on desktop; wayfinding is minimal because the IA is shallow (4 routes). Routes are real Nuxt pages (/projects, /about, /contact), pre-rendered static.

## Typography
- **ABC Diatype** (Dinamo grotesk) throughout — a single neutral Swiss-style sans, no pairing. Confident mono-type system.
- Dramatic scale contrast: 12px uppercase tracked labels vs. ~clamp-driven 40–80px+ statement headlines. The gap between smallest and largest type is the primary hierarchy signal.
- Tight leading on the big headlines, sentence-case for statements, ALL-CAPS + letter-spacing for labels and project names.
- Type is treated as layout: headlines span near full width and break across lines like an editorial spread.

## Color & Theme
- Essentially 2 colors: pure white `#FFF` background, pure black `#000` text. Awwwards literally tags it "2 colors."
- All chroma comes from the project media (MetaMask purple/orange fox, Gemini blue gradient logo, I-D neon). The brand stays neutral so client work pops.
- Footer inverts to black bg / white "Mail" — the one hard theme flip, used as a closing beat.
- High contrast = strong accessibility baseline; no gradients in the chrome itself.

## Imagery / Media
- Mix of (a) flat brand-colored project tiles with vector logos and (b) real lifestyle/office photography (warm interiors, a person on a bed, a styled workspace) full-bleed.
- Art direction is editorial: photography is desaturated/natural, not glossy stock. It grounds the abstract type.
- `<canvas>` present → WebGL layer (studio uses OGL / Three.js per their own writeups) drives image reveals and likely the wordmark/flicker effects seen on project pages.

## Motion & Interaction
- **Lenis smooth scroll** confirmed (`html.--smooth`) — the signature inertial, weighty scroll feel.
- WebGL canvas for media transitions; the studio is known (Codrops dev spotlight, Cannes/Lovie animation awards) for scroll-driven image reveals and "flickering image" hovers on project lists.
- GSAP drives timeline animations (per Awwwards stack). Expect staggered text reveals, the "A" mark draw-in, and parallax between the pinned nav and scrolling media.
- Microinteractions: nav contrast adapts over imagery; project tiles carry a "↘" affordance glyph signalling outbound navigation.
- Static screenshots can't capture it, but the experience is defined by motion smoothness, not flashy effects — premium feel via easing and reveal timing.

## Tech / Stack (if known)
- **Nuxt.js / Vue.js**, fully static-generated (`/_nuxt/static/.../payload.js` per route) — likely hosted on Netlify.
- **GSAP** (animation), **Lenis** (smooth scroll), **OGL/Three.js** (WebGL).
- **DatoCMS** for content (per Awwwards).
- **ABC Diatype** self-hosted webfont.
- Analytics: Microsoft Clarity + Google Tag Manager/GA4; Cloudflare Insights beacon.

## Notable Techniques (steal-worthy)
- Semantic vs. visual type decoupling: a 12px uppercase label is the `<h1>`; the big "headlines" are h2/h3. Art direction and SEO both served.
- 2-color discipline so client work supplies all the color — the studio brand never competes with the portfolio.
- Nav as running prose ("Home, Projects, About, Contact.") instead of button chrome — quieter, more editorial.
- Contrast-adaptive pinned nav that stays legible over both white space and full-bleed imagery.
- Lenis + WebGL reveal pairing for a "premium weight" scroll that reads as craft, not gimmick.
- Oversized inverted "Mail" footer as a single dominant CTA — contact is the loudest element on the page.

## What to steal for a personal portfolio
- Go monochrome and let your project thumbnails be the only color. Forces visual coherence for free.
- Use one strong grotesk (Diatype/Söhne/Neue Haas) and create hierarchy purely through scale — tiny tracked labels vs. huge statements. No second typeface needed.
- Add Lenis smooth scroll — single biggest "expensive" feeling upgrade for the least effort; no WebGL required.
- Decouple heading semantics from size: keep one true `<h1>` for SEO, style display text independently.
- Make the contact CTA the largest thing on the page (inverted footer block). Ends the scroll on the action you actually want.
- Use a "↘" / arrow glyph as a consistent outbound affordance on project cards.
- Lots of intentional whitespace between full-bleed moments — rhythm beats density.

## Screenshots
- shots/antinomy-studio/01-hero.png
- shots/antinomy-studio/02-mid.png
- shots/antinomy-studio/03-lower.png
- shots/antinomy-studio/04-full.png
