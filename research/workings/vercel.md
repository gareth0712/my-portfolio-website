---
name: Vercel
url: https://vercel.com/
slug: vercel
category: uiux
industry: saas
reachable: true
---

# Vercel

**One-liner:** A near-monochrome, Geist-typeset marketing site where the product itself (deploy logs, code streaming, live model leaderboards) becomes the visual content — restraint and live demos doing the work that gradients and stock imagery do elsewhere.

## Overview
Vercel's homepage is the canonical "developer-tool SaaS" landing page. Audience is developers, platform/eng leads, and enterprise buyers. The overall impression is calm, precise, and confident: pure white background, near-black text, almost no decorative color except thin spectrum gradients and small product-UI accents. It reads like documentation that happens to sell — credibility is signaled through typography discipline and embedded working product surfaces (real code, real model names like "Claude Opus 4.8", live-looking usage percentages) rather than marketing puffery.

## Layout & Information Architecture
- Centered hero with a faint engineering-style grid/plus-mark crosshair overlay, then a switch to a hard-ruled **modular grid** below the fold.
- The "Your product, delivered." section is a literal 3-column x 2-row grid with visible 1px rules forming cells (Agents / AI Apps / on top, Web Apps / Composable Commerce / Multi-tenant below). Each cell = heading + one-line description + circular arrow button + a small product-UI artifact (chat box, feature chips).
- Generous whitespace; high air, low density. Content is chunked into discrete, self-contained "capability" blocks rather than a continuous scroll narrative.
- Repeated component grammar: heading -> short subhead -> single CTA/arrow -> embedded mini product demo. This template repeats down the page (Framework-Defined Infrastructure, Fluid Compute, AI Gateway, Templates, final CTA).
- Section widths are constrained to a centered max-width column; the ruled grid and crosshairs reinforce a "blueprint / precision engineering" metaphor.

## Navigation
- Sticky top nav, full-width, white with a thin bottom hairline. Left: triangle logomark + "Vercel" wordmark. Center-left: dropdown buttons (Products, Resources, Solutions) + flat links (Enterprise, Pricing). Right: "Ask AI", "Log In", and a solid black "Sign Up" pill.
- Products/Resources/Solutions are mega-menu dropdown buttons (`aria-expanded`), not plain links — wayfinding via categorized panels.
- A secondary event ribbon sits under the hero ("Ship 26 is coming to 5 cities" + "Get your ticket" pill) — promo banner styled as a contextual chip, not an intrusive bar.
- Skip-to-content link present (accessibility-conscious). Clear primary/secondary CTA hierarchy: black pill = primary, white outlined pill = secondary.

## Typography
- **Geist Sans** is the entire system (confirmed: `font-family: Geist, Arial, ...`). **Geist Mono** for all code/terminal/technical labels (GeistMono variable woff2 loaded).
- H1 measured at ~47px, weight 600, **letter-spacing -2.26px** — aggressive negative tracking is the signature move, giving large headings a tight, "designed" feel.
- Strong size jump between display headings and body; body copy is muted gray, headings near-black — hierarchy carried by weight + color + size, not by color hue.
- Mono font in code blocks gets syntax coloring (green/purple/blue keywords) — the only place saturated color appears in quantity.
- Tight, geometric-but-warm letterforms read cleanly from 14px labels up to 47px+ display.

## Color & Theme
- Pure white (#fff) background, near-black text. Light theme by default (no forced dark; `data-theme` null).
- Palette is essentially monochrome + functional accents: black CTA pills, gray secondary text, thin hairline rules.
- Signature color moment: a **subtle horizontal spectrum gradient** (warm orange -> cool teal) bleeding up behind the hero CTAs as fine line-art rays — restrained, almost watermark-like, not a hero gradient wash.
- Small saturated accents only inside product UI: colored model-leaderboard dots, syntax highlighting, a blue "send" icon. Color is reserved for *data*, not decoration.

## Imagery / Media
- Almost no photography or illustration. "Imagery" is the product itself: animated build/deploy logs, a streaming code editor (AI SDK / Python / OpenAI HTTP tabs), a live-looking AI model usage leaderboard with percentages, feature chips (Fluid, AI SDK, AI Gateway, Workflow, Sandbox, BotID).
- Engineering-blueprint motifs: faint dot/line grid, crosshair plus-marks at section corners.
- Art direction = "show the dashboard." Demos look like real product screens, blurring marketing and app UI.

## Motion & Interaction
- Per Vercel's own published guidelines, motion priority is **CSS > Web Animations API > JS libs**; GPU-only properties (transform/opacity), no layout-triggering animation, no gratuitous autoplay.
- Hero deploy-log/build animation communicates speed (product demo as motion).
- Code block appears to type/stream; model leaderboard percentages animate to imply live data.
- The final "Start Deploying" CTA renders letters as individually spaced spans ("S t a r t  D e p l o y i n g") — a per-character animation/hover hook.
- Microinteractions: circular arrow buttons, tab switches (AI Apps/Web Apps/Ecommerce... and AI SDK/Python/OpenAI HTTP), copy-code button, radio model toggles (OpenAI/xAI/Anthropic) — all interactive, all in-page.
- Motion is used to clarify cause/effect (how deploys/data flow), never as ambient decoration.

## Tech / Stack (if known)
- **Next.js** (170+ `_next` static chunks; served from `vc-ap-vercel-marketing`). React-based.
- **Geist** design system + Geist Sans/Mono variable fonts (self-hosted woff2).
- Animation: per their engineering blog, **Motion (Framer Motion successor) + Three.js / ray-marching** for flagship pieces (Ship platform); homepage leans on CSS/WAAPI.
- Tailwind-driven typography tokens (Geist typography classes map size/line-height/tracking/weight).

## Notable Techniques (steal-worthy)
- Product-as-hero: replace decorative imagery with real, animated product surfaces (logs, code, live data).
- Aggressive negative letter-spacing on large Geist/geometric headings for an editorial, designed look.
- Ruled modular grid with visible 1px cell borders + corner crosshairs = "engineering blueprint" credibility cue.
- Color discipline: monochrome canvas, saturated color reserved exclusively for data/code (syntax, status dots).
- Single subtle spectrum gradient as the only "brand color" flourish, used as fine line-art, not a wash.
- Repeated component grammar (heading -> subhead -> single arrow CTA -> mini demo) for scannable, modular IA.
- Per-character spans on a CTA for letter-level motion.

## What to steal for a personal portfolio
- Go monochrome by default; let one restrained gradient or accent be your entire "brand color." Reserve saturated color for meaningful content (code, charts, status).
- Use a single geometric variable font (Geist is free) for both display and mono; lean on weight + negative tracking for hierarchy instead of multiple typefaces or colors.
- Show your work as live, interactive surfaces (a working mini-demo, a real terminal/log, a live API response) instead of static screenshots — it reads as proof, not marketing.
- Adopt a ruled modular grid with visible hairlines + corner crosshairs for a precise, "engineered" aesthetic with near-zero asset cost.
- Standardize one card template (title / one-line / single arrow CTA / artifact) and repeat it — consistency reads as polish.
- Prefer CSS/transform-opacity motion that explains something (cause/effect), avoid autoplay decoration; include a skip-nav and clear primary/secondary CTA pills.

## Screenshots
- shots/vercel/01-hero.png
- shots/vercel/02-mid.png
- shots/vercel/03-lower.png
- shots/vercel/04-full.png
