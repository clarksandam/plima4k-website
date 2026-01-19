import { Navigation } from "@/components/navigation"
import { SetupGuideHero } from "@/components/setup-guide-hero"
import { SetupGuideDevices } from "@/components/setup-guide-devices"
import { SetupGuideSupport } from "@/components/setup-guide-support"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"

export const metadata = {
  title: "Setup Guide | PLIMA4K - Install & Stream",
  description:
    "Step-by-step setup instructions for PLIMA4K on all devices - Android, iOS, Fire Stick, Smart TV, Windows, and more.",
}

export default function SetupGuidePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SetupGuideHero />
      <SetupGuideDevices />
      <SetupGuideSupport />
      <Footer />
      <FloatingSupport />
    </main>
  )
}
