---
name: Olaolu Olawuyi
url: https://olaolu.dev
slug: olaolu-olawuyi
category: portfolio
industry: dev-portfolio
reachable: true
---

# Olaolu Olawuyi

**One-liner:** A restraint-driven engineer portfolio that proves confidence by leaving almost everything out — one screen of plain-spoken prose, a custom logotype, and a single high-contrast footer that does all the navigation work.

## Overview
olaolu.dev is the personal site of Olaolu Olawuyi, a Staff Software Engineer at Shopify (~15 years experience, ex-hellotax, ex-consultant). The current build is a deliberately minimal, text-forward homepage: a custom "olaolu" logotype top-left, a hamburger contact-menu trigger top-right, an H1 greeting, four paragraphs of first-person bio copy, and a saturated deep-purple footer. There is no hero image, no project grid on the landing page, no scroll spectacle. The actual work, shelf, and résumé live one click away. The overall impression is senior-engineer confidence: the typography, color discipline, and copywriting carry the page where most portfolios lean on motion and imagery. (Note: an earlier, awwwards-era version of this site was far more animated with oversized display type and a sliding nav panel; the present version is a calmer rebuild.)

## Layout & Information Architecture
Single-column, generously indented content block sitting left-of-center, not full-bleed. Massive whitespace — the bio occupies roughly the left two-thirds of a wide viewport with the right third intentionally empty, creating an editorial, unhurried rhythm. Vertical structure is trivially simple: header bar → greeting H1 → bio paragraphs → contact-me inline link → footer. The footer is the real IA hub: a two-column link layout ("SAY HELLO" with email + Telegram on the left; My Work / My Shelf / My Résumé in the middle), a divider rule, then copyright + social abbreviations (TW/GH/LN/YT). Low density by design — the page trusts the reader to scan a few paragraphs rather than navigate a menu.

## Navigation
No traditional top nav. Header carries only the logo (home) and an "Open contact menu" hamburger button (aria-expanded toggle) top-right. Primary wayfinding is deferred to the footer link cluster and an inline "contact me" link inside the bio prose. A "Skip to content" link leads the DOM for accessibility. This is a deliberate inversion of the usual pattern: instead of a persistent nav bar, the site routes you through the footer and through in-copy links, which fits the one-page, low-pressure tone.

## Typography
Body and headings both use a system-font stack: `"SF UI Text", "Helvetica Neue", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif` — no web-font payload, so type renders instantly and natively per OS. H1 ("Hey, I'm Olaolu") is a modest 36px bold; body copy is comfortably large with generous line-height for readability. Hierarchy is created through weight and size contrast plus whitespace rather than typeface pairing. The "SAY HELLO" footer label uses wide letter-spacing (tracked-out caps) as a quiet section marker. The custom "olaolu" wordmark logo is the one piece of bespoke lettering — a rounded, friendly geometric mark with a dotted descender that becomes the site's signature.

## Color & Theme
Light theme on top: near-white lavender background (`rgb(245,244,252)`) with dark slate-grey body text (`rgb(71,71,71)`) — soft, low-glare, not pure black-on-white. The accent is a vivid indigo/violet used for the logo and inline links. The footer flips to a dramatic deep eggplant-purple block with a bright chartreuse/lime-green for its links and acid-violet for the "SAY HELLO" label — an unexpected, memorable high-contrast pairing that gives the otherwise quiet page a bold closing statement. The color story is essentially: calm lavender canvas → loud purple+lime footer payoff.

## Imagery / Media
None on the landing page. No photography, no portrait, no illustration, no video, no 3D/WebGL (DOM has no canvas element). Art direction is achieved purely through type, color, and whitespace. The only "graphic" is the custom logotype. This is a notable stance for a dev portfolio — it removes every asset that could slow load or date the design.

## Motion & Interaction
The current homepage is largely static — no scroll-jacking, no parallax, no on-scroll reveals visible in the teardown. Interaction is concentrated in: the contact-menu toggle (hamburger expands a contact panel), hover states on links (the lime footer links and indigo inline links), and the skip-link. Historically (the awwwards-era build) the site was known for GSAP-driven motion, an animated sliding navigation/contact overlay, and oversized animated type — search sources confirm GSAP was part of the original stack. The redesign trades spectacle for speed and calm. The signature interactive moment that remains is the slide-out contact menu rather than a conventional menu page.

## Tech / Stack (if known)
- **Generator:** Gridsome v0.7.23 (Vue-powered static site generator) — confirmed via `<meta name=generator>`.
- **Framework:** Vue (the index route ships as `page--src--pages--index-vue.*.js`; Olaolu authored the site in JSX-in-Vue per his own notes).
- **Bundling:** Code-split per-page JS chunks (`app.*.js` + per-route chunk), static prerender — fast first paint, no web fonts.
- **Animation (historical/likely):** GSAP for the original animated build.
- **Analytics:** Google Analytics / gtag (G-4FDC290KKM).
- **Source:** open-source on GitHub (whizkydee/olaolu.dev).

## Notable Techniques (steal-worthy)
- **System-font-only typography** — zero web-font request, instant native render, and it still looks intentional because hierarchy comes from size/weight/whitespace.
- **Footer-as-navigation** — moving primary links into a bold, saturated footer instead of a top nav bar; the page ends with a memorable color payoff that doubles as the menu.
- **Two-color shock contrast** — a calm light-lavender body that resolves into a deep-purple + acid-lime footer; one unexpected pairing carries the whole brand.
- **Copy-as-design** — first-person, plainly written bio that front-loads concrete credibility (Shopify, "millions in incremental revenue", named past roles) instead of buzzwords; the writing IS the hero.
- **Inline contextual CTA** — "contact me" embedded in the closing sentence of the bio, so the call to action arrives at the natural end of reading rather than as a button.
- **Custom logotype as sole graphic** — one piece of bespoke lettering does all the branding work, removing every image asset.
- **Restraint as seniority signal** — deleting the project grid / hero image / motion from the landing page reads as confidence, not as an unfinished site.

## What to steal for a personal portfolio
- Lead with a tight, specific, first-person bio that names companies and quantified impact — skip the generic "passionate developer" intro. Concrete credibility beats adjectives.
- Use a system-font stack for the body to get instant load and a clean native feel; spend your one custom-type budget on a logotype, not body copy.
- Pick a calm light canvas and pay it off with ONE bold, saturated section (e.g. the footer) in a surprising accent pair — high contrast in a single place is more memorable than color everywhere.
- Treat the footer as a real navigation surface; you don't always need a persistent top nav for a one-pager.
- Embed your primary CTA inline at the end of the bio's reading flow, plus repeat it in the footer.
- Defer secondary content (full work, résumé, writing/"shelf") to dedicated routes; keep the landing page to one screen of signal.

## Screenshots
- shots/olaolu-olawuyi/01-hero.png
- shots/olaolu-olawuyi/02-mid.png
- shots/olaolu-olawuyi/03-lower.png
- shots/olaolu-olawuyi/04-full.png
- shots/olaolu-olawuyi/05-menu.png
