## Guarotech design system — build conventions

**Dark-theme only — always wrap compositions in a dark surface.** Every component assumes it sits on `--color-bg-1` (`#0a0a0a`) or `--color-bg-2` (`#1a1a1a`). There is no light-mode variant and no per-component background fallback: text and borders that use white/translucent colors (`Button` variant `"ghost"`, `Header`'s nav bar, `TechSlider`'s track) are invisible or low-contrast on a light or white background. When composing a screen, give the outermost container `background: var(--color-bg-1)` (or one of the `--gradient-*` tokens below) before placing components inside it — never drop these components onto a white canvas.

**No provider/root wrapper needed.** Components are plain functional components with no context/theme provider — they read CSS custom properties directly from `:root` in `styles.css`, which is already loaded globally. Just import and render.

**Styling idiom: CSS custom properties + a small set of variant classes — no utility classes.** Read colors, fonts, radii, and gradients from these real tokens (defined in `styles.css`, all under `:root`):
- Backgrounds: `--color-bg-1`, `--color-bg-2`, `--color-surface-1`, `--color-surface-2` (a translucent dark grey, `#2d2d2d88` — needs a dark backdrop to read correctly)
- Accent: `--color-accent` (`#48e9b5`, teal/mint — the live primary accent used in gradients and glows) plus a secondary violet family `--color-accent-1/2/3` (`#8b5cf6`/`#a855f7`/`#9333ea`)
- Other semantic colors: `--color-secondary-1` (cyan), `--color-highlight-1` (pink), `--color-success-1`, `--color-white`
- Text: `--color-text-primary` (white), `--color-text-secondary`, `--color-text-muted`
- Gradients: `--gradient-neon`, `--gradient-cosmic`, `--gradient-vibrant`, `--gradient-tech`, `--gradient-accent`
- Type: `--font-primary` (system-ui stack), `--font-heading` (Inter, falls back to Helvetica/Arial — no `@font-face` is shipped, so it renders in the system fallback), `--font-mono` (JetBrains Mono, same fallback situation)
- Shape/motion: `--radius`, `--border-radius`, `--shadow-neon`, `--shadow-accent`, `--transition`

`Button`'s `variant` prop (`"primary" | "gradient" | "secondary" | "ghost"`) maps directly to `.btn-primary` / `.btn-gradient` / `.btn-secondary` / `.btn-ghost` — don't invent new class names for buttons, use the `variant` prop. For `variant="gradient"`, pass `innerClassName` to match context (`"btn-gradient-hero"`, `"btn-gradient-slider"`, `"btn-gradient-formulario"` are the three used in the source site) — it controls the inner fill behind the gradient border.

**Where the truth lives.** Read `styles.css` (bound alongside these components) before styling anything new — it's the single global stylesheet every component depends on, including the full `:root` token list above. Each component also ships its own `<Name>.prompt.md` with real usage examples pulled from this design system's own pages — read those before composing.

**Layout note:** `Button` variant `"gradient"` is `display:flex` (a block-level box) — it fills its container's width unless placed inside a `display:flex` row (e.g. alongside another button). Compact pill buttons need a flex row wrapper; a full-width CTA button is also a valid, intentional pattern used in this design system (e.g. its confirmation page).

**Idiomatic snippet** (adapted from the real Hero section):

```tsx
<div style={{ background: 'var(--color-bg-1)' }}>
  <Header />
  <Hero />
  <ProcessSlider />
  <ContactForm />
  <Footer />
</div>
```

For a single CTA row, wrap gradient buttons in a flex container:

```tsx
<div style={{ display: 'flex', gap: '1rem' }}>
  <Button variant="primary" href="#contacto">Solicita tu cotización</Button>
  <Button variant="gradient" href="#portafolio" innerClassName="btn-gradient-hero">
    Ver Portafolio
  </Button>
</div>
```
