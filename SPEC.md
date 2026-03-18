# ArogyaSync Marketing Website — Specification & Reference

> **Last updated:** 2026-03-18
> Quick-reference document. Read this to get full context without scanning every source file.

---

## 1. Purpose

Static marketing website for ArogyaSync built with Next.js. Showcases the platform's features, ROI calculator, team profiles, and contact information. Exported as static HTML for hosting on standard web servers.

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19.2.3 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Components | Radix UI (primitives) |
| Build Output | Static export (`out/`) |

## 3. Project Structure

```
ArogyaSync_Marketing_Website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Home page
│   │   ├── about/page.tsx          # About us page
│   │   ├── contact/page.tsx        # Contact form page
│   │   ├── gallery/page.tsx        # Product gallery
│   │   ├── roi/page.tsx            # ROI calculator & comparison
│   │   ├── product/page.tsx        # Product details
│   │   └── reset-password/page.tsx # Password reset utility
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx          # Reusable button component
│       │   └── CustomCursor.tsx    # Custom cursor animation
│       └── sections/
│           ├── Hero.tsx             # Landing hero section
│           ├── HowItWorksSteps.tsx # Feature walkthrough
│           ├── HardwareShowcase.tsx # Device showcase
│           ├── OCRShowcase.tsx     # OCR demo section
│           ├── SoftwareWalkthrough.tsx # App screenshots
│           ├── TechnicalArchitecture.tsx # System diagram
│           ├── SolutionArchitecture.tsx # Architecture overview
│           ├── OfflineMode.tsx     # Offline capability section
│           ├── FraudPrevention.tsx # Blockchain anchoring
│           ├── ImpactMetrics.tsx   # Key metrics display
│           ├── CompetitiveAdvantage.tsx # Differentiators
│           ├── TrustCompliance.tsx # HIPAA/GDPR badges
│           ├── ROICalculator.tsx   # Interactive ROI tool
│           ├── ROIComparisonTable.tsx # Cost comparison
│           ├── PricingAndContact.tsx # Pricing tiers
│           ├── TeamSection.tsx     # Team profiles
│           ├── TeamAdvisory.tsx    # Advisors section
│           ├── MobileAppGallery.tsx # Flutter app screenshots
│           ├── FooterCTA.tsx       # Footer with links
│           └── ProblemCards.tsx    # Problem statement cards
├── public/
│   └── images/                     # Static assets (logos, screenshots, team photos)
├── out/                            # Static export output (Git-ignored)
├── next.config.ts                  # Next.js configuration (output: 'export')
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.mjs              # PostCSS configuration
├── eslint.config.mjs               # ESLint configuration
├── package.json
└── README.md
```

## 4. Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home page with hero, features, and CTA |
| `/about` | `app/about/page.tsx` | Company mission, team, advisors |
| `/contact` | `app/contact/page.tsx` | Contact form and information |
| `/gallery` | `app/gallery/page.tsx` | Product screenshots and demos |
| `/roi` | `app/roi/page.tsx` | ROI calculator and cost comparison |
| `/product` | `app/product/page.tsx` | Product details and specifications |
| `/reset-password` | `app/reset-password/page.tsx` | Password reset utility |

## 5. Build & Deployment

### Development

```bash
npm install
npm run dev            # Next.js dev server :3000
npm run lint           # ESLint check
```

### Production Build

```bash
npm run build          # Static export → out/
```

Output directory: `out/` contains fully static HTML/CSS/JS files.

### Deployment

**Hosted on**: Hostinger shared hosting (`arogyasync.com`)

1. Build static export: `npm run build`
2. Upload `out/` directory contents to `public_html` via FTP
3. Configure `.htaccess` for SPA-style routing (optional, as pages are pre-rendered)

**No environment variables required** — fully static site with no backend dependencies.

## 6. Key Features

### Interactive Components

- **ROI Calculator** (`ROICalculator.tsx`) — Dynamic cost savings calculation based on hospital size and patient volume
- **Custom Cursor** (`CustomCursor.tsx`) — Animated cursor following on desktop
- **Framer Motion Animations** — Scroll-triggered reveals and transitions throughout

### Content Sections

- **Hero** — Value proposition and primary CTA
- **How It Works** — 3-step process visualization
- **Hardware Showcase** — Raspberry Pi device photos and specs
- **OCR Showcase** — Live demonstration of vitals extraction
- **Technical Architecture** — System diagram with data flow
- **Fraud Prevention** — Blockchain anchoring explanation
- **Trust & Compliance** — HIPAA, GDPR, SOC 2 badges
- **Pricing** — Tiered pricing table (contact for quotes)
- **Team** — Founder and advisor profiles with photos

## 7. SEO & Metadata

Metadata configured in `app/layout.tsx`:

- Title: "ArogyaSync — AI-Powered Health Monitoring"
- Description: Platform overview
- OpenGraph tags for social sharing
- Favicon and app icons in `public/`

**Note:** Missing `robots` meta tag (flagged in code review N-20)

## 8. Testing

**No automated tests currently implemented** (flagged in IMP-027)

## 9. Known Issues / Debt

- No test coverage (Playwright/Vitest recommended in IMP-027)
- Hardcoded email `cs@arogyasync.com` in multiple files (code review N-19)
- Missing `robots` meta tag in layout.tsx (code review N-20)
- No analytics integration (Google Analytics or similar)
- Contact form is frontend-only (no backend submission endpoint)
- README contains generic Next.js template text (not customized)

## 10. Performance

- Static export ensures fast page loads
- Images in `public/images/` should be optimized (WebP format recommended)
- Framer Motion animations may impact performance on low-end devices
- No image optimization via Next.js `<Image>` component (static export limitation)

## 11. Design System

**Colors**: Defined in Tailwind config (brand colors for ArogyaSync theme)

**Typography**: Tailwind default font stack

**Components**: Radix UI primitives for accessible, unstyled base components

**Utilities**:

- `clsx` + `tailwind-merge` for conditional class merging
- `class-variance-authority` for component variant management
