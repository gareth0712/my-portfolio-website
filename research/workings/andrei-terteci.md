---
name: Andrei Terteci
url: https://www.andreiterteci.com
slug: andrei-terteci
category: portfolio
industry: awwwards
reachable: true
---

# Andrei Terteci

**One-liner:** A restrained, founder-minded freelance/indie-hacker portfolio that wins on tight copywriting, a confident dark-mode type system, and a single warm-to-cool gradient accent — proof that a "boring" Next.js + Tailwind stack can still feel premium when the editorial discipline is this sharp.

## Overview
Personal site for Andrei Terteci, a freelance software developer and indie hacker (Remotion-certified, ex-agency: Immersive Garden, Mazarine). The pitch is commercial, not artsy: the hero literally reads "I build web apps that help businesses grow." The audience is founders/clients evaluating a hire, so the whole page is structured as a conversion funnel — value prop, social proof, services, stack, work, contact. Overall impression: clean, dark, fast, content-first. It is NOT the WebGL/Three.js portfolio genre (see caveat below); its strength is editorial clarity and a disciplined design system rather than heavy motion.

> Caveat / correction: search surfaced a Codrops case study ("Letting the Creative Process Shape a WebGL Portfolio," Nov 2025) that keyword-matched this designer. On reading it, that article is about **Roman Jean-Elie's** portfolio, not Andrei's. None of the MorphSVG / fold-shader / R3F detail applies to this live site. The live site is a conventional Next.js marketing-style portfolio.

## Layout & Information Architecture
Single-page, anchor-scrolled (`#about`, `#services`, `#tech`, `#projects`, `#contact`) with a separate `/blog`. Vertical narrative funnel, generous vertical whitespace separating each section by faint hairline dividers:
1. Hero — eyebrow ("SENIOR FREELANCE DEVELOPER"), giant H1 value prop, supporting paragraph, a 3-stat strip (8+ Years / 15+ Projects / Senior Full-stack), dual CTA.
2. About — portrait photo on an organic orange blob shape + bio, plus a featured testimonial (David Chamberlain, Co-Founder at Betastate) introduced by a large quote-mark glyph.
3. Services — "How I can help" 2x2 card grid (Web Development, Motion Graphics, Indie Products, Consulting).
4. Tech — "Main tools I work with": an 8-cell numbered grid (01–08) of brand-colored tool icons (Supabase, Vercel, Tailwind, Remotion, etc.).
5. Projects — "Some of my recent projects": stacked project cards (Krumzi, Troof, Beatwave) each with logo, description, tag chips, outbound link.
6. Contact / footer — "Let's build something cool together!", mailto + GitHub/LinkedIn/X.
Container is centered and comfortably narrow (text column ~640px), so it reads like a well-set document rather than a sprawling marketing page. Density is low — lots of breathing room, one idea per viewport.

## Navigation
Fixed top nav (`position: fixed`) with a small "AT" monogram logo (on the orange blob mark) at left and 6 text items at right (About, Services, Tech, Projects, Contact, Blog). In-page items are hash anchors enabling smooth scroll (Tailwind `scroll-smooth` on `<html>`, confirmed via DOM); Blog routes to a real subpage. Minimal, no megamenu, no hamburger at desktop width. Wayfinding is by section headings rather than a scroll-spy highlight.

