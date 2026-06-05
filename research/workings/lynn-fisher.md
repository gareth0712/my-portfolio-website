---
name: Lynn Fisher
url: https://lynnandtonic.com
slug: lynn-fisher
category: portfolio
industry: design-studio
reachable: true
---

# Lynn Fisher

**One-liner:** A web designer who rebuilds her entire portfolio from a blank CSS file every single year — each version a self-contained piece of CSS art with near-zero markup, proving that "world-class" can mean technical restraint and craft rather than heavy tooling.

## Overview
lynnandtonic.com is the personal portfolio of Lynn Fisher, a Phoenix-based designer/CSS-artist (also behind the 10-year "A Single Div" project). The defining feature is not any one design but the *ritual*: every year she throws away the old CSS and rebuilds the same content with a brand-new visual concept and a novel CSS technique she wants to learn. The captured version is **v. XIX** (the 19th iteration). This particular edition is styled as a vintage book title page / table of contents: centered display title, a one-line role tagline, and a leader-dotted contents list. It is content-light and concept-heavy — the audience is fellow designers, developers, and potential clients who will recognize the technical flex behind the apparent simplicity.

## Layout & Information Architecture
Single-screen, centered, almost no scrolling — the whole site is essentially one "page" of a book.
- Vertically and horizontally centered title block: "LYNN / FISHER" in two stacked lines.
- Subtitle: "Designer for the Web".
- A table-of-contents list with right-aligned Roman numerals (I–VI) connected by classic typographic **leader dots**: ABOUT · WORK · THOUGHTS · ARCHIVE · RSS · GIFS.
- Footer marker "v. XIX" centered at the bottom, doubling as a link home and a version stamp.
- Extreme whitespace; very low density. The negative space *is* the design.
- DOM is famously lean: an `eval` of the live page returned only **4 `<div>`s and 1 `<svg>` on the entire document**. The IA is expressed almost entirely through semantic headings + links, not nested containers.

## Navigation
- No traditional nav bar, no hamburger, no sticky header. Navigation *is* the table-of-contents list — the content and the nav are the same thing.
- Six destinations as plain links (ABOUT, WORK, THOUGHTS, ARCHIVE, RSS, GIFS), each paired with a Roman numeral for a book-index feel.
- Wayfinding is provided by the version stamp ("v. XIX") and the ARCHIVE link, which lets visitors browse every prior annual design — turning the redesign history itself into a navigable artifact.
- A single `<button>` labelled "mode" toggles light/dark theme.

## Typography
Type is the entire interface here, so the choices are deliberate and unusual.
- **Display / H1 ("LYNN FISHER")**: a custom decorative face — computed `font-family: "Hubano-Rough"` — a rough-edged, slightly blackletter/Art-Nouveau display type. Large, tightly stacked over two lines.
- **Body / subtitle / contents**: `font-family: "SydoniaAtramentiqua Regular"` falling back to `"Times New Roman", serif` — a refined serif that reinforces the antique book-page aesthetic.
- Hierarchy is achieved purely by size and weight contrast: a huge ornate display title, a small serif tagline, then an evenly-spaced serif list.
- Classic typographic detail: **leader dots** ("………") between each label and its numeral — a print-typesetting convention rarely seen on the web.

## Color & Theme
- **Light mode (default):** warm off-white / bone paper background `rgb(228, 226, 215)` with pure black text `rgb(0,0,0)`. Reads like aged paper — high contrast, very legible.
- **Dark mode (toggle):** near-black background `rgb(17,17,17)` with **blood-red text**. The inversion isn't a neutral grey dark theme — it deliberately shifts the mood to something gothic/horror, matching the rough display typeface. This is art direction, not just an accessibility convenience.
- No gradients, no photographic color, no accent palette beyond the two-mode system. Restraint is the point.

