"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const tournaments = [
  { id: 1, name: "Copa America 2025", image: "/tournaments/uefa-euro-2024.jpg" },
  { id: 2, name: "FIFA World Cup 2026", image: "/tournaments/fifa-world-cup-2026.jpg" },
  { id: 3, name: "Champions League 2025/26", image: "/tournaments/champions-league.jpg" },
  { id: 4, name: "Premier League 2025/26", image: "/tournaments/premier-league.jpg" },
  { id: 5, name: "La Liga 2025/26", image: "/tournaments/la-liga.jpg" },
  { id: 6, name: "Bundesliga 2025/26", image: "/tournaments/bundesliga.jpg" },
  { id: 7, name: "Europa League 2025/26", image: "/tournaments/europa-league.jpg" },
]

const CARD_WIDTH = 192
const CARD_HEIGHT = 288
const GAP = 24

export function SportsTournamentsMarquee() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const extendedTournaments = [...tournaments, ...tournaments, ...tournaments]
  const itemCount = tournaments.length

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemCount])

  const scrollTo = (index: number) => {
    const normalizedIndex = ((index % itemCount) + itemCount) % itemCount
    setCurrentIndex(normalizedIndex)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handlePrev = () => {
    scrollTo(currentIndex - 1)
  }

  const handleNext = () => {
    scrollTo(currentIndex + 1)
  }

  const calculateOffset = () => {
    const centerOffset = containerWidth / 2 - CARD_WIDTH / 2
    // Offset to the middle copy (index + itemCount) for seamless wrapping
    const slideOffset = (currentIndex + itemCount) * (CARD_WIDTH + GAP)
    return centerOffset - slideOffset
  }

  const getCircularDistance = (index: number, center: number, total: number) => {
    const normalizedIndex = index % total
    const directDistance = Math.abs(normalizedIndex - center)
    const wrappedDistance = total - directDistance
    return Math.min(directDistance, wrappedDistance)
  }

  return (
    <section className="py-12 bg-background/50 overflow-hidden border-y border-border">
      <div className="relative">
        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md hover:bg-primary border border-white/10 shadow-xl hidden sm:flex transition-all w-10 h-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md hover:bg-primary border border-white/10 shadow-xl hidden sm:flex transition-all w-10 h-10"
          onClick={handleNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div ref={containerRef} className="relative overflow-hidden py-6" style={{ height: CARD_HEIGHT + 60 }}>
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: calculateOffset() }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {extendedTournaments.map((tournament, index) => {
              const realIndex = index % itemCount
              const isActive =
                realIndex === currentIndex && Math.abs(index - (currentIndex + itemCount)) < itemCount / 2 + 1
              const distance = getCircularDistance(realIndex, currentIndex, itemCount)

              return (
                <motion.div
                  key={`${tournament.id}-${index}`}
                  className="relative flex-shrink-0 cursor-pointer group"
                  style={{ width: CARD_WIDTH }}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: distance > 2 ? 0.5 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => {
                    if (!isActive) {
                      scrollTo(realIndex)
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-primary shadow-xl shadow-primary/20"
                        : "ring-1 ring-white/10 hover:ring-white/20"
                    }`}
                    style={{ height: CARD_HEIGHT }}
                  >
                    <Image
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={distance < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Tournament name */}
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <p className="text-white font-semibold text-sm text-center truncate">{tournament.name}</p>
                    </div>

                    {/* Hover overlay */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center"
                        >
                          <motion.div
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Play className="w-4 h-4 text-primary-foreground fill-primary-foreground ml-0.5" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

        {/* Dot indicators - only for original items */}
        <div className="flex justify-center gap-1.5 mt-4 relative z-20">
          {tournaments.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/25 w-1.5 hover:bg-muted-foreground/40"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
