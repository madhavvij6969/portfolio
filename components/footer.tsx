"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Mail, ArrowUp, MessageCircle } from "lucide-react"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="relative overflow-hidden" style={{ background: "#020810", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.4),transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)" }}>
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-white font-black text-lg">Madhav<span className="text-blue-400">.</span></span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed mb-5">
              Growth Marketing Strategist helping brands build attention that converts into revenue.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com/in/madhavvij", icon: Linkedin, hover: "hover:text-blue-400" },
                { href: "https://instagram.com", icon: Instagram, hover: "hover:text-pink-400" },
                { href: "mailto:madhavvij2015@gmail.com", icon: Mail, hover: "hover:text-blue-400" },
                { href: "https://wa.me/917838663778", icon: MessageCircle, hover: "hover:text-emerald-400" },
              ].map(({ href, icon: Icon, hover }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className={`text-slate-700 ${hover} transition-colors p-2 rounded-lg hover:bg-white/[0.04]`}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {[["Home","#home"],["About","#about"],["Experience","#experience"],["Work","#reels"],["Contact","#contact"]].map(([name, href]) => (
                <li key={name}>
                  <button onClick={() => scrollTo(href)}
                    className="text-slate-600 hover:text-slate-300 transition-colors text-xs font-medium">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {["Performance Marketing","Meta Ads","Social Media Strategy","Content Systems","Lead Generation","Creative Direction"].map((s) => (
                <li key={s} className="text-slate-600 text-xs">{s}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-2 text-slate-600 text-xs mb-6">
              <p>madhavvij2015@gmail.com</p>
              <p>+91 7838663778</p>
              <p>Ghaziabad, India</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <ArrowUp className="h-3.5 w-3.5" /> Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-slate-700 text-xs">© {new Date().getFullYear()} Madhav Vij. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
