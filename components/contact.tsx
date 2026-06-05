"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowRight } from "lucide-react"

const offerings = [
  "scaling a brand",
  "improving lead quality",
  "fixing weak content",
  "building a stronger organic presence",
  "looking for performance-driven marketing systems",
]

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#030712" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#3b82f6,transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="section-label justify-center mb-6">
            <span className="w-6 h-px bg-blue-400" />
            Get In Touch
            <span className="w-6 h-px bg-blue-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Let's Build Something{" "}
            <span style={{
              background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              That Actually Works.
            </span>
          </h2>

          <div className="w-16 h-0.5 rounded-full mx-auto mb-12"
            style={{ background: "linear-gradient(90deg,#3b82f6,#7c3aed)" }} />

          <p className="text-slate-500 text-base mb-5">Whether you're:</p>
          <div className="space-y-2.5 mb-12">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 text-slate-300 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)" }} />
                {item}
              </motion.div>
            ))}
          </div>

          <p className="text-slate-400 text-base mb-12 leading-relaxed max-w-xl mx-auto">
            I'm always open to meaningful projects, consulting opportunities, and growth-focused collaborations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-16">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:madhavvij2015@gmail.com"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-shadow"
              style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)" }}
            >
              <Mail className="h-4 w-4" /> Send an Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/917838663778"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-shadow"
              style={{ background: "linear-gradient(135deg,#059669,#047857)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/madhavvij"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </motion.a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {[
              { icon: Mail, text: "madhavvij2015@gmail.com" },
              { icon: Phone, text: "+91 7838663778" },
              { icon: MapPin, text: "Ghaziabad, India" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 justify-center text-slate-600 hover:text-slate-400 transition-colors">
                <Icon className="h-3.5 w-3.5 text-blue-500" />
                <span className="text-xs">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
