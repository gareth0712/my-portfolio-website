---
name: Paul Stamatiou
url: https://paulstamatiou.com
slug: paul-stamatiou
category: portfolio
industry: design-engineer
reachable: true
---

# Paul Stamatiou

**One-liner:** A 20-year personal site rebuilt from scratch in Next.js by a "designer who codes" — it reads like a meticulously art-directed print magazine, where editorial restraint, a warm paper palette, and a custom font program do all the heavy lifting instead of flashy motion.

## Overview
Personal blog + portfolio for Paul Stamatiou (Head of Design at Sesame, ex-Twitter design ~9 years, co-founder of Limitless/acq. Meta, 2x YC). The site spans 1,224 posts plus travel photosets and a "gear" catalog. Audience: design/eng peers, recruiters, and readers of his long-form technical and design essays. Overall impression: calm, confident, premium-editorial. It deliberately avoids the typical design-engineer trope of WebGL/3D hero theatrics — instead it signals craft through typography, spacing, and a cohesive warm-neutral identity. The result feels expensive and durable rather than trend-chasing.

## Layout & Information Architecture
- Single-column content column, generously inset and centered, with a fixed left icon rail acting as global nav.
- Hero is intentionally sparse: a large band of empty whitespace above the H1, letting the page "breathe" before the content begins (classic editorial above-the-fold restraint).
- Below the hero: a left-aligned intro paragraph + an inline credential list (Georgia Tech, Co-founder of Limitless, 2x YC, Twitter 9 years) styled as small muted lines — a resume distilled to scannable one-liners.
- Content modules are presented as large rounded-corner "cards" with a subtle hairline border on the paper background: a **Posts** card ("10 of 1,224 posts" with prev/next pagination + horizontal arrows) and a **Photosets** card (horizontal carousel of travel collections: Africa, New Zealand, Japan, France, Greece...).
- A **Recent gear** horizontal carousel (watches, Macs, cameras, EDC) with tag labels like Wanted / Vintage / Workspace / EDC / Audio — a personality-rich module most portfolios lack.
- Email subscribe + RSS feeds surfaced early (own-your-audience ethos).
- Density: low-to-medium. Lots of whitespace, never cramped. Each module is clearly bounded.

## Navigation
- **Fixed left vertical icon rail** (not a top bar): Home, About (person icon), Gear (monitor icon), Photos (camera icon), and a sun/theme-toggle icon at the bottom. Icons only, no labels — relies on recognizable glyphs.
- The rail persists while the content column scrolls, giving constant wayfinding without consuming horizontal reading space.
- Active state: the current section icon gets a filled rounded square with the olive-green accent (Home shown active/highlighted).
- In-module navigation uses chevron arrows and prev/next pagination rather than infinite scroll, keeping each card self-contained.
- Footer is minimal: "Stammy" link (to About) + a Comments mailto link.

## Typography
- **Two custom self-hosted typefaces** loaded from `_next/static`: `PS1` (a serif, fallback ui-serif/Georgia) used for headings, and `PSA` (a sans, fallback ui-sans-serif/system-ui) used for body/UI. These are bespoke "PS"-branded fonts — a strong identity signal.
- H1 ("Paul Stamatiou is a designer who codes") is set in the PS1 serif at a restrained ~28.8px — notably *small* for a hero headline, reinforcing the editorial-not-shouty tone.
- Section headings (Posts, Browse No More, The Startup Designer) use the serif; supporting decks/descriptions drop to the muted sans.
- Clear two-weight hierarchy: serif title + lighter muted-grey sans subtitle, repeated consistently across every list item.
- Body copy is comfortable measure (~60–70ch), warm dark-brown ink rather than pure black for headings; truly black reserved sparingly.

