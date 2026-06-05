---
name: Things (Cultured Code)
url: https://culturedcode.com/things/
slug: things-cultured-code
category: uiux
industry: saas
reachable: true
---

# Things (Cultured Code)

**One-liner:** A masterclass in restraint — the marketing site for a famously calm to-do app practices what it preaches, using an almost monastic layout, generous whitespace, and product-photography-as-hero to let the craftsmanship of the app speak without a single gimmick.

## Overview
Marketing/home page for Things, the multiple-Apple-Design-Award-winning personal task manager for Mac, iPhone, Watch, iPad, and Vision Pro. The audience is design-conscious productivity users on the Apple ecosystem. The overall impression is one of deliberate quietness: no parallax theatrics, no auto-playing video walls, no animated gradient meshes. The page is a single long-scroll narrative that mirrors the app's own philosophy of an "invisible UI" — every element earns its place, and the product screenshots (rendered inside realistic device frames) are the only visual spectacle. It feels like an Apple product page distilled down by a small studio.

## Layout & Information Architecture
Single-column, center-axis layout. Everything is anchored to a narrow central content column with very wide side margins on desktop (the readable text column is roughly 1/3 of viewport width), which produces a calm, focused reading rhythm. The page is a vertical narrative of clearly separated sections, each introduced by a small colored glyph + bold heading + short supporting paragraph + optional CTA:

1. Hero — Things app icon (large, with realistic shadow), "Things" H1, one-sentence value prop, "Watch Introduction Video" affordance.
2. Simply Powerful — value section with a device mockup (Mac window + iPhone + iPad + Watch shown together).
3. Get Things, Get Done — the actual download/pricing grid: four product cards (Mac / iPhone & Watch / iPad / Vision Pro), each with icon, platform name, "view in your currency" link, and App Store buttons.
4. What People Are Saying — social-proof testimonial wall pulled from X/Bluesky/etc., shown as a horizontally-scannable row of tweet-style cards with avatar, handle, and date.
5. Read All About It — blog/press section.
6. Newsletter — single email input + Subscribe.
7. Footer — four-column link directory (Products / Support / News / Company) plus social row.

Whitespace is the primary design tool. Density is intentionally low; sections breathe with large vertical padding. The IA is conversion-funnel clean: identity → why → buy → proof → stay-in-touch.

## Navigation
Minimal top bar: wordmark+icon on the left ("Things"), three text links on the right (Features, Support, Blog). That's it — no hamburger, no mega-menu, no sticky-on-scroll transformation observed; it sits as a thin hairline-separated header. The download CTAs are deliberately NOT in the nav — they live in the dedicated "Get Things" section mid-page, keeping the chrome uncluttered. Wayfinding relies entirely on the linear scroll and the footer link directory rather than persistent nav. This is a confident choice: the nav assumes you came to either learn (Features), get help (Support), or read (Blog), and pushes the purchase decision into the body.

## Typography
System font stack only — `ui-sans-serif, -apple-system, BlinkMacSystemFont, Roboto, sans-serif`. No web fonts are loaded at all. On Apple devices this resolves to San Francisco, which is the same typeface as the app itself, creating perfect brand continuity between marketing and product (and zero font-loading latency / FOUT). Hierarchy is built from weight and size, not typeface variety: heavy/bold dark headings (the "Things" H1, "Simply Powerful", "What People Are Saying" use a large bold weight) paired with a regular-weight, slightly muted gray body. Body copy is centered and set in short measure for a calm cadence. Many section headings are duplicated in the DOM (e.g. "What people are saying What People Are Saying") — a responsive technique where one variant shows on mobile and another on desktop via CSS.

