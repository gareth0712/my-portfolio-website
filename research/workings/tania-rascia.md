---
name: Tania Rascia
url: https://www.taniarascia.com
slug: tania-rascia
category: portfolio
industry: dev-portfolio
reachable: true
---

# Tania Rascia

**One-liner:** A reference-grade developer "digital garden" — content-dense yet calm, proving that a personal site can be world-class through editorial typography, a persistent sidebar IA, and disciplined restraint rather than heavy motion or WebGL.

## Overview
Personal site / blog of Tania Rascia (software engineer, open-source creator, ex-chef). It is a long-running tutorial blog ("writing for over ten years," "everything written by me, not AI") positioned explicitly as a digital garden. The audience is working developers looking for long-form guides. Overall impression: warm, bookish, fast, zero fluff. It reads like a well-organized library index, not a marketing landing page. The homepage is effectively a curated table of contents — Blog, Notes, Deep Dives, Projects — all surfaced on one scroll.

## Layout & Information Architecture
Two-column layout: a fixed/sticky left sidebar (brand + identity blurb + primary nav + "Stay Connected" social) and a wide right content column. The sidebar stays pinned while the content column scrolls, so wayfinding and identity are always visible. The content column is a vertical stack of clearly titled sections, each with an emoji/icon glyph header and a one-line subtitle:
- Hey, I'm Tania! (hero intro + 2 CTAs + decorative illustration)
- Blog (dated list, newest first)
- Notes (dated list — personal/year-in-review posts)
- Deep Dives (2-column card grid with topic thumbnails)
- Projects (2-column card grid: title, year, description, Article/Demo/Source buttons)
- Footer (social links, tech-credit badges, "Made with heart")

Generous whitespace, comfortable measure on body text, but high information density overall — many links per viewport without feeling cramped because of strong sectioning and consistent vertical rhythm.

## Navigation
Persistent left sidebar nav (Blog / Notes / Projects / About Me), each item prefixed with an emoji icon for fast scanning. Brand lockup top-left ("tania.dev / Tania Rascia" with floppy-disk logo). Two header controls top-right: a magenta dot (accent/color control) and a sun icon (light/dark theme toggle) — `colorScheme: light dark` confirms native light-dark support. No hamburger on desktop; the sidebar collapses on mobile (6 buttons in DOM suggest a mobile menu trigger + theme controls). Wayfinding is index-style: the homepage itself is the site map.

## Typography
- **Headings:** `Outfit` (geometric humanist sans), heavy weight, tight tracking — gives big, friendly, confident section titles ("Hey, I'm Tania!", "Deep Dives").
- **Body:** native system stack (`-apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial`) — zero webfont cost for body copy, instant render.
- **Mono / metadata:** dates ("March 31", "January 2") set in a monospaced face, lending a code/log aesthetic that fits the dev audience.
- Clear hierarchy: oversized bold display H1, medium-weight section H2s, regular body, muted mono captions. Pairing of a single distinctive display font (Outfit) against an invisible system body is a smart cost/character trade-off.

## Color & Theme
- **Background:** warm cream / off-white (`#fdf6e3`-family, Solarized-light feel), not stark white — softer, bookish.
- **Text:** near-black charcoal `rgb(37,37,43)`.
- **Accent:** magenta/raspberry `rgb(177,45,108)` (#b12d6c) used for links, the brand dot, and card titles — single strong accent, used sparingly and consistently.
- Links carry a dotted/underline treatment reinforcing the editorial, printed-page feel.
- Native light/dark via `color-scheme: light dark` plus a manual sun-icon toggle and an accent-color picker (the magenta dot). High contrast, AA-friendly.

## Imagery / Media
Minimal and purposeful. One hand-drawn hero illustration (a goat carrying a RAM stick on a magenta circle) — playful, on-brand, signals personality without stock photography. Section cards use small SVG/tech logos as thumbnails (GraphQL, React, webpack, JS). Footer uses small brand badges (Gatsby, GitHub, Netlify). No video, no WebGL, no 3D. Art direction is "friendly developer zine."

## Motion & Interaction
Deliberately restrained. No scroll-jacking, no parallax, no page-transition theatrics — performance and readability prioritized. Interactions are limited to: theme toggle (light/dark), an accent-color switcher (the dot), hover states on links/cards (underline + accent color shift), and standard button hovers on project cards. The "wow" is the polish and instant feel, not animation. (Motion is intentionally absent — worth noting since this is itself the design stance.)

## Tech / Stack (if known)
- **Framework:** Gatsby `5.15.0` (confirmed via `<meta name="generator">`) — static-site generation, React-based.
- **React + Node.js**, content authored in Markdown/MDX (classic Gatsby blog pipeline).
- **Hosting:** Netlify (credited in footer).
- **CSS:** Sass-based; Tania authored her own minimalist toolkit "Primitive." Headings use the Outfit webfont; body uses system fonts (no body webfont).
- **Newsletter:** Substack; social on Bluesky; tip jar via Ko-fi; RSS feed exposed.
- History: migrated from a custom WordPress theme (2015) to Gatsby (2019); now on "Version 7" redesign (sidebars, light-dark, Bluesky).

## Notable Techniques (steal-worthy)
- Persistent sidebar carrying identity + nav + social so wayfinding never scrolls away, while content gets a wide reading column.
- Homepage-as-index: surface Blog / Notes / Deep Dives / Projects on one page so the landing is the sitemap — great for a content-heavy personal site.
- Single display webfont (Outfit) + system body stack = distinctive headers with near-zero font payload.
- Warm cream background instead of #fff to reduce glare and signal "editorial / personal" over "corporate SaaS."
- One sparingly-used magenta accent across links, brand dot, and card titles for instant brand recognition.
- Monospace dates/metadata to reinforce the developer identity cheaply.
- User-controllable accent color + light/dark toggle as a tasteful interactivity flourish (and a subtle demo of front-end skill).
- "Everything written by me, not AI" + "digital garden" framing — strong authenticity positioning for 2025+.

## What to steal for a personal portfolio
- Adopt the **fixed-sidebar + scrolling-content** two-column shell for a content-heavy dev portfolio; it keeps your name, nav, and links permanently in view.
- Make the **homepage a curated index** of your best work grouped by type (writing / deep dives / projects) rather than a single hero + scroll.
- Use **one characterful heading font over a system body stack** to look custom while staying fast — directly copy the Outfit + system-stack pattern.
- Pick a **warm off-white canvas** and **a single saturated accent**; resist multi-color palettes.
- Give project cards a consistent shape: title, year, one-line description, and exactly three actions (Article / Demo / Source).
- Ship **light/dark + an accent picker** as a small, on-brand interactive proof of craft instead of heavy animation.
- Credit your stack in the footer (Gatsby/GitHub/Netlify badges) — quietly signals competence to a technical audience.

## Screenshots
- shots/tania-rascia/01-hero.png
- shots/tania-rascia/02-mid.png
- shots/tania-rascia/03-lower.png
- shots/tania-rascia/04-full.png
