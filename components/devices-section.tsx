"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tv, Smartphone, Tablet, Monitor, Flame, Apple, MessageCircle, Mail } from "lucide-react"

const devices = [
  { icon: Tv, name: "Smart TV" },
  { icon: Tv, name: "Android TV" },
  { icon: Flame, name: "Firestick" },
  { icon: Apple, name: "iPhone" },
  { icon: Smartphone, name: "Android" },
  { icon: Monitor, name: "Windows" },
  { icon: Tablet, name: "Mac" },
]

export function DevicesSection() {
  return (
    <section id="devices" className="py-24 bg-gradient-to-b from-[#111827] to-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Works on Every Device</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Smart TV, Android TV, Firestick, iPhone, Android, Windows, Mac.
          </p>
          <p className="text-sm text-muted-foreground/70">Setup takes 3 minutes. We guide you.</p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 mb-12">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <device.icon className="w-8 h-8 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">{device.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="max-w-xl mx-auto p-6 bg-card/50 border-border text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Need help installing?</h3>
            <p className="text-muted-foreground mb-4">{"We'll assist step-by-step."}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button variant="outline" className="border-border bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