## Imagery / Media
- Essentially **no raster imagery** on the landing version — no hero photo, no illustration `<img>`. Just type on a textured-feeling flat background.
- Only 1 `<svg>` in the document (likely the mode-toggle icon or a small ornament).
- A separate "GIFS" section exists for animated work, kept off the main page.
- Across the broader body of work (and prior annual versions in the ARCHIVE) the imagery is famously **single-element CSS illustration** — drawings built from one HTML element using gradients, box-shadows, clip-path and pseudo-elements, no images at all.

## Motion & Interaction
- The landing page itself is static and calm — no scroll-jacking, no parallax, no autoplay. The drama lives in the *concept* and in the **mode toggle** (instant light↔dark, paper↔gothic flip).
- Hover affordances on the contents links (per Lynn's known style, subtle CSS transitions/underline reveals rather than JS).
- Historically her annual versions are built around ONE signature CSS interaction — e.g. the 2019/2020 versions used a "fold-in" effect inspired by Mad Magazine's Al Jaffee fold-ins, and "pull-tab" pop-up-book effects, all done in pure CSS transforms with no animation library.
- Motion philosophy: handcrafted CSS transitions/transforms over imported physics engines; every effect is reproducible from the stylesheet.

## Tech / Stack (if known)
- **No JS framework.** Static HTML/CSS site. Only two scripts load: `main.min.js` (tiny, hand-rolled — almost certainly just the theme toggle) and `gc.zgo.at/count.js` (**GoatCounter**, a lightweight privacy-friendly analytics script).
- Custom self-hosted web fonts (Hubano-Rough, Sydonia Atramentiqua).
- No detectable CMS / generator meta tag on this version; the project is hand-authored and version-controlled on GitHub (github.com/lynnandtonic). Likely a static-site setup (her stack has historically been static/Jekyll-style) but the page ships as plain static HTML.
- The headline technical achievement is the **4-div, 1-svg document** — deliberately minimal, semantic markup.

## Notable Techniques (steal-worthy)
- **Annual full rebuild from a blank CSS file** — a forcing function for learning + a built-in content/brand refresh, with old versions preserved in an ARCHIVE that becomes its own attraction.
- **Nav-as-content**: the table of contents doubles as the entire navigation; no separate header chrome.
- **Print typography on the web**: leader dots + Roman numerals to make a link list feel like a book index.
- **Mode toggle as art direction**, not just dark-mode utility — the dark theme (black + blood-red) tells a different story than the light theme (bone paper + black).
- **Radical markup minimalism** (4 divs / 1 svg) — proving heavy DOM nesting is optional.
- **Lightweight, privacy-respecting analytics** (GoatCounter) instead of a heavy tag manager.
- **Custom display typeface as the entire hero** — no image needed; the type *is* the art.

## What to steal for a personal portfolio
- Treat the homepage as a **title page**: oversized name, one-line role, and a tiny numbered index of sections. Instantly memorable, zero clutter.
- Make **navigation = content**. A junior portfolio doesn't need a sticky mega-nav; a centered list of 4–6 destinations is enough and looks intentional.
- Add a **theme toggle that changes mood**, not just brightness — pick an accent for dark mode that says something (Lynn's blood-red). Cheap to build, high personality payoff.
- Keep the **markup lean and semantic** (headings + links). It loads fast, scores well on Lighthouse/SEO, and signals craft to any dev reviewing your source.
- Use **typographic details** (leader dots, Roman numerals, a characterful display font) to create distinctiveness *without* images, illustration budget, or JS.
- Adopt the **version-stamp + archive** idea: ship a "v.1", and let yourself redesign yearly. The archive of past versions becomes proof of growth and a talking point.
- Reach for a **privacy-friendly, lightweight analytics** script (GoatCounter/Plausible) over Google Tag Manager for a fast, clean personal site.

## Screenshots
- shots/lynn-fisher/01-hero.png — light-mode title page (above the fold)
- shots/lynn-fisher/02-mid.png — mid scroll (near-identical; single-screen layout)
- shots/lynn-fisher/03-lower.png — lower / footer with "v. XIX" stamp
- shots/lynn-fisher/04-full.png — full-page capture, light mode
- shots/lynn-fisher/05-darkmode.png — dark mode (black bg + blood-red text)
