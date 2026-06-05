---
name: Bruno Simon
url: https://bruno-simon.com/
slug: bruno-simon
category: uiux
industry: dev-portfolio
reachable: true
---

# Bruno Simon

**One-liner:** The single most-referenced 3D web portfolio in the industry — a fully drivable open-world WebGL/WebGPU game that turns a dev résumé into an explorable physics playground, and it still raises the bar in its 2025 rebuild.

## Overview
Bruno Simon is a creative developer (and creator of the Three.js Journey course). His portfolio is not a page you scroll — it is a real-time 3D game you drive a car through. The original 2019 version (Three.js + Cannon.js) won Awwwards Site of the Month and pulled 400k+ visitors. The site is now a ground-up **2025 rebuild** (repo: `github.com/brunosimon/folio-2025`) running on WebGPU, with a much larger world, an achievement system, weather/day cycles, and a built-in map. The whole premise: "Please drive around to learn more about me and discover the many secrets of this world. And don't break anything!" It is for recruiters, peers, and the creative-dev community — and functions equally as a portfolio, a tech demo, and a flex.

## Layout & Information Architecture
There is essentially **no DOM layout** — the entire experience is a single full-viewport `<canvas>`. The accessibility snapshot returns just two buttons; everything visual is rendered in WebGL. IA is spatial, not vertical: the "sections" are physical districts in a 3D world (Landing area → Projects area (8 projects) → Lab area (13 projects) → plus race tracks, a bowling alley, an altar, etc. — 13 explorable areas total). Information is discovered by driving up to objects and "interacting" rather than scrolling. A minimal HUD overlay floats over the canvas: top-left settings/menu/map triggers, an Interact button, and an Unstuck button. A slide-over panel (menu) holds the welcome text, controls, settings, and a 38-item achievements ledger. Whitespace is the literal open ground of the world; density is controlled by how clustered the interactive props are per district.

## Navigation
Diegetic / spatial navigation — you steer a physics car (keyboard, mouse, touch, or gamepad — all detected and offered). Wayfinding aids layered on top:
- **Mini-map / full map trigger** (`.js-map-trigger`) opens a top-down render of the whole island with roads and a live car-position marker.
- **Menu trigger** (`.js-menu-trigger`) opens a slide panel with Restart / End / Controls and per-area info.
- **Unstuck / Respawn** buttons teleport you to the nearest respawn so you can never soft-lock.
- **Prev/Next** buttons cycle through project info cards.
No sticky header, no hamburger in the conventional sense — navigation is the gameplay loop, with the map and respawn acting as safety rails.

## Typography
Body UI font is **Nunito** (`Nunito, sans-serif`) — a rounded, friendly geometric sans that matches the toy-like, low-poly art direction. Headings in the info panels (e.g. "Bruno's Home") use a heavier weight with generous tracking for a storybook feel. Type is used sparingly and only in the HUD/panels; the world itself communicates through 3D objects, signage, and icons rather than running text. The rounded letterforms reinforce the playful, non-corporate tone.

## Color & Theme
Dark, near-black base (`background: transparent` body over a deep indigo/black WebGL clear color) with **neon accents** — electric blue glowing ring, magenta/violet cross-hatch grid points on the landing plane. The world districts each have their own palette (warm pink cherry-blossom diorama for "Bruno's Home", green lab zones, etc.), so color signals place. Strong use of emissive/glow materials and bloom-style post-processing gives a synthwave-meets-toybox vibe. High contrast between glowing accents and the dark ground makes interactive elements pop.

## Imagery / Media
No photography, no stock imagery — **100% real-time 3D**. Low-poly stylized models (cars, trees, buildings, crates, fish, a statue, a bowling alley) exported as GLTF with Draco compression (original build kept all models under ~2MB combined). Custom shader materials (now authored in TSL — Three.js Shading Language) drive water, glow, weather, and stylized lighting. Dynamic weather (rain, snow, lightning) and a full day/night cycle are part of the "media." Audio is a first-class medium too (engine sounds, music, ambience via Howler.js), with a sound toggle in settings.

