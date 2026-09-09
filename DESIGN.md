---
name: Robert Schmahl — Portfolio
description: A campfire glowing at the edge of a dark night forest; content panels are frosted glass catching the firelight.
colors:
  ember-bright: "#ff7800"
  warm-peru: "#da9e6e"
  campfire-maroon: "#7c1414"
  moonlit-sage: "#bdd6be"
  forest-night: "#010b12"
  ember-lit-charcoal: "#0b1c26"
  soot-black: "#181a18"
  deep-night-blue: "#031e25"
  ember-glow: "#ff9933"
  logo-badge: "#0b232d"
typography:
  display-large:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "100px"
    fontWeight: 800
    lineHeight: "82px"
  display-large-phone:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "55px"
    fontWeight: 800
    lineHeight: "64px"
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "75px"
    fontWeight: 800
    lineHeight: "64px"
    letterSpacing: "0.8px"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "60px"
    fontWeight: 800
    letterSpacing: "0.8px"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "24px"
    fontWeight: 800
  body:
    fontFamily: "UniversLT57CondensedRegular, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  icon-scale-xl:
    fontSize: "58px"
  icon-scale-xl-phone:
    fontSize: "40px"
  icon-scale-lg:
    fontSize: "30px"
  icon-scale-md:
    fontSize: "21px"
  icon-scale-sm:
    fontSize: "20px"
  label-compact:
    fontFamily: "UniversLT57CondensedRegular, sans-serif"
    fontSize: "15px"
    fontWeight: 500
  label:
    fontFamily: "UniversLT57CondensedRegular, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.6px"
  label-compact:
    fontFamily: "UniversLT57CondensedRegular, sans-serif"
    fontSize: "15px"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "999px"
  circle: "100%"
spacing:
  xs: "0.4rem"
  sm: "0.85rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ember-bright}"
    textColor: "{colors.deep-night-blue}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.moonlit-sage}"
    typography: "{typography.body}"
  button-outline-accent:
    backgroundColor: "transparent"
    textColor: "{colors.ember-bright}"
    rounded: "{rounded.pill}"
    padding: "8px 1rem"
  card:
    backgroundColor: "transparent"
    textColor: "{colors.moonlit-sage}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  chip:
    backgroundColor: "rgba(189, 214, 190, 0.06)"
    textColor: "{colors.moonlit-sage}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.6rem"
  input:
    backgroundColor: "rgba(0, 0, 0, 0.28)"
    textColor: "{colors.moonlit-sage}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 0.9rem"
---

# Design System: Robert Schmahl — Portfolio

## Overview

**Creative North Star: "The Firelit Clearing"**

The site is a single, continuous night scene: a treeline silhouette, a drifting starfield, a full moon, and a hand-animated campfire fixed at the edge of the viewport. Every page is a clearing carved out of that same dark forest — content sits in frosted-glass panels that let the fire and stars show faintly through, rather than opaque cards dropped on a white canvas. This is a confirmed, deliberate brand identity (PRODUCT.md names it as incumbent design authority to preserve, not a placeholder) — it is also the site's own "flex dev skills" proof point for a designer-turned-engineer audience, so its craft is load-bearing.

The palette stays dark and warm: near-black night blues ground the page, a single bright ember-orange carries almost all calls to action and emphasis, and a dusty tan/sage pairing handles secondary text. Typography is a plain, confident sans (Montserrat) for anything loud — hero headlines, section titles — over a quieter body face for everything else. Depth comes from two devices working together: soft ambient drop shadows that ground panels against the scene, and warm colored glows that signal interactivity, never a color swap alone.

**Key Characteristics:**
- A fixed night-forest scene (trees, stars, moon, campfire) sits behind every page; content panels are frosted glass over it, not opaque cards on white.
- One accent color (ember-orange) carries essentially all calls-to-action, hero emphasis, and hover state — it is rare enough elsewhere to stay legible against the dark scene.
- Interactive state is communicated by a warm glow (drop-shadow in accent hues) plus a small scale lift, not by darkening/lightening a fill.
- Pill shapes (999px radius) mark primary and tag-like actions; 10px rounded rectangles are the default panel/card shape.

## Colors

The palette is a small, warm accent against a near-black night-blue ground, kept deliberately narrow so the fire animation and the single orange accent stay the loudest things on screen.

### Primary
- **Ember Bright** (`#ff7800`): The one accent color in the system. Used for the "Let's talk" FAB, the contact form submit button, hero `h1` text on most pages, process-step numerals, case-study titles/stat values, and every hover-glow (`filter: drop-shadow(...)` in this hue). Its outsized share of use is deliberate — it is the fire.

