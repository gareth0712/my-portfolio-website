---
name: Adham Dannaway
url: https://www.adhamdannaway.com
slug: adham-dannaway
category: portfolio
industry: design-engineer
reachable: true
---

# Adham Dannaway

**One-liner:** One of the most-copied personal-portfolio hero ideas on the web — a single self-portrait split down the centre, illustrated "designer" half meeting photographic "<coder>" half, instantly communicating a dual identity in one glance with near-zero copy.

## Overview
The portfolio of Adham Dannaway, a product/UI designer and front-end developer (author of the *Practical UI* book and a Figma design system). The site's entire job is to say "I am two things at once — designer AND developer" and it does so with one image, not a paragraph. Awwwards Honorable Mention. Despite the polished look, it is a humble WordPress site with a hand-built custom theme — the impact comes from one strong creative concept executed cleanly, not from a heavy tech stack. Audience: design/dev hiring managers, recruiters, and design-curious readers funneled toward his book and design system.

## Layout & Information Architecture
Single-screen hero that fills the first viewport, then a short scroll to one "SOME OF MY LATEST WORK" section (3-card grid) and a minimal footer. The IA is deliberately shallow — the homepage is a launch pad, not a destination. Deep content lives in dedicated pages (about, learn, portfolio, blog, contact).

Hero composition is a strict three-column symmetry:
- Left column: `designer` heading + one-line descriptor, right-aligned toward the face.
- Center column: the split self-portrait as the literal axis of the page.
- Right column: `<coder>` heading + one-line descriptor, left-aligned toward the face.

Generous whitespace, low density, large type. Everything is centered/balanced around the portrait. The work grid below uses 3 equal cards with real product UI thumbnails (status pills, a book mockup, a betting-app card) rather than abstract placeholders.

## Navigation
Top sticky/fixed dark bar with circular monogram logo (A/D mark) on the left, a compact horizontal text nav center-right (about · learn · portfolio · blog · contact), and social icons (Twitter, LinkedIn, Facebook, Instagram) far right. Lowercase nav labels for a friendly, understated tone. The same five nav links repeat in the footer, plus a circular "back to top" chevron button anchored to `#top`. No hamburger on desktop; wayfinding is trivial because the site is shallow.

## Typography
- **Proxima Nova** throughout — `proxima nova bold` for the `designer` / `<coder>` H1s, `proxima nova light` for body, falling back to Helvetica Neue / Arial.
- Strong scale contrast: very large, heavy hero headings vs. small, light grey descriptor lines directly beneath them — classic size + weight + color hierarchy.
- The `<coder>` heading literally wraps the word in angle brackets, turning typography into iconography (the same word would read as plain text without them — the brackets *are* the "developer" signal).
- All-caps, letter-spaced small label for the section header ("SOME OF MY LATEST WORK") — a quiet, editorial divider.

## Color & Theme
Light theme: near-white/very-light-grey page background, dark charcoal nav bar, near-black headings, mid-grey secondary text. The page itself is intentionally desaturated and neutral so the one burst of color — the painterly left half of the portrait (teal, mustard, coral, cream brushstrokes) — owns all the attention. This is a textbook "neutral canvas + single saturated focal point" move. Accent color usage is otherwise restrained (blue link/odds text in card thumbnails). Contrast is high and accessible; the design literally demonstrates multiple kinds of contrast (illustration vs photo, color vs mono, light vs heavy type) on one screen.

## Imagery / Media
The hero is the whole identity: a head-and-shoulders self-portrait sliced vertically at the nose. Left = hand-painted/illustrated rendering (designer craft); right = a real photograph (engineer/real person). Behind/below the photo, faint HTML code (`<html>`, `height:184px;`, class names) bleeds in on the coder side, reinforcing the metaphor. The "latest work" cards use realistic, high-fidelity product screenshots (a form-validation UI with Approved/Pending/Rejected pills, the *Practical UI* book cover, a sports-betting match card) — proof-of-work imagery, not stock.

## Motion & Interaction
Motion is restrained and tasteful rather than flashy (consistent with a WordPress + jQuery build, not a WebGL showcase):
- The hero halves and headings act as two large clickable hit-areas — the `designer` side links to the portfolio, the `<coder>` side links to about. The split portrait is effectively a two-button router.
- Hover/microinteraction polish on the logo, nav links, cards, and the circular back-to-top button.
- Smooth-scroll anchoring to top. No heavy scroll-jacking, parallax, or page transitions — the concept carries the wow, not the motion. (Static screenshots fully capture the impact, which is itself a lesson: a strong idea doesn't need motion to win an Awwwards mention.)

## Tech / Stack (if known)
- **WordPress** with a hand-coded custom theme (`wp-content/themes/dannaway/`) — confirmed via `wp-content` / `wp-includes` script paths and `script.js` in the theme.
- **jQuery** (1.6 / 1.7.2) + **Modernizr 2.5.3** — classic late-2010s front-end stack, no modern SPA framework.
- **clipboard.js** for copy-to-clipboard (likely code snippets on blog/learn pages).
- **Contact Form 7** + **SiteGround Optimizer** (caching/asset optimization) — typical WP plugins.
- **Proxima Nova** webfont; **Google Analytics (gtag G-MJFDYEXZZN)** + Facebook SDK.
- No GSAP / Framer Motion / Three.js / Lenis detected. The famous effect is plain CSS + a split image asset, not a fancy animation lib.

## Notable Techniques (steal-worthy)
- **One image that states your whole value proposition.** The split portrait says "designer + developer" faster and more memorably than any tagline.
- **Turn the page's central object into the navigation.** Two halves of one picture become two CTAs (portfolio vs about) — interaction emerges from the concept.
- **Typography as iconography.** `<coder>` in angle brackets makes a word *look* like its meaning; no icon needed.
- **Neutral canvas, one saturated focal point.** Desaturate everything else so the single colorful element commands the eye.
- **Concept over tech.** An Awwwards-recognized homepage built on WordPress + jQuery proves the idea matters more than the framework.
- **Shallow homepage as launch pad.** Hero + 3 proof cards + footer; send depth to inner pages.
- **Real product screenshots as proof.** Card thumbnails show actual shipped UI, not abstract mockups.

## What to steal for a personal portfolio
- Lead with a single concept-image hero that encodes your dual/primary identity in one visual — resist the urge to explain it in a paragraph.
- Pair a big bold heading with a one-line light-grey descriptor for instant size/weight/color hierarchy; let whitespace do the rest.
- Use a neutral, near-monochrome page so one deliberate splash of color (a portrait, a key visual) becomes the unmissable focal point.
- Keep the homepage shallow: hero → a few high-fidelity "latest work" proof cards → minimal footer with repeated nav + back-to-top. Push case-study depth to inner pages.
- Make a hero element double as navigation (clickable halves / regions) so the layout itself routes the visitor.
- Don't over-engineer: a strong idea in plain CSS beats a weak idea in WebGL. Spend the effort on the concept and the portrait, not on a motion framework.

## Screenshots
- shots/adham-dannaway/01-hero.png
- shots/adham-dannaway/02-mid.png
- shots/adham-dannaway/03-lower.png
- shots/adham-dannaway/04-full.png
