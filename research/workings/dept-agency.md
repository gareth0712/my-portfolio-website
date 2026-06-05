---
name: Dept Agency
url: https://www.deptagency.com/
slug: dept-agency
category: uiux
industry: agency
reachable: true
---

# Dept Agency

**One-liner:** A Swiss-grid, brutalist-leaning agency site that wields one screaming oversized headline, a single orange accent, and full-bleed cinematic video to project absolute confidence — restraint as the flex.

## Overview
DEPT® is a global "growth invention" agency (marketing + technology), home to a network of acquired studios (Basic, Dogstudio, Hello Monday, Studio Dumbar). The homepage is a tightly curated highlight reel: monumental hero headline, an autoplaying brand manifesto film, framework pitch, a six-logo case-study showcase (NVIDIA, eBay, Meta, ARM), a numbered "How we invent growth" slider, and an insights feed. The impression is editorial and assured — it reads more like a fashion/culture magazine cover than a typical SaaS-style agency site. Density is deliberately low; whitespace and a few enormous elements do the talking.

## Layout & Information Architecture
- Centered single-column rhythm anchored by a 12-col implied grid; content is generously inset with large vertical breathing room between sections.
- Section order: Hero headline → CTA → full-bleed manifesto video → DEPT® Studios → Growth Invention Framework → Work showcase (6 cases) → "How we invent growth" numbered 1–5 list/slider → On Our Mind (insights) → footer.
- Whitespace is the dominant layout tool: the hero sits in a near-empty viewport, the giant headline arriving below the fold-line of the logo. Sections are separated by thin full-width hairline rules rather than color blocks.
- The full-page capture revealed large blank gaps where sections lazy-render on scroll — content is reveal-gated, confirming heavy scroll-triggered choreography (sections aren't painted until in view).
- Work cases use a staggered two-up asymmetric grid (one card offset lower than its neighbor) for editorial tension rather than a rigid matrix.

## Navigation
- Sticky top bar, three zones: left text links (What we do ▾ / Work / Insights / Culture), centered logomark (the asterisk/snowflake DEPT® mark + wordmark), right utilities (search icon, pill-shaped black CONTACT button).
- "What we do" is a disclosure (expanded=false) — a mega-menu / dropdown rather than a separate page.
- Inline search is a real textbox in the nav (Search deptagency.com) with a submit button — search treated as first-class wayfinding, unusual for an agency site.
- Footer doubles as a secondary nav hub: studio sub-brands, a CHANGE LOCATION region switcher (global org signal), About/Careers/Impact Report, newsletter + contact CTAs, and social.

## Typography
- Single typeface system: **InterVariable** (Inter variable font), system-ui fallback. No serif, no pairing — one grotesque does everything.
- Extreme scale contrast: h1 renders at ~110px, all-caps, ultra-bold, tightly tracked, multi-line — a true poster headline. Body copy is modest sans at normal weight/case.
- Hierarchy is driven almost entirely by size and weight, not by family or color. Section headers (WORK, ON OUR MIND, DEPT® STUDIOS) are also large all-caps.
- Notable detail: headings carry intentional letter-spacing quirks ("FRAMEWOR K" rendered with a gap), suggesting kinetic/animated headline treatment where letters animate into place.

## Color & Theme
- Near-monochrome base: pure white background (#FFF), pure black text (#000). Maximum contrast, gallery-like.
- Single accent: **DEPT® orange** (~#FF4D00), used surgically — only on selected words inside the hero headline ("GROWTH") and a few inline highlights. The scarcity makes it land hard.
- Full-bleed video sections invert to dark/cinematic palettes (deep blues, purples, blacks) providing rhythm against the white canvas.
- No gradients in the chrome; color comes from media, not decoration. The discipline (basically two colors + media) is the signature.

## Imagery / Media
- Hero is dominated by an autoplaying, looping brand manifesto film ("DEPT® Manifesto - 2026") embedded via a YouTube/Vimeo-style iframe player with custom Pause/Mute controls.
- Cinematic art direction: a moody dark corridor / reflective water scene with floating text overlay ("DEPT® is perfectly engineered for this mission") — film-trailer energy.
- Case thumbnails are video/motion stills: a purple-gradient 3D humanoid avatar (NVIDIA AI sign-language), an AI-generated Rembrandt-style "talking portrait." 3D/AI-rendered imagery signals their technical positioning.
- Photography/video does all the emotional work; illustration and decorative graphics are essentially absent.

## Motion & Interaction
- Scroll-gated section reveals (confirmed by unrendered sections in full-page capture) — content fades/animates in as it enters viewport.
- Autoplaying muted background video with custom Pause/Mute affordances baked into the nav layer.
- "How we invent growth" is an interactive numbered slider/carousel (Item 1–4 dot controls, active state tracked) — likely drag/click-driven with animated transitions between the 5 solution pillars.
- Headline letter-spacing artifacts ("FRAMEWOR K") strongly imply kinetic typography — letters animate/stagger into position on load or scroll.
- Hover states on pill CTAs (CONTACT, VIEW ALL WORK) and case cards (each card carries a "VIEW WORK" reveal label that surfaces on hover).
- The site does NOT expose GSAP/Lenis/Three on the window global — animation is bundled/scoped (modern build, no global leakage), so smooth-scroll/WebGL can't be confirmed from globals alone.

## Tech / Stack (if known)
- **CMS: WordPress** (meta generator: WPML 4.9.2 — the WP multilingual plugin), confirming a multi-region, multi-language WP backend.
- **Font:** Inter (InterVariable) self-hosted variable font.
- **Video:** YouTube iframe player API (www-widgetapi.js present) for the manifesto and case films.
- **Analytics/martech: very heavy** — Matomo, Hotjar, LinkedIn Insight, Meta Pixel, Bing UET, Reddit Pixel, AdRoll, Google Ads/DoubleClick (multiple gtag destinations), Dreamdata, InfiniGrow attribution. This is an enterprise marketing-instrumented site, not a clean indie build.
- Animation libs not detectable via window globals (no `window.gsap`/`THREE`/`Lenis`) — bundled. Given the studio pedigree, scroll/WebGL effects are almost certainly custom-bundled.

## Notable Techniques (steal-worthy)
- One-typeface system (Inter only) + extreme size jump (110px h1 vs ~16px body) carries the entire hierarchy — no font pairing needed.
- Single scarce accent color: ~95% black/white, orange only on hand-picked words. Scarcity = impact.
- Selective-word coloring inside a headline ("THE **GROWTH** INVENTION COMPANY") to direct the eye and brand the key word.
- Full-bleed autoplay manifesto video as the hero's emotional payload, with custom in-page Pause/Mute controls instead of native chrome.
- Scroll-gated reveal choreography so each section "arrives" rather than just existing.
- Asymmetric staggered work grid (offset cards) for editorial tension over a rigid matrix.
- Centered logomark nav with search-as-textbox treated as a primary feature.
- Hairline full-width rules as the only section divider — dividing by line, not by color block.

## What to steal for a personal portfolio
- **Go monochrome + one accent.** White/black canvas with a single signature color used on <5% of elements reads more confident than a multi-color palette. Pick ONE accent and starve it for impact.
- **One oversized headline does the branding.** A 100px+ all-caps Inter/grotesque hero headline, with one keyword colored, instantly looks high-end and costs nothing (free variable font).
- **Single typeface, scale-driven hierarchy.** Drop font pairing; use Inter at dramatic size/weight steps. Less to maintain, more cohesive.
- **Scroll-reveal sections.** Fade/stagger each section in on viewport entry (IntersectionObserver + CSS transitions, or Motion/GSAP) — turns a static page into a paced experience cheaply.
- **Asymmetric, offset project grid** instead of a uniform card wall — small vertical offsets create editorial sophistication.
- **Hover-reveal "VIEW WORK" label on case cards** as a microinteraction that rewards exploration.
- **Hairline dividers + huge whitespace** > heavy section backgrounds. Restraint signals craft.
- Caution: skip DEPT®'s martech bloat — that's enterprise tracking, the opposite of what a fast portfolio needs.

## Screenshots
- shots/dept-agency/01-hero.png
- shots/dept-agency/02-mid.png
- shots/dept-agency/03-lower.png
- shots/dept-agency/04-full.png
