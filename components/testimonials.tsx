"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { img } from "@/lib/image-path"

const testimonials = [
  {
    name: "Shubham Bansal",
    role: "Founder & CEO",
    company: "Ampify Marketing",
    image: img("/images/shubham.jpeg"),
    text: "What stood out about Madhav was his ability to combine creativity with execution. He understood how to make content feel relatable while still keeping it aligned with brand goals. His curiosity around performance marketing and willingness to experiment made him someone who continuously improved and added value.",
    accent: "#3b82f6",
  },
  {
    name: "Harshit Sinha",
    role: "Founder & CEO",
    company: "Upskill Lab",
    image: img("/images/harshit.jpeg"),
    text: "Madhav brought a rare mix of creativity and performance-driven thinking. From paid campaigns to organic content strategy, his work helped us strengthen our digital presence, improve lead quality, and build a stronger audience community.",
    accent: "#7c3aed",
  },
  {
    name: "Vishal Joshi",
    role: "CGO & Marketing Head",
    company: "BOP Realty",
    image: img("/images/vishal.jpeg"),
    text: "I've seen Madhav grow into someone who takes ownership with confidence. His journey has been defined by creative thinking, strong implementation, and the hunger to continuously learn and improve.",
    accent: "#059669",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#050b18" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle,#6366f1,transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label"><span className="w-6 h-px bg-blue-400" />Social Proof</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">What People Say</h2>
          <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />
          <p className="text-slate-500 text-base">Feedback from founders, marketing leaders, and people I've worked closely with.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl p-5 sm:p-7 flex flex-col group"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `linear-gradient(135deg,${t.accent}0d,transparent 60%)` }} />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg,transparent,${t.accent}80,transparent)` }} />

              {/* Big quote mark */}
              <div className="text-7xl font-black leading-none mb-4 select-none relative"
                style={{ color: `${t.accent}30`, fontFamily: "Georgia, serif" }}>
                "
              </div>

              <p className="text-slate-300 leading-relaxed flex-1 mb-7 text-sm relative -mt-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 relative"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="relative flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                    style={{ border: `2px solid ${t.accent}50` }}
                  />
                  <div className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 12px ${t.accent}40` }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs font-medium" style={{ color: t.accent }}>{t.role}</p>
                  <p className="text-xs text-slate-600">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
