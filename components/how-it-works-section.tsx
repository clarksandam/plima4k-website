"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Mail, Tv } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Place Your Order",
    description: "Choose your plan and contact us via WhatsApp to place your order",
    image: "/how-it-works/step1-order.jpg",
    color: "from-green-500 to-emerald-500",
    accent: "#22c55e",
  },
  {
    number: "2",
    icon: Mail,
    title: "Get Your Account",
    description: "Receive your IPTV account credentials within 5-30 minutes after payment",
    image: "/how-it-works/step2-credentials.jpg",
    color: "from-blue-500 to-cyan-500",
    accent: "#3b82f6",
  },
  {
    number: "3",
    icon: Tv,
    title: "Start Watching",
    description: "Install the app, enter your credentials and enjoy HD/FHD/4K streaming",
    image: "/how-it-works/step3-watch.jpg",
    color: "from-purple-500 to-pink-500",
    accent: "#a855f7",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Simple Setup
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get started in just 3 simple steps and enjoy unlimited entertainment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[140px] left-[15%] right-[15%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative group"
            >
              {/* Image card */}
              <motion.div
                className="relative mb-8"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative"
                  style={{
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -15px ${step.accent}30`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${step.accent}20 0%, transparent 70%)`,
                    }}
                  />

                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Icon overlay */}
                  <motion.div
                    className="absolute bottom-4 right-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Step number badge */}
                <motion.div
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-background`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {step.number}
                </motion.div>
              </motion.div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>

              {/* Arrow indicator between cards */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute top-[140px] -right-6 lg:-right-8 text-muted-foreground/50 items-center justify-center w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
