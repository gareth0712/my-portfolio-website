---
name: Mercury
url: https://mercury.com/
slug: mercury
category: uiux
industry: fintech
reachable: true
---

# Mercury

**One-liner:** Mercury redefined the fintech aesthetic by treating a business bank like a luxury brand — a custom variable typeface (Arcadia), a cinematic near-black palette, art-directed nature photography, and a levitating metallic card — making it the reference standard the rest of fintech now copies.

## Overview
Mercury is online business banking for startups, SMBs and scaling companies (300K+ customers, $650M annual revenue, profitable). The marketing site's job is to make a regulated financial product feel like a premium consumer brand. The overall impression is restrained confidence: very dark, very spacious, slow and deliberate motion, and product UI shown as the hero rather than stock imagery. It reads "institutional + technology" simultaneously — exactly the positioning the founders want for a company that 1-in-3 US startups bank with.

## Layout & Information Architecture
- Single long-scroll landing page built from full-bleed sections, each a self-contained "scene."
- Hero: full-viewport cinematic photographic background (a serene mountain/nature landscape) with a centered headline ("Radically different banking"), an inline email-capture form, and a video Play button — signup friction is reduced to one field above the fold.
- Below the hero the page shifts to a near-black canvas. Signature pattern: a sticky/pinned **accordion of product pillars** (Business banking & more / Cards & expense management / Payments & invoicing / Accounting) paired with a live-looking product dashboard mockup on the right that swaps as you expand each item. Real numbers ($5,144,707.07 available balance, Treasury, Payroll, AP rows) sell credibility.
- Social-proof band: "Loved by 300K+ of the most ambitious entrepreneurs" with a logo wall (Gainful, Supabase, Linear, Lovable, Partful, ElevenLabs) and a rotating tab-based testimonial carousel (3 items, tablist pattern).
- Feature-benefit accordions repeat the pinned-panel device (Apply in 10 minutes / instant credit card / no-fee global USD payments / 1.5% cashback / 3.66% Treasury yield).
- Stats/press wall: revenue, $300M Series C, Fast Company Most Innovative — each links to external press.
- Dual closing CTA scenes: "Mercury for business" and "Mercury for personal," then a dense mega-footer.
- Whitespace is generous and density is deliberately low per scene; an unusually long, link-rich legal/footnotes block anchors the bottom (heavily regulated product — every yield/cashback claim is superscript-footnoted).

## Navigation
- Sticky top nav, persistent across dark and light sections, with a monochrome wordmark logo + circular emblem.
- Four dropdown triggers (Products, Solutions, Resources, About) = mega-menu pattern, plus a direct Pricing link.
- Right side splits auth from acquisition: "Log in" (ghost) and "Open account" (filled indigo pill) — the primary CTA is the only colored element in the bar, so the eye is pulled to conversion.
- Wayfinding inside long sections handled by the pinned accordion (the expanded item is the "you are here").

## Typography
- **Arcadia** (body) and **Arcadia Display** (headings) — a proprietary, commissioned variable typeface family, not licensed for redistribution. Confirmed live via computed styles (`arcadia` / `arcadiaDisplay`).
- H1 uses `arcadiaDisplay` at a **font-weight of 480** (not a standard 400/500 — exploits the variable-font weight axis for a bespoke "hand-tailored" feel). Hero H1 ~44px on desktop.
- Slightly condensed letterforms that read as both modern and institutional.
- Body line-height is a generous ~1.625 (vs the usual 1.5) for breathing room and readability on dark backgrounds.
- 14 typographic levels in the underlying design system; clear display-vs-body separation.

## Color & Theme
- Predominantly **dark / near-black** canvas (the body background itself is transparent `rgba(0,0,0,0)`; sections paint deep navy-black behind content).
- Single saturated accent: **Indigo #5266EB** (computed `rgb(82,102,235)`), reserved almost entirely for the primary "Open account" CTA — high restraint, so the accent always means "convert."
- Hero uses a full-color photographic image (cool blues/greens of a landscape) that then fades into the dark UI scenes — a light-to-dark cinematic transition down the page.
- High contrast white/light-grey text on black; muted grey for secondary copy and the logo wall.

