"use client"

import { motion } from "framer-motion"

export function SportsSectionHeader() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight font-sans mb-2 text-white"
        >
          <span className="inline-block leading-[1.6rem]">Unlimited Access to the World's</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.3rem]">
            Biggest Leagues and Tournaments
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light mt-2"
        >
          Stream every match from Champions League, Premier League, World Cup, and beyond.
        </motion.p>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full origin-center"
        />
      </div>
    </section>
  )
}
