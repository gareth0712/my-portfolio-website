---
name: Bottega Veneta
url: https://www.bottegaveneta.com/
slug: bottega-veneta
category: uiux
industry: fashion
reachable: true
---

# Bottega Veneta

**One-liner:** A masterclass in luxury restraint — full-bleed editorial imagery, near-zero chrome, and a confident wordmark let the product photography carry the entire experience without a single decorative flourish.

## Overview
The official Bottega Veneta storefront (loaded as the JP locale, `/ja-jp`). It is an e-commerce homepage that behaves like a fashion lookbook: the brand famously avoids mainstream social media and treats its own site as the primary brand channel, so the homepage is built to feel like flipping through a campaign editorial rather than browsing a catalog. Target audience is high-income luxury shoppers; the design signals exclusivity through emptiness and discipline, not ornament. Overall impression: extremely quiet, image-led, almost austere — every pixel that isn't photography is intentionally suppressed.

## Layout & Information Architecture
- Vertically stacked full-width content blocks (`home-content-1` through `home-content-4`), each a single campaign image or a paired two-up grid.
- The hero is one full-viewport editorial photo (FALL 2026 womenswear) with a small centered pill CTA ("ウィメンズをみる" / View Womenswear) floating low over the image.
- Mid-page switches to a 2-column grid (sunglasses tile + new bags tile), then back to a full-width menswear feature — alternating rhythm of full-bleed → split → full-bleed keeps a long page from feeling monotonous.
- Whitespace is generous and deliberate: large empty gutters frame a "店舗検索" (store locator) and "ニュースレター登録" (newsletter) section before the footer, giving the eye rest.
- Footer is a 4-column link matrix (Help / Services / Inside Bottega / Legal & Cookies) plus locale + language switchers — dense by design, the only high-information zone on the page.
- IA is shallow and category-first: nav exposes top merchandising buckets (New, Women, Men, Bags, Art of Living, Fragrance, Timeless Bags, Gifts, Craft in Motion) directly, no nested mega-menu depth visible at rest.

## Navigation
- Sticky horizontal top bar: wordmark logo top-left, centered text-link category nav, utility icons (search, customer care/phone, account/login, shopping bag) top-right.
- Nav items are `button[expanded=false]` — they open dropdown/flyout panels on interaction (accordion-style state), not a persistent mega-menu.
- A "Next slide" control in the nav region implies the category bar itself can carousel/overflow horizontally (more categories than fit).
- Skip-to-main-content link present (`スキップしてメインコンテンツを開く`) — good a11y baseline.
- Wayfinding is minimal and trusts the user: no breadcrumbs on the homepage, no visible active-state clutter; the brand bets on recognition over heavy signposting.

## Typography
- Body and headings both render in **Source Han Sans Japanese** (Adobe/Google Noto-family CJK sans) on the JP locale, served via **Adobe Typekit** (`use.typekit.net/apg1yoi.js`). On Latin locales this slot is filled by the brand's Helvetica-like neo-grotesque.
- The logo wordmark "BOTTEGA VENETA" is set in wide, evenly-tracked capitals — generous letter-spacing is the single strongest typographic signature, reinforcing the luxury cadence.
- Hierarchy is flat and quiet: small all-caps season labels ("FALL 2026"), modest h2/h5 section headings, and tiny pill-button labels. There are no oversized display headlines — the photography is the headline.
- High reliance on uppercase + letter-spacing for "premium" tone rather than font weight contrast.

## Color & Theme
- Effectively monochrome chrome: black text/icons on white, with `body` background transparent (`rgba(0,0,0,0)`) so the imagery underneath defines the color field.
- No brand accent color in the UI — color comes entirely from the campaign photography (muted neutrals, the FALL 2026 imagery skews desaturated greys, pavement, fabric tones).
- Pill CTAs are white with thin borders / dark text, low-contrast on purpose to avoid competing with the image.
- Cookie banner is the only high-contrast element: black bar with white "すべての Cookie を受け入れる" button — an intentional, temporary intrusion.
- No gradients, no shadows, no glassmorphism — flat, print-like surfaces throughout.

