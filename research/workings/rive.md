---
name: Rive
url: https://rive.app/
slug: rive
category: uiux
industry: design-tools
reachable: true
---

# Rive

**One-liner:** A near-black, motion-first homepage where the product (a real-time interactive animation engine) literally renders itself live in the browser via embedded `.riv` canvases — the site is its own demo reel, so every section proves the pitch instead of describing it.

## Overview
Rive is a real-time interactive design + animation tool (editor + cross-platform runtimes) used by Spotify, Duolingo, Google, Disney, Adobe and Fortune 500 automakers. The homepage targets motion designers, product designers and developers simultaneously. Overall impression: confident, dark, game-engine-flavored. It leans on live Rive animations, a wall of named-customer logos, hard metrics (2B users, 90% smaller files, 4x faster), and a long social-proof feed of testimonials/tweets. The tone is "this is the new Flash, but done right."

## Layout & Information Architecture
Single-column, centered, full-bleed dark canvas. Vertical narrative funnel:
1. Hero — wordmark + H1 + sub + dual CTA, with a horizontally-scrolling strip of use-case cards (automotive dashboards, NYC, game UI, mobile, film/TV, broadcast) bleeding off the bottom edge.
2. Rive Editor — "DESIGN, CODE, AND ANIMATE" with a live State Machine editor view (Animations panel, node graph, character-selection bindings) shown in-browser.
3. Runtimes — "BUILD ONCE, SHIP ANYWHERE" plus a grid of ~16 platform chips (Web, iOS, macOS, Android, Flutter, React, React Native, Framer, Webflow, Wix Studio, C++, Defold, Unity, Unreal).
4. Reach — "PRODUCTS BUILT WITH RIVE REACH OVER 2 BILLION USERS" with a logo wall (Spotify, Pepsi, Google, Samsung, Philips, Duolingo, Sonos, Adobe, Atlassian, SoundCloud, Notion).
5. Social proof — large masonry of testimonial cards mixing exec quotes (Spotify Co-CEO, Intercom, CARS24, Dropbox) with raw tweets (Theo, designers), each card deep-linking to the source.
6. Newsletter signup + a dense fat footer.
Generous vertical whitespace between sections keeps density low despite the content volume; the testimonial grid is the one high-density block.

## Navigation
Sticky top bar on solid black, persistent across scroll. Left: monogram "R" logo. Center-left: dropdown nav (PRODUCTS, COMMUNITY, LEARN) plus flat links (PRICING, DOWNLOADS), all uppercase tracked caps. Right: a single high-contrast amber/orange "GET STARTED" pill — the only colored element in the chrome, so the primary action is unmistakable. Wayfinding is conventional and calm, deliberately understated so the animated content carries the personality.

## Typography
- Display + headings: **Tomorrow** (Google font), a techy geometric sans, weight 500, set in ALL CAPS with wide letter-spacing — gives the hardware/game-engine feel. H1 "THE INTERACTIVE EXPERIENCE ENGINE" rendered ~40px+ centered.
- The "R I V E" wordmark above the H1 uses an extreme letter-spaced thin treatment as a graphic device.
- Body/UI: neutral sans (resolves to system `sans-serif` fallback), small, muted grey for sub-copy.
- Hierarchy is driven by case + tracking + color (white headline vs grey sub) more than by dramatic size jumps.

## Color & Theme
Pure black background (`rgb(0,0,0)`), white and muted-grey text. Monochrome by design — the single brand accent is a warm amber/bronze-orange used only on the primary CTA pill and its subtle glow. Restraint is the point: a near-zero-color UI lets the colorful live animations (pink/magenta game UI, automotive dashboards) be the only saturated elements on the page. High contrast, dark-only (no theme toggle).

## Imagery / Media
This is the differentiator. No stock photography. The page is built almost entirely from **live, running Rive animations on `<canvas>`** (2 canvases detected) plus product-screenshot cards of the actual Rive editor (node graph, timeline, state machine). Use-case cards show real domains — car instrument clusters, game character-select screens, mobile app UI. Customer logos rendered as interactive/clickable SVG marks. The art direction is "show the tool doing the thing the tool does."

## Motion & Interaction
- Live Rive runtime animations playing inline (hero + section visuals are interactive `.riv` files, not video/GIF) — the core flex.
- Horizontally auto-scrolling / marquee strip of use-case cards in the hero, bleeding off both edges.
- Scrolling "2P KAIDEN" character-select banner inside the editor demo.
- Hover states on the GET STARTED pill (glow), testimonial cards, and platform chips (cursor:pointer, onclick handlers throughout).
- Clickable logo wall and testimonial cards that deep-link to source articles/tweets.
- Smooth-scroll feel typical of Framer sites. Note: under bot/headless capture some `.riv` media reported "Unable to play media" — confirming the visuals are real runtime canvases needing a full browser to render.

## Tech / Stack (if known)
- **Framer** — confirmed via `<meta name="generator" content="Framer ...">`. The marketing site is a no-code Framer build (NOT Next.js, despite Rive's React/Next runtime libraries).
- **Rive runtime** — animations are Rive's own `.riv` files rendered to `<canvas>` (dogfooding their product); Framer has native Rive support.
- Google Font **Tomorrow** for display type.
- editor.rive.app hosts the actual app, separate from the Framer marketing site.

## Notable Techniques (steal-worthy)
- Dogfooding as proof: the product renders itself live on the homepage, so the hero IS the demo — no separate "watch the video" needed.
- Monochrome canvas + single accent color so colorful product visuals are the only saturation on screen (forces the eye onto the demos).
- ALL-CAPS wide-tracked techy display font (Tomorrow) to telegraph "engine / hardware" without illustration.
- Hard-number social proof ("2 billion users", "90% smaller", "4x faster") paired with named-exec quotes for credibility stacking.
- Testimonial wall mixing polished exec quotes with raw screenshot-feel tweets — blends enterprise trust with grassroots developer love, every card deep-links to the real source.
- Hero use-case cards bleeding off-screen as a horizontal marquee — signals "there's much more" and invites horizontal exploration.

## What to steal for a personal portfolio
- **Make the hero your demo.** If you build interactive things, embed one running live in the hero instead of a screenshot. The medium proves the skill.
- **Go monochrome + one accent.** Pure black/white with a single warm accent on the primary CTA reads premium and keeps focus on your work's color.
- **One unmistakable primary action.** Exactly one colored button in the nav (e.g. "Contact me"); everything else muted.
- **Caps + wide tracking on a characterful sans** (Tomorrow-style) gives a strong identity with zero graphics budget.
- **Quantify outcomes.** Swap vague "I build great UIs" for metric-backed claims the way Rive uses "90% smaller / 4x faster."
- **Source-linked testimonials.** Real quotes that link out to the original tweet/article are far more trustworthy than anonymous praise.
- **Edge-bleeding horizontal card strip** as a low-effort "explore more" pattern for a projects row.

## Screenshots
- shots/rive/01-hero.png
- shots/rive/02-mid.png
- shots/rive/03-lower.png
- shots/rive/04-full.png
