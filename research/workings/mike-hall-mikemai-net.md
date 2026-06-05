---
name: Mike Hall (mikemai.net)
url: https://mikemai.net
slug: mike-hall-mikemai-net
category: portfolio
industry: design-engineer
reachable: true
---

# Mike Hall (mikemai.net)

> NOTE: The brief labels this target "Mike Hall," but mikemai.net actually belongs to **Mike Mai** — a Boston-based design-systems / HTML-CSS / accessibility engineer (BFA Graphic Design, MassArt; author of Typesettings.css and MCDS). Treated as the real owner throughout.

**One-liner:** A near-zero-JavaScript, accessibility-first personal site that proves world-class craft can come entirely from semantic HTML + modern CSS — bold editorial typography, a 5-mode theme switcher, and total restraint as the design statement.

## Overview
A personal portfolio / link-hub for a design-systems and accessibility specialist. The audience is other web professionals, hiring managers, and the indie-web/a11y community. The whole site reads as a thesis: "the web is typography + semantics + accessibility, and you don't need a framework or a megabyte of JS to make it beautiful." The only script on the page is Cloudflare's analytics beacon — the rest is hand-authored CSS. The impression is confident, opinionated, and unmistakably hand-built; it feels like reading a well-set printed broadsheet that happens to be a website.

## Layout & Information Architecture
Single long-scroll page, single readable column, no rigid grid (computed `display: block`, `max-width: none` on body — width is governed by typographic measure, not a container framework). Content is a stack of clearly titled `<h2>` sections in a deliberate order:
1. Hero / intro + theme switcher
2. THE ART OF BALANCE (artist positioning + ADPList CTA)
3. WHAT'S NEW IN VIBE CODING (recent experiments: Tiny CSS, DBZ Ipsum, AMA, a11y-rules, MUI icons, MCDS)
4. SELECTED WRITING (blog highlights)
5. DESIGN MANUALS (A11y / Grid / Typography manuals)
6. SLASH PAGES (indie-web `/now`-style pages: year-in-review, mixtapes, /happy, /inspo, /notes)
7. ARTIST STATEMENT → DESIGN SYSTEMS + PRESS KIT
8. A11Y-WEBRING.CLUB nav + COLOPHON footer

Density is low and reading-first: generous vertical rhythm, plain bullet lists, link lists over cards. Whitespace is the layout; there is almost no decorative chrome.

## Navigation
No sticky header, no hamburger, no mega-menu. Wayfinding is purely the scrollable section headings — the page IS the nav. The most prominent interactive control is the **theme switcher** sitting right under the hero (5 radios: DARK, LIGHT, PLAIN DARK, PLAIN LIGHT, SYSTEM — defaults to SYSTEM). The footer carries an accessibility webring (prev / random / next) and colophon/social links (Mastodon, IndieWeb) — indie-web conventions rather than conventional site nav.

## Typography
Typography is the entire design. Two webfonts only (confirmed via `document.fonts`):
- **Display / H1–H3:** `Boldonse` (system-ui, sans-serif fallback) — an ultra-heavy, condensed, almost brutalist grotesque. H1 renders at ~92px ("WICKED PISSAH DESIGNER CØDER"). Headings are ALL-CAPS with manual soft-hyphenation (`WICK­ED`, `PIS­SAH`, `DE­SIGN­ER`) so the giant type wraps gracefully at any viewport — a deliberate, rare detail.
- **Body / running text:** `IM Fell English`, Georgia, serif — a historical old-style serif that gives the page its printed-broadsheet feel.
The pairing (massive modern condensed sans display over a 17th-century serif body) is the signature move: high contrast, editorial, memorable. Hierarchy is driven by size + weight + case, not color.

## Color & Theme
Minimal, near-monochrome per theme, and **theme-driven rather than fixed**. The default/SYSTEM render in the captures shows a hot pink/magenta hero; scrolling shows other sections in muted olive and pale powder-blue — the "PLAIN" variants swap the whole palette. Links inherit text color (`rgb(0,0,0)` — no blue link convention; underlines/context carry affordance instead). `color-scheme: dark light` is set on `<html>` so form controls and scrollbars respect the active mode. Contrast is intentionally strong (heavy black type on saturated/pale grounds), consistent with the author's WCAG-AA focus. No gradients, no shadows, no imagery-driven color.

