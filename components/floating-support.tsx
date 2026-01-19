"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, InstagramIcon as TelegramIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-full left-0 mb-4 w-72 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">PLIMA4K Support</p>
                  <p className="text-white/80 text-xs">Typically replies instantly</p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="bg-secondary/50 rounded-xl rounded-tl-none p-3 text-sm text-foreground">
                Hi there! How can we help you today?
              </div>

              <a
                href="https://wa.me/447520663325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                Start Chat
              </a>

              <a
                href="https://t.me/smaxai?text=Hello%20PLIMA4K%20Support%2C%20I%20need%20help%20with%20my%20subscription"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-medium text-sm transition-colors"
              >
                <TelegramIcon className="w-4 h-4" />
                Telegram
              </a>

              <a
                href="mailto:support@plima4k.com?subject=Support%20Request&body=Hello%20PLIMA4K%20Support%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/80 hover:bg-primary text-white font-medium text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}>
        <Button variant="outline" className="glass rounded-full p-4 bg-transparent text-[rgba(36,194,88,1)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
        </Button>
      </motion.div>
    </div>
  )
}
