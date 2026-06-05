---
name: Tim Roussilhe
url: https://www.timroussilhe.com
slug: tim-roussilhe
category: portfolio
industry: awwwards
reachable: true
---

# Tim Roussilhe

**One-liner:** A WebGL-driven, single-page portfolio where the entire navigation system is a 3D "portal" that morphs from a screen rectangle into letterforms — every transition is a shader-and-SVG-morph set piece, executed with the polish of a Stripe / Squarespace lead design engineer.

## Overview
Personal portfolio of Timothée Roussilhe, a Brooklyn-based Design Engineer (ex-Stripe lead on the 2026 stripe.com redesign, ex-Squarespace, ex-Stink/Immersive Garden). The 2026 edition ("OH MY! PORTFOLIO 2026") is a near-pure WebGL experience: a curated reverse-chronological list of ~21 projects (2014–2026) rendered inside masked 3D frames. Overall impression is restrained-but-virtuosic — muted neutral palette, classy serif/grotesk type pairing, and heavy custom shader work that signals "I can build the hard stuff" without shouting. It is a portfolio that is itself the showreel.

## Layout & Information Architecture
- **Single-page, hash-routed.** No multi-page nav; sections are `#`-anchored and swapped with crossfade transitions (`useSectionTransition` hook). Project deep-links resolve to `/#`.
- **Three logical zones:** (1) Hero — name + "Design Engineer" + playful CTA; (2) Work list — "Here is a selection of my work, realized during 2014–2026", a vertical stack of ~21 project frames; (3) Contact / closing loop ("MEET ME").
- **Project frame anatomy:** large gray WebGL portal block + serif project title (e.g. "Stripe.com Redesign") + monospace metadata code top-right (e.g. `SS 026`, `AW 019`) + a persistent fractional counter `01 / 21` pinned to the right margin acting as a scroll progress / wayfinding device + small all-caps client label + role line ("Developer & Interaction Designer").
- Generous whitespace; content is centered in a narrow-ish column with wide margins reserved for the index counter and metadata codes. Low density, gallery-like pacing — one project commands the viewport at a time.

## Navigation
- Minimal. Top-left circular **TMI monogram** (T / M / I arranged in a thin-stroke circle) as the home/brand mark; top-right single **"Contact me"** link. That's the whole chrome.
- Real navigation happens through **scroll + WebGL portal transitions**, not a menu. Moving between project / contact states morphs the portal rectangle into letter shapes via GSAP MorphSVG; a 3D character (Mixamo-rigged) is isolated inside the bounded portal and "dances" across transitions.
- Wayfinding handled by the `01 / 21` index counter and per-project monospace codes rather than a nav bar.

## Typography
- **Headings:** `GT Sectra Display` (Regular) — a high-contrast contemporary serif (Grilli Type) with calligraphic, slightly broken-nib detailing. Used at large display size for the name and project titles, with extra letter-spacing on the hero ("T i m o t h é e  R o u s s i l h e").
- **Body / UI / metadata:** `Akkurat Pro` — a neutral Swiss grotesque (Lineto) for labels, role lines, and the "Design Engineer" subtitle.
- **Metadata codes** rendered in a **monospace** face (`SS 026`, `AW 019`, `01 / 21`) — a deliberate "technical spec sheet" register that contrasts the elegant serif.
- Hierarchy: serif display (project/name) → grotesque subhead → all-caps grotesque client label → monospace codes. A faint oversized "Timothée Roussilhe" watermark scrolls behind the work list as a textural layer.

## Color & Theme
- Effectively monochrome neutral: warm light-gray page field, near-black text, white reserved for hero name over the gray. WebGL portals render as flat mid-gray blocks in static capture (live they hold video/3D content).
- No brand accent color of its own — color enters only through the embedded project thumbnails (e.g. the Stripe gradient blade — orange/pink/violet — bleeding through a portal). The site stays chromatically quiet so client work provides all the saturation.
- Light theme throughout; high contrast for the serif display, intentionally low contrast for the giant background watermark.

## Imagery / Media
- Project media (site screenshots, video, the dancing 3D character) is composited **inside masked WebGL frames** rather than shown as plain `<img>` rectangles. Videos appear as silhouettes within morphed letter masks.
- Art direction is uniform and disciplined: every project gets the same frame system, so the portfolio reads as one cohesive object instead of a collage of mismatched case studies.
- A pixel/emoji maneki-neko ("lucky cat") accents the hero CTA ("Do not press this!") — a signature playful easter-egg motif (he has reused cat/maneki-neko animations across editions).

