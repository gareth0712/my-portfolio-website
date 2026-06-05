---
name: Sam Dape
url: https://samdape.com
slug: sam-dape
category: portfolio
industry: awwwards
reachable: false
---

# Sam Dape

**One-liner:** An anti-portfolio reduced to a single grey screen — a giant monospaced name and three numbered "objects" (a low-poly flower, bird, and suited man) that double as the only navigation. World-class because it has the confidence to ship almost nothing and let craft + restraint carry the whole impression.

## Overview
NOTE ON REACHABILITY: The exact target `samdape.com` no longer resolves (DNS `NXDOMAIN` — domain expired/migrated). "Sam Dape" is the online handle (@samdape) of **Samuel David Peitz**, a Berlin/Munich visual product designer (ex-Studio Koto, now independent / Biased Collection). His live portfolio is now at **https://sam-peitz.com**, which is the same person and the closest available capture. All live findings below are from sam-peitz.com; treat the original samdape.com as down. `reachable: false` reflects that the named URL itself failed.

The site is a deliberately minimal one-screen "calling card." It is not a case-study portfolio — there are no projects, no scroll narrative, no nav menu. It is a flex of restraint: name + three links, presented as a tiny still-life of cutout 3D objects on a flat field. It targets people who already know who he is (recruiters, peers, Twitter audience) and signals taste through what is left out.

## Layout & Information Architecture
Single viewport (document height ~651px vs ~566px viewport — effectively no scroll). Content is centered in the upper-middle of a vast empty grey canvas. IA is three nodes only:
- `(01)` flower → his "One Year" iOS journaling app
- `(02)` bird → Twitter/X
- `(03)` suited man → LinkedIn

Each object is a small image with a tiny numbered caption beneath it (01/02/03), and a legend block lists what each number is. Whitespace is the dominant design element — 90%+ of the screen is empty. Density is near-zero by intent.

## Navigation
No nav bar, no menu, no hamburger, no footer. The three illustrated objects ARE the navigation — image-as-link. Wayfinding is the numbered key (`(01) one year app  (02) twitter  (03) linkedin`). All three links are outbound; there are no internal pages. This is "navigation as a riddle" — you have to read the legend to map object → destination.

## Typography
- Rendered fallback stack is `Arial, "Helvetica Neue", Helvetica, sans-serif` (a WebFont loader is present, so a custom face may be intended/loading; on capture it rendered as a clean grotesque). Visually the name reads as a monospaced/uppercase grotesque with generous letter-spacing.
- Treatment: `SAMUEL DAVID` / `PEITZ` set in all-caps, tracked-out, small (~16px) but visually anchored as the only headline. Numbers and legend in the same face, tiny.
- Hierarchy is achieved by position (top-center) and the all-caps caps treatment, not by size — the type is small and quiet, letting the images dominate.

## Color & Theme
- Background: flat warm grey `rgb(205,205,205)` (#CDCDCD). No gradients, no texture.
- Text: near-white/light, low-contrast against the grey (intentionally soft).
- The only color comes from the photographic/3D objects themselves — a saturated red-orange flower, a yellow-brown bird, a navy suit. The palette is "grey gallery wall + a few colored specimens," like museum display cards.

## Imagery / Media
3 PNG cutouts hosted on Webflow CDN. Aesthetic is distinctly **PS1/early-3D low-poly render** (the man especially has that pre-rendered game-character look; flower and bird look like low-res 3D or scanned models). They read as "found objects" / specimens. No video, no WebGL canvas (0 `<canvas>` elements). Art direction is the whole point: oddball, slightly uncanny, memorable — the kind of imagery that makes you screenshot and share.

## Motion & Interaction
Very light. Webflow's interaction runtime (`webflow.js`) + jQuery are loaded, so there is likely hover/entrance microinteraction (fade-in, slight scale, or cursor proximity wobble on the objects) — Webflow IX2 is the typical vehicle. No heavy scroll-jacking, no Lenis smooth scroll, no physics engine. The "interaction" is conceptual: discovering that each weird object is a clickable link. Hover likely surfaces the cursor pointer + subtle transform on each cutout.

## Tech / Stack (if known)
- **Webflow** (confirmed: assets on `cdn.prod.website-files.com`, site id `64a05900882782a8aa34192e`, `webflow.js` runtime).
- **jQuery 3.5.1** (Webflow default).
- **Google WebFont Loader** (`webfont.js`) for typography.
- Webflow IX2 for any interactions. No custom framework, no Three.js, no GSAP detected. Classic no-code stack — the sophistication is in art direction, not engineering.

## Notable Techniques (steal-worthy)
- **Image-as-navigation**: links carry no text; the picture is the button, decoded via a numbered legend. Forces engagement and feels like a game.
- **Radical subtraction**: one screen, three links, zero scroll — confidence to omit the entire "portfolio" and let identity do the work.
- **Specimen still-life composition**: a few colored cutout objects floating on a neutral field, museum-card numbering (01/02/03). Cheap to build, instantly distinctive.
- **Low-poly / PS1 render aesthetic** as a deliberate retro-uncanny signature that's off-trend enough to be memorable.
- **Low-contrast quiet type** (light text on mid-grey) that refuses to shout — taste signal.
- **No-code stack, high-taste output**: proof that Webflow + 3 PNGs can out-class over-engineered sites when the art direction is strong.

## What to steal for a personal portfolio
- If you have a strong personal brand, consider a **one-screen card** version of your site for the "front door," with deeper case studies one click away. Restraint reads as senior.
- Replace generic social-icon rows with **bespoke object/illustration links** + a numbered legend — turns boilerplate into a memorable micro-interaction.
- Use a **flat neutral canvas** so a small number of colored hero objects do all the visual work; you don't need full-bleed photography.
- Pick a **signature visual register** (here: low-poly 3D) and commit hard — one consistent weird idea beats five tasteful-but-generic ones.
- You don't need GSAP/Three.js to look intentional: Webflow IX2 microinteractions on a few elements are enough when composition is right.

## Screenshots
- shots/sam-dape/01-hero.png (the full single-screen composition: name + flower/bird/man cutouts)
- shots/sam-dape/02-mid.png (post-scroll — effectively identical, no real scroll content)
- shots/sam-dape/03-lower.png (same)
- shots/sam-dape/04-full.png (full-page capture)
