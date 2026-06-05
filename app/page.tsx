import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandsSkills } from "@/components/brands-skills"
import { Experience } from "@/components/experience"
import { ReelsGallery } from "@/components/reels-gallery"
import { CreativeGallery } from "@/components/creative-gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <BrandsSkills />
      <Experience />
      <ReelsGallery />
      <CreativeGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
