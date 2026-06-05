---
name: Family
url: https://family.co/
slug: family
category: uiux
industry: fintech
reachable: true
---

# Family

**One-liner:** A crypto wallet marketing site that disarms an intimidating category (self-custody Ethereum) by pairing a clean, oversized editorial type system with hand-drawn, bouncy character illustrations and obsessively crafted product micro-interactions — "fintech that feels friendly" executed at an Awwwards-grade level of polish.

## Overview
Marketing/landing site for Family, a self-custody Ethereum wallet for iOS, built by Avara (the team behind Aave and Lens). The audience is crypto-curious consumers who find existing wallets cold and intimidating. The site's entire strategy is emotional reframing: where most crypto sites lean dark, neon, and "serious finance," Family goes bright, white, playful, and approachable — explicitly built on their three stated product principles of "simplicity, fluidity, and delight." The overall impression is calm confidence: lots of air, huge friendly type, and a cast of cartoon mascots doing the work of making blockchain feel safe.

## Layout & Information Architecture
- Single-column, centered, generously whitespaced long-scroll page. Content max-width is constrained (~1160px) with very wide side gutters that keep everything in a relaxed reading column.
- Clear vertical rhythm: each feature is its own full "act" separated by thin hairline dividers and large vertical padding, so the page reads as a sequence of discrete moments rather than a dense grid.
- IA follows a benefit ladder: Hero → 5 value pillars (Easy / Secure / Fast / Powerful / Fun) → "Send, receive, swap" feature trio → NFT support → Watching Wallets → Wallet Activity → Security → Onboarding → Blog → "Details that matter" → social proof ("Friends of Family") → footer.
- Alternating left-text / right-phone-mockup layout for the deep feature sections keeps a predictable scan pattern while breaking monotony.
- "Friends of Family" is a dense masonry/marquee wall of real tweets — a deliberate density spike after all the whitespace, which makes the social proof feel abundant.

## Navigation
- Sticky top bar, always white/light, minimal: wordmark + bracket logo on the left, two dropdown menus ("Developers", "Resources") plus an "X (Twitter)" link, and a right-aligned auth pair: a soft pill "Log In" and a solid black "Get Started" pill.
- Dropdowns are content-rich (ConnectKit, Family Account, Blog, Changelog, Help & Support, FAQs) with title + one-line descriptions — mega-menu-lite wayfinding.
- The nav stays high-contrast and unobtrusive against the bright page; primary conversion ("Get Started" / "Download on iOS") is repeated rather than relying on the nav alone.

## Typography
- Single typeface: **Inter** (with system fallbacks), used across the entire site — no display/body pairing. Hierarchy comes purely from weight and scale, not from contrasting families.
- Hero h1 is huge (~80px), tight line-height, near-black, with a period at the end of each headline ("Your favorite crypto wallet.", "Send, receive, swap. All in one place.") — declarative, confident, app-store-copy cadence.
- Section headlines repeat this oversized-with-a-full-stop pattern, giving a consistent editorial voice.
- Small eyebrow labels (e.g. green "Simple") sit above headlines to categorize sections.
- Body copy is mid-grey (rgb(71,70,69)) on white — softened black, not pure #000, which reads warmer and less harsh.

## Color & Theme
- Light theme, near-white/off-white background (warm off-white, not pure white — note the subtle cream tint behind cards).
- Restrained, almost monochrome chrome: black text, grey body, black CTA pills — the "interface" is intentionally neutral so the **illustrations carry all the color**.
- Accent palette lives entirely in the artwork and checkmarks: candy-bright primary blues, greens, oranges, reds, and yellows (the mascot characters and confetti elements).
- Green is the one functional accent that escapes the illustrations — used for section eyebrows and feature checkmarks ("Watch Any Wallet ✓"), signaling "go / positive / safe."
- Very subtle tonal cards (faint warm-grey fills) group the value pillars without hard borders.

