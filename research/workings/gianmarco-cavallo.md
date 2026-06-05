---
name: Gianmarco Cavallo
url: https://gianmarco.xyz
slug: gianmarco-cavallo
category: portfolio
industry: design-engineer
reachable: false
---

# Gianmarco Cavallo

**One-liner:** A bento-grid developer portfolio that turns "personal site" into a playable toy — live dual-clock world time, swappable color themes AND visual styles (glass/neon/paper), sound toggle, and an easter egg — all shipped static on Astro with a meditating illustrated mascot anchoring the grid.

> NOTE ON REACHABILITY: The exact target `https://gianmarco.xyz` did NOT resolve at audit time (DNS NXDOMAIN — "non-existent domain", confirmed via nslookup against 8.8.8.8). The agent-browser open failed with `net::ERR_NAME_NOT_RESOLVED`. The person is real and his current live portfolio is **https://gianmarcocavallo.com** (same identity: GitHub `Ladvace`, Dribbble `Ladvace_Jace`, links to gianmarcocavallo.com/blog, /playground, /guestbook). All teardown observations below are from that live mirror, which is almost certainly the evolved version of the gianmarco.xyz design. `reachable: false` reflects the literal target URL; screenshots/DOM evidence are from the live `.com` twin.

## Overview
Personal portfolio of Gianmarco Cavallo, an Italian freelance full-stack developer who self-describes as "frontend-leaning" and "the bridge between designers and engineers." The site is a single-screen-ish **dashboard/bento layout** rather than a scrolling narrative — it reads like a developer's personalized home/start page. Audience: prospective clients (startups, agencies) and fellow devs. Overall impression: confident, playful, and meticulously engineered — it demonstrates skill by *being* an interactive playground rather than just listing it.

## Layout & Information Architecture
- **Bento grid** — the whole page is a mosaic of bordered rounded cards of varying sizes on a dark canvas, each card a self-contained module.
- Top band: large intro card (left) with bio + social icon buttons + "Book a call" CTA; mascot illustration (center); "About me" + stack/tools card (right).
- Middle band: "Let's start working together!" contact card | dual **world-clock** card (My Time GMT+2 Italy vs Your Time, auto-detected, "7h behind you") | "Design Works" thumbnail gallery card | "Beyond coding" passion paragraph.
- Lower band: smaller equal cards — **Now** (Sivers-style now-page, "Currently working fulltime at GroupCards"), **Playground**, **Guestbook**, **Blog**, **Countries I visited** (16, with a stylized map), plus the **theme/style switcher** cluster and footer.
- Density is high but legible — generous internal card padding and consistent gutters prevent clutter. Each card has a small ↗ corner arrow signaling "this is a link/expandable."

## Navigation
- **No traditional top nav bar.** Navigation IS the bento cards — sections (Blog, Playground, Guestbook, Travel, Design Works) are entered by clicking their card. This is a deliberate "everything visible at once" wayfinding model.
- Internal page-to-page movement uses **Astro ClientRouter / View Transitions** (a `GridTransition` component is loaded) for smooth animated grid morphs between routes rather than hard page loads.
- External links (GitHub `Ladvace`, LinkedIn, Dribbble, Medium, Behance) live as icon buttons and a Socials list.

## Typography
- **Satoshi** (confirmed via `getComputedStyle(body).fontFamily` → `"Satoshi, sans-serif"`) — a clean geometric grotesk, the same font many design-engineers favor for a neutral-modern feel.
- Hierarchy is card-local: small uppercase eyebrow labels (e.g. "welcome", "MY TIME", "STACK & TOOLS"), large bold card titles, comfortable body copy. Large numerals for the clocks (6:36 PM / 8:36 AM) act as visual anchors.
- Restrained scale — relies on weight + size contrast within cards rather than dramatic display type.

