# TOP-LIST — A Curated Guide to World-Class Frontend / UI-UX

A hand-picked atlas of the best frontend and UI/UX websites on the public web, grouped by industry. Every entry is backed by a first-hand teardown in [`workings/`](./workings/) — these are not "sites we like the look of," they are sites we pulled apart at the DOM, stack, and motion level.

## What "world-class UI/UX" means here

It is **not** "the most animations." Across 50+ teardowns the same truth recurs: elite sites win on **restraint, craft, and intent**, not maximalism. Concretely, world-class means:

- **One idea, executed flawlessly** — a single signature move (a cursor, a gradient, one 3D hero) instead of ten competing effects.
- **The site proves the pitch** — dev studios render real-time WebGL; design tools dogfood themselves; SaaS embeds live interactive product, not screenshots.
- **Typography does the heavy lifting** — bespoke or carefully-licensed display faces, aggressive tracking, oversized hierarchy. Type is the brand.
- **Motion has a budget** — buttery, weighty scroll (Lenis), purposeful GSAP/ScrollTrigger, and the discipline to *not* animate when stillness is stronger.
- **Performance is part of the design** — workers, scroll-scrubbed video over JS frames, lazy WebGL. Beauty that stays jank-free.

## How to use this list

1. Start with the **Hall of Fame** below — 10 sites that teach the most per minute.
2. Browse by **industry** to find references for the kind of thing you're building.
3. For any site, open its teardown (`workings/<slug>.md`) for the stack, IA, motion system, and "what to steal."
4. Read the **Cross-cutting signatures** section last — it's the meta-pattern that ties the elite tier together.

> Note: a few luxury/commerce sites (Gucci, Aēsop, SSENSE) are marked `reachable: false` — their bot-defense perimeters blocked live automated capture, so those teardowns are reconstructed from design-award reviews and documented facts rather than a fresh DOM snapshot.

---

## Hall of Fame — study these first

| # | Site | Why it's essential |
|---|------|--------------------|
| 1 | **Bruno Simon** | The most-referenced 3D portfolio ever — a drivable open-world WebGL game as a résumé. Proof that *one* signature mechanic beats ten scroll tricks. |
| 2 | **Stripe** | The reference fintech site: a WebGL gradient that became a design meme, wrapped in ruthless motion discipline and a custom typeface. |
| 3 | **Linear** | The dark-mode SaaS benchmark — surgical type, near-zero chrome, and *live interactive product replicas* embedded in the page. |
| 4 | **Apple** | The definitive restraint reference — scroll-scrubbed canvas/video frame sequences turn hardware into hero objects without clutter. |
| 5 | **Igloo Inc** | A fully WebGL, scroll-scrubbed 3D experience (an igloo assembling as you scroll). Webby + Awwwards-grade scroll storytelling. |
| 6 | **Locomotive** | 7× Awwwards Agency of the Year — proves a framework-free, near-monochrome site goes world-class on custom type + Three.js + Lenis alone. |
| 7 | **Mercury** | Redefined fintech by treating a bank like a luxury brand — variable typeface, cinematic near-black, levitating metal card. The new copy-target. |
| 8 | **Teenage Engineering** | Product-as-hero art direction at its purest — cinematic photography on black, Swiss grid, a custom pictographic nav that's itself a design artifact. |
| 9 | **Rauno Freiberg** | Proof that restraint + obsessive interaction detail (easing, sound, spring physics) beats flashy WebGL. A masterclass in the small stuff. |
| 10 | **Family** | How to make an intimidating category friendly — neutral interface + one bold element (hand-drawn mascots) + Awwwards-grade micro-interactions. |

---

## Creative Studios & Agencies

