"use client"

import { motion } from "framer-motion"

const content = [
  { title: "Action Movies", query: "action movie poster dark" },
  { title: "Drama Series", query: "drama tv series poster" },
  { title: "Live Sports", query: "sports event stadium" },
  { title: "Documentaries", query: "documentary nature" },
  { title: "Comedy Shows", query: "comedy show poster" },
  { title: "Kids Content", query: "animated kids movie" },
]

export function ContentSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0D10] to-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Watch What You Love</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Movies, series, and sports — all in one place.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[2/3] rounded-2xl overflow-hidden bg-secondary cursor-pointer"
            >
              <img
                src={`/.jpg?height=300&width=200&query=${item.query}`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-medium text-white">{item.title}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-primary/90 rounded-full text-sm font-medium text-white">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
