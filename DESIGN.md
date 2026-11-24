---
name: "Mango Leche Flan"
description: "Two desserts. One cup. Built for the heat."
colors:
  cream: "#fff8ec"
  cream-deep: "#fdf0da"
  ink: "#3a2317"
  ink-soft: "#6b4a33"
  mango: "#f59e0b"
  mango-deep: "#d97706"
  mango-tint: "#fdecc8"
  mango-ink: "#b45309"
  mango-ink-strong: "#92400e"
  flan: "#e8b04b"
  flan-deep: "#c98f2f"
  mango-fruit: "#f2a024"
  cream-layer: "#fdf6e3"
  graham: "#b07a3c"
  graham-deep: "#8a5a2b"
  choco: "#6b3f23"
  sugar: "#e8c15a"
  ok: "#2e7d43"
  err: "#b3372a"
typography:
  display:
    fontFamily: "Baloo 2, Comic Sans MS, cursive"
    fontSize: "clamp(2.1rem, 8vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Baloo 2, Comic Sans MS, cursive"
    fontSize: "clamp(1.7rem, 5.5vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Baloo 2, Comic Sans MS, cursive"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Nunito, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Baloo 2, Comic Sans MS, cursive"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  card: "18px"
  chip: "999px"
spacing:
  section: "5rem"
  section-mobile: "3.5rem"
components:
  btn-primary:
    backgroundColor: "{colors.mango}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.85rem 1.6rem"
    typography: "{typography.label}"
    boxShadow: "var(--shadow-soft)"
  btn-primary-hover:
    backgroundColor: "{colors.mango-deep}"
    transform: "translateY(-2px)"
    boxShadow: "0 4px 10px rgba(58, 35, 23, 0.16), 0 14px 32px rgba(58, 35, 23, 0.14)"
  btn-link:
    textColor: "{colors.mango-ink}"
    borderBottom: "2px solid var(--mango-tint)"
    padding: "0"
  btn-link-hover:
    borderBottomColor: "{colors.mango-deep}"
  btn-select:
    backgroundColor: "{colors.cream-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.75rem 1rem"
    border: "2px solid rgba(58, 35, 23, 0.18)"
    typography: "{typography.label}"
  btn-select-hover:
    backgroundColor: "{colors.mango-tint}"
    borderColor: "{colors.mango-deep}"
  btn-select-selected:
    backgroundColor: "{colors.mango}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
  btn-submit:
    backgroundColor: "{colors.mango}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.85rem 1.6rem"
    typography: "{typography.label}"
    boxShadow: "var(--shadow-soft)"
  price-chip:
    backgroundColor: "#fff"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    padding: "0.6rem 1rem"
  price-chip-hot:
    backgroundColor: "{colors.mango}"
    borderColor: "{colors.ink}"
  layer-row:
    backgroundColor: "#fff"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.2rem"
    boxShadow: "var(--shadow-soft)"
  layer-row-active:
    transform: "translateY(-2px)"
    boxShadow: "0 4px 10px rgba(58, 35, 23, 0.14), 0 12px 28px rgba(58, 35, 23, 0.12)"
  layer-swatch:
    width: "44px"
    height: "44px"
    rounded: "12px"
    border: "2px solid {colors.ink}"
  layer-tag:
    backgroundColor: "{colors.mango-tint}"
    textColor: "{colors.mango-ink-strong}"
    rounded: "{rounded.chip}"
    padding: "0.15rem 0.6rem"
    typography: "{typography.label}"
  product-card:
    backgroundColor: "#fff"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.25rem 1rem 1rem"
    boxShadow: "var(--shadow-soft)"
  product-card-hover:
    transform: "translateY(-4px)"
    boxShadow: "var(--shadow-card)"
  product-card-selected:
    borderColor: "{colors.mango}"
    boxShadow: "0 0 0 3px {colors.mango-tint}, var(--shadow-card)"
  product-badge:
    backgroundColor: "{colors.mango-tint}"
    textColor: "{colors.mango-ink-strong}"
    rounded: "{rounded.chip}"
    padding: "0.2rem 0.6rem"
    typography: "{typography.label}"
  about-card:
    backgroundColor: "#fff"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem 1.25rem"
    boxShadow: "var(--shadow-soft)"
  about-card-hover:
    transform: "translateY(-2px)"
    boxShadow: "var(--shadow-card)"
  form-field:
    backgroundColor: "{colors.cream}"
    border: "2px solid rgba(58, 35, 23, 0.18)"
    rounded: "12px"
    padding: "0.6rem 0.8rem"
    typography: "{typography.body}"
  form-field-focus:
    borderColor: "{colors.mango-deep}"
  channel-item:
    backgroundColor: "#fff"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    padding: "1rem 1.25rem"
    boxShadow: "var(--shadow-soft)"
  channel-item-hover:
    transform: "translateX(4px)"
    boxShadow: "var(--shadow-card)"
  channel-icon:
    backgroundColor: "{colors.cream}"
    border: "2px solid {colors.ink}"
    rounded: "12px"
    width: "44px"
    height: "44px"
