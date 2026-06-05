---
name: Pol Piella
url: https://www.polpiella.dev
slug: pol-piella
category: portfolio
industry: dev-portfolio
reachable: true
---

# Pol Piella

**One-liner:** A restrained, content-first iOS-developer portfolio that proves you can look "world-class" with zero animation libraries — pure Astro + Tailwind, system fonts, and disciplined whitespace doing all the work.

## Overview
Personal site of Pol Piella Abadia, a freelance iOS/Swift engineer, conference speaker and content creator from Barcelona. The site is primarily a blog/brand hub (the iOS CI Newsletter, Swift tooling articles) with a portfolio landing page that doubles as a credibility wall. The homepage is a single scroll: hero intro → shipped Apps → an exhaustive Public Speaking timeline. Overall impression: clean, fast, trustworthy, "indie Apple developer" aesthetic — it reads like a well-made App Store product page rather than a flashy agency showreel. It optimizes for substance (proof of work) over spectacle.

## Layout & Information Architecture
- Single-column, centered, max-width content column (~640–720px reading measure) on a near-white canvas (`#f9fafb`). Generous vertical rhythm between sections.
- Three stacked sections on the home page: Hero, **Apps** (3 product cards), **Public Speaking** (talks grouped by year: 2024 → 2023 → 2022).
- IA is "proof-led": instead of a generic about blurb, the page enumerates concrete artifacts — apps shipped (Helm, NowPlaying, QReate) and ~15 named conference talks with venue + date. Credibility through specificity.
- Speaking entries are full-width pill/cards with year dividers acting as section anchors — a timeline that scales gracefully as the list grows.
- Low density, lots of breathing room; nothing competes for attention. Whitespace is the primary design element.

## Navigation
- Minimal sticky-feel top bar: wordmark "Pol." (a clever truncation of the name into a logotype with a period) on the left; Blog / Newsletter / Sponsor links on the right. No hamburger, no mega-menu — 3 destinations only.
- Wayfinding is dead simple because the site is shallow. "Sponsor" link is a notable monetization/positioning signal placed in primary nav.
- Footer repeats social proof: GitHub, LinkedIn, Twitter/X, Mastodon icons + a "Made with ♥ by Pol Piella Abadia" credit.

## Typography
- System font stack only: `ui-sans-serif, system-ui, sans-serif` (Tailwind default). On Apple devices this renders as SF Pro — deliberately on-brand for an iOS developer, and ships zero font weight over the wire (instant render, no FOUT).
- Clear hierarchy via size/weight, not typeface variety: H1 hero at 48px bold; section H2 ("Apps", "Public Speaking") large bold; year labels (2024/2023) bold with a thin underline rule; talk titles semibold; meta (venue · date) muted gray.
- Body copy is mid-gray, not pure black, keeping it soft. Only one font family across the whole site — restraint as a design choice.

## Color & Theme
- Light theme, very low chroma. Background `rgb(249,250,251)` (Tailwind gray-50), body text near-black.
- Subtle full-page gradient/glow behind the hero (soft lavender/blue wash) gives depth without color noise.
- Single dark accent: the "Contact Me" CTA button uses `rgb(31,41,55)` (Tailwind gray-800) — a near-black pill button. No saturated brand color at all; the only vivid color comes from the app icons themselves (which pop precisely because everything around them is neutral).
- Speaking cards sit on a faint gray fill with rounded corners — quiet card system.

## Imagery / Media
- Hero: a circular illustrated avatar (line-drawn caricature) rather than a photo — friendly, memorable, brand-consistent.
- App cards carry real App Store-style rounded app icons (Helm, NowPlaying, QReate), which act as the only saturated color on the page and instantly read as "shipped products."
- No hero video, no 3D/WebGL, no stock photography. Art direction is intentionally minimal and Apple-flavored.

## Motion & Interaction
- Essentially static. No GSAP, no Framer Motion, no Lenis, no Three.js detected in the DOM (`window.gsap` undefined, no `data-framer-name`, no animation scripts). Native browser scroll.
- Interaction is limited to standard hover states on cards/links and the button. The "wow" here is explicitly NOT motion — it's typographic calm and fast load. A useful counter-example to motion-heavy portfolios: it demonstrates that perceived quality can come from spacing, hierarchy and consistency alone.

## Tech / Stack (if known)
- **Astro** (confirmed via GitHub repo `polpielladev/polpiella.dev` and search), statically generated.
- **Tailwind CSS** (default font stack + gray-50/gray-800 token fingerprints).
- Hosted on **Vercel**.
- System fonts (no web-font payload). Open-source — the entire site is on GitHub, itself a credibility/teaching asset.

## Notable Techniques (steal-worthy)
- **Proof-led IA**: replace an "about me" paragraph with an enumerated, dated list of concrete achievements (talks, shipped apps). Specificity = credibility.
- **Logotype from truncation**: "Pol." as a wordmark — cheap, distinctive, no logo design needed.
- **Zero-cost performance via system fonts**: SF Pro on Apple devices means instant text render and perfect on-brand type for an Apple-platform dev.
- **Neutral canvas as a color amplifier**: keeping everything gray so the only saturated elements (app icons) become the focal points.
- **Year-grouped timeline** that scales: speaking list grows yearly without redesign.
- **Open-sourcing the site itself** as portfolio content.

## What to steal for a personal portfolio
- Lead with artifacts, not adjectives — a dated list of talks/projects/shipped things beats "passionate developer" copy every time.
- You don't need an animation library to look polished. Nail whitespace, one font, one accent, and a consistent card system first; add motion only if it earns its weight.
- Use a single near-black CTA on a neutral page so the one action you want is unmissable.
- Let product icons / screenshots be your color palette; keep the chrome monochrome.
- Turn your name into a minimal logotype (truncate + period) instead of commissioning a logo.
- System font stack is a legitimate, fast, zero-payload choice — especially if your audience is on the matching platform.

## Screenshots
- shots/pol-piella/01-hero.png
- shots/pol-piella/02-mid.png
- shots/pol-piella/03-lower.png
- shots/pol-piella/04-full.png