### Secondary
- **Warm Peru** (`#da9e6e`): A dustier, quieter warm tone used for page subtitles/taglines, the animated hover-underline under ghost links (`linkButton`/`downloadButton`), testimonial quote marks, services CTA copy, and the experience-item accent border. Reads as "firelight on skin/wood" next to Ember Bright's "flame."

### Tertiary
- **Campfire Maroon** (`#7c1414`) / **Campfire Maroon Deep** (`#520e0e`): Reserved for the About-page flip cards — the 6px card border and back-face icon/text color, always paired with a Peru-colored card face. Not used elsewhere; scoped to that one signature component.

### Neutral
- **Forest Night** (`#010b12`): The page's true background — set on `body`, the fixed `.wrapper.background` layer, and (on mobile) forced onto cards as an opaque backdrop when blur is stripped.
- **Ember-lit Charcoal** (`#0b1c26`): A slightly lighter surface neutral used where a panel needs to read as solid on mobile (opaque testimonial/project cards) or as a badge backdrop (the featured project's logo tile, `#0b232d`).
- **Moonlit Sage** (`#bdd6be`): The default text-on-dark color — body copy, card copy, nav links, form labels/inputs, most non-hero headings. Also the default `::selection` background (paired with Soot Black text).
- **Soot Black** (`#181a18`): Used only as the text color inside `::selection` highlights against the bright accents (Ember Bright, Moonlit Sage, Warm Peru selections).
- **Deep Night Blue** (`#031e25`): Text-on-accent — the dark text color sat on top of Ember Bright pills (FAB label, submit button label, process-step numeral) where dark text reads better than light.

### Named Rules
**The One Ember Rule.** Ember Bright is the only saturated, high-chroma color in the system. It marks the single most important action or number on a screen (one CTA, one hero heading, one stat) — never used decoratively or repeated so often it stops reading as "the fire."

## Typography

**Display/Headline Font:** Montserrat (with sans-serif fallback) — loaded from Google Fonts at weights 100/300/400/500/600/700/800 plus italic 300.
**Body/Label Font:** declared as `UniversLT57CondensedRegular` with a `sans-serif` fallback, but no `@font-face` or web-font link ships it — see Do's and Don'ts. Body text renders in the browser's generic sans-serif fallback in practice.

**Character:** A confident, geometric sans for anything loud (hero names, section titles, stat numbers) over a plain, quiet body face — the type pairing stays out of the way of the fire/forest visuals rather than competing with them.

### Hierarchy
- **Display — Large** (800, 100px / 55px on phone, 82–64px line-height): The Work-page hero only — the flagship page earns one size step above the standard Display, still Moonlit Sage.
- **Display** (800, 75px / 55px on phone, 64–82px line-height, 0.8px tracking): Hero `h1`s on Main/About/Contact/Services; color varies by page (Ember Bright on most).
- **Headline** (800, 60px): Global `h2` default.
- **Title** (800, 24px): Card titles (`.card h3`), section titles (`.work_section__title`, `.services_section__title`, case-study `h2`), typically Moonlit Sage.
- **Body** (400, 15–16px, 22–26px line-height): Card copy, case-study prose, experience summaries; usually Moonlit Sage at ~0.9 opacity.
- **Label** (500–700, 12px, uppercase or tight tracking on form labels): Form field labels (uppercase, 0.6px tracking), tech-stack tag chips, metric labels.
- **Label — Compact** (400–500, 15px): The contact FAB's phone-width label — one step down from Label's 12px baseline reads too small at the FAB's reduced mobile padding.

### Icon Scale
Font Awesome `<svg>` icons are sized with a plain `font-size` on the icon itself (not a `width`/`height` pair), tuned per placement rather than fixed to one constant: 15px inline in pill buttons and the submit button (coincidentally the same pixel value as Label — Compact's text, but a separate concern), 20–21px for the LinkButton's GitHub/external-link marks, 30px for the project-card logo fallback, and a deliberately larger 58px (40px on phone) for the About flip-card's skill icon, which is the card's sole visual focus. These are icon glyph sizes, not text — they sit outside the type Hierarchy above by design and shouldn't be pulled into it.

### Named Rules
**The Loud/Quiet Split Rule.** Montserrat is reserved for `h1`–`h4`; everything else (`h5`/`h6`, `p`, `ul`/`li`, `span`, form fields) uses the body stack. Don't introduce a third family — the split is binary on purpose.

## Layout

The site is a fixed, full-viewport night scene (`.wrapper.background`, `#010b12`) with per-page content layers (`#main`, `#about`, `#work`, `#services`, `#contact`, case-study) stacked above it (`z-index: 20`) and scrolling independently where content overflows. Page headers/hero content are indented `margin-left: 10%` from the left edge on desktop and constrained to `calc(100vw - 60%)` (roughly a left-aligned two-column feel, campfire occupying the right side). Section rhythm is generous and consistent: `padding-top: 6.5rem` clears the fixed nav on About/Work/Services/Contact/case-study pages; sections are separated by `2–2.5rem` margins; card grids use `1.5rem` gaps.

Responsive behavior collapses at `phone-only` (`max-width: 599px` — see `_mixins.scss` `for-size`): hero widths go to 80%, the campfire scales down (`0.6`) and repositions, the nav collapses to a hamburger + flyout menu, and cards/testimonials switch from frosted glass to opaque fills (`#010b12` / `#0b1c26`) since the fixed campfire sits directly behind scrolling content with no way to blur it out of view. Named breakpoints (`_variables.scss`): 600 / 768 / 1024 / 1200 / 1600px; the actual `for-size` mixin used site-wide runs phone-only (≤599px), tablet-portrait-up (600–1100px), tablet-landscape-up (≥900px), desktop-up (≥1200px), big-desktop-up (≥1800px).

## Elevation & Depth

A hybrid system: soft ambient drop shadows ground panels against the scene at rest (`0 8px 16px rgba(0,0,0,0.6)` on cards, about-cards, forms, testimonials), and most panels additionally use `backdrop-filter: blur()` — sometimes with `brightness()` — so the night scene (stars, trees, campfire) shows through faintly, frosted rather than opaque. On top of that, interactive elements (buttons, cards, links) signal state with a warm colored glow — `filter: drop-shadow(...)` in Ember Bright or Peru tones — plus a small scale transform, rather than a shadow darkening or a fill-color change.

### Shadow Vocabulary
- **Panel ambient** (`box-shadow: 0px 8px 16px rgba(0,0,0,0.6)`): Default resting shadow for cards, about-cards, testimonials, the nav menu, the contact form.
- **Featured glow** (`box-shadow: 0px 8px 16px rgba(0,0,0,0.6), 0 0 22px rgba(255,153,51,0.15)`): Added ring for the one flagship project card.
- **Firelight hover glow** (`filter: drop-shadow(0 0 12–14px rgba(255,120–153,0–51,0.45–0.55))`): Applied on hover/focus to primary pills (FAB, submit button, case-study link) and the About flip-card.

### Named Rules
**The Glow-Not-Shadow-Darken Rule.** Hover/focus feedback on this site is a warm-hued glow (`drop-shadow`) plus a slight scale-up, never a darker/lighter fill swap. It's the one interaction signature repeated across every clickable primitive.

## Shapes

Two silhouettes cover almost everything: a **999px pill** for anything that acts like a call to action or a tag (FAB, submit button, "Case study →" link, tech-stack chips, the "coming soon" badge), and a **10px rounded rectangle** for content panels (project cards, about-cards, testimonials, the contact form). Inputs use a tighter 6px radius; the logo badge inside project cards uses 14px; the About flip-card's icon face and the services step-numeral use a full circle. Borders are thin and low-opacity on glass panels (`rgba(189,214,190,0.12–0.22)` on Moonlit Sage) so they read as a hairline against the scene, versus a solid, saturated 2–6px border reserved for the two accent-bordered components (the featured card's Ember ring, the About card's Maroon frame, the case-study-link's Ember Bright outline).

**Exemption:** the hand-built campfire (rocks, logs, flame blobs) is organic signature art, not UI chrome — its radii (20px log ends, 95px rounded rock-shadow caps), its one-off ember shade (`#ff915b`, a mid-tone between Fire Bright and Fire Medium used only on a single flame highlight), and its log-gradient color (`#e66465`, faded into Dark Olive Green for the seven angled logs) sit outside the panel/pill scale and the documented palette on purpose. Don't extend any of these to real UI elements.

## Components

### Buttons
- **Shape:** Pill (`border-radius: 999px`) for filled/primary actions; no radius/border for ghost text-links (they're plain inline flex, not a button shell).
- **Primary:** Ember Bright fill, Deep Night Blue text, `0.85rem 1.4rem` padding (FAB, form submit) — always paired with the firelight hover glow plus `scale(1.04–1.05)`. The homepage hero's "See my work" CTA is the same primary treatment applied to the outline-accent pill's padding/shape (`8px 1rem`) rather than the FAB's — a filled variant of that link, not a new shape.
- **Outline-accent:** Transparent fill, 2px Ember Bright border, Ember Bright text, `8px 1rem` padding (the "Case study →" link) — same glow-on-hover treatment as primary.
- **Ghost:** Transparent background, Moonlit Sage text/icon, no border (`link_button`, `download_button`). Hover reveals an underline sized exactly to the label (Peru-colored) plus an icon scale-up and a brightness boost — never a background fill.

### Chips
- **Style:** Low-opacity Sage fill (`rgba(189,214,190,0.06)`) with a matching hairline border, pill radius, Moonlit Sage text at 12px — used for tech-stack tags on Work cards and experience items.
- **State:** Static/display-only; no selected/unselected variants exist.

### Cards / Containers
- **Corner Style:** 10px radius.
- **Background:** No opaque fill by default — `backdrop-filter: blur(3px) brightness(130%)` over the night scene (frosted glass), forced opaque (`#010b12` / `#0b1c26`) on mobile and inside the Services testimonial block. The About flip-card is the exception: its two faces are solid Warm Peru.
- **Shadow Strategy:** Panel-ambient at rest (see Elevation); hover scales to 102% and increases the backdrop brightness to 150% rather than adding a new shadow.
- **Border:** None by default; the one "featured" project card adds a translucent Ember Bright ring.
- **Internal Padding:** `1.75rem`.

### Inputs / Fields
- **Style:** Dark translucent fill (`rgba(0,0,0,0.28)`), 6px radius, hairline Sage border (`rgba(189,214,190,0.22)`), Moonlit Sage text and placeholder (at reduced opacity).
- **Focus:** Border shifts to Ember Bright plus a soft matching outer glow (`box-shadow: 0 0 0 3px rgba(255,153,51,0.18)`); no default browser outline.
- **Error:** Ember Bright, 12px text below the field.

### Navigation
- Fixed top-left, always-visible pill menu on desktop with content-width links, `backdrop-filter: blur(25px)`, and the same panel-ambient shadow as other glass surfaces. Ghost-link styling and hover underline apply to nav items exactly as elsewhere. On phone-only, the menu collapses behind an animated hamburger-to-X toggle and becomes a solid (`#010b12`) vertical flyout — blur is dropped so the campfire behind it doesn't degrade legibility.

### The Night Scene (signature)
The fixed background composite — treeline silhouette (`treeline.svg`), a procedurally-scattered star field (`box-shadow`-generated points animated with a slow drift), a full moon (`moon-full.svg`), and a hand-built CSS campfire (smoke via masked/animated SVG paths, flame built from layered radial-gradient blobs in a small fire palette — `#ff7800`/`#f36200`/`#d63603`/`#d43322`/`#ef5a00` — plus five rock shapes and seven angled logs) is the site's defining custom component. It repositions/hides per page (pushed off-canvas on Work and case-study pages so long-form reading isn't fighting the flame) and respects `prefers-reduced-motion` by freezing all loop animations site-wide.

## Do's and Don'ts

### Do:
- **Do** use Ember Bright (`#ff7800`) as the only saturated accent per screen — one CTA, one hero heading, one highlighted stat.
- **Do** signal hover/focus with a warm `drop-shadow` glow plus a small scale transform, matching the accent hue in play (Ember or Peru).
- **Do** build new panels as frosted glass over the night scene (`backdrop-filter: blur`) rather than opaque fills, and fall back to an opaque neutral (`#010b12`/`#0b1c26`) only where the fixed campfire sits directly behind scrolling content (mobile, or dense text blocks that need a legibility halo).
- **Do** keep the pill (999px) for CTA/tag-shaped elements and 10px rounded rectangles for panels; don't mix in a third radius scale.
- **Do** respect `prefers-reduced-motion` for any new decorative animation, matching the existing site-wide neutralization.

### Don't:
- **Don't** introduce a second saturated accent color alongside Ember Bright — Peru and Maroon exist specifically as muted/secondary, not competing accents.
- **Don't** signal interactive state with a fill-color swap or a darkening shadow — this system's signature is a colored glow, not a tonal shift.
- **Don't** rely on the `UniversLT57CondensedRegular` body font as if it renders — it is not loaded anywhere in the build (only Montserrat is fetched from Google Fonts), so body text is actually rendering in the browser's generic sans-serif fallback today. Fix the load or set the fallback stack intentionally; don't design new copy-heavy surfaces assuming a distinct branded body face is present.
- **Don't** add hard-edged, high-offset "neobrutalist" shadows — every shadow in this system is soft/ambient or a diffuse colored glow.
