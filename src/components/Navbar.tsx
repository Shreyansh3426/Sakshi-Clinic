"use client"
import { motion } from "framer-motion"
import { Stethoscope } from "lucide-react"
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 z-50 w-full border-b border-emerald-100/80 bg-white/82 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-900 lg:px-8">
        <a href="#top" className="flex items-center gap-3 transition hover:opacity-90">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
            <Stethoscope className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide">
              Sakshi Clinic
            </span>
            <span className="block text-xs text-slate-500">
              General care in Bhayandar East
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-3 text-sm md:flex">
          <a href="#about" className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">About Doctor</a>
          <a href="#services" className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">Services</a>
          <a href="#testimonials" className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">Testimonials</a>
          <a href="#contact" className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700">Contact</a>
          <a href="#appointment" className="rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-white transition hover:bg-emerald-700">
            Book Now
          </a>
        </div>
      </div>
    </motion.nav>
  )
}