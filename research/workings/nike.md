---
name: Nike
url: https://www.nike.com/
slug: nike
category: uiux
industry: ecommerce
reachable: true
---

# Nike

**One-liner:** A masterclass in confident editorial commerce — full-bleed autoplay video heroes, monochrome chrome that gets out of the way, and one screaming accent color that turns the whole storefront into a shoppable billboard.

## Overview
Nike.com is the flagship DTC storefront for the world's largest sportswear brand. The homepage is not a catalog — it is a rotating campaign poster. The live session geo-redirected from `nike.com` to the localized JP build (`nike.com/jp/`), so copy renders in Japanese, but the design system, IA, and motion are identical to the global site. The page leads with a muted autoplay video hero for a current soccer/national-team campaign ("本能で、化けろ。 / Rip the Script"), then a vertical stack of full-bleed campaign tiles (national-team kits, Mercurial, LEGO collab, NikeSKIMS, gear & accessories), an editorial signed-polaroid athlete collage, and a clean four-column footer. Audience is broad consumer-sport; tone is premium-athletic. Overall impression: brand-led commerce where image does ~90% of the work and UI chrome stays neutral.

## Layout & Information Architecture
- **Full-bleed vertical campaign stack.** Each section is one edge-to-edge image or video filling the viewport width, with a small text block (`<h3>` headline + a "商品を見る / 今すぐ見る" Shop/Watch CTA) overlaid. No card chrome, no gutters on media — the photography IS the layout.
- **Hero = muted autoplay video** (`region "ビデオプレイヤー"` / `region "Video Player"` in the snapshot) with exposed mute + volume-slider controls, a headline, and a "今すぐ見る" (Watch now) button.
- **Editorial collage grid mid-page:** signed "polaroid" athlete cards (asymmetric 2-up/3-up rows) interleaved with full-bleed motion tiles — a scrapbook/zine texture rather than a uniform product grid.
- **Footer**: classic four-column sitemap (ご利用ガイド / 各種割引 / ヘルプ / 企業情報) on white, legal row, and a country/store selector button (`選択済みの店舗: 日本`).
- Whitespace is generous between editorial tiles (calm despite dense media); footer flips to high-whitespace, low-density link columns.

