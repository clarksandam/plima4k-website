"use client"

import { motion } from "framer-motion"
import { Twitter, Instagram, Facebook, Youtube, Heart } from "lucide-react"
import { PlimaLogo } from "@/components/plima-logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <LanguageSelector />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="/setup-guide" className="hover:text-primary transition-colors">
              Setup Guide
            </a>
            <a href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </a>
            <a href="/refund" className="hover:text-primary transition-colors">
              {t("footer.refund")}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> {t("footer.copyright")}
          </p>

          <a href="#">
            <PlimaLogo size="sm" />
          </a>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {[
            { icon: Twitter, label: "Twitter", url: "https://twitter.com/plima4k" },
            { icon: Instagram, label: "Instagram", url: "https://instagram.com/plima4k" },
            { icon: Facebook, label: "Facebook", url: "https://facebook.com/plima4k" },
            { icon: Youtube, label: "YouTube", url: "https://youtube.com/@plima4k" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
