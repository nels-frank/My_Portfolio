"use client"

import { motion } from "framer-motion"
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  Database,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const experiences = [
  {
    number: "01",
    title: "ICT Director",
    company: "Royaute Academy",
    location: "Utako, Abuja",
    period: "2022 – 2025",
    icon: Headphones,
    summary:
      "Led ICT operations and technology support, helping maintain the digital systems used across academic and administrative activities.",
    responsibilities: [
      "Managed ICT operations and technology systems.",
      "Provided technical support to staff and students.",
      "Supported digital systems used within the school.",
      "Developed and maintained software solutions.",
      "Assisted with technology implementation and troubleshooting.",
      "Supported academic and administrative activities through technology.",
    ],
    skills: ["ICT Operations", "Technical Support", "Software Solutions", "System Administration"],
  },
  {
    number: "02",
    title: "Assistant Software Developer",
    company: "Central Soft Support Systems (CS3)",
    location: "Maitama, Abuja",
    period: "2020 – 2022",
    icon: Code2,
    summary:
      "Contributed to software development and business application projects, with a focus on application maintenance, debugging, and database-driven systems.",
    responsibilities: [
      "Assisted with software development.",
      "Participated in application maintenance and debugging.",
      "Worked with databases and software technologies.",
      "Contributed to business application development.",
    ],
    skills: ["Software Development", "Debugging", "Databases", "Business Applications"],
  },
  {
    number: "03",
    title: "Data Entry Clerk",
    company: "YIAGA Africa",
    location: "Abuja",
    period: "February 2023 – March 2023",
    icon: Database,
    summary:
      "Supported organizational data operations through accurate, structured data entry and consistent data management.",
    responsibilities: [
      "Performed structured data entry.",
      "Maintained data accuracy and consistency.",
      "Supported organizational data management.",
    ],
    skills: ["Data Entry", "Data Accuracy", "Data Management"],
  },
]

export default function Experiences() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Hero */}
      <section className="max-w-7xl rounded-3xl bg-white px-[13px] pb-2 md:px-[21px] lg:px-3">
       <div className="relative mx-auto max-w-7xl px-[13px] py-2 md:px-[21px] md:py-4 lg:px-6 lg:py-4">
          <div className="absolute -right-2 -top-50 h-200 w-30 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-60 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        
         <div className="relative mx-auto max-w-7xl px-1 py-4 md:px-1 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900">
              <BriefcaseBusiness className="h-4 w-4" />
              EXPERIENCE
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
              Professional Experience
            </h1>

            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              A journey through technology, software development, ICT
              operations, and data management — building experience by
              solving real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-[13px] py-2 md:px-[21px] md:py-4 lg:px-6 lg:py-4">
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
              Career Journey
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              Experience that shaped how I build
            </h2>

            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              Each role has contributed to my growth across technology,
              software development, systems support, and data-driven work.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">

            {/* Timeline line */}
            <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-purple-100 md:block" />
            <div className="space-y-10">
              {experiences.map((experience, index) => {
                const Icon = experience.icon
                return (
                  <motion.article
                    key={experience.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative md:pl-20"
                  >

                    {/* Timeline number */}
                    <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-2xl bg-purple-900 text-sm font-bold text-white shadow-lg shadow-purple-900/15 md:flex">
                      {experience.number}
                    </div>

                    {/* Experience card */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 md:p-6">
                      {/* Top */}
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-900">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-purple-900">
                              {experience.number}
                            </p>
                            <h3 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl lg:text-3xl">
                              {experience.title}
                            </h3>

                            <p className="mt-2 text-base font-bold text-slate-700 md:text-lg lg:text-2xl">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* Period + Location */}
                        <div className="flex shrink-0 flex-col gap-2 text-sm font-bold text-black md:text-base lg:items-end lg:text-1.5xl">
                          <div className="flex items-center gap-2 font-semibold">
                            <CalendarDays className="h-4 w-4 text-purple-900" />
                            {experience.period}
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-purple-900" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="mt-4 rounded-2xl bg-slate-50 p-4 md:p-5">
                        <p className="text-sm font-bold leading-7 text-slate-600 md:text-base">
                          {experience.summary}
                        </p>
                      </div>

                      {/* Main content */}
                      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">

                        {/* Responsibilities */}
                        <div>
                          <div className="mb-4 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-900" />

                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 md:text-base font-bold uppercase tracking-wider text-slate-900">
                              Key Responsibilities
                            </h4>
                          </div>

                          <div className="space-y-3">
                            {experience.responsibilities.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-600 md:text-base"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-900" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-900 md:text-base font-bold uppercase tracking-wider text-slate-900">
                            Skills & Focus
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-[13px] py-12 text-center md:px-[21px] md:py-6 lg:px-6 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-900 md:text-sm">
              Moving Forward
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Experience becomes valuable when it creates impact.
            </h2>

           <p className="mx-auto mt-3 max-w-2xl text-sm font-bold leading-7 text-slate-600 md:text-base">
              I continue to grow by combining my experience in ICT, software
              development, databases, and business systems to build practical
              technology solutions.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-900">
              Let&apos;s build something meaningful
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}