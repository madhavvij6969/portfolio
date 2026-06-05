"use client"

import { motion } from "framer-motion"

const capabilities = ["Meta Ads","Organic content systems","Lead funnels","Audience growth","Campaign positioning","Social media strategy","Creative direction","Team management"]
const selectedWins = ["Generated 81,400+ leads across industries","Scaled reels to 45M+ organic views","Managed ₹2Cr+ in ad spend","Built & led a 15-member team","Generated ₹6–8L/month through organic content","Created 30M+ organic reel at Counsel India"]
const currentFocus = ["AI-assisted content workflows","Short-form storytelling psychology","Organic distribution systems","Attention-driven ad creatives","Creator-led brand marketing"]
const mindset = ["a content strategist","a creator","a sales team","a consumer","and a founder"]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
})

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#050b18" }}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle,#3b82f6,transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <motion.div {...fadeUp(0)}>
          <div className="section-label">
            <span className="w-6 h-px bg-blue-400" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3 max-w-3xl">
            Not just a marketer.{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              A growth-focused operator.
            </span>
          </h2>
          <div className="w-16 h-0.5 rounded-full mb-14"
            style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Left — story */}
          <motion.div {...fadeUp(0.1)} className="space-y-5 text-slate-400 text-base leading-relaxed">
            <p>I started in marketing doing the small things — thumbnails, captions, reels, edits, creatives, reporting.</p>
            <p className="text-white font-semibold text-lg">That foundation changed how I work today.</p>
            <p>Because now when I build campaigns, I don't think only like a media buyer. I think like:</p>

            <div className="space-y-2 pl-1">
              {mindset.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
                  <span className="text-blue-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-300 leading-relaxed">
              What makes my approach different is the ability to connect{" "}
              <span className="text-white font-medium">creative thinking with performance data</span>,{" "}
              <span className="text-white font-medium">organic reach with paid acquisition</span>, and{" "}
              <span className="text-white font-medium">brand building with measurable business outcomes</span>.
            </p>
            <p className="text-slate-500 italic text-sm">
              I care less about "marketing trends" and more about understanding why people pay attention in the first place.
            </p>
          </motion.div>

          {/* Right — cards */}
          <motion.div {...fadeUp(0.2)} className="space-y-5">
            {/* Capabilities */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 text-blue-400">Today, I work across</h3>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((cap, i) => (
                  <span key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(124,58,237,0.08))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)" }} />
              <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">✦ Content Philosophy</div>
              <p className="text-slate-200 italic leading-relaxed">
                Good marketing isn't about tricks.<br />
                It's about understanding attention, emotion, and timing better than everyone else.
              </p>
            </div>

            {/* Current focus */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest text-emerald-400">Currently Exploring</h3>
              </div>
              <ul className="space-y-2.5">
                {currentFocus.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <div className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Selected Wins */}
        <motion.div {...fadeUp(0.3)}
          className="relative overflow-hidden rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg,rgba(59,130,246,0.06),rgba(124,58,237,0.06))",
            border: "1px solid rgba(99,102,241,0.18)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.6),transparent)" }} />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }} />

          <h3 className="text-white font-black text-2xl mb-2">Selected Wins</h3>
          <div className="w-10 h-0.5 rounded-full mb-7"
            style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedWins.map((win, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}>
                  <span className="text-blue-400 text-[10px] font-black">✓</span>
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{win}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