## Typography
- **Typeface:** Geist (Vercel's open-source sans), with `Geist Fallback` then system-ui — confirmed via `getComputedStyle`. A single-family system; no display/body pairing.
- **Scale:** H1 is 72px / weight 700, very tight tracking, set in 2 lines. Section H2s ("How I can help", "Main tools I work with", "Some of my recent projects") are large and bold with a tiny uppercase eyebrow label above them (e.g. "WORK"). Body is a calm ~18px with relaxed line-height.
- **Hierarchy:** Strong size contrast between the 72px hero and ~18px body does most of the hierarchy work. The testimonial uses weight to emphasize the punchline ("He doesn't just write code. He builds products.") in bold white against lighter gray surrounding text — a nice in-paragraph emphasis technique.
- **Treatment:** Uppercase micro-labels (eyebrows) in muted gray; numbered indices (01–08, 05/06/07) in the tech and project grids add an editorial/spec-sheet feel.

## Color & Theme
- **Theme:** Dark only. Body background is `rgb(10,10,10)` (#0a0a0a) — near-black, not pure black, slightly warmer.
- **Text:** Off-white headings, muted gray (~60% opacity) for secondary/body copy. High contrast where it matters (headings), softer for supporting text.
- **Accent:** A single signature gradient `linear-gradient(to right in oklab, #f98f03 → #5a17dd)` — warm orange into violet — used on the primary CTA ("See my work") and echoed by the orange organic blob behind the portrait and the AT logo mark. The use of **oklab** interpolation (not sRGB) keeps the orange→purple transition from muddying through gray mid-tones — a deliberate modern-color-space choice.
- **Tool icons** keep their native brand colors (Supabase green, Tailwind cyan, Remotion blue) against the dark cards, giving the tech grid a flash of controlled color in an otherwise monochrome page.

## Imagery / Media
- One hero/about portrait photo of Andrei, masked/placed on a large organic orange blob (squircle-ish amoeba shape) — the only real photographic element and the page's visual anchor.
- Brand logos: project logos (Krumzi, Troof, Beatwave) and tool SVG icons. No stock photography, no illustration set, no video on the landing view, no WebGL/3D. The art direction is "let the type and one accent shape carry it."

## Motion & Interaction
Light-touch. No GSAP, no Framer Motion, no Three.js detected in the DOM (probed via `window.gsap`, framer attributes, `window.THREE` — all false). Motion is limited to:
- Native smooth-scroll on anchor jumps (Tailwind `scroll-smooth`).
- Card hover states (services/project/tech cards lift/highlight — standard CSS transitions).
- Gradient CTA button.
This is a deliberate restraint relative to the awwwards WebGL crowd: the conversion goal favors speed and legibility over spectacle. The signature "interaction" is really the editorial composition and the gradient accent, not scroll-jacking or physics.

## Tech / Stack (if known)
- **Framework:** Next.js (App Router) built with **Turbopack**, served from `/_next/static/chunks/...` and **deployed on Vercel** (`?dpl=dpl_...` deployment-ID query params on chunks).
- **Styling:** Tailwind CSS (confirmed: `scroll-smooth` utility on `<html>`, oklab gradient utilities, Geist font default which ships with `next/font` + Vercel's Geist).
- **Font:** Geist via next/font.
- **Animation:** none of the heavy libs (GSAP/Framer/Three) present — likely plain CSS / Tailwind transitions.
- **Author's own domain expertise:** Remotion (React video) — he sells "Motion Graphics" as a service and is Remotion-certified, though the landing page itself doesn't embed Remotion output.

## Notable Techniques (steal-worthy)
- Single oklab gradient as the entire brand accent — one warm→cool ramp reused on CTA, logo mark, and the portrait blob. Maximum cohesion from one color decision.
- Spec-sheet numbering (01–08, 05/06/07) on tech and project grids — cheap way to add editorial polish and rhythm to plain card grids.
- Tiny uppercase eyebrow + giant bold H2 pattern repeated at every section start — instant, consistent visual hierarchy with zero extra components.
- In-paragraph weight emphasis to surface the testimonial's one-line punchline (bold white sentence inside gray paragraph) instead of pull-quoting it separately.
- Founder-framed copywriting ("I build web apps that help businesses grow", "He doesn't just write code. He builds products.") — outcome/benefit language, not a feature/tech laundry list, in the hero.
- Brand-colored tool icons on a near-black grid — a controlled, single burst of color that doubles as a credibility signal.
- Organic blob mask behind the portrait — soft humanizing shape that breaks the rectangular grid without needing illustration.

## What to steal for a personal portfolio
- **Pick ONE accent gradient and reuse it everywhere** (CTA + logo + a hero shape). Use oklab/oklch interpolation so warm→cool ramps stay clean. This alone makes a dark site feel designed.
- **Lead with an outcome, not a stack.** Hero = the value you deliver to a client; push the tool grid (Supabase/Vercel/Tailwind/etc.) far down the page as a credibility footnote, not the headline.
- **Use Geist + a strict two-step type scale** (huge bold heading ~72px, calm ~18px body, muted gray for secondary). The size jump carries hierarchy so you need almost no other styling.
- **Number your grids** (01–08) and prefix sections with a tiny uppercase eyebrow — near-zero effort, big editorial payoff.
- **Don't reach for WebGL/GSAP by default.** A fast Next.js + Tailwind dark site with sharp copy and one accent can read as "premium" without a single scroll animation — and loads instantly. Add motion only where it earns the maintenance cost.
- **Bake in social proof early** (one strong named testimonial right after the hero) and end on a single clear contact CTA + socials.

## Screenshots
- shots/andrei-terteci/01-hero.png — fixed nav, eyebrow + 72px H1 value prop, stat strip, gradient CTA
- shots/andrei-terteci/02-mid.png — testimonial block with quote-mark glyph and bold punchline emphasis
- shots/andrei-terteci/03-lower.png — numbered tech grid (Supabase/Vercel/Tailwind/Remotion) + "Some of my recent projects" section head
- shots/andrei-terteci/04-full.png — full-page composite (hero → about/portrait-blob → services → tech → projects)
