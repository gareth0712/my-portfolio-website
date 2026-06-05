---
name: Cuberto
url: https://cuberto.com/
slug: cuberto
category: uiux
industry: agency
reachable: true
---

# Cuberto

**One-liner:** A reference-grade digital agency site that turns restraint into spectacle — near-monochrome editorial layout carried entirely by buttery GSAP+Lenis motion, a signature physics-based custom cursor, and 3D-rendered hero objects, proving that world-class polish comes from motion craft, not visual clutter.

## Overview
Cuberto is a Dubai/US digital product agency (founded 2010) that is itself an Awwwards "Agency of the Year" and serial SOTD winner (site scores ~8.6/10). The homepage is a portfolio funnel: hero statement → featured projects → services → blog → contact CTA. The site is famous in the dev community because Cuberto open-sourced the engine behind its own signature interaction: the GSAP-based `mouse-follower` library (their GitHub is linked in the footer). Overall impression: confident, minimal, "expensive." It feels like a high-end print magazine that happens to move.

## Layout & Information Architecture
- Single long-scroll homepage, generous vertical rhythm — sections breathe with large whitespace bands between them.
- Content is centered/asymmetric rather than edge-to-edge: hero headline is centered; the "about" block uses a 2-column split (3D object left, body copy + button right).
- Featured Projects = 2-column staggered card grid on a black section that reveals via a rounded top-edge mask (the white section curves into black). Cards are large image tiles with a small label/title beneath.
- Clear IA top to bottom: Hero (positioning statement) → What we do CTA → Featured projects (12 named cases) → Our services → Blog (3 posts) → "Have an idea?" contact block → footer.
- Density is deliberately low; one idea per viewport. Whitespace is the primary compositional tool.

## Navigation
- Top bar: wordmark left ("cuberto" lowercase), horizontal links right (Services / Projects / Company / Blog / Contacts) + "Get in touch".
- Minimal, no mega-menu, no hamburger on desktop. Nav labels duplicate in the snapshot ("Services Services") indicating an animated text-swap hover (two stacked copies, one slides up on hover — a common Cuberto microinteraction).
- Wayfinding reinforced by a persistent floating "contact" avatar widget pinned bottom-right: a circular photo encircled by a rotating "contact · contact ·" text ring that follows the scroll down the whole page — a constant, charming CTA anchor.
- Footer is a full sitemap + social row (Instagram, YouTube, GitHub, Facebook, Dribbble, Behance) + Privacy.

## Typography
- Single typeface: **Suisse Intl** (a Swiss neo-grotesque, à la Helvetica/Akkurat lineage) for both body and headings — confirmed via computed styles.
- Massive scale contrast: H1 renders at ~70px (responsive, clamps larger on wide screens) against ~16-18px body. The hierarchy is built almost entirely on size + weight, not color or family switching.
- Headlines are tight-leaded, near-black, set in 2 lines for rhythm ("Digital design & / development agency").
- One-font discipline is a deliberate flex — restraint signals confidence.

## Color & Theme
- Effectively monochrome: pure white background (`rgb(255,255,255)`), pure black text (`rgb(0,0,0)`), near-black panels (`rgb(22,22,22)`) for the projects section.
- No brand accent color in the chrome — color enters ONLY through project imagery (electric blues, pinks, renders), which makes the work itself the visual payload.
- Section-to-section theme flip (white → black → white) used as a pacing device, with rounded mask transitions between them.
- High contrast = strong accessibility baseline and a gallery-like neutrality that never competes with portfolio content.

## Imagery / Media
- Hero features a 3D-rendered object reel (glass/marble spheres with chromatic-aberration refraction, granite textures) — high-end CGI, not stock photography.
- Project tiles use rich full-bleed photography/renders (architecture, device mockups, abstract 3D), each art-directed per case.
- Floating avatar uses a real photo in a circular mask with a rotating SVG text path around it.
- Overall art direction: neutral frame, vivid content — every colorful pixel is the client work.

## Motion & Interaction
- **Custom cursor (signature):** Cuberto's own `mouse-follower` library — a skewing, magnetic, state-changing cursor that morphs (text labels, scale, drag hints) on hover. This is THE Cuberto trademark and they open-sourced it.
- **Smooth scroll:** Lenis 1.3.23 confirmed in `window` — inertial/eased scrolling that drives all scroll-triggered animation. GSAP 3.15.0 + ScrollTrigger present.
- Scroll-reveal: headlines and blocks fade/translate in; 3D objects float and parallax.
- Section reveal via rounded clip-path masks (white curves into black).
- Nav link hover = vertical text-swap (duplicated label slides).
- Persistent rotating "contact" text-ring widget anchored to viewport.
- Magnetic buttons (pill "What we do", "Get in touch") that attract the cursor.
- Motion is the entire personality — none of it survives a static screenshot, which is exactly the point.

## Tech / Stack (if known)
- **Animation:** GSAP 3.15.0 (+ ScrollTrigger), confirmed via `window.gsapVersions`.
- **Smooth scroll:** Lenis 1.3.23, confirmed via `window.lenisVersion` / `window.lenis`.
- **Cursor:** Cuberto `mouse-follower` (GSAP-dependent, self-authored, MIT, on their GitHub).
- Historically (per Awwwards): jQuery, Snap.svg, SVG, Modernizr, FastClick — likely partially modernized now, but SVG path animation (the text ring) remains.
- Type: Suisse Intl (licensed webfont).
- Mostly custom-built front end (not a Webflow/template site), though the community widely clones these patterns into Webflow.

## Notable Techniques (steal-worthy)
- One typeface + true monochrome chrome → all visual interest comes from motion and content, not decoration.
- Signature reusable custom cursor as brand identity (skew + state + magnetic).
- Lenis smooth scroll as the backbone for every scroll-triggered reveal.
- Section theme flips (white↔black) with rounded clip-path mask transitions for pacing.
- Persistent floating CTA widget with a rotating SVG text-path ring — playful, always-available conversion anchor.
- Duplicated-label vertical text-swap on nav hover.
- 3D-rendered hero objects (glass/marble refraction) instead of stock imagery.
- Magnetic pill buttons.

## What to steal for a personal portfolio
- **Commit to one good typeface** (a neo-grotesque like Suisse Intl / Inter / Söhne) and let size + weight do all hierarchy work. Kills the "AI template" look instantly.
- **Add Lenis + GSAP ScrollTrigger** for inertial scroll and fade/translate reveals — the single biggest perceived-quality upgrade for the least design effort.
- **Drop in Cuberto's `mouse-follower`** (it's free/MIT) for a state-changing custom cursor — instant "agency-grade" signal. Use sparingly and keep a fallback for touch/reduced-motion.
- **Monochrome the frame, color the work:** white/black UI so your project thumbnails carry all the color.
- **Persistent contact widget** (rotating text ring around a small avatar) as an always-visible, low-friction CTA.
- **Section theme flips with rounded masks** to pace a long single-page scroll.
- Respect `prefers-reduced-motion` — all of the above must degrade gracefully.

## Screenshots
- shots/cuberto/01-hero.png
- shots/cuberto/02-mid.png
- shots/cuberto/03-lower.png
- shots/cuberto/04-full.png
