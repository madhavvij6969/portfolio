"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const creativeWork = [
  { id: 1, image: "/images/crea1.png", company: "Counsel India" },
  { id: 2, image: "/images/crea2.jpg", company: "BOP Realty" },
  { id: 3, image: "/images/crea3.jpg", company: "Upskill Lab" },
  { id: 4, image: "/images/crea4.jpg", company: "Social Banana" },
  { id: 5, image: "/images/crea5.jpg", company: "BOP Realty" },
  { id: 6, image: "/images/crea6.jpg", company: "Counsel India" },
  { id: 7, image: "/images/crea7.jpg", company: "Ampify" },
  { id: 8, image: "/images/crea8.jpg", company: "BOP Realty" },
  { id: 9, image: "/images/crea9.jpg", company: "Counsel India" },
  { id: 10, image: "/images/crea10.png", company: "Social Banana" },
  { id: 11, image: "/images/crea11.jpeg", company: "BOP Realty" },
  { id: 12, image: "/images/crea12.jpeg", company: "Ampify" },
]

export function CreativeGallery() {
  return (
    <section id="creative" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#030712" }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#3b82f6,transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-label"><span className="w-6 h-px bg-blue-400" />Portfolio</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">Creative Work</h2>
          <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />
          <p className="text-slate-500 text-base max-w-2xl">
            Ad creatives, social content, and visual assets built for performance and brand impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {creativeWork.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <Image
                src={work.image}
                alt={`Creative work for ${work.company}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
              {/* Company label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(59,130,246,0.85)", backdropFilter: "blur(8px)" }}>
                  {work.company}
                </span>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 50%)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
