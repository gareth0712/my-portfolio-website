---
name: Sara Soueidan
url: https://www.sarasoueidan.com
slug: sara-soueidan
category: portfolio
industry: dev-portfolio
reachable: true
---

# Sara Soueidan

**One-liner:** The reference-class accessibility-first dev portfolio — it proves its author's expertise not with flashy motion but with flawless semantic structure, world-class typography, and content-first restraint that loads instantly and works for everyone.

## Overview
Personal site of Sara Soueidan, an independent inclusive-design / accessibility UI engineer, author, speaker and educator. It is a content hub (blog, newsletter, speaking, the paid "Practical Accessibility" course, about) rather than a project showcase. The overall impression is calm, editorial, and authoritative — a writer's site. There is zero visual gimmickry; credibility is communicated through the quality of the typography and the obvious correctness of the markup (a "skip to main content" link is the very first element in the DOM). It is the antithesis of the agency/Awwwards aesthetic, and that restraint is itself the statement.

## Layout & Information Architecture
- No fixed `max-width` container on `main` — content blocks set their own measure (line length), so body copy stays in a comfortable ~60-65ch reading column while headings and grids can breathe wider.
- Homepage IA, top to bottom: hero intro ("Hi, I'm Sara." + bio paragraph with portrait), then a two-column band — "Latest articles from the blog" (left, dominant) and "Notable updates" (right, narrower) — then "Browse all articles", then a subscription/RSS/social region, then a "More on this site" secondary nav, then footer credits (Eleventy, Netlify).
- Whitespace is the primary design tool. The "lower" screenshot shows enormous vertical gaps between sections — density is deliberately low so each block reads as a discrete unit.
- Asymmetric two-column grid (content-heavy left, supporting right) rather than rigid equal columns. Clear visual hierarchy via size and weight, not boxes/cards/borders.

## Navigation
- Simple top horizontal nav, left-aligned wordmark "Sara Soueidan" + right-aligned links: Blog, Newsletter, Speaking, The Accessibility Course, About Me. Marked up as a real `<nav aria-label="Main">`.
- Not a sticky overlay; it scrolls with the page. A textual "Back to top" link (pointing to `#site-header`) is provided lower in the page instead of a floating button — progressive-enhancement friendly and screen-reader announced.
- Wayfinding is plain and honest: text links, underlined on the active/hover state, no hamburger on desktop, no mega-menu. The course link points off-site to practical-accessibility.today.

## Typography
- 100% system font stack — no web fonts loaded. Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Headings: `system-ui, -apple-system, ...`. This is a performance + resilience decision (zero font requests, zero FOUT, perfect rendering everywhere).
- Strong weight-driven hierarchy: H1 is `font-weight: 900` (heavy black) at ~36px; section H2s ("Latest articles from the blog") are large and bold; article titles bold mid-size; metadata ("Published on 17 Sep, 2025") small and lighter.
- Generous line-height and constrained measure make long-form reading effortless — the typography is tuned for an essayist, not a marketer.
- Hierarchy comes entirely from size + weight + spacing, never from color or decoration.

## Color & Theme
- Near-monochrome: pure black (`rgb(0,0,0)`) text on white. `html`/`body` background is transparent over a white page. Links are black too (differentiated by underline, not hue) — a deliberate accessibility choice so color is never the sole signifier.
- Body paragraph copy in the hero/article-intro renders in a muted blue-grey, giving a subtle second tier without relying on a saturated accent.
- `data-theme="enhanced"` is set on `<html>`, implying a JS-enhanced theming layer (progressive enhancement: a base experience plus an "enhanced" tier). No heavy dark-mode toggle was surfaced on the homepage chrome.
- No gradients, no shadows, no brand-color flourishes. The palette restraint guarantees AAA-level contrast everywhere.

## Imagery / Media
- One real photograph: a warm, well-lit portrait of Sara in the hero, anchoring the personal brand.
- Signature device: hand-drawn black line illustrations used as section markers — an origami/paper bird for the mailing list, a hand-sketched RSS icon, and a small owl mascot doodle tucked in the corner. These give the otherwise austere page warmth and personality without color or photography.
- No video, no 3D/WebGL, no decorative stock imagery. Art direction = personal sketches + one portrait.

## Motion & Interaction
- Motion is intentionally minimal — this is a content site that prioritizes performance and reduced-motion users. No scroll-jacking, no parallax, no page-transition library.
- Interaction is in the details: underline-on-hover links, focus-visible outlines, a real keyboard-accessible skip link, and the "Back to top" anchor. Microinteractions serve accessibility, not spectacle.
- The `data-theme="enhanced"` flag suggests JS progressively layers in nicer behavior on top of a fully functional no-JS baseline.

## Tech / Stack (if known)
- **Static site generator: Eleventy (11ty)** — credited in the footer; Sara has blogged about migrating Hugo → Eleventy for flexibility in structuring and styling pages.
- **Hosting: Netlify** (footer credit).
- **Content workflow:** drafts in Obsidian → Markdown `.md` files refined in editor → deploy. Pure Markdown content pipeline.
- **CSS:** hand-authored, system-font-only, no framework font loading; CSS custom properties / data-theme attribute for an enhanced tier.
- **JS:** minimal, progressive-enhancement layer only. No SPA framework, no GSAP/Framer/Lenis/Three.js.

## Notable Techniques (steal-worthy)
- Skip-link as the literal first DOM node + real ARIA-labelled landmarks — accessibility baked into structure, not bolted on.
- System-font-only typography: zero web-font requests, instant render, native feel on every OS — and it still looks premium via weight/scale discipline.
- Links differentiated by underline rather than color, so the design never depends on hue to convey meaning (color-blind / low-vision safe).
- Whitespace-as-hierarchy: huge inter-section gaps replace cards, borders, and dividers entirely.
- Hand-drawn line-art mascots (bird, owl, RSS) inject personality into a monochrome layout without adding color or weight.
- Asymmetric two-column band (dominant content + narrow supporting column) instead of equal grid — directs the eye and signals priority.
- `data-theme="enhanced"` progressive-enhancement pattern: working baseline first, niceties layered via JS.

## What to steal for a personal portfolio
- **Lead with structure.** A perfectly ordered, landmark-rich, skip-link-first DOM is the strongest credibility signal a dev can give — for a developer portfolio it IS the demo.
- **Go system-font-only** for a content/blog-heavy portfolio: kills FOUT, eliminates font payload, and ships a native, fast-loading feel. Carry hierarchy with weight (e.g. 900 H1) and size.
- **Use whitespace instead of cards.** Drop the bordered card grid; let generous vertical rhythm separate sections. It reads more editorial and senior.
- **Don't rely on color for meaning** — underline links, keep AAA contrast. It's accessible and it looks confidently minimal.
- **Add one human touch.** A single hand-drawn doodle / mascot (here: the owl) warms up an austere monochrome layout far more cheaply than animation.
- **Eleventy + Markdown + Netlify** is a battle-tested, low-maintenance stack for a writer-developer — drafts in Obsidian, deploy plain `.md`.
- **Asymmetric columns** to express priority (primary content wide, secondary narrow) instead of defaulting to symmetric grids.

## Screenshots
- shots/sara-soueidan/01-hero.png
- shots/sara-soueidan/02-mid.png
- shots/sara-soueidan/03-lower.png
- shots/sara-soueidan/04-full.png
