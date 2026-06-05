---
name: Henry Heffernan
url: https://henryheffernan.com
slug: henry-heffernan
category: portfolio
industry: awwwards
reachable: true
---

# Henry Heffernan

**One-liner:** A fully interactive 3D recreation of a 90s desk-and-CRT workstation where the entire portfolio lives *inside* a working retro OS rendered on the monitor — one of the most-copied creative-dev portfolios on the web.

## Overview
This is not a scrolling page — it's a real-time 3D experience built in Three.js / React Three Fiber. You land on a deliberately lo-fi monospace "boot" gate ("Henry Heffernan Portfolio Showcase 2022 / Click start to begin"), then an isometric 3D desk fades in with a "Click anywhere to begin" prompt. Clicking flies the camera into the CRT monitor, which boots a fully simulated retro desktop OS ("HeffernanOS", served from os.henryheffernan.com inside an iframe/texture). About / Experience / Projects / Contact are framed as OS apps/windows rather than nav links. Audience: recruiters and the creative-dev community wanting proof of WebGL/interaction chops. Impression: extremely high craft, nostalgic, game-like, memorable — it sells the engineer by *being* an engineering feat, not by describing one.

## Layout & Information Architecture
Three distinct stages rather than a page grid:
1. **Boot gate** — centered monospace text box on pure black, single START button. Sets the 90s tone and gates heavy asset load behind an intentional user gesture (good for autoplay/perf).
2. **Establishing 3D shot** — isometric desk floating on a flat light-grey void, lots of negative space, object centered. Minimal HUD: "Click anywhere to begin" caption.
3. **Workstation close-up** — camera docked at the CRT; props (keyboard, mouse, speakers, coffee mug, plant, papers) frame the screen. A persistent top-left HUD overlays name / title / live clock. All real content (About/Experience/Projects) is nested inside the on-screen OS, so IA is window-based (a desktop metaphor), not document-based.

## Navigation
No conventional nav bar. Wayfinding is diegetic: you navigate by interacting with 3D objects and by opening "apps" on the simulated desktop. The accessibility tree exposes fallback links (ABOUT / EXPERIENCE / PROJECTS / CONTACT → os.henryheffernan.com/{section}) as headings, so there *is* a real semantic skeleton behind the canvas for SEO/a11y/no-JS. A small monospace HUD (top-left) acts as persistent identity + a live system clock, reinforcing the OS fiction.

## Typography
Two deliberate registers. **Chrome/HUD/boot:** pixel/monospace bitmap face (90s terminal aesthetic) used for the boot screen, the "click to begin" caption, and the corner HUD. **Document body** computes to "Times New Roman" — the literal browser default serif, used as an in-world joke (a 90s OS would render Times). Hierarchy is driven by the OS-window chrome, not a type scale. The lo-fi type is a feature, not a limitation — it signals era and keeps the focus on interaction.

## Color & Theme
Boot stage: pure black (#000) with white/cyan/magenta terminal text (faint RGB chromatic-fringe vibe). 3D stage: near-white flat studio-grey background, desaturated realistic material colors (grey plastics, beige keyboard, dark wood desk, green plant as the one pop of saturation). The palette is intentionally muted/realistic so the rendered OUI on the CRT screen reads clearly. Theme is switchable inside the OS (the experience supports light/dark + lighting changes on the lamp/monitor).

## Imagery / Media
100% real-time 3D — no photography. Custom low-poly-but-detailed models (modeled in Blender): CRT monitor, mechanical keyboard, mouse, desk, speakers, mug, plant, paper stack. The monitor screen is a live render target showing an actual interactive HTML/React OS, not a baked texture. Baked lighting/shadows give a cozy "archviz" feel. Subtle ambient detail (steam off the mug in the full app, screen glow) sells realism.

## Motion & Interaction
- **Cinematic camera choreography:** click-to-begin triggers a scripted camera dolly from the establishing isometric shot into a docked CRT framing — the signature move everyone copies.
- **Free-orbit camera** with damped controls when not docked; the camera intro/transition is the centerpiece interaction.
- **Diegetic micro-interactions:** clickable props change lighting/theme, play music, launch a playable in-OS game, open project windows — the room is a toybox.
- **Live HUD clock** updates in real time, reinforcing "this is a running system."
- **Intentional load-gating** (START gesture) covers the heavy WebGL + asset boot.
- Render is per-frame WebGL (no scroll-jacking) — interaction is spatial/3D, not scroll-driven.

## Tech / Stack (if known)
- **Three.js r137** (confirmed from canvas `data-engine="three.js r137"`).
- **React + React Three Fiber** (R3F) for the scene graph (per author + community).
- **Blender** for all 3D assets.
- Single bundled JS (`bundle.cf64568055686c74.js`) — webpack-style content-hashed bundle, no framework CDN.
- **Sub-app architecture:** the on-screen OS is a separate React app served from `os.henryheffernan.com`, embedded via iframe and rendered onto the monitor mesh (clean separation of "3D shell" vs "desktop UI").
- Hosted/deployed via AWS (per author). Google Analytics (gtag G-4FJBF6WF60).
- Title: "Henry Heffernan - Portfolio 2022". Awwwards Honorable Mention; featured in Three.js Journey course selection.

## Notable Techniques (steal-worthy)
- **Render a real HTML/React UI onto a 3D screen mesh** instead of faking a texture — lets the "monitor" be genuinely interactive.
- **Split the experience into a 3D shell app + an embedded UI app** (separate origin), so the desktop OS is independently buildable/testable.
- **Diegetic navigation:** turn About/Projects/Contact into in-world objects/windows; keep semantic `<a>`/heading fallbacks in the DOM for a11y + SEO.
- **Intentional boot gate** before heavy assets — converts a forced load wait into on-brand theater and a required user gesture (audio/WebGL autoplay friendly).
- **Scripted camera transition** from establishing shot to focused framing as the emotional hook.
- **Period-accurate type as content:** monospace boot + literal Times New Roman body to *be* a 90s machine.

## What to steal for a personal portfolio
- You don't need a 3D room — steal the **boot-gate pattern**: a tiny themed intro that hides load time, sets tone, and requires one click before the heavy/animated payload runs.
- Steal **diegetic IA**: frame sections as "things" (windows, rooms, files) rather than a generic nav bar, but always keep a real semantic DOM skeleton underneath for a11y/SEO (Henry exposes hidden `<a>`/headings — copy that discipline).
- Steal the **one scripted hero transition**: a single, well-choreographed camera/scroll move at first interaction does more for "wow" than dozens of small effects.
- Steal **restraint in palette**: muted, realistic surroundings make your actual content (the lit screen) pop — don't let chrome compete with content.
- Steal the **shell/content split**: build your interactive content as its own app and embed it, so the immersive wrapper and the real info live independently.

## Screenshots
- shots/henry-heffernan/01-hero.png  (monospace boot gate — "Click start to begin")
- shots/henry-heffernan/02-mid.png   (isometric 3D desk establishing shot — "Click anywhere to begin")
- shots/henry-heffernan/03-lower.png (camera docked at CRT close-up + top-left HUD/clock)
- shots/henry-heffernan/04-full.png  (full-viewport workstation render)