## Navigation
- **Sticky global nav, three tiers** (from the snapshot's named `navigation` regions): (1) thin brand nav strip (ジョーダン), (2) utility nav (店舗検索 store finder, ヘルプ help w/ hover menu, ここから始めよう join, ログイン sign in), (3) main category nav (メンズ / ウィメンズ / キッズ / ジョーダン / NikeSKIMS / スポーツ).
- **Scroll-adaptive theme:** transparent-dark over the hero, inverts to solid white-bg / black-text once scrolled (visible in the lower screenshot) for contrast safety over varied media.
- **Hover mega-menus** — each category `menuitem` carries `expanded=false` and opens a full-width multi-column flyout.
- **Inline expanding search** (a 検索 button toggles a `searchbox` inline) rather than routing to a separate search page — keeps the user in context.
- Persistent favorites (heart) + cart icon with live count (`カート内の商品: 0`).
- "メインコンテンツに移動" (Skip to main content) link present — accessibility-conscious.

## Typography
- **Rendered body stack (JP locale):** `"Noto Sans JP", Helvetica, Arial, "Hiragino Sans", "Hiragino Kaku Gothic Pro", ... sans-serif` (confirmed via computed style). The global site uses Helvetica Now / Trade Gothic-lineage grotesques (Nike's house type); the JP build swaps in Noto Sans JP while keeping the same weights and scale.
- **Poster-scale display:** measured heading at **76px** (confirmed live) — true editorial-billboard ratio of type to screen.
- **Hierarchy by weight + size, not color:** eyebrow (small) -> bold campaign `<h3>` title -> single-line CTA. Extreme jump between display and UI text.
- Copy is slogan-length, never paragraph ("本能で、化けろ。" / "ブチ抜け。"). Punchy, condensed, confident.
- Distinctive campaign headlines are often **baked into the media art**, keeping the live DOM type clean and fast.

## Color & Theme
- **Monochrome base:** near-black (#111) and white dominate the chrome; UI is essentially grayscale.
- **Imagery carries all the color** — campaign photography/video supplies saturation (the soccer-kit blues, athlete shots); the UI stays neutral so products pop.
- **Single hot accent** (Nike's signature volt/red) reserved for high-energy CTAs and campaign art.
- **Per-section dark/light inversion:** dark hero -> lighter editorial tiles -> white footer creates a high-contrast rhythm down the scroll at zero animation cost.
- High contrast throughout; black-on-white footer is WCAG-friendly.

## Imagery / Media
- **Autoplay muted hero video** as the centerpiece, with user-facing mute/unmute + volume controls exposed (unusual and respectful of autoplay-mute policy while granting agency).
- **Editorial sport photography:** dynamic athlete action, dramatic lighting, shallow depth of field.
- **Art-directed collage:** signed athlete "polaroid" cards mixed with motion tiles — gives a hand-made zine feel rather than sterile e-comm.
- Media is full-bleed, treated as the page background, not a contained element.
- Akamai CDN for delivery (per public reverse-engineering writeups).
- Near-zero decorative illustration — the brand trusts photography/video to carry emotion.

## Motion & Interaction
- **Autoplay looping hero video** with exposed mute + volume slider — the primary motion anchor.
- **Scroll-reactive sticky nav** that fades/inverts background and text color based on scroll position.
- **Hover-expand mega-menus** with animated panel reveals.
- **Inline search expansion** microinteraction (icon -> field).
- **Tile hover states** (scale/overlay) on the editorial grid; favorite-heart toggles; live cart count.
- Motion is deliberately restrained — video does the heavy lifting; no Lenis/Three.js/WebGL evidence and no scroll-jacking. Nike prioritizes load speed and conversion over flashy physics (a documented critique is that PLP/filter interactions can feel "flashy but awkward").

## Tech / Stack (if known)
- **Framework:** Next.js — confirmed live (`#__next` root + `#__NEXT_DATA__` script both present).
- **Styling:** Emotion CSS-in-JS — confirmed live (`style[data-emotion]` present) — plus in-house **@nike/nike-design-system-components**.
- **Data:** GraphQL (`@nike/graphql-fetch`, `@nike/fetch-client`) per public reverse-engineering reports; Redux for client state.
- **Infra:** Akamai CDN; New Relic observability; Optimizely / Adobe Target experimentation & personalization; heavy 3rd-party analytics (Clarity, TikTok, Pinterest, Google gtag).
- **i18n:** per-locale JSON + geo-redirect to localized builds (`/jp/`); identical layout across locales, fonts swapped per language (Noto Sans JP here).

## Notable Techniques (steal-worthy)
- Full-viewport autoplay video hero with **exposed mute/volume controls** (autoplay-mute compliant + user agency).
- **Scroll-adaptive sticky nav** that inverts color/background per scroll position for contrast safety over varied media.
- **Monochrome UI + one hot accent** — let imagery supply all color, keep chrome grayscale; hierarchy by weight/size, never decorative color.
- **Photography-as-layout:** full-bleed edge-to-edge tiles, no card chrome; the image is the section, text is a tiny anchored block.
- **Editorial collage grid** (signed polaroids + motion tiles) breaking the standard uniform product grid.
- **Poster-scale typography** (76px display) paired with slogan-length copy; bespoke campaign headlines baked into media to keep DOM type clean.
- **Per-section dark/light inversion** for scroll rhythm at zero animation cost.

## What to steal for a personal portfolio
- **Hero = your billboard.** Lead with one full-bleed media block + one huge headline + one CTA. Resist clutter.
- **Grayscale chrome, colorful content.** Make nav/footer monochrome and let project thumbnails/video carry the energy and color.
- **Scroll-adaptive nav:** transparent over your hero, solid + inverted once scrolled — cheap to build, reads premium.
- **One accent color, CTA-only** (Nike's red discipline).
- **Oversized type** for section headers (60-80px) with short, confident copy — instant editorial feel.
- **Bake a distinctive headline into a designed asset** (image/SVG/Lottie) while keeping body type a clean system stack for performance.
- **Muted autoplay loop** beats a static hero image for perceived production value — just expose a mute toggle.
- **Asymmetric collage grid** for a projects section instead of identical cards — feels art-directed, not templated.
- Keep motion restrained and load fast — Nike proves you don't need WebGL to feel premium; art direction + contrast do the work.

## Screenshots
- shots/nike/01-hero.png  (sticky nav over dark soccer-campaign autoplay video hero)
- shots/nike/02-mid.png   (signed-polaroid athlete collage + full-bleed motion tiles)
- shots/nike/03-lower.png (scroll-inverted white nav + four-column footer sitemap)
- shots/nike/04-full.png  (full-page capture)
