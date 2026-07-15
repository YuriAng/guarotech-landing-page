# Guarotech Design Tokens

Reference extracted from the live source of truth, `styles.css` `:root` (lines 2-42), cross-checked against the intended spec in `design.json`. Use this as the quick lookup when building new sections/pages.

> **Note:** as of the React + Storybook refactor, `styles.css` now lives at `src/styles/styles.css` (content unchanged, imported globally from `src/main.tsx`, `src/confirm.tsx`, and `.storybook/preview.tsx`). The token values and line numbers below still apply.

## Colors

| Token | Value | Usage |
|---|---|---|
| `--color-bg-1` | `#0a0a0a` | Page background (darkest) |
| `--color-bg-2` | `#1a1a1a` | Secondary background |
| `--color-surface-1` | `#1e1e1e` | Card/panel surface |
| `--color-surface-2` | `#2d2d2d88` | Card/panel surface (translucent, 53% alpha) |
| `--color-accent` | `#48e9b5` | Primary accent (teal/mint) — **live brand color**, not in `design.json` |
| `--color-accent-1` | `#8b5cf6` | Violet accent (matches `design.json` primary accent) |
| `--color-accent-2` | `#a855f7` | Violet accent, lighter |
| `--color-accent-3` | `#9333ea` | Violet accent, darker |
| `--color-secondary-1` | `#06b6d4` | Cyan secondary |
| `--color-highlight-1` | `#ec4899` | Pink highlight |
| `--color-success-1` | `#10b981` | Success/confirmation state |
| `--color-text-primary` | `#ffffff` | Primary text |
| `--color-text-secondary` | `#a1a1aa` | Secondary text |
| `--color-text-muted` | `#71717a` | Muted/disabled text |

**Discrepancy:** `styles.css` defines `--color-accent: #48e9b5` (teal/mint) as the working primary accent, used in `--gradient-neon` / `--gradient-accent` and `--shadow-neon`. `design.json` never documents this color — its spec's primary accent is the violet family (`#8b5cf6`). The teal accent appears to be the *actual* current brand color in production; the JSON spec is stale on this point.

## Gradients

| Token | Value |
|---|---|
| `--gradient-neon` | `linear-gradient(135deg, #48e9b5 0%, #46b2d6 50%, #2d225e 100%)` |
| `--gradient-accent` | same as `--gradient-neon` (alias) |
| `--gradient-cosmic` | `linear-gradient(45deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%)` |
| `--gradient-vibrant` | `linear-gradient(90deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)` |
| `--gradient-tech` | `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)` |

**Discrepancy:** `design.json`'s `neon` gradient is purple→pink→cyan (`#8b5cf6 → #ec4899 → #06b6d4`); the live `--gradient-neon` is teal→blue→dark violet instead. `cosmic`, `vibrant`, and `tech` match the spec exactly.

## Typography

| Token | Value |
|---|---|
| `--font-primary` | `system-ui, -apple-system, sans-serif` |
| `--font-heading` | `Inter, Helvetica, Arial, sans-serif` |
| `--font-mono` | `JetBrains Mono, Consolas, monospace` |

Matches `design.json` exactly. Type scale (not exposed as CSS vars, defined only in `design.json`):

- **Hero:** `3rem / 4rem / 5rem`, weight `700/800/900`, line-height `1.1/1.0/0.9`, letter-spacing `-0.02em`
- **H1:** `2.5rem`, weight `700`, line-height `1.2`
- **H2:** `2rem`, weight `600`, line-height `1.3`
- **H3:** `1.5rem`, weight `600`, line-height `1.4`
- **Body large:** `1.125rem`, line-height `1.6`
- **Body base:** `1rem`, line-height `1.6`
- **Body small:** `0.875rem`, line-height `1.5`

## Radius, borders, shadows, blur

| Token | Value |
|---|---|
| `--radius` | `12px` |
| `--border-radius` | `22px` (larger radius, distinct from `--radius`) |
| `--border-width` | `2px` |
| `--transition` | `all 0.3s ease` |
| `--shadow-neon` | `0 0 20px rgba(72,233,181,.9), 0 0 40px rgba(72,233,181,.9)` (teal glow, matches live accent) |
| `--shadow-accent` | `0 0 30px rgba(236,72,153,.4)` (pink glow) |
| `--blur-backdrop` | `blur(10px)` |

## Decorative-only tokens

`--g3-1-x-position` / `-y-position`, `--g3-2-*`, `--g3-3-*` — percentage positions for a 3-point background gradient/blob effect. Not general-purpose tokens; specific to one background decoration.

Also defined later in the file (~line 607): `--gradient-color-1..4` (`#a960ee`, `#ff333d`, `#90e0ff`, `#ffcb57`) — a separate 4-stop gradient palette used for one specific element, not part of the `:root` system tokens.

## Spacing, breakpoints, components (spec-only, not CSS vars)

These exist only in `design.json`, not as CSS custom properties — worth promoting to `:root` if you want them enforced consistently:

- **Spacing scale:** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` (px)
- **Container sizes:** sm `640px`, md `768px`, lg `1024px`, xl `1280px`, 2xl `1536px`
- **Breakpoints:** mobile `320px`, tablet `768px`, desktop `1024px`, wide `1440px`
- **Button variants:** primary (violet gradient fill), secondary (violet outline), ghost (translucent violet)
- **Card variants:** feature (translucent gradient + blur), highlight (solid violet→pink gradient, scaled 1.05), glass (translucent white + heavy blur)

## Recommendation

Pick one accent as canonical — teal (`#48e9b5`, currently live) or violet (`#8b5cf6`, currently spec'd) — and update whichever of `styles.css` / `design.json` is wrong, so future work doesn't drift further. The spacing scale and button/card component specs in `design.json` are not yet backed by CSS custom properties; wiring them up would make new sections easier to keep consistent.
