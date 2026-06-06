# SPEC — Portfolio Site Nuxt 2 → Nuxt 4 Rebuild

> Date: 2026-06-04 · Repo: `gareth0712/my-portfolio-website` · Deploy target: `gareth0712.github.io` (garethlau.com CNAME removed)

## Goal

Rebuild the 248-LOC Nuxt 2.15 SPA as a clean **Nuxt 4 + full TypeScript** static site following 2026 best practice, preserving the real visible behaviour, dropping tutorial dead-code, and keeping the existing GitHub Actions deploy (fixed for Nuxt 4) pushing direct to `main`.

## Verification (must pass before "done")

| # | Check | Command / Evidence |
|---|-------|--------------------|
| 1 | Dev server boots | `pnpm dev` → loads `http://localhost:3000` with no console errors |
| 2 | Type-safe | `pnpm nuxt typecheck` (vue-tsc) → 0 errors, no `any`/casts |
| 3 | Lint | `pnpm lint` → 0 errors |
| 4 | Tests ≥80% on real code | `pnpm test` (Vitest) green; covers `Contact`, particles wrapper, theme store, page render |
| 5 | Static build | `pnpm generate` → emits `.output/public/index.html` + assets |
| 6 | Visual parity | Browser check: hero title/subtitle, cobweb particles + cosmic bg, 3 working contact icons, dark-mode toggle flips theme, content section renders from markdown |
| 7 | CI valid | `deploy-prod.yml` uses Node 22 + copies `.output/public/*` (not `dist`); workflow YAML lints |
| 8 | Integration | `code-reviewer` subagent acceptance pass |

## Fallback

- Rebuild happens on `main` (user chose direct push). **Pre-work tag** `pre-nuxt4-rebuild` on current `HEAD` (`2003696`) as the rollback point: `git reset --hard pre-nuxt4-rebuild`.
- Old source preserved in git history; assets (fonts/favicons/bg image) copied, not deleted from history.

## Stack (versions verified 2026-06-04)

| Concern | Old (drop) | New |
|---------|-----------|-----|
| Framework | nuxt 2.15 | **nuxt 4.4** (`app/` dir, SSG `ssr:true` + prerender) |
| Language | JS + partial TS | **full TS**, `<script setup lang="ts">` |
| UI | @nuxtjs/vuetify (Vuetify 2) | **@nuxt/ui 4** (Tailwind v4); icons `i-mdi-*` via `@iconify-json/mdi` |
| Styling | SCSS rules + Vuetify | **Tailwind v4 utility classes** (`class="..."`) everywhere. Custom CSS kept ONLY for what utilities can't express: `@font-face` (NeuzeitGro), particles bg-image, `appear` keyframes |
| Particles | particles-bg-vue (Vue 2) | **@tsparticles/vue3 4** + `@tsparticles/slim`, in `<ClientOnly>` |
| State | Vuex | **Pinia 3** (`@pinia/nuxt`) |
| Dark mode | dead `darkMode` flag | **real toggle** — `@nuxtjs/color-mode` (bundled w/ @nuxt/ui) as theming engine, Pinia store holds the preference + drives the toggle button |
| Content | @nuxt/content 1 (unused) | **@nuxt/content 3** — drives a real section (see below) |
| Fonts | manual @font-face only | **@nuxt/fonts** for Quicksand; NeuzeitGro .ttf carried over via local @font-face |
| PWA | @nuxtjs/pwa 3 | **@vite-pwa/nuxt 1** (autoUpdate manifest); drop old `static/sw.js` |
| Axios | @nuxtjs/axios | removed (no HTTP calls in app) |
| Tests | jest + vue-jest | **vitest 4 + @nuxt/test-utils** |
| Node (CI) | 14 | **22** |
| Pkg mgr | yarn | **pnpm** (per global rule) |

## Features

### Preserve (real, visible)
1. **Hero** — `<h1>Gareth Lau</h1>` + `<h2>Full stack developer that helps clients build applications</h2>`, centred full-viewport.
2. **Particles background** — cobweb/links preset, white, over `background_cosmic_darkorchid.jpg`. Client-only.
3. **Contact** — 3 icons (Instagram `garetpark`, LinkedIn `gareth-lau-8b091b9b`, email `gareth07120712@gmail.com`); same `openLink` behaviour (`_blank`, `_parent` for mailto).
4. **Typography** — NeuzeitGro font stack + Quicksand subtitle, 16px base, box-sizing reset.

