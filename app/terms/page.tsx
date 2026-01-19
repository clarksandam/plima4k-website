"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "service", title: "2. Service Description" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "account", title: "4. Account Registration and Security" },
  { id: "subscription", title: "5. Subscription Plans and Payment" },
  { id: "refund", title: "6. Refund Policy" },
  { id: "acceptable-use", title: "7. Acceptable Use Policy" },
  { id: "devices", title: "8. Device Limitations and Compatibility" },
  { id: "availability", title: "9. Service Availability and Performance" },
  { id: "ip", title: "10. Intellectual Property Rights" },
  { id: "user-content", title: "11. User-Generated Content" },
  { id: "termination", title: "12. Termination" },
  { id: "privacy", title: "13. Privacy and Data Protection" },
  { id: "disclaimers", title: "14. Disclaimers" },
  { id: "liability", title: "15. Limitation of Liability" },
  { id: "indemnification", title: "16. Indemnification" },
  { id: "dispute", title: "17. Dispute Resolution" },
  { id: "changes", title: "18. Changes to Terms" },
  { id: "contact", title: "19. Contact Information" },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance")

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-4">Last updated: January 2026</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these Terms of Service carefully. By accessing and using PLIMA4K, you agree to be bound by these
            terms and conditions.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
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

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-12"
          >
            {/* Section 1 */}
            <section id="acceptance" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to PLIMA4K. By accessing or using our streaming services ("Services"), you agree to be bound by
                these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and
                PLIMA4K ("Company," "we," "us," or "our").
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Please read these Terms carefully before using
                our Services. If you do not agree to these Terms, you must not access or use our Services.
              </div>
            </section>

            {/* Section 2 */}
            <section id="service" className="space-y-4">
              <h2 className="text-2xl font-bold">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                PLIMA4K provides premium streaming services that allow subscribers to access live television channels,
                video-on-demand content, movies, and series through an internet connection. Our Services include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Access to 30,000+ live TV channels from around the world",
                  "On-demand library of 140,000+ movies and TV series",
                  "Electronic Program Guide (EPG) for easy navigation",
                  "Multi-device compatibility (Smart TVs, smartphones, tablets, streaming devices)",
                  "Support for SD, HD, FHD, 4K, and 8K streaming quality",
                  "24/7 customer support services",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="eligibility" className="space-y-4">
              <h2 className="text-2xl font-bold">3. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">To use our Services, you must:</p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Be at least 18 years of age or the age of majority in your jurisdiction",
                  "Have the legal capacity to enter into a binding contract",
                  "Provide accurate and complete registration information",
                  "Maintain a valid email address",
                  "Have access to a stable internet connection",
                  "Reside in a jurisdiction where streaming services are legal",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                By using our Services, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            {/* Section 4 */}
            <section id="account" className="space-y-4">
              <h2 className="text-2xl font-bold">4. Account Registration and Security</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">4.1 Account Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To access our Services, you must create an account by providing:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Valid email address",
                    "Account password",
                    "Device information (MAC address where applicable)",
                    "Payment information for subscription activation",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">4.2 Account Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials, all activities
                  that occur under your account, and notifying us immediately of any unauthorized use. We are not liable
                  for any loss or damage arising from your failure to protect your account information.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">4.3 Account Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your account is for personal use only. Sharing account credentials or allowing unauthorized access to
                  your account is strictly prohibited and may result in account termination without refund.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="subscription" className="space-y-4">
              <h2 className="text-2xl font-bold">5. Subscription Plans and Payment</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">5.1 Subscription Options</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer various subscription plans with different durations and pricing. Each plan includes access to
                  all channels, on-demand content, and features described in the service description.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">5.2 Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Subscription prices are displayed on our website at the time of purchase. Prices are subject to
                  change, but any changes will not affect active subscriptions. All prices are in the currency specified
                  at checkout.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">5.3 Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept credit cards, debit cards, PayPal, bank transfers, and other payment methods as specified on
                  our website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">5.4 Automatic Renewal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Subscriptions may automatically renew at the end of the subscription period unless you cancel before
                  the renewal date. You will be notified before any automatic renewal.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="refund" className="space-y-4">
              <h2 className="text-2xl font-bold">6. Refund Policy</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">6.1 Refund Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer refunds under the following conditions:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Technical Issues: If you experience persistent technical problems that we cannot resolve",
                    "Service Non-Delivery: If we fail to deliver the subscribed service",
                    "Billing Errors: If you were charged incorrectly",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">6.2 Refund Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To request a refund, contact our customer support within 7 days of purchase. Provide your order number
                  and detailed explanation. Allow our team to investigate and if eligible, refund will be processed
                  within 14 business days.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="acceptable-use" className="space-y-4">
              <h2 className="text-2xl font-bold">7. Acceptable Use Policy</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">7.1 Permitted Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may use our Services solely for personal, non-commercial entertainment purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">7.2 Prohibited Activities</h3>
                <p className="text-muted-foreground leading-relaxed">You must NOT:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Resell, redistribute, or commercially exploit our Services",
                    "Share your account credentials with others",
                    "Use our Services for public viewing or commercial purposes",
                    "Attempt to bypass, disable, or interfere with security features",
                    "Use automated systems to extract data from our Services",
                    "Reverse engineer, decompile, or disassemble any part of our Services",
                    "Upload, transmit, or distribute viruses or malicious code",
                    "Violate any applicable laws or regulations",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">7.3 Consequences of Violation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Violation may result in immediate account suspension or termination, forfeiture of remaining
                  subscription, and potential legal action.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="devices" className="space-y-4">
              <h2 className="text-2xl font-bold">8. Device Limitations and Compatibility</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">8.1 Supported Devices</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Services are compatible with Smart TVs, Android devices, iOS devices, Amazon Fire Stick/Fire TV,
                  MAG boxes, Enigma2 devices, Windows and Mac computers.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">8.2 System Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Minimum internet speed: 10 Mbps (HD), 25 Mbps (4K), 50 Mbps (8K). You must have a compatible device
                  with updated software/firmware and a stable internet connection.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="availability" className="space-y-4">
              <h2 className="text-2xl font-bold">9. Service Availability and Performance</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">9.1 Service Uptime</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain 99.9% service availability. However, uninterrupted service is not guaranteed due
                  to scheduled maintenance, technical issues, internet provider issues, or force majeure events.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">9.2 Content Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Channel lineups and content may change without notice due to licensing agreements, content provider
                  decisions, geographic restrictions, or technical limitations.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="ip" className="space-y-4">
              <h2 className="text-2xl font-bold">10. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our Services are owned by us or our licensors and protected
                by copyright, trademark, and intellectual property laws. We grant you a limited, non-exclusive,
                non-transferable license to access and use our Services for personal, non-commercial use.
              </p>
            </section>

            {/* Section 11 */}
            <section id="user-content" className="space-y-4">
              <h2 className="text-2xl font-bold">11. User-Generated Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you submit content to us, you grant us a worldwide, perpetual, irrevocable, royalty-free license to
                use, reproduce, modify, and distribute such content for any purpose related to our Services.
              </p>
            </section>

            {/* Section 12 */}
            <section id="termination" className="space-y-4">
              <h2 className="text-2xl font-bold">12. Termination</h2>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">12.1 Termination by You</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel your subscription at any time by contacting customer support. Cancellation takes effect
                  at the end of your current billing period.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">12.2 Termination by Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent
                  activities, fail to pay fees, abuse our Services, or create multiple accounts to circumvent
                  restrictions.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="privacy" className="space-y-4">
              <h2 className="text-2xl font-bold">13. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our collection and use of personal information is governed by our Privacy Policy. By using our Services,
                you consent to our Privacy Policy.
              </p>
            </section>

            {/* Section 14 */}
            <section id="disclaimers" className="space-y-4">
              <h2 className="text-2xl font-bold">14. Disclaimers</h2>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-orange-400">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
                </p>
                <p className="text-sm text-muted-foreground">
                  We do not warrant that all channels will be available, content quality will meet expectations, or
                  Services will be compatible with all devices or geographic locations.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="liability" className="space-y-4">
              <h2 className="text-2xl font-bold">15. Limitation of Liability</h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-400 mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
                  <li>
                    • Our total liability does not exceed the amount you paid for your subscription in the past 12
                    months
                  </li>
                  <li>
                    • We are not liable for damages from misuse, internet issues, device incompatibility, or
                    unauthorized access
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 16 */}
            <section id="indemnification" className="space-y-4">
              <h2 className="text-2xl font-bold">16. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless PLIMA4K from any claims, liabilities, damages, losses, costs,
                or expenses arising from your use of our Services, violation of these Terms, or violation of any laws.
              </p>
            </section>

            {/* Section 17 */}
            <section id="dispute" className="space-y-4">
              <h2 className="text-2xl font-bold">17. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Before filing a formal dispute, contact us to attempt informal resolution. These Terms shall be governed
                by applicable laws, and any disputes shall be subject to exclusive jurisdiction of appropriate courts.
              </p>
            </section>

            {/* Section 18 */}
            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-bold">18. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes are effective upon posting. Material
                changes are notified via email and in-service notifications. Your continued use constitutes acceptance.
              </p>
            </section>

            {/* Section 19 */}
            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold">19. Contact Information</h2>
              <div className="glass rounded-lg p-6 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Email</p>
                  <p className="text-muted-foreground">support@plima4k.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Website</p>
                  <p className="text-muted-foreground">https://plima4k.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Hours</p>
                  <p className="text-muted-foreground">24/7 Customer Support</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
