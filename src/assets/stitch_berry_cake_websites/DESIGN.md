---
name: Azure Patisserie
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3e4850'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#605f53'
  on-secondary: '#ffffff'
  secondary-container: '#e6e3d3'
  on-secondary-container: '#666558'
  tertiary: '#695a64'
  on-tertiary: '#ffffff'
  tertiary-container: '#a896a1'
  on-tertiary-container: '#3c2f38'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#e6e3d3'
  secondary-fixed-dim: '#cac7b8'
  on-secondary-fixed: '#1c1c13'
  on-secondary-fixed-variant: '#48473c'
  tertiary-fixed: '#f1dde9'
  tertiary-fixed-dim: '#d5c1cd'
  on-tertiary-fixed: '#231820'
  on-tertiary-fixed-variant: '#51434c'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style
The design system is centered on the narrative "A celebration you can taste." It targets a premium yet approachable audience in Cameroon, focusing on the joy of weddings, birthdays, and cultural festivities. 

The visual style is a fusion of **Modern Minimalism** and **Soft Tactility**. It prioritizes high-quality food photography set against expansive whitespace and soft, luminous gradients. The interface should feel "airy" and "delicious," avoiding rigid grids in favor of organic overlaps and rounded surfaces that mimic the soft curves of artisanal pastry and frosting.

## Colors
The palette is designed to evoke a bright, tropical morning. 
- **Primary Sky Blue (#0EA5E9):** Used for key actions and branding elements to represent the vibrant Cameroonian sky.
- **The Pastry Palette:** Cream (#FFFBEB), Soft Blush (#FCE7F3), and Light Lavender (#F5F3FF) serve as container backgrounds to differentiate product categories (e.g., Cakes, Savories, Desserts).
- **Warm Accents (#FDE047):** Used sparingly for "Golden Hour" highlights, such as star ratings or "New" badges.
- **Background Strategy:** Pure white base with `linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 50%, #F0F9FF 100%)` applied to main section wrappers to create depth without visual noise.

## Typography
The typography balances the exuberant personality of **Plus Jakarta Sans** for headings with the functional clarity of **Inter** for descriptions and logistics. 

Headlines should use tight letter spacing and "Ink Trap" details characteristic of Jakarta Sans to appear modern and premium. Body text maintains generous line heights to ensure readability when customers are browsing through ingredient lists or catering packages. Use the Accent Yellow for small decorative underlines or "flourish" marks near headings.

## Layout & Spacing
This design system utilizes a **Fluid-Responsive Grid** with an emphasis on vertical rhythm. 
- **Desktop:** 12-column grid with wide 24px gutters to allow the UI to breathe.
- **Mobile:** 4-column grid with 20px side margins.
- **Spacing Logic:** Use 8px increments. Large sections (e.g., Hero to Gallery transition) should use `stack-lg` (64px) to maintain the "premium" feel of high-end editorial magazines.
- **Component Layout:** Use asymmetrical flexbox layouts for the Gallery to create a "Masonry" effect, reflecting the creative and non-linear nature of baking.

## Elevation & Depth
Elevation is achieved through **Ambient Shadows** and **Tonal Layering** rather than harsh outlines.
- **Level 1 (Cards):** Box shadow `0px 10px 30px rgba(14, 165, 233, 0.08)`. A very subtle blue tint in the shadow prevents the UI from looking muddy.
- **Level 2 (Floating Buttons/CTAs):** Box shadow `0px 20px 40px rgba(14, 165, 233, 0.15)`.
- **Glassmorphism:** Navigation bars should use a `backdrop-filter: blur(12px)` with a `70%` white opacity to allow product colors to bleed through as the user scrolls.

## Shapes
Shapes are unapologetically **Pill-shaped** and ultra-rounded. 
- Standard buttons and input fields use a `border-radius` of `9999px`.
- Feature cards and image containers use `rounded-xl` (24px to 32px) to mimic the soft edges of a frosted cake. 
- Avoid all sharp 90-degree corners to maintain the "approachable and warm" brand personality.

## Components
- **WhatsApp CTA:** A primary button variant using a gradient of Sky Blue to a slightly deeper cyan, featuring a prominent WhatsApp icon. Label: "Chat with a Baker."
- **Bakery Cards:** Cards should feature a top-heavy image with a subtle zoom effect on hover. The bottom content area uses the "Pastry Palette" (Cream/Blush) as a background instead of plain white.
- **Masonry Gallery:** Images should have alternating border-radius patterns (e.g., top-left 80px, others 24px) to create a custom, artistic look.
- **FAQ Accordion:** Uses soft lavender backgrounds for expanded states, with "plus" icons that rotate into "close" marks using a smooth spring animation.
- **Input Fields:** Thick 2px borders in Sky Blue (10% opacity) that animate to 100% opacity on focus.
- **Chips/Badges:** Small, high-contrast labels (e.g., "Gluten Free," "Wedding Favorite") using the Accent Yellow or Soft Blush backgrounds with bold `label-sm` typography.