## Imagery / Media
- Art-directed **photography** (cinematic nature landscape hero) rather than generic stock — positions the brand alongside luxury/lifestyle marketing.
- **Product UI mockups** are the primary "imagery": realistic dashboard screens (accounts, balances, credit card, treasury) rendered crisply and animated, doing the product demo inline.
- The signature hero motif (per teardown coverage) is a **levitating metallic credit card with a subtle shimmer** sweeping across it to telegraph "premium metal card."
- Embedded testimonial **video** (Play button in hero) plus a video-driven testimonial card lower down (e.g. a SaaS customer).

## Motion & Interaction
- Scroll-driven storytelling: product features explained via **morphing/transition animations** — the card's functions revealed within ~4 scrolls.
- **Pinned/sticky panels**: the dashboard mockup stays fixed while the accordion list scrolls/expands, swapping the visual per active pillar — a scrollytelling device.
- Subtle **shimmer** sweep on the metallic card; levitation/float on the hero product.
- Tab-based **testimonial carousel** (tablist with selectable dots).
- Accordion expand/collapse microinteractions on the product and feature lists.
- Overall motion language is slow, eased and understated — nothing bouncy; the cinematic tone is maintained by restraint.

## Tech / Stack (if known)
- **No Next.js markers** found (`#__next` and `__NEXT_DATA__` both absent) — likely a custom or statically-rendered React build, not a default Next/CRA signature.
- **Arcadia variable font** loaded with explicit weight-axis control (e.g. 480).
- Third-party scripts observed are marketing/analytics only: Bing UET (`bat.bing.com`), LinkedIn Insight (`snap.licdn.com`). No GSAP/Three.js confirmed from script srcs (animation likely bundled or CSS/scroll-driven).
- Asset CDN: DatoCMS (`datocms-assets.com` seen in a footnote PDF link) — suggests **DatoCMS** as the headless CMS.
- A published **Mercury Design System** exists (18 color tokens, 14 type levels, 6 radii, 9 spacing values, 19 components; Indigo #5266EB primary) — the site is clearly token-driven.

## Notable Techniques (steal-worthy)
- **Variable-font weight as brand signature**: a non-standard 480 weight makes the headline unmistakably "theirs" — a detail competitors literally cannot replicate without the licensed font.
- **One accent color, reserved for conversion**: indigo appears almost only on the primary CTA, so color = action everywhere on the page.
- **Pinned visual + scrolling accordion** to deliver a full product tour without a video or a separate page.
- **Realistic, specific product data** (oddly precise balances like $5,144,707.07) reads as a real account, not a placeholder — sells trust.
- **Light-to-dark scroll transition**: a colorful photographic hero melting into a black product canvas gives a "lights dimming, show starting" cinematic arc.
- **Footnote discipline**: every regulated claim (3.66% yield, 1.5% cashback) is superscripted to a dense legal block — credibility + compliance handled as a design element, not an afterthought.
- **Logo wall of recognizable modern startups** (Linear, Supabase, ElevenLabs) for peer-credibility with the exact target audience.

## What to steal for a personal portfolio
- Pick **one** accent color and reserve it strictly for your primary CTA / active state; keep everything else monochrome. Instant premium feel.
- Use a **dark, spacious canvas** with generous line-height (~1.6) and a real display typeface — if you can't license a custom font, a distinctive variable font set to a non-default weight gets ~80% of the effect.
- Build each section as a **full-bleed "scene"** with low density and a single idea, rather than cramming. Let whitespace carry the luxury signal.
- Replace stock imagery with **real artifacts of your work** (actual app screenshots, dashboards, mockups) shown crisply — show, don't decorate.
- Add **one signature motion moment** (a shimmer, a float, a pinned-panel reveal) and keep all other motion slow and subtle; restraint beats a wall of effects.
- A **pinned visual + scrolling text list** is a cheap, high-impact way to walk through projects on a single page.

## Screenshots
- shots/mercury/01-hero.png (cinematic landscape hero + email capture)
- shots/mercury/02-mid.png (pinned dashboard mockup + product accordion on black)
- shots/mercury/03-lower.png (300K+ social proof, startup logo wall, video testimonial)
- shots/mercury/04-full.png (full-page capture)