---

# Design System: Mango Leche Flan

## Overview

**Creative North Star: "The Canteen Cooler"**

A warm, schoolyard-fresh identity that feels like pressing a cold cup into your hands on a 40°C day. The system leads with appetite: mango-orange as the committed accent on a cream ground, cocoa-brown ink for warmth, and visible layers that prove the product's difference at a glance. Density is generous but never loose — sections breathe on mobile, cards cast soft ink shadows, and every interactive surface responds with a confident lift. The aesthetic rejects sterile minimalism; it chooses the friendly, slightly rounded vernacular of a student-run stall, where Comic-style display type and chip-shaped buttons feel native, not nostalgic.

**Key Characteristics:**
- Cream ground (#fff8ec) with mango-orange (#f59e0b) as the single committed accent
- Cocoa-brown ink (#3a2317) for warmth, never pure black
- Baloo 2 display + Nunito body — friendly, legible, school-appropriate
- Generous 18px card radius, full-pill chip radius — soft, approachable corners
- Soft ink shadows that lift on interaction, not hover-only decoration
- Visible layering as visual proof — the cup diagram and layer swatches are the hero
- Prices (₱30/₱35) treated as first-class content, never buried

## Colors

The palette centers on a warm cream ground with one committed accent: mango orange. All other hues derive from the dessert's actual layers — flan gold, mango fruit, cream, graham brown, chocolate drizzle, caramelized sugar — making the color system edible by definition. Text-safe mango shades (--mango-ink, --mango-ink-strong) guarantee AA contrast on cream without introducing a separate "dark mode" palette.

### Primary
- **Canteen Mango** (#f59e0b): The committed accent. CTA band, price chips, selected states, caption dot. Used sparingly — its rarity is the point.
- **Mango Deep** (#d97706): Hover/active depth for primary actions.
- **Mango Tint** (#fdecc8): Wash for tags, badges, link underlines — the accent at 15% opacity equivalent.

### Neutral (Ground & Ink)
- **Warm Cream** (#fff8ec): Page ground. Slightly yellowed, never clinical white.
- **Cream Deep** (#fdf0da): Card-adjacent backgrounds, secondary button rests.
- **Cocoa Ink** (#3a2317): Primary text, borders, structural lines. Warmth over contrast theater.
- **Cocoa Ink Soft** (#6b4a33): Secondary copy, meta labels, disabled states.

### Layer-Derived (Semantic, Not Decorative)
- **Flan Gold** (#e8b04b): The flan layer, its swatch, the flan-deep variant.
- **Flan Deep** (#c98f2f): Flan layer base in the cup diagram.
- **Mango Fruit** (#f2a024): Sliced mango layer — distinct from the committed accent.
- **Cream Layer** (#fdf6e3): Whipped cream layer — barely off-white, visible on cream ground.
- **Graham** (#b07a3c): Crushed graham mid-tone.
- **Graham Deep** (#8a5a2b): Crust base, caption dot for base layer.
- **Chocolate Drizzle** (#6b3f23): Dark drizzle option.
- **Caramelized Sugar** (#e8c15a): Light drizzle option, caption dot for drizzle.

### Status
- **Okay Green** (#2e7d43): Success toast.
- **Error Red** (#b3372a): Error toast.

### Named Rules
**The One Accent Rule.** Mango orange (#f59e0b) appears on ≤10% of any screen. Its job is to say "act now" — CTA, selected price, the hot price chip. It never decorates.

**The Edible Palette Rule.** Every non-neutral color maps to a real ingredient layer. If a color cannot be pointed to in the cup diagram, it does not belong in the system.

**The Ink Warmth Rule.** No pure black (#000). Cocoa ink (#3a2317) carries all structure; its soft variant (#6b4a33) carries all secondary text. This warmth is non-negotiable.

## Typography

**Display Font:** Baloo 2 (self-hosted, weights 500–800) with Comic Sans MS cursive fallback  
**Body Font:** Nunito (self-hosted, weights 400/600/700) with Segoe UI sans-serif fallback  
**Label/Mono Font:** Baloo 2 at label weight — the display family does double duty for badges, tags, and button text

**Character:** Baloo 2's rounded, slightly inflated glyphs read friendly and appetizing at display sizes without tipping into childish. Nunito's open counters and generous x-height keep body text legible outdoors on phone screens. The pairing feels like a student-designed poster that got professionally typeset — approachable, not amateur.

### Hierarchy
- **Display** (800, clamp(2.1rem, 8vw, 3.4rem), 1.08, -0.015em): Hero headline, close footer. One per viewport.
- **Headline** (800, clamp(1.7rem, 5.5vw, 2.4rem), 1.15, -0.01em): Section headers (Layers, Order, About, Contact).
- **Title** (700, 1.15rem, 1.2): Card titles, layer names, product names.
- **Body** (400, 1rem, 1.6): Paragraph copy, descriptions, form labels. Max line length ~65ch via container constraints.
- **Label** (800, 0.75rem, 1, 0.08em, uppercase): Badges, price labels, button text, nav links, channel meta. Chip-shaped, all-caps, tight tracking.

### Named Rules
**The Display Rarity Rule.** Display weight (800) appears only at Display and Headline roles. Titles use 700; body never exceeds 600. The heaviness is reserved for the moments that must stop the scroll.

**The Label Shape Rule.** All-caps label text (0.08em tracking) only appears inside chip-radius containers (badges, buttons, nav pills). It never runs loose in body copy.

## Layout

Mobile-first, single-column flow. Hero splits to two-column grid at 880px (copy left, cup right). Layer list, product cards, and about grid go two- or three-column at desktop. Section rhythm driven by two tokens: --space-section (5rem desktop) and --space-section-mobile (3.5rem mobile). Container max-widths: 1080px hero, 900px order/about, 780px layers/contact. All sections sit on subtle radial-gradient "landscapes" (--bg-landscape-1/2/3) that shift warmth per section — never a flat wash.

Breakpoints observed: 880px (desktop grid activation). No intermediate tablet breakpoint; mobile scales fluidly via clamp().

## Elevation & Depth

Soft ink shadows — never black, never hard. Three elevations observed:
- **Ambient** (--shadow-soft): 0 2px 6px rgba(ink, 0.08), 0 8px 24px rgba(ink, 0.10) — default card rest state
- **Chip** (--shadow-chip): 0 2px 4px rgba(ink, 0.15), 0 6px 16px rgba(ink, 0.12) — price chips, tighter lift
- **Card** (--shadow-card): 0 4px 12px rgba(ink, 0.1), 0 16px 32px rgba(ink, 0.08) — hover/elevated state

Depth is **lift on interaction**, not persistent layering. Cards at rest cast ambient; hover/focus/select lifts to card elevation with transform translateY(-2px to -4px). The topbar uses backdrop-filter blur + translucent cream for sticky elevation without shadow.

### Named Rules
**The Lift-On-Intent Rule.** Shadows deepen only on hover, focus, or selection — never as static decoration. A card at rest is flat with ambient; the hand (or thumb) brings the lift.

**The Ink Shadow Rule.** All shadows use rgba(58, 35, 23, α) — cocoa ink, never neutral gray. The warmth persists in elevation.

## Shapes

**Card radius:** 18px (--r-card) — generous, friendly, applies to all cards, cups, form, topbar backdrop.
**Chip radius:** 999px (--r-chip) — full pill, applies to badges, tags, buttons, nav pills, price chips.
**Layer swatch radius:** 12px — distinct from card/chip, for the 44px color squares in the layer list.
**Cup silhouette:** 18px top / 28px bottom radius — the cup shape itself, wider at the base.
**Mini-cup radius:** 12px top / 20px bottom — scaled cup for product cards.

Borders: 2px solid cocoa ink (#3a2317) on all cards, chips, inputs, channel icons. No hairlines. The border weight matches the ink's visual weight.

### Named Rules
**The Two-Radius Rule.** The system has exactly two structural radii: card (18px) and chip (999px). Layer swatches (12px) and cup silhouettes (18/28px) are component-specific exceptions, not scale steps. No radius ladder (sm/md/lg/xl).

**The Two-Pixel Border Rule.** Structural borders are 2px cocoa ink. No 1px, no variable weight. The border is a deliberate stroke, not a whisper.

## Components

### Buttons
- **Shape:** Full pill (999px), 0.85rem vertical × 1.6rem horizontal padding (primary/submit), 0.75rem × 1rem (select).
- **Primary:** Mango bg, cocoa ink text, ambient shadow. Hover → mango-deep, lift -2px, deeper shadow. Active → reset transform.
- **Link:** No bg, mango-ink text, 2px mango-tint underline. Hover → mango-deep underline.
- **Select (product cards):** Cream-deep bg, ink text, 2px 18% ink border. Hover → mango-tint bg, mango-deep border. Selected → mango bg, ink text, ink border.
- **Submit:** Mirrors primary; full-width in form.

### Price Chips
- **Shape:** 18px radius, 2px ink border, 0.6rem × 1rem padding, min-width 108px.
- **Classic:** White bg, ink text.
- **With Drizzle (hot):** Mango bg, ink text, ink border. The hot chip *is* the accent — no extra badge needed.

### Layer Rows
- **Shape:** 18px card, 2px ink border, ambient shadow, 1.1rem × 1.2rem padding.
- **Swatch:** 44px square, 12px radius, 2px ink border, layer-specific bg.
- **Tag:** Chip radius, mango-tint bg, mango-ink-strong text, label typography.
- **Active state:** Lift -2px, card shadow, layer diagram + row highlight in sync.

### Product Cards
- **Shape:** 18px card, 2px ink border, ambient shadow, grid rows (badge, visual, info, button).
- **Visual:** Mini-cup (80×120px, 12/20px radius, 3px ink border) with layered mini-layers.
- **Selected:** Mango border (2px), 3px mango-tint ring + card shadow.
- **Entrance:** Staggered card-rise animation (0.1s steps).

### Inputs / Fields
- **Shape:** 12px radius, 2px 18% ink border, cream bg, 0.6rem × 0.8rem padding, Nunito 700.
- **Focus:** Mango-deep border, no outline (focus-visible handled globally at 3px mango-deep).

### Navigation
- **Topbar:** Sticky, translucent cream (92%) + 8px blur, 1px 8% ink border bottom.
- **Wordmark:** Baloo 2 800, 1.15rem, ink; "Mango" in mango-ink.
- **Nav links:** Label typography (700, 0.9rem), chip padding, chip radius. Hover → mango-tint bg, mango-deep text.

### Channel Items (Contact)
- **Shape:** 18px card, 2px ink border, ambient shadow, flex row (icon + text).
- **Icon:** 44px square, 12px radius, 2px ink border, cream bg, mango-ink SVG.
- **Hover:** TranslateX(4px) rightward lift, card shadow.

### Signature Component: The Layered Cup Diagram
The illustrated cup (230×300px mobile, 260×372px desktop) is the page's visual proof. Six absolutely-positioned layers (base, flan, mango, cream, graham, drizzle) with layer-specific heights and colors, 4px ink border, 18/28px radius, ambient+deep shadow. Cherry accent (18px, #d3402c + ink border) and shine gradient. Layers animate in sequence on scroll entry (layer-rise, 600ms staggered). Hover/tap a layer → highlight in diagram + matching layer row + caption update. Reduced motion: settles on flan layer.

## Do's and Don'ts

### Do:
- **Do** use mango orange (#f59e0b) only for primary actions, selected states, and the hot price chip. Its scarcity is its power.
- **Do** keep all borders at 2px cocoa ink (#3a2317). The stroke weight is part of the warm, hand-made feel.
- **Do** pair Baloo 2 800 with Nunito 400/600/700. The display family owns headlines, badges, and buttons; body owns prose.
- **Do** lift cards on hover/focus/selection (translateY -2px to -4px + card shadow). Depth responds to intent.
- **Do** show prices (₱30/₱35) in display-weight Baloo 2 at every decision point — hero, layer list, product cards, form total.
- **Do** make the layer diagram interactive. The cup is not illustration; it's the spec.
- **Do** use the landscape gradients (--bg-landscape-1/2/3) per section. They shift warmth without changing the ground.

### Don't:
- **Don't** introduce a second accent color. Mango orange is the one committed color; flan gold, mango fruit, graham, etc. are layer-semantic, not UI accents.
- **Don't** use pure black (#000) or cool grays. Cocoa ink (#3a2317) and its soft variant carry all structure.
- **Don't** add radius steps (sm/md/lg). The system has card (18px) and chip (999px). Component-specific radii (cup 18/28, swatch 12) are exceptions, not scale.
- **Don't** use hairline (1px) borders. The 2px ink stroke is deliberate.
- **Don't** make the mock checkout look real. The "Demo only" toast, hidden action, and labeled demo contract are non-negotiable honesty.
- **Don't** hide the layers. The visible layering is the differentiation; every section should reinforce it.
- **Don't** use box-shadow for static decoration. Shadows only deepen on interaction (hover, focus, selection).