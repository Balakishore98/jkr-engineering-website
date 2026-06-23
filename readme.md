# JKR Engineering — Design System

A brand and UI system for **JKR Engineering**, a CNC machine-tool and precision-parts manufacturer established in **May 2005**. The system covers brand foundations (color, type, spacing), reusable React UI primitives, and a full marketing-website UI kit.

> **Note on sources:** This system was built from a brief only — no existing codebase, Figma file, or brand assets were provided. The logo and all photography are **placeholders** flagged for replacement. See *Caveats* at the bottom.

---

## Company context

- **Name:** JKR Engineering
- **Proprietor:** Chidambararajan
- **Phone:** 90923 54314 (`tel:9092354314`)
- **Founded:** May 2005
- **What they do:** Manufacture CNC machine tools and precision parts; produce made-to-order components to client drawings; emphasize quality and on-time delivery.
- **Primary surface:** Marketing website (introduction + capabilities + contact).

---

## Content fundamentals — how JKR writes

- **Voice:** Plain, confident, workshop-floor. Short declarative sentences. No marketing fluff, no hype words ("revolutionary", "world-class").
- **Person:** "We" for JKR; "you / your" for the client ("send us *your* drawing", "*we* deliver"). Never first-person singular.
- **Tone:** Trustworthy and exact. Leads with the promise that matters to a buyer: the part is right, and the date is kept.
- **Casing:** Sentence case for headings and body. **Mono UPPERCASE with wide tracking** for eyebrows, labels and spec captions (e.g. `WHAT WE DO`, `MATERIAL`, `EST. MAY 2005`).
- **Numbers & specs:** Stated like a spec sheet — `±0.01 mm`, `Est. May 2005`, part numbers `JKR-2005-A`. Precision reads as competence.
- **Emoji:** None. This is an industrial B2B brand. Use icons or mono labels instead.
- **Example lines:**
  - Headline: *"Machine tools & parts, made to exact spec."*
  - Sub: *"Built for quality, delivered on time, since 2005."*
  - CTA: *"Request a quote" · "Send us your drawing"*

---

## Visual foundations

- **Palette — "Machined steel + amber".** Cool steel-gray neutrals (the metal) carry the system; a single **amber** accent (`--amber-500 #e08a16`, heat/safety/brass) is the only brand color. No second accent, no gradients-as-decoration.
- **Light + dark rhythm.** The site alternates light steel surfaces (`--bg-base`) with **dark industrial sections** (`--bg-dark #0a0e14`) for hero / why / contact / footer. Amber pops against the dark.
- **Type.** `IBM Plex Sans Condensed` (700) for display headings — engineered, tight tracking. `IBM Plex Sans` (400/500) for body. `IBM Plex Mono` (500) for eyebrows, labels and spec captions. The Plex family signals "engineering" without cliché.
- **Backgrounds.** Subtle **blueprint grid** (48px) behind the hero, masked to fade out — never a full loud pattern. Otherwise flat surfaces. No photographic backgrounds behind text.
- **Corners.** Small and machined: `--radius-sm 4px` / `--radius-md 6px` on surfaces and controls. Nothing pill-soft except true pills (none used on surfaces). Avatars/emblems use `--radius-sm`.
- **Shadows.** Crisp and low (`--shadow-sm`, `--shadow-lg`) — technical, not glowy. One amber-tinted shadow (`--shadow-accent`) for the "Est. 2005" chip only.
- **Borders.** 1px hairlines everywhere (`--border` on light, `--border-dark` on dark). The amber accent appears as a 2–3px rule (card top edge, section-label tick, left border on the proprietor card) — never as a full button outline by default.
- **Hover states.** Links: text darkens + amber bottom-border grows. Cards (`hover`): lift `-3px` + deepen shadow. Buttons: no color change on hover.
- **Press states.** Buttons translate down `1px` (mechanical "click"), no scale/bounce.
- **Motion.** Restrained. `--dur 200ms` with `--ease-out`. Fades and small translates only — no bounces, no infinite loops. Smooth-scroll between sections.
- **Transparency/blur.** Sticky header only: `rgba(white, .88)` + `blur(10px)`. Used sparingly.
- **Imagery vibe.** Real machine + shop-floor photography, cool/neutral white balance; metal tones with amber hazard accents. Tight crops on spindles, tooling, finished parts. (Currently blueprint-grid SVG placeholders.)

---

## Iconography

- **No icon system is wired in yet.** The brand uses **mono typographic markers** instead of an icon set in most places: the amber tick (`▪`) in `SectionLabel`, the `▸` bullet in lists, mono numerals (`01`–`04`) on service cards, and a `✓` glyph for the success state.
- **Recommended set if/when icons are needed:** [Lucide](https://lucide.dev) — thin, even-stroke line icons that match the technical, precise feel. Link from CDN (`https://unpkg.com/lucide@latest`) and keep stroke weight at 2px. **This is a recommendation, not yet implemented — flag any icon use to the client.**
- **No emoji.** No decorative Unicode beyond the markers above.
- **Logo files** live in `assets/` (see below).

---

## Index — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the token files only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for downloaded use.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (CSS custom properties + webfont `@import`).

**`assets/`**
- `logo-lockup.svg` / `logo-lockup-dark.svg` — horizontal logo + tagline (light / dark).
- `logo-emblem.svg` — square JKR mark (favicon / avatar).
- `machine-placeholder-4x3.svg` / `-16x9.svg` — blueprint-grid photo placeholders. **Replace with real photos.**

**`components/`** (React primitives — `window.JKREngineeringDesignSystem_a889f1`)
- `core/` — `Button`, `Card`, `Badge`, `StatBlock`, `SectionLabel`
- `forms/` — `Input`, `Textarea`

**`guidelines/cards/`** — foundation specimen cards (Type, Colors, Spacing, Brand) for the Design System tab.

**`ui_kits/website/`** — marketing-website UI kit. `index.html` is the interactive one-page site (hero → services → why → about → contact → footer), composed from `Header`, `Hero`, `Services`, `WhyUs`, `About`, `Contact`, `Footer`.

---

## Caveats

1. **Logo is a placeholder** text mark. Replace `assets/logo-*.svg` with the real JKR logo when available.
2. **All photography is placeholder** blueprint-grid SVGs. Supply real CNC machine / shop-floor / parts photos.
3. **Fonts** use IBM Plex (Sans/Condensed/Mono) loaded from Google Fonts — no brand font was specified. Swap if JKR has a preferred typeface.
4. **Tagline** drafted as *"Built for quality, delivered on time, since 2005."* — confirm or replace.
5. No address / email captured — only proprietor name and phone. Add when known.
