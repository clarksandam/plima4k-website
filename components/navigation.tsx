"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { PlimaLogo } from "@/components/plima-logo"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Plans", href: "#pricing" },
  { name: "Setup Guide", href: "/setup-guide" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href)
    } else {
      const isHome = pathname === "/"

      if (isHome) {
        // Already on home page, just scroll to anchor
        const elementId = href.replace("#", "")
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" })
      } else {
        // On different page, navigate to home with anchor
        router.push(href)
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="relative z-10">
            <PlimaLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-4 py-2 bg-none border-none cursor-pointer text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                  layoutId={`nav-bg-${link.name}`}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl -z-20"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick("#pricing")}
                className="relative px-6 py-2 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group overflow-hidden border border-primary/20"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity duration-300 -z-10" />
                <span className="relative z-10">Get Started</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground relative z-10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border relative z-40"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block w-full text-left py-3 px-4 text-foreground font-medium rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 border border-primary/10 hover:border-primary/30 bg-none border-none cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="pt-3 border-t border-border">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleNavClick("#pricing")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
