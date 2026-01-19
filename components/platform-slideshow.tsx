"use client"

import type React from "react"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useState, useEffect } from "react"

// Platform data with brand colors
const platforms = [
  { name: "Netflix", color: "#E50914", textColor: "#E50914" },
  { name: "Disney+", color: "#113CCF", textColor: "#113CCF" },
  { name: "HBO Max", color: "#5822B4", textColor: "#5822B4" },
  { name: "Apple TV+", color: "#A3AAAE", textColor: "#ffffff" },
  { name: "Prime Video", color: "#00A8E1", textColor: "#00A8E1" },
  { name: "beIN Sports", color: "#FF6B00", textColor: "#FF6B00" },
  { name: "CANAL+", color: "#00D9FF", textColor: "#00D9FF" },
  { name: "Paramount+", color: "#0064FF", textColor: "#0064FF" },
  { name: "Hulu", color: "#1CE783", textColor: "#1CE783" },
  { name: "Crunchyroll", color: "#F47521", textColor: "#F47521" },
  { name: "ESPN", color: "#FF0033", textColor: "#FF0033" },
  { name: "Peacock", color: "#F4A300", textColor: "#F4A300" },
  { name: "Sky", color: "#E10A0A", textColor: "#E10A0A" },
  { name: "DAZN", color: "#3EEB49", textColor: "#3EEB49" },
]

// Duplicate for infinite scroll
const allPlatforms = [...platforms, ...platforms, ...platforms]

function PlatformLogo({ name, color, isHovered }: { name: string; color: string; isHovered: boolean }) {
  const logoStyle = {
    filter: isHovered ? "none" : "brightness(0) invert(1)",
    transition: "filter 0.3s ease",
  }

  switch (name) {
    case "Netflix":
      return (
        <svg viewBox="0 0 111 30" className="h-7 w-auto" style={logoStyle}>
          <path
            fill={isHovered ? color : "white"}
            d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.469.343 8.125.594v4.5L26.062 26V0h4.688zm-16.156 26.063c-1.563-.156-3.125-.313-4.688-.406v-9.938h-6v9.188l-4.5-.282V0h4.5v11.124h6V0h4.688v26.063zM0 0v26.063L7.5 26.5V4.687H0V0z"
          />
        </svg>
      )
    case "Disney+":
      return (
        <svg viewBox="0 0 100 40" className="h-8 w-auto" style={logoStyle}>
          <text
            x="50"
            y="28"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="20"
            fontWeight="bold"
            letterSpacing="-1"
          >
            DISNEY+
          </text>
        </svg>
      )
    case "HBO Max":
      return (
        <svg viewBox="0 0 80 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="40"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="18"
            fontWeight="900"
          >
            HBO
          </text>
        </svg>
      )
    case "Apple TV+":
      return (
        <svg viewBox="0 0 100 30" className="h-6 w-auto" style={logoStyle}>
          <text
            x="50"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="SF Pro Display, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="500"
          >
            tv+
          </text>
        </svg>
      )
    case "Prime Video":
      return (
        <svg viewBox="0 0 120 30" className="h-6 w-auto" style={logoStyle}>
          <text
            x="60"
            y="20"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="bold"
          >
            prime video
          </text>
        </svg>
      )
    case "beIN Sports":
      return (
        <svg viewBox="0 0 100 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="50"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="16"
            fontWeight="900"
          >
            beIN
          </text>
        </svg>
      )
    case "CANAL+":
      return (
        <svg viewBox="0 0 100 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="50"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="18"
            fontWeight="900"
          >
            CANAL+
          </text>
        </svg>
      )
    case "Paramount+":
      return (
        <svg viewBox="0 0 120 30" className="h-6 w-auto" style={logoStyle}>
          <text
            x="60"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="bold"
          >
            Paramount+
          </text>
        </svg>
      )
    case "Hulu":
      return (
        <svg viewBox="0 0 80 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="40"
            y="24"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="22"
            fontWeight="bold"
            letterSpacing="-1"
          >
            hulu
          </text>
        </svg>
      )
    case "Crunchyroll":
      return (
        <svg viewBox="0 0 120 30" className="h-6 w-auto" style={logoStyle}>
          <text
            x="60"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="bold"
          >
            CRUNCHYROLL
          </text>
        </svg>
      )
    case "ESPN":
      return (
        <svg viewBox="0 0 80 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="40"
            y="24"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="22"
            fontWeight="900"
            fontStyle="italic"
          >
            ESPN
          </text>
        </svg>
      )
    case "Peacock":
      return (
        <svg viewBox="0 0 100 30" className="h-6 w-auto" style={logoStyle}>
          <text
            x="50"
            y="22"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
          >
            PEACOCK
          </text>
        </svg>
      )
    case "Sky":
      return (
        <svg viewBox="0 0 60 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="30"
            y="24"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="24"
            fontWeight="900"
          >
            sky
          </text>
        </svg>
      )
    case "DAZN":
      return (
        <svg viewBox="0 0 80 30" className="h-7 w-auto" style={logoStyle}>
          <text
            x="40"
            y="24"
            textAnchor="middle"
            fill={isHovered ? color : "white"}
            fontFamily="Arial Black, sans-serif"
            fontSize="22"
            fontWeight="900"
          >
            DAZN
          </text>
        </svg>
      )
    default:
      return (
        <span className="text-lg font-bold" style={{ color: isHovered ? color : "white" }}>
          {name}
        </span>
      )
  }
}

