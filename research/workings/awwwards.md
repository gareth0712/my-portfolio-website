---
name: Awwwards
url: https://www.awwwards.com/
slug: awwwards
category: uiux
industry: awwwards
reachable: true
---

# Awwwards

**One-liner:** The web-design awards authority practices what it preaches — a restrained, near-monochrome editorial system where oversized typography, a floating pill nav, and GSAP-driven micro-motion let the curated work (not the chrome) be the spectacle.

## Overview
Awwwards is the industry's best-known awards + inspiration platform: it crowns Site of the Day (SOTD), Developer/Honorable awards, runs an Academy (courses), Collections, a studio Directory, Jobs, a Market (templates), and a blog. The homepage is a long-scroll editorial index that funnels through every product line in sequence (SOTD hero → Latest/Nominees → Winners → Academy → Collections → Directory → Blog → Market → Submit/Pro CTAs). The overall impression is deliberately quiet and gallery-like: light grey canvas, black text, almost no decorative color of its own, so the embedded thumbnails of award-winning sites provide all the visual energy. It is a confident "the work is the hero" stance — appropriate for a curator that must not out-shout the entries it showcases.

## Layout & Information Architecture
- Single long-scroll homepage acting as a sectioned directory. Each product area is its own horizontal-rhythm block with a large section label (`h2`: Latest, Winners, Academy, Collections, Directory, Blog, Market) and a descriptive `h3` subhead ("Recent Sites of the Day.", "Learn from the best instructors.").
- Strong, generous whitespace; content is centered with a wide max-width. The hero is almost entirely negative space around one enormous SOTD wordmark.
- Card grids dominate (site thumbnails, course cards, collection cards, product cards), each block ending in a "View X" link that routes to the dedicated index (Nominees, Sites of the Day, Academy, Collections, Directory, Blog, Market).
- The Directory mixes card highlights with a real data table (Name / Profile / Awards / Categories / View) — a density shift that signals "this is a searchable database," not just a showcase.
- Bottom of page stacks conversion CTAs (Submit Website, Be Pro) before a deep mega-footer with full sitemap, legal, and 8 social links.

## Navigation
- Top bar is minimal: hamburger + "w." wordmark logo on the left, a wide inline search field ("Search by Inspiration"), then Log in / Sign Up / Be Pro / Submit Website on the right. The two right-most CTAs are filled black and outlined black pills — high-contrast against the grey bar.
- A secondary floating pill nav sits over the first content band (w. logo + Nominees / Courses / Collections / Directory / Market as in-page anchor jumps to `#nominees`, `#courses`, etc.) — a dark rounded capsule with individually pilled items, classic Awwwards-era styling.
- Hamburger opens the full menu (Websites, Collections, Elements, Academy, Jobs, Market, Directory, Conferences, FAQs, About). Wayfinding relies on the section-anchor pill + large section headers rather than a persistent sticky mega-menu.

## Typography
- Single typeface family: **Inter Tight** (a condensed-tracking Inter variant) across body and headings — confirmed via computed styles on `body`, `h2`, `h3`.
- Massive display scale: SOTD hero wordmark and section `h3` headings compute to ~110px, set in heavy weight, tight tracking, uppercase for the site name. This oversized-type-as-graphic approach is the page's main expressive device.
- Clear hierarchy through size + weight contrast rather than color: tiny grey metadata labels ("Site of the Day", "Score 7.64 of 10", date chip) sit under a huge black title. Body/UI text is small and neutral.
- One-typeface discipline keeps the system cheap to render and visually calm so thumbnails carry the color.

