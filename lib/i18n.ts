const EN_TRANSLATIONS = {
  nav: {
    home: "Home",
    plans: "Plans",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title: "Stream Everything in 4K",
    subtitle: "30,000+ Live Channels & 140,000+ VOD Movies & Series",
    cta: "View Plans",
    trust: "Trusted by 50,000+ Active Users",
  },
  pricing: {
    title: "Choose Your Plan",
    subtitle: "Select devices and duration to get started",
    month3: "3 Months",
    month6: "6 Months",
    month12: "12 Months",
    month24: "24 Months",
    buyNow: "Proceed",
    devices: "Devices",
    features: {
      antiBuffering: "Anti Buffering Technology",
      channels: "30,000+ Live Channels",
      vod: "140,000+ VOD Movies & Series",
      quality4k: "4K Quality",
      multiDevice: "Multi-Device Support",
      epg: "EPG Guide",
      support24: "24/7 Support",
      hd: "Full HD Quality",
      catchup: "Catch-up TV",
      parental: "Parental Control",
      recordings: "Cloud Recordings",
    },
  },
  sports: {
    title: "Unlimited Access to the World's Biggest Leagues and Tournaments",
    subtitle: "Stream every match from the Champions League, Premier League, World Cup, and beyond",
  },
  devices: {
    title: "Supported Devices",
    android: "Android",
    ios: "iOS",
    windows: "Windows",
    firetv: "Fire TV",
    magbox: "MAGBox",
    smarttv: "Smart TV",
    lgsmart: "LG Smart",
    chrome: "Chrome",
  },
  faq: {
    title: "Frequently Asked Questions",
    email: "Email Us",
    whatsapp: "WhatsApp",
  },
  checkout: {
    title: "Complete Your Purchase",
    name: "Full Name",
    email: "Email",
    country: "Country",
    paymentMethod: "Payment Method",
    proceed: "Proceed",
    orderSummary: "Order Summary",
  },
  invoice: {
    title: "Order Confirmed",
    subtitle: "Thank you for your purchase! A support team member will contact you soon.",
    whatsapp: "Continue on WhatsApp",
    telegram: "Continue on Telegram",
    email: "Send via Email",
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy",
    copyright: "Made with love by PLIMA4K Team © 2026",
  },
}

const DE_TRANSLATIONS = {
  nav: {
    home: "Startseite",
    plans: "Pläne",
    faq: "Häufig Gestellte Fragen",
    contact: "Kontakt",
  },
  hero: {
    title: "Streame Alles in 4K",
    subtitle: "30.000+ Live-Kanäle & 140.000+ VOD-Filme & Serien",
    cta: "Pläne Ansehen",
    trust: "Vertraut von 50.000+ Aktiven Benutzern",
  },
  pricing: {
    title: "Wählen Sie Ihren Plan",
    subtitle: "Wählen Sie Geräte und Dauer um zu beginnen",
    month3: "3 Monate",
    month6: "6 Monate",
    month12: "12 Monate",
    month24: "24 Monate",
    buyNow: "Fortfahren",
    devices: "Geräte",
    features: {
      antiBuffering: "Anti-Puffern-Technologie",
      channels: "30.000+ Live-Kanäle",
      vod: "140.000+ VOD-Filme & Serien",
      quality4k: "4K-Qualität",
      multiDevice: "Multi-Geräte-Unterstützung",
      epg: "EPG-Leitfaden",
      support24: "24/7 Support",
      hd: "Full HD-Qualität",
      catchup: "Catch-up TV",
      parental: "Elternkontrolle",
      recordings: "Cloud-Aufnahmen",
    },
  },
  sports: {
    title: "Unbegrenzter Zugang zu den größten Ligen und Turnieren der Welt",
    subtitle: "Streame jedes Match aus der Champions League, Premier League, Weltmeisterschaft und mehr",
  },
  devices: {
    title: "Unterstützte Geräte",
    android: "Android",
    ios: "iOS",
    windows: "Windows",
    firetv: "Fire TV",
    magbox: "MAGBox",
    smarttv: "Smart TV",
    lgsmart: "LG Smart",
    chrome: "Chrome",
  },
  faq: {
    title: "Häufig Gestellte Fragen",
    email: "Senden Sie uns eine E-Mail",
    whatsapp: "WhatsApp",
  },
  checkout: {
    title: "Schließen Sie Ihren Kauf ab",
    name: "Vollständiger Name",
    email: "E-Mail",
    country: "Land",
    paymentMethod: "Zahlungsmethode",
    proceed: "Fortfahren",
    orderSummary: "Bestellübersicht",
  },
  invoice: {
    title: "Bestellung Bestätigt",
    subtitle: "Danke für Ihren Einkauf! Ein Mitglied unseres Support-Teams wird Sie bald kontaktieren.",
    whatsapp: "Auf WhatsApp Fortfahren",
    telegram: "Auf Telegram Fortfahren",
    email: "Per E-Mail Senden",
  },
  footer: {
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    refund: "Rückgaberichtlinie",
    copyright: "Mit Liebe vom PLIMA4K Team © 2026",
  },
}

const translations: Record<string, any> = {
  en: EN_TRANSLATIONS,
  de: DE_TRANSLATIONS,
}

export async function loadTranslations(language: string) {
  return translations[language] || translations["en"]
}

export function getClientLanguage(): string {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("language")
    if (stored) return stored

    const browserLang = navigator.language.split("-")[0]
    const supported = ["en", "de"]
    return supported.includes(browserLang) ? browserLang : "en"
  }
  return "en"
}

export function setClientLanguage(language: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language)
  }
}

export function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, prop) => current?.[prop], obj) || path
}