## Imagery / Media
- The entire experience is carried by large-format **editorial campaign photography** — full-bleed, art-directed, shot like a magazine spread (street/pavement scenes, product-in-context, model close-ups for sunglasses/bags).
- Two-up grid pairs a portrait (sunglasses on model) with a product detail (bag in hand), classic lookbook juxtaposition.
- `lazysizes.js` confirms lazy-loaded responsive imagery for performance on heavy hero assets.
- **LiveStory** (`livestory-bottegaveneta.min.js`) is loaded — a headless storytelling/CMS layer used by luxury brands to author these editorial homepage modules without dev cycles.
- No visible WebGL/3D/Three.js; this is photography-first, not effects-first. Video may appear in campaign slots but the captured state was still imagery.

## Motion & Interaction
- Motion is deliberately subtle — consistent with the brand's restraint. The category nav carousels horizontally (Next slide control), and hero/feature slots likely cross-fade between campaign frames.
- Nav buttons expand flyout panels on hover/click (`expanded` state toggling).
- Footer help sections ("Need Help?", "bottega for you", "inside bottega", "Legal and cookies") are collapsible accordions (`button[expanded=false]`), especially for mobile.
- Pill CTAs float over imagery and presumably get a quiet hover treatment (fill/underline).
- This is NOT a GSAP/Lenis scroll-spectacle site — the luxury signal here is calm, not kinetic. Interaction restraint IS the design statement.

## Tech / Stack (if known)
- **Salesforce Commerce Cloud (Demandware / SFRA)** — confirmed by `demandware.static` asset paths, `Sites-BV-R-JAPN-Site` cartridge naming, and `dwanalytics`/`dwac` scripts. This is the live storefront engine (note: third-party data citing React/Vercel refers to their corporate/marketing stack, not the live store).
- **jQuery 3.6.0** (cdnjs) — DOM/interaction layer; classic SFCC frontend, not a SPA (`window.React` and `__NEXT_DATA__` both false).
- **Adobe Typekit** for web fonts (Source Han Sans on JP).
- **LiveStory** — editorial/storytelling CMS for homepage modules.
- **AB Tasty** (`try.abtasty.com`) — A/B testing / experimentation.
- **OneTrust** (`cookielaw.org`) — consent management.
- **Commerce Cloud Einstein** (`cquotient.com/gretel`) — recommendations/personalization.
- GTM, Apple Pay, lazysizes round it out.

## Notable Techniques (steal-worthy)
- Image-as-headline: kill display typography entirely and let one full-bleed photo per section do the talking.
- Letter-spaced all-caps wordmark + tiny all-caps season tags as the only typographic "luxury" device — cheap to replicate, instantly upscale.
- Low-contrast floating pill CTAs over imagery so the call-to-action never fights the photo.
- Alternating full-bleed / two-up-grid rhythm to pace a long single-column scroll.
- Transparent body background so content modules own the color — chrome stays invisible.
- Collapsible accordion footer to tame a dense link matrix on mobile without losing it.
- Decoupled editorial CMS (LiveStory) so merch/marketing can re-author the homepage like a magazine, no deploys.

## What to steal for a personal portfolio
- **Restraint as a flex**: a near-empty, monochrome shell with one strong full-bleed image per section reads as more premium than any animation-heavy layout. Confidence = less.
- **Wide-tracked uppercase name** as your only logo treatment — set your name in letter-spaced caps, no icon needed.
- **One pill CTA per section**, low-contrast, floating over your hero/case-study image — directs without shouting.
- **Full-bleed → split-grid → full-bleed** scroll rhythm is a dead-simple way to make a one-column portfolio feel art-directed.
- **Transparent chrome**: let your project imagery define the page's color, keep nav/footer pure black-on-white.
- Skip-link + accordion footer = accessibility and mobile tidiness with almost no effort.

## Screenshots
- shots/bottega-veneta/01-hero.png
- shots/bottega-veneta/02-mid.png
- shots/bottega-veneta/03-lower.png
- shots/bottega-veneta/04-full.png
