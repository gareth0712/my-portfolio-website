---
name: Caleb Brown
url: https://calebbrown.dev
slug: caleb-brown
category: portfolio
industry: dev-portfolio
reachable: false
---

# Caleb Brown

**One-liner:** Not world-class — the exact target `calebbrown.dev` is offline (Cloudflare 504 Gateway time-out, origin down / connection timeout). The same person's live site at `caleb-brown.dev` is a stock Hugo "Coder" template: a clean, single-screen identity card, not an award-tier motion portfolio.

## Overview
The requested domain `https://calebbrown.dev` did not resolve to a working page — Cloudflare returned a 504 (origin unreachable), and a direct retry timed out (os error 10060). It is bot-walled/down, not reachable.

The closest live equivalent is the hyphenated `https://caleb-brown.dev/`, the personal site of the same Caleb Brown ("Game Developer | Software Engineer"). It is a minimal, single-viewport landing page built on the open-source Hugo **Coder** theme. Audience: recruiters/peers who want a quick identity + links jump-off. Overall impression: tasteful and fast, but generic — it is an unmodified popular template, so there is essentially nothing proprietary or "stealable" beyond the template's own restrained good taste.

## Layout & Information Architecture
Single centered column, vertically centered in the viewport. Top-to-bottom: circular avatar photo → H1 name → H2 tagline ("Game Developer | Software Engineer") → row of 4 social icons → footer credit. Generous whitespace; everything lives above the fold on desktop. IA is flat: 3 nav routes (About / Projects / Contact) plus external profile links. No grid system on display beyond the centered stack; density is very low (only 11 anchors on the whole page).

## Navigation
Simple top bar, not sticky: brand "CALEB BROWN" (letter-spaced caps) left, three text links (About, Projects, Contact) right. No hamburger at desktop width, no mega-menu, no scroll transitions. Wayfinding is trivial because the page is one screen. A dark/light theme toggle sits bottom-right.

## Typography
System font stack only (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, …`) — no custom/web fonts loaded. Hierarchy is conventional: bold large H1 name, bold mid-size H2 tagline, letter-spaced uppercase wordmark in the nav. Clean and legible but not distinctive; the type choices are the Coder theme defaults.

## Color & Theme
Light mode default: near-white background `rgb(250,250,250)`, near-black text `rgb(33,33,33)`. Monochrome with a single blue accent on links (visible in the "Hugo & Coder" footer credit). High contrast, accessible. Ships with a working dark-mode toggle (theme switch icon, bottom-right).

## Imagery / Media
One asset: a circular cropped candid photo of Caleb (outdoor, shallow depth of field). No illustration, no video, no 3D/WebGL. Art direction is minimal-portrait.

## Motion & Interaction
Effectively none beyond theme defaults: standard link hover color change and the dark/light toggle. No scroll effects, no page transitions, no custom cursor, no physics. (This is consistent with the Coder theme, which is intentionally lightweight.)

## Tech / Stack (if known)
- **Static site generator:** Hugo 0.102.3 (confirmed via `<meta name="generator">`).
- **Theme:** hugo-coder (luizdepra/hugo-coder) — credited in footer and linked in DOM.
- **Hosting/CDN:** Cloudflare (the down target returned a Cloudflare 504 error page).
- **Source hosting:** self-hosted Gitea at `projects.caleb-brown.dev` (linked from socials) — a notable detail: he runs his own Git server rather than relying solely on GitHub.
- No animation libraries (no GSAP/Framer/Lenis/Three.js), no custom fonts, no CMS.

## Notable Techniques (steal-worthy)
- Self-hosted **Gitea** instance for code, linked alongside GitHub — signals infra/ops competence on a dev portfolio.
- Hugo + Coder theme = near-zero build/maintenance cost, instant load, free dark mode. A pragmatic baseline if you want "ship in an afternoon."
- Single-viewport identity card pattern: avatar + name + one-line role + social row. Effective as a hub even when content is thin.

## What to steal for a personal portfolio
- The **identity-card hero** (avatar / name / one-line value prop / social row, all centered above the fold) is a solid fallback layout when you don't yet have rich project media.
- Ship a **built-in dark-mode toggle** from day one — cheap with a system-font stack, high perceived polish.
- Linking a **self-hosted Gitea/code server** is a low-effort credibility signal for an engineering portfolio.
- Counter-lesson: this site shows the ceiling of an unmodified template. To be world-class you must add what's missing here — custom type, motion, real project case studies, and art direction. Use it as a "what minimal looks like" baseline, not an aspiration.

## Screenshots
- shots/caleb-brown/01-hero.png  (caleb-brown.dev hero — centered identity card; earlier capture of the calebbrown.dev 504 page was overwritten by this live hero)
- shots/caleb-brown/02-mid.png   (post-scroll; page is single-screen so near-identical to hero)
- shots/caleb-brown/04-full.png  (full-page capture)

**Reachability note:** Target `calebbrown.dev` = DOWN (Cloudflare 504 + connection timeout). Findings above describe the same author's live `caleb-brown.dev` as the closest available evidence.