## Motion & Interaction
This is the entire point of the site. Everything is interactive and physics-driven:
- **Drivable car** governed by a real physics engine (now **Rapier**, replacing the original Cannon.js) — suspension, flips, collisions, honking.
- **Emergent microinteractions baked into achievements**: front/back flips, barrel rolls, doing a strike at the bowling alley, blowing up explosive crates, knocking down a statue, "lowrider" suspension play, reaching 15m altitude, driving 1/10/100 km.
- **Easter eggs**: cookie-clicker mini-game (1→1000 cookies), Konami code ("Up up down down… you know the rest"), a hidden debug UI achievement, weather events, a "whisper" message-board, a sacrifice altar with a cataclysm.
- **Day-cycle + weather** animate the whole world over time.
- Hover/press states on HUD buttons, animated panel slide-overs, and a live-updating map marker.
There are **38 achievements** with a session timer and reward tiers (unlock at 8/15/23/30/38) — a full gamification layer that turns a portfolio into a completionist loop.

## Tech / Stack (if known)
- **Rendering:** Three.js, now running on **WebGPU** (with a "WebGPU / High effects" performance toggle; falls back as needed). Custom materials authored in **TSL (Three.js Shading Language)**.
- **Physics:** **Rapier** (`rapier.rs`) — the 2025 rebuild swapped out the 2019 Cannon.js.
- **Audio:** **Howler.js**.
- **Assets:** GLTF + Draco compression, Gzip.
- **Build:** Vite (`assets/index-ORr3L4no.js` hashed bundle), analytics via GA4 (gtag).
- **Open source:** MIT-licensed, full repo + Blender files public at `github.com/brunosimon/folio-2025` (assets under CC0).
- Controls auto-detect Mouse/Keyboard, Mobile/Tablet, and Gamepad.

## Notable Techniques (steal-worthy)
- **Diegetic navigation** — the site map IS the product; "sections" are physical places you drive to, not anchors you scroll to.
- **Gamification as engagement** — 38 achievements, a session timer, and reward tiers create a completionist loop that massively extends dwell time and shareability.
- **Anti-soft-lock safety rails** — Unstuck / Respawn / Reset buttons guarantee the user can never get trapped, which is essential when navigation is freeform.
- **Progressive enhancement on the GPU** — WebGPU "High" path with graceful effect-level toggle, so it scales from phones to high-end desktops.
- **Diorama storytelling** — each area is a self-contained stylized scene (cherry-blossom home island) that doubles as the info card's hero image.
- **Open-sourcing the whole thing** — repo + Blender files public turns the portfolio into a teaching artifact and SEO/credibility magnet.
- **Audio as a design layer** — engine, music, ambience with a single mute toggle.

## What to steal for a personal portfolio
- You don't need a car game, but **make navigation itself a memorable interaction** — one signature mechanic beats ten generic scroll animations.
- **Add a lightweight "completion" hook** (visited-all-sections badge, a hidden easter egg, a Konami code) to reward exploration and create word-of-mouth.
- Always ship **escape hatches** for any unconventional UX (a reset/skip/"take me home" control) so novelty never traps the user.
- **Tie color to place** — give each section its own accent palette so users always know where they are without a label.
- Use a **friendly rounded sans (e.g. Nunito)** + dark base + neon glow when you want "technically impressive but approachable" rather than cold/corporate.
- **Open-source the build** if you can — it converts a portfolio into ongoing credibility and inbound links.
- Keep the **DOM HUD minimal and floating** over the hero canvas; let the experience carry the content and reserve text for the menu/info panel.

## Screenshots
- shots/bruno-simon/01-hero.png — landing area: glowing blue ring on neon cross-hatch grid
- shots/bruno-simon/02-mid.png — world view with HUD overlay
- shots/bruno-simon/03-menu.png — "Bruno's Home" info panel with cherry-blossom diorama + welcome copy
- shots/bruno-simon/04-full.png — full-page capture (single canvas)
- shots/bruno-simon/05-map.png — full top-down world map with roads, districts, live car marker