## Color & Theme
- Light theme. Body background `rgb(248,248,248)` (#f8f8f8 off-white), text `rgb(34,34,34)` (#222 near-black). Effectively a two-tone monochrome shell.
- Accent color is reserved for the filled black CTA pills (Be Pro / Sign Up) and small UI chips — black-on-grey is the entire brand palette. No gradients, no brand hue.
- All saturated color comes from the embedded award-site thumbnails (e.g. the prismatic rainbow streak on the SOTD card), making the curated work pop against the neutral frame. This is an intentional contrast strategy: neutral host, vivid guests.

## Imagery / Media
- Primarily large screenshot/thumbnail imagery of the award-winning sites, plus video reels for hovered SOTD entries (Awwwards autoplays site preview clips on hover historically).
- Lottie animations are used for accent badges ("NOMINEES Lottie animation", "W.CREATORS Lottie animation" appear as labeled animated marks in the snapshot).
- No in-house illustration or 3D — the platform stays art-direction-neutral so it doesn't compete with submissions. OFF+BRAND. SOTD partner branding appears as a small lockup under the hero.

## Motion & Interaction
- **GSAP 3.13.0** is loaded (confirmed via `window.gsapVersions`), the de-facto Awwwards animation engine — used for scroll-reveal of section blocks, hover scaling on cards, and the floating pill nav.
- Hover states on site cards reveal autoplaying video previews and metadata (studio name, award badge) — the signature "scrub the gallery" interaction.
- Smooth scroll feel and staggered entrance animations as each product section enters viewport.
- Cookie consent is a dark rounded toast (bottom-right "GOT IT"), non-blocking.
- Microinteractions: pill buttons, animated Lottie badges, the date chip and score metadata under the hero title. The motion is restrained and performance-conscious — consistent with Awwwards' own published stance that animation should "elevate rather than distract."

## Tech / Stack (if known)
- **Animation:** GSAP 3.13.0 (confirmed).
- **Type:** Inter Tight (confirmed via computed font-family).
- **Build:** custom Webpack-style chunked bundles — hashed entry files like `runtime.bf71a965.js`, `home_homepage.586dac19.js`, and numeric split chunks (`1500.*`, `2164.*`, `9653.*`). No Next.js/Nuxt/React/Vue runtime detected in script names; reads as a bespoke MPA with per-page entry bundles (Awwwards historically runs on Symfony/PHP server-side).
- **Animated marks:** Lottie (labeled in DOM).
- **Third-party:** Google Tag Manager, GA4, Meta Pixel (fbevents), LinkedIn Insight, reCAPTCHA, YouTube iframe API.

## Notable Techniques (steal-worthy)
- **Neutral host / vivid guest** — a near-monochrome #f8f8f8 + #222 shell that deliberately surrenders all color to the content thumbnails, so the showcase always looks loud while the frame stays calm.
- **Oversized single-typeface display** — one family (Inter Tight) at ~110px for hero + section heads, hierarchy built from size/weight alone, no color needed.
- **Floating pill anchor-nav** — a dark capsule with individually pilled in-page jump links layered over the first content band, separate from the utility top bar.
- **Metadata-chip storytelling under a giant title** — tiny "Site of the Day · Jun 4 · Score 7.64/10" line beneath a huge wordmark gives instant credibility/context with minimal ink.
- **Hover-to-preview video cards** — gallery thumbnails that autoplay site clips on hover, turning a static grid into a motion reel.
- **Per-section "View X" funnel** — every block previews a few items then hands off to its full index, keeping the homepage scannable while routing deep.
- **GSAP scroll-reveal with restraint** — staggered entrance, performance-minded, motion that never blocks reading.

## What to steal for a personal portfolio
- Adopt the **neutral shell, vivid work** principle: keep your site chrome monochrome (one off-white bg, one near-black text) and let project screenshots/case-study imagery supply all the color. Reads as confident and timeless.
- Use **one typeface at an extreme scale** for your name/section headers (Inter Tight or similar) and build hierarchy from weight + size, not extra colors — cheaper, calmer, more striking.
- Add a **small metadata line under big headings** (role · year · award/result) to inject credibility without clutter.
- Implement **hover-preview cards** for projects (autoplay a short loop on hover) to make a simple grid feel alive — GSAP or even CSS handles the scale/fade.
- Keep motion **GSAP scroll-reveal but subtle**: staggered fade-up on section entry, no gratuitous parallax. Matches the "elevate, don't distract" ethos.
- A **floating pill section-nav** is an easy, on-brand wayfinding pattern for a single-scroll portfolio.

## Screenshots
- shots/awwwards/01-hero.png
- shots/awwwards/02-mid.png
- shots/awwwards/03-lower.png
- shots/awwwards/04-full.png
