"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const movies = [
  {
    title: "Mission: Impossible 8",
    poster: "/posters/mi8.jpg",
    year: "2025",
    rating: "8.5",
    genre: "Action",
  },
  {
    title: "Captain America: Brave New World",
    poster: "/posters/captain-america.jpg",
    year: "2025",
    rating: "7.8",
    genre: "Action",
  },
  {
    title: "Thunderbolts",
    poster: "/posters/thunderbolts.jpg",
    year: "2025",
    rating: "7.6",
    genre: "Action",
  },
  {
    title: "Superman",
    poster: "/posters/superman.jpg",
    year: "2025",
    rating: "8.2",
    genre: "Action",
  },
  {
    title: "Jurassic World: Rebirth",
    poster: "/posters/jurassic-world.jpg",
    year: "2025",
    rating: "7.4",
    genre: "Sci-Fi",
  },
  {
    title: "The Fantastic Four",
    poster: "/posters/fantastic-four.jpg",
    year: "2025",
    rating: "7.9",
    genre: "Action",
  },
  {
    title: "Wicked: Part Two",
    poster: "/posters/wicked2.jpg",
    year: "2025",
    rating: "8.3",
    genre: "Musical",
  },
  {
    title: "Avatar 3",
    poster: "/posters/avatar3.jpg",
    year: "2025",
    rating: "8.6",
    genre: "Sci-Fi",
  },
  {
    title: "Dune: Part Two",
    poster: "/posters/dune2.jpg",
    year: "2024",
    rating: "8.8",
    genre: "Sci-Fi",
  },
  {
    title: "Oppenheimer",
    poster: "/posters/oppenheimer.jpg",
    year: "2023",
    rating: "8.4",
    genre: "Drama",
  },
  {
    title: "Wednesday S2",
    poster: "/posters/wednesday.jpg",
    year: "2025",
    rating: "8.5",
    genre: "Comedy",
  },
  {
    title: "Squid Game S2",
    poster: "/posters/squidgame.jpg",
    year: "2024",
    rating: "8.2",
    genre: "Thriller",
  },
  {
    title: "Stranger Things S5",
    poster: "/posters/strangerthings.jpg",
    year: "2025",
    rating: "9.0",
    genre: "Sci-Fi",
  },
  {
    title: "House of the Dragon S3",
    poster: "/posters/hotd.jpg",
    year: "2025",
    rating: "8.6",
    genre: "Fantasy",
  },
]

const CARD_WIDTH = 260
const CARD_HEIGHT = 389
const GAP = 28

export function ContentSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const extendedMovies = [...movies, ...movies, ...movies]
  const itemCount = movies.length

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
    }, 3500)

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
    <section className="relative py-16 lg:py-20 bg-background overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] z-0" />

      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Trending Now</h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Watch the latest movies and series in stunning 4K
          </p>
        </motion.div>
      </div>

      {/* Slideshow container */}
      <div className="relative z-10">
        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md hover:bg-primary border border-white/10 shadow-xl hidden sm:flex transition-all w-11 h-11"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md hover:bg-primary border border-white/10 shadow-xl hidden sm:flex transition-all w-11 h-11"
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div ref={containerRef} className="relative z-10 overflow-hidden py-10" style={{ height: CARD_HEIGHT + 100 }}>
          <motion.div
            className="flex gap-7"
            animate={{ x: calculateOffset() }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {extendedMovies.map((movie, index) => {
              const realIndex = index % itemCount
              const isActive =
                realIndex === currentIndex && Math.abs(index - (currentIndex + itemCount)) < itemCount / 2 + 1
              const distance = getCircularDistance(realIndex, currentIndex, itemCount)

              return (
                <motion.div
                  key={`${movie.title}-${index}`}
                  className="relative flex-shrink-0 cursor-pointer"
                  style={{ width: CARD_WIDTH }}
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    opacity: distance > 3 ? 0.4 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => {
                    if (!isActive) {
                      scrollTo(realIndex)
                    } else {
                      const pricingSection = document.getElementById("pricing")
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* 4K Badge */}
                  {isActive && (
                    <motion.div
                      className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold shadow-lg"
                      initial={{ scale: 0, y: 8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                    >
                      4K HDR
                    </motion.div>
                  )}

                  {/* Card */}
                  <div
                    className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                      isActive
                        ? "ring-3 ring-primary shadow-2xl shadow-primary/30"
                        : "ring-2 ring-transparent hover:ring-white/30"
                    }`}
                    style={{ height: CARD_HEIGHT }}
                  >
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay with info */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 pt-12">
                      <p className="text-white font-semibold text-sm truncate">{movie.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/70">{movie.genre}</span>
                        <span className="text-white/50 text-xs">{movie.year}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-white/80 text-xs font-medium">{movie.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover play overlay */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center"
                        >
                          <motion.div
                            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
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
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />

        {/* Dot indicators - only for original items */}
        <div className="flex justify-center gap-1.5 mt-6 relative z-20">
          {movies.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/25 w-2 hover:bg-muted-foreground/40"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
