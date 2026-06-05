---
name: Lee Robinson
url: https://leerob.com
slug: lee-robinson
category: portfolio
industry: dev-portfolio
reachable: true
---

# Lee Robinson

**One-liner:** A radically reductive, prose-first developer homepage that throws out the entire "dev portfolio" playbook — no hero image, no project grid, no nav bar — and proves a confident person can introduce themselves in three paragraphs of beautifully-set serif text.

## Overview
leerob.com is the personal site of Lee Robinson (developer/writer, works at Cursor teaching AI, ex-VP of DX at Vercel). It is for an audience that already knows who he is or arrived via his writing/videos. The whole homepage is a single short bio written as flowing prose, where the meaningful nouns ("developer and writer", "Cursor", "Vercel", "music fan", "read my writing", "code", "videos", "Reach out") are inline links. There is no marketing scaffolding — the content IS the navigation. Overall impression: extreme editorial confidence. It reads like the opening of a book, not a landing page. The entire page fits in roughly one desktop viewport with no scroll required.

## Layout & Information Architecture
- Single centered column, narrow measure (~600px), generous left/right margins on desktop. Reading-optimized line length (~70-75 chars).
- No grid, no cards, no columns. Pure vertical stack: H1 name → 2 bio paragraphs → "Some of my favorite writing includes:" label → bulleted link list → closing paragraph of utility links.
- Top of column starts well below the viewport top (~130px of breathing room) rather than pinned to the edge — gives the text room to breathe and feel placed, not dumped.
- Density is intentionally low. Massive whitespace ratio; the words do all the work. The whole homepage is essentially above the fold.
- IA is link-based hub-and-spoke: homepage is a launchpad to /bio, /cursor, /vercel, /music, /writing, /beliefs and individual essays (/agents, /pixo, /compression, etc.). Every essay lives at a clean root-level slug (leerob.com/agents) — no /blog/ prefix.

## Navigation
- No persistent nav bar, no logo lockup, no hamburger. Wayfinding is entirely inline within the prose ("read my writing", "code", "follow me online", "videos", "Reach out").
- Curated "favorite writing" list acts as an editorial nav — the author hand-picks 6 entry points rather than dumping a reverse-chron feed.
- External vs internal links are mixed inline (Spotify track, GitHub, X, YouTube, mailto) — the site treats the whole web as its sitemap.
- Per his own writing, page-to-page transitions use the View Transitions API with the Next.js App Router for smooth cross-fades — a deliberate native-feeling motion layer despite the otherwise static look.

## Typography
- Body and headings: **STIX Two Text** (a high-quality open serif, a Times/STIX successor designed for academic/editorial text). This is the single boldest decision on the site — a serif, not the near-universal Inter/Geist sans of dev portfolios.
- Scale is tiny and tight: H1 "Lee Robinson" renders at only 24px, barely larger than body copy. Hierarchy comes from weight (bold name) and position, not size. No oversized display type at all.
- Beautiful typographic detail: real curly apostrophes/quotes ("I'm", "life's"), proper measure, comfortable line-height. Links are underlined inline — classic editorial hyperlink styling rather than colored buttons.
- The serif + restrained sizing makes it read like a printed essay or a personal letter.

## Color & Theme
- Near-monochrome: white background (rgb 255,255,255), near-black text (rgb 23,23,23 — a soft off-black, not pure #000, reducing harshness).
- No brand accent color on the homepage. Links are distinguished by underline, not hue. Small list bullets are muted gray squares.
- Light mode by default; the site supports a theme toggle elsewhere but the homepage leans into clean paper-white. Contrast is high and AAA-comfortable.
- Zero gradients, zero shadows, zero decorative color. The palette restraint is the brand.

## Imagery / Media
- None on the homepage. No avatar, no hero photo, no illustration, no OG-style banner, no 3D/WebGL.
- The only "media" reference is a textual one — an inline Spotify link to the last track he listened to ("Pump Up The Jam"), a personal/human touch delivered as a link rather than an embed.
- Media-rich content (videos, photos) lives behind links on subpages, keeping the homepage weightless and instant-loading.

## Motion & Interaction
- Homepage is near-static. The signature motion is the **View Transitions API** cross-fade between routes (documented by Lee himself) — clicking an essay morphs rather than hard-cuts, giving an app-like feel on a content site.
- Hover states are minimal/native: underlined links, standard cursor. No custom cursor, no parallax, no scroll-jacking, no physics.
- Microinteraction philosophy is "calm tech" — motion is reserved for navigation transitions where it aids continuity, not decoration.

## Tech / Stack (if known)
- **Next.js (App Router)** + **React** — confirmed via his own posts; he uses the latest Next/React patterns.
- **Tailwind CSS** + **shadcn/ui** for styling/components.
- **Postgres + Drizzle ORM**, **Stripe** for paid content/projects, deployed on **Vercel**.
- **View Transitions API** for page transitions (no GSAP/Framer/Lenis/Three.js — deliberately no heavy animation libs).
- Font self-hosted (STIX Two Text with a local fallback face to avoid layout shift).

## Notable Techniques (steal-worthy)
- **Bio-as-homepage**: replace the hero+grid pattern entirely with a few sentences of prose where the key nouns are the links. Content == navigation.
- **Serif on a dev site**: STIX Two Text instantly differentiates from the Inter/Geist monoculture and signals "writer," not just "engineer."
- **Suppressed type scale**: H1 at 24px, hierarchy via weight and whitespace instead of size — quietly confident, anti-bombastic.
- **Clean root-level slugs** for essays (leerob.com/agents) — short, memorable, link-friendly, no /blog/ cruft.
- **Curated "favorite writing" list** instead of a reverse-chron dump — editorial control over first impressions.
- **View Transitions API** for native-feeling page morphs without an animation library.
- **Soft off-black (#171717) on white** instead of pure black — reduces eye strain, looks more premium.
- **Human detail as a link** (last-played Spotify track) — personality without clutter.

## What to steal for a personal portfolio
- Write your homepage as 2-3 sentences of real prose and hyperlink the nouns. Cut the hero image, the stats counters, the "scroll to explore." If you can say who you are in a paragraph, do.
- Pick a distinctive but readable typeface (a quality serif) to escape the Inter/Geist default and match the "writer" positioning.
- Keep the homepage to one viewport. Make everything else a clean root-level subpage reachable by a curated link list.
- Use off-black (#171717) on white, no accent color, underlined links — let restraint be the aesthetic.
- Add View Transitions API page morphs for a polished, app-like feel at near-zero JS cost.
- Curate 5-6 best pieces as your nav instead of exposing a raw chronological feed.

## Screenshots
- shots/lee-robinson/01-hero.png
- shots/lee-robinson/02-mid.png
- shots/lee-robinson/03-lower.png
- shots/lee-robinson/04-full.png
