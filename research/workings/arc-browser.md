---
name: Arc Browser
url: https://arc.net/
slug: arc-browser
category: uiux
industry: saas
reachable: true
---

# Arc Browser

**One-liner:** A SaaS landing page that rejects the entire "clean Silicon Valley SaaS" playbook — high-chroma electric blue, a custom serif display face, scalloped/wavy section dividers and a scrolling press marquee give it the warmth of a print magazine while still selling a tech product.

## Overview
arc.net is the marketing site for Arc, the Chromium-based browser from The Browser Company. Although Arc itself is now in maintenance mode (the company has pivoted to its AI browser, Dia), the site remains a reference-grade example of opinionated SaaS branding. The whole page is wrapped in a sticky "Meet Dia, the next evolution of Arc" cross-promo banner. The target audience is design-literate power users, students and developers who are dissatisfied with Chrome. Overall impression: confident, playful, editorial — it feels hand-crafted rather than templated, the opposite of the gradient-on-white SaaS norm.

## Layout & Information Architecture
- Single long-scroll landing page, centered single-column with generous whitespace; max content width is constrained so copy never runs full-bleed on desktop.
- Section rhythm: (1) sticky Dia banner, (2) hero headline + dual download CTAs, (3) scrolling press-quote marquee, (4) "A browser that doesn't just meet your needs" feature block with a bento-style grid of browser-UI mockups, (5) "Space for the different sides of you" section with a 3D wireframe arc/portal graphic, (6) "Your perfect setup" product shot, (7) "The comfort of privacy" section, (8) a 3-up value-prop column block ("Way more powerful than Chrome" / "Arc is brought to you by the choice…" / "Are free up to the hype"), (9) "Enter your new home on the internet" final CTA, (10) dense blue footer.
- Density is low-to-medium: large type, lots of breathing room, one idea per viewport. The bento mockup grid is the densest moment and is used deliberately as a "product reveal".

## Navigation
- Top nav is a solid electric-blue bar pinned at the top: Arc heart-logo on the left, then Max / Mobile / Developers / Students / Blog as plain white text links, with a black pill "Try Dia" CTA floating top-right.
- The "Meet Dia" promo strip sits directly under the nav and is sticky — it rides along as you scroll (visible in every scroll screenshot), keeping the cross-sell CTA permanently in view without a modal.
- Wayfinding is minimal — this is a brochure site, not an app, so there's no mega-menu or breadcrumb. Footer carries the full sitemap (Download, Privacy, Security, Arc Max, Integrations, Credits, Resource Center, Release Notes, Students, FAQ, Careers, social links).

## Typography
- Display/headline face: **Marlin** (confirmed via `getComputedStyle(document.body).fontFamily` → `"Marlin, -apple-system, …"`). It's a high-contrast transitional serif used at large sizes for hero and section headlines ("Meet Dia, the next evolution of Arc"), giving an editorial, almost literary tone unusual for SaaS.
- A geometric sans (loaded via the same stack / fallback) carries the punchy mid-page headlines like "A browser that doesn't just meet your needs — it anticipates them." set in heavy weight, tightly tracked, in electric blue.
- Clear two-tier hierarchy: serif for the brand/narrative voice, bold sans for the benefit statements, muted grey sans for sub-copy ("Clean and calm, Arc shapes itself to how you use the internet.").
- Pairing of a refined serif with a chunky geometric sans is the signature typographic move.

## Color & Theme
- Light theme on a warm off-white/cream canvas — body background is `rgb(255, 252, 236)` (a pale butter cream, not pure white). This warmth is a key differentiator from cold #FFFFFF SaaS sites.
- Dominant accent is a saturated **electric/ultramarine blue** (`~#4E3CF5`-ish) used for the nav bar, footer, headlines and dashed/wavy borders.
- Hero band uses a soft peach-to-cream gradient wash behind the Dia banner.
- Black is reserved for the high-emphasis pill CTAs ("Try Dia").
- Product mockups inject candy colors (coral/pink sidebar "Spaces", yellow notepad panels), reinforcing the "personal, expressive" message.
- Contrast: white text on electric blue passes; the cream + grey sub-copy is lower-contrast and is the one accessibility soft spot.

