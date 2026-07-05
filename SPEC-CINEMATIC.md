# SPEC — Cinematic 3D-Scroll Portfolio (feat/cinematic-scroll)

## Goal
Award-winning cinematic scroll portfolio (Lando Norris landonorris.com style) for **Garen**.
Central element: 3 AI-generated video clips of Garen (Seedance 2.0). Hero clip scrubbed as a
canvas frame sequence driven by scroll. Huge condensed display type, kinetic reveals,
ink-black background, emerald accent, cream typography, subtle grain, Lenis smooth scroll.

## Verification
- `pnpm dev` boots with no errors; `/` renders the cinematic page
- Canvas hero: scrolling advances frames (verified in browser via preview tools)
- No console errors; kinetic type, counters, pillar reveals, card hovers all animate
- `pnpm lint` passes on new files

## Fallback
Branch `feat/cinematic-scroll`; `main` untouched at `aaa60cf`.

## Risks
- Real video clips arrive late → site develops against synthetic placeholder frames + placeholder MP4s; swap is config-driven (frames manifest JSON + fixed public paths), zero code change needed.
- Frame payload weight → webp q~70, 960px-wide frames for scrub (canvas upscales), ~160 frames.

---

## Tech
- Existing Nuxt 4 app (`app/`), Vue 3 `<script setup lang="ts">` Composition API. pnpm ONLY.
- Add deps: `gsap` (ScrollTrigger), `lenis`.
- All scroll/canvas logic client-side (`onMounted` / `.client.vue` where needed); keep SSR build working.
- DO NOT touch existing components/tests/PWA config beyond what index.vue replacement requires.

## Design tokens (CSS vars in a new `app/assets/css/cinematic.css`)
- `--ink: #07080a` (page bg), `--emerald: #10b981`, `--emerald-bright: #34d399`, `--cream: #f2efe6`, `--cream-dim: rgba(242,239,230,.55)`
- Display font: local `NeuzeitGroCon-Bla.ttf` (condensed black — already in `app/assets/fonts/neuzeitGro/`) via @font-face `family: 'Neuzeit Con'`. Body: `NeuzeitGro-Reg/Bol` as `'Neuzeit'`.
- Grain: fixed full-screen SVG feTurbulence noise overlay, opacity ~0.06, `pointer-events:none`, z-index top.

## Page structure (`app/pages/index.vue` — REPLACE, old sections no longer used on `/`)
New components in `app/components/cinematic/`:

1. **HeroOrbit** — 400vh pinned section.
   - Full-viewport `<canvas>`; frame sequence at `/frames/hero/frame_0001.webp …`, count + fps read from `/frames/hero/manifest.json` (`{"count":160,"width":960,"height":540}`).
   - Preload strategy: load first frame immediately (paint), then batch-load rest; draw cover-fit; scrub index = ScrollTrigger progress * (count-1), with lerp smoothing (~0.12) via gsap.ticker for buttery feel.
   - Kinetic type: `GAREN` in massive `Neuzeit Con` (clamp(6rem, 22vw, 22rem)), each letter wrapped in a span, tracked/slid in letter-by-letter tied to scroll progress (0→0.35 of pin), slight letter-spacing expansion as it settles. Cream color, emerald accent on final N or period.
   - Subtitle fades in after: "Full-stack developer crafting cinematic web experiences." + small scroll cue (animated line).
   - Loading state: thin emerald progress bar while frames preload.
2. **StatsStrip** — dark strip, 4 stats count up on scroll-enter (gsap): `6+ Years Shipping`, `42 Projects Delivered`, `15 Happy Clients`, `120K+ Lines of Code`. Huge numerals (Neuzeit Con), small cream-dim labels.
3. **PillarsSection** — pinned ~300vh over background video `/video/builder.mp4` (muted loop autoplay playsinline, darkened by overlay gradient; if video missing render animated dark-emerald gradient fallback — component must not error). Three offers reveal ONE AT A TIME as scroll progresses (previous dims/slides up):
   - `01 — Web Engineering` / "Fast, resilient products from database to pixel."
   - `02 — Web3 & Blockchain` / "Smart contracts and onchain apps that hold up under mainnet."
   - `03 — AI Automation` / "Agents and pipelines that do the boring work for you."
4. **WorkSection** — over background video `/video/closer.mp4` (same fallback rule). Heading `SELECTED WORK`. 3 cards (staggered reveal, hover: lift + tilt + emerald border glow + image/placeholder zoom):
   - **Algo Trading Bot** — "Automated crypto strategies that trade while I sleep."
   - **Realtime Chat App** — "Sub-100ms messaging with presence, typing, and zero dropped sockets."
   - **Onchain Explorer** — "Blockchain data, finally readable by humans."
5. **FinaleCta** — massive kinetic line "LET'S BUILD SOMETHING UNREAL." (words reveal on scroll), two buttons: `Start a project` → `mailto:gareth07120712@gmail.com`, `See my code` → `https://github.com/gareth0712`. Footer row: GitHub / LinkedIn / X / Email links, small cream-dim, emerald hover.

## Smooth scroll
- Lenis instance in a client plugin or app-level composable; drive GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add((t)=>lenis.raf(t*1000))`; `gsap.ticker.lagSmoothing(0)`.
- Respect `prefers-reduced-motion`: disable Lenis + pin scrubs, show static layouts.

## Placeholder assets (generate now via ffmpeg, Bash)
- 160 hero frames: dark synthetic orbit look, e.g.
  `ffmpeg -f lavfi -i "color=c=0x07080a:s=960x540:d=6.4:r=25,drawtext=text='ORBIT %{frame_num}':fontcolor=0x10b981:fontsize=64:x=(w-text_w)/2:y=(h-text_h)/2" -frames:v 160 -q:v 70 public/frames/hero/frame_%04d.webp` (adjust so it works on Windows ffmpeg 8.1; a rotating gradient via `gradients` filter is a plus but plain is fine) + write `manifest.json`.
- `/video/builder.mp4`, `/video/closer.mp4`: 4s 960x540 dark animated gradient loops (lavfi), silent.
- Keep total placeholder payload < 15 MB.

## Quality bar
- 200-400 lines/file max, small focused components, no `any`, immutable patterns.
- eslint clean on new files. Do not break `pnpm test` (don't modify tested components).
- Desktop-first cinematic; mobile must still be usable (canvas letterboxes, sections stack).
