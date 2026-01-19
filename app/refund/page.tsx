"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const sections = [
  { id: "overview", title: "1. Refund Policy Overview" },
  { id: "eligibility", title: "2. Refund Eligibility" },
  { id: "non-refundable", title: "3. Non-Refundable Items" },
  { id: "process", title: "4. How to Request a Refund" },
  { id: "timeline", title: "5. Refund Timeline" },
  { id: "partial-refunds", title: "6. Partial Refunds" },
  { id: "subscription-cancellation", title: "7. Subscription Cancellation" },
  { id: "disputes", title: "8. Billing Disputes" },
  { id: "promotional", title: "9. Promotional Credits" },
  { id: "contact", title: "10. Contact Support" },
]

export default function RefundPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-4">Last updated: January 2026</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We want you to be completely satisfied with PLIMA4K. Learn about our refund policy and how to get support.
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
            <section id="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Refund Policy Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                PLIMA4K is committed to customer satisfaction. If you're not satisfied with our service, we offer
                refunds under specific circumstances outlined in this policy. We're here to help resolve any issues you
                may encounter.
              </p>
            </section>

            <section id="eligibility" className="space-y-4">
              <h2 className="text-2xl font-bold">2. Refund Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">You may be eligible for a refund if:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  "You experience persistent technical issues we cannot resolve within 48 hours",
                  "The service fails to deliver features as advertised",
                  "You were charged incorrectly or duplicate charges occurred",
                  "Your account was compromised due to our security failure",
                  "The service is unavailable for more than 24 consecutive hours",
                  "You request cancellation within 7 days of purchase with no usage",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="non-refundable" className="space-y-4">
              <h2 className="text-2xl font-bold">3. Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed">Refunds are not available for:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  "Subscriptions used for more than 7 days",
                  "Requests made more than 14 days after purchase",
                  "Cancellations due to user error or device incompatibility",
                  "Subscriptions cancelled and then reactivated",
                  "Violations of Terms of Service",
                  "Service unavailability due to user's internet connection issues",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="process" className="space-y-4">
              <h2 className="text-2xl font-bold">4. How to Request a Refund</h2>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-muted-foreground space-y-2">
                <p>
                  <strong className="text-foreground">Step 1:</strong> Contact our support team via email or WhatsApp
                </p>
                <p>
                  <strong className="text-foreground">Step 2:</strong> Provide your order number and detailed
                  explanation
                </p>
                <p>
                  <strong className="text-foreground">Step 3:</strong> Our team reviews your request within 24 hours
                </p>
                <p>
                  <strong className="text-foreground">Step 4:</strong> If approved, refund is processed immediately
                </p>
              </div>
            </section>

            <section id="timeline" className="space-y-4">
              <h2 className="text-2xl font-bold">5. Refund Timeline</h2>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Credit Card/Debit Card Refunds</h3>
                <p className="text-muted-foreground text-sm">3-5 business days after approval</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">PayPal Refunds</h3>
                <p className="text-muted-foreground text-sm">2-3 business days after approval</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Bank Transfer Refunds</h3>
                <p className="text-muted-foreground text-sm">5-7 business days after approval</p>
              </div>
            </section>

            <section id="partial-refunds" className="space-y-4">
              <h2 className="text-2xl font-bold">6. Partial Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Partial refunds may be issued for subscriptions used for less than 7 days at a rate of 1/30th of the
                subscription price per day of actual use. Calculate: (Days Remaining ÷ Total Days) × Subscription Price.
              </p>
            </section>

            <section id="subscription-cancellation" className="space-y-4">
              <h2 className="text-2xl font-bold">7. Subscription Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can cancel your subscription at any time. Cancellation takes effect at the end of your current
                billing period. No refund is issued for partial months unless explicitly approved by support.
              </p>
            </section>

            <section id="disputes" className="space-y-4">
              <h2 className="text-2xl font-bold">8. Billing Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you dispute a charge, contact your payment provider immediately. Provide transaction details and any
                communications with our support team. We cooperate fully with payment provider investigations.
              </p>
            </section>

            <section id="promotional" className="space-y-4">
              <h2 className="text-2xl font-bold">9. Promotional Credits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Promotional codes, discounts, and free trial periods are non-refundable. If a promotional period was
                charged, contact support to verify and correct the issue.
              </p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund requests or billing questions, contact: support@plima4k.com or WhatsApp: +1-XXX-XXX-XXXX
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
