"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"
import { img } from "@/lib/image-path"

const heroReel = {
  thumbnail: img("/images/reel1.jpeg"),
  company: "Counsel India",
  views: "30.4M",
  viewsLabel: "organic views — zero paid boost",
  desc: '"How it feels when you express your emotions in front of an emotionally unavailable person"',
  insight: "Didn't sell anything. Didn't mention a brand. Just held up a mirror to something millions of people feel but never say out loud. When content makes someone think \"this is me\" — it travels. This reel alone generated ₹6–8L/month in organic revenue for the brand.",
}

const gridReels = [
  {
    thumbnail: img("/images/reel2.jpeg"),
    company: "Counsel India",
    views: "4.1M",
    desc: '"Me going back to my best friend after every minor mental health inconvenience"',
    insight: "Meme format + mental health honesty = instant shareability. People didn't just watch — they sent it to their best friends.",
  },
  {
    thumbnail: img("/images/reel3.jpeg"),
    company: "Social Banana",
    views: "2.9M",
    desc: '"When KitKat made the cutest ad the whole country loved"',
    insight: "Nostalgia + iconic creative + zero over-explanation. Let the ad speak. Marketers and non-marketers both felt it.",
  },
  {
    thumbnail: img("/images/reel4.jpeg"),
    company: "BOP Realty",
    views: "800K+",
    desc: '"And almost nobody is talking about what it means for real estate & investors"',
    insight: "Information gap hook. Made viewers feel they were about to hear something others were missing. Real estate content rarely feels urgent — this one did.",
  },
]

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)" }}>
        <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
      </div>
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

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#666" }}>
              content that actually travelled
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-1">45M+ organic views across platforms.</h2>
            <p className="text-sm italic" style={{ color: "#888" }}>
              Every reel here started with one question — why would someone stop scrolling for this?
            </p>
          </motion.div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden mb-3"
            style={{ border: "0.5px solid #222", background: "#111" }}
          >
            <div className="flex flex-col sm:grid sm:grid-cols-[220px_1fr]">
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ minHeight: 260 }}>
                <Image
                  src={heroReel.thumbnail}
                  alt={heroReel.desc}
                  fill
                  className="object-cover"
                />
                <PlayButton />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "#1a1a1a", color: "#888", border: "0.5px solid #333" }}>
                    {heroReel.company}
                  </span>
                  <div className="text-4xl sm:text-5xl font-medium text-white leading-none mb-1">{heroReel.views}</div>
                  <div className="text-xs mb-4" style={{ color: "#555" }}>{heroReel.viewsLabel}</div>
                  <div className="text-sm sm:text-base font-medium leading-relaxed mb-4" style={{ color: "#e0e0e0" }}>
                    {heroReel.desc}
                  </div>
                  <div className="w-full h-px mb-4" style={{ background: "#222" }} />
                  <p className="text-[10px] font-medium uppercase tracking-widest mb-1.5" style={{ color: "#555" }}>Why it worked</p>
                  <p className="text-xs italic leading-relaxed" style={{ color: "#888" }}>{heroReel.insight}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {gridReels.map((reel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
                style={{ border: "0.5px solid #1e1e1e", background: "#111" }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "9/14" }}>
                  <Image src={reel.thumbnail} alt={reel.desc} fill className="object-cover" />
                  <PlayButton />
                </div>

                {/* Body */}
                <div className="p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider mb-1" style={{ color: "#555" }}>{reel.company}</p>
                  <div className="text-xl font-medium text-white mb-1">{reel.views}</div>
                  <p className="text-xs font-medium leading-snug mb-3" style={{ color: "#ccc" }}>{reel.desc}</p>
                  <div className="w-full h-px mb-3" style={{ background: "#222" }} />
                  <p className="text-[10px] font-medium uppercase tracking-widest mb-1" style={{ color: "#555" }}>Why it worked</p>
                  <p className="text-xs italic leading-relaxed" style={{ color: "#666" }}>{reel.insight}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xs italic pt-8"
            style={{ color: "#444" }}
          >
            "The best content doesn't feel like content."
          </motion.p>

        </div>
      </section>

      {/* ─── SOCIAL BANANA ─── */}
      <section id="social-banana" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#060a14" }}>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(245,158,11,0.07),transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

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
                <Image src={img("/images/socialbandanlogo.png")} alt="Social Banana" width={32} height={32} className="object-contain" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Social Banana</h2>
            </div>
            <p className="text-slate-500 text-base max-w-xl mx-auto">A marketing lab. Zero paid push. Pure experimentation.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto"
            >
              <img
                src={img("/images/views.jpeg")}
                alt="Social Banana Stats"
                className="w-full rounded-3xl object-cover"
                style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
