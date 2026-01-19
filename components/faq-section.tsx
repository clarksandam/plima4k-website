"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, HelpCircle, Mail } from "lucide-react"

const faqs = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV (Internet Protocol Television) is a service that delivers television content over the internet instead of traditional cable or satellite.",
  },
  {
    question: "What devices can I use?",
    answer:
      "You can use Smart TVs, Android boxes, Firestick, smartphones, tablets, and computers with IPTV apps like Smarters or TiviMate.",
  },
  {
    question: "What internet speed do I need?",
    answer: "We recommend at least 10 Mbps for HD and 25 Mbps for 4K streaming for the best experience.",
  },
  {
    question: "Can I watch on multiple devices?",
    answer: "Yes, depending on your subscription plan, you can stream on multiple devices simultaneously.",
  },
  {
    question: "What is the video quality?",
    answer: "We offer HD, Full HD (1080p), and 4K quality depending on the channel and your internet connection.",
  },
  {
    question: "Do you have a problem?",
    answer: "Our 24/7 support team is always ready to help. Contact us via WhatsApp for immediate assistance.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Got Questions?</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our service</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-0 rounded-xl glass border border-white/5 px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary py-4 text-sm font-medium transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            id="contact"
          >
            <Card className="p-6 glass border-white/5 sticky top-24 hover:border-primary/20 transition-all duration-300">
              <motion.div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <HelpCircle className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-6">Our support team is available 24/7 to assist you.</p>

              <div className="space-y-3">
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg shadow-[#25D366]/20"
                  asChild
                >
                  <a href="https://wa.me/447520663325" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Support
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/10 hover:border-primary/30 hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <a
                    href="mailto:support@plima4k.com?subject=Support%20Request&body=Hello%20PLIMA4K%20Support%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
