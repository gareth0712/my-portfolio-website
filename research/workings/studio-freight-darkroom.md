---
name: Studio Freight / Darkroom
url: https://darkroom.engineering/
slug: studio-freight-darkroom
category: uiux
industry: agency
reachable: true
---

# Studio Freight / Darkroom

**One-liner:** A creative-dev studio that turns its own homepage into a proof-of-craft — a terminal/CRT-flavored, theme-switchable site driven by the exact open-source scroll/motion libraries (Lenis, Hamo, Tempus) they ship to the rest of the industry.

## Overview
darkroom.engineering (formerly Studio Freight) is a global creative development studio specializing in high-end, motion-heavy web experiences. They are the authors of Lenis (the de-facto smooth-scroll library used across award-winning sites), and their site is effectively a portfolio + open-source showcase + recruiting funnel in one. The overall impression is uncompromising and self-referential: instead of a polished "agency brochure," they present an engineer's terminal — ASCII art, monospace copy, a live "Activity Log" that reads like a changelog, and instant theme toggles. It signals "we are engineers first, and we ship our own craft." The default state I captured loaded in their RED theme: pure black (#000) background with blood-red (rgb(227,6,19)) text and UI.

## Layout & Information Architecture
Single-page scroll narrative built on a strict, visible grid (column rules are literally drawn as thin red lines, reinforcing the "blueprint/terminal" feel). The page flows: hero statement -> dictionary-style definition of "darkroom" -> selected work (Looped, Ibicash, Prosupps as full-bleed media bands) -> "What clients say" -> "Tools we build and use" (Satus / Lenis / Hamo / Tempus tabbed showcase) -> a manifesto statement band -> a dense reference block (Services / Clients / Technologies / Awards-Features laid out as multi-column lists) -> a long "Activity Log" (reverse-chronological dated entries, changelog format) -> footer with theme switchers, social, and playful "important video / a good movie" links. Whitespace is generous and intentional around the giant headlines; density spikes deliberately in the list/log sections to contrast. The fixed top and bottom bars frame every viewport like a hardware terminal chrome.

## Navigation
Fixed top bar with brand wordmark (DARKROOM.ENGINEERING) left-of-center and a compact 4-item nav (WORK / ABOUT / READ / CONTACT) right. Persistent bottom bar carries a "BECOME AN OPEN SOURCE SPONSOR" CTA and corner ASCII/control glyphs. Both bars are flanked by animated ASCII-art "circuit" decorations in the corners. Wayfinding is minimal but effective because the page is short and section headings (WHAT CLIENTS SAY, SERVICES, CLIENTS, TECHNOLOGIES, ACTIVITY LOG) are loud and scannable. No hamburger on desktop; the footer duplicates the nav (HOME/WORK/READ/ABOUT/CONTACT) plus a full link tree.

## Typography
Two-typeface system, high contrast in role:
- Display/headings: "therma" — a heavy, condensed, slightly distressed/blocky grotesque used at massive scale (H1 measured at ~175px). It has a stenciled, industrial character that carries the brand. Set in ALL CAPS for the big statements ("WHERE THINGS GET DEVELOPED", "WE BRING BRANDS AND INTERFACES TO LIFE...").
- Body/UI: "mono" (a custom monospace, falling back to ui-monospace/SFMono/Consolas). Everything else — nav, captions, the dictionary definition, the activity log — is monospaced, reinforcing the terminal metaphor.
Hierarchy is driven almost entirely by scale and caps: enormous display headline vs. small monospace caption. The pairing (brutal display + technical mono) is the signature move.

## Color & Theme
The standout feature is a 4-way theme switcher exposed directly in the footer: dark, light, red, and "simple." Captured default was RED: background #000000, foreground rgb(227,6,19) (a saturated alarm/safelight red — a literal nod to darkroom safelights). It is near-monochromatic: red-on-black with no secondary accent, which makes the few media bands (the green mossy Ibicash video, dark hardware renders) pop hard against the red UI. Contrast is intense and intentional; legibility of small monospace red-on-black is borderline by WCAG standards but on-brand. The theme system means the same layout can present as classic dark, clean light, alarming red, or stripped "simple" — each a different personality from one codebase.

