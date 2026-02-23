import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import HomePage from "@/app/page";
import ProductPage from "@/app/product/page";
import ROIPage from "@/app/roi/page";
import GalleryPage from "@/app/gallery/page";

jest.mock("@/components/layout/Navbar", () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

jest.mock("@/components/layout/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock("@/components/sections/Hero", () => ({
  Hero: () => <section data-testid="hero">Hero</section>,
}));

jest.mock("@/components/sections/ProblemCards", () => ({
  ProblemCards: () => <section data-testid="problem-cards">Problem Cards</section>,
}));

jest.mock("@/components/sections/KeyCapabilitiesGrid", () => ({
  KeyCapabilitiesGrid: () => <section data-testid="key-capabilities">Key Capabilities</section>,
}));

jest.mock("@/components/sections/ImpactMetrics", () => ({
  ImpactMetrics: () => <section data-testid="impact-metrics">Impact Metrics</section>,
}));

jest.mock("@/components/sections/SuccessCarousel", () => ({
  SuccessCarousel: () => <section data-testid="success-carousel">Success Carousel</section>,
}));

jest.mock("@/components/sections/TrustCompliance", () => ({
  TrustCompliance: () => <section data-testid="trust-compliance">Trust Compliance</section>,
}));

jest.mock("@/components/sections/FooterCTA", () => ({
  FooterCTA: () => <section data-testid="footer-cta">Footer CTA</section>,
}));

jest.mock("@/components/sections/TeamSection", () => ({
  TeamSection: () => <section data-testid="team-section">Team Section</section>,
}));

jest.mock("@/components/sections/PricingAndContact", () => ({
  PricingAndContact: () => <section data-testid="pricing-contact">Pricing and Contact</section>,
}));

jest.mock("@/components/sections/HowItWorksSteps", () => ({
  HowItWorksSteps: () => <section data-testid="how-it-works">How It Works</section>,
}));

jest.mock("@/components/sections/TechnicalArchitecture", () => ({
  TechnicalArchitecture: () => <section data-testid="technical-architecture">Technical Architecture</section>,
}));

jest.mock("@/components/sections/OCRShowcase", () => ({
  OCRShowcase: () => <section data-testid="ocr-showcase">OCR Showcase</section>,
}));

jest.mock("@/components/sections/SolutionArchitecture", () => ({
  SolutionArchitecture: () => <section data-testid="solution-architecture">Solution Architecture</section>,
}));

jest.mock("@/components/sections/CompetitiveAdvantage", () => ({
  CompetitiveAdvantage: () => <section data-testid="competitive-advantage">Competitive Advantage</section>,
}));

jest.mock("@/components/sections/OfflineMode", () => ({
  OfflineMode: () => <section data-testid="offline-mode">Offline Mode</section>,
}));

jest.mock("@/components/sections/ROIComparisonTable", () => ({
  ROIComparisonTable: () => <section data-testid="roi-comparison">ROI Comparison</section>,
}));

jest.mock("@/components/sections/ROICalculator", () => ({
  ROICalculator: () => <section data-testid="roi-calculator">ROI Calculator</section>,
}));

jest.mock("@/components/sections/FraudPrevention", () => ({
  FraudPrevention: () => <section data-testid="fraud-prevention">Fraud Prevention</section>,
}));

jest.mock("@/components/sections/HardwareShowcase", () => ({
  HardwareShowcase: () => <section data-testid="hardware-showcase">Hardware Showcase</section>,
}));

jest.mock("@/components/sections/SoftwareWalkthrough", () => ({
  SoftwareWalkthrough: () => <section data-testid="software-walkthrough">Software Walkthrough</section>,
}));

jest.mock("@/components/sections/MobileAppGallery", () => ({
  MobileAppGallery: () => <section data-testid="mobile-app-gallery">Mobile App Gallery</section>,
}));

describe("Website pages", () => {
  it("renders home page core sections", () => {
    render(<HomePage />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("key-capabilities")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders about page mission content", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /our mission/i })).toBeInTheDocument();
    expect(screen.getByTestId("team-section")).toBeInTheDocument();
  });

  it("renders contact page pricing hero", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getByTestId("pricing-contact")).toBeInTheDocument();
  });

  it("renders product page technology sections", () => {
    render(<ProductPage />);
    expect(screen.getByRole("heading", { name: /the science of seamless sync/i })).toBeInTheDocument();
    expect(screen.getByTestId("ocr-showcase")).toBeInTheDocument();
    expect(screen.getByTestId("technical-architecture")).toBeInTheDocument();
  });

  it("renders roi page impact section", () => {
    render(<ROIPage />);
    expect(screen.getByRole("heading", { name: /impact beyond the bottom line/i })).toBeInTheDocument();
    expect(screen.getByTestId("roi-calculator")).toBeInTheDocument();
    expect(screen.getByTestId("fraud-prevention")).toBeInTheDocument();
  });

  it("renders gallery page with ecosystem heading", () => {
    render(<GalleryPage />);
    expect(screen.getByRole("heading", { name: /ecosystem in action/i })).toBeInTheDocument();
    expect(screen.getByTestId("hardware-showcase")).toBeInTheDocument();
    expect(screen.getByTestId("software-walkthrough")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-app-gallery")).toBeInTheDocument();
  });

  it("renders gallery page with navbar and footer", () => {
    render(<GalleryPage />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer-cta")).toBeInTheDocument();
  });

  it("renders all pages with consistent navbar presence", () => {
    const pages = [HomePage, AboutPage, ContactPage, ProductPage, ROIPage, GalleryPage];
    for (const Page of pages) {
      const { unmount } = render(<Page />);
      expect(screen.getByTestId("navbar")).toBeInTheDocument();
      unmount();
    }
  });
});
