"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Highlight = { value: string; label: string }
type ExpType = {
  company: string
  role: string
  period: string
  type?: string
  logo: string
  promoted?: boolean
  description: string
  bullets: string[]
  highlights: Highlight[]
  accent: string
}

const experiences: ExpType[] = [
  {
    company: "BOP Realty",
    role: "Assistant Marketing Manager",
    period: "Nov 2025 – Present",
    type: "Full-time",
    logo: "/images/boplog.jpg",
    promoted: true,
    description:
      "Promoted from Senior Digital Marketing Executive after building and scaling the company's content and performance marketing ecosystem.",
    bullets: [
      "Leading a 15-member marketing team across content, paid media, creative execution, campaign planning, and social media operations.",
      "Built systems that transformed the brand's digital presence — taking Instagram from under 1,000 followers to multiple reels crossing 1M+ views organically.",
      "Managing campaigns for premium real estate brands: Godrej, DLF, M3M, Gaurs, Sobha, Bhutani, Danube, and more.",
    ],
    highlights: [
      { value: "₹1.12Cr+", label: "Ad Spend" },
      { value: "11,200+", label: "Leads" },
      { value: "15", label: "Team Size" },
      { value: "1M+", label: "Reel Views" },
    ],
    accent: "#10b981",
  },
  {
    company: "BOP Realty",
    role: "Senior Digital Marketing Executive",
    period: "Oct 2024 – Oct 2025",
    type: "Full-time",
    logo: "/images/boplog.jpg",
    description:
      "Handled end-to-end social media management, Meta campaigns, creative coordination, and performance tracking for real estate projects.",
    bullets: [
      "Campaign execution, ad optimization, organic content, reel scripting, and lead-generation campaigns.",
      "Played a major role in improving the brand's visibility, engagement, and consistency across digital platforms.",
    ],
    highlights: [],
    accent: "#3b82f6",
  },
  {
    company: "Counsel India",
    role: "Digital Marketing Executive",
    period: "Jun 2024 – Oct 2024",
    type: "Full-time",
    logo: "/images/councelindialogo.jpeg",
    promoted: true,
    description:
      "Promoted within four months based on performance and ownership. Scaled organic presence and drove significant revenue through content.",
    bullets: [
      "Grew Instagram from 70K to 100K+ followers through content strategy and trend-led execution.",
      "Created short-form content that crossed 30M+ organic views.",
      "Contributed significantly to monthly inbound revenue generation.",
    ],
    highlights: [
      { value: "₹100L+", label: "Ad Spend" },
      { value: "51,000+", label: "Leads" },
      { value: "30M+", label: "Organic Views" },
      { value: "₹6–8L/mo", label: "Organic Revenue" },
    ],
    accent: "#8b5cf6",
  },
  {
    company: "Counsel India",
    role: "Digital Marketing Intern",
    period: "Feb 2024 – May 2024",
    type: "Internship",
    logo: "/images/councelindialogo.jpeg",
    description:
      "Started with content support, creative design, and execution tasks — building the foundation for everything that followed.",
    bullets: [
      "Worked on ad creatives, thumbnails, reel covers, brochures, e-books, copywriting, and SEO research.",
      "Built the foundation for understanding how content, branding, and performance marketing connect.",
    ],
    highlights: [],
    accent: "#ec4899",
  },
]

const freelance: ExpType[] = [
  {
    company: "Ampify Marketing Agency",
    role: "Freelance Marketing Consultant",
    period: "Jun 2025 – Dec 2025",
    type: "Freelance",
    logo: "/images/ampify.jpeg",
    description:
      "Worked across multiple client accounts spanning Ed-Tech, FMCG, FinTech, Fashion, and Food & Beverage.",
    bullets: [
      "Managed campaign strategy, paid media optimization, content direction, and growth execution.",
      "Brands: Dhirubhai Ambani University, Medhavi Skill University, Cheesecake & Co., Apara, and Stockify.",
    ],
    highlights: [
      { value: "₹2.4Cr+", label: "Campaign Exposure" },
      { value: "13,200+", label: "Leads" },
      { value: "5+", label: "Industries" },
    ],
    accent: "#f59e0b",
  },
  {
    company: "Upskill Lab",
    role: "Freelance Growth Consultant",
    period: "2023 – Present",
    type: "Freelance",
    logo: "/images/upskills.png",
    description:
      "Built the brand's digital presence from the ground up through organic content strategy and paid lead generation systems.",
    bullets: [
      "Focused on Meta ads, lead quality, funnel optimization, and audience building.",
      "Long-term retained consultant with scalable lead generation workflows.",
    ],
    highlights: [
      { value: "6,000+", label: "Leads" },
      { value: "₹100", label: "CPL" },
    ],
    accent: "#06b6d4",
  },
]

function ExperienceCard({ exp, index }: { exp: ExpType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-0 mb-5 last:mb-0"
    >
      {/* Left — period + type */}
      <div className="md:pt-5 pb-2 md:pb-0 md:pr-6 flex md:flex-col md:items-end items-center gap-3 md:gap-1.5">
        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{exp.period}</span>
        {exp.type && (
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{ background: `${exp.accent}18`, color: exp.accent, border: `1px solid ${exp.accent}30` }}
          >
            {exp.type}
          </span>
        )}
      </div>

      {/* Right — card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="group relative overflow-hidden rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
          style={{ background: `linear-gradient(to bottom, ${exp.accent}, ${exp.accent}30)` }}
        />
        {/* Hover top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg,transparent,${exp.accent}70,transparent)` }}
        />
        {/* Hover bg */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(ellipse at top left, ${exp.accent}08, transparent 60%)` }}
        />

        <div className="relative pl-6 pr-5 py-5">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden mt-0.5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Image src={exp.logo} alt={exp.company} width={32} height={32} className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="text-white font-bold text-[15px] leading-tight">{exp.role}</h3>
                {exp.promoted && (
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${exp.accent}20`, color: exp.accent, border: `1px solid ${exp.accent}40` }}
                  >
                    ↑ Promoted
                  </span>
                )}
              </div>
              <span className="text-slate-400 text-sm font-medium">{exp.company}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>

          {/* Bullets */}
          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: exp.accent }} />
                {b}
              </li>
            ))}
          </ul>

          {/* Highlights */}
          {exp.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {exp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: `${exp.accent}12`, border: `1px solid ${exp.accent}25` }}
                >
                  <span className="text-sm font-black leading-none" style={{ color: exp.accent }}>{h.value}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{h.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function SectionHeader({ label, title, subtitle, delay = 0 }: { label: string; title: string; subtitle: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="section-label"><span className="w-6 h-px" style={{background:"#a78bfa"}} />{label}</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">{title}</h2>
      <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#f59e0b,#ec4899)" }} />
      <p className="text-slate-500 text-base max-w-xl">{subtitle}</p>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#050b18" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle,#3b82f6,transparent 70%)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">

        <SectionHeader
          label="Career"
          title="Experience"
          subtitle="The roles, brands, campaigns, and systems that shaped how I think about marketing."
        />

        <div className="mb-20">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        <SectionHeader
          label="Consulting"
          title="Freelance & Consulting"
          subtitle="Alongside full-time roles, I've worked with growing brands across multiple industries — helping them scale through performance marketing, content systems, and digital growth strategies."
          delay={0.1}
        />

        <div>
          {freelance.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
