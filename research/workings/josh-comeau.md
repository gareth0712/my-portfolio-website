---
name: Josh Comeau
url: https://www.joshwcomeau.com
slug: josh-comeau
category: portfolio
industry: dev-portfolio
reachable: true
---

# Josh Comeau

**One-liner:** A developer-educator's blog that turns the homepage itself into a live demo of the whimsical, physics-driven web craft it teaches — generative art, sound, and a hundred tiny interactions, all built on a modern RSC stack with zero generic-template smell.

## Overview
joshwcomeau.com is the personal blog/portfolio of Josh W. Comeau, an indie educator (ex-Gatsby, Khan Academy, DigitalOcean) who sells premium courses (CSS for JS Devs, Joy of React, Whimsical Animations). The site is the funnel and the proof-of-skill at once: every interaction is a walking advertisement for his teaching. Overall impression is friendly, playful, hand-crafted — "delight engineering" applied end to end. It reportedly grew into a ~100k-line application despite reading as a simple blog. The audience is working front-end developers, so the bar for craft is brutal and the site clears it.

## Layout & Information Architecture
Single-column-dominant content with a generous max-width and lots of breathing room. The homepage stacks clear, labelled sections, each introduced by a small uppercase eyebrow label (ARTICLES AND TUTORIALS, BROWSE BY CATEGORY, POPULAR CONTENT, INTERACTIVE COURSES):
- Hero: full-bleed sky scene with a 3D claymation avatar sitting under a generative rainbow of dashed strokes.
- Articles feed: latest tutorials with title + summary + "Read more", paginated by a "Show more" button.
- A two-column band lower down pairs the article list (left) with a sticky "Popular content" rail (right) — classic blog list+sidebar, but spaced like a magazine.
- Category grid (CSS / React / Animation / Career / JavaScript / SVG / Next.js / General).
- Newsletter capture block.
- Course cards. Footer with sitemap, social, and theme/sound controls.
Density is low-to-medium; whitespace is the primary structuring tool. Wavy SVG "cloud" dividers separate colored bands instead of hard rules.

## Navigation
Top bar, not sticky on the homepage — logo left, dropdown-style nav buttons (Categories, Courses, Goodies) plus an About link, then a utility cluster on the right: Search, Disable/Enable sounds, Activate dark mode, RSS. The nav uses button elements for the category/course menus (mega-menu-ish dropdowns) and plain links for single destinations. A "Skip to content" link leads the DOM for a11y. Wayfinding is reinforced by the eyebrow section labels and a duplicated category/utility nav in the footer so users never have to scroll back up.

## Typography
- Body + headings: **Wotfard** (a geometric humanist sans with a friendly, rounded personality), with a `Wotfard-fallback` self-hosted fallback to avoid layout shift.
- Code blocks: **Cartograph CF** (Connary Fagen) — a "whimsical" mono that matches the playful tone.
- Hierarchy is driven by weight + size + the pink/magenta uppercase, letter-spaced eyebrow labels rather than by many type sizes. Article titles are bold and large; body copy is comfortable, high-line-height, long-form-reading optimized.

## Color & Theme
- Light mode: soft sky-blue gradient background fading to white, with layered paler-blue wave shapes — airy and optimistic.
- Accent: a vivid magenta/pink (used for eyebrow labels and the logo's "Comeau") paired with the indigo "Josh", giving a gradient-brand wordmark.
- The hero rainbow is a multi-hue indigo→purple→pink→red dashed arc — the site's signature splash of saturated color against the pastel field.
- First-class **dark mode** (toggle in nav and footer) — Josh literally wrote the canonical "Perfect Dark Mode" article; the implementation is flicker-free, persisted, and theme-token driven.
- Contrast on body text is strong (near-black on white); accents are decorative, not load-bearing for legibility.

## Imagery / Media
- 3D **claymation-style avatar** of Josh (rendered, soft-shadowed, slightly squishy) appears in hero and footer — in the footer it hangs upside-down off a wave, a delightful Easter egg.
- **Generative art** hero: a procedural dashed-stroke rainbow that the visitor can re-roll/edit via an "Edit the generative art" button — interactive, not a static image.
- SVG wave/cloud dividers as art direction between sections.
- Seasonal touches (e.g. "Happy Pride month!" with flag in footer) show the site is hand-tended, not set-and-forget.
- Minimal photography; illustration + 3D render + generative graphics carry the visual identity.

## Motion & Interaction
This is the site's whole thesis. From search + DOM evidence:
- **Sound design**: a global "Disable sounds" toggle implies UI interactions emit audio feedback (rare on the web, a strong delight signal).
- **Editable generative art** in the hero — user-driven re-generation.
- The "Sneaky Header Blocker Trick" (his own article) is implemented on the site: a UI detail that masks content sliding under the header so it disappears cleanly — a flourish most visitors never consciously notice.
- Theme toggle animates smoothly between light/dark with no flash of wrong theme.
- His course/teaching corpus (Whimsical Animations, scroll-driven animations, squash-and-stretch, spring physics) is reflected in the site's microinteractions: spring-based motion, hover playfulness, and physical easing rather than linear transitions.
- Hover states on cards/links and the claymation avatar's expression details reward attention.

## Tech / Stack (if known)
- **Next.js (App Router)** + **React Server Components**.
- **Linaria** for styling (via `next-with-linaria`) — zero-runtime CSS compiled to CSS Modules, RSC-compatible (chosen over styled-components specifically to drop the runtime).
- **MDX** for content authoring with interactive embedded widgets/playgrounds.
- **Shiki** for compile-time syntax highlighting (RSC-friendly).
- **MongoDB** for dynamic data (e.g. newsletter, reactions).
- Self-hosted fonts (Wotfard, Cartograph CF) with custom fallbacks.
- Honeypot anti-spam ("Are you a human? If so, please ignore this checkbox") on the newsletter form.

## Notable Techniques (steal-worthy)
- Make the homepage a live demo of your craft — every interaction sells the skill better than a portfolio grid.
- Generative, re-rollable hero art instead of a static banner.
- Sound feedback as an optional, toggleable delight layer.
- Uppercase letter-spaced "eyebrow" labels to structure sections without heavy headings.
- SVG wave dividers + layered pastel bands for organic section separation.
- Gradient two-tone wordmark (indigo + magenta) as a memorable brand mark.
- Footer Easter egg (upside-down avatar) + seasonal copy to signal a hand-tended site.
- Zero-runtime CSS (Linaria) + compile-time syntax highlighting (Shiki) for RSC-era performance.
- Honeypot checkbox for spam-free forms without CAPTCHA friction.

## What to steal for a personal portfolio
- **Prove, don't claim.** If you build delightful UIs, the site itself must be the showcase. Pick 2-3 signature interactions and polish them obsessively rather than scattering many half-baked ones.
- **One interactive hero element** (generative art / a toy / an editable widget) beats a static headshot.
- **Eyebrow labels + generous whitespace** give a clean, scannable IA cheaply — no heavy framework needed.
- **First-class dark mode done right** (no flash, persisted, token-based) is table stakes for a dev audience and a credibility signal.
- **Self-host distinctive fonts with fallbacks** to get personality without CLS.
- **Add one or two Easter eggs** (footer surprise, seasonal copy) — they make the site feel alive and human.
- **Modern stack choices** (Next App Router + RSC + zero-runtime CSS) double as portfolio evidence of current best practices.

## Screenshots
- shots/josh-comeau/01-hero.png
- shots/josh-comeau/02-mid.png
- shots/josh-comeau/03-lower.png
- shots/josh-comeau/04-full.png
