# STF Website — Project Knowledge

Marketing site for **Soman Tech Foundry (STF)**: a remote-first tech studio. Tagline: *Small Team, Big Solutions.*

This file is the agent/human orientation guide. For edit constraints, also follow `.cursor/rules/locked-template.mdc` and `.cursor/rules/commit-messages.mdc`.

---

## Stack

| Piece | Version / notes |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` in `app/globals.css`) |
| Icons | `lucide-react` |
| Font | Inter via `next/font/google` |
| Deploy port | `3000` (`npm run dev` / `npm start`) |

No backend DB, no auth, no API routes in this repo. Contact/apply UIs are client forms (mailto / modal UX). Product demos live in **sibling repos**, linked from Our Work.

---

## Sibling products (multi-root workspace)

`STF-WORKSPACE.code-workspace` opens three folders:

| Folder | Role | Typical local port |
| --- | --- | --- |
| `STF-WEBSITE` | This marketing site | `3000` |
| `STF-AI-AGENT-SERVICES` | AI receptionist / chat + booking product | `3001` |
| `STF_POS_SYSTEM` | POS product | Frontend often `3002` (see `.env.example`) |

Demo URL overrides (website `.env.local`):

- `NEXT_PUBLIC_WORK_DEMO_AI_AGENT_URL`
- `NEXT_PUBLIC_WORK_DEMO_POS_URL`

Production demos are hardcoded in `lib/work.ts` (`demoUrlProduction`).

---

## Locked template

Baseline git tag: **`template-v1`**.

Structure and design are frozen. Prefer **minimal, scoped edits** unless the user explicitly asks to redesign or restructure.

- Do: change named copy, values, links, or data entries.
- Don't (without approval): rename/move/split files, reorder home sections, redesign navbar/footer, change design tokens, add deps, change animations.
- Check scope: `git diff template-v1 --stat`
- Restore a file: `git checkout template-v1 -- <file>`

### Design tokens (do not change casually)

- Background: `bg-slate-950` / `#020617`
- Text: white / `text-slate-400`
- Borders: `border-slate-800/60`
- Accent: `emerald-500`
- Font: Inter
- Buttons: `rounded-full`; cards: `rounded-2xl`
- Interactions: counters, marquee, service accordion, FAQ accordion, card hover lift

---

## Routes & pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home (hero + all marketing sections) |
| `/services` | `app/services/page.tsx` | Full services list (`#` anchors = service `id`) |
| `/work` | `app/work/page.tsx` | Product catalog |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Product detail + demo CTA |
| `/careers` | `app/careers/page.tsx` | Jobs |
| `/contact` | `app/contact/page.tsx` | Contact / start a project |

Root shell: `app/layout.tsx` wraps every page with `Navbar` + `Footer`.

### Home section anchors (`app/page.tsx`)

`about` · `work` · `process` · `stack` · `team` · `numbers` · `faq`

Also: hero, marquee of offerings, service showcase, CTAs.

---

## Where content lives

| Content | Source |
| --- | --- |
| Services (home, navbar mega-menu, `/services`) | `lib/services.ts` |
| Our Work catalog + demo URLs | `lib/work.ts` |
| Navbar menus | `components/navbar.tsx` (`menus`, plus top-level Our Work + Careers) |
| Home copy / process / stack / team / numbers | `app/page.tsx` |
| FAQ | `components/faq.tsx` |
| Our Work catalog (service accordions + demos) | `components/work-catalog.tsx` — demos tagged via `serviceId` on `lib/work.ts` |
| Careers | `app/careers/page.tsx` — HR contact form (`ContactForm intent="careers"`); no job board |
| Contact form | `components/contact-form.tsx` (`product`, `service`, or `careers` intent) |
| Footer columns + email | `components/footer.tsx` |
| Logo / brand name | `components/logo.tsx` → `/public/logo/stf-mark.png` |
| Global CSS / keyframes | `app/globals.css` |
| Favicons | `app/icon.png`, `app/apple-icon.png` |

### Current services (`lib/services.ts`)

1. `ai-agents` — AI Agents for Business  
2. `website-online-presence` — Website & Online Presence  
3. `business-operations` — Business Operation Systems (POS / inventory)  
4. `business-automation` — Business Automation Setup  
5. `reporting-maintenance` — Business Reporting & Maintenance  
6. `custom-enterprise` — Custom Enterprise Applications  

### Current work apps (`lib/work.ts`)

| Slug | Title | Status | Production demo |
| --- | --- | --- | --- |
| `ai-agent-services` | AI Agent Services | live | `stf-ai-agent-services.vercel.app/chat/sunset-salon` |
| `pos-system` | STF POS System | live | `stf-pos-system.onrender.com` |

`getDemoUrl(app)` prefers env override, else production URL.

---

## Components map

| Component | Role |
| --- | --- |
| `navbar.tsx` | Sticky floating pill; Services / Company / Resources dropdowns; Our Work; Careers; “Start a Project” |
| `footer.tsx` | Brand blurb, contact email, 3 link columns |
| `logo.tsx` | Mark + “Soman Tech Foundry” |
| `service-showcase.tsx` | Home services accordion / showcase |
| `counter.tsx` | Animated number counters |
| `faq.tsx` | Accordion FAQ |
| `contact-form.tsx` | Contact page form |
| `job-listings.tsx` | Filterable careers list |
| `apply-modal.tsx` | Apply-to-job modal |

---

## Brand & contact

- Legal / display name: **Soman Tech Foundry**
- Short: **STF**
- Metadata title default: `STF | Small Team, Big Solutions`
- Contact email (footer / FAQ): `somandeepakofficial@gmail.com`
- Positioning: remote-first, worldwide; senior practitioners; weekly demos; intro call within 48h

---

## Scripts

```bash
npm run dev    # next dev --port 3000
npm run build  # next build
npm start      # next start --port 3000
```

Env template: `.env.example` → copy to `.env.local` for local demo overrides.

---

## Agent edit playbook

1. Confirm the user named a **specific** change (copy, link, data, bug).
2. Edit the **single source of truth** listed above (e.g. services → `lib/services.ts` only).
3. Do not restyle, reorder sections, or add dependencies unless asked.
4. If a change needs structural redesign, **ask first**.
5. Commits (only when asked): subject `STF: <what changed>`; never mention AI/tools; no `Co-authored-by` trailers.

### Examples

| Ask | Do |
| --- | --- |
| Change hero subtitle | Edit the hero `<p>` under `<h1>` in `app/page.tsx` only |
| Add a service | Append to `services` in `lib/services.ts` (navbar/services page pick it up) |
| New work product | Add to `workApps` in `lib/work.ts` (+ env key in `.env.example` if needed) |
| Change FAQ answer | Edit `faqs` in `components/faq.tsx` |
| New job posting | Edit `jobs` in `components/job-listings.tsx` |

---

## Next.js note (`AGENTS.md`)

This project uses a current Next.js with APIs that may differ from older training data. Prefer guides under `node_modules/next/dist/docs/` before inventing patterns. `AGENTS.md` is maintained by `next dev`; keep it in the tree.

---

## Git context (as of knowledge capture)

- Default working branch observed: `dev` (tracks `origin/dev`)
- Notable commits: initial agency site → template lock + mega-menu → logo → Our Work catalog (AI Agent + POS demos)
- Template baseline tag: `template-v1`