## Color & Theme
Light theme, cool-neutral base. Body background is a very pale blue-gray `rgb(242, 245, 247)` rather than pure white — softer on the eyes and slightly "Apple frosted." Text is near-black/dark slate. The accent is the Things signature blue (the app icon's saturated royal blue, also used for the "See features ›" link and social glyphs). Section glyphs introduce small bursts of multi-color (the tri-circle CMY-ish glyph next to "Simply Powerful", colored platform glyphs) but these are tiny and incidental — the palette is overwhelmingly neutral. No gradients-as-decoration, no dark mode toggle observed. Contrast is generally good, though some muted-gray secondary text and the faded handle/quote text in testimonial cards sits on the lower end.

## Imagery / Media
The heroes are high-fidelity product renders: the Things app icon with a realistic soft drop shadow as the hero centerpiece, then composite device mockups showing the app running inside accurate Mac window chrome, iPhone, iPad, and Apple Watch frames simultaneously. These are crisp, retina-quality static images (the actual UI of the app, including Inbox/Today list with checkmarks, tags, "Prepare Presentation" to-do, etc.). There is an "Introduction Video" available behind a click (not auto-played inline). The testimonial section pulls real social avatars. No illustration, no stock photography, no 3D/WebGL — the art direction is "show the real product, beautifully framed."

## Motion & Interaction
Restrained by design. From the DOM and stack there is no GSAP, no Lenis smooth-scroll, no scroll-triggered animation library — motion is jQuery/CSS driven and light. The hero "Watch Introduction Video" is a clickable affordance (cursor:pointer) that opens the intro video. The testimonial wall is a horizontally paginated carousel ("Next Posts" / chevron control). Hover states on links are subtle color/underline shifts. The signature "delight" this brand is famous for lives inside the app (objects that "materialize boundaries" when dragged/swiped/completed, smooth to-do expansion) — the website deliberately does NOT try to recreate that with web gimmicks; it instead conveys the calm through stillness and whitespace. The lesson here is anti-motion: world-class can mean knowing when NOT to animate.

## Tech / Stack (if known)
- No modern JS framework — plain HTML/CSS with **jQuery 3.2.1**. No React/Vue/Svelte signature in the DOM.
- Custom in-house CSS/JS bundles served from their own CDN (`shared.min.js`, `tweetgrid.min.js` for the testimonial grid, `mailinglist.min.js`).
- **Matomo** (self-hosted, privacy-friendly analytics via `matomo.cloud`) instead of Google Analytics — consistent with the brand's privacy stance.
- System font stack, zero web fonts.
- `breakcache` query-string cache-busting on assets (e.g. `?breakcache=aj26xc5f`), versioned asset directories dated `2024-02-20` — a simple, hand-rolled deploy/versioning scheme.
- No meta generator tag — bespoke, not a CMS template.

## Notable Techniques (steal-worthy)
- System-font-only typography for instant render and perfect OS-native brand match (marketing type === product type).
- Near-white cool-gray background (`#f2f5f7`) instead of pure white — quietly premium, less harsh.
- Narrow centered content column with huge side margins to force focus and calm reading rhythm.
- Download/buy CTAs pulled OUT of the nav and into a dedicated mid-page card grid — keeps chrome minimal, presents purchase as a deliberate moment.
- Real product screenshots inside accurate device frames as the only "hero art" — no illustration crutch.
- Self-hosted privacy-first analytics (Matomo) signalling brand values through tooling choice.
- Live social-proof testimonial carousel built from real tweets (tweetgrid) — authentic over polished testimonial blocks.
- Deliberate restraint: no scroll-jacking, no heavy animation libs — confidence to ship a fast, quiet page.

## What to steal for a personal portfolio
- **Let the work be the spectacle.** Frame your real screenshots/products in clean device or browser mockups and keep the surrounding chrome silent. Don't decorate around weak content with motion.
- **Use the system font stack** for a portfolio that loads instantly and looks native everywhere — pair bold heavy headings with muted regular body and build hierarchy purely from weight+size+space.
- **Adopt the off-white cool background** (`#f2f5f7`-ish) for a calmer, more premium feel than `#fff`.
- **Narrow your content column.** A centered ~600–700px measure with big margins reads as confident and editorial.
- **Section template:** small colored glyph + bold heading + one tight paragraph + one text-link CTA. Repeat down the page. It's a reusable, scalable rhythm.
- **Restraint as a flex.** If your projects are strong, a fast static page with subtle hover states out-classes an over-animated GSAP showreel. Reserve motion for one or two moments.
- **Privacy-first tooling** (Matomo/Plausible over GA) is a values signal worth copying for a personal brand.

## Screenshots
- shots/things-cultured-code/01-hero.png
- shots/things-cultured-code/02-mid.png
- shots/things-cultured-code/03-lower.png
- shots/things-cultured-code/04-full.png