## Color & Theme
- Background: warm cream / paper `rgb(247, 242, 237)` (#F7F2ED) — the defining brand move. Feels like off-white stock, not screen-white.
- Ink: near-black body `rgb(0,0,0)` with muted warm-grey/taupe for secondary text.
- Accent: an **olive / avocado green** (computed `lab(37.26 -19.97 46.96)` ≈ #4A6312) used for the active nav square and links — an unusual, memorable accent that pairs beautifully with the cream paper.
- `data-theme="light"` on `<html>` + a sun toggle in the rail = full light/dark theming.
- Contrast is intentionally soft (muted greys on cream) for a relaxed read; the green accent provides the only saturated punctuation.
- No gradients on the home shell — flatness keeps the focus on type and the vivid travel photography.

## Imagery / Media
- **Photography is the visual payload.** The Photosets carousel surfaces saturated, high-quality travel photos (mountains, landscapes) as full-bleed card thumbnails with the location name overlaid in white + a "COLLECTION" label — sharp contrast against the muted UI.
- Gear carousel uses clean product shots on neutral backgrounds, each tagged by category.
- No illustration, no 3D/WebGL hero, no video background — the art direction is "let real photos be the color."
- Strong art-direction discipline: UI is deliberately desaturated so imagery pops.

## Motion & Interaction
- Restrained, content-first motion. No scroll-jacking or parallax theatrics on the home shell (consistent with the editorial intent).
- Horizontal carousels (Gear, Photosets, Posts) with chevron controls and a disabled-state on the first arrow (e.g. Previous page disabled at start) — accessible, deliberate paging rather than auto-advance.
- Light/dark theme toggle is the primary microinteraction.
- Hover states on cards/links and the active-nav fill animation carry the interaction polish; the craft is in restraint, not spectacle. (Animation specifics aren't visible in static shots, but the DOM shows no GSAP/Three.js heavy-motion libs — see Tech.)

## Tech / Stack (if known)
- **Next.js** rebuilt from scratch in 2024 (confirmed via search + `_next/static/chunks` scripts), bundled with **Turbopack** (`turbopack-*.js` chunk present).
- App-router style (no legacy `__NEXT_DATA__` blob found; modern build).
- Self-hosted custom fonts (PS1 serif, PSA sans).
- History: WordPress (early) → Jekyll (Ruby static, ~10 years) → Next.js (2024). Long-running own-your-platform philosophy.
- Email subscribe + multiple RSS feeds (posts.xml, gear.xml) — independent-publisher infrastructure.
- No evidence of GSAP/Framer Motion/Lenis/Three.js in the loaded chunks; motion is light/CSS-led.

## Notable Techniques (steal-worthy)
- Bespoke branded font pair (serif + sans, both "PS"-named) as the core identity instead of off-the-shelf fonts.
- Warm paper background (#F7F2ED) + desaturated UI so real photography supplies all the color.
- Fixed left **icon rail** for global nav — frees the full content column and gives persistent wayfinding.
- Credentials rendered as a stack of muted one-liners directly under the intro — a resume compressed to scannable signal.
- Content surfaced as bounded rounded "cards" (Posts / Photosets / Gear), each with self-contained horizontal pagination.
- A **Gear** module with personality tags (Wanted / Vintage / EDC / Workspace) — turns a hobby into a memorable content type.
- Deliberately small hero H1 — confidence through restraint, not size.
- Unusual olive-green accent that's instantly distinctive.

## What to steal for a personal portfolio
- Pick a **non-white warm background** + a **single unexpected accent** (his cream + olive) to look premium without effort. Cheapest highest-leverage upgrade.
- Invest in **one strong serif/sans pairing** and use the serif only for titles — instant editorial credibility.
- Use a **persistent icon rail** instead of a top nav to reclaim horizontal space and keep wayfinding constant.
- Compress your bio/credentials into **muted one-line bullets** under the intro — recruiters scan, don't read.
- Build a quirky personal content module (gear, reading, tools) with **tag labels** — it humanizes a portfolio more than another case study.
- Desaturate the UI so your **actual work imagery/photography carries the color** — let content be the contrast.
- Surface **RSS + email subscribe early** if you publish — own the audience relationship.
- Resist the WebGL hero urge: **restraint reads as senior**. Motion is optional; typographic hierarchy is not.

## Screenshots
- shots/paul-stamatiou/01-hero.png
- shots/paul-stamatiou/02-mid.png
- shots/paul-stamatiou/03-lower.png
- shots/paul-stamatiou/04-full.png
