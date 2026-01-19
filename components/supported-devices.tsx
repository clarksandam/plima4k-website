"use client"

import { motion } from "framer-motion"
import { Smartphone, Monitor, Tv, Chrome, Flame, Apple, Box } from "lucide-react"

const devices = [
  {
    name: "Android",
    icon: Smartphone,
    color: "#3DDC84",
    bgGradient: "from-green-500/20 to-green-600/10",
  },
  {
    name: "iOS",
    icon: Apple,
    color: "#FFFFFF",
    bgGradient: "from-gray-400/20 to-gray-500/10",
  },
  {
    name: "Windows",
    icon: Monitor,
    color: "#00A4EF",
    bgGradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "Fire TV",
    icon: Flame,
    color: "#FF9900",
    bgGradient: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "MAGBox",
    icon: Box,
    color: "#FFFFFF",
    bgGradient: "from-gray-500/20 to-gray-600/10",
  },
  {
    name: "Smart TV",
    icon: Tv,
    color: "#E91E8C",
    bgGradient: "from-pink-500/20 to-pink-600/10",
  },
  {
    name: "LG Smart",
    icon: Tv,
    color: "#A50034",
    bgGradient: "from-red-500/20 to-red-600/10",
  },
  {
    name: "Chrome",
    icon: Chrome,
    color: "#4285F4",
    bgGradient: "from-blue-500/20 to-yellow-500/10",
  },
]

export function SupportedDevices() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Supported Devices</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Watch on any device, anytime, anywhere</p>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-5 sm:p-6 border-2 transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: `${device.color}40`,
                  background: `linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)`,
                }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${device.color}30 0%, transparent 70%)`,
                  }}
                />

                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${device.color}08 0%, transparent 50%)`,
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-4">
                  {/* Icon container */}
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${device.bgGradient} border border-white/10`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <device.icon
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: device.color }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                      Available on
                    </p>
                    <h3
                      className="text-base sm:text-lg font-bold truncate transition-colors duration-300"
                      style={{ color: device.color }}
                    >
                      {device.name}
                    </h3>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top right, ${device.color} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          And many more devices supported
        </motion.p>
      </div>
    </section>
  )
}
