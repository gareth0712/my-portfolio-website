---
name: Linticular / Don't Board Me
url: https://dontboardme.com/
slug: linticular-don-t-board-me
category: uiux
industry: awwwards
reachable: true
---

# Linticular / Don't Board Me

**One-liner:** An Awwwards SOTD pet-sitting site that turns a boring "dog walking service" brief into a tactile, playful brand toy — gated behind a physics-based "bounce a tennis ball to enter" splash game, then carried by oversized condensed display type, a confident pink/vermilion palette, and buttery Lenis-smooth scroll.

## Overview
Marketing site for "Don't Board Me," an in-home pet care / dog-walking company (San Diego, phone 858-449-2691). Built by agency **The First The Last** (footer credit links thefirstthelast.agency); the teardown brief attributes it to "Linticular." Target audience is dog owners who want an alternative to boarding kennels. The overall impression is bold, witty, and craft-heavy: it treats a small local-service business like a fashion brand. The signature move is the entry gate — a literal interactive game (fling a tennis ball, watch a "LOADING 0→100%" bar fill) you must complete before the real site unlocks. This converts a loading screen into a brand moment and filters for engaged visitors. Everything downstream (huge headlines, named team carousel, testimonial slider, transparent pricing tiers) is competent but conventional; the splash + type + motion are what won the award.

## Layout & Information Architecture
Single long-scroll homepage with deep-linked sub-pages (Pricing, About Us, Services, Blog, Contacts, Book Now, FAQ, Privacy, Terms). Section order top-to-bottom:
1. **Splash gate** — full-viewport fixed overlay, "BOUNCE A BALL TO GET TO THE SITE" + loading meter + subcopy "You've landed on a dog walking site. Follow our rules to keep your dog happy."
2. **Hero** — "A TIRED DOG IS A HAPPY DOG! / YOUR TRUSTED IN-HOME PET CARE COMPANIONS!"
3. **About** intro paragraph ("…your pets are just as much a member of your family as, well, you are!") + ABOUT US link.
4. **Our Services** — numbered carousel (Dog Walking et al.) driven by Swiper, prev/next buttons.
5. **How It Works** — 4-step numbered process (01 Fill out the form → 02 You are being contacted → 03 First meeting → 04 You receive quality service).
6. **The care your pet deserves / Testimonials** — horizontal team+testimonial carousel of 10 named members (01 JaneDoe, 02 HappyPF, 03 Mike … 10 Nik), with a "READ A STORY" vertical-set label.
7. **Pricing teaser** — "Cost of walking" with three tiers (Singular $30, Twice a week $224/mo, Three times $312/mo "most popular").
8. **Footer** — Instagram @don'tboardme, email, full nav, legal links, agency credit.
Layout is generous and centered, large vertical whitespace between sections, low text density — type does the heavy lifting. Sticky fixed nav with a "BOOK NOW" pill CTA persists.

## Navigation
Fixed/sticky top nav (`position: fixed`) carrying PRICING / ABOUT US / SERVICES / BLOG / CONTACTS plus a high-contrast **BOOK NOW** pill on the right. A second duplicated nav set exists in the DOM (likely a hover/mega or mobile-menu variant). Nav links carry a custom `menu__hover-ball` micro-element (small ~30px circular spans that animate/bounce on hover — reinforcing the tennis-ball motif). Wayfinding is simple: 5 destinations + persistent CTA. The splash gate is itself a wayfinding device — it forces a single deliberate entry action before any nav is usable.

## Typography
Two-typeface system, no third:
- **Bayon** (Google Fonts, condensed humanist display, single 400 weight) — all big headlines, set ALL-CAPS, tightly packed, rendered very large and bold-looking. This is the brand voice: tall, narrow, energetic, slightly retro-athletic — perfect for the "tennis/sport/dog-park" vibe.
- **Neue Montreal** (Pangram Pangram grotesque) — body copy, UI labels, captions, classed `p2-medium` etc.
Hierarchy is driven almost entirely by scale contrast: enormous Bayon headlines vs. tiny Neue Montreal subcaptions (e.g. the splash subcopy is set very small under a massive headline). Headlines use `text-transform` none in DOM but the source text is already uppercase. Swiper-icons font also loaded (carousel arrows). (Note: computed `fontFamily` reported Times New Roman as a fallback during the gated state before webfonts swap in — Bayon/Neue Montreal are the real faces per `document.fonts`.)

