---
name: Jhey Tompkins
url: https://jhey.dev
slug: jhey-tompkins
category: portfolio
industry: awwwards
reachable: true
---

# Jhey Tompkins

**One-liner:** A single-screen, text-first bio that proves a master of CSS/motion doesn't need a flashy mega-site — three deliberate typefaces, a living "status" footer, and tiny in-character microinteractions carry the whole thing.

## Overview
jhey.dev is the personal site of Jhey Tompkins (jh3y), a design engineer ex-Google Chrome CSS/UI DevRel and ex-Vercel, now at a brand design studio @ Shopify. He is famous for 1500+ CodePens and "wait, how did you do that?" CSS demos. The site is almost defiantly minimal: a one-viewport, single-column letter-to-the-reader. No project grid, no case studies, no carousel. It's a credibility-and-personality play — the implicit flex is "I make wild interactive stuff for a living, so I can afford to make my own site restrained, and every small detail will be perfect." It's effectively an editorial bio page that doubles as a hub of outbound links (CodePen, X, AMA, conference talks).

## Layout & Information Architecture
- Single page, single column, centered content rail roughly 540px wide, offset slightly left of true-center with generous right whitespace.
- Whole experience fits one viewport on desktop (the full-page screenshot equals the hero — there is no real scroll content).
- IA is linear prose: display headline → role tagline → 3 short bio paragraphs (each seeded with inline links) → AMA CTA → "follow along" line → hand-drawn signature → live status block.
- Extreme density restraint: huge whitespace, one idea per paragraph, no cards or panels. The page reads like a printed letter, not a dashboard.
- A faint blueprint/graph-paper grid sits in the right negative space (CSS background grid), signalling "engineering / craft" without adding noise.

## Navigation
- No nav bar in the conventional sense. The only persistent chrome is the jh3y bear-mascot avatar pinned top-left (links home).
- Wayfinding is done entirely through inline contextual links inside the prose (e.g. "UI demos" → CodePen, "Developer Relations at Google" → Chrome search, "AMA" → GitHub AMA repo). 12 links total, every one outbound or anchor — the bio sentence is the menu.
- No sticky header, no hamburger, no footer nav. This works only because the page is one screen.

## Typography
The signature move is three intentional typefaces, each doing one job:
- **DM Serif Text** — the ~55px display headline "Making your ideas click". A high-contrast serif gives editorial, human, almost literary warmth — unexpected for a CSS engineer (most pick a grotesk).
- **Doto** — a dot-matrix / pixel-grid font used uppercase for the sub-headline ("JHEY TOMPKINS — BRAND DESIGN STUDIO @ SHOPIFY") and the status labels. Reads as "technical / terminal / playful" and is itself a fashionable variable font. The H1 element (14px uppercase) uses Doto.
- **Inter** — body copy, set in a muted gray (oklch ~0.4) for comfortable reading.
- Hierarchy is driven by typeface + size + weight contrast rather than color: big warm serif vs tiny technical mono vs neutral sans. Tight, deliberate scale.

## Color & Theme
- Light theme only: pure white background (#fff), text in mid-gray `color(srgb 0.4 0.4 0.4)` — soft, low-contrast, calm.
- Single accent: a coral/red `oklch(0.704 0.191 22.216)` used exclusively for links and the current-track / current-game status rows. Restrained accent usage means the eye instantly maps "red = clickable / live".
- No gradients, no dark mode toggle, no imagery washes. The palette is near-monochrome + one hot accent — high signal-to-noise.

## Imagery / Media
- No photography, no hero video, no WebGL.
- Custom illustration only: the animated bear mascot (jh3y's avatar/brand) top-left, and a hand-drawn "Jhey" signature SVG below the bio — both reinforce personal brand and craft. 6 inline SVGs total.
- The status block uses small line icons (globe, weather, hexagon, key, sound waves) as row markers.
- Art direction is "personal stationery": grid paper, ink signature, a character mascot — warm and handmade rather than corporate.

## Motion & Interaction
- 7 active CSS animations detected on load. Motion is deliberately small-scale and in-character rather than scroll-spectacle (fitting, since there's no scroll).
- The bear mascot animates (idle blink / subtle movement) — a microinteraction that humanizes the page the moment it loads.
- A live "status" footer is the standout: shows location ("Chillin' in Putnoe"), real local temperature (53.6°F) and current local time (00:30), a featured CodePen ("Shimmer Accordion"), currently-played game ("Half-Life 2"), and currently/last-played Spotify track ("Superstition, Stevie Wonder"). This is dynamic, near-real-time presence data hydrated by an Astro island (`Status.astro` script), making the static page feel alive and "this person is a real human, right now."
- Link hover states use the coral accent; overall interaction budget is tiny but every piece is polished — the restraint is the flex.

## Tech / Stack (if known)
- **Astro** (confirmed: `<meta name="generator" content="Astro">`, `_astro/` hashed JS chunks, `Status.astro` island).
- **Tailwind CSS** (body class `font-sans min-h-screen`, utility-driven).
- **Vercel** hosting + Vercel Web Analytics (`_vercel/insights/script.js`).
- Self-hosted fonts with hashed names: **DM Serif Text**, **Doto**, **Inter**.
- Mostly static HTML with a single hydrated island for the live status — minimal JS shipped. Aligns with Jhey's known stack (React/Astro/Svelte, GSAP, CSS-in/out-of-JS) but this site itself is lean Astro + CSS.

## Notable Techniques (steal-worthy)
- Three-typeface system where each face encodes a tone (serif = human/editorial, dot-matrix = technical/playful, sans = readable body) instead of relying on size alone.
- A live "now" status block (location, weather, local time, current song, current game, featured demo) that turns a static bio into a present-tense, human signal of life.
- Single hot accent color (OKLCH coral) reserved strictly for interactive + live elements — instant affordance with zero UI chrome.
- Inline contextual links as the entire navigation — the bio paragraph IS the menu.
- Personal-brand craft details: animated mascot avatar + hand-drawn ink signature SVG, lending warmth a stock template can't fake.
- Faint blueprint grid background to telegraph "engineering / craft" in otherwise empty whitespace.
- Astro islands: ship a static page, hydrate only the one dynamic widget — fast and minimal JS.

## What to steal for a personal portfolio
- Resist the project-grid reflex. A one-screen, confident bio letter can out-class a busy gallery — if every detail is intentional. Let the work live on external platforms (CodePen/GitHub/Dribbble) and use the site as a hub.
- Build a "live status" island: pull your current city/local-time/weather, last Spotify track, last commit or featured demo. It makes the page feel maintained and human for very little code (one Astro/island + a couple of APIs).
- Use typeface contrast, not just size, for hierarchy: pair a warm display serif with a technical mono and a neutral body sans.
- Lock your accent color to interactive + live elements only; keep everything else near-monochrome so the eye knows exactly what's clickable.
- Add one signature personal artifact — an animated avatar/mascot or a hand-drawn signature SVG — to make the page unmistakably yours.
- Ship static-first (Astro + Tailwind on Vercel) and hydrate only the dynamic widget; you get speed plus one moment of life.

## Screenshots
- shots/jhey-tompkins/01-hero.png
- shots/jhey-tompkins/02-mid.png
- shots/jhey-tompkins/03-lower.png
- shots/jhey-tompkins/04-full.png
