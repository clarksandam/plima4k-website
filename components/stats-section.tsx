"use client"

import { motion } from "framer-motion"
import { Activity, Zap, Film, Globe } from "lucide-react"

const stats = [
  { icon: Activity, label: "99.9% uptime", description: "Server reliability" },
  { icon: Zap, label: "Fast activation", description: "5-15 minutes" },
  { icon: Film, label: "Premium channels", description: "HD & 4K quality" },
  { icon: Globe, label: "Worldwide access", description: "Global coverage" },
]

export function StatsSection() {
  return (
    <section className="py-12 border-y border-border/50 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
