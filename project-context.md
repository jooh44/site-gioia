# Project Context: Gioia e Associados

## Overview

Digital transformation for a 34-year-old law firm specialized in Health and Labor law. The goal is to project extreme authority and "Quiet Luxury" through a high-performance web platform.

## Design Mandates (CRITICAL)

These rules must be followed by every AI agent working on this project:

### 1. The Square Aesthetic (Always Square)

* **Zero Rounded Corners:** All components (buttons, cards, input fields, images, tabs, badges) must use `rounded-none` (border-radius: 0).
* **Exception:** Icons (Lucide) may have internal rounded paths, but their containers and stroke caps should be square where possible (`strokeLinecap="square"`).

### 2. Quiet Luxury & Sophistication

* **Color Palette:**
  * **Primary:** Deep Burgundy (`bg-primary`) - Represents tradition and authority.
  * **Secondary:** Refined Gold (`text-secondary`) - Used for highlights, accents, and key interactive elements.
  * **Backgrounds:** Off-white/Stone (`bg-stone-50/100/200`) or Solid Black/Deep Burgundy for high contrast.
* **Typography:**
  * **Headlines:** `Playfair Display` (Serif) - Elegant, authoritative. **Never use italics** for main headers or CTA emphasis (as per user preference).
  * **Body:** `Inter` or `Geist` (Sans-serif) - Clean, accessible.
* **Minimalism:** Avoid "busy" layouts. Use generous whitespace, high-quality imagery, and subtle SVG patterns.

## Technical Architecture

* **Framework:** Next.js (App Router, TypeScript).
* **Styling:** Tailwind CSS + Shadcn UI (Customized for Square Aesthetic).
* **Components:**
  * Modular sections in `src/components/sections`.
  * Global configuration in `src/config/site.ts`.
  * Data-driven content (Team, Services).

## Historical Context

* **Founded:** 1992 (Dr. Celso Gioia).
* **Years of Operation:** 34 years (Updated in 2026).
* **Key Stats:**

* Never lost a Case against Health Plans.
* 8,000+ Legal Actions.
* 5,000+ Families served.

## Current State & Next Steps

* [x] Initial design system and core landing page structure.

* [x] Full "Square Aesthetic" implementation (TeamSection, Navbar, etc.).
* [x] Mobile navigation accessibility and visual refinements.
* [ ] Integration with Headless CMS (Planned for Phase 2).
* [ ] Full SEO content expansion.