## Imagery / Media
Mostly typographic and generative rather than photographic. Work items use full-bleed video/atmospheric footage (e.g. a foggy mossy landscape for Ibicash, dark product/hardware renders). Heavy use of ASCII art as decorative system glyphs in the corners and bars. Tool showcases use UI/3D render imagery. Art direction is cohesive: everything is filtered through the red/black terminal lens so even external client media reads as part of the system.

## Motion & Interaction
This is where the site earns its reputation (won't show in static shots):
- Smooth scroll via their own Lenis library — inertial, eased scrolling is the baseline feel of the whole page.
- Scroll-triggered reveals and pinned/parallax media bands for the work section.
- The giant therma headlines animate in / are scroll-reactive.
- Theme switching is an instant, animated full-site recolor (dark/light/red/simple).
- Tabbed tool showcase (SATUS/LENIS/HAMO/TEMPUS buttons swap content).
- ASCII corner decorations animate (terminal/glitch flicker character).
- Custom-cursor and hover microinteractions consistent with their other work.
Motion is timed/sequenced via GSAP wired into their own raf scheduler (Tempus) and frame helpers (Hamo).

## Tech / Stack (if known)
- Framework: Next.js (App Router) — built on their open-source "Satus" starter (Next 16 / React 19 / TypeScript strict / Zod). Hosted on Vercel.
- Motion: Lenis (smooth scroll), Hamo (hooks/utils), Tempus (requestAnimationFrame scheduler), GSAP for timelines, React Three Fiber (r3f) + hand-rolled WebGL for 3D, occasionally Theatre.js.
- Content/integrations: Contentful, HubSpot, GraphQL; Satus also pluggable to Sanity/Shopify.
- The "Activity Log" confirms recent migration of darkroom.engineering and the Lenis site to the new hardened Satus (Zod validation, typed env, 432 tests).

## Notable Techniques (steal-worthy)
- Site-as-product: the homepage runs the studio's own OSS libraries, so the site IS the demo reel.
- Live "Activity Log" / changelog as a homepage section — dated, reverse-chron entries make the studio feel alive and constantly shipping (great for trust + recency).
- Multi-theme switcher (dark/light/red/simple) surfaced in-UI as a playful brand flex and a11y/preference gesture.
- Terminal/CRT chrome: fixed top+bottom bars + animated ASCII corners frame every viewport as a coherent device.
- Brutal display + monospace pairing — instantly distinctive, low asset cost, all type.
- Visible grid lines used as decoration, turning layout structure into aesthetic.
- Dictionary-definition hero ("[ DARKROOM ], NOUN — 1. a lightproof room... 2. a studio engineering creativity into reality") — clever brand framing.
- Playful footer link list ("IMPORTANT VIDEO / A GOOD MOVIE / AMAZING GAME") injects personality.

## What to steal for a personal portfolio
- Build the portfolio on a smooth-scroll baseline (Lenis is free and theirs) — it instantly elevates perceived polish.
- Add a dated "Activity Log / Now" section so the site demonstrates momentum without needing big case studies; cheap to maintain, high trust signal.
- Pick a strict two-font system: one heavy display face for huge headlines + a monospace for everything else. Distinctive and zero-cost.
- Offer a theme toggle (at minimum dark/light) and treat it as a personality feature, not a checkbox.
- Use a single bold accent on near-black (their red/black) instead of a multi-color palette — easier to keep coherent and far more memorable.
- Frame the viewport with persistent top/bottom bars to create a "product" feel rather than a scrolling document.
- Let the build itself be the flex: if you wrote the libs/tools, make the site obviously run on them.

## Screenshots
- shots/studio-freight-darkroom/01-hero.png
- shots/studio-freight-darkroom/02-mid.png
- shots/studio-freight-darkroom/03-lower.png
- shots/studio-freight-darkroom/04-full.png
