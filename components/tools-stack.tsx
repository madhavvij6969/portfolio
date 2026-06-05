"use client"

import { motion } from "framer-motion"
import {
  siMeta, siGoogleads, siGoogleanalytics, siGooglesearchconsole,
  siFigma, siEnvato, siBehance,
  siClaude, siDeepseek, siGooglegemini, siOpenaigym,
  siHootsuite, siBuffer, siMailchimp, siWhatsapp, siTrello, siGooglesheets,
  siSemrush, siPinterest, siFreepik,
  siInstagram, siFacebook,
} from "simple-icons"

// ── Custom SVG paths for tools not in simple-icons ──────────────────────────
const customIcons: Record<string, { path: string; hex: string; viewBox?: string }> = {
  capcut: {
    hex: "000000",
    path: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V7.5l7 4.5-7 4.5z",
  },
  inshot: {
    hex: "FF3D6B",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
  },
  vn: {
    hex: "FF6B35",
    path: "M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h3l2 4 2-4h3l-3.5 8H13l-1.5-3.5L10 16H7.5L4 8h2z",
  },
  clarity: {
    hex: "0078D4",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
  },
  higgsfield: {
    hex: "6366F1",
    path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    viewBox: "0 0 24 24",
  },
  omni: {
    hex: "8B5CF6",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
  },
  vidiq: {
    hex: "FF0000",
    path: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3l5 6-5 6V6zm-2 0v12l-5-6 5-6z",
  },
  ubersuggest: {
    hex: "FF6B35",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z",
  },
  metaadslibrary: {
    hex: "0467DF",
    path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  },
  adobe: {
    hex: "FF0000",
    path: "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0L24 22.624V1.376z",
  },
}

// ── Tool definitions ─────────────────────────────────────────────────────────
const categories = [
  {
    label: "Paid & Analytics",
    color: "#3b82f6",
    tools: [
      { name: "Meta Ads Manager", si: siMeta },
      { name: "Google Ads", si: siGoogleads },
      { name: "Meta Business Suite", si: siMeta },
      { name: "Google Analytics", si: siGoogleanalytics },
      { name: "Meta Ad Library", custom: "metaadslibrary" },
      { name: "Microsoft Clarity", custom: "clarity" },
    ],
  },
  {
    label: "Content & Design",
    color: "#ec4899",
    tools: [
      { name: "Canva", hex: "#00C4CC", letter: "C" },
      { name: "CapCut", custom: "capcut" },
      { name: "InShot", custom: "inshot" },
      { name: "VN", custom: "vn" },
      { name: "Figma", si: siFigma },
      { name: "Adobe", custom: "adobe" },
      { name: "Envato", si: siEnvato },
      { name: "Behance", si: siBehance },
    ],
  },
  {
    label: "AI Tools",
    color: "#8b5cf6",
    tools: [
      { name: "Claude", si: siClaude },
      { name: "ChatGPT", si: siOpenaigym },
      { name: "DeepSeek", si: siDeepseek },
      { name: "Gemini", si: siGooglegemini },
      { name: "Higgsfield", custom: "higgsfield" },
      { name: "Omni", custom: "omni" },
      { name: "Freepik AI", si: siFreepik },
    ],
  },
  {
    label: "Management",
    color: "#10b981",
    tools: [
      { name: "Hootsuite", si: siHootsuite },
      { name: "Buffer", si: siBuffer },
      { name: "Mailchimp", si: siMailchimp },
      { name: "WhatsApp Business", si: siWhatsapp },
      { name: "Trello", si: siTrello },
      { name: "Google Sheets", si: siGooglesheets },
    ],
  },
  {
    label: "Research",
    color: "#f59e0b",
    tools: [
      { name: "VidIQ", custom: "vidiq" },
      { name: "SEMrush", si: siSemrush },
      { name: "Pinterest", si: siPinterest },
      { name: "Google Search Console", si: siGooglesearchconsole },
      { name: "Ubersuggest", custom: "ubersuggest" },
    ],
  },
]

// ── Icon renderer ─────────────────────────────────────────────────────────────
function ToolIcon({ tool }: { tool: { name: string; si?: { path: string; hex: string }; custom?: string; hex?: string; letter?: string } }) {
  if (tool.letter) {
    return (
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm flex-shrink-0"
        style={{ background: tool.hex }}
      >
        {tool.letter}
      </div>
    )
  }

  const iconData = tool.si
    ? { path: tool.si.path, hex: `#${tool.si.hex}` }
    : tool.custom
    ? { path: customIcons[tool.custom].path, hex: `#${customIcons[tool.custom].hex}` }
    : null

  if (!iconData) return null

  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: `${iconData.hex}18`, border: `1px solid ${iconData.hex}30` }}
    >
      <svg
        viewBox={tool.custom && customIcons[tool.custom]?.viewBox ? customIcons[tool.custom].viewBox : "0 0 24 24"}
        className="w-4 h-4"
        fill={iconData.hex}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconData.path} />
      </svg>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export function ToolsStack() {
  return (
    <section id="tools" className="relative py-28 overflow-hidden" style={{ background: "#030712" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#6366f1,transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label">
            <span className="w-6 h-px bg-blue-400" />
            Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Tools & Stack</h2>
          <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />
          <p className="text-slate-500 text-base max-w-2xl">
            Platforms, tools, and systems I actively use across content, campaigns, analytics, and operations.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: cat.color }}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg,${cat.color}30,transparent)` }} />
              </div>

              {/* Tool cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.tools.map((tool, ti) => (
                  <motion.div
                    key={ti}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ci * 0.05 + ti * 0.04, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="group relative overflow-hidden rounded-xl p-3.5 flex flex-col items-center gap-2.5 cursor-default transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl"
                      style={{ background: `radial-gradient(circle at 50% 0%,${cat.color}12,transparent 70%)` }}
                    />
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `linear-gradient(90deg,transparent,${cat.color}80,transparent)` }}
                    />

                    <div className="relative">
                      <ToolIcon tool={tool} />
                    </div>
                    <span className="relative text-slate-400 text-[10px] font-medium text-center leading-tight group-hover:text-slate-200 transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom count badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-slate-400"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="font-black text-white text-base">30+</span>
            tools actively used across campaigns, content, and operations
          </div>
        </motion.div>
      </div>
    </section>
  )
}
