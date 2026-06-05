---
name: Hello Monday
url: https://www.hellomonday.com/
slug: hello-monday
category: uiux
industry: agency
reachable: true
---

# Hello Monday

**One-liner:** A restrained black-and-white editorial canvas where hand-drawn line art, a Clarendon serif display face, and a signature curved-black nav rail turn a plain work grid into one of the most-awarded agency portfolios on the web (Awwwards Agency of the Year, Site of the Year; FWA Hall of Fame).

## Overview
Hello Monday (now part of DEPT — the footer privacy link points to deptagency.com) is a high-end digital studio with offices in New York, Copenhagen, Aarhus and Amsterdam, building brands, products and WebGL experiences for Google, Netflix, Lyft, Strava, Bang & Olufsen, T-Mobile and National Geographic. The homepage is deliberately quiet and confident: a near-empty white stage, a single playful ink illustration, and a long scroll of project cards. It trusts the work to carry the page rather than decorating around it. Overall impression: senior, editorial, anti-flashy — the opposite of a maximalist showreel, which makes the few motion moments land harder.

## Layout & Information Architecture
- Hero is mostly negative space: centered hand-drawn illustration, a small serif intro line ("We make digital (and magical)…"), and a large rotating word ("Products" / "Branding" / "Experiences") that cycles through the agency's disciplines.
- Below the fold: a 3-column asymmetric/masonry work grid. Cards have staggered heights and start/stop at different vertical offsets, so columns never line up — a deliberately irregular rhythm instead of a rigid grid.
- Each card = media block + serif project title + lowercase discipline tags (Branding / Experiences / Platform / Products / E-commerce) acting as inline category labels.
- Closes with a "View all projects" link, a product CTA ("A booster rocket for digital product teams" → /product), then a four-column contact block (new business / general / careers / internships) and a four-office address footer with Google Maps links.
- Whitespace is the primary design tool — generous margins, large gaps between cards, content never crammed to the edges.

## Navigation
- Signature element: a full-height curved black SVG shape pinned to the right viewport edge, with a hamburger icon vertically centered inside it. It is persistent (stays through the entire scroll) and is the only chrome on the page — there is no top nav bar.
- Top-left: stacked wordmark lockup "HELLO MONDAY / DEPT" (small, bold caps).
- Top-right: a witty live counter, "3 days until Monday," reinforcing the studio's name as a running gag.
- Menu is hidden behind the hamburger (off-canvas overlay) rather than exposed, keeping the canvas clean. Wayfinding on the homepage is the discipline tags + the rotating hero word.

## Typography
- **Display / serif:** ClarendonBTWXX-Light at ~80px for hero and card titles — a slab/Clarendon serif gives a literary, editorial, slightly retro feel that is unusual for a tech-leaning digital agency.
- **Body / UI:** "nb_internationalpro" (NB International Pro, a Neue-Haas-Grotesk-adjacent neutral grotesque) for labels, intro line and small UI text — clean Swiss sans as the workhorse.
- Strong serif-display vs sans-UI pairing; the contrast does all the hierarchy work since color is absent.
- Discipline tags are small, lowercase, light-gray — quiet metadata that never competes with titles.