## Imagery / Media
- Signature asset: **custom hand-drawn character illustrations** — rounded, limbed, smiling blobs (a blue flower-square, a green bean, an orange triangle, a winking cat) surrounded by floating crypto iconography (coins, gas, locks, ETH diamonds, hearts, stars, sparkles, a magnifying glass). This is the brand's whole personality.
- iPhone product mockups (in-app screenshots) shown in realistic device frames for the deep feature sections, with a faux cursor/spotlight element overlaid to draw the eye to a specific in-app detail.
- "9:41" status bar and real-looking token lists (Vitalik's watch-only wallet, BITE/MDT/LRC tokens) make the product feel tangible and live.
- App Store QR code rendered as a stylized halftone block — even the utility asset is art-directed.
- Real embedded tweets for social proof rather than synthetic testimonial cards.

## Motion & Interaction
- Reputation (from reviews/Product Hunt) is built almost entirely on **micro-interactions**: "incredible UI and micro interactions," "delightful interactions with every tap" — the site mirrors the app's delight-first ethos.
- Floating illustration elements use gentle physics/parallax and idle bob animations so the hero feels alive rather than static (the confetti of icons drifts subtly).
- Product sections feature embedded autoplaying/scrubbed demo clips ("Watch the demo" buttons) and a spotlight cursor that highlights an in-app detail.
- Hairline dividers and large padding create scroll-reveal "acts"; content fades/rises into view section by section.
- CTA pills have soft hover state changes; the overall motion language is bouncy and rounded, never sharp — matching the rounded illustration vocabulary.

## Tech / Stack (if known)
- **Next.js** (Pages Router — `/_next/static/.../pages/index`, `_buildManifest`, `_ssgManifest` all present), statically generated.
- **Inter** font.
- **Plausible** analytics (privacy-friendly) + **Cloudflare** insights/CDN (cloudflareinsights beacon).
- **Framer Motion** for animation — confirmed in the live DOM (530+ transform-driven nodes). No GSAP/Lenis/Three.js and zero `<canvas>` detected, so motion is Framer Motion micro-animation + HTML5 video, not a 3D engine.
- Product demos are **9 HTML5 `<video>` loops** (not static screenshots) framed inside the device mockups.
- Hosted/served via Cloudflare.

## Notable Techniques (steal-worthy)
- **One typeface, scale-only hierarchy.** Inter everywhere; all the visual interest comes from size, weight, and whitespace — extremely cheap to execute, very clean result.
- **Neutral UI + colorful mascots.** Keep the chrome monochrome and let custom illustrations own 100% of the color budget. Disarms a "serious" category instantly.
- **Headlines with full stops.** Declarative, app-store-cadence sentences as section titles ("Details that matter.") give a consistent, confident voice.
- **Device mockups with a guided spotlight cursor** pointing at one in-app detail per section — turns a static screenshot into a directed tour.
- **Density contrast for social proof.** After a whitespace-heavy page, the dense tweet wall ("Friends of Family") makes praise feel abundant by sheer visual volume.
- **Off-black + warm off-white** instead of pure #000/#fff for a softer, friendlier read.

## What to steal for a personal portfolio
- Adopt the **single-font, scale-driven hierarchy** — you don't need a fancy pairing to look premium; oversized Inter with a tight line-height and a period at the end of each headline reads as confident and polished.
- Keep your **interface neutral and let one element carry all the personality** — for Family it's mascots; for a portfolio it could be one signature illustration, accent color, or motion signature. Restraint everywhere else makes the one bold thing land.
- Use **alternating text-left / visual-right "acts" separated by hairline dividers and big padding** to pace a long scroll — predictable scan pattern, never monotonous.
- Build social proof as a **density spike** (a wall of real tweets/testimonials) after an airy page — the contrast does the persuading.
- Steal the **warm off-black / off-white** palette to avoid the harshness of pure black-on-white.
- Match motion vocabulary to visual vocabulary: rounded illustrations → bouncy, springy micro-interactions, not sharp linear ones.

## Screenshots
- shots/family/01-hero.png
- shots/family/02-mid.png
- shots/family/03-lower.png
- shots/family/04-full.png
