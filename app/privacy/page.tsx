"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Information Sharing" },
  { id: "cookies", title: "5. Cookies and Tracking" },
  { id: "security", title: "6. Data Security" },
  { id: "retention", title: "7. Data Retention" },
  { id: "rights", title: "8. Your Rights" },
  { id: "third-party", title: "9. Third-Party Links" },
  { id: "changes", title: "10. Policy Changes" },
  { id: "contact", title: "11. Contact Us" },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-4">Last updated: January 2026</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your
            information.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="sticky top-24 glass rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm text-muted-foreground mb-4">Contents</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id)
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`w-full text-left text-sm p-2 rounded transition-all flex items-center justify-between group ${
                    activeSection === section.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <span className="line-clamp-2">{section.title}</span>
                  {activeSection === section.id && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-12"
          >
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                PLIMA4K ("Company," "we," "us," or "our") respects your privacy. This Privacy Policy explains our data
                practices and your rights regarding your personal information.
              </p>
            </section>

            <section id="information-collected" className="space-y-4">
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">2.1 Information You Provide</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Email address",
                    "Password",
                    "Payment information",
                    "Device information",
                    "Geographic location",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">2.2 Automatically Collected Information</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {["IP address", "Browsing activity", "Device type", "Streaming history", "Crash reports"].map(
                    (item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            <section id="how-we-use" className="space-y-4">
              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  "Provide and maintain our Services",
                  "Process payments and manage subscriptions",
                  "Improve user experience",
                  "Detect and prevent fraud",
                  "Respond to customer support requests",
                  "Send important updates and notifications",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="sharing" className="space-y-4">
              <h2 className="text-2xl font-bold">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share data with trusted service providers (payment
                processors, hosting providers) bound by confidentiality agreements. We may disclose information if
                required by law or to protect rights and safety.
              </p>
            </section>

            <section id="cookies" className="space-y-4">
              <h2 className="text-2xl font-bold">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, remember preferences, and analyze
                usage patterns. You can control cookie settings in your browser.
              </p>
            </section>

            <section id="security" className="space-y-4">
              <h2 className="text-2xl font-bold">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including SSL encryption, secure servers, and access
                controls to protect your information from unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section id="retention" className="space-y-4">
              <h2 className="text-2xl font-bold">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide
                services. You can request deletion by contacting support.
              </p>
            </section>

            <section id="rights" className="space-y-4">
              <h2 className="text-2xl font-bold">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  "Access your personal data",
                  "Correct inaccurate information",
                  "Request deletion of your data",
                  "Opt-out of marketing communications",
                  "Port your data to another service",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-bold">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices.
                Please review their privacy policies before sharing information.
              </p>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-bold">10. Policy Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes become effective when posted to the website.
                Continued use of our Services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy inquiries, contact us at: privacy@plima4k.com or through our support portal at
                plima4k.com/support
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
