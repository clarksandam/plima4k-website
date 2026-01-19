"use client"

import { motion } from "framer-motion"
import { Trophy, Headphones, Zap, Shield, Globe, Tv } from "lucide-react"

const benefits = [
  { text: "High quality streaming stability", icon: Zap },
  { text: "Fast and helpful support", icon: Headphones },
  { text: "Regular content updates", icon: Globe },
  { text: "Easy setup process", icon: Tv },
  { text: "All international channels", icon: Shield },
  { text: "Competitive pricing", icon: Trophy },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-4"
            >
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Why Choose Us</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Best IPTV Services</h2>
            <p className="text-lg gradient-text font-semibold mb-6">in 2026</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 90,000 channels from around the world, we offer the best streaming experience. High quality,
              stable service, and excellent customer support make us the top choice.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground group cursor-default"
                >
                  <motion.div
                    className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="group-hover:text-primary transition-colors">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />

            <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative">
              <img
                src="/iptv-streaming-interface-multiple-devices-smart-tv.jpg"
                alt="IPTV on multiple devices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-xl glass border border-white/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Streaming</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
