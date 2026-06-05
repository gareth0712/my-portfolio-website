---
name: Off Menu
url: https://offmenu.design/
slug: off-menu
category: uiux
industry: design-studio
reachable: true
---

# Off Menu

**One-liner:** A near-white, almost-empty stage that turns the studio's portfolio into a physics-driven orbit of circular project thumbnails, with an AI chat assistant wired directly into the hero — the site is itself a demo of the "agentic interface" the studio sells.

## Overview
Off Menu is an AI-native product/brand studio building interfaces and brands for high-growth startups (Awwwards Site of the Day, April 2026). The homepage is not a conventional scrolling page — it's a fixed-viewport interactive canvas. Eight client projects (Resonant, Control Tower, Ditto, Hanover Park, Superintelligent, Tenacity, Utility, Flex) float as circular "mockup planets" orbiting a centered mission statement. The standout move is that the studio embeds a working AI chat ("Ask me anything...") with seeded prompts ("Where should I start?", "What do you do?", "I have a project") right into the hero — the website demonstrates the product category it sells rather than just describing it. Overall impression: confident, restrained, gallery-like, and quietly technical. It trusts negative space and motion to do the talking.

## Layout & Information Architecture
- **Fixed-viewport stage, not a long scroll.** The full-page screenshot came back almost entirely white with the same content pinned to the viewport — scrolling does not reveal stacked sections; it advances/cycles the orbiting projects (the centered label swapped Resonant → Superintelligent on scroll). The page is a controlled interactive canvas, not a document.
- **Radial / constellation composition.** Project thumbnails are scattered as circles of varying sizes around a central axis (the headline), evoking a solar system or scatter-plot rather than a grid. Deliberate asymmetry; no visible columns.
- **Extreme whitespace / low density.** The #FDFDFC canvas dominates; content occupies maybe 40% of the viewport. Generous breathing room signals premium positioning.
- **Persistent UI furniture:** logo top-left (O/M monogram), two top-right control buttons (a filled dot + a 3x3 dot-grid view toggle), prev/next carousel arrows on the left and right edges, a black pill "Let's work together" CTA bottom-left, and a small loading/orbit spinner bottom-right.
- IA pages behind the nav: Work, Services, Pricing, Approach, Book a Call, Writing (blog), plus a dedicated `/styleguide`.

## Navigation
- **Hidden/triggered nav, not a visible bar.** The default snapshot showed the nav links (Work / Services / Pricing / Approach / Book a Call / Writing) plus socials and Terms present in the DOM but visually collapsed behind the top-right toggle buttons (e7/e8) — an off-canvas / overlay menu pattern, fitting the gallery aesthetic.
- **Carousel wayfinding** via large circular prev/next arrows pinned to the left and right viewport edges — lets you step through the eight projects without scrolling.
- **View-mode toggle** (the 3x3 dot grid icon top-right) likely switches the orbit between the scattered "constellation" view and a structured grid index — a dual-mode browsing affordance.
- Persistent "Let's work together" pill keeps the conversion path one click away from any state.

