# Keen AI — Project Context Document

Use this document to onboard any Claude session into the Keen AI website project. Drop it into a conversation and you're good to go.

---

## What This Is

A single-page website for **Keen AI** (keenai.com.au), an AI consulting business run by **Zak Levy** — a tradesperson turned AI consultant based in Australia. The site is live on GitHub Pages and deploys automatically on push.

**Live URL:** https://leroy052-cyber.github.io/Keen-AI-Site/
**Repo:** https://github.com/leroy052-cyber/Keen-AI-Site
**Branch:** `claude/keen-ai-website-design-Ia04O`

---

## Tech Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS 3.4 (utility-first)
- **Animations:** Vanilla JS — IntersectionObserver for scroll reveals, requestAnimationFrame for parallax/cursor. No GSAP dependency (kept it lighter).
- **Fonts:** Space Mono (Google Fonts, loaded via `<link>` in index.html)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Build command:** `npx vite build --base=/Keen-AI-Site/` (base path needed for GH Pages)

---

## File Structure

```
keen-ai-site/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          — Landing section, gradient mesh bg, sticky text
│   │   ├── StickyText.jsx    — Horizontal scrolling marquee between hero & services
│   │   ├── Services.jsx      — 4-step process (learn → find → build → handoff)
│   │   ├── Audience.jsx      — 3 target personas in glow cards
│   │   ├── About.jsx         — Zak's bio, role dots, social links
│   │   ├── Contact.jsx       — Email CTA, footer, social links
│   │   ├── CustomCursor.jsx  — Dot + ring cursor, scales on interactive elements
│   │   └── ScrollProgress.jsx — Accent line at top of viewport
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── styles/
│   │   └── globals.css       — Tailwind layers, utility classes, keyframes
│   ├── App.jsx               — Assembles all sections + cursor + scroll bar
│   └── main.jsx              — React entry point
├── public/
│   └── favicon.svg
├── .github/workflows/deploy.yml
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Design Language

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0a0a0a` | Base background |
| `bg-elevated` | `#111111` | Elevated section backgrounds |
| `bg-card` | `#161616` | Card backgrounds |
| `surface` | `#fafafa` | Primary text |
| `accent` | `#BFFF00` | Primary accent (electric lime) |
| `accent-glow` | `#d4ff4d` | Light accent variant |
| `accent-deep` | `#4a6600` | Dark accent variant |
| `lime` | `#84CC16` | Secondary green |
| `mint` | `#00FFB2` | Tertiary green |
| `emerald` | `#10B981` | Deep green |
| `muted` | `#666666` | De-emphasised text |
| `muted-light` | `#999999` | Body copy text |

The palette is all greens — no other hue families. Colour is used for depth and interest, not information hierarchy.

### Typography

- **Font:** Space Mono (400, 700, italic variants)
- **Hero headline:** `clamp(2.5rem, 8vw, 7rem)`, bold, tight tracking
- **Section headings:** 3xl–5xl, bold
- **Body:** sm–base, `text-muted-light`, relaxed leading

### Visual Effects

- **Gradient mesh:** Radial gradients on hero background (accent + mint + emerald, very low opacity)
- **Glow orbs:** Blurred circles for ambient depth
- **Section dividers:** `section-glow` class adds a gradient top border (lime → mint → emerald)
- **Card glow:** `card-glow` class — dark bg, subtle border, glowing border + box-shadow on hover
- **Text gradient:** `text-gradient` class — lime to mint gradient on text
- **Custom cursor:** Accent dot + trailing ring, ring scales 2x on interactive elements, hidden on mobile
- **Scroll progress:** 2px accent line at viewport top
- **Noise overlay:** SVG fractalNoise at 3% opacity, fixed position
- **Scroll marquee:** StickyText translates horizontally based on scroll position

### CSS Utility Classes (defined in globals.css)

- `.section-padding` — Responsive horizontal padding
- `.gradient-mesh` — Hero background treatment
- `.section-elevated` — Dark gradient background
- `.section-warm` — Warm-tinted background
- `.section-glow` — Gradient top border
- `.card-glow` — Card with hover glow
- `.text-gradient` — Gradient text fill
- `.glow-dot` — Small glowing accent circle
- `.noise-overlay` — Film grain effect (applied to root wrapper)

---

## Brand Voice & Copy Guidelines

This is critical. The copy on this site does NOT sound like typical AI/tech marketing.

### The voice is:
- **Long sentences** that meander a bit before landing — like someone telling you a story
- **Professional** but with a throughline of slightly topsy turvy authenticity
- **Australian English** (colour, optimise, etc.)
- **Self-aware** — acknowledges when something sounds weird ("which is a strange thing to lead with on an AI consulting website")
- **Conversational** — reads like talking to a sharp mate, not a sales deck
- **Specific** — "47 browser tabs" not "too many tabs", "morning coffee went cold" not "quickly"

### The voice is NOT:
- Short punchy fragments ("No jargon. No robots. Just results.")
- Corporate ("We leverage cutting-edge AI solutions")
- Bullet-point marketing speak
- Overly self-deprecating or try-hard funny

### Word preferences:
- Use: build, fix, find, help, fit, keen, sharp, simple, properly, sort of, honestly
- Avoid: synergy, leverage, cutting-edge, solutions, empower, seamless, robust

### Example of the voice (from Services):
> "This is the listening part. We sit with you, ask probably too many questions, and get genuinely curious about the weird way your business actually runs — because every business runs a bit weird, and that's where the good stuff hides."

### Example of the voice (from About):
> "I used to be a tradesperson, which is a strange thing to lead with on an AI consulting website, but it's actually the most relevant thing about me."

---

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml`:
- Triggers on push to `claude/keen-ai-website-design-Ia04O` or `main`
- Runs: checkout → configure-pages → setup node 20 → npm ci → vite build → upload artifact → deploy
- Requires GitHub Pages enabled with **Source: GitHub Actions** in repo settings

---

## Key Decisions & Rationale

1. **No GSAP** — Used IntersectionObserver + rAF instead. Lighter bundle, same visual effect for what we need.
2. **Single page** — No routing, no complexity. Scroll-based navigation.
3. **All greens** — The palette stays within one hue family (lime/mint/emerald) for cohesion. Interest comes from shade variation, not colour variety.
4. **Custom cursor** — Hidden on mobile (touch devices). Dot is instant-follow, ring has smooth lag.
5. **No images** — Typography and colour ARE the visual design. No stock photos, no headshots.
6. **Space Mono** — Loaded via Google Fonts link tag, not self-hosted. Acceptable trade-off for simplicity.

---

## What's Next (Potential)

- Hook up a real domain (keenai.com.au)
- Add a simple contact form (could use Formspree or similar)
- Possibly add a "Tech for Humans" content feed section
- Performance audit (fonts, LCP, CLS)
- Merge to main when ready
