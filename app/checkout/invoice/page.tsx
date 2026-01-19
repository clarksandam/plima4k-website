"use client"

import { Suspense } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import InvoiceContent from "./invoice-content"

export default function InvoicePage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="text-white text-center py-20">Loading invoice...</div>}>
        <InvoiceContent />
      </Suspense>
      <Footer />
    </>
  )
}