## Imagery / Media
- No stock photography of people. Imagery is almost entirely **product UI screenshots** of the browser itself — the vertical sidebar, Spaces, split view — presented in floating rounded-corner browser chrome frames with soft shadows.
- Bento grid mixes these UI shots with real web content thumbnails (architecture, magazine covers) to demonstrate browsing.
- A standout **3D wireframe arc / tunnel-portal graphic** anchors the "Space for the different sides of you" section — a blue wireframe perspective grid evoking depth, tying literally to the "Arc" name.
- Press-logo lockups (The Verge, Inverse, Fast Company, Bloomberg) appear as a moving quote ribbon.

## Motion & Interaction
- **Scalloped / wavy decorative borders**: section dividers and the sticky banner use SVG-style scalloped (postage-stamp) and sine-wave edges instead of straight rules — a tactile, sticker-like detail visible in every screenshot.
- **Scrolling press-quote marquee**: pull-quotes from The Verge, Inverse, Fast Company, Bloomberg auto-scroll horizontally (the DOM repeats the same four quotes 4× — the classic duplicate-track infinite-marquee technique).
- Sticky cross-promo banner that persists through scroll.
- The Browser Company's designers explicitly described wanting "the feeling you get as a movie opens" — implying cinematic reveal/parallax on scroll for the product mockups.
- CTA pills have hover/press states; arrow glyphs (→) suggest forward motion on the download/Try buttons.

## Tech / Stack (if known)
- **Next.js (Pages Router)** — confirmed: `__next` root present, `/_next/static/chunks/` bundles (`framework-*.js`, `pages/index-*.js`, `_app-*.js`), `_buildManifest.js` / `_ssgManifest.js` (static export / SSG).
- React (framework chunk present).
- Custom site script `arcnet-script.js`.
- Custom self-hosted webfont **Marlin**.
- No Framer (`[data-framer-name]` absent) and no obvious GSAP/Three.js in the script list — the 3D wireframe is likely a pre-rendered asset/SVG and the marquee + scallops are CSS, keeping the page light.
- App is Chromium-based and written in Swift (the product, not the site).

## Notable Techniques (steal-worthy)
- Warm cream canvas (`#FFFCEC`) instead of pure white to make a tech product feel human.
- Editorial serif (Marlin) as the brand voice in a category that defaults to geometric sans — instant differentiation.
- Scalloped / wavy SVG section dividers for a tactile, print-sticker feel.
- CSS infinite marquee built by duplicating the quote track 4× (cheap, dependency-free social proof).
- Sticky cross-promo banner to funnel to the successor product (Dia) without interrupting with a modal.
- Bento grid of real product UI screenshots as the hero proof instead of abstract illustration.
- Black pill CTAs as the single highest-contrast element so the eye always finds "download/Try".

## What to steal for a personal portfolio
- **Pick a warm off-white background** (e.g. `#FFFCEC`) over `#FFFFFF` — costs nothing, instantly feels designed.
- **One distinctive display typeface** (a characterful serif) paired with a neutral sans — let type carry the personality so you need fewer graphics.
- **CSS-only infinite marquee** for a logo wall / testimonial strip (duplicate the track, `animation: scroll linear infinite`) — no JS library required.
- **Scalloped/wavy SVG dividers** between sections to break the boredom of straight horizontal rules.
- **High-contrast pill CTA** (black on a light/colored page) so your primary action is unmissable.
- Ship it on **Next.js static export** for a fast, free-to-host marketing/portfolio page — Arc proves you don't need heavy animation libs to feel premium.

## Screenshots
- shots/arc-browser/01-hero.png
- shots/arc-browser/02-mid.png
- shots/arc-browser/03-lower.png
- shots/arc-browser/04-full.png
