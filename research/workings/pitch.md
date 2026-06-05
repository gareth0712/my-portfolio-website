---
name: Pitch
url: https://pitch.com/
slug: pitch
category: uiux
industry: saas
reachable: true
---

# Pitch

**One-liner:** A confident, brand-saturated SaaS marketing site that turns the product's own value prop (beautiful slides) into the website's visual language — gradient-drenched, motion-forward, and shipped entirely on Framer.

## Overview
Pitch.com is the marketing home for an AI-powered presentation workspace ("4M+ teams"). The site sells a creative-but-businesslike tool, so it has to look polished without feeling frivolous. The execution is a saturated deep-purple/indigo brand world with a live, interactive AI-prompt input embedded directly in the hero — letting you type a deck prompt before you even sign up. Overall impression: premium, opinionated, and product-led; the homepage demonstrates the product's output (stunning gradient slides) rather than just describing it.

## Layout & Information Architecture
Single long-scroll landing page with clearly chaptered sections, each introduced by a small eyebrow/kicker label (e.g. "THE PAYOFF") above a large section headline:
1. Hero — animated headline + embedded AI prompt box + social proof line
2. "Pitch is your presentation workspace" — 4-up feature pillars (Make stunning slides / Pitch like a pro / Showcase your brand / Stay in control)
3. "From first draft to closed deal" — 3-step Create / Collaborate / Deliver narrative
4. Testimonial wall — dense grid of pull-quotes ("Trusted by 4M+ teams")
5. "A complete presentation toolkit" — 7 feature tiles (AI Agent, Slide editor, Viewer analytics, Pitch rooms, Brand library, Team organization, Unrivaled visuals)
6. Integrations grid (Unsplash, Notion, Slack, HubSpot, Calendly, Figma)
7. "Pitch is for people who mean business" — tabbed audience segmentation (Software companies / Creative agencies / Leading brands / Freelance designers)
8. Templates gallery (Marketing, etc.) + footer
IA is wide and generous: lots of whitespace on the alternating feature rows (left text / right product mockup), but the testimonial wall deliberately goes dense to convey scale. Strong rhythm of "claim → product screenshot proof" repeated down the page.

## Navigation
Sticky top nav on a solid deep-purple bar that stays pinned through scroll (logo persists, mockups scroll behind it). Standard horizontal mega-style nav: Product / Use Cases / Templates / Resources / Pricing, each a dropdown (caret). Right side splits auth: a pill "Log in" with a right-arrow microinteraction and a high-contrast lime-green "Sign up" button — the single loudest color on the page, used sparingly as the primary conversion magnet. A dismissible top announcement banner ("Introducing Pitch Agent") sits above the nav.

## Typography
- Sans-serif system/Framer-served stack (computed `font-family` resolves to generic `sans-serif`; visually a geometric humanist sans similar to the Inter/GT-style families common on Framer sites).
- Massive display scale: the hero H1 computes to **180px** — genuinely poster-sized.
- Signature treatment: the hero headline renders with letters spaced apart ("C r e a t e   s l i d e s   t h a t   w i n .") in the DOM, indicating an animated letter-spacing / per-character stagger that resolves on load.
- Clear three-tier hierarchy: oversized display H1 → mid-weight section H2s (~bold, dark indigo) → calm grey body copy at comfortable measure (~40–45ch). Section kickers are small, uppercase, tracked-out labels.

## Color & Theme
- Light theme overall (white `rgb(255,255,255)` body) but framed by a dominant **deep purple / indigo** brand (nav bar, hero background, gradient mockups).
- Hero is a rich purple gradient field with blurred slide thumbnails floating behind — the background itself sells "beautiful decks."
- Accent: vivid **violet/blue** for inline headings + icons; the lone **lime-green** CTA provides maximum contrast against purple (a classic complementary pop).
- Heavy use of soft multi-stop gradients (purple→pink→blue) inside product mockups and section panels — directly mirroring the gradient slide aesthetic the product generates.

## Imagery / Media
- Primary imagery = high-fidelity product UI mockups (the Pitch editor) shown in soft rounded "device" frames with dashed selection guides and floating collaborator avatars (e.g. "Emily, Head of marketing" presence badge) to imply real-time collaboration.
- Mentions high-res video and animations inside decks; mockups appear to include motion/looping previews.
- Brand/integration logos (Notion, Slack, Figma, HubSpot, Calendly, Unsplash) in a tidy grid.
- Art direction is consistent: every screenshot is wrapped in the same purple-gradient halo so product shots feel like part of one continuous brand surface.

## Motion & Interaction
- Hero headline letter-spacing/stagger reveal on load (letters animate from spread-out to set).
- Embedded interactive AI prompt box in the hero — a real textbox with "Prompts" / "More features" / disabled-until-typed "Generate" button; turns the hero into a try-before-signup moment rather than a static banner.
- Floating, parallaxing slide thumbnails behind the hero gradient.
- Hover microinteractions: arrow nudge on "Log in", button state changes; feature tiles and quote cards are individually clickable/hover-active (`clickable [onclick]` on nearly every card).
- Testimonial wall likely auto-scrolls/marquees given its volume of cards.
- Tabbed audience switcher ("Software companies / Creative agencies / ...") swaps content in place.
- Per Framer, scroll-triggered reveal/appear animations on section entry are standard and consistent with the kicker-then-headline rhythm.

## Tech / Stack (if known)
- **Framer** — confirmed: `<meta name="generator" content="Framer c9c30df">` and `[data-framer-component-type]` nodes present. Not Next.js (`__NEXT_DATA__` false), no `#__next`.
- Framer's own runtime handles animation, scroll effects, responsive variants, and CSS-variable theming (body bg is driven by a Framer design token: `var(--token-9f3d2b7e-...)`).
- Implication: the entire marketing site is no-code/low-code on Framer, while the actual app lives at app.pitch.com (separate stack).

## Notable Techniques (steal-worthy)
- Product-as-hero-background: the hero gradient IS a demo of the output — the medium is the message.
- Live, embedded product input in the hero (AI prompt box) to convert curiosity into action before signup.
- Animated per-character headline reveal at poster scale (180px H1).
- Single high-contrast accent (lime-green) reserved exclusively for the primary CTA against an otherwise monochromatic purple system.
- Uniform "gradient halo" framing on every product screenshot so disparate UI shots read as one cohesive brand surface.
- Eyebrow-kicker + giant headline rhythm to chapter a long page.
- Collaborator presence badges layered on mockups to visually prove "real-time collaboration."

## What to steal for a personal portfolio
- **Make the hero demonstrate, not describe.** Pitch shows beautiful output as the background; a portfolio hero could render an actual interactive artifact of your work instead of a stock image.
- **One loud accent, everything else restrained.** Pick a single high-contrast CTA color and let it own all conversion actions; keep the rest monochromatic for instant focus.
- **Poster-scale type with a load animation.** An oversized H1 (even 120–180px) with a letter-spacing/character stagger reveal feels premium and costs little.
- **Kicker + headline chaptering** gives a long scroll structure and pacing without heavy nav.
- **Consistent media framing.** Wrap every screenshot in the same frame/halo so a mixed portfolio of projects reads as one designed system.
- **Framer is a legit shipping path** for a portfolio if you want this level of motion polish without hand-coding it.

## Screenshots
- shots/pitch/01-hero.png
- shots/pitch/02-mid.png
- shots/pitch/03-lower.png
- shots/pitch/04-full.png
