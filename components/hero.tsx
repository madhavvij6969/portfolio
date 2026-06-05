"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { img } from "@/lib/image-path"

const stats = [
  { value: "₹2Cr+",   label: "Ad Spend Managed",  desc: "Real estate, ed-tech, FMCG & consumer brands" },
  { value: "81,400+", label: "Leads Generated",    desc: "Quality-focused, conversion-optimised systems" },
  { value: "45M+",    label: "Organic Views",      desc: "Short-form storytelling & platform-native content" },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

export function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#080808" }}>

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(56,100,255,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
          <div className="absolute top-0 right-0 w-[400px] h-full"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.18) 0%, transparent 60%)", filter: "blur(30px)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48"
            style={{ background: "radial-gradient(ellipse, rgba(99,40,200,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-12">

          {/* ── MOBILE: stacked | DESKTOP: side-by-side ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-0">

            {/* ── Portrait (top on mobile, right on desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center items-end lg:order-2 lg:w-[42%] mb-6 lg:mb-0"
              style={{ minHeight: "clamp(260px, 55vw, 520px)" }}
            >
              {/* Glow behind portrait */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)", filter: "blur(40px)" }} />

              {/* Handwritten label — hidden on very small screens */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute top-2 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none hidden sm:block"
              >
                <span style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                  textShadow: "0 0 20px rgba(167,139,250,0.5)",
                  whiteSpace: "nowrap",
                }}>
                  Hi! I am Madhav ✦
                </span>
              </motion.div>

              {/* Portrait image */}
              <div className="relative z-10" style={{ width: "min(312px, 70vw)", aspectRatio: "3/4" }}>
                <Image
                  src={img("/images/mdv.png")}
                  alt="Madhav Vij"
                  fill
                  priority
                  className="object-cover object-top"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    filter: "drop-shadow(-4px 0 30px rgba(124,58,237,0.35))",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)" }} />
              </div>

              {/* Floating stats — only on lg+ */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 right-2 z-30 hidden lg:block"
                style={{ background: "rgba(10,10,20,0.9)", border: "1px solid rgba(167,139,250,0.4)", borderRadius: 12, padding: "8px 14px", backdropFilter: "blur(16px)" }}
              >
                <div className="text-lg font-black leading-none" style={{ color: "#a78bfa" }}>45M+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Organic Views</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
                style={{ background: "rgba(10,10,20,0.9)", border: "1px solid rgba(245,158,11,0.4)", borderRadius: 12, padding: "8px 14px", backdropFilter: "blur(16px)" }}
              >
                <div className="text-lg font-black leading-none" style={{ color: "#fcd34d" }}>₹2Cr+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Ad Spend</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-8 right-2 z-30 hidden lg:block"
                style={{ background: "rgba(10,10,20,0.9)", border: "1px solid rgba(236,72,153,0.4)", borderRadius: 12, padding: "8px 14px", backdropFilter: "blur(16px)" }}
              >
                <div className="text-lg font-black leading-none" style={{ color: "#f9a8d4" }}>81,400+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Leads Generated</div>
              </motion.div>
            </motion.div>

            {/* ── Text content (below portrait on mobile, left on desktop) ── */}
            <div className="lg:order-1 lg:w-[58%] lg:pb-20 flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Label */}
              <motion.div {...fadeUp(0.1)} className="mb-4">
                <div className="inline-flex items-center px-4 py-2 rounded-md"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,99,235,0.85), rgba(79,70,229,0.85))",
                    boxShadow: "0 0 20px rgba(59,130,246,0.25)",
                  }}>
                  <span className="text-white text-xs sm:text-sm font-semibold italic tracking-wide">
                    A marketer who turns attention into revenue —
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div {...fadeUp(0.2)} className="mb-3 w-full">
                <h2 className="text-white leading-[1.15] mb-1 text-xl sm:text-2xl lg:text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold">
                  Views don't pay bills.
                </h2>
                <h2 className="leading-[1.15] text-xl sm:text-2xl lg:text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  Strategy does. And mine is called —
                </h2>
              </motion.div>

              {/* Marketing word */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 w-full"
              >
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(3rem, 14vw, 8.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 30%, #8b5cf6 55%, #a855f7 75%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  filter: "drop-shadow(0 0 30px rgba(99,102,241,0.3))",
                }}>
                  Marketing
                </span>
              </motion.div>

              {/* Sub-copy */}
              <motion.p {...fadeUp(0.45)}
                className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                I work at the intersection of content, paid media, and growth strategy — helping brands build attention that converts into revenue.
              </motion.p>

              {/* Mobile-only inline stats */}
              <motion.div {...fadeUp(0.55)} className="flex gap-4 lg:hidden mb-2 flex-wrap justify-center">
                {[
                  { v: "₹2Cr+", l: "Ad Spend", c: "#fcd34d" },
                  { v: "81,400+", l: "Leads", c: "#f9a8d4" },
                  { v: "45M+", l: "Views", c: "#a78bfa" },
                ].map((s, i) => (
                  <div key={i} className="px-3 py-2 rounded-xl text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-base font-black leading-none" style={{ color: s.c }}>{s.v}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          style={{ width: "88%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)" }} />
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="py-14 sm:py-20" style={{ background: "#080808" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl p-5 sm:p-6 group cursor-default"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "linear-gradient(135deg,rgba(99,102,241,0.07),rgba(236,72,153,0.05))" }} />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-black mb-1.5 leading-none"
                    style={{
                      background: "linear-gradient(135deg,#f59e0b,#ec4899,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
