"use client"

import type React from "react"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Zap, Shield, Smartphone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const planData: { [key: string]: { name: string; duration: string; bonus: string } } = {
  "3months": { name: "3 Months", duration: "3", bonus: "+1 Month Free" },
  "6months": { name: "6 Months", duration: "6", bonus: "+1 Month Free" },
  "12months": { name: "12 Months", duration: "12", bonus: "+1 Month Free" },
  "24months": { name: "24 Months", duration: "24", bonus: "+2 Months Free" },
}

const priceData: { [key: string]: number } = {
  "3months": 35.99,
  "6months": 49.99,
  "12months": 69.99,
  "24months": 99.99,
}

const paymentMethods = ["PayPal", "Credit Card", "Crypto", "Gift Card"]
const countries = [
  "UK",
  "USA",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Other",
]

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = searchParams.get("plan") || "12months"
  const devices = Number.parseInt(searchParams.get("devices") || "1")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    paymentMethod: "",
  })

  const [isSubmitHovered, setIsSubmitHovered] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const planInfo = planData[plan] || planData["12months"]
  const basePrice = priceData[plan] || 69.99
  const totalPrice =
    basePrice + (devices - 1) * (plan === "3months" ? 10 : plan === "6months" ? 15 : plan === "12months" ? 20 : 25)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.country || !formData.paymentMethod) {
      alert("Please fill in all fields")
      return
    }

    const orderData = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
      paymentMethod: formData.paymentMethod,
      plan: planInfo.name,
      bonus: planInfo.bonus,
      devices,
      basePrice,
      totalPrice,
    }

    // Store in sessionStorage to avoid URL encoding issues
    sessionStorage.setItem("plima4k_order", JSON.stringify(orderData))

    const message = `Hello! I want to purchase PLIMA4K IPTV.

*Order Details:*
• Plan: ${planInfo.name} (${planInfo.bonus})
• Devices: ${devices}
• Total Price: €${totalPrice.toFixed(2)}
• Payment Method: ${formData.paymentMethod}

*Customer Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Country: ${formData.country}

Please confirm my order and provide setup instructions.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/447520663325?text=${encodedMessage}`

    // Store WhatsApp link in sessionStorage
    sessionStorage.setItem("plima4k_whatsapp_link", whatsappLink)

    // Navigate to invoice
    setTimeout(() => {
      router.push("/checkout/invoice")
    }, 300)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-semibold">
              ✨ Final Step to Streaming Paradise
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Complete Your Purchase
          </h1>
          <p className="text-white/70 text-lg">Just a few details and you're ready to stream</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6 glass rounded-2xl p-8 border border-white/10">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-semibold text-white mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <label className="block text-sm font-semibold text-white mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-white/10 transition-all"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-sm font-semibold text-white mb-3">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all"
                >
                  <option value="" className="bg-slate-900">
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="bg-slate-900">
                      {country}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <label className="block text-sm font-semibold text-white mb-4">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method, idx) => (
                    <motion.button
                      key={method}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method }))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + idx * 0.05 }}
                      className={`p-4 rounded-xl border-2 transition-all font-semibold ${
                        formData.paymentMethod === method
                          ? "border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-white shadow-lg shadow-cyan-500/25"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {method}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onMouseEnter={() => setIsSubmitHovered(true)}
                onMouseLeave={() => setIsSubmitHovered(false)}
              >
                <Button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Zap className="w-5 h-5" />
                  Proceed
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="sticky top-24 glass rounded-2xl p-8 border border-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl">
              <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-white/70 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    Plan
                  </span>
                  <span className="text-white font-semibold">{planData[plan]?.name}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-white/70 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    Bonus
                  </span>
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text font-semibold">
                    {planData[plan]?.bonus}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-white/70 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-400" />
                    Devices
                  </span>
                  <span className="text-white font-semibold">
                    {devices} Device{devices > 1 ? "s" : ""}
                  </span>
                </motion.div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Base Price</span>
                  <span>€{basePrice.toFixed(2)}</span>
                </div>
                {devices > 1 && (
                  <div className="flex justify-between text-white/60 text-sm">
                    <span>Extra Devices ({devices - 1}x)</span>
                    <span>
                      €
                      {(
                        (devices - 1) *
                        (plan === "3months" ? 10 : plan === "6months" ? 15 : plan === "12months" ? 20 : 25)
                      ).toFixed(2)}
                    </span>
                  </div>
                )}
                <motion.div
                  className="pt-3 border-t border-white/10 flex justify-between items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-xl"
                  animate={{ boxShadow: ["0 0 0 0 rgba(34, 211, 238, 0.1)", "0 0 20px 0 rgba(34, 211, 238, 0.3)"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    €{totalPrice.toFixed(2)}
                  </span>
                </motion.div>
              </div>

              <div className="space-y-3 text-sm">
                {[
                  { icon: Shield, text: "24/7 Customer Support", color: "text-cyan-400" },
                  { icon: Zap, text: "Instant Setup", color: "text-purple-400" },
                  { icon: CheckCircle2, text: "Money-back Guarantee", color: "text-pink-400" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + idx * 0.05 }}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </>
  )
}
