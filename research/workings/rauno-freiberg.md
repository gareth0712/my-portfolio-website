---
name: Rauno Freiberg
url: https://rauno.me/
slug: rauno-freiberg
category: uiux
industry: dev-portfolio
reachable: true
---

# Rauno Freiberg

**One-liner:** A horizontally-scrolling filmstrip of museum-white cards, each treated as its own typographic poster, from one of the web's most respected interaction designers (Vercel / cmdk / Devouring Details) — proof that restraint plus obsessive detail beats flashy WebGL.

## Overview
Personal site of Rauno Freiberg, an Estonian interaction/design engineer at Vercel (author of cmdk, the "Invisible Details of Interaction Design" essay, and the Next.js website). The current rauno.me is a deliberately minimal, near-monochrome single-screen experience: a horizontal track of white panels floating on a light-grey canvas. It functions as a navigation hub — each panel is a link (Devouring Details, Craft, History of Software Design, Projects, Field Notes, socials, archive years) plus a closing manifesto. Two prior, far flashier versions are preserved as easter-egg archives at 2023.rauno.me (operating-system / dock metaphor with interface sounds) and 2022.rauno.me. The current site reads as a confident downshift: the work speaks, the chrome disappears.

## Layout & Information Architecture
- **Horizontal filmstrip**, not vertical scroll. The page is a single row of white rectangular "cards" of varying widths laid left-to-right on a `#ededed` grey field, far wider than the viewport. You scroll/drag sideways through them.
- Each card is one IA node. Observed order: Hero (name + yellow circle) → Devouring Details ("DD") → Craft → History of Software Design → Projects → Field Notes → Socials panel (Twitter / Email / 2023 / 2022 / GitHub in a 2x grid) → yellow "Make it…" manifesto closer.
- Generous grey gutters between and around cards; the negative space is the layout. Density inside each card is high-contrast (one giant word, or one image) — sparse overall, loud per-panel.
- No traditional header/footer. Navigation IS the content; the manifesto card doubles as the "footer."

## Navigation
- The cards themselves are the nav — there's no separate menu bar. 12 links total, each a destination.
- A **slider/track widget** sits at the top-center of the hero (a thumb on a ruler-tick rail) — a scrubber/progress indicator for horizontal position, echoing a timeline or filmstrip frame counter.
- Wayfinding is spatial/horizontal: you orient by which poster-word is centered. External links (Devouring Details, History of Software Design, Twitter, GitHub) leave the site; internal ones (Craft, Projects, Field Notes) are sub-pages.
- "Copy email" is a button (not a mailto) that flips to a "Copied" confirmation — a microinteraction tell.

## Typography
- **Custom sans named "X"** (loaded weights 400 + 500) is the primary face — a clean grotesque/neo-grotesque in the Helvetica/Inter family, used for everything from the 32px hero to the room-filling "Projects" / "Craft" display words.
- **JetBrains Mono 400** as the secondary/mono face (labels, code-flavored accents).
- Hand-drawn marker script for "Rauno's Field Notes" (red) — a deliberate texture break from the geometric sans, signaling a more personal/sketchbook section.
- Hierarchy is driven by **size contrast**, not weight or color: tiny card labels ("History of Software Design", "Projects") sit above enormous single-word headlines. The hero sets ragged, manually-balanced line breaks ("Rauno Freiberg / is an Estonian / interaction / designer / working with Vercel / and Devouring Details").

## Color & Theme
- **Light theme**: `#ededed` page background, pure white cards, pure black text. Near-monochrome.
- **Two saturated accents** used sparingly and to maximum effect: a flat **yellow** (`#ffff00`-ish) — once as a large circle overlapping the hero name, once as the full manifesto-card fill — and **red** for the hand-drawn Field Notes title and an accent.
- **Blue** appears only in the custom cursor (a thin crosshair + a retro pixel-art pointing-hand cursor on certain cards).
- No gradients, no shadows of note, no glass. Contrast is the entire color strategy: black-on-white, with two pops of primary color as punctuation.

## Imagery / Media
- Almost no photography on the current landing layout — imagery is **typographic**. The "media" is oversized letterforms bleeding past card edges (the "D" of Devouring Details, "Craft", "Proj…").
- Iconography is minimal: the yellow circle, the slider/ruler widget, the pixel hand cursor.
- Art direction varies per card so the strip reads like a contact sheet of distinct posters rather than a uniform grid. (The archived 2023/2022 sites carry the heavy atmospheric imagery + 3D; the current site strips it back.)

## Motion & Interaction
- **Horizontal scroll/drag** through the card track is the core interaction (likely momentum/inertia-smoothed).
- **Custom cursors**: a fine blue crosshair on the canvas, swapping to a **retro pixel pointing-hand** over interactive cards — a nostalgic, tactile signal.
- **Copy-email microinteraction**: button → "Copied" state, the kind of detail Rauno is known for.
- Per his writing and the archived sites: easing curves, interface sounds (on 2023.rauno.me), spring/physics on dock and hover are signature concerns. Even here, expect carefully tuned hover/active transitions on each card that won't show in static shots.
- The slider widget implies a draggable scrubber tied to scroll position.

## Tech / Stack (if known)
- **Next.js (Pages Router)** — confirmed via `__NEXT_DATA__`, `_next/static/chunks/...`, `pages/_app` chunk, and the React `framework` chunk.
- React. Self-hosted **custom font "X"** + **JetBrains Mono** via the font-loading API (`document.fonts`).
- Hosted on Vercel (his employer; assets served from rauno.me/_next).
- No GSAP/Framer/Lenis/Three chunk names surfaced in the quick scan — motion is likely hand-rolled CSS/JS (consistent with his "craft it yourself" ethos), though that's not exhaustively verified.
- He authored cmdk and the Next.js marketing site, and the "Stripe-style repeating-linear-gradient dotted lines + mask edge-fade" techniques he's documented are part of his toolkit.

## Notable Techniques (steal-worthy)
- Horizontal filmstrip-as-navigation: treat each nav destination as a full poster panel instead of a menu link.
- Size-only hierarchy: drop weight/color hierarchy and let one giant word per panel do the work on a white card.
- Two-accent discipline: a near-monochrome system punctuated by exactly two primary colors (yellow + red) used as rare, loud accents.
- Custom cursors as personality: crosshair on canvas, retro pixel hand over actionable cards.
- A typographic manifesto closer ("Make it fast. / beautiful. / consistent. / carefully. / timeless. / soulful. / Make it.") as the emotional payoff and de-facto footer.
- Texture break: one hand-drawn marker title amid geometric sans to humanize a single section.
- Archived past versions as live easter eggs (2023.rauno.me / 2022.rauno.me) — versioning your portfolio as a museum.
- Copy-email button with a "Copied" state instead of a raw mailto.

## What to steal for a personal portfolio
- **Reframe nav as posters.** Each section (Projects, Notes, Contact) becomes a self-contained, art-directed card with its own treatment — your IA doubles as the visual interest.
- **Commit to one accent discipline.** Pick a black-on-white base and 1–2 saturated primaries; deploy them only at moments that matter (a hero shape, a CTA, a footer manifesto).
- **Let type be the imagery.** If you lack photography/3D, oversized letterforms bleeding off panels look intentional and premium — no asset budget needed.
- **Add one signature microinteraction.** A custom cursor or a copy-to-clipboard "Copied" toast communicates craft instantly and is cheap to build.
- **Write a manifesto closer.** A short, punchy values list at the end gives the visitor a feeling to leave with — and reveals taste better than a project grid alone.
- **Keep the stack boring, the details obsessive.** Plain Next.js + self-hosted fonts + hand-tuned CSS motion; the polish is in easing and spacing, not in heavy libraries.
- **Consider horizontal scroll only if you'll tune it** — it's high-risk for usability; Rauno earns it with momentum and a scrubber. Most portfolios are safer vertical, stealing the card/typography/accent ideas instead.

## Screenshots
- shots/rauno-freiberg/01-hero.png (hero card: name + yellow circle, slider widget, crosshair cursor)
- shots/rauno-freiberg/02-mid.png
- shots/rauno-freiberg/03-lower.png
- shots/rauno-freiberg/04-full.png (full horizontal strip: Craft, pixel hand, Projects, Field Notes, socials grid, yellow "Make it…" manifesto)
