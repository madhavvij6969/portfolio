"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  siMeta, siGoogleads, siGoogleanalytics, 
  siFigma, siEnvato, 
  siClaude, siDeepseek, siGooglegemini, siOpenaigym,
  siHootsuite, siBuffer, siMailchimp, siTrello,
  siSemrush, siPinterest, siFreepik,
} from "simple-icons"

const customIcons: Record<string, { path: string; hex: string; viewBox?: string }> = {
  capcut: { hex: "000000", path: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V7.5l7 4.5-7 4.5z" },
  inshot: { hex: "FF3D6B", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" },
  vn: { hex: "FF6B35", path: "M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h3l2 4 2-4h3l-3.5 8H13l-1.5-3.5L10 16H7.5L4 8h2z" },
  clarity: { hex: "0078D4", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" },
  higgsfield: { hex: "6366F1", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", viewBox: "0 0 24 24" },
  omni: { hex: "8B5CF6", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" },
  vidiq: { hex: "FF0000", path: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3l5 6-5 6V6zm-2 0v12l-5-6 5-6z" },
  ubersuggest: { hex: "FF6B35", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" },
  metaadslibrary: { hex: "0467DF", path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" },
  adobe: { hex: "FF0000", path: "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0L24 22.624V1.376z" },
}

const toolCategories = [
  {
    label: "Paid & Analytics", color: "#3b82f6", purpose: "Campaign management, tracking & performance reporting",
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
    label: "Content & Design", color: "#6366f1", purpose: "Creating visuals, videos, and branded content",
    tools: [
      { name: "Canva", hex: "#00C4CC", letter: "C" },
      { name: "CapCut", custom: "capcut" },
      { name: "InShot", custom: "inshot" },
    
      { name: "Figma", si: siFigma },
  
      { name: "Envato", si: siEnvato },
     
    ],
  },
  {
    label: "AI Tools", color: "#8b5cf6", purpose: "Content generation, ideation & AI-assisted workflows",
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
    label: "Management", color: "#3b82f6", purpose: "Scheduling, CRM, email & project coordination",
    tools: [
      { name: "Hootsuite", si: siHootsuite },
      { name: "Buffer", si: siBuffer },
      { name: "Mailchimp", si: siMailchimp },
      { name: "Trello", si: siTrello },
    ],
  },
  {
    label: "Research", color: "#a855f7", purpose: "SEO, keyword research & competitor analysis",
    tools: [
      { name: "VidIQ", custom: "vidiq" },
      { name: "SEMrush", si: siSemrush },
      { name: "Pinterest", si: siPinterest },
      { name: "Ubersuggest", custom: "ubersuggest" },
    ],
  },
]

function ToolIcon({ tool }: { tool: { name: string; si?: { path: string; hex: string }; custom?: string; hex?: string; letter?: string } }) {
  if (tool.letter) {
    return (
      <div className="w-6 h-6 rounded-md flex items-center justify-center font-black text-white text-xs flex-shrink-0" style={{ background: tool.hex }}>
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
    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${iconData.hex}18`, border: `1px solid ${iconData.hex}30` }}>
      <svg viewBox={tool.custom && customIcons[tool.custom]?.viewBox ? customIcons[tool.custom].viewBox : "0 0 24 24"} className="w-3.5 h-3.5" fill={iconData.hex}>
        <path d={iconData.path} />
      </svg>
    </div>
  )
}

const brands = [
  { name: "Godrej",                     logo: "/images/goderj.jpg",                                        whiteBg: true },
  { name: "DLF",                        logo: "/images/dlf.svg",                                           whiteBg: true },
  { name: "M3M",                        logo: "/images/m3m.jpg",                                           whiteBg: true },
  { name: "Gaurs",                      logo: "/images/gaur.png",                                          whiteBg: true },
  { name: "Sobha",                      logo: "/images/sobha.png",                                         whiteBg: true },
  { name: "Bhutani",                    logo: "/images/bhutani.png",                                       whiteBg: true },
  { name: "Danube",                     logo: "/images/danube.png",                                        whiteBg: true },
  { name: "Dhirubhai Ambani University", logo: "/images/Dhirubhai-Ambani-University-new-logo.jpg",         whiteBg: true },
  { name: "Medhavi Skill University",   logo: "/images/medhavi.png",                                      whiteBg: true },
  { name: "Cheesecake & Co.",           logo: "/images/cheescake.jpg",                                    whiteBg: true },
  { name: "Apara",                      logo: "/images/apara.png",                                        whiteBg: true },
  { name: "Stockify",                   logo: "/images/stokify.png",                                      whiteBg: true },
  { name: "BOP Realty",                 logo: "/images/boplog.jpg",                                       whiteBg: true },
  { name: "Counsel India",              logo: "/images/councelindialogo.jpg",                                whiteBg: true },
  { name: "Upskill Lab",                logo: "/images/upskills.png",                                     whiteBg: true },
  { name: "Ampify Marketing",           logo: "/images/socialbandanlogo.png",                             whiteBg: true },
  { name: "Migsun",                     logo: "/images/migsun.png",                                       whiteBg: true },
  { name: "Prestige",                   logo: "/images/prestige.png",                                     whiteBg: true },
]

const skills = [
  {
    label: "Organic Growth & Viral Content",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>`,
  },
  {
    label: "Content Strategy & Planning",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>`,
  },
  {
    label: "Copywriting & Hook Writing",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`,
  },
  {
    label: "Brand Communication Strategy",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>`,
  },
  {
    label: "Social Media Management",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>`,
  },
  {
    label: "Meta Ads & Performance Marketing",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" /></svg>`,
  },
  {
    label: "Lead Generation & Funnel Management",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>`,
  },
  {
    label: "CRM & Lead Nurturing",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
  },
  {
    label: "Team Leadership & Strategy",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>`,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
})

function BrandLogo({ brand }: { brand: { name: string; logo: string; whiteBg: boolean } }) {
  return (
    <div
      className="group inline-flex items-center justify-center rounded-xl flex-shrink-0 cursor-default transition-all duration-300 hover:scale-105"
      style={{
        background: brand.whiteBg ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        width: 72,
        height: 72,
        padding: 10,
      }}
    >
      <div className="relative w-full h-full flex-shrink-0">
        <Image
          src={brand.logo}
          alt={brand.name}
          fill
          className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement
            t.style.display = "none"
            const p = t.parentElement
            if (p) p.innerHTML = `<div style="width:100%;height:100%;border-radius:6px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:rgba(255,255,255,0.35)">${brand.name.charAt(0)}</div>`
          }}
        />
      </div>
    </div>
  )
}

export function BrandsSkills() {
  return (
    <>
      {/* ─── BRANDS ─── */}
      <section id="brands" className="relative py-24 overflow-hidden" style={{ background: "#030712" }}>
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg,#030712,transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg,#030712,transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-12">
          <motion.div {...fadeUp(0)}>
            <div className="section-label"><span className="w-6 h-px" style={{background:"#a78bfa"}} />Brands</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Brands I've Marketed For</h2>
            <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }} />
            <p className="text-slate-500 text-base">Across real estate, ed-tech, consumer brands, and high-growth businesses.</p>
          </motion.div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
            {[...brands, ...brands].map((brand, i) => (
              <BrandLogo key={i} brand={brand} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 whitespace-nowrap" style={{ animation: "marquee-reverse 40s linear infinite" }}>
            {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, i) => (
              <BrandLogo key={i} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS + TOOLS ─── */}
      <section id="skills" className="relative py-28 overflow-hidden" style={{ background: "#050b18" }}>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: "radial-gradient(ellipse,#3b82f6,transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Core Capabilities ── */}
            <motion.div {...fadeUp(0)}>
              <div className="section-label"><span className="w-6 h-px" style={{background:"#a78bfa"}} />Capabilities</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Core Capabilities</h2>
              <div className="w-14 h-0.5 rounded-full mb-3" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }} />
              <p className="text-slate-500 text-sm mb-7">A blend of strategy, execution, creative thinking, and performance marketing.</p>

              <div className="flex flex-col gap-2.5">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.04)}
                    className="group relative overflow-hidden rounded-xl px-4 py-3 flex items-center gap-3.5 cursor-default"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                      style={{ background: "linear-gradient(90deg,rgba(59,130,246,0.06),rgba(124,58,237,0.04))" }} />
                    <div className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(180deg,transparent,rgba(99,102,241,0.7),transparent)" }} />
                    <div
                      className="relative flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-blue-400"
                      style={{ background: "rgba(59,130,246,0.1)" }}
                      dangerouslySetInnerHTML={{ __html: skill.svg }}
                    />
                    <span className="relative text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Tools & Stack ── */}
            <motion.div {...fadeUp(0.1)}>
              <div className="section-label"><span className="w-6 h-px" style={{background:"#a78bfa"}} />Stack</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Tools & Stack</h2>
              <div className="w-14 h-0.5 rounded-full mb-3" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }} />
              <p className="text-slate-500 text-sm mb-7">Platforms and systems I actively use across content, campaigns, analytics, and operations.</p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {toolCategories.map((cat, ci) => (
                  <div
                    key={ci}
                    className={`px-5 py-4 ${ci < toolCategories.length - 1 ? "border-b" : ""}`}
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.color }}>{cat.label}</span>
                      </div>
                      <span className="text-slate-600 text-xs">{cat.purpose}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool, ti) => (
                        <motion.div
                          key={ti}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: ci * 0.04 + ti * 0.03, duration: 0.35 }}
                          viewport={{ once: true }}
                          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-default transition-all duration-200 hover:scale-105"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                        >
                          <ToolIcon tool={tool} />
                          <span className="text-slate-400 text-xs font-medium group-hover:text-slate-200 transition-colors whitespace-nowrap">
                            {tool.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </>
  )
}
