"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, Zap, Play, Shield, Star, Tv, Film, Globe } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function FloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const bgX = useTransform(x, [-0.5, 0.5], [-20, 20])
  const bgY = useTransform(y, [-0.5, 0.5], [-20, 20])
  const orbX = useTransform(x, [-0.5, 0.5], [-40, 40])
  const orbY = useTransform(y, [-0.5, 0.5], [-40, 40])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  const titleText = "Best IPTV Subscription"
  const subtitleText = "Without Buffering"

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center py-16 lg:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a0f1a] to-background" />

        <motion.div className="absolute inset-0 opacity-40" style={{ x: bgX, y: bgY }}>
          <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-tl from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-transparent to-transparent rounded-full blur-[80px]" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(34,211,238,0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(168,85,247,0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(34,211,238,0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] z-[1]" style={{ x: orbX, y: orbY }}>
        <motion.div
          className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-blue-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] z-[1]"
        style={{ x: useTransform(orbX, (v) => -v), y: useTransform(orbY, (v) => -v) }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-tl from-purple-500/30 to-pink-500/15 rounded-full blur-[80px]"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <motion.div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] z-[1]">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-[70px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[2] overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
            maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: i % 3 === 0 ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.6)",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        <FloatingCard delay={0.5}>
          <div className="absolute top-[15%] left-[10%] glass p-3 rounded-xl opacity-60">
            <Tv className="w-6 h-6 text-primary" />
          </div>
        </FloatingCard>
        <FloatingCard delay={0.8}>
          <div className="absolute top-[25%] right-[12%] glass p-3 rounded-xl opacity-60">
            <Film className="w-6 h-6 text-accent" />
          </div>
        </FloatingCard>
        <FloatingCard delay={1.1}>
          <div className="absolute bottom-[30%] left-[8%] glass p-3 rounded-xl opacity-60">
            <Globe className="w-6 h-6 text-primary" />
          </div>
        </FloatingCard>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-primary/30 relative overflow-hidden group cursor-default"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              animate={{ translateX: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide">
              <span className="text-cyan-400">#1</span> Premium 4K Streaming in 2026
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="block text-foreground overflow-hidden">
                {titleText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block mt-2 overflow-hidden">
                {subtitleText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleText.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block gradient-text"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div
              className="h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Stream all your favorite channels in <span className="text-primary font-medium">crystal-clear 4K</span>{" "}
            quality. <span className="text-foreground font-medium">90,000+</span> movies and series, supported on{" "}
            <span className="text-foreground font-medium">all devices</span>.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {[
              { value: 30000, label: "Live Channels", suffix: "+" },
              { value: 140000, label: "VOD Content", suffix: "+" },
              { value: 99, label: "Uptime", suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg shadow-xl shadow-primary/25 group w-full sm:w-auto overflow-hidden"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ["0%", "200%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                />
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Subscribe Now
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-border bg-card/30 backdrop-blur-md hover:bg-card/50 hover:border-primary/50 px-10 py-7 text-lg transition-all group w-full sm:w-auto overflow-hidden"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:text-primary transition-all" />
                View Plans
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            {[
              { icon: Shield, text: "Secure Payment", color: "text-green-500" },
              { icon: Star, text: "4.9/5 Rating", color: "text-yellow-500", fill: true },
              { icon: Zap, text: "Instant Activation", color: "text-primary" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:glass-bright border border-white/10 hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 + i * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color} ${item.fill ? "fill-current" : ""}`} />
                </motion.div>
                <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 group-hover:border-primary/50 transition-colors">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[4]" />
    </section>
  )
}
