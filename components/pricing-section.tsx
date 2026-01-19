"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Zap, Crown, Shield, Monitor, Star, Flame, Gift, Tv, ChevronDown } from "lucide-react"

const basePlans = [
  {
    duration: "3 Months",
    bonus: "+1 Month Free",
    basePrice: 35.99,
    pricePerDevice: 10,
    currency: "€",
    popular: false,
    bestValue: false,
    icon: Gift,
    accent: "cyan",
    gradient: "from-cyan-500 via-teal-400 to-emerald-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    shadowColor: "shadow-cyan-500/20",
    checkoutUrl: "/checkout",
  },
  {
    duration: "6 Months",
    bonus: "+1 Month Free",
    basePrice: 49.99,
    pricePerDevice: 15,
    currency: "€",
    popular: false,
    bestValue: false,
    icon: Star,
    accent: "blue",
    gradient: "from-blue-500 via-indigo-400 to-violet-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    shadowColor: "shadow-blue-500/20",
    checkoutUrl: "/checkout",
  },
  {
    duration: "12 Months",
    bonus: "+1 Month Free",
    basePrice: 79.99,
    pricePerDevice: 20,
    currency: "€",
    popular: true,
    bestValue: false,
    icon: Flame,
    accent: "fuchsia",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    glowColor: "rgba(217, 70, 239, 0.5)",
    shadowColor: "shadow-fuchsia-500/30",
    checkoutUrl: "/checkout",
  },
  {
    duration: "24 Months",
    bonus: "+2 Months Free",
    basePrice: 99.99,
    pricePerDevice: 25,
    currency: "€",
    popular: false,
    bestValue: true,
    icon: Crown,
    accent: "amber",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
    shadowColor: "shadow-amber-500/20",
    checkoutUrl: "/checkout",
  },
]

const sharedFeatures = [
  "Anti Buffering",
  "Regular Updates",
  "Over +30,000 Live Channels",
  "Over +140,000 VODs",
  "HD / FHD / 4K Quality",
  "Fast And Stable Servers",
  "Netflix / Prime / Disney / Sky",
  "PPV / EPG Available",
  "M3u / Xtream Codes / Mag / Enigma",
  "24/7 Customer Service",
]

const deviceOptions = [
  { value: 1, label: "1 Device", description: "Single screen" },
  { value: 2, label: "2 Devices", description: "Perfect for couples" },
  { value: 3, label: "3 Devices", description: "Small family" },
  { value: 4, label: "4 Devices", description: "Family plan" },
  { value: 5, label: "5 Devices", description: "Large household" },
]

const pricingTable = {
  1: [35.99, 49.99, 79.99, 99.99],
  2: [59.99, 89.99, 129.99, 189.99],
  3: [74.99, 129.99, 199.99, 269.99],
  4: [99.99, 169.99, 259.99, 359.99],
  5: [119.99, 199.99, 309.99, 449.99],
}

