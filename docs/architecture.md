# System Architecture: Gioia e Associados

## 1. Technology Stack

- **Frontend:** Next.js 15+ (App Router).
- **Language:** TypeScript.
- **Styles:** Tailwind CSS (Utility-first).
- **UI Components:** Radix UI / Shadcn UI (Customized).
- **Icons:** Lucide React.
- **Animations:** Framer Motion (Subtle micro-interactions).

## 2. Design System Implementation

The design system is implemented through Tailwind configuration and specialized tokens:

- **Colors:** Defined in `globals.css` (primary: burgundy, secondary: gold).
- **Borders:** Global mandate for `rounded-none`.
- **Responsive:** Mobile-first approach with custom breakpoints for high-end typography scaling.

## 3. Data Flow

Currently, content is managed through local configuration files to ensure maximum performance (Zero-JS initial state where possible):

- `src/config/site.ts`: High-level data.
- Components use static data arrays (e.g., `teamMembers`) until Phase 2 (CMS Integration).

## 4. Key Components

- `MinimalNavbar`: High-performance navigation with accessibility fixes for mobile `Sheet`.
- `TeamSection`: Tabs-based member display with rigorous square aesthetic.
- `ServicesSection`: Modular grid highlighting key firm results.
- `VisualLaw`: Reusable components for explaining complex legal processes (Planned).

## 5. Directory Structure

```text
src/
├── app/             # App Router pages
├── components/      # UI components
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Page-specific sections
│   └── ui/          # Atomic components (shadcn)
├── config/          # Site metadata and arrays
├── lib/             # Utilities (cn, etc.)
└── styles/          # Global CSS
```
