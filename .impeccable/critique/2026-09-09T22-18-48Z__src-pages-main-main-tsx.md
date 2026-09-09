---
target: homepage (src/pages/main/Main.tsx)
total_score: 23
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/robertschmahl/-schmahlr/portfolio_v3/src/pages/main/Main.tsx"
target_fingerprint: "sha256:e6f047e446218db9d1272818fc48b6c87e3f6270f608ec544c66416934d21b13"
target_path: /Users/robertschmahl/-schmahlr/portfolio_v3/src/pages/main/Main.tsx
timestamp: 2026-09-09T22-18-48Z
slug: src-pages-main-main-tsx
closed: true
---
Method: dual-agent (A: design-review subagent · B: detector/browser-evidence subagent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav active-state underline present; little else to signal on a static hero |
| 2 | Match System / Real World | 4 | Plain, honest self-introduction copy, no jargon |
| 3 | User Control and Freedom | 3 | Escape/focus-return on mobile nav works well; no skip-to-content link |
| 4 | Consistency and Standards | 3 | Ghost-link visual language consistent, but hero CTAs share the same visual weight as vanity social links — nothing reads as "the important one" |
| 5 | Error Prevention | 4 | No inputs on this surface to break |
| 6 | Recognition Rather Than Recall | 3 | Icons are text-labeled; but Work/resume existence isn't surfaced from the hero itself |
| 7 | Flexibility and Efficiency of Use | n/a | Persuade-mode static hero; no repeat-use shortcuts expected here |
| 8 | Aesthetic and Minimalist Design | 3 | Minimal reads as under-filled rather than edited — large dead zone at common desktop widths |
| 9 | Error Recovery | n/a | No error states exist on this static hero |
| 10 | Help and Documentation | n/a | Not applicable to a landing/hero surface |
| **Total** | | **23/28** | **Good** |

## Design Specificity Verdict

**LLM assessment**: No unrelated product could ship this unchanged — the hand-built CSS campfire, treeline/starfield/moon composite, "Hi! I'm Robert." copy, and ember/moonlit-sage palette are singular and load-bearing to Robert's personal brand. But the *hero content module itself* (H1 + one-line subtitle + two ghost-icon-links in a row) is a completely generic "personal site hero" pattern that would drop into any developer's portfolio unchanged — the specificity lives entirely in the background scene, not in this component's structure or interactions.

**Deterministic scan**: `impeccable detect --json` on the homepage's dependency chain (src/pages/main, src/components, src/styles) exits 2 with 6 findings, none in homepage-authored markup: an unused `$log` gradient color (`_variables.scss:26`, zero rendering impact — no other references exist), three campfire radius/color advisories (`campfire.scss:345,346,400,435` — global chrome that renders behind every page, not defined by Main.tsx), and one `side-tab` warning on `.experience_item` (`wrapper.scss:349`) that belongs to About/Work markup the homepage never renders. The live browser-console overlay independently caught 2 instances of a `dark-glow` pattern (zero-offset, large-blur `box-shadow`) on the campfire's `.glow` element (`Campfire.tsx:37`) — traced to `box-shadow: rgba(255,208,0,.8) 0 0 90px 50px, ...`, no x/y offset.

**False positives, verified**: every one of these is the campfire's own fire-glow/log/rock illustration system — a zero-offset glow is exactly what a realistic fire requires, and the off-scale radii/colors match the already-documented "fire colors"/"rock colors" sections of `_variables.scss`. None of it is accidental drift; DESIGN.md itself carves out an explicit exemption for the campfire's organic shapes and one-off shades. The `$log` finding is additionally moot since the variable renders nothing. Computed styles confirm the homepage's actual text/background (`#ff7800` h1, `#010b12` body) are exact, on-token matches with zero off-palette drift on the content itself.

**Visual overlays**: browser injection succeeded this run but the live-server was stopped immediately after capture per the critique workflow, so no overlay remains visible in a live tab — the console findings above are the full record.

## Overall Impression

The campfire scene is genuinely rare, hand-built craft that does real work proving the "designer-turned-engineer" claim before a word is read — both assessments independently confirm nothing about it reads as AI-generated or accidental. But the hero *content* riding on top of that scene is doing almost no work: it introduces Robert, states a positioning line, and then hands a hiring manager exactly two ways to leave the site (GitHub, LinkedIn) with zero path toward the case studies PRODUCT.md itself calls "the primary evidence." The biggest opportunity is spending the page's "one ember" accent on an actual next action instead of only decoration and a heading.

## What's Working

- **The campfire/night-scene composite** — hand-built flame, procedurally-animated starfield, treeline — is real, singular craft that both the design review and the detector's false-positive analysis agree is intentional and on-brand, not template filler.
- **Keyboard/focus discipline in the mobile nav** — Escape closes and returns focus to the toggle, the first flyout link auto-focuses on open, and the hamburger has a visible `:focus-visible` ring. This is above-average rigor for a portfolio site and was verified live, not just read from source.
- **Icon+label discipline** — GitHub/LinkedIn and the contact FAB pair every icon with a real text label and explicit `aria-label`s rather than icon-only navigation; confirmed zero missing-alt-text or unlabeled-control issues anywhere on the rendered homepage.

## Priority Issues

**[P0] No path from the hero to the evidence that actually gets Robert hired**
- **Why it matters**: `Main.tsx` renders only the H1, a one-line subtitle, and GitHub/LinkedIn links — nothing points at Work, a resume, or Contact, even though PRODUCT.md names case studies as "the primary evidence" and success as "reaching out... or clicking through to GitHub/LinkedIn/resume." A hiring manager who doesn't notice the small top-left nav pill has no forward motion after the first two sentences.
- **Fix**: Add a primary CTA pill ("See my work" → `/work`) using the system's own `button-primary` pill spec, spending real ember-accent budget on a conversion action instead of only the H1 color.
- **Suggested command**: `/impeccable clarify` (or `/impeccable shape` if this warrants a layout rethink first)

**[P1] Hero content and the campfire compete for the same "one accent" with no hierarchy decision**
- **Why it matters**: DESIGN.md's own "One Ember Rule" says Ember Bright should mark "the single most important action or number on a screen." Currently it's spent on the H1, while the campfire's `.glow` (independently confirmed by the detector's browser overlay as the loudest visual element — a large, zero-offset glow with no competing dim state) is decoration, not action, and out-competes the text for attention.
- **Fix**: Either reserve full ember saturation for a real CTA and let the H1 use a quieter treatment (Moonlit Sage with an ember accent), or slightly dim the resting-state fire glow relative to the CTA.
- **Suggested command**: `/impeccable colorize`