The genre where "the site is the portfolio." Expect restraint-as-flex, custom scroll engines, and a single proof-of-craft hero.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| 14islands | https://14islands.com/ | Editorial WebGL with near-monochrome calm; authors the very tooling (r3f-scroll-rig) others copy | Asymmetric editorial grid + Lenis-driven scroll-synced WebGL | [workings/14islands.md](./workings/14islands.md) |
| Cuberto | https://cuberto.com/ | Reference-grade agency polish from motion craft, not visual clutter | Open-sourced physics-based `mouse-follower` custom cursor | [workings/cuberto.md](./workings/cuberto.md) |
| Locomotive | https://locomotive.ca/ | 7× Awwwards Agency of the Year; framework-free yet world-class | Three.js scroll-synced 3D team models (Polycam→Blender→Mixamo) | [workings/locomotive.md](./workings/locomotive.md) |
| Hello Monday | https://www.hellomonday.com/ | Awwwards Agency + Site of the Year, FWA Hall of Fame | Persistent curved-black SVG nav rail + Clarendon serif + line art | [workings/hello-monday.md](./workings/hello-monday.md) |
| Obys Agency | https://obys.agency/ | Swiss/neo-grotesque discipline over deep custom engineering | Bespoke sync-scroll work index + WebGL hover-bloom previews | [workings/obys-agency.md](./workings/obys-agency.md) |
| Basement Studio | https://basement.studio/ | "We make cool shit that performs" proven in the first second | Real-time 3D "basement" room on an OffscreenCanvas worker thread | [workings/basement-studio.md](./workings/basement-studio.md) |
| Refokus | https://refokus.com/ | Most-awarded Webflow agency — platform constraints are no excuse | Blur-to-focus scroll typography + WebGL/GSAP on a no-code CMS | [workings/refokus.md](./workings/refokus.md) |
| Studio Freight / Darkroom | https://darkroom.engineering/ | Ships the scroll libs (Lenis, Hamo, Tempus) and proves them on itself | 4-way theme switcher (dark/light/red/simple); CRT-mono editorial | [workings/studio-freight-darkroom.md](./workings/studio-freight-darkroom.md) |
| Dept Agency | https://www.deptagency.com/ | Swiss-grid brutalism projecting absolute confidence | One screaming headline + single orange accent + full-bleed video | [workings/dept-agency.md](./workings/dept-agency.md) |
| Buzzworthy Studio | https://buzzworthystudio.com/ | Sells creativity by *being* the demo reel | Breathing WebGL blob reused as a navigation motif | [workings/buzzworthy-studio.md](./workings/buzzworthy-studio.md) |
| Antinomy Studio | https://antinomy.studio/ | Awwwards SOTD on a 2-colour palette — restraint as a flex | Full-bleed media reveals + buttery Lenis scroll + WebGL | [workings/antinomy-studio.md](./workings/antinomy-studio.md) |
| Off Menu | https://offmenu.design/ | AI-native studio; the site demos the "agentic interface" it sells | Physics-orbit of circular project mockups + embedded AI chat hero | [workings/off-menu.md](./workings/off-menu.md) |

---

## SaaS & Dev Tools

The discipline of "show, don't tell" — live interactive product replaces stock imagery, and the tool frequently builds its own marketing site.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Linear | https://linear.app/ | The dark-mode SaaS benchmark | Live, interactive in-browser product replicas (real DOM, not images) | [workings/linear.md](./workings/linear.md) |
| Vercel | https://vercel.com/ | Restraint + live demos do the work of gradients and stock imagery | Geist type with aggressive negative tracking; product *is* the content | [workings/vercel.md](./workings/vercel.md) |
| Figma | https://www.figma.com/ | Dogfoods its own product — the page is a live multiplayer canvas | Animated collaborative cursors with name tags as brand signature | [workings/figma.md](./workings/figma.md) |
| Framer | https://www.framer.com/ | Makes a no-code builder feel like a premium creative instrument | Scroll-pinned "theater": sticky labels, transitioning product mockups | [workings/framer.md](./workings/framer.md) |
| Spline | https://spline.design/ | The homepage *is* the product demo | Live, orbit-able real-time WebGL scenes on a black canvas | [workings/spline.md](./workings/spline.md) |
| Rive | https://rive.app/ | Every section proves the pitch instead of describing it | Embedded live `.riv` canvases rendering the product itself | [workings/rive.md](./workings/rive.md) |
| Pitch | https://pitch.com/ | Turns the product's value prop (beautiful slides) into the site's language | Gradient-drenched, per-character letter-spacing stagger on load | [workings/pitch.md](./workings/pitch.md) |
| Arc Browser | https://arc.net/ | Rejects the clean-SV-SaaS playbook for print-magazine warmth | Custom serif + scalloped section dividers + 3D wireframe arc graphic | [workings/arc-browser.md](./workings/arc-browser.md) |
| Things (Cultured Code) | https://culturedcode.com/things/ | A calm to-do app's site practices what it preaches | Anti-motion: jQuery/CSS only; whitespace and stillness as the craft | [workings/things-cultured-code.md](./workings/things-cultured-code.md) |

---

## Hardware & Product

Product-as-hero art direction. The photograph *is* the interface; motion stays out of the way.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Apple | https://www.apple.com/ | The definitive restrained, product-first reference | Scroll-driven canvas frame-sequence / scroll-scrubbed video | [workings/apple.md](./workings/apple.md) |
| Teenage Engineering | https://teenage.engineering/ | Product-as-hero art direction at its purest | Custom pictographic nav system + Swiss grid + cinematic photography | [workings/teenage-engineering.md](./workings/teenage-engineering.md) |
| Nothing | https://nothing.tech/ | Turns a Shopify store into a brand experience | Dot-matrix type + parenthetical letter-spaced naming `phone ( 3 )` | [workings/nothing.md](./workings/nothing.md) |
| Opal Tadpole | https://opalcamera.com/opal-tadpole | Restraint and art direction replace heavy motion | One cinematic top-down photo field + a slim parallax manifesto column | [workings/opal-tadpole.md](./workings/opal-tadpole.md) |

---

## Fashion & Luxury

Restraint-as-luxury. Near-invisible chrome, full-bleed editorial imagery, and tracking-heavy wordmarks.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Bottega Veneta | https://www.bottegaveneta.com/ | Product photography carries the entire experience, zero flourish | Wide evenly-tracked capital wordmark; near-zero chrome | [workings/bottega-veneta.md](./workings/bottega-veneta.md) |
| Gucci | https://www.gucci.com/ | Negative space + brand mythology + a hardened luxury commerce stack | Generous whitespace, full-bleed editorial, invisible UI chrome | [workings/gucci.md](./workings/gucci.md) |

---

## Ecommerce

DTC and retail done with editorial-minimalist restraint — art direction and merchandising systems, not bespoke engineering.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Allbirds | https://www.allbirds.com/ | 95.4 SUS score — among the highest ecommerce usability on record | Custom typeface + gender-toggled merchandising system | [workings/allbirds.md](./workings/allbirds.md) |
| Glossier | https://www.glossier.com/ | Turns a generic Shopify theme into an instantly recognizable brand world | Millennial-pink, oversized photography, A–Z product index footer | [workings/glossier.md](./workings/glossier.md) |
| Nike | https://www.nike.com/ | Confident editorial commerce — the storefront as a shoppable billboard | Full-bleed autoplay video heroes + single hot accent (volt/red) | [workings/nike.md](./workings/nike.md) |
| Aēsop | https://www.aesop.com/ | Apothecary minimalism — whitespace and type do the selling | Calm editorial, type-led, near-zero gimmickry | [workings/a-sop.md](./workings/a-sop.md) |
| SSENSE | https://www.ssense.com/ | Treats luxury commerce like an editorial magazine | Extreme whitespace, tiny precise type, 4-link global nav | [workings/ssense.md](./workings/ssense.md) |

---

## Fintech

Making "boring" finance feel premium, fast, and trustworthy through type, palette, and live data.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Stripe | https://stripe.com/ | The reference implementation for fintech marketing | Real-time WebGL/Canvas animated hero gradient (minigl) | [workings/stripe.md](./workings/stripe.md) |
| Mercury | https://mercury.com/ | Treats a business bank like a luxury brand; the new copy-target | Variable typeface (Arcadia) + cinematic near-black + levitating metal card | [workings/mercury.md](./workings/mercury.md) |
| Ramp | https://ramp.com/ | Weaponizes restraint to make finance feel fast and modern | Acid-lime accent on near-brutalist B&W + live incrementing odometers | [workings/ramp.md](./workings/ramp.md) |
| Family | https://family.co/ | Disarms a scary category (self-custody crypto) with friendliness | Neutral interface + hand-drawn bouncy mascots + crafted micro-interactions | [workings/family.md](./workings/family.md) |

---

## 3D / WebGL Showcase

Maximum technical craft — entire homepages rendered in real-time WebGL, where the scene *is* the site.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Igloo Inc | https://www.igloo.inc/ | Awwwards SOTD + Webby — scroll-scrubbed 3D storytelling | Procedural ice/igloo structure assembling and lighting on scroll | [workings/igloo-inc.md](./workings/igloo-inc.md) |
| Lusion | https://lusion.co/ | One of the most technically advanced studio portfolios on the web | Custom renderer, physics-driven 3D, scroll-as-camera storytelling | [workings/lusion.md](./workings/lusion.md) |
| Active Theory | https://activetheory.net/ | The homepage itself is the portfolio piece | Full-screen 3D particle cosmos via in-house Hydra engine + bloom | [workings/active-theory.md](./workings/active-theory.md) |
| Resn | https://resn.co.nz/ | Proves studio craft by being the demo reel | Click-and-hold to grab/deform a real-time 3D crystalline "drop" | [workings/resn.md](./workings/resn.md) |
| Unseen Studio | https://unseen.co/ | Awwwards Studio of the Year — a navigable WebGL "world" | A surreal interactive 3D environment you explore instead of scroll | [workings/unseen-studio.md](./workings/unseen-studio.md) |
| Stripe Press | https://press.stripe.com/ | Turns a publisher's catalog into a tactile browsing experience | Scroll-linked camera dolly up a stack of rotating 3D books | [workings/stripe-press.md](./workings/stripe-press.md) |

---

## Dev & Designer Portfolios

The personal-brand frontier — where one creative developer's site doubles as their single best case study.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Bruno Simon | https://bruno-simon.com/ | The single most-referenced 3D web portfolio in the industry | A fully drivable open-world WebGL/WebGPU physics playground | [workings/bruno-simon.md](./workings/bruno-simon.md) |
| Robin Noguier | https://robin-noguier.com/ | Awwwards SOTD + Developer Award; a one-pager that feels immersive | Whole project showcase in one WebGL canvas + spring-physics scroll | [workings/robin-noguier.md](./workings/robin-noguier.md) |
| Minh Pham | https://www.minhpham.design/ | Awwwards SOTD / FWA — a cinematic interactive showreel, not a CV | Blender-baked 3D + GSAP motion-path typography | [workings/minh-pham.md](./workings/minh-pham.md) |
| Aristide Benoist | https://aristidebenoist.com/ | The whole site *is* the demo reel | 30 projects as a single fixed-viewport WebGL filmstrip, zero DOM scroll | [workings/aristide-benoist.md](./workings/aristide-benoist.md) |
| Rauno Freiberg | https://rauno.me/ | Restraint + obsessive detail beats flashy WebGL (Vercel / cmdk) | Horizontal filmstrip of typographic-poster cards; tuned micro-interactions | [workings/rauno-freiberg.md](./workings/rauno-freiberg.md) |

---

## Editorial & Curation

Sites where the curated work is the entire UI — the chrome disappears so the content performs.

| Site | URL | Why world-class | Signature technique | Teardown |
|------|-----|-----------------|---------------------|----------|
| Godly | https://godly.website/ | The curated work *is* the UI; chrome disappears | Full-bleed masonry of 1,000+ sites with live hover-playing previews | [workings/godly.md](./workings/godly.md) |
| Awwwards | https://www.awwwards.com/ | The awards authority practices what it preaches | Floating pill nav + GSAP micro-motion; hover-to-play gallery previews | [workings/awwwards.md](./workings/awwwards.md) |
| Linticular / Don't Board Me | https://dontboardme.com/ | Awwwards SOTD — treats a local pet-sitter like a fashion brand | A physics "bounce a tennis ball to enter" splash game as a loading gate | [workings/linticular-don-t-board-me.md](./workings/linticular-don-t-board-me.md) |

---

## Cross-cutting signatures of elite sites

The moves that recur across the best — the meta-pattern worth internalizing:

1. **Preloaders-as-craft.** The loading state is a brand moment, not a spinner. Don't Board Me gates entry behind a physics game; Active Theory and Igloo boot a WebGL scene with intent. The first second sets the bar.

2. **Scroll-driven narrative.** Scroll is the storytelling axis, not just a scrollbar. Apple scrubs canvas/video frame sequences; Stripe Press dollies a camera up a 3D bookshelf; Igloo assembles an igloo; Framer pins feature "theaters." Lenis + GSAP ScrollTrigger is the near-universal toolkit.

3. **Restraint over maximalism.** Almost every elite site is near-monochrome with **one** accent, starved for impact (Dept's orange, Ramp's lime, Nike's volt, Apple's blue). Things and Aēsop go further — knowing *when not to animate* is itself a world-class skill.

4. **Bespoke type as the brand.** Custom or carefully-chosen display faces carry identity: Mercury's Arcadia, Vercel/Basement's Geist, Robin Noguier's Eksell Display, Allbirds' and Stripe's custom faces, Nothing's dot-matrix. Aggressive negative tracking on oversized headlines is a recurring tell.

5. **The site proves the pitch.** Dev studios render real-time WebGL (Basement, Lusion, Resn); design tools dogfood themselves (Figma, Spline, Rive, Framer); SaaS embeds live interactive product (Linear, Vercel). Show the thing; don't screenshot it.

6. **One signature move, not ten.** Bruno Simon's drivable car, Cuberto's `mouse-follower` cursor, Stripe's gradient, Hello Monday's curved nav rail. A single memorable mechanic becomes the brand's memory hook — and beats a busy page of competing effects.

7. **Motion budget + perf discipline.** The polish is jank-free on purpose: Basement renders 3D on an OffscreenCanvas worker; Apple moved frame-sequences to scroll-scrubbed compressed video; WebGL is lazy-loaded and framed. Beauty that respects the main thread.
