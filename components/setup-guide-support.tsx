"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Send, Headphones } from "lucide-react"

export function SetupGuideSupport() {
  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Chat with our support team",
      action: "Chat on WhatsApp",
      href: "https://wa.me/YOUR_WHATSAPP_NUMBER",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send us your questions",
      action: "Send Email",
      href: "mailto:support@plima4k.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Telegram",
      description: "Fast responses on Telegram",
      action: "Message us",
      href: "https://t.me/smaxai",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Live Chat",
      description: "24/7 instant support",
      action: "Start Chat",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Need Help?
          </h2>
          <p className="text-lg text-muted-foreground">Our support team is ready to assist you anytime</p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.a
              key={channel.title}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 rounded-2xl p-6 backdrop-blur-md hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${channel.color} mb-4 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}
                >
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <div className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                  {channel.action} →
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 24/7 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <span className="text-foreground font-semibold">
              <span className="text-primary">24/7 Support</span> - We're always here for you
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
