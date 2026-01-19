"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Globe, Shield, MonitorPlay } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Channels from 115+ Countries",
    description: "Watch channels from all around the world including sports, news, entertainment, movies, and more.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enjoy a secure streaming experience with encrypted connections and 99.9% uptime guarantee on all plans.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: MonitorPlay,
    title: "HD/FHD/4K Quality",
    description:
      "Enjoy crystal clear streaming quality with support for HD, Full HD, and 4K resolution on compatible devices.",
    gradient: "from-primary to-accent",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 glass border-white/5 h-full text-center hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