// Animated counter component
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" })
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest))
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [count, rounded, value])

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

// Floating particle effect
function FloatingParticle({ delay, color }: { delay: number; color: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, -100],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    />
  )
}

export function PlatformSlideshow() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative py-16 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080c18] to-background" />

        {/* Animated aurora effect */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
          }}
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {platforms.slice(0, 8).map((p, i) => (
          <div key={i} className="absolute" style={{ left: `${10 + i * 12}%`, top: "50%" }}>
            <FloatingParticle delay={i * 0.3} color={p.color} />
          </div>
        ))}
      </div>

      {/* Spotlight effect following mouse */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-[2]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Top border with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[3]" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm z-[3]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.2)",
                "0 0 40px rgba(59, 130, 246, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-sm font-medium text-primary">Live Now</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              All Your Favorites
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              In One Place
            </span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Access premium content from 50+ streaming platforms worldwide
          </p>
        </motion.div>

        {/* Platform slideshow with 3D perspective */}
        <div className="relative" style={{ perspective: "1000px" }}>
          {/* Edge fades with gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 z-20 bg-gradient-to-r from-[#080c18] via-[#080c18]/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 z-20 bg-gradient-to-l from-[#080c18] via-[#080c18]/80 to-transparent pointer-events-none" />

          <div className="overflow-hidden relative z-10 py-4">
            <motion.div
              className="flex gap-5 items-center"
              animate={{ x: [0, -160 * platforms.length] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {allPlatforms.map((platform, index) => {
                const isHovered = hoveredPlatform === `${platform.name}-${index}`
                return (
                  <motion.div
                    key={`${platform.name}-${index}`}
                    className="flex-shrink-0 relative"
                    onHoverStart={() => setHoveredPlatform(`${platform.name}-${index}`)}
                    onHoverEnd={() => setHoveredPlatform(null)}
                    whileHover={{
                      scale: 1.15,
                      y: -8,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      className="absolute -inset-8 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${platform.color}40 0%, ${platform.color}20 30%, transparent 70%)`,
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.2 : 0.5,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    <div
                      className="relative w-[150px] h-[72px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center px-4 group cursor-pointer overflow-hidden"
                      style={{
                        borderColor: isHovered ? `${platform.color}50` : "rgba(255,255,255,0.1)",
                        transition: "border-color 0.3s ease",
                      }}
                    >
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(105deg, transparent 40%, ${platform.color}20 45%, ${platform.color}40 50%, ${platform.color}20 55%, transparent 60%)`,
                        }}
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{
                          x: isHovered ? "200%" : "-100%",
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      {/* Inner glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at center, ${platform.color}15 0%, transparent 70%)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 flex items-center justify-center w-full h-full">
                        <PlatformLogo name={platform.name} color={platform.color} isHovered={isHovered} />
                      </div>

                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                        style={{ backgroundColor: platform.color }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                          scaleX: isHovered ? 1 : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-14"
        >
          {[
            { value: 50, suffix: "+", label: "Platforms", icon: "📺" },
            { value: 140000, suffix: "+", label: "Movies & Series", icon: "🎬" },
            { value: 4, suffix: "K", label: "Quality", icon: "✨" },
            { value: 24, suffix: "/7", label: "Support", icon: "💬" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm text-center overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent" />

                <div className="relative z-10">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border with glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[3]" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm z-[3]" />
    </section>
  )
}
