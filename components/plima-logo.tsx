"use client"

import { motion } from "framer-motion"

interface PlimaLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  animated?: boolean
}

export function PlimaLogo({ size = "md", showText = true, animated = true }: PlimaLogoProps) {
  const sizes = {
    sm: { icon: 74, text: "text-2xl", gap: "gap-2" },
    md: { icon: 94, text: "text-3xl", gap: "gap-3" },
    lg: { icon: 121, text: "text-4xl", gap: "gap-3" },
    xl: { icon: 161, text: "text-5xl", gap: "gap-4" },
  }

  const { icon: iconSize, text: textSize, gap } = sizes[size]

  const LogoIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
    >
      {/* Gradient definitions */}
      <defs>
        {/* Primary cyan to purple gradient */}
        <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#7B2FFF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>

        {/* Iris gradient */}
        <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#7B2FFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0.9" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Circuit pattern */}
        <pattern id="circuitPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.5" fill="#00D4FF" opacity="0.4" />
          <path d="M0 5h3M7 5h3M5 0v3M5 7v3" stroke="#00D4FF" strokeWidth="0.3" opacity="0.3" />
        </pattern>

        {/* Micro-pixel gradient */}
        <linearGradient id="pixelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer Eye Shape - Top curve */}
      <path
        d="M10 50 Q50 10 90 50"
        stroke="url(#eyeGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#eyeGlow)"
      />

      {/* Outer Eye Shape - Bottom curve */}
      <path
        d="M10 50 Q50 90 90 50"
        stroke="url(#eyeGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#eyeGlow)"
      />

      {/* Inner eye curves for depth */}
      <path d="M18 50 Q50 22 82 50" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <path d="M18 50 Q50 78 82 50" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />

      {/* Iris outer ring */}
      <circle
        cx="50"
        cy="50"
        r="24"
        fill="url(#irisGradient)"
        stroke="url(#eyeGradient)"
        strokeWidth="2"
        filter="url(#eyeGlow)"
      />

      {/* Circuit traces in iris */}
      <circle cx="50" cy="50" r="22" fill="url(#circuitPattern)" opacity="0.5" />

      {/* Inner iris ring */}
      <circle
        cx="50"
        cy="50"
        r="18"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="0.5"
        strokeOpacity="0.6"
        strokeDasharray="2 2"
      />

      {/* Pupil - Play button container */}
      <circle cx="50" cy="50" r="14" fill="#0a0a1a" stroke="#7B2FFF" strokeWidth="1.5" />

      {/* Play button triangle with P4K */}
      <path
        d="M44 42 L44 58 L58 50 Z"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#eyeGlow)"
      />

      {/* P4K text inside play button area */}
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fontSize="8"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.5"
      >
        P4K
      </text>

      {/* Scanning line effect */}
      <rect x="26" y="49" width="48" height="2" fill="url(#pixelGradient)" opacity="0.8" />

      {/* Corner accent dots - representing 4K pixels */}
      <circle cx="50" cy="28" r="1.5" fill="#00D4FF" opacity="0.8" />
      <circle cx="50" cy="72" r="1.5" fill="#00D4FF" opacity="0.8" />
      <circle cx="28" cy="50" r="1.5" fill="#7B2FFF" opacity="0.8" />
      <circle cx="72" cy="50" r="1.5" fill="#7B2FFF" opacity="0.8" />

      {/* Glass-morphism shine */}
      <path
        d="M20 45 Q35 35 50 38"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )

  const Wrapper = animated ? motion.div : "div"
  const wrapperProps = animated
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }
    : {}

  return (
    <Wrapper className={`flex items-center ${gap}`} {...wrapperProps}>
      {animated ? (
        <motion.div
          animate={{
            filter: [
              "drop-shadow(0 0 8px rgba(0,212,255,0.5))",
              "drop-shadow(0 0 16px rgba(123,47,255,0.6))",
              "drop-shadow(0 0 8px rgba(0,212,255,0.5))",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <LogoIcon />
        </motion.div>
      ) : (
        <LogoIcon />
      )}

      {showText && (
        <div className={`font-black tracking-tight ${textSize}`}>
          <span className="text-white">PLIMA</span>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            4K
          </span>
        </div>
      )}
    </Wrapper>
  )
}