## Imagery / Media
Essentially imageless by choice. No hero photo, no WebGL, no video, no illustration in the main flow. The only "media" is the PRESS KIT — downloadable headshot/hero JPEGs hosted on S3 (beer-themed hero, profile) offered at multiple widths. This reinforces the thesis: the design carries itself on type and layout, not assets. Result: tiny page weight and instant load.

## Motion & Interaction
Deliberately restrained, CSS-only. No scroll-jacking, no parallax, no JS animation library, no custom cursor in the main flow (one inline note references a "coding buddy Cursor" but that's copy, not a UI cursor). The primary interaction is the radio-based theme switcher, which re-themes the page instantly via CSS (`:has()` / sibling selectors on checked radios, no JS). Hover/focus states are standard, accessible, keyboard-navigable. The "wow" here is the absence of motion — performance and respect-for-the-user (likely `prefers-reduced-motion`-friendly) are the flex.

## Tech / Stack (if known)
- **Hand-authored static HTML + CSS.** Zero app framework; only external script is `static.cloudflareinsights.com` (analytics beacon). Hosted/proxied via Cloudflare.
- **CSS:** modern, classless-leaning. Author's own stack — Typesettings.css / MCSS / MCDS — built on logical properties, cascade layers (`@layer`), relative units, `:has()`-driven theming, and `color-scheme`. 2 stylesheets total.
- **Fonts:** Boldonse (display) + IM Fell English (body), self-served `@font-face`.
- **Theming:** native CSS, radios + `:has()`, respects OS via `color-scheme`.
- Indie-web plumbing: a11y-webring.club membership, IndieWeb/Mastodon identity, slash pages.

## Notable Techniques (steal-worthy)
- **Manual soft hyphens (`&shy;`) in giant display headings** so 90px+ all-caps type wraps cleanly on any screen instead of overflowing.
- **CSS-only multi-theme switcher** (5 modes inc. SYSTEM) using radio inputs + `:has()` — no JS, fully keyboard-accessible.
- **Type-pairing as the whole identity:** one brutalist condensed display face + one historical serif body face; hierarchy from size/weight/case, never color.
- **Classless / semantic-HTML-first authoring** — links and lists over card components; the markup is the design system.
- **Near-zero JS budget** — only an analytics beacon; everything else is CSS. Instant load, trivial maintenance.
- **Links inherit text color** (no default-blue), proving affordance via context/underline rather than color — a typographer's choice.
- **Indie-web conventions as content:** slash pages (`/now`, `/happy`, `/inspo`), an accessibility webring footer, and a downloadable press kit.

## What to steal for a personal portfolio
- Make **typography the brand**: pick one striking display face + one readable text face and let size/weight/case do all hierarchy work — skip decorative color and shadows.
- Add a **CSS-only theme switcher** that includes a SYSTEM default and respects `color-scheme` / `prefers-color-scheme`; it signals craft with zero JS cost.
- Use **soft hyphens in large headings** to keep oversized type responsive without media-query gymnastics.
- Ship a **single long semantic page** with clearly titled sections instead of a multi-route SPA — faster, more accessible, easier to maintain.
- Treat **accessibility and tiny page-weight as the differentiator**: no framework, no animation libs, semantic HTML, AA contrast — it doubles as proof-of-skill for a design-engineer.
- Include indie-web touches (a `/now` or `/inspo` slash page, a downloadable press kit) to add personality cheaply.

## Screenshots
- shots/mike-hall-mikemai-net/01-hero.png (pink hero — Boldonse all-caps H1 + theme switcher)
- shots/mike-hall-mikemai-net/02-mid.png (olive theme — "WHAT'S NEW IN VIBE CODING" link list)
- shots/mike-hall-mikemai-net/03-lower.png (pale-blue theme — slash-page list + Artist Statement)
- shots/mike-hall-mikemai-net/04-full.png (full-page capture)
