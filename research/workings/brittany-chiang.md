---
name: Brittany Chiang
url: https://brittanychiang.com
slug: brittany-chiang
category: portfolio
industry: dev-portfolio
reachable: true
---

# Brittany Chiang

**One-liner:** The reference-standard developer portfolio — a restrained dark, split-screen, single-page site whose every detail (active-section nav, spotlight cursor, accessible markup) is executed with pixel-perfect precision, making it the most-cloned dev portfolio on the internet.

## Overview
Personal portfolio for Brittany Chiang, a senior frontend engineer (accessibility focus, currently at Klaviyo). It is a content-dense single page that doubles as a living résumé: about blurb, work experience timeline, selected projects, and writing. The impression is "calm engineering" — no hero gimmickry, no marketing fluff, just confident typography on a near-black canvas with one teal accent. It reads as proof-of-competence rather than self-promotion. This is the current (v5-era) Next.js iteration, distinct from the famous open-source v4 Gatsby build.

## Layout & Information Architecture
- **Split-screen two-column layout** on desktop: left column is a fixed/sticky "header" panel (name, role, tagline, in-page nav, social icons); right column is the scrolling content. This is the signature move — the identity stays pinned while content flows past.
- Content sections in order: **About → Experience → Projects → Writing**, each a labeled `region` with an ARIA heading.
- Experience and Writing use a **two-sub-column row pattern**: a muted date range on the left, role/title + description + tech pills on the right.
- Generous vertical rhythm; wide left gutter. Density is moderate — long-form prose paragraphs balanced by scannable pill tags and dated rows.
- On mobile the two columns collapse to a single stacked flow (sticky header becomes a top block).

## Navigation
- **In-page jump-link nav** (ABOUT / EXPERIENCE / PROJECTS) living in the fixed left column — not a top bar.
- **Active-section indicator via scroll-spy**: the current section's label brightens and its leading horizontal rule extends/thickens as you scroll (IntersectionObserver-driven). Strong wayfinding with almost no chrome.
- "SKIP TO CONTENT" link as the first focusable element — accessibility-first.
- No hamburger, no mega-menu. External links (GitHub, LinkedIn, CodePen, Instagram, Goodreads) sit as icon row in the left column.
- Easter egg: a **"Click to time travel" spinning Tardis button** (Doctor Who) that links to previous site versions — playful personality without disrupting the serious tone.

## Typography
- **Inter** (rsms.me/inter) for everything — explicitly credited in the footer. Variable font, loaded via `next/font`.
- Large heavy display weight for the name H1 (≈48–56px, bold), stepping down to a medium H2 role line, then a quiet body tagline.
- Body copy is set in a muted slate gray for low-contrast comfort; headings and hovered/active items jump to near-white for emphasis.
- Tech-stack pills use small-caps-ish uppercased micro-labels; section nav labels are uppercase tracked-out small text. Clear three-tier hierarchy: display name / section labels / body.

## Color & Theme
- **Dark only.** Background is Tailwind `slate-900` (`rgb(15,23,42)` / `#0f172a`); body text is `slate-400` (`rgb(148,163,184)` / `#94a3b8`).
- Single **teal/green accent** (~`teal-300/400`) used sparingly: link hovers, tech pills (translucent teal bg + teal text), and the active-nav highlight.
- High restraint — essentially a two-color system (slate + teal) plus white for emphasis. No competing colors.
- The accent does double duty as the spotlight glow tint, keeping the palette cohesive.

## Imagery / Media
- **Minimal imagery** — the site is typographic. The only images are small project/writing thumbnails (e.g. Spotify Profile, Halcyon theme, blog post cards) shown as compact rounded rectangles in the right column.
- No hero photo, no portrait, no large art. The "art direction" is the layout and motion itself.
- Favicon-scale icon set for socials; the Tardis is a tiny decorative sprite in the corner.

## Motion & Interaction
- **Mouse-following spotlight**: a large radial-gradient glow tracks the cursor across the dark background (confirmed: `radial-gradient` present in DOM, updated via mouse position). Subtle, low-opacity — adds depth without distraction.
- **Experience/project row hover**: the whole card lifts/brightens — the hovered row's title goes teal and a faint card background appears, while sibling rows dim slightly (focus-by-contrast).
- **Scroll-spy nav**: active section label brightens + its rule animates wider (smooth transition).
- External-link arrows nudge on hover (the `↗` glyph translates up-right).
- Respects reduced-motion conventions; nothing is gratuitous. The whole motion language is "quiet competence" — micro-interactions over showy scroll-jacking.

## Tech / Stack (if known)
Confirmed from footer credit + DOM:
- **Next.js** (App Router era; `next/font` for Inter — computed family shows `__inter_*` hashed font classes)
- **Tailwind CSS** (slate palette, utility classes throughout)
- **Vercel** (hosting/deploy)
- **Inter** variable font
- Designed in **Figma**, coded in **VS Code** (per footer)
- Spotlight/scroll-spy are hand-rolled React (mouse-move + IntersectionObserver) rather than a heavy animation lib — no GSAP/Three.js needed.
- Note: the older, hugely popular open-source version is **v4 (Gatsby + styled-components)** at github.com/bchiang7/v4 (8k+ stars) — the current site is a separate Next.js rebuild.

## Notable Techniques (steal-worthy)
- **Fixed identity column + scrolling content** — keeps name/role/nav always visible, zero top-bar clutter.
- **Scroll-spy nav with an animated rule** that grows on the active section — elegant wayfinding from a single horizontal line.
- **Cursor-tracking radial spotlight** on a dark bg — cheap to build, high perceived polish.
- **Dim-siblings-on-hover** focus pattern for list/timeline rows.
- **Two-color discipline** (slate + one teal accent) — proves restraint reads as senior.
- **Accessibility as a feature**: skip-link, semantic `region`/heading landmarks, "opens in a new tab" labels — and it's marketed as a selling point (she's an a11y engineer).
- **Playful Easter egg (Tardis time-travel)** that injects personality without breaking the minimalist tone.

## What to steal for a personal portfolio
- Adopt the **split-screen sticky-left / scroll-right** layout — it solves "where does the nav go" and keeps your name on screen the entire visit.
- Build a **scroll-spy in-page nav** with IntersectionObserver; animate the active item with a growing underline/rule rather than a heavy highlight.
- Use a **single accent color on a dark slate base** — pick one accent, use it for hovers + tags + the spotlight tint, and nothing else.
- Implement the **mouse spotlight** with one absolutely-positioned radial-gradient div updated on `mousemove` — instant "premium" feel, ~20 lines.
- Structure experience/projects as **date-left / detail-right rows with tech pills**; add **dim-siblings hover** for focus.
- Lean on **Inter via `next/font`** + a strict 3-tier type scale (display name / uppercase section labels / muted body).
- Ship **a11y basics** (skip link, landmarks, new-tab labels) — it's low effort and signals craft.
- Add **one small, on-brand Easter egg** to show personality.

## Screenshots
- shots/brittany-chiang/01-hero.png
- shots/brittany-chiang/02-mid.png
- shots/brittany-chiang/03-lower.png
- shots/brittany-chiang/04-full.png