## Color & Theme
- Default: **near-black canvas `rgb(17,17,17)`** with a signature **red accent** (CTAs, social button borders, mascot's red hoodie/beanie tie the palette together).
- **User-switchable color themes** baked in: Default (red), Yellow, Blue, Purple, Green — shown as a row of color dots; the accent recolors the whole UI.
- High contrast, dark-mode-first. Accent is used sparingly for interactive affordances so it reads as "clickable = red/accent."

## Imagery / Media
- **Hero mascot**: a custom illustrated avatar of Gianmarco sitting cross-legged in a meditation pose (red beanie + beard), rendered with a subtle halftone/dithered dot texture — strong personal branding centerpiece.
- "Design Works" card uses a tiled thumbnail mosaic of design pieces.
- "Countries I visited" uses a stylized minimal world/region map with accent-colored highlights.
- Decorative dotted/grid textures fill several cards (Guestbook, Blog) as background pattern. Faint grid lines run behind the whole layout.

## Motion & Interaction
- **Theme switcher** + **Style switcher** (Default / Glass / Sharp / Neon / Paper via "Toggle style panel") — changes the *visual treatment* of every card (glassmorphism vs hard edges vs neon glow vs paper texture) live. This is the standout interaction: two orthogonal customization axes (color × material).
- **Sound toggle** ("Toggle sound" button) — UI sound design / audio feedback on interactions.
- **Easter egg button** (`easter egg btn` in DOM) — hidden playful interaction.
- **Live world clock** updates in real time and computes the visitor's offset ("7h behind you") from their detected timezone.
- **Astro View Transitions / GridTransition** for animated route changes — cards morph/reflow between pages.
- Per search/his own framing: heavy focus on micro-interactions, hover states, and staggered reveals; Astro islands keep it performant (the broader Astro+Svelte portfolio pattern targets Lighthouse 100).
- Each card's ↗ arrow and hover lift signal interactivity.

## Tech / Stack (if known)
- **Astro v6.3.7** (confirmed via `<meta name="generator">`) — static output, islands architecture.
- **Astro ClientRouter** (View Transitions) for SPA-like nav; custom `GridTransition`, `IntroCard`, `BasicLayout` client scripts.
- **Satoshi** webfont.
- **Cal.com** embed (`app.cal.com/embed/embed.js`) powering "Book a call."
- **Umami** (`cloud.umami.is`) + **Ahrefs** analytics — privacy-friendly analytics stack.
- Per his public profile: also fluent in Svelte, SolidJS, React/Next, Node — Astro islands likely hydrate Svelte/Solid components for the interactive cards.

## Notable Techniques (steal-worthy)
- **Bento grid as primary navigation** — no nav bar; every section is a clickable tile, all visible at once.
- **Dual-axis personalization**: independent **color theme** switcher AND **material/style** switcher (glass/neon/paper/sharp) — lets visitors reskin the site, a memorable demonstration of CSS/theming skill.
- **Live visitor-relative world clock** ("7h behind you") — tiny but delightful, signals "I work with global clients."
- **Custom illustrated meditating mascot** with halftone texture as the brand anchor — instantly recognizable, far stronger than a photo.
- **Now page + Guestbook + Playground + Travel map** — community/personality cards that make a portfolio feel alive and lived-in.
- **Sound design + easter egg** — opt-in audio feedback and a hidden interaction reward exploration.
- **Astro View Transitions (GridTransition)** for animated, app-like route changes on a fully static site.
- **Cal.com "Book a call" CTA** — removes friction from lead-gen with zero backend.

## What to steal for a personal portfolio
- Use a **bento grid** to show breadth (work, blog, playground, travel, now) on one screen instead of forcing scroll — high info density without feeling cramped if gutters/padding are consistent.
- Add **one signature interactive flourish** that doubles as a skills demo — here it's the live theme+style switcher. Pick something that *shows* your craft, not just tells.
- Ship a **custom illustrated avatar** over a stock headshot for memorable personal branding.
- Include a **"Now" card** and a low-friction **"Book a call" (Cal.com)** CTA — personality + conversion in two small tiles.
- Go **dark-mode-first with a single bold accent** used only for interactive elements, so "accent color = clickable" becomes an intuitive affordance.
- Use **Astro + View Transitions** to get app-like animated navigation while staying static and fast (privacy-friendly Umami over GA).
- Sprinkle **micro-delight** (UI sounds, an easter egg, real-time clock) — cheap to build, high memorability payoff.

## Screenshots
- shots/gianmarco-cavallo/01-hero.png — hero/top band: intro card, meditating mascot, About + stack tags
- shots/gianmarco-cavallo/02-mid.png — middle/lower bento: contact, world clocks, Design Works, Playground, Guestbook, Blog, Countries, theme dots, footer
- shots/gianmarco-cavallo/03-lower.png — lower scroll position
- shots/gianmarco-cavallo/04-full.png — full-page composite of the bento layout

(Captured from live twin https://gianmarcocavallo.com — literal target gianmarco.xyz did not resolve.)
