# Research Pipeline SPEC — Portfolio UI/UX Upgrade

**Created:** 2026-06-05 · **Owner:** orchestrator (deep-research)

## Goal
Produce a fact-checked, screenshot-backed reference set that teaches what world-class
frontend/UI-UX looks like, so the user can rebuild their portfolio to that bar.

Deliverables (all under `research/`):
1. `workings/<slug>.md` — one forensic teardown per analyzed site (~80 sites), with screenshots in `workings/shots/<slug>/`.
2. `PORTFOLIO.md` — curated list of top **developer** portfolios (quality-filtered, not the raw awesome-list dump).
3. `TOP-LIST.md` — curated list of top **frontend / UI-UX** sites across industries.
4. `best-practices/*.html` — 12 category guides (ANIMATIONS, COLOR, INTERACTIONS, MINI-GAMES, MOTIONS, NEXTJS, SPATIAL, STATE-MANAGEMENT, STYLING, TYPOGRAPHY, UI-DESIGN, UX), polished HTML.
5. `PLAN.html` — how to build our own portfolio / future frontend projects to this standard.

## Method (user-locked)
- Scope: **Exhaustive** — ~50 UI/UX sites + ~30 dev portfolios.
- Per site: **search + knowledge FIRST**, then **live browser teardown** via `agent-browser --session <slug>` (open → screenshot hero/mid/footer → snapshot DOM → close). Slow is acceptable; accuracy is the priority.

## Architecture
- **Workflow A (Discover + Teardown):** 2 discovery agents → cap lists → fan-out, one agent per site (full teardown, writes `workings/<slug>.md`).
- **Workflow B (Synthesize):** lists (PORTFOLIO/TOP-LIST) ∥ 12 best-practices HTML → then PLAN.html.

## Verification
- `ls research/workings/*.md | wc -l` ≈ 80, each file non-empty with required sections.
- `ls research/workings/shots/*/` — every analyzed site has ≥1 screenshot.
- `PORTFOLIO.md`, `TOP-LIST.md` non-empty, entries cite a `workings/<slug>.md`.
- 12 `best-practices/*.html` non-empty, valid HTML (open in browser).
- `PLAN.html` non-empty, references the gathered findings.

## Fallback
- All target files were empty stubs at start (git clean). Roll back: `git checkout -- research/` or delete `research/workings/*` + re-run. Pre-work commit: `1f31f43`.

## Risks
- Live-browser flakiness at concurrency (cookie walls, bot blocks, JS-heavy SPAs). Mitigation: agents degrade gracefully — capture what's reachable, note blockers, never fail the whole site on one bad screenshot.
- Motion/animation not visible in static screenshots — agents supplement from search/knowledge and DOM inspection (CSS/JS hints).
- Project is **Nuxt (Vue)**, but stubs include NEXTJS.html / STATE-MANAGEMENT.html (React-leaning). Honored as named; Nuxt/Vue equivalents noted inline.