## Typography
- **Single typeface: Neue Montreal** (`getComputedStyle(body).fontFamily` = `"Neue Montreal", sans-serif`) — a clean, geometric-humanist grotesque from Pangram Pangram, a go-to for premium studio sites.
- **Restrained scale.** The hero H1 ("AI-native studio building brands and web experiences for high-growth startups") is set at a modest size centered in the canvas — not a screen-filling display headline. Hierarchy comes from position and whitespace, not from huge type.
- Project names (Resonant, Superintelligent) render as quiet H2 labels beneath/within their orbiting circle as it becomes the focal item.
- Near-black ink (#12110D) on near-white; very high contrast, no decorative type treatments. Lets the imagery carry the personality.

## Color & Theme
- **Off-white light theme:** background `rgb(253,253,252)` (#FDFDFC), text `rgb(18,17,13)` (#12110D). Warm-neutral, paper-like rather than clinical pure white/black.
- **Black accent** reserved for the CTA pill and the monogram/control dots — high-contrast punctuation against the airy field.
- **No gradients, no brand color flood.** Color enters almost exclusively through the project thumbnail photography (green Flex art, blue-sky Superintelligent laptop, warm wood desk shots), so the palette feels alive but the chrome stays monochrome. Disciplined, editorial.

## Imagery / Media
- **Circular-masked project mockups** are the hero medium: laptops, phones, and monitors shot in real environments (desks, outdoor wildflowers, studio walls), each cropped into a perfect circle. The circle mask is the unifying visual signature.
- Mix of in-context device photography and brand-art shots (the Flex illustration of two figures). Strong art direction — every thumbnail is a styled scene, not a flat screenshot.
- The empty full-page capture strongly implies a **canvas/WebGL or absolutely-positioned transform layer** driving the floating elements rather than normal document flow.

## Motion & Interaction
- **Physics / orbit motion** is the core interaction: thumbnails drift and reposition as you scroll or use the arrows, cycling which project sits center stage (observed label swap Resonant → Superintelligent). Feels like a draggable scatter field.
- **Scroll = state change, not translate.** Scrolling advances the carousel/orbit instead of moving a long page — a hijacked-scroll gallery.
- **Embedded AI chat microinteraction:** an "Open chat" button and "Ask me anything..." textbox with three seeded suggestion chips ("Where should I start?", "What do you do?", "I have a project"). The site's primary CTA is conversational, not a form — a live demo of the agentic-interface product.
- **Loading/orbit spinner** bottom-right (animated dot ring) reinforces the "system thinking" motif.
- View-mode toggle animates between scatter and grid index. Hover states on the circular thumbnails almost certainly scale/lift them (standard for this pattern; not directly observed).

## Tech / Stack (if known)
- **Next.js (App Router) with Turbopack** — confirmed via `/_next/static/chunks/...turbopack-*.js` bundles.
- **Hosted on Vercel** — confirmed via `dpl_` deployment-ID query params on every chunk.
- **Neue Montreal** webfont (Pangram Pangram).
- No Next.js `__NEXT_DATA__` / `#__next` legacy markers (App Router RSC), and `window.gsap` / Framer globals were not exposed on `window` — animation is likely bundled (custom WebGL/canvas, or a tree-shaken Motion/GSAP/Lenis inside the chunks) rather than loaded via global script. AI chat implies a backend LLM endpoint (likely a Vercel serverless / edge route).

## Notable Techniques (steal-worthy)
- **Make the site the product demo.** A studio that builds agentic interfaces puts a working AI chat in its own hero — the strongest possible proof-of-capability. Show, don't tell.
- **Radial/constellation portfolio** instead of a card grid — turns "here are 8 projects" into an explorable space and instantly differentiates from every other studio site.
- **Circle-mask everything** as a single unifying device that makes wildly different client work look like one cohesive collection.
- **Fixed-viewport scroll-hijack gallery** — scroll cycles state rather than scrolling a page, keeping the composition pristine at every moment.
- **Monochrome chrome + color-from-content** — keep all UI furniture black/white and let only the work supply color.
- **Dual browse modes** (scatter view ⇄ grid index toggle) respect both delight-seekers and scanners.

## What to steal for a personal portfolio
- **Lead with a signature spatial metaphor** (orbit, constellation, scatter) for your project list — one memorable idea beats a generic grid for a portfolio whose job is to prove you can design.
- **Unify mismatched project shots with one mask/shape** (circle, or a consistent device frame) so a junior portfolio of varied work reads as intentional and cohesive.
- **Pick one strong typeface (Neue Montreal or a free alternative like General Sans) + an off-white/near-black warm-neutral palette** and let project imagery be the only color. Cheap to execute, instantly premium.
- **Keep a persistent black pill CTA** ("Let's work together") visible in every state — one always-available conversion path.
- **An off-canvas overlay nav + edge arrow navigation** keeps the canvas clean; good pattern if your portfolio is visually driven.
- Honest caveat: scroll-hijacking and canvas orbits hurt accessibility and SEO — gate them behind `prefers-reduced-motion` and ship a plain semantic fallback. Borrow the look, not the scroll-jacking.

## Screenshots
- shots/off-menu/01-hero.png — orbit/constellation hero with centered headline and floating circular mockups
- shots/off-menu/02-mid.png — Resonant project pulled to center stage with prev/next arrows
- shots/off-menu/03-lower.png — Superintelligent project centered after scroll-cycle
- shots/off-menu/04-full.png — full-page capture (mostly white, confirming fixed-viewport canvas stage)