## Color & Theme
Light, warm, mono-accent palette — feels like a fashion lookbook, not a pet site:
- **Splash / brand pink** background — soft rosy pink (~#F5C6CD).
- **Vermilion red-orange** `rgb(227,53,41)` (#E33529) — primary type + accent color, used at huge scale on the splash and headlines. Very high chroma; high contrast against pink.
- **Yellow tennis ball** — the one saturated yellow spot accent, the interactive object.
- Black for fine body text on light grounds.
No dark mode, no gradients, no glassmorphism — the boldness is purely flat color + scale. The restraint (essentially pink + red + a yellow dot) is what makes it look designed rather than busy.

## Imagery / Media
Photography-forward in the unlocked site (pet/team portraits in the carousels), but the hallmark visual is **non-photographic**: a vector/illustrated yellow tennis ball rendered as a draggable physics object. The team/testimonial sections pair named avatars with quotes. Art direction is consistent: everything sits on the pink ground, croppy, editorial, lots of air. No background video or 3D/WebGL canvas detected (`canvas` count = 0; no Three.js on window) — the "game" is DOM/CSS-transform + JS physics, not WebGL.

## Motion & Interaction
- **Hero entry game (signature):** a tennis ball you fling/bounce with pointer gestures; a "LOADING 0–100%" meter fills as you play, and only at 100% does the gate dismiss to reveal the site. It is a hard interaction wall — it ignores programmatic clicks and demands real pointer velocity (confirmed: automated clicks/drags left it at "LOADING 0%"). Brilliant brand-as-toy onboarding.
- **Lenis smooth scroll** confirmed (`html.lenis.lenis-smooth`; while gated it sits `lenis-stopped`, i.e. scroll is locked until the gate clears — the gate literally pauses the scroll engine).
- **Nav hover balls:** each menu item carries `menu__hover-ball n1/n2` elements that animate (bounce/scatter) on hover, echoing the ball motif site-wide.
- **Swiper carousels** for Services and Testimonials/Team (prev/next buttons, drag).
- Numbered process steps and big-type sections strongly imply scroll-triggered reveals/parallax (standard for this award tier), though specific GSAP timelines weren't enumerable from the gated DOM.

## Tech / Stack (if known)
- **Nuxt.js (Vue)** — confirmed via `window.__NUXT__` and `/_nuxt/entry.[hash].js` bundle (corroborated by external coverage: "crafted on Nuxt.js").
- **Lenis** — smooth scroll (confirmed by `lenis lenis-smooth` html classes).
- **Swiper.js** — carousels (confirmed: `swiper-icons` font loaded).
- **Bayon** (Google Fonts) + **Neue Montreal** (Pangram Pangram) — type.
- Custom **JS physics** for the ball game (no Three.js/WebGL on window; canvas count 0 → likely a small matter.js-style or hand-rolled 2D physics on DOM transforms).
- Built by **The First The Last** agency (footer credit). Awards: **Awwwards Site of the Day** + featured on Lapa Ninja, CSS Winner, Narrow Labs.

## Notable Techniques (steal-worthy)
- **Loading screen → interactive game.** Replace a passive preloader with a skill/play gate whose progress bar is driven by user action, not network. Turns dead time into the most memorable moment.
- **Single motif, repeated everywhere.** One idea (the tennis ball) becomes: the splash game, the nav hover micro-balls, the yellow spot accent. Total brand coherence from one object.
- **Two-font, scale-only hierarchy.** Condensed display (Bayon) + neutral grotesque (Neue Montreal), with size contrast doing all the work — no weight/color juggling.
- **Flat high-chroma palette, no gradients.** Pink + vermilion + one yellow dot reads as "art-directed" without any decorative effects.
- **Scroll-engine gating.** Lenis is held in `lenis-stopped` until onboarding completes — a clean pattern for sequencing intro → content.
- **Lookbook treatment of a mundane service.** Local dog-walking presented with fashion-brand confidence; the gap between subject and execution is the delight.

## What to steal for a personal portfolio
- Build **one signature interaction** as the front door (a small physics toy, a draggable object, a play-to-load meter) and make it your brand's whole personality — recruiters remember the toy, not the bullet points.
- Adopt **scale-driven hierarchy**: pick a condensed display face for huge ALL-CAPS section headers + one clean grotesque for everything else; resist adding a third font.
- Commit to a **flat, restrained, high-contrast palette** (one ground, one loud accent, one tiny spot color) — no gradients needed to look premium.
- Wire **Lenis** for smooth scroll and gate it (`stop()/start()`) around an intro sequence so the page reveals deliberately.
- **Repeat a single visual motif** across nav hovers, accents, and the hero so the whole site feels authored by one hand.
- Keep IA simple (hero → about → what I do → process → proof → contact) and let typography + motion carry it, exactly as this site does over a thin content spine.

## Screenshots
- shots/linticular-don-t-board-me/01-hero.png (splash gate "BOUNCE A BALL", tennis ball, loading subcopy)
- shots/linticular-don-t-board-me/02-mid.png (gate persists — scroll locked by Lenis)
- shots/linticular-don-t-board-me/03-lower.png (gate)
- shots/linticular-don-t-board-me/04-full.png (full-page capture, gated)
- shots/linticular-don-t-board-me/05-realhero.png (post-scroll attempt, gate overlay on top)
- shots/linticular-don-t-board-me/06-services.png
- shots/linticular-don-t-board-me/07-team.png

Note: the physics "bounce the ball" gate is a hard automation wall — it requires real pointer-velocity gestures and ignored programmatic click/drag, so visual screenshots remain on the splash. Full site IA, content, type, colors, and stack were extracted from the live Nuxt DOM/snapshot rendered behind the gate.
