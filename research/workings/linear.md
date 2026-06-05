---
name: Linear
url: https://linear.app/
slug: linear
category: uiux
industry: saas
reachable: true
---

# Linear

**One-liner:** The reference benchmark for dark-mode SaaS marketing — surgically precise typography, near-zero chrome, and live interactive product mockups that demo the app inside the page instead of showing static screenshots.

## Overview
Linear is a product development / issue-tracking tool for software teams. The marketing homepage is a single long-scroll narrative that walks through the product lifecycle (Intake → Plan → Build → Diffs → Monitor) using *functional, interactive replicas of the actual app UI* rather than image screenshots. The overall impression is restrained, engineered, and confident: pure black canvas, high-contrast white type, almost no decorative flourish. It established the "Linear style" dark-SaaS aesthetic that hundreds of startups now imitate. The current build reflects the 2024+ refresh — softer borders, calmer contrast, AI/agents messaging front and center ("teams and agents").

## Layout & Information Architecture
- Centered max-width content column (~1100-1200px) on a full-bleed near-black background; generous horizontal gutters.
- Vertical story structure with numbered chapters: hero → logo wall → "A new species of product tool" thesis → 5 numbered capability sections (1.0–5.0) each with sub-feature tabs (1.1 Linear Agent, 1.2 Triage, etc.) → Changelog → customer quotes → final CTA → mega footer.
- Each capability section pairs a large H2 heading with a live, interactive demo panel (issue list, command menu, code-diff editor, Gantt-style initiatives timeline).
- Heavy whitespace and deliberate density control: marketing copy is sparse, but the embedded app mockups are intentionally dense to signal product depth.
- Footer is a classic 5-column sitemap (Product / Features / Company / Resources / Connect) + legal row — very high link density, the densest block on the page.

## Navigation
- Sticky top nav, transparent over the black hero, persists on scroll.
- Left: wordmark + spiral logo. Center: Product (dropdown), Resources (dropdown), Customers, Pricing, Now, Contact. Right: a vertical divider, "Log in" (ghost) and "Sign up" (pill, light-on-dark).
- "Product" and "Resources" are expandable mega-menu buttons (`expanded=false` toggles).
- Includes an accessible "Skip to content" link as the first focusable element — good a11y discipline.
- Wayfinding inside the page comes from the numbered chapter system (1.0–5.0) rather than nav anchors.

## Typography
- **Inter Variable** as primary, falling back to SF Pro Display / system stack. Single typeface across the whole site — no pairing.
- H1 is ~64px, tight leading, heavy weight, optically tracked-in — set as a two-line statement ("The product development / system for teams and agents").
- Strong two-tone hierarchy trick: section thesis headings render the first sentence in bright white and the continuation in muted gray within the same heading (e.g. "A new species of product tool." in white, the rest dimmed) — creates emphasis without a second font or color hue.
- Tiny monospace-style labels ("FIG 0.2", "FIG 0.3") annotate the illustration grid for a technical-blueprint feel.
- Body copy is small, low-emphasis gray — copy stays out of the way so the UI demos carry the weight.

## Color & Theme
- Near-pure black canvas: body background `rgb(8, 9, 10)`, foreground text `rgb(247, 248, 248)`.
- Effectively monochrome marketing chrome. Color appears almost exclusively *inside* the product mockups — issue priority swatches, label chips (Bug/Design/AI/Performance), agent avatars, and subtle status-bar gradients in the initiatives timeline.
- Accent is restrained: a faint indigo/blue used for the "Issue tracking is dead" pill dot and timeline progress bars; CTAs are light pills (`rgb(229,229,230)`-ish) rather than a saturated brand color.
- Gradients are whisper-soft and confined to UI surfaces (timeline bars fade to translucent), never loud hero gradients.

## Imagery / Media
- No stock photography. No hero illustration in the traditional sense.
- Signature device: **live, interactive in-browser product replicas** — real DOM (buttons, listboxes, textboxes, an editable code-diff `textbox` with "press Space to edit", a command menu with selectable agent options). These are built components, not images.
- Monochrome line-art isometric illustrations ("FIG 0.x") as section dividers.
- Logo wall of recognizable customers (Vercel, Cursor, OpenAI, Coinbase, Cash App, Ramp) for social proof.
- A Gantt/timeline "Initiatives" visualization with progress segments for the Plan/Monitor sections.

## Motion & Interaction
- Scroll-driven: sections and their app mockups animate in / build up as you scroll (community rebuilds confirm Framer Motion enter/leave + viewport triggers).
- The mockups are genuinely interactive, not just animated: command menu has a live listbox you can navigate, the code diff is an editable textbox, issues have priority setters and add-issue affordances, audio "Listen" player with a 1.0× speed combobox.
- Hover states are subtle and fast (Linear's brand is "fast"), consistent with the app's own snappy feel.
- Microinteractions: priority pickers, label chips, "Set priority" buttons, chat composer with attach/emoji/mention/record affordances — all wired up to communicate product capability through touch.
- Note: motion does not appear in the static screenshots; the standout is the *interactive-demo-as-marketing* pattern.

## Tech / Stack (if known)
- **Next.js (App Router)** — confirmed: scripts served from `static.linear.app/web/_next/static/chunks/` including a `main-app-*.js` chunk. (Custom asset host, not default Vercel domain.)
- **Inter Variable** webfont (confirmed via computed style).
- **Framer Motion** for animation/scroll transitions (strongly indicated by community rebuilds and the enter/leave behavior; the canonical "rebuilding-linear.app" project uses Next.js + Tailwind + Framer Motion).
- Tailwind-style utility CSS likely (community consensus; not directly verified in DOM).
- No `__NEXT_DATA__` legacy script and no generator meta — consistent with App Router RSC output.

## Notable Techniques (steal-worthy)
- **Interactive product replicas as hero/section media** — demo the actual UI live in the page instead of static screenshots; it proves the product is fast and real.
- **Two-tone single-heading emphasis** — bright first clause + dimmed continuation in one H2, no second font/color needed.
- **Numbered chapter IA (1.0–5.0 with 1.1/1.2 sub-tabs)** that maps 1:1 to the product's own workflow — the site *is* a product tour.
- **Monochrome discipline**: kill brand color in the chrome, let it appear only inside product UI, so color = "the product," not "decoration."
- **Blueprint annotations** ("FIG 0.2", mono labels) for an engineered, technical tone.
- **Accessibility baked in**: skip-nav link first, proper roles (listbox/option/combobox/region "Notifications").

## What to steal for a personal portfolio
- Go monochrome-with-restraint: black/near-black canvas, one variable font (Inter), and reserve any color for the *work itself* (project thumbnails, demos).
- Replace static project screenshots with one *interactive* mini-demo — even a single live component sells "I build real things" far harder than an image.
- Use the two-tone heading trick to create hierarchy with zero extra assets: white lead clause, gray supporting clause.
- Structure the page as a numbered narrative (00 → 05) so scrolling feels like a guided tour, not a list.
- Keep marketing copy sparse and confident; let density live in the demo, not the prose.
- Add a skip-nav link and proper ARIA roles — cheap polish that signals craft.

## Screenshots
- shots/linear/01-hero.png
- shots/linear/02-mid.png
- shots/linear/03-lower.png
- shots/linear/04-full.png
