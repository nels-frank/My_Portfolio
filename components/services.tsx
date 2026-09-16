"use client"

import { motion } from "framer-motion"
import {
  Code2,
  BriefcaseBusiness,
  Globe2,
  Server,
  Database,
  Puzzle,
  School,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Development of complete web applications from frontend to backend and database.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Business Systems",
    description:
      "Development of customized software solutions for organizational and business processes.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Web Application Development",
    description:
      "Modern, responsive applications using React, Next.js and TypeScript.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Backend & API Development",
    description:
      "Development of backend services, REST APIs and database-driven applications.",
    icon: Server,
  },
  {
    number: "05",
    title: "Database Solutions",
    description:
      "Design and implementation of relational and NoSQL database solutions.",
    icon: Database,
  },
  {
    number: "06",
    title: "System Integration",
    description:
      "Integration of authentication, payment, email and third-party services.",
    icon: Puzzle,
  },
  {
    number: "07",
    title: "School Management Systems",
    description:
      "Development of digital solutions for school administration and academic management.",
    icon: School,
  },
]

const interests = [
  "Full-Stack Development",
  "Software Engineering",
  "Web Applications",
  "Business Systems",
  "Enterprise Applications",
  "Backend Development",
  "Database Systems",
  "API Development",
  "Cloud Deployment",
  "ICT Systems",
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="max-w-7xl rounded-3xl bg-white px-[13px] pb-2 md:px-[12px] lg:px-3">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-2 -top-80 h-100 w-200 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-60 h-60 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        
         <div className="relative mx-auto max-w-7xl px-[13px] py-2 md:px-[12px] md:py-8 lg:px-20 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900">
              <Code2 className="h-4 w-4" />
              SERVICES
            </div>
             <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Building solutions that work
            </h1>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              I develop practical software solutions that connect technology,
              business processes, and real-world needs — from modern web
              applications to complete business systems.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services */}
      <section className="mx-auto max-w-7xl px-[13px] py-2 md:px-[21px] md:py-0 lg:px-10 lg:py-0">
        <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
            What I Do
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Software development services
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
          <p className="mt-2 max-w-3xl text-2xl text-justify leading-8">
            From frontend interfaces to backend systems and integrations, I
            build solutions designed to be functional, scalable, and useful.
          </p>
        </motion.div>
        {/* Service Grid */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-purple-50">
                  {service.number}
                </div>
                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-900 transition-all duration-300 group-hover:bg-purple-900 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold tracking-tight text-slate-950 md:mt-7 md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-600 md:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-purple-900">
                  <CheckCircle2 className="h-5 w-5" />
                  Professional solution
                </div>
              </motion.article>
            )
          })}
        </div>
        </div>
      </section>
      {/* Achievement */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-[13px] py-10 md:px-[21px] md:py-12 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Achievement badge */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center overflow-hidden rounded-[2.5rem] bg-purple-900 shadow-2xl shadow-purple-900/20">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/10" />
                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border-[30px] border-white/10" />
                <div className="relative text-center text-white">
                  <Award className="mx-auto h-20 w-20" />
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-purple-200 md:text-lg lg:text-2xl">
                    Achievement
                  </p>
                  <p className="mt-2 text-2xl font-bold md:text-3xl">
                    Professional
                    <br />
                    Recognition
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Achievement content */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-900 md:text-base lg:text-2xl">
                Recognition
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Commendation for Website Design Training
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 md:mt-6 md:text-lg md:leading-8 lg:text-2xl">
                Received a commendation from the{" "}
                <span className="font-semibold text-slate-900">
                  Deputy Chairman, Nassarawa Eggon Local Government Area,
                  Nasarawa State
                </span>
                , for training corps members in website design.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm md:mt-7 md:p-5">
                <CheckCircle2 className="mt-0.5 h-11 w-7 shrink-0 text-purple-900" />
                <p className="text-sm font-bold leading-7 text-black md:text-base">
                  Recognition for sharing practical web development knowledge
                  and contributing to technology-focused training.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Professional Interests */}
      <section className="mx-auto max-w-7xl px-[13px] py-12 md:px-[21px] md:py-10 lg:px-10 lg:py-16">
        <div className="rounded-2xl bg-slate-100 px-4 py-8 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-900 md:text-sm">
            Professional Interests
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Areas I enjoy building in
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg lg:text-2xl">
            My interests span the full software development lifecycle, with a
            particular focus on building reliable applications and practical
            digital systems.
          </p>
        </motion.div>
        {/* Interests */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900 hover:shadow-md md:px-5 md:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-purple-900 transition-transform group-hover:scale-125" />
              {interest}
            </motion.div>
          ))}
        </div>
        </div>
      </section>
      {/* Closing */}
      <section className="border-t border-slate-100 bg-slate-950">
        <div className="mx-auto max-w-5xl px-[13px] py-12 text-center md:px-[21px] md:py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 md:text-sm">
              Let&apos;s Build
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Turning ideas into working software.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-400 md:text-lg lg:text-2xl">
              I combine technical skills, problem-solving, and practical
              experience to create software that serves a purpose and delivers
              value.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 font-bold text-purple-300">
              Building with purpose
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}