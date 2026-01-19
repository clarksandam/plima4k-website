"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0B0D10]/95 backdrop-blur-xl border-t border-border p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 h-12 border-border bg-transparent text-foreground" asChild>
          <a href="https://wa.me/447520663325" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </a>
        </Button>
        <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <a href="#pricing">View Plans</a>
        </Button>
      </div>
    </motion.div>
  )
}