## Motion & Interaction
- **Portal morph (signature):** the rectangular "screen" portal morphs into letter shapes and back using GSAP **MorphSVG** with `fill-rule: evenodd` cut-outs and rotational morph type; the path is rendered to **HTML5 Canvas** via MorphSVG's `render` callback (bypassing DOM updates) to hold 60fps.
- **MeshPortal / FBO masking:** a separate Three.js scene is rendered to a Frame Buffer Object and clipped to a bounded screen area via a custom mask shader (`vec4 uMask`); DOM bounds are synced to the WebGL portal using `getBoundingClientRect()` normalized to 0–1 shader uniforms.
- **Velocity-based stretch shader:** project titles stretch/compress with a sine-wave distortion driven by **scroll velocity**, with amplitude tied to viewport position — organic, physics-y parallax.
- **Depth-driven infinite lines:** repeating lines via modulo on normalized depth, with velocity-driven directional blur for motion smear.
- **"Sticker fold" shader:** vector-projection fold along both axes (normalize direction → dot product → redistribute curl) plus a curvature-based **fake shadow** (`smoothstep` darkening as the surface curls).
- **Crossfade section transitions:** simultaneous in/out callbacks; easing vocabulary `back.out(1.2)` for bouncy reveals, `power3.in/out` for smooth morphs.
- **Closing loop:** contact state morphs the portal into "MEET ME" text with camera FOV manipulation.
- Micro: the "Do not press this!" / "Do not press this" reverse-psychology CTA and the dancing character are the personality beats.

## Tech / Stack (if known)
- **Three.js + React Three Fiber** for all 3D / portal rendering.
- **GSAP** (core + **MorphSVG** plugin) for path morphing and transition orchestration.
- **HTML5 Canvas** for optimized morph-path rasterization.
- Custom **GLSL shaders** (vertex + fragment) for fold, fake shadow, velocity stretch, depth lines, FBO masking.
- Mixamo for the rigged 3D character. Google Analytics (gtag / G-VS6R1PW7DT) loaded.
- Codrops case study cites **Next.js**; the live build serves a CRA-style `static/js/main.[hash].js` bundle — either way React-based, client-rendered, single bundle.
- Project demos hosted across Vercel / Netlify subdomains (sessions-2024.vercel.app, david-william-baum.netlify.app, etc.).

## Notable Techniques (steal-worthy)
- **Navigation-as-set-piece:** the menu/wayfinding IS the WebGL portal — letters and screens are the same morphable object, so transitions double as branding.
- **DOM-synced WebGL portals:** lay out in normal HTML, then mirror `getBoundingClientRect()` into shader uniforms so 3D content tracks DOM elements precisely (clean separation of layout vs. render).
- **Scroll-velocity as a shader input:** feed scroll speed into a sine-distortion uniform for type that physically reacts to how fast you scroll.
- **Canvas-render escape hatch for MorphSVG:** route the morph through a Canvas `render` callback to avoid DOM-path thrash and hold 60fps.
- **Spec-sheet metadata system:** monospace project codes + `NN / total` counter give a technical, editorial wayfinding layer at near-zero design cost.
- **Chromatic restraint:** keep the shell neutral so client work supplies all the color — makes a varied body of work feel like one brand.
- **Reverse-psychology CTA + mascot:** "Do not press this!" and the dancing character inject personality without a wall of text.

## What to steal for a personal portfolio
- Adopt the **serif-display + grotesque + monospace** triad (GT Sectra / Akkurat / mono) — instantly reads "design engineer," not template.
- Add a **fixed `NN / total` project counter** and per-project monospace codes as cheap, high-signal wayfinding even in a plain scroll layout (no WebGL required).
- Use a **neutral monochrome shell** and let project thumbnails be the only color — cohesion for free.
- If you have R3F skills, the **DOM-synced portal** pattern (HTML layout + `getBoundingClientRect()` → shader uniform) is the reusable core; start with one masked video portal before attempting letter morphs.
- Cheap motion win without shaders: drive a **CSS/JS transform from scroll velocity** (skew or scale) for the title-stretch feel.
- Keep navigation chrome to a **monogram + single Contact link**; let scroll + transitions carry the rest.
- Add **one personality beat** (an easter-egg CTA or animated mascot) to avoid the cold-perfection trap.

## Screenshots
- shots/tim-roussilhe/01-hero.png — hero: TMI monogram, GT Sectra name, "Design Engineer", "Do not press this!" maneki-neko CTA
- shots/tim-roussilhe/02-mid.png — Stripe.com Redesign project frame with portal block, `SS 026` code and `01 / 21` counter
- shots/tim-roussilhe/03-lower.png — David William Baum frames, `AW 019` code, faint giant "Timothée Roussilhe" watermark
- shots/tim-roussilhe/04-full.png — full-page stitch of the work index
