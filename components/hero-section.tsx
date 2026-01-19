"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, Zap, Play, Shield, Star, Tv, Film, Globe } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useMedia } from "@/hooks/use-media"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const isMobile = useMedia("(max-width: 768px)")

  useEffect(() => {
    const duration = isMobile ? 1000 : 2000
    const steps = isMobile ? 30 : 60
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
  }, [value, isMobile])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function FloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const isMobile = useMedia("(max-width: 768px)")

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:glass-bright border border-white/10 hover:border-cyan-500/30 transition-all"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
    >
      {children}
    </motion.div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useMedia("(max-width: 768px)")

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const bgX = useTransform(x, [-0.5, 0.5], [-20, 20])
  const bgY = useTransform(y, [-0.5, 0.5], [-20, 20])
  const orbX = useTransform(x, [-0.5, 0.5], [-40, 40])
  const orbY = useTransform(y, [-0.5, 0.5], [-40, 40])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return
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
      className="relative min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a0f1a] to-background" />

        {!isMobile && (
          <motion.div className="absolute inset-0 opacity-40" style={{ x: bgX, y: bgY }}>
            <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-tl from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-transparent to-transparent rounded-full blur-[80px]" />
          </motion.div>
        )}

        {isMobile && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-[60px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] bg-gradient-to-tl from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-[50px]" />
          </div>
        )}

        {!isMobile && (
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
        )}
      </div>

      {!isMobile && (
        <>
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
            style={{ x: bgX, y: bgY }}
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
        </>
      )}

      {!isMobile && (
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
      )}

      {!isMobile && (
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
      )}

      {!isMobile && (
        <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
          {[{ icon: Tv, text: "Live Channels", color: "text-primary", fill: false }, { icon: Film, text: "VOD Content", color: "text-accent", fill: false }, { icon: Globe, text: "Uptime", color: "text-primary", fill: false }].map((item, i) => (
            <FloatingCard key={i} delay={0.5 + i * 0.3}>
              <div className="absolute top-[15%] left-[10%] glass p-3 rounded-xl opacity-60">
                {React.createElement(item.icon, { className: `w-6 h-6 ${item.color}` })}
              </div>
            </FloatingCard>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-1 sm:space-y-1.5 mt-12 sm:mt-16 lg:mt-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-full glass border border-primary/30 relative overflow-hidden group cursor-default text-xs sm:text-sm"
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
              className={isMobile ? "hidden" : ""}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
              <span className="text-cyan-400">#1</span> Streaming Service in 2026
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

          {/* Title and Subtitle Section */}
          <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-[1.05]">
              <span className="block text-foreground leading-[1.4rem] sm:leading-[1.8rem] lg:leading-relaxed">
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
              <span className="block mt-1 sm:mt-2 leading-[1.4rem] sm:leading-[1.8rem] lg:leading-relaxed">
                {subtitleText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleText.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div
              className="h-0.5 sm:h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100px", opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMobile ? 0.8 : 1.4, duration: 0.6 }}
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
                <div className="text-lg sm:text-2xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons Section */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMobile ? 1.0 : 1.6 }}
          >
            <motion.div whileHover={{ scale: isMobile ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size={isMobile ? "default" : "lg"}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-16 py-6 sm:py-10 text-lg sm:text-xl shadow-xl shadow-primary/25 group w-full sm:w-auto overflow-hidden"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ translateX: ["0%", "200%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  />
                )}
                <Zap className="w-6 h-6 mr-3" />
                Subscribe Now
                {!isMobile && (
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                )}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: isMobile ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="relative border-2 border-primary/60 bg-primary/5 hover:bg-primary/10 hover:border-primary text-primary-foreground px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg transition-all group w-full sm:w-auto overflow-hidden"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2" />
                View Plans
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges Section - Hidden on mobile, shown below fold */}
          {!isMobile && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-12 sm:pt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              {[{ icon: Shield, text: "Secure Payment", color: "text-green-500" }, { icon: Star, text: "4.9/5 Rating", color: "text-yellow-500", fill: true }, { icon: Zap, text: "Instant Activation", color: "text-primary" }].map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:glass-bright border border-white/10 hover:border-cyan-500/30 transition-all text-xs sm:text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  >
                    {React.createElement(item.icon, { className: `w-3 h-3 sm:w-4 sm:h-4 ${item.color} ${item.fill ? "fill-current" : ""}` })}
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[4]" />
    </section>
  )
}
