"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Navbar from "@/components/Navbar"

const services = [
  {
    title: "General consultation",
    text: "Personalized medical advice for common health concerns, wellness support, and ongoing care.",
  },
  {
    title: "Fever & viral care",
    text: "Support for fever, viral illness, and general sickness with timely treatment guidance.",
  },
  {
    title: "Diabetes & health checks",
    text: "Regular monitoring, preventive care, and health checkups for long-term wellness.",
  },
  {
    title: "Vaccination & family medicine",
    text: "Vaccination support and family-focused care for children, adults, and senior citizens.",
  },
]

const benefits = [
  "Experienced Ayurvedic physician",
  "Trusted for family care",
  "Convenient location in Bhayandar East",
  "Easy appointment and follow-up support",
]

const metrics = [
  ["25+ yrs", "Extensive clinical experience in general care and Ayurvedic medicine."],
  ["Mon-Sat", "Consultation hours from 10:30 AM to 2:00 PM and 6:30 PM to 10:30 PM."],
  ["All ages", "Care designed for children, adults, and senior citizens."],
  ["Near landmark", "Opposite MBMC School on Talao Road, Bhayandar East."],
]

const testimonials = [
  {
    quote:
      "The clinic feels welcoming and the doctor explains everything clearly. I appreciate the calm approach to care.",
    author: "Family patient",
  },
  {
    quote:
      "The clinic is easy to reach and the service feels personal. It is reassuring to have a trusted physician nearby.",
    author: "Regular visitor",
  },
  {
    quote:
      "The whole experience feels comfortable and organized, from the first visit to follow-up care.",
    author: "Local resident",
  },
]

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Use the Book Appointment button or call the clinic directly for consultation availability.",
  },
  {
    question: "What are the clinic timings?",
    answer: "The clinic is open Monday to Saturday from 10:30 AM to 2:00 PM and 6:30 PM to 10:30 PM. Sunday is closed.",
  },
  {
    question: "Where is the clinic located?",
    answer: "The clinic is at Shivmahima Apartment, Shop No. 1, opposite MBMC School, Talao Road, Bhayandar East, Thane.",
  },
  {
    question: "Which services are available?",
    answer: "The clinic offers general consultation, fever care, diabetes support, vaccination, health checkups, family medicine, and preventive healthcare.",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

function SectionLabel({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-700/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}

function MotionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ClinicHome() {
  const reduceMotion = useReducedMotion()

  return (
    <main id="top" className="relative min-h-screen bg-[#fbfaf7] text-slate-900">
      <Navbar />

      {/* Quiet background: one soft wash, no dot-grid, no multiple blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] bg-gradient-to-b from-emerald-50/70 via-[#fbfaf7] to-[#fbfaf7]"
      />

      <section className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-16 pt-28 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div variants={sectionVariants} initial="hidden" animate="show" className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-800 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open Mon–Sat · Bhayandar East
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]"
            >
              Trusted Ayurvedic and general care in Bhayandar East.
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Sakshi Clinic offers compassionate family medicine, preventive care, and fever support, with ongoing wellness guidance from Dr. Sunil Pandey.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 transition hover:border-emerald-200 hover:text-slate-900"
              >
                Contact
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                ["Same-day slots", "Flexible visit support"],
                ["Follow-up ready", "Quick post-visit care"],
                ["Family first", "Care for every age"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{detail}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-100/80 via-slate-50/60 to-transparent"
              >
                <Image
                  src="/doctor-cutout.png"
                  alt="Dr. Sunil Pandey, General Physician at Sakshi Clinic"
                  fill
                  priority
                  className="object-contain object-bottom p-4"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  }}
                />
              </motion.div>

              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -right-3 top-6 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-md sm:flex"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="text-sm font-semibold leading-tight text-slate-800">
                  25+ Years
                  <br />
                  Experience
                </div>
              </motion.div>

              <div className="relative mt-4 text-center sm:text-left">
                <p className="text-sm font-semibold text-slate-800">Dr. Sunil Pandey</p>
                <p className="text-sm text-slate-500">General Physician · BAMS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl px-6 pb-6 lg:px-8"
      >
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700/80">Visit us today</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                A calm clinic experience for every generation
              </h2>
            </div>
            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Open Now
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["General physician", "Care for common illnesses, wellness concerns, and preventive support."],
              ["Ayurvedic approach", "Traditional treatment guidance combined with practical medical advice."],
              ["Family care", "Support for children, adults, and senior citizens under one roof."],
              ["Trusted location", "Conveniently situated opposite MBMC School in Bhayandar East."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-4">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
            <p className="text-sm font-semibold text-emerald-800">Clinic focus</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Warm, practical, and personal care aligned with the needs of local families and patients.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl px-6 pb-6 lg:px-8"
      >
        <SectionLabel
          eyebrow="Clinical services"
          title="Comprehensive care for everyday health concerns and long-term wellness."
          description="From general consultation to family medicine and preventive care, the clinic supports a wide range of needs with a calm and patient-first approach."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <MotionCard
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-700">
                {service.title.slice(0, 2)}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
            </MotionCard>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-700/80">About the doctor</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Dr. Sunil Pandey brings experience, warmth, and practical care to every consultation.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              With 25+ years of experience, Dr. Sunil Pandey combines general physician expertise with Ayurvedic insight to support patients with clarity and compassion.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map(([value, detail]) => (
              <MotionCard key={value} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <p className="text-4xl font-semibold text-slate-900">{value}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{detail}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative bg-slate-900 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Testimonials</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A trusted local clinic that patients return to for comfort and continuity.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            The practice is known for a reassuring approach, practical care, and a welcoming environment for families.
          </p>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex gap-1 text-emerald-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-slate-100">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl px-6 py-4 lg:px-8"
      >
        <SectionLabel
          eyebrow="FAQ"
          title="Helpful answers for appointments, timings, and clinic visits."
          description="The page keeps essential information easy to find so patients can plan their visit with confidence."
        />

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:bg-[#fbfaf7]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-sky-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="appointment"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative px-6 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-700/80">Appointment & contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Book a visit at Sakshi Clinic in Bhayandar East.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Visit us at Shivmahima Apartment, Shop No. 1, opposite MBMC School, Talao Road, Bhayandar East, Thane. We welcome patients of all ages for general care and wellness support.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919987063475"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Call clinic
            </a>
            <a
              href="https://wa.me/919987063475"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#fbfaf7]"
            >
              WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sakshi%20Clinic%2C%20Bhayandar%20East"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#fbfaf7]"
            >
              View map
            </a>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-7xl overflow-hidden rounded-[1.75rem] border border-slate-200">
          <iframe
            title="Sakshi Clinic location"
            src="https://www.google.com/maps?q=Shivmahima+Apartment+Talao+Road+Bhayandar+East+Thane&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.section>

      <footer id="contact" className="relative border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sakshi Clinic. Trusted family care in Bhayandar East.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="transition hover:text-sky-700">Services</a>
            <a href="#about" className="transition hover:text-sky-700">About Doctor</a>
            <a href="#appointment" className="transition hover:text-sky-700">Appointment</a>
          </div>
        </div>
      </footer>
    </main>
  )
}