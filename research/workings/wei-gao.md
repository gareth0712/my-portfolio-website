---
name: Wei Gao
url: https://wgao19.cc
slug: wei-gao
category: portfolio
industry: dev-portfolio
reachable: false
---

# Wei Gao

**One-liner:** A frontend engineer's "home in the open web" that turned the personal portfolio into a whimsical illustrated universe — the "Fluffy Philharmonic" of classical-musician animals led by Viola the viola-playing red panda — but the live site is currently DEAD (domain expired/unresolvable), so this teardown reconstructs it from search + archive forensics rather than a live render.

## Overview
Wei Gao (Gao Wei, @wgao19) is/was a web frontend engineer at Shopee in Singapore, known in the dev community for CSS-craft writing (e.g. the "Animated CSS Blob" post on dev.to) and React/JS/CSS content. The site at `wgao19.cc` was self-described as "Wei's home in the open web" and branded as the **Fluffy Philharmonic** — a personal-portfolio-meets-creative-microsite where the author's identity is expressed through an illustrated cast: Viola, a red panda who plays the viola, plus "her fluffy friends of classical musicians" and a "Fluffy Fanclub." A companion developer blog lived at `dev.wgao19.cc` ("A Work in Progress"). The intent: a developer portfolio that is playful, character-driven, and CSS-animation-forward rather than a conventional resume grid.

IMPORTANT REACHABILITY NOTE: At the time of this teardown (June 2026) the domain does not resolve at all. Both Google DNS (8.8.8.8) and Cloudflare DNS (1.1.1.1) return NXDOMAIN for `wgao19.cc`, `www.wgao19.cc`, and `dev.wgao19.cc`; the `.cc` TLD returns an SOA with no nameserver delegation (domain dropped/expired). The Wayback Machine has no usable apex snapshot, and the most recent capture of the dev blog (2025-03-24) is already a **parked-domain placeholder** (`window.park` / adblock-key parking stub), meaning the site had lapsed by early 2025. Live browser navigation failed with `net::ERR_NAME_NOT_RESOLVED`. The teardown below is therefore reconstructed from search-result metadata and is partly informed inference, clearly flagged where so.

## Layout & Information Architecture
Cannot be verified from a live render. From URL structure recovered in search (`wgao19.cc/projects/viola/`) the site used a **project-page IA** — a landing identity page plus per-project subpages (`/projects/<name>/`). Inference: a character/illustration-led hero on the home page, with projects framed as members of the "Philharmonic" rather than a generic card grid. Density and whitespace cannot be confirmed.

## Navigation
Unverifiable from a live capture. Likely a lightweight top nav linking the home/identity page, projects (the "Philharmonic" members), the dev blog, and social (Twitter/X, GitHub). No evidence of mega-menu or complex nav — consistent with a small personal site.

## Typography
Unverifiable — no live CSS or computed `font-family` could be sampled (navigation failed; archive frame is cross-origin and the latest capture is a parking stub). The author is a known CSS practitioner, so typography was almost certainly deliberate, but specific typefaces/scale cannot be cited.

## Color & Theme
Unverifiable from render. Thematic inference only: a warm, illustrative palette fitting a red-panda mascot ("fluffy," classical-music whimsy) rather than a hard dark-mode developer aesthetic. No hex values can be confirmed.

## Imagery / Media
The signature asset was **custom character illustration** — Viola the red panda and her ensemble of classical-musician animals. This is the site's most distinctive, verifiable-via-search trait: the portfolio's "media" is a bespoke illustrated world rather than stock photography or screenshots of work. The author also separately publishes CSS-animation demos (animated blob, etc.), suggesting hand-built CSS/SVG motion was likely present, though it cannot be confirmed on the dead site.

## Motion & Interaction
Cannot be observed (site dead; no motion captured in any screenshot — all four shots are identical blank Wayback-toolbar frames with no page body). Strong inference from the author's public body of work: the site leaned on **hand-coded CSS animation** (border-radius "blob" morphs, keyframe microinteractions) rather than a heavy JS animation library. This is informed inference, not verified behavior.

## Tech / Stack (if known)
Not verifiable — the archived HTML that survives is a parking-page stub, not the real build, so no `generator` meta, bundle names, or framework fingerprints could be extracted. Reasonable inference from era + author profile: a static-site generator (Gatsby was the common choice for this developer cohort/era) deploying React + CSS-in-JS, but this is unconfirmed. Do not cite a specific framework as fact.

## Notable Techniques (steal-worthy)
- **Mascot-as-identity:** anchoring a dev portfolio on a single recurring illustrated character (Viola the red panda) instead of a headshot + bullet list — instantly memorable, ownable brand.
- **Projects-as-cast:** framing portfolio entries as members of a themed universe ("Fluffy Philharmonic") gives an organizing metaphor that makes a small project list feel like a world.
- **"Home in the open web" positioning:** treating the site as a personal place/identity rather than a job-hunt resume — a stance, not a CV.
- **CSS-craft as the medium:** hand-built CSS animation (blob morphs, keyframes) used as the portfolio's proof-of-skill, eating its own dog food.

## What to steal for a personal portfolio
- Pick ONE ownable visual motif (a mascot, a metaphor) and let it carry brand recognition — far stickier than a generic minimalist grid.
- Organize projects under a narrative metaphor so a thin portfolio reads as intentional and charming, not sparse.
- If your craft is CSS/frontend, make the site itself the demo reel — hand-built motion beats embedded video for a frontend role.
- OPERATIONAL LESSON (the loudest takeaway here): **a portfolio is only an asset while the domain is alive.** This site's identity, blog, and project pages are now all unreachable because the domain lapsed. Auto-renew the domain, keep a backup deploy on a platform subdomain (e.g. `*.vercel.app` / `*.netlify.app` / `*.github.io`), and ensure Wayback has full captures so the work survives a lapse.

## Screenshots
- shots/wei-gao/01-hero.png  (NON-REPRESENTATIVE — blank Wayback toolbar over an empty/parked frame; site did not render)
- shots/wei-gao/02-mid.png   (NON-REPRESENTATIVE — identical blank capture)
- shots/wei-gao/03-lower.png (NON-REPRESENTATIVE — identical blank capture)
- shots/wei-gao/04-full.png  (NON-REPRESENTATIVE — identical blank capture)

(No usable design screenshots exist: the live domain is NXDOMAIN and the only archive capture is a domain-parking placeholder.)
