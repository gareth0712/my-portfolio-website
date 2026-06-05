---
name: Manu Arora
url: https://www.manuarora.in
slug: manu-arora
category: portfolio
industry: dev-portfolio
reachable: true
---

# Manu Arora

**One-liner:** A masterclass in restraint — the founder of Aceternity UI (a flashy animation library) chose a near-zero-chrome, single-column "personal letter" portfolio that loads instantly and reads like prose, proving taste over spectacle.

## Overview
Personal site of Manu Arora — full-stack/design engineer, creator of Aceternity UI (the popular copy-paste animated component library, ~3M page views/month) and Aceternity design studio. The homepage is intentionally anti-portfolio: no hero animation, no project grid, no WebGL. It's a vertically stacked, text-forward document that reads like a personal introduction letter. The audience is founders/startups (hire-me funnel) and the dev community (his library, YouTube, blog). Overall impression: confident minimalism — the kind only someone who *can* build flashy sites would dare ship, signalling "I don't need to prove it with my own site."

## Layout & Information Architecture
- Single narrow centered column (roughly 640–720px content width), generous horizontal margins, lots of vertical whitespace. No grid system on display — it's a one-column reading flow.
- Section order, top to bottom: (1) name + tagline header with inline nav, (2) intro paragraphs with inline links, (3) dotted horizontal divider, (4) **THINGS I DO** (Aceternity studio, Aceternity UI, YouTube), (5) **COMPANIES I'VE WORKED WITH** (logo list), (6) **WORK WITH ME** (consultation / hire / sponsor), (7) **WRITING** (3 blog posts with dates), (8) footer with code/video links + credit to designer Akash Bhadange.
- Each section is a labelled list: small all-caps uppercase tracking-wide section heading, then rows of `icon + bold title + muted description`. Extremely scannable, low density per row, high density of links overall.
- IA philosophy: every block is a CTA in disguise. "Things I do" and "Work with me" are link farms styled as a résumé.

## Navigation
- Inline text nav sitting directly under the name (Home / Tweets / Inspiration / Blog / Sponsor) — not a sticky bar, no hamburger, no mega menu. Active item ("Home") shown with an underline.
- A single floating settings/gear button pinned top-right (dark rounded square) — the only fixed element; it's a theme/preferences control.
- Wayfinding is minimal because the page is short; nav doubles as the site map. Sub-pages (tweets, inspiration, blog) are separate routes.

## Typography
- **Primary typeface: Schibsted Grotesk** (confirmed via computed style and `--primary-font` CSS var) for headings and body — a clean humanist grotesk with personality. Inter and Geist Sans are also loaded as fallback/secondary font families.
- Section labels (THINGS I DO, WRITING) are set in a small, uppercase, letter-spaced, muted-grey treatment — almost a monospace-label vibe — to act as quiet dividers.
- Hierarchy is driven almost entirely by **weight and color**, not size: bold dark titles vs. lighter grey descriptions on the same line. Body copy is comfortable reading size with relaxed line-height.
- Inline links inside paragraphs use underline-on-hover treatment, keeping the prose clean.

## Color & Theme
- Light theme by default. Background is `--color-stone-50` (warm off-white, computed `lab(98.27 ...)` — not pure white). Confirmed CSS vars: `--theme-bg: stone-50`, `--primary: stone-800`, `--foreground: stone-600`.
- Palette is a warm **stone greyscale**: near-black headings (stone-800), mid-grey body (stone-600), lighter grey for meta/labels. Text color computes to near-black `lab(15 ...)`.
- Accent color is essentially absent on the homepage — the brand "color" comes from the small colorful app/company favicon-style icons next to each row (blue Aceternity, orange Aceternity UI, red YouTube, etc.). This is a deliberate trick: the page stays monochrome and calm while colored logos provide all the visual pop.
- `color-scheme: light` set explicitly; gear button hints at a dark-mode toggle.

## Imagery / Media
- No photography, no hero image, no video embeds, no 3D/WebGL on the homepage.
- The only imagery: small rounded-square brand icons (16–24px-ish) acting as list bullets, and a small avatar next to the name. Company logos in the "worked with" row.
- A handwritten-style "Manu" signature graphic sits in the footer — a humanizing, personal touch.
- Art direction is "icon-as-bullet": every list item gets a recognizable colored glyph, doing the visual heavy lifting in an otherwise text-only page.

## Motion & Interaction
- The homepage is deliberately quiet motion-wise — ironic given the author ships Aceternity UI (spotlight cards, meteors, animated beams). No scroll-jacking, no parallax, no entrance stagger visible on load.
- Microinteractions are restrained: underline-on-hover for inline links, subtle hover states on list rows, gear button as the one interactive affordance.
- This is the signature move: **the restraint IS the statement.** It says the author's taste isn't dependent on effects.
- (His *other* properties — ui.aceternity.com, aceternity.com — are where the heavy Framer Motion / animated-component show lives.)

## Tech / Stack (if known)
- **Next.js (App Router) with Turbopack** — confirmed: `_next/static/chunks/turbopack-*.js` bundles, no legacy `__NEXT_DATA__`/`#__next` (App Router signature).
- **Tailwind CSS** — confirmed via stone palette CSS vars (`--color-stone-50`, `--color-stone-800`) and utility class names (`font-sans antialiased light`).
- **Self-hosted Plausible-style analytics** at `analytics.aceternity.com/js/script.js` (privacy-friendly, no Google Analytics).
- Fonts loaded via `next/font` module-scoped CSS (Schibsted Grotesk primary, Inter + Geist Sans).
- Per his own statements the site is Next.js + Tailwind; Framer Motion is his go-to for animation across his ecosystem (used more on the component-library sites than here).
- Source is public: github.com/manuarora700/manuarora.in (linked in footer as "code").

## Notable Techniques (steal-worthy)
- **Anti-portfolio portfolio**: a text-first single column that reads like a letter — counter-signal of confidence, and trivially fast/maintainable.
- **Color via icons, not via accent CSS**: keep the layout monochrome warm-grey, let small colorful brand glyphs supply all visual interest.
- **List-as-résumé pattern**: `uppercase section label → rows of icon + bold title + muted one-liner`. Every row is a disguised CTA.
- **Warm greyscale (stone) instead of pure black/white**: stone-50 bg + stone-800/600 text feels editorial and human, not clinical.
- **Hierarchy by weight+color, not size**: title vs. description live on the same line, differentiated only by boldness and grey level.
- **Open-source the site + credit the designer in footer**: builds trust and community goodwill.
- **Privacy-first self-hosted analytics** instead of GA — on-brand for a dev audience.

## What to steal for a personal portfolio
- Ship a single narrow centered column (~640px) and resist the urge to add a hero animation. Let the words carry it.
- Use a warm off-white background (stone-50) + two-to-three greys for text. Skip a colored accent entirely; let tiny brand/project icons be your only color.
- Structure the page as labelled lists: small uppercase section header, then `icon + bold title + muted description` rows. It scans in seconds and every line is a link/CTA.
- Pick one characterful grotesk (Schibsted Grotesk / Geist) via `next/font` and drive hierarchy with weight + grey level rather than many font sizes.
- Add one human touch (signature graphic, "aka Paaji" nickname) so the minimalism reads as personality, not laziness.
- Keep exactly one fixed UI element (a theme/settings button) and make everything else static — near-zero JS, instant load.
- Open-source the repo and credit collaborators in the footer.

## Screenshots
- shots/manu-arora/01-hero.png
- shots/manu-arora/02-mid.png
- shots/manu-arora/03-lower.png
- shots/manu-arora/04-full.png
