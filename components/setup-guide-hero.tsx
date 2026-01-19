"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export function SetupGuideHero() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            SETUP GUIDE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Your journey to seamless streaming starts here.</p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-card/50 to-card/30 border border-primary/20 rounded-2xl p-6 backdrop-blur-md"
        >
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-base text-foreground/90 leading-relaxed">
              <span className="font-semibold text-primary">Important Note:</span> The apps listed on this page are
              recommendations only. You are free to use any IPTV player you prefer, including IBO Player or any other
              compatible application.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
