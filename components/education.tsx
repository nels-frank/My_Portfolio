"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
  ArrowUpRight,
} from "lucide-react"

const education = [
  {
    number: "01",
    type: "Degree",
    title: "B.Sc. Statistics / Computer Science",
    institution: "University of Agriculture, Makurdi",
    period: "2013 – 2021",
    location: "Benue State, Nigeria",
    icon: GraduationCap,
    description:
      "Built a foundation in statistics, computer science, data analysis, and analytical problem-solving, combining computational knowledge with quantitative thinking.",
  },
  {
    number: "02",
    type: "Professional Diploma",
    title: "Diploma — Software Development",
    institution: "VS45 Technologies Limited",
    period: "July 2018 – July 2019",
    location: "Benue State, Nigeria",
    icon: Award,
    description:
      "Developed practical software development skills and gained hands-on exposure to programming, application development, and software engineering concepts.",
  },
  {
    number: "03",
    type: "Professional Training",
    title: "Full-Stack Web Development — Node with React",
    institution: "Udemy",
    period: "February 2025 – August 2025",
    location: "Online",
    icon: BookOpen,
    description:
      "Advanced my full-stack development capabilities through practical training focused on modern web technologies, Node.js, React, APIs, and application development.",
  },
  {
    number: "04",
    type: "Secondary Education",
    title: "SSCE — WAEC",
    institution: "Christ the King College, Adikpo",
    period: "2006 – 2011",
    location: "Benue State, Nigeria",
    icon: GraduationCap,
    description:
      "Completed secondary education and obtained the West African Senior School Certificate Examination qualification.",
  },
]
export default function Education() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="max-w-7xl bg-white px-[2px] pb-2 md:px-[21px] rounded-3xl lg:px-16">
        <div className="relative mx-auto max-w-7xl px-[13px] py-4 md:px-[21px] md:py-4">
          <div className="absolute -right-2 -top-80 h-150 w-200 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-60 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        
         <div className="relative mx-auto max-w-7xl px-6 py-4 md:px-6 md:py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900">
              <GraduationCap className="h-4 w-4" />
              EDUCATION
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
              Education & Learning
            </h1>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              A combination of academic education, professional training, and
              continuous learning that shaped my journey into software
              development.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Education Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-2 md:px-10 md:py-2">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
              Academic Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Learning that shaped my career
            </h2>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              From foundational education to specialized software development
              training, each stage has added a new layer to my technical
              perspective.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-purple-100 md:block" />
            <div className="space-y-10">
              {education.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="relative md:pl-20"
                  >
                    {/* Number */}
                    <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-2xl bg-purple-900 text-sm font-bold text-white shadow-lg shadow-purple-900/15 md:flex">
                      {item.number}
                    </div>
                    {/* Card */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 md:p-6">
                      {/* Top */}
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                        {/* Main information */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-900">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-purple-900">
                              {item.type}
                            </p>
                            <h3 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl lg:text-3xl">
                              {item.title}
                            </h3>
                            <p className="text-base font-bold text-slate-700 md:text-lg lg:text-2xl">
                            {item.institution}
                          </p>
                          </div>
                        </div>
                        {/* Date */}
                        <div className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-black md:mt-1 md:px-4 md:text-sm">
                          <CalendarDays className="h-4 w-4 text-purple-900" />
                          {item.period}
                        </div>
                      </div>
                      {/* Description */}
                      <div className="mt-4 rounded-2xl bg-slate-50 p-4 md:p-5">
                        <p className="max-w-3xl text-base text-justify font-bold leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                      {/* Location */}
                      <div className="mt-5 flex items-center gap-2 text-base font-bold text-slate-500 md:text-lg lg:text-2xl">
                        <MapPin className="h-5 w-5 shrink-0 text-purple-900 md:h-6 md:w-6" />
                        {item.location}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Closing */}
      <section className="mx-auto max-w-7xl px-[13px] py-12 md:px-[21px] md:py-4">
        <div className="mx-auto max-w-5xl px-[13px] py-12 text-center md:px-[21px] md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-1xl font-bold uppercase tracking-[0.2em] text-purple-900">
              Continuous Learning
            </p>
           <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Learning never stops.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-1xl font-bold leading-7 text-slate-600">
              My education provides the foundation, while continuous practice
              and real-world projects continue to shape me as a software
              developer.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-900">
              Always learning. Always building.
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}