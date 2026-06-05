---
name: Cassidy Williams
url: https://cassidoo.co
slug: cassidy-williams
category: portfolio
industry: dev-portfolio
reachable: true
---

# Cassidy Williams

**One-liner:** A deliberately hand-crafted, monospace, single-column dev-portfolio that turns minimalism and personality (rainbow-colored inline links, "read a random one" button, "this site is open source") into a memorable signature — proof that taste and voice beat WebGL.

## Overview
cassidoo.co is the personal home page of Cassidy Williams (Senior Director of Developer Advocacy at GitHub, prolific newsletter writer / meme-maker). It is intentionally simple and human-made — she publicly states the site is hand-crafted and AI-free because she likes "being the human behind it." The page is essentially a hub: a short first-person bio, a newsletter pitch, a list of recent blog posts, and a tag cloud. No hero video, no parallax, no marketing gloss. The entire personality comes from typography, copy voice, and tiny playful touches. It reads like a well-designed README, which is exactly on-brand for a developer audience.

## Layout & Information Architecture
- Single narrow centered column (~640px content width) on a near-white page — generous left/right margins, classic "readable document" layout.
- Vertical stack, top to bottom: H1 name + H2 subtitle paired with a circular photo → inline text nav → first-person bio paragraphs → newsletter CTA → "most recent posts / read a random one" heading → recent posts list (5 items, each with date + hashtag tags) → subscribe (email / RSS) → "View posts by tag" tag cloud → footer with copyright + "This site is open source" link.
- Density is low and comfortable; whitespace does the structural work instead of borders/cards. Posts are plain list items (title link + date + tags), no thumbnails, no boxes.
- IA is flat — everything lives on one scroll, secondary pages (newsletter, blog) are one click away.

## Navigation
- Inline horizontal text nav under the header: home / newsletter / blog / github / bluesky / linkedin. Current page ("home") is underlined for wayfinding.
- Nav is plain links, not a sticky bar, not a hamburger — it appears again lower in the page (the full screenshot shows the nav repeated mid-page), so navigation is reachable without scrolling all the way back up.
- No mega menu, no overlay, no JS-driven nav. Pure anchor links. Wayfinding handled by the underline-active state and the small link set.

## Typography
- **Single typeface for everything: "iA Writer Mono"** (the iA Writer monospace family), with system `monospace` fallback. Body, headings, nav, links — all mono. This is the defining design decision.
- Scale: large H1 name, smaller muted H2 subtitle ("Software Engineer in Chicago"), comfortable body size, post titles set as prominent links. Hierarchy is created by size + weight + color, not by switching fonts.
- Mono everywhere gives the whole site a "terminal / code editor / typewriter" character that signals "developer" instantly and feels personal rather than corporate.

## Color & Theme
- Light, warm off-white background: `rgb(250, 245, 246)` (a faint pink-cream, not pure white — softer than #fff).
- Default text: near-black `rgb(37, 37, 37)`.
- **Signature move: inline links are individually rainbow-colored.** In the bio paragraph, individual words ("memes", "dreams", "software", "advisor", "investor", etc.) are each a different saturated hue (blue, red, green, orange, purple). It turns a wall of mono text into something playful and scannable — the colored words read like highlighter emphasis and reflect her meme-y personality.
- The active nav underline is green; tag links and post titles also pick up the colored-link treatment.
- No gradients, no dark hero, no glassmorphism. Just warm paper + black text + a confetti of link colors.

## Imagery / Media
- A single circular profile photo (Cassidy holding a mechanical keyboard above her head against a Chicago skyline) anchored next to the name. Playful, on-brand (she builds mechanical keyboards), human.
- No other imagery — no post thumbnails, no illustrations, no video, no WebGL/3D. The restraint is the point; one expressive photo carries all the visual warmth.

## Motion & Interaction
- Very restrained. This is a static, content-first site — no scroll-jacking, no parallax, no page-transition library detected.
- Signature interaction is conceptual, not animated: **"read a random one!"** link that sends you to a random blog post — a delightful, low-effort discoverability hook.
- Hover states on the colored inline links and nav (standard underline/color feedback). The "rainbow link" coloring itself is the main visual interaction motif.
- Fathom analytics is the only third-party script — no animation runtime, confirming a deliberately lightweight, fast, JS-minimal experience.

## Tech / Stack (if known)
- **Astro v5.16.8** (confirmed via `<meta name="generator">` — Astro v5.16.8). Static-site generation, ships minimal/zero JS.
- Font: self-hosted **iA Writer Mono** (4 weights loaded via `document.fonts`).
- **Fathom Analytics** (`cdn.usefathom.com/script.js`) — privacy-friendly, lightweight, only third-party script.
- Newsletter via **Buttondown** (`buttondown.email/cassidoo-blog`), RSS at `/rss.xml`.
- **Open source** — the site repo is public at `github.com/cassidoo/blahg` (linked in the footer as "This site is open source").

## Notable Techniques (steal-worthy)
- All-monospace typography as the entire brand — one font, zero pairing decisions, instant developer signal.
- Per-word rainbow-colored inline links to inject personality and scannability into plain text.
- "Read a random one!" random-post button as a cheap, delightful content-discovery mechanic.
- Warm off-white (#FAF5F6) instead of pure white — softer, less clinical, still high-contrast.
- "This site is open source" footer link — builds trust/credibility and invites the dev audience to peek.
- Astro static + Fathom only = blazing fast, near-zero JS; performance as a feature, not an afterthought.
- Nav repeated mid-page so navigation is always within reach without a sticky bar.

## What to steal for a personal portfolio
- Commit to ONE distinctive typeface (mono works great for engineers) and let copy + color carry personality — you don't need 3D or animation to be memorable.
- Use a single expressive photo that reflects a real hobby/quirk (keyboard, instrument) instead of a stiff corporate headshot.
- Add a small delight: a "surprise me / random post" link, a colored-link gimmick, an easter egg — one tiny interaction makes the site feel human.
- Keep the page a flat, one-scroll hub: bio → CTA → recent work → tags. Don't over-architect a small site.
- Pick a warm off-white over pure white for a softer, premium feel at zero cost.
- Make the site open source and say so — for a dev portfolio it doubles as a credibility/code sample.
- Go static (Astro/11ty) + privacy analytics (Fathom) for speed and a clean Lighthouse story.

## Screenshots
- shots/cassidy-williams/01-hero.png
- shots/cassidy-williams/02-mid.png
- shots/cassidy-williams/03-lower.png
- shots/cassidy-williams/04-full.png
