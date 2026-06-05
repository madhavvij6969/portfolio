"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Play, Eye, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const reels = [
  { id: 1, thumbnail: "/images/reel1.jpeg", views: "1.2M", likes: "85K", shares: "12K", company: "Counsel India" },
  { id: 2, thumbnail: "/images/reel2.jpeg", views: "800K", likes: "45K", shares: "8K", company: "BOP Realty" },
  { id: 3, thumbnail: "/images/reel3.jpeg", views: "650K", likes: "38K", shares: "6K", company: "Counsel India" },
  { id: 4, thumbnail: "/images/reel4.jpeg", views: "500K", likes: "32K", shares: "5K", company: "Social Banana" },
]

// Circumference of r=80 circle = 2π×80 ≈ 502.65
const CIRC = 502.65

function CountUp({ target, duration, delay }: { target: number; duration: number; delay: number }) {
  const val = useMotionValue(0)
  const rounded = useTransform(val, (v) => Math.floor(v).toLocaleString())
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => {
      const controls = animate(val, target, { duration, ease: "easeOut" })
      return () => controls.stop()
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [inView])

  useEffect(() => rounded.on("change", setDisplay), [rounded])

  return <span ref={ref}>{display}</span>
}

function AnalyticsCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // Ring draw: strokeDashoffset goes from CIRC (hidden) to 125 (final position)
  const ringOffset = useMotionValue(CIRC)
  const [glowVisible, setGlowVisible] = useState(false)
  const [numberVisible, setNumberVisible] = useState(false)
  const [legendVisible, setLegendVisible] = useState(false)
  const [reachedVisible, setReachedVisible] = useState(false)
  const [growthVisible, setGrowthVisible] = useState(false)
  const [pulseActive, setPulseActive] = useState(false)

  useEffect(() => {
    if (!inView) return

    // 0.3s → ring starts drawing → completes at 2.5s
    setTimeout(() => {
      animate(ringOffset, 125, { duration: 2.2, ease: "easeInOut" })
    }, 300)

    // 0.8s → glow
    setTimeout(() => setGlowVisible(true), 800)
    // 1.0s → number counts
    setTimeout(() => setNumberVisible(true), 1000)
    // 2.8s → legend
    setTimeout(() => setLegendVisible(true), 2800)
    // 3.2s → accounts reached
    setTimeout(() => setReachedVisible(true), 3200)
    // 3.5s → growth %
    setTimeout(() => setGrowthVisible(true), 3500)
    // 4.0s → pulse
    setTimeout(() => setPulseActive(true), 4000)
  }, [inView])

  return (
    <div ref={ref} className="w-full max-w-sm mx-auto">
      {/* Card fade in at 0.0s */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl overflow-hidden relative"
        style={{
          background: "linear-gradient(160deg,#111827 0%,#0d0d0d 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top shimmer */}
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)" }} />

        <div className="p-6">
          {/* Filter row */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
              Last 30 days
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>29 Apr – 28 May</span>
          </div>

          {/* Donut */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative" style={{ width: 200, height: 200 }}>

              {/* Glow behind ring — appears at 0.8s */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: glowVisible ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
                  filter: "blur(16px)",
                }}
              />

              {/* Continuous pulse ring at 4.0s */}
              {pulseActive && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ border: "2px solid rgba(124,58,237,0.4)", borderRadius: "50%" }}
                />
              )}

              <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: "rotate(-90deg)" }}>
                <defs>
                  <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6d28d9" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* Track */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="20" />
                {/* Purple arc — animates from 0.3s */}
                <motion.circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="url(#pg2)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={`${CIRC}`}
                  style={{ strokeDashoffset: ringOffset }}
                />
                {/* Pink 0.9% — appears with legend at 2.8s */}
                <motion.circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={`5 ${CIRC - 5}`}
                  strokeDashoffset={125}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: legendVisible ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </svg>

              {/* Center number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Views</span>
                <span className="text-3xl font-black text-white leading-none tracking-tight">
                  {numberVisible ? <><CountUp target={6251089} duration={1.5} delay={0} /></> : "0"}
                </span>
              </div>
            </div>
          </div>

          {/* Legend — slides in at 2.8s */}
          <motion.div
            className="space-y-2.5 mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: legendVisible ? 1 : 0, y: legendVisible ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { color: "#f472b6", label: "Followers", pct: "0.9%" },
              { color: "#a855f7", label: "Non-followers", pct: "99.1%" },
            ].map((l) => (
              <div key={l.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{l.label}</span>
                </div>
                <span className="text-xs font-bold text-white">{l.pct}</span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="mb-5"
            style={{ height: 1, background: "rgba(255,255,255,0.06)" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: reachedVisible ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Accounts reached — at 3.2s */}
          <div className="flex items-center justify-between">
            <motion.span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: reachedVisible ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Accounts reached
            </motion.span>
            <div className="text-right">
              <motion.div
                className="text-sm font-bold text-white"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: reachedVisible ? 1 : 0, y: reachedVisible ? 0 : 6 }}
                transition={{ duration: 0.4 }}
              >
                {reachedVisible && <CountUp target={4468087} duration={1.2} delay={0} />}
              </motion.div>
              {/* Growth % — at 3.5s */}
              <motion.div
                className="text-xs font-bold"
                style={{ color: "#4ade80" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: growthVisible ? 1 : 0, scale: growthVisible ? 1 : 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                +737.3%
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ReelsGallery() {
  return (
    <>
      {/* ─── REELS ─── */}
      <section id="reels" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#030712" }}>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none -translate-y-1/2"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">Viral Reels</h2>
            <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />
            <p className="text-slate-500 text-base max-w-2xl">
              45M+ organic views across platforms. Content built on hooks, storytelling, and platform-native execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="relative aspect-[9/16]">
                  <Image src={reel.thumbnail} alt={`Reel ${reel.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: "rgba(59,130,246,0.8)" }}>
                      {reel.company}
                    </span>
                  </div>
                </div>
                <div className="p-3 flex justify-between" style={{ background: "rgba(255,255,255,0.025)" }}>
                  {[
                    { icon: Eye, val: reel.views },
                    { icon: Heart, val: reel.likes },
                    { icon: Share2, val: reel.shares },
                  ].map(({ icon: Icon, val }, i) => (
                    <span key={i} className="flex items-center gap-1 text-slate-500 text-xs hover:text-slate-300 transition-colors">
                      <Icon className="h-3 w-3" /> {val}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL BANANA ─── */}
      <section id="social-banana" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#060a14" }}>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(245,158,11,0.07),transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
              Personal Project
            </span>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <Image src="/images/socialbandanlogo.png" alt="Social Banana" width={32} height={32} className="object-contain" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Social Banana</h2>
            </div>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              A marketing lab. Zero paid push. Pure experimentation.
            </p>
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-base leading-relaxed">
                Started as a personal experiment — can good marketing thinking build an audience on its own?
                No paid promotion. No shortcuts. Just ideas, observations, and consistency.
              </p>

              <div className="space-y-3">
                {[
                  { n: "01", text: "Why people stop scrolling" },
                  { n: "02", text: "Why brands become memorable" },
                  { n: "03", text: "Why certain campaigns outperform others" },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs font-black tabular-nums" style={{ color: "rgba(245,158,11,0.5)" }}>{item.n}</span>
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-2 border-yellow-500/50 pl-4">
                <p className="text-slate-400 italic text-sm leading-relaxed">
                  "If you want to understand how I think before we work together — Social Banana is probably the clearest answer."
                </p>
              </blockquote>

              <a
                href="https://instagram.com/socialbananaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#f59e0b,#f97316)", boxShadow: "0 8px 32px rgba(245,158,11,0.25)" }}
              >
                View Social Banana →
              </a>
            </motion.div>

            {/* Right — Animated Analytics Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <AnalyticsCard />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
