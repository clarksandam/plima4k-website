"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { loadTranslations, getClientLanguage, setClientLanguage } from "@/lib/i18n"

interface LanguageContextType {
  language: string
  translations: Record<string, any>
  setLanguage: (lang: string) => Promise<void>
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en")
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initLanguage = async () => {
      const lang = getClientLanguage()
      const trans = await loadTranslations(lang)
      setLanguageState(lang)
      setTranslations(trans)
      setIsLoading(false)
    }

    initLanguage()
  }, [])

  const setLanguage = async (lang: string) => {
    const trans = await loadTranslations(lang)
    setLanguageState(lang)
    setTranslations(trans)
    setClientLanguage(lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k]
      } else {
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
