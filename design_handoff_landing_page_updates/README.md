# Handoff: Guarotech Landing Page — updates from prototype

## Overview
This bundle documents a round of changes explored in an HTML prototype, meant to be implemented in the real `guarotech-landing-page-master` codebase (Vite + React/TSX, using the `Guarotech` design-system component library).

## About the design files
The file in `prototype/Guarotech-Landing-prototype.html` is a **design reference built in HTML** — it demonstrates the intended layout, copy, and behavior using the same design-system component bundle (`_ds_bundle.js`) the real app already uses. It is NOT production code to paste in. The task is to **recreate these changes inside the existing React codebase**, editing `HomePage.tsx` and its child components, following the codebase's existing patterns (React + TSX, the `Guarotech` component library, Storybook stories per component).

## Fidelity
**High-fidelity.** Copy, colors, and component usage are final — implement to match closely. Layout uses the design system's existing CSS tokens/classes (see `ds-bundle/styles.css` in the codebase), nothing invented outside that system.

## Changes to implement

### 1. New "Portafolio" section
A new section between `ProcessSlider` and `ContactForm` in `HomePage.tsx` (new component recommended: `src/components/Portfolio/Portfolio.tsx`).

- Section `id="portafolio"`, background `var(--color-bg-2)`, padding `96px 24px`, a 1px top divider using `var(--gradient-neon)` at 50% opacity.
- Header block (centered, max-width 640px): eyebrow label "Trabajo realizado" (11px, `font-mono`, uppercase, letter-spacing .08em, `var(--color-accent)`), heading "Nuestro **Portafolio**" (word "Portafolio" gradient-clipped with `var(--gradient-neon)`), then a one-line description paragraph.
- Grid of project cards, `repeat(auto-fit, minmax(320px,1fr))`, gap 32px, max-width 1040px. Card style: `var(--color-surface-1)` bg, 1px border `var(--color-surface-2)`, `var(--radius)`, overflow hidden.
  - **Card 1 — La Escuela de Caro** (live site):
    - Image area: background `var(--color-surface-2)`, image `object-fit: contain` (screenshot is 1004×445 — see `assets/portfolio-escuela-de-caro.webp`).
    - Badge "Sitio en producción" (pill, `var(--color-accent)` text/bg tint).
    - Title "La Escuela de Caro".
    - Copy: "Plataforma educativa enfocada en pastelería: enseña técnicas y recetas, además de estructuras de costos y otros temas de gestión para quienes quieren emprender en el área. En producción en laescueladecaro.com."
    - CTA: `Button` variant="secondary", href `https://laescueladecaro.com/`, label "Ver sitio".
  - **Card 2 — Diseño exploratorio para cosmetóloga** (internal prototype, no link):
    - Image area: same treatment (see `assets/portfolio-cosmetologa-prototipo.webp`).
    - Badge "Prototipo" (`var(--color-secondary-1)` tint).
    - Title "Diseño exploratorio para cosmetóloga".
    - Copy: "Prototipo para una cosmetóloga que buscaba centralizar toda su agenda de citas en una sola página web."
    - No CTA button — instead a small italic muted note: "Proyecto interno, sin enlace público" (`var(--color-text-muted)`, 13px).

### 2. ProcessSlider images replaced
The 5 default step images (planificación, UX, UI, desarrollo, soporte) are replaced with new square (1200×1200) images — see `assets/proceso-1-planificacion.png` … `assets/proceso-5-soporte.png`. Update `defaultSteps` in `ProcessSlider.tsx` (or wherever step image imports live) to reference these files. Because the real images are square and the slider's image band (`.split-image`) is a wide fixed-height strip, render each image centered with `aspect-ratio: 1/1`, `height: 100%`, `width: auto`, `margin: 0 auto` (letterboxed on a `var(--color-surface-2)` background) rather than stretching/cropping to fill the strip.

### 3. ProcessSlider CTA de-duplication
The "Solicita tu cotización" button (from `defaultSteps[i].ctaLabel/ctaHref`) currently repeats on every one of the 5 slides. Keep it only on **step 1 (Planificación)** and **step 5 (Soporte)** — remove `ctaLabel`/`ctaHref`/`ctaVariant` (or set them undefined) on steps 2–4.

### 4. ContactForm field changes
In `ContactForm.tsx` / its Sendinblue-driven markup:
- Remove these fields entirely: **Tipo de servicio**, **Rango de presupuesto**, **Limitación de tiempo**.
- Merge **Nombre** + **Apellidos** into a single field labeled "Nombre y apellido" (remove the separate Apellidos input; it's not required anymore). Placeholder: "Carlos Rodríguez".
- Email placeholder: "carlos.rodriguez@empresa.com".
- Teléfono placeholder: "+58 424-1234567"; make phone **required**, validate it has ≥7 digits.
- Rename the "Descripción" field's label to **"Cuéntanos sobre tu proyecto"**, placeholder: "Ej: necesito un e-commerce para vender productos artesanales, con carrito de compras y pagos en línea."
- Validation on submit: required = Nombre, Email (valid format), Teléfono (≥7 digits). On success, navigate to the confirmation page (`ConfirmPage.tsx` / `confirm.html`) — same as existing flow, just gated by the new validation.

### 5. Floating WhatsApp button
Fixed-position circular button, bottom-right (`bottom:28px; right:28px`, 60px diameter, 52px on mobile ≤640px with `bottom/right:20px`), background `#25D366`, white WhatsApp glyph (SVG in the prototype file), opens `https://wa.me/584125270850?text=Hola%20Guarotech%2C%20quiero%20cotizar%20un%20proyecto` in a new tab. `z-index` should sit below the ProcessSlider's own slide indicators/controls so it never overlaps them. Hover: scale 1.08 + stronger glow shadow (`var(--shadow-neon)`).

### 6. Header nav — active section highlight
As the user scrolls, highlight the nav link matching the section currently in view (mint accent color `var(--color-accent)` on the active link). Implement via `IntersectionObserver` on each anchor target (`#home`, `#proceso`, `#portafolio`, `#contacto`), rootMargin `-40% 0px -50% 0px`.

### 7. Page metadata
- `<title>`: "Guarotech — Diseño y desarrollo web"
- Favicon: simple dark rounded-square with a mint "G" (see prototype's inline SVG data-URI, or recreate as a static asset).

## Design tokens used (all pre-existing in the design system — nothing new)
`--color-bg-1`, `--color-bg-2`, `--color-surface-1`, `--color-surface-2`, `--color-accent`, `--color-secondary-1`, `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`, `--gradient-neon`, `--radius`, `--font-heading`, `--font-mono`, `--shadow-neon`, `--shadow-accent`, `--transition`.

## Assets
- `assets/portfolio-escuela-de-caro.webp` — 1004×445 screenshot of laescueladecaro.com
- `assets/portfolio-cosmetologa-prototipo.webp` — 1004×445 screenshot of the cosmetóloga prototype
- `assets/proceso-1-planificacion.png` through `proceso-5-soporte.png` — 1200×1200 replacement images for each ProcessSlider step (in order: Planificación y estrategia, Estructura/UX, Diseño/UI, Desarrollo, Soporte y mantenimiento)

## Files
- `prototype/Guarotech-Landing-prototype.html` — the full interactive prototype (single self-contained reference; open in a browser to see final behavior, including the simulated form-submit → confirmation transition, active-nav highlighting, and WhatsApp button).

## Not carried over
- Old copy mentioning "construido con Claude Design" was intentionally removed from the portfolio card — do not reintroduce it.
