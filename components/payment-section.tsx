"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const paymentMethods = [
  { name: "Visa", color: "#1A1F71" },
  { name: "Mastercard", color: "#EB001B" },
  { name: "PayPal", color: "#003087" },
  { name: "Apple Pay", color: "#000000" },
  { name: "Bank Transfer", color: "#10B981" },
  { name: "Mada", color: "#4CAF50" },
]

export function PaymentSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Secure Payment Methods</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Contact us on WhatsApp to complete your order. We accept multiple payment methods.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-xl glass border border-white/10 text-sm font-medium flex items-center gap-2 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: method.color }}
                >
                  {method.name.charAt(0)}
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {method.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
