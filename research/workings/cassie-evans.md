---
name: Cassie Evans
url: https://www.cassie.codes
slug: cassie-evans
category: portfolio
industry: awwwards
reachable: true
---

# Cassie Evans

**One-liner:** The definitive "show, don't tell" developer portfolio — built by a GreenSock (GSAP) core team member, it weaponizes SVG + physics-based motion so the site itself is the strongest proof of skill, with zero generic stock anywhere.

## Overview
Personal portfolio/blog of Cassie Evans, a Brighton-based creative developer and educator at GreenSock (the GSAP animation library). The site is intentionally playful and craft-forward: hand-illustrated SVG scenes, a hand-drawn script logo, bouncy physics motion, and a candy-soft pastel palette. Audience is the front-end/creative-dev community plus conference organizers and clients. Overall impression: warm, witty, confident, and technically virtuosic without feeling cold or "agency slick." It reads as a person, not a brand deck.

## Layout & Information Architecture
Single long-scroll homepage divided into bold full-bleed **color-blocked sections**, each a distinct flat background that acts as a chapter marker:
- **Hero** — split layout: left ~⅓ off-white panel holds an illustrated SVG desk scene (iMac, hanging lamp, plant, mug, bookshelf); right ⅔ mint-green panel holds the intro headline.
- **Writing** — lavender/purple section, articles shown as **browser-window-style cards** (faux traffic-light dots, rounded corners, drop shadow) with source label (CSS-Tricks / Codrops / Blog) and "Read post →". Ends with a "visit my blog…" button styled as a pressed/offset hard-shadow button.
- **Speaking** — pale yellow section, talks listed as horizontal rows: small category tag on the left ("workshop"/"talk"), heading + descriptive paragraph on the right, plus a labeled thumbnail ("beyond tellerrand").
- **Footer / "Hey there!"** — return to mint with a contact CTA (email, Twitter, LinkedIn) and an organic blob shape.

Generous whitespace inside each color block; density is low and breathing — the illustrations carry the visual weight, not text walls.

## Navigation
Top-right horizontal nav: writing · speaking · workshop · playing, plus a custom **dark-mode toggle** rendered as an illustrated sliding pill (mint→yellow sun). The logo "cassi[e]" (hand-drawn script) sits top-left and links home. Nav labels carry a triple-repeat hover/aria pattern ("writing writing writing") indicating an animated scrolling-text hover effect. A "Skip to content" a11y link is present (accessibility-conscious despite the heavy motion). Anchor links jump to in-page sections (#writing, #speaking); "playing" goes out to her CodePen.

## Typography
- **Display/headings:** "Mosk" — a chunky, rounded geometric sans, very heavy weight, set large (hero H1 ≈ 57px). Gives a friendly, bubbly, confident voice.
- **Body/nav:** system UI stack (-apple-system / Segoe UI / Roboto…) — deliberately lightweight and fast, contrasting the characterful display font.
- **Accent script:** a hand-drawn/script face for the "Hi, I'm cassie" eyebrow and the logo, reinforcing the personal, illustrated brand.
- **Hierarchy treatment:** key words in the hero ("fun", "talk", "write") are rendered as **outlined/stroked text** (hollow letters) and are inline links — type doubles as both hierarchy and navigation. Heavy weight + large scale + tight grouping makes the H1 the dominant focal point.

## Color & Theme
Soft, high-saturation-but-low-contrast pastel palette, one bold flat color per section:
- Mint/seafoam green (hero + footer) — the signature brand color.
- Lavender/periwinkle purple (writing).
- Butter yellow (speaking).
- Off-white / very light grey `rgb(238,235,239)` page base.
- Charcoal `rgb(64,64,64)` for body/heading text (soft, not pure black).
Light/dark mode supported via the illustrated toggle. Accent color for raw links is default blue but most CTAs are restyled. The color-blocking IS the design system — each scroll reveals a fresh candy backdrop, making the page feel like flipping through a picture book.

## Imagery / Media
100% custom **SVG illustration** — no stock photos. Flat-design vector scenes (desk/workspace, props) hand-drawn in a consistent rounded style. Article cards are framed as faux browser windows. Talk entries use grayscale event thumbnails. ~6 inline SVGs detected, each an animation target. Art direction is cohesive: same line weight, same rounded corners, same pastel fills throughout — the illustration language and the color blocks are one unified system.

## Motion & Interaction
This is the centerpiece. Loaded plugins reveal the intended choreography:
- **DrawSVGPlugin** — line-drawing reveal of SVG paths (logo and scene illustrations draw themselves on load).
- **CustomBounce / CustomWiggle / CustomEase** — bespoke springy, overshooting, wobbly easing curves (the hanging lamp swings, elements bounce in) — motion has weight and personality, not linear tweens.
- **Physics2DPlugin** — gravity/velocity-based motion (the "✏️ ✏️ ✏️" pencil bursts in the H1 read as a particle/confetti explosion of emoji).
- **Draggable** — pick-up-and-throw interactivity on scene elements.
- **ScrollTrigger** — scroll-linked reveals as each color section enters the viewport.
- **Hover microinteractions** — nav labels animate (triple-text scroll), buttons use a hard-offset "pressable" shadow, outlined hero words invite clicks.
Net effect: the page feels alive, tactile, and toy-like — every element wants to be poked.

## Tech / Stack (if known)
- **SSG:** Eleventy (11ty) — confirmed via search; static, fast.
- **Animation:** GSAP 3.6.0 + premium club plugins (DrawSVG, CustomBounce, CustomWiggle, CustomEase, Physics2D, Draggable) + ScrollTrigger. Self-hosted plugin files (`/js/*.min.js`), GSAP core from cdnjs.
- **Content:** hand-authored SVG, system-font body for performance, single `main.js`.
- **Third-party:** Twitter widgets (platform.twitter.com).
- No heavy framework — vanilla JS + GSAP on top of static HTML, which is why it stays snappy despite the motion density.

## Notable Techniques (steal-worthy)
- **Color-blocked section chapters** — one bold flat pastel per section as the entire navigation/wayfinding system; no dividers needed.
- **Type-as-navigation** — outlined/hollow keywords inside the H1 are the actual links ("fun"→CodePen, "talk"→#speaking, "write"→#writing).
- **Illustrated UI chrome** — articles framed as faux browser windows, dark-mode as an illustrated sun-slider toggle, buttons with hard-offset pressable shadows.
- **Physics-driven emoji confetti** (Physics2DPlugin) on the headline — playful particle burst tied to copy.
- **Self-as-proof** — for a motion specialist, the site's own GSAP choreography is the portfolio; no "see my work" gallery needed.
- **Custom springy easing** (CustomBounce/Wiggle) so nothing moves linearly — every transition has weight and overshoot.
- **A11y under heavy motion** — skip link + aria labels retained despite being animation-heavy.

## What to steal for a personal portfolio
- Pick ONE signature craft (here: SVG motion) and make the site itself the demo of it — don't describe skill, perform it.
- Use **flat color-blocked full-bleed sections** as both structure and brand — cheap to build, instantly memorable, no imagery budget needed.
- Make **keywords in your hero clickable** and visually distinct (outline/stroke) so the headline doubles as primary nav.
- Build a **cohesive custom illustration set** in one consistent line/color style instead of buying stock — it's the single biggest "this is a real person" signal.
- Pair a **characterful display font** (Mosk-style chunky rounded sans) with a **system body font** — personality where it counts, speed everywhere else.
- Add **physics/springy easing** (overshoot, bounce, wiggle) to a few key reveals so motion feels alive rather than slick-corporate.
- Keep it on a **static SSG (11ty/Astro)** so all that motion still loads fast.

## Screenshots
- shots/cassie-evans/01-hero.png
- shots/cassie-evans/02-mid.png
- shots/cassie-evans/03-lower.png
- shots/cassie-evans/04-full.png
