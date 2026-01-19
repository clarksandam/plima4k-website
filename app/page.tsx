import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PlatformSlideshow } from "@/components/platform-slideshow"
import { ContentSlideshow } from "@/components/content-slideshow"
import { SportsSectionHeader } from "@/components/sports-section-header"
import { SportsTournamentsMarquee } from "@/components/sports-tournaments-marquee"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { PaymentSection } from "@/components/payment-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SupportedDevices } from "@/components/supported-devices"
import { WhyChooseSection } from "@/components/why-choose-section"
import { SavingsCalculator } from "@/components/savings-calculator"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PlatformSlideshow />
      <ContentSlideshow />
      <PaymentSection />
      <PricingSection />
      <SportsSectionHeader />
      <SportsTournamentsMarquee />
      <FeaturesSection />
      <HowItWorksSection />
      <SupportedDevices />
      <WhyChooseSection />
      <SavingsCalculator />
      <FAQSection />
      <Footer />
      <FloatingSupport />
    </main>
  )
}