## Color & Theme
- Essentially monochrome: pure white background (rgb(255,255,255)), black ink illustration + black nav rail, near-black serif text.
- Card placeholders sit on a barely-off-white (warm light gray ~#F4F2EE) so media blocks read as soft panels before images load.
- No brand accent, no gradients, no dark mode — the restraint is the brand. Awwwards literally noted "a color palette of three colors."
- High contrast where it counts (black titles on white); intentionally low contrast for secondary tags.

## Imagery / Media
- Hero: bespoke hand-drawn black line illustration (a figure lounging on a giant phone/tablet) — playful, human, signals craft over stock polish.
- Work grid: rich photography, video and rendered stills from client cases, lazy-loaded (placeholders visible mid-scroll before media swaps in).
- 2 `<canvas>` elements on the homepage — used for WebGL / shader-driven background or transition effects (the studio is known for THREE.js/WebGL work like "Into the Arctic," Google Cloud Infrastructure, Star Atlas).
- Art direction is tightly curated: every thumbnail is strong enough to stand alone, which is what lets the surrounding layout stay so empty.

## Motion & Interaction
- Hero word cycles through disciplines (animated text swap) — the page's headline literally rotates the services on a loop.
- Smooth, inertia-style scrolling with scroll-triggered reveals; cards fade/translate in as they enter the viewport (the staggered column offsets amplify the sense of motion).
- "3 days until Monday" is a live, self-updating microcopy counter — a tiny personality detail tied to the brand name.
- Curved nav rail is a fixed/pinned element; hamburger opens an off-canvas menu.
- Hover states on cards (subtle scale/reveal of title + tags) and a refined custom-cursor feel are part of the studio's signature, per Awwwards reviews noting "subtle and smooth animations triggered by the user throughout the site."
- Page-to-case transitions are choreographed (the studio favors managed timeline transitions over hard navigations).

## Tech / Stack (if known)
- **Animation:** GSAP + ScrollTrigger (the studio's documented house tooling for timeline-managed flows).
- **3D / WebGL:** THREE.js (+ THREE.BAS for instanced/vertex-shader animation), glTF assets authored in Cinema4D/Blender — documented in their own "Google Cloud Infrastructure WebGL" story.
- **Build:** Webpack, custom single bundle served from `/build/js/main-*.js` (hand-rolled front-end, not a visible off-the-shelf CMS/site builder). Fonts self-hosted (NB International Pro, Clarendon BT).
- **Org:** Hello Monday is part of DEPT (privacy policy redirects to deptagency.com).
- Note: libraries are bundled/minified so no global `window.gsap`/`THREE` was exposed; stack is inferred from the studio's own published stories + Awwwards data, plus 2 live canvases on the page.

## Notable Techniques (steal-worthy)
- **Curved-edge persistent nav rail** — a single SVG-shaped black sliver on the viewport edge replaces an entire nav bar; instantly distinctive and frees the whole canvas.
- **Rotating-word hero** — animate the *services* through one fixed sentence instead of writing a static tagline.
- **Brand-as-running-gag microcopy** — a live "X days until Monday" counter ties a throwaway UI element to the studio name.
- **Asymmetric staggered work grid** — columns with mismatched heights/offsets create editorial rhythm and make scroll reveals feel alive.
- **Serif-display + Swiss-sans pairing in pure monochrome** — hierarchy carried entirely by type contrast and whitespace, zero accent color.
- **Hand-drawn illustration as the only hero decoration** — one bespoke ink drawing signals craft more than any 3D flex would.
- **Restraint as confidence** — empty white space + curated thumbnails; the work, not the chrome, is the show.

## What to steal for a personal portfolio
- Go monochrome and let typography + whitespace do the work; pick one display serif (Clarendon-style) against one neutral grotesque and stop there — no accent color needed to look premium.
- Replace a top nav bar with one small persistent edge element (a tab/rail + hamburger). It reads as senior and reclaims the full canvas.
- Add ONE piece of brand-tied living microcopy (a counter, a greeting, a time-aware line) — cheap to build, high personality payoff.
- Use an asymmetric/staggered project grid with scroll-triggered fade+translate reveals (GSAP ScrollTrigger or IntersectionObserver) instead of a uniform card grid.
- Animate your tagline by rotating the *nouns* (your disciplines/skills) through a fixed sentence rather than listing them statically.
- Lazy-load thumbnails onto soft off-white placeholder panels so layout is stable and reveals feel intentional.
- Only reach for WebGL/3D on one signature moment — keep the rest quiet so the one effect actually impresses.

## Screenshots
- shots/hello-monday/01-hero.png — hero: ink illustration, "We make digital (and magical)…", rotating word "Products", curved nav rail + "3 days until Monday"
- shots/hello-monday/02-mid.png — 3-column staggered work grid with off-white placeholders + serif titles/tags
- shots/hello-monday/03-lower.png — deeper grid showing mismatched column heights and persistent nav rail
- shots/hello-monday/04-full.png — full-page capture