function DeviceDropdown({
  devices,
  setDevices,
  gradient,
  glowColor,
  isOpen,
  setIsOpen,
}: {
  devices: number
  setDevices: (d: number) => void
  gradient: string
  glowColor: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside)
    }, 0)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setIsOpen])

  const selectedOption = deviceOptions.find((opt) => opt.value === devices) || deviceOptions[0]

  return (
    <div className="flex flex-col items-center gap-2 mb-4" ref={dropdownRef}>
      <div className="flex items-center gap-2 text-sm text-white/60">
        <Tv className="w-4 h-4" />
        <span>Number of Devices</span>
      </div>

      <div className="relative w-full max-w-[200px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between gap-2 z-50"
          type="button"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <Monitor className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{selectedOption.label}</p>
              <p className="text-white/50 text-xs">{selectedOption.description}</p>
            </div>
          </div>

          <ChevronDown
            className={`w-5 h-5 text-white/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 z-[100] rounded-xl border border-white/10 overflow-hidden pointer-events-auto"
            style={{
              background: "rgba(13, 17, 23, 0.95)",
              backdropFilter: "blur(20px)",
              boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 60px -20px ${glowColor}`,
            }}
          >
            {deviceOptions.map((option, index) => (
              <button
                key={option.value}
                onClick={() => {
                  setDevices(option.value)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 flex items-center gap-3 transition-colors cursor-pointer text-left duration-100
                  ${devices === option.value ? "bg-white/10" : "hover:bg-white/5"}
                  ${index !== deviceOptions.length - 1 ? "border-b border-white/5" : ""}`}
                type="button"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-100
                  ${devices === option.value ? `bg-gradient-to-br ${gradient} text-white` : "bg-white/10 text-white/60"}`}
                >
                  {option.value}
                </div>

                <div className="flex-1">
                  <p className={`font-medium text-sm ${devices === option.value ? "text-white" : "text-white/80"}`}>
                    {option.label}
                  </p>
                  <p className="text-white/40 text-xs">{option.description}</p>
                </div>

                {devices === option.value && <Check className="w-5 h-5 text-green-400" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function PricingCard({
  plan,
  index,
  isSelected,
  onSelect,
  devices,
  setDevices,
}: {
  plan: (typeof basePlans)[0]
  index: number
  isSelected: boolean
  onSelect: () => void
  devices: number
  setDevices: (d: number) => void
}) {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDeviceHovered, setIsDeviceHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const planIndex = index
  const calculatedPrice = pricingTable[devices]?.[planIndex] || plan.basePrice
  const priceWhole = Math.floor(calculatedPrice)
  const priceDecimal = Math.round((calculatedPrice - priceWhole) * 100)
    .toString()
    .padStart(2, "0")

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isHovered || isDropdownOpen || isDeviceHovered || isButtonHovered) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x)
      mouseY.set(y)
    },
    [isHovered, isDropdownOpen, isDeviceHovered, isButtonHovered, mouseX, mouseY],
  )

  const handleMouseLeave = useCallback(() => {
    if (isDropdownOpen || isDeviceHovered) return
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }, [isDropdownOpen, isDeviceHovered, mouseX, mouseY])

  const handleBuyNow = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const planId =
        plan.duration === "3 Months"
          ? "3months"
          : plan.duration === "6 Months"
            ? "6months"
            : plan.duration === "12 Months"
              ? "12months"
              : "24months"
      router.push(`/checkout?plan=${planId}&devices=${devices}`)
    },
    [plan.duration, devices, router],
  )

  const Icon = plan.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
      }}
      style={{
        rotateX: isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? rotateX : 0,
        rotateY: isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isDropdownOpen && !isDeviceHovered && !isButtonHovered && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={`relative cursor-pointer ${plan.popular ? "lg:-mt-6 lg:mb-6 z-10" : "z-0"}`}
    >
      <motion.div
        className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 blur-xl transition-opacity duration-500`}
        animate={{ opacity: isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? 0.6 : 0 }}
      />

      <motion.div
        className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          plan.popular
            ? `ring-2 ring-fuchsia-500/50 ${plan.shadowColor} shadow-2xl`
            : isSelected
              ? `ring-2 ring-white/30 shadow-xl ${plan.shadowColor}`
              : "ring-1 ring-white/10 hover:ring-white/20"
        }`}
        whileHover={!isDropdownOpen && !isDeviceHovered && !isButtonHovered ? { scale: 1.02 } : {}}
        whileTap={!isDropdownOpen && !isDeviceHovered && !isButtonHovered ? { scale: 0.98 } : {}}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#0a0c10] to-[#0d1117]" />

        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-700`}
          animate={{ opacity: isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? 0.08 : 0.03 }}
        />

        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mouseX.get() * 100}% ${50 + mouseY.get() * 100}%, ${plan.glowColor} 0%, transparent 50%)`,
          }}
          animate={{ opacity: isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? 1 : 0 }}
        />

        <div className={`relative bg-gradient-to-r ${plan.gradient} p-6 text-center`}>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
          </div>

          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm mb-3"
            animate={
              isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered
                ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          <motion.h3
            className="text-2xl font-black text-white uppercase tracking-wide"
            style={{ transform: "translateZ(20px)" }}
          >
            {plan.duration}
          </motion.h3>

          <motion.div
            className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm"
            animate={
              isHovered && !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? { scale: [1, 1.05, 1] } : {}
            }
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Gift className="w-3.5 h-3.5 text-white" />
            <span
              className={`text-sm font-semibold text-white ${
                plan.duration === "3 Months" || plan.duration === "6 Months" ? "line-through text-red-400" : ""
              }`}
            >
              {plan.bonus}
            </span>
          </motion.div>
        </div>

        <AnimatePresence>
          {plan.popular && (
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: -12 }}
              className="absolute -top-2 -right-2 z-20"
            >
              <Badge className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold shadow-lg border-0 rounded-xl">
                <motion.div
                  animate={!isButtonHovered ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 1, repeat: !isButtonHovered ? Number.POSITIVE_INFINITY : 0 }}
                  className="mr-1.5 inline-block"
                >
                  <Zap className="w-3.5 h-3.5" />
                </motion.div>
                MOST POPULAR
              </Badge>
            </motion.div>
          )}

          {plan.bestValue && (
            <motion.div
              initial={{ scale: 0, rotate: 12 }}
              animate={{ scale: 1, rotate: 12 }}
              className="absolute -top-2 -right-2 z-20"
            >
              <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1.5 text-xs font-bold shadow-lg border-0 rounded-xl">
                <motion.div
                  animate={!isButtonHovered ? { rotate: [0, 15, -15, 0] } : {}}
                  transition={{ duration: 2, repeat: !isButtonHovered ? Number.POSITIVE_INFINITY : 0 }}
                  className="mr-1.5 inline-block"
                >
                  <Crown className="w-3.5 h-3.5" />
                </motion.div>
                BEST VALUE
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative p-6 flex flex-col">
          <div onMouseEnter={() => setIsDeviceHovered(true)} onMouseLeave={() => setIsDeviceHovered(false)}>
            <DeviceDropdown
              devices={devices}
              setDevices={setDevices}
              gradient={plan.gradient}
              glowColor={plan.glowColor}
              isOpen={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
            />
          </div>

          <div className="text-center mb-6">
            <div className="flex items-start justify-center">
              <span className="text-2xl font-bold text-white/70 mt-2">{plan.currency}</span>
              <motion.div
                className="relative"
                key={calculatedPrice}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <span
                  className={`text-6xl font-black bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent`}
                >
                  {priceWhole}
                </span>
                <span className="text-2xl font-bold text-white/70">,{priceDecimal}</span>
              </motion.div>
            </div>
            <p className="text-sm text-white/50 mt-1">
              {devices > 1 ? `for ${devices} devices` : "for 1 device"} • one-time payment
            </p>
          </div>

          <div
            className={`h-px bg-gradient-to-r from-transparent ${plan.gradient.replace("from-", "via-").split(" ")[0]} to-transparent mb-5 opacity-30`}
          />

          <ul className="space-y-3 mb-6 flex-grow">
            {sharedFeatures.map((feature, i) => (
              <motion.li
                key={feature}
                className="flex items-center gap-3 text-sm text-white/80 group/item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.03 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} shrink-0`}
                  whileHover={
                    !isDropdownOpen && !isDeviceHovered && !isButtonHovered ? { scale: 1.2, rotate: 360 } : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </motion.div>
                <span className="group-hover/item:text-white transition-colors">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="relative z-20"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} blur-xl transition-opacity duration-300 pointer-events-none`}
              animate={{ opacity: isButtonHovered ? 0.5 : 0 }}
            />

            <Button
              onClick={handleBuyNow}
              className={`relative w-full py-6 text-base font-bold rounded-2xl bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white border-0 overflow-hidden group/btn cursor-pointer active:scale-95 transition-transform`}
              size="lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: "-200%" }}
                animate={isButtonHovered ? { x: "200%" } : { x: "-200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              <span className="relative flex items-center justify-center gap-2">
                <span>Buy Now</span>
                <motion.div
                  animate={isButtonHovered ? { x: [0, 4, 0] } : {}}
                  transition={{ duration: 0.5, repeat: isButtonHovered ? Number.POSITIVE_INFINITY : 0 }}
                >
                  <Monitor className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<number>(2)
  const [devicesByPlan, setDevicesByPlan] = useState<{ [key: number]: number }>({
    0: 1,
    1: 1,
    2: 1,
    3: 1,
  })

  const handleSetDevices = useCallback((planIndex: number, devices: number) => {
    setDevicesByPlan((prev) => {
      if (prev[planIndex] === devices) return prev
      return { ...prev, [planIndex]: devices }
    })
  }, [])

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">Simple & Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Select the perfect subscription for your entertainment needs. All plans include premium features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 perspective-1000">
          {basePlans.map((plan, index) => (
            <PricingCard
              key={plan.duration}
              plan={plan}
              index={index}
              isSelected={selectedPlan === index}
              onSelect={() => setSelectedPlan(index)}
              devices={devicesByPlan[index]}
              setDevices={(d) => handleSetDevices(index, d)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row sm:inline-flex items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/60">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Shield className="w-5 h-5 text-emerald-400" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium">Secure Payment</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2 text-white/60">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium">Instant Activation</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2 text-white/60">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Gift className="w-5 h-5 text-pink-400" />
              </motion.div>
              <span className="text-sm font-medium">Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
