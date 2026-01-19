"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      {[
        { code: "en", label: "🇬🇧 EN" },
        { code: "de", label: "🇩🇪 DE" },
      ].map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === lang.code ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  )
}