### New (user-requested real features)
5. **Dark mode toggle** — visible button toggles light/dark; preference persisted; theme actually changes colours (hero text, bg overlay) via @nuxt/ui color-mode bound to a Pinia `useThemeStore`.
6. **Content-driven section** — a real `About` (or `Projects`) section under the hero, authored in `content/*.md`, rendered with `<ContentRenderer>` / `queryCollection` (Content v3). Replaces the boilerplate `hello.md`.

### Drop (dead code — YAGNI)
`store` Vuex `description`/`nuxtServerInit`, `middleware/user-agent.ts`, `index.vue` unused `message`/`asyncMessage`/`computedMessage`/`userAgent`, `content/hello.md`, orphan `Logo.vue`, `layouts/default.vue` `.button--green/grey`, Vuetify sass import in `global.scss`.

## New structure

```
app/
  app.vue                  # NuxtLayout > NuxtPage
  layouts/default.vue      # minimal shell + <ParticlesBg/> + theme toggle slot
  pages/index.vue          # hero + <Contact/> + <AboutSection/>
  components/
    Contact.vue            # 3 icon links (UButton/UIcon)
    ParticlesBg.client.vue # tsparticles cobweb wrapper
    ThemeToggle.vue        # dark-mode button -> useThemeStore
    AboutSection.vue       # ContentRenderer of content/about.md
  assets/css/main.css      # Tailwind entry (@import "tailwindcss") + @font-face + keyframes (no Vuetify/SCSS)
  assets/fonts/neuzeitGro/ # .ttf + @font-face (carried over)
  stores/theme.ts          # Pinia: darkMode pref
content/about.md           # real markdown content
public/                    # background image, favicon/*, logo.svg (from old static/)
nuxt.config.ts             # modules + app head + prerender
content.config.ts          # Content v3 collection
vitest.config.ts
tests/                     # Contact.spec, theme.spec, page render
.github/workflows/deploy-prod.yml  # Node 22, .output/public
package.json (pnpm), tsconfig.json
```

## Deploy (CI) changes — `.github/workflows/deploy-prod.yml`
- `node: [14]` → `node: [22]`
- install `yarn` → `pnpm install` (add `pnpm/action-setup`)
- `cp -r ./dist/*` → `cp -r ./.output/public/*`
- keep overlay copy into cloned `gareth0712.github.io` + push to `main` (existing `secrets.TOKEN`)
- **CNAME**: stays removed (not in source); do not re-add. `tools/yt-monitor/` in pages repo is untouched by overlay copy (confirmed safe).

## Risks
| Risk | Mitigation |
|------|------------|
| @nuxt/ui Tailwind v4 shifts visuals vs Vuetify | Hero is custom CSS not Vuetify; only icons depend on @nuxt/ui — low blast radius |
| tsparticles cobweb ≠ identical to particles-bg cobweb | Use `links` preset tuned to white/cobweb; visual-approx acceptable |
| SSG + client-only particles hydration mismatch | Wrap particles in `<ClientOnly>` |
| `secrets.TOKEN` scope/expiry unknown | CI change is path/node only; token untouched — if deploy 403s, that's a pre-existing token issue to flag, not introduced here |
| Node 22 required locally | Verify `node -v` ≥22 before dev/test; flag if mismatch |

## Task breakdown (phased orchestration)
- **T1 — Scaffold + config** (frontend-engineer): fresh Nuxt 4 + TS, nuxt.config, modules, pnpm, tsconfig, assets/fonts/public migration, global css.
- **T2 — Components + pages + store** (frontend-engineer): app.vue, layout, index, Contact, ParticlesBg.client, ThemeToggle, stores/theme, AboutSection + content.config + content/about.md.
- **T3 — Tests** (frontend-engineer / tdd): Vitest setup + specs ≥80% real-code coverage.
- **T4 — CI** (devops-engineer): rewrite deploy-prod.yml (Node 22, pnpm, .output/public).
- **T5 — Integration verify** (code-reviewer): full Verification table, build + visual parity.

Sequential where shared files: T1→T2→T3; T4 parallel to T2/T3; T5 last.
