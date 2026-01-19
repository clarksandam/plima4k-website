"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const competitors = [
  { name: "Netflix", monthly: 25 },
  { name: "Hulu + Disney+", monthly: 20 },
  { name: "Prime Video", monthly: 18 },
  { name: "HBO Max", monthly: 21 },
  { name: "Apple TV+", monthly: 13 },
  { name: "Cable TV", monthly: 108 },
  { name: "PPV (2/mo)", monthly: 40 },
]

export function SavingsCalculator() {
  const monthlyTotal = competitors.reduce((sum, c) => sum + c.monthly, 0)
  const yearlyTotal = monthlyTotal * 12
  const plimaMonthly = 11.99
  const plimaYearly = 79.99
  const monthlySavings = monthlyTotal - plimaMonthly
  const yearlySavings = yearlyTotal - plimaYearly

  return (
    <section className="py-6 relative overflow-hidden" id="savings">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-2 right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-2 left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
            Savings Calculator
          </h2>
          <p className="text-sm text-foreground/70">See how much you save with PLIMA4K</p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl border border-primary/20 rounded-lg overflow-hidden shadow-xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-primary/30">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Service</div>
            <div className="text-xs font-bold text-chart-2 uppercase tracking-wider text-center">Monthly</div>
            <div className="text-xs font-bold text-accent uppercase tracking-wider text-right">Yearly</div>
          </div>

          {/* Service Rows */}
          <div className="divide-y divide-border/30">
            {competitors.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.05 * (idx + 1) }}
                className="grid grid-cols-3 gap-2 p-3 hover:bg-primary/5 transition-colors text-sm"
              >
                <div className="text-foreground/90 font-medium truncate">{service.name}</div>
                <div className="text-chart-2 font-semibold text-center">€{service.monthly}</div>
                <div className="text-accent font-semibold text-right">€{(service.monthly * 12).toFixed(0)}</div>
              </motion.div>
            ))}
          </div>

          {/* Total Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-2 p-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border-t-2 border-red-500/30 text-sm"
          >
            <div className="font-bold text-foreground">Total</div>
            <div className="font-bold text-red-400 text-center">€{monthlyTotal}</div>
            <div className="font-bold text-red-400 text-right">€{yearlyTotal}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-2 p-3 bg-gradient-to-r from-chart-2/15 via-primary/15 to-accent/15 border-t-2 border-chart-2/50 text-sm"
          >
            <div>
              <div className="font-bold bg-gradient-to-r from-chart-2 to-primary bg-clip-text text-transparent">
                PLIMA4K
              </div>
              <div className="text-xs text-foreground/60">1 Device</div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="font-bold text-chart-2 text-center"
            >
              €{plimaMonthly.toFixed(2)}
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="font-bold text-primary text-right"
            >
              €{plimaYearly.toFixed(2)}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-4 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-chart-2/50 via-primary/50 to-accent/50 rounded-lg blur-xl opacity-70" />
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="relative bg-gradient-to-r from-chart-2/30 via-primary/30 to-accent/30 backdrop-blur-xl border-2 border-chart-2/60 rounded-lg p-4 text-center"
          >
            <p className="text-lg md:text-xl font-bold text-white">You Save €{yearlySavings.toFixed(0)} Per Year!</p>
          </motion.div>
        </motion.div>

        {/* Premium CTA section with animated button and glassmorphism effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-6 relative group"
        >
          {/* Animated gradient background orbs */}
          <div className="absolute -inset-1 bg-gradient-to-r from-chart-2 via-primary to-accent rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div
            className="absolute -inset-1 bg-gradient-to-r from-chart-2 via-primary to-accent rounded-2xl blur-2xl opacity-0 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Main CTA container */}
          <div className="relative bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl border border-primary/40 rounded-2xl p-6 overflow-hidden group">
            {/* Animated accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chart-2 to-transparent" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left flex-1">
                <motion.h3
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-lg md:text-xl font-bold bg-gradient-to-r from-chart-2 via-primary to-accent bg-clip-text text-transparent mb-1"
                >
                  Switch to PLIMA4K
                </motion.h3>
                <p className="text-sm text-foreground/70">
                  Enjoy unlimited entertainment with all your favorite channels and movies
                </p>
              </div>

              {/* Premium CTA Button */}
              <Link href="#pricing" className="transition-all duration-300">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/btn px-8 py-3 rounded-xl font-bold text-white whitespace-nowrap overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault()
                    const pricingElement = document.getElementById("pricing")
                    if (pricingElement) {
                      pricingElement.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-chart-2 via-primary to-accent opacity-100 group-hover/btn:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-chart-2 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                  {/* Button text */}
                  <span className="relative flex items-center gap-2">
                    Get Started Now
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
