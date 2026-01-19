"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, MessageCircle, Download, Mail, Send, Sparkles } from "lucide-react"

interface OrderData {
  name: string
  email: string
  country: string
  paymentMethod: string
  plan: string
  bonus: string
  devices: number
  basePrice: number
  totalPrice: number
}

export default function InvoiceContent() {
  const searchParams = useSearchParams()
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [whatsappLink, setWhatsappLink] = useState<string>("")
  const [whatsappOpened, setWhatsappOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const storedOrder = sessionStorage.getItem("plima4k_order")
      const storedWhatsapp = sessionStorage.getItem("plima4k_whatsapp_link")

      if (storedOrder) {
        setOrderData(JSON.parse(storedOrder))
      }
      if (storedWhatsapp) {
        setWhatsappLink(storedWhatsapp)
      }
      setIsLoading(false)
    } catch (e) {
      console.error("Failed to retrieve order data", e)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (orderData && whatsappLink && !whatsappOpened) {
      const timer = setTimeout(() => {
        window.open(whatsappLink, "_blank")
        setWhatsappOpened(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [orderData, whatsappLink, whatsappOpened])

  if (isLoading) {
    return <div className="text-white text-center py-20">Loading invoice...</div>
  }

  if (!orderData || !whatsappLink) {
    return <div className="text-white text-center py-20">Order data not found. Please try again.</div>
  }

  const invoiceNumber = `PLIMA-${Date.now().toString().slice(-8)}`
  const invoiceDate = new Date().toLocaleDateString("en-GB")

  const emailSubject = encodeURIComponent(`PLIMA4K Order Confirmation - ${invoiceNumber}`)
  const emailBody = encodeURIComponent(
    `Hi ${orderData.name},\n\nThank you for your order!\n\nOrder Details:\nPlan: ${orderData.plan} ${orderData.bonus}\nDevices: ${orderData.devices}\nTotal: €${orderData.totalPrice.toFixed(2)}\nPayment Method: ${orderData.paymentMethod}\n\nPlease contact us on WhatsApp, Email, or Telegram to complete your activation.\n\nBest regards,\nPLIMA4K Support Team`,
  )
  const emailLink = `mailto:support@plima4k.com?subject=${emailSubject}&body=${emailBody}`

  const telegramText = encodeURIComponent(
    `Hello! I want to purchase PLIMA4K IPTV.\n\nOrder Details:\n• Plan: ${orderData.plan} ${orderData.bonus}\n• Devices: ${orderData.devices}\n• Total Price: €${orderData.totalPrice.toFixed(2)}\n• Payment Method: ${orderData.paymentMethod}\n• Name: ${orderData.name}\n• Email: ${orderData.email}\n• Country: ${orderData.country}\n\nPlease confirm my order and provide setup instructions.`,
  )
  const telegramLink = `https://t.me/smaxai?text=${telegramText}`

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.6 }} className="inline-block">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center border-2 border-green-500/50 shadow-lg shadow-green-500/20">
              <CheckCircle2 className="w-14 h-14 text-green-400" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-3">
            Order Confirmed!
          </h1>
          <p className="text-white/70 text-lg">Your PLIMA4K subscription is ready for activation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    PLIMA4K IPTV
                  </h2>
                </div>
                <p className="text-white/60 text-sm">Premium Streaming Service</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-sm">Invoice #</p>
                <p className="text-white font-mono font-semibold text-lg">{invoiceNumber}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-widest mb-3">Bill To</p>
                <div className="space-y-1">
                  <p className="text-white font-semibold text-lg">{orderData.name}</p>
                  <p className="text-white/70">{orderData.email}</p>
                  <p className="text-white/70">{orderData.country}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-right"
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-blue-400/80 text-xs font-bold uppercase tracking-widest">Invoice Date</p>
                    <p className="text-white font-semibold">{invoiceDate}</p>
                  </div>
                  <div>
                    <p className="text-blue-400/80 text-xs font-bold uppercase tracking-widest">Payment Method</p>
                    <p className="text-white font-semibold">{orderData.paymentMethod}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="space-y-3 mb-6 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{orderData.plan}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-500/50 rounded-full text-green-200 text-xs font-bold">
                    {orderData.bonus}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">
                    {orderData.devices} Device{orderData.devices > 1 ? "s" : ""}
                  </span>
                  <span className="text-cyan-400 font-bold text-lg">€{orderData.basePrice.toFixed(2)}</span>
                </div>
                {orderData.devices > 1 && (
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
                    <span className="text-white/70">Extra Device Fees</span>
                    <span className="text-blue-400 font-bold">
                      €{(orderData.totalPrice - orderData.basePrice).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center p-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/10"
              >
                <span className="text-white font-bold text-lg">Total Amount</span>
                <span className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  €{orderData.totalPrice.toFixed(2)}
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg mb-8 flex items-start gap-3"
            >
              <Sparkles className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
              <p className="text-blue-100 text-sm">
                <span className="font-bold">Next Step:</span> Choose your preferred contact method below to complete
                your activation. WhatsApp is opening automatically.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(whatsappLink, "_blank")}
            className="group py-4 bg-gradient-to-br from-green-500 to-emerald-600 hover:shadow-xl hover:shadow-green-500/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">WhatsApp</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(telegramLink, "_blank")}
            className="group py-4 bg-gradient-to-br from-blue-500 to-cyan-600 hover:shadow-xl hover:shadow-blue-500/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Telegram</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(emailLink, "_blank")}
            className="group py-4 bg-gradient-to-br from-orange-500 to-amber-600 hover:shadow-xl hover:shadow-orange-500/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Email</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.print()}
            className="flex-1 py-4 border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Invoice
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 space-y-2"
        >
          <p className="text-white/80 text-sm font-medium">
            Ready to start streaming? Our support team is here to help!
          </p>
          <p className="text-white/60 text-xs">
            Available 24/7 on WhatsApp, Telegram, and Email for instant activation support
          </p>
        </motion.div>
      </div>
    </main>
  )
}
