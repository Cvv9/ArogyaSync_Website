# ArogyaSync Marketing Website — Specification & Reference

> **Last updated:** 2026-03-19
> Quick-reference document. Read this to get full context without scanning every source file.

---

## 1. Purpose

Static marketing website for ArogyaSync. Showcases the product, team, pricing, ROI calculator, and technical architecture. Built with Next.js App Router and exported as static HTML for Hostinger deployment.

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| UI Primitives | Radix UI (Slot), CVA, clsx, tailwind-merge |
| Testing | Vitest + @testing-library/react |
| Build | Static export (`output: "export"`) |

## 3. Project Structure

```
ArogyaSync_Marketing_Website/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (metadata, fonts, CustomCursor)
│   │   ├── page.tsx             # Homepage (assembles all sections)
│   │   ├── globals.css          # Global Tailwind styles
│   │   ├── about/page.tsx       # About page
│   │   ├── contact/page.tsx     # Contact page
│   │   ├── gallery/page.tsx     # Gallery page
│   │   ├── product/page.tsx     # Product page
│   │   ├── roi/page.tsx         # ROI calculator page
│   │   └── reset-password/page.tsx  # Password reset page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation bar
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── sections/            # 20+ marketing section components
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemCards.tsx
│   │   │   ├── KeyCapabilitiesGrid.tsx
│   │   │   ├── HowItWorksSteps.tsx
│   │   │   ├── OCRShowcase.tsx
│   │   │   ├── SolutionArchitecture.tsx
│   │   │   ├── TechnicalArchitecture.tsx
│   │   │   ├── HardwareShowcase.tsx
│   │   │   ├── MobileAppGallery.tsx
│   │   │   ├── OfflineMode.tsx
│   │   │   ├── FraudPrevention.tsx
│   │   │   ├── CompetitiveAdvantage.tsx
│   │   │   ├── SoftwareWalkthrough.tsx
│   │   │   ├── ImpactMetrics.tsx
│   │   │   ├── SuccessCarousel.tsx
│   │   │   ├── TrustCompliance.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── TeamAdvisory.tsx
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── ROIComparisonTable.tsx
│   │   │   ├── PricingAndContact.tsx
│   │   │   └── FooterCTA.tsx
│   │   └── ui/
│   │       ├── Button.tsx       # CVA-based button (5 variants, 3 sizes)
│   │       └── CustomCursor.tsx # Animated custom cursor
│   ├── lib/
│   │   └── utils.ts             # cn() utility (clsx + tailwind-merge)
│   └── __tests__/
│       ├── utils.test.ts        # 5 tests for cn() utility
│       └── Button.test.tsx      # 7 tests for Button component
├── public/                      # Static assets (images, logos)
├── next.config.ts               # Static export config
├── vitest.config.ts             # Vitest + jsdom + React plugin
├── vitest.setup.ts              # @testing-library/jest-dom setup
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

## 4. App Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | All marketing sections assembled vertically |
| `/about` | About | Company information |
| `/product` | Product | Product details and features |
| `/gallery` | Gallery | Visual showcase |
| `/roi` | ROI Calculator | Interactive ROI comparison tool |
| `/contact` | Contact | Contact form |
| `/reset-password` | Password Reset | Password reset flow |

## 5. Key Components

### Section Components (20+)
The homepage assembles marketing sections in order: Hero → ProblemCards → KeyCapabilities → HowItWorks → OCRShowcase → SolutionArchitecture → TechnicalArchitecture → HardwareShowcase → MobileAppGallery → OfflineMode → FraudPrevention → CompetitiveAdvantage → SoftwareWalkthrough → ImpactMetrics → SuccessCarousel → TrustCompliance → Team → Pricing → FooterCTA.

### UI Components
- **Button**: CVA-based with variants (`default`, `secondary`, `outline`, `ghost`, `link`) and sizes (`default`, `sm`, `lg`). Built on Radix Slot for polymorphic rendering.
- **CustomCursor**: Framer Motion animated cursor overlay.

## 6. Configuration

### `next.config.ts`
- `output: "export"` — static HTML generation (no server required)
- `trailingSlash: true` — all routes end with `/`
- `images.unoptimized: true` — no Next.js image optimization (static hosting)

### Fonts
Configured in `layout.tsx` via `next/font/google`:
- Inter, DM Sans, JetBrains Mono

## 7. Build & Deploy

```bash
npm install
npm run dev          # Development server on :3000
npm run build        # Static export → out/
npm run test         # Run Vitest tests
npm run lint         # ESLint
```

**Deployed to**: Hostinger shared hosting
- Upload `out/` directory contents to `public_html`
- Static files only — no Node.js server required

## 8. Testing

```bash
npm test             # vitest run
npm run test:watch   # vitest (watch mode)
```
- 12 tests: 5 utility tests + 7 component tests
- Uses jsdom environment with @testing-library/react

## 9. Known Issues / Debt

- Hardcoded email `cs@arogyasync.com` in multiple section components
- Missing `robots` meta tag in layout.tsx
- No Playwright/E2E tests yet (only unit/component tests)
