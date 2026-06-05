---
name: Ramp
url: https://ramp.com/
slug: ramp
category: uiux
industry: fintech
reachable: true
---

# Ramp

**One-liner:** A fintech marketing site that weaponizes restraint — near-brutalist black-on-white typography, a single acid-lime accent, and live data counters — to make "boring" finance software feel fast, modern, and quietly confident.

## Overview
Ramp.com is the marketing homepage for an all-in-one corporate spend-management platform (cards, expenses, AP, travel, procurement, treasury, AI agents). The audience is finance leaders and CFOs at growth-stage and enterprise companies. Overall impression: extreme editorial confidence. It looks more like a high-end design studio's site than a B2B SaaS product — massive type, oceans of whitespace, almost no decorative color, and a relentless "time saved / money saved" narrative. The restraint signals competence: the visual simplicity mirrors the product promise of simplifying historically messy finance ops.

Notable: Ramp serves a separate plain-text "Machine Version" markdown page to bot/agent user-agents (their public "marketing to AI agents" program, complete with a $3,100 agent-incentive). The real visual site only renders for a browser-like user-agent — automation tools get the machine page unless the UA is overridden.

## Layout & Information Architecture
- Single long-scroll homepage on a centered max-width container with very generous horizontal margins; content density is deliberately low.
- Hero is left-aligned: a tiny eyebrow stat ("US CORPORATE PAYMENTS PROCESSED BY RAMP: 0.72…%" with a live odometer-style counter), a giant H1, a one-line subhead, then an inline email-capture + CTA in a single rounded pill input.
- Background is dotted-grid (subtle perforated texture) behind the hero, reinforcing the "ledger / graph paper" finance metaphor without being literal.
- A sticky bottom "AGENTS AT WORK TODAY" ticker bar runs live counters (Accounting fields coded, Agent interactions, Expenses reviewed, Spend allocated, Invoices processed) — turning abstract AI claims into visible, incrementing numbers.
- Below: a **bento-box product grid** (the system Bakken & Baeck nicknamed "Bento box") mixing low-density abstract cards with high-density UI screenshots.
- Logo wall of customers (Cognition, Deel, Eight Sleep, Glossier, BILT) styled as monochrome greyed marks for credibility without visual noise.
- Section headers are full-width statement lines: "One platform for your entire back office. Infinite agents that work 24/7.", "Systems that never spoke", "We've got the receipts." — copy does the heavy lifting.
- "Systems that never spoke" is an art-directed scatter collage of real screenshots (Slack threads, spreadsheets, invoice PDFs, Gmail, policy docs) connected by hand-drawn dotted lines, dramatizing the chaos Ramp replaces.
- Large dark (near-black) footer anchors the page with dense link columns.

## Navigation
- Sticky top nav, white background, thin bottom border on scroll.
- Pattern: wordmark (lowercase "ramp" + paper-plane glyph) | mega-menu dropdowns (Products, Partners, Solutions, Resources) + flat links (Customers, Pricing) | right side: "Sign in" text link + "See a demo" lime pill button.
- A dismissible black announcement bar pins above the nav ("Introducing Stack by Ramp — the AI operating system for accounting firms. Learn more").
- Dropdowns are mega-menu style (caret indicators). Wayfinding is minimal and clean — the site trusts copy + hierarchy over heavy chrome.

## Typography
- Primary typeface: **Lausanne** (Weltkern, a paid neo-grotesque in the Helvetica/Akkurat lineage) — loaded locally via Next.js `next/font` (class hash `lausanne_…module__className`) with a `lausanne Fallback` metric-matched fallback to prevent layout shift.
- This is the whole personality: a clean, slightly mechanical grotesque used at extreme scale.
- H1 is **64px, weight 400** (regular, NOT bold) — the impact comes from sheer size and tight tracking, not weight. "Time is money. Save both." spans nearly the full container.
- Strong two-tone hierarchy within headings: first line pure black, second line mid-grey (e.g. "One platform for your entire back office." black / "Infinite agents that work 24/7." grey) — creates rhythm and a primary/secondary read in one block.
- Body and subheads are quiet grey, small, single-line where possible. Numbers in counters use tabular figures so digits don't jitter while incrementing.

## Color & Theme
- Light theme dominant. Body background is pure white (`lab(100 0 0)`).
- Text: near-pure black (`lab(2.8 …)`) on white — maximum contrast, editorial.
- Single signature accent: **acid / lime yellow-green** (`lab(92.1 -20.5 84.8)`, roughly `#CDFF00`-family) used ONLY for primary CTAs ("Get started for free", "See a demo", "Make the switch") and a few highlight glyphs. Black text sits on the lime for the CTA — high-energy, unmistakably "Ramp."
- Footer flips to near-black for a strong base/contrast bookend.
- No gradients, no glassmorphism, almost no secondary colors. The discipline of one accent is the brand.

## Imagery / Media
- Product UI screenshots presented inside the bento grid and the scatter collage — real interface crops, not abstract mockups, building product credibility.
- Hand-drawn dotted connector lines in the "Systems that never spoke" section give a deliberately analog, sketch-like counterpoint to the clean type.
- Greyscale customer logo wall.
- Live numeric "data" as a media element in its own right (counters/odometers) — the animation IS the imagery.
- A photo-led feature block ("Lauren" / Stack) adds editorial humanity. Minimal stock photography overall; art direction favors product + data + type.

## Motion & Interaction
- **Live incrementing counters / odometers**: the hero stat and the bottom "AGENTS AT WORK TODAY" bar animate digits continuously (rolling-number effect), making AI/scale claims tangible. This is the signature interaction.
- Per Ramp's own redesign writeup, motion goals were "tactility through motion, interactions, and spatial design" — expect scroll-triggered reveals, staggered bento-card entrances, and hover micro-interactions on cards/CTAs (these don't show in static shots).
- Ramp's design team publicly uses **Jitter** to produce bespoke motion graphics for landing pages and product animations (high-density "multiple currency transactions" style animations fit the bento system).
- CTA pill buttons and inline email capture invite immediate action above the fold.
- Dismissible announcement bar + dismissible email-capture modal ("Stay up to date with Ramp's product team.") on the page.

## Tech / Stack (if known)
- **Next.js** (App Router) — confirmed via `https://ramp.com/_next/static/chunks/…` script paths.
- **Vercel** hosting — confirmed via `?dpl=dpl_…` deployment-ID query params on Next chunks.
- **next/font local** for the Lausanne typeface (CSS-module class hash + metric-matched fallback).
- CSS Modules for styling (hashed class names).
- Marketing/analytics: HubSpot (hs-scripts, hs-analytics, hs-banner forms), Google Analytics/GTM, TikTok pixel, LinkedIn (snap.licdn), Bing (bat.bing), Vector (cdn.vector.co), plus a first-party `sgmnt-a.ramp.com` segment-style endpoint.
- Historically built on **Webflow** (per Webflow's own case study) — the current Next.js/Vercel build indicates a migration to a custom stack as the site scaled.
- Design system: custom "Bento box" product-graphic system + defined type scale, motion language, and restrained palette (design partner: Bakken & Baeck).

## Notable Techniques (steal-worthy)
- One bold accent color on a strict black/white base — discipline reads as premium and is trivially on-brand everywhere.
- Oversized H1 at **regular weight** (not bold) — scale alone carries impact; feels editorial, not shouty.
- Two-tone heading (black line + grey line) for instant primary/secondary hierarchy in a single statement.
- Live incrementing counters with tabular figures to make abstract scale/automation claims concrete and alive.
- Art-directed "messy reality" collage (scattered real screenshots + hand-drawn dotted connectors) to dramatize the problem before showing the solution.
- Bento-box grid that mixes low-density abstract cards with high-density real UI crops in one rhythm.
- Metric-matched local font fallback (`next/font`) to kill layout shift while shipping a paid typeface.
- Serving a separate machine-readable markdown version to AI-agent user-agents (forward-looking SEO/AEO play).

## What to steal for a personal portfolio
- **Pick one accent, go black/white otherwise.** A single saturated accent (your lime) on a strict mono base instantly looks designed and is easy to keep consistent.
- **Make the hero H1 huge and regular-weight** in a clean grotesque (Lausanne is paid — free analogs: Neue Haas Grotesk alts, Inter Tight, or Aeonik-likes). Let size, not weight, do the work.
- **Two-tone your headlines** (solid color line + muted line) for free hierarchy without extra elements.
- **Add one live/animated number** (e.g. an odometer of projects shipped, commits, or visitors) with tabular figures — cheap to build, disproportionately memorable.
- **Use a subtle dotted-grid background** as texture instead of gradients/blobs — calm, "engineered" feel.
- **Lead a case-study section with the messy "before"** as an art-directed collage, then resolve to your clean solution.
- Stack-wise this is directly reproducible: **Next.js App Router + Vercel + next/font local + CSS Modules/Tailwind** — a realistic target for a personal site.

## Screenshots
- shots/ramp/01-hero.png — hero: giant "Time is money. Save both." H1, lime CTA, dotted grid, live agents ticker
- shots/ramp/02-mid.png — "One platform for your entire back office" statement + greyscale customer logo wall (Deel, Glossier, BILT, Eight Sleep)
- shots/ramp/03-lower.png — "Systems that never spoke" art-directed scatter collage of real screenshots with dotted connectors
- shots/ramp/04-full.png — full-page composite: bento product grid, Stack/Lauren feature block, dark footer