**[P1] Dead space at common desktop widths**
- **Why it matters**: At 1440×900 the content block occupies roughly the top-left third of the viewport with a large empty gap before the campfire — no scroll trigger, no secondary content. A resume-click visitor skimming in under 10 seconds reads this as "that's it?" rather than building momentum. The same compression happens on mobile: hero content ends well above the fold's midpoint, ceding the most dominant real estate to decoration.
- **Fix**: Add a scroll cue or a second content beat (availability line, or the P0 CTA) to give the eye somewhere productive to land.
- **Suggested command**: `/impeccable layout`

**[P2] `<header>` landmark nested inside `<main>`**
- **Why it matters**: The shared `Header` component renders a semantic `<header>` directly inside `<main id="main">`, confirmed via the live DOM. This exposes as a `banner` landmark nested inside the `main` landmark — non-standard nesting that can confuse screen-reader users navigating by landmark, since there appear to be two top-level regions where there should be one.
- **Fix**: Since `Header` is shared across Main/About/Contact/Services hero blocks, confirm whether it should render a plain `<div>`/`<section>` when used as an in-page hero rather than a semantic `<header>`, or verify actual screen-reader behavior before treating this as settled.
- **Suggested command**: `/impeccable harden`

**[P3] Subtitle copy line-break awkwardness on mobile**
- **Why it matters**: At 375px the subtitle wraps to 4 lines with a mid-word-feeling break ("human-centered" split across lines) that reads as an accidental hyphenation rather than the deliberate compound word it is.
- **Fix**: Adjust `overflow-wrap`/line-length via the existing `for-size(phone-only)` mixin already used elsewhere in this file for hero-specific overrides.
- **Suggested command**: `/impeccable typeset`

## Persona Red Flags

**Jordan (First-Timer)**: Jordan lands from a resume PDF link, sees the fire and "Hi! I'm Robert," reads the one-sentence subtitle, and then faces a binary of GitHub or LinkedIn — both of which take Jordan *off* the site entirely. Nothing in the first viewport says "here's proof" or "here's how to reach me"; Jordan has to already know to look at the small top-left nav pill to find Work or Contact. This is the single biggest first-timer risk: the hero optimizes for "look how polished this is" over "here's your next action."

**Riley (Stress-Tester)**: Tab order (hamburger → GitHub → LinkedIn → "Let's talk" FAB, confirmed live) is logically correct with visible focus rings, which passes Riley's basic probing. But there's no "skip to main content" link, so every keyboard visit re-tabs through the nav/hamburger before reaching hero content — a real friction point Riley would flag on a repeat visit.

**Casey (Mobile)**: At 375px the GitHub/LinkedIn row stacks vertically with generous tap targets and the "Let's talk" FAB sits bottom-right without overlapping text — solid, and independently confirmed via browser evidence that there's zero horizontal overflow at this width. But Casey hits the same "dead space then campfire" problem as desktop, compressed: hero content ends well above the fold's midpoint, and a decorative element consumes the most dominant scroll real estate ahead of any actual next step.

## Minor Observations

- The subtitle wrapper's CSS class is literally `"subtitle about"` on the home page — a leftover naming artifact from a shared component; harmless today but confusing if a future editor greps for `.about` styling and finds it also governs the homepage subtitle.
- `LinkButton`'s external variant hardcodes `target="_blank" rel="noopener noreferrer"` with no visual "opens in new tab" affordance — minor, but relevant since GitHub/LinkedIn are the only two hero actions and both silently leave the tab.
- Page `<title>` was observed with an inconsistent separator (em-dash vs. middle-dot) across two loads — worth confirming `PageMeta` isn't producing this nondeterministically.
- The one warning-severity detector finding (`side-tab` on `.experience_item`) is real but lives entirely on About/Work pages, not this surface — worth a look next time either of those pages is critiqued.

## Questions to Consider

1. DESIGN.md names Ember Bright "the one accent... marks the single most important action or number on a screen" — on this page that budget is spent on the H1 itself. Is the H1 actually the most important element here, or is it just the biggest?
2. If the campfire is meant to be proof of skill for a hiring manager, why does the hero's only clickable, on-brand action send that same hiring manager *away* from the site (GitHub/LinkedIn) instead of one click deeper into it (Work)?
3. Case studies are named in PRODUCT.md as "the primary evidence" for the top-priority audience — should that be true anywhere on the homepage, or is it acceptable that a hiring manager must discover the nav to find it?
