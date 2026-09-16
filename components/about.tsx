"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe2,
  Server,
  Layers3,
  ArrowDown,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";
import Image from "next/image";

const journey = [
  {
    title: "PHP / MySQL",
    description:
      "My early application development experience began with PHP and MySQL, building practical database-driven applications.",
    icon: Code2,
  },
  {
    title: "Java / Java EE / JSF / MySQL",
    description:
      "I progressed into Java and Java EE application development, working with JSF, MySQL and enterprise-style application architecture.",
    icon: Server,
  },
  {
    title: "JavaScript / React / Node.js",
    description:
      "I expanded into modern JavaScript development, building interactive frontend applications with React and backend systems with Node.js.",
    icon: Globe2,
  },
  {
    title: "TypeScript / Next.js",
    description:
      "I adopted TypeScript and Next.js to build more structured, scalable and production-ready full-stack web applications.",
    icon: Layers3,
  },
  {
    title: "Prisma / PostgreSQL / MongoDB",
    description:
      "My development stack expanded into modern database technologies including Prisma, PostgreSQL and MongoDB.",
    icon: Database,
  },
  {
    title: "Production Web Applications",
    description:
      "Today, I combine these technologies to develop reliable, functional and user-focused business applications.",
    icon: BriefcaseBusiness,
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
];

export default function About() {
  return (

// Main wrapper
<main className="min-h-screen bg-slate-50">
<section className="relative overflow-hidden rounded-2xl bg-slate-50 sm:rounded-3xl">
  <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-12 md:px-8 md:py-8">
      <div className="grid items-center gap-10 md:grid-cols-2">

        {/* Left - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-900">
            <Code2 className="h-4 w-4" />
            Full-Stack Software Developer
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            About Me
          </h1>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-purple-900 md:mx-0" />

          <p className="mx-auto mt-3 max-w-2xl text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            I build modern web applications and business systems that turn
            real-world problems into reliable, functional and user-friendly
            software solutions.
          </p>

          <p className="mt-3 text-sm font-medium leading-6 text-purple-900 sm:text-base">
            JavaScript • TypeScript • Java • React • Next.js • Node.js
          </p>
        </motion.div>

        {/* Right - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Purple decorative shape */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-purple-900 sm:-right-4 sm:-top-4" />

            {/* Picture container */}
           <div className="relative h-60 w-52 overflow-hidden rounded-3xl border-4 border-white bg-purple-100 shadow-xl sm:h-72 sm:w-64">
              <Image
                src="/images/Passport.jpeg"
                alt="Adzua Terhemen Frank"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>


      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      
      {/* =========================================================
          ABOUT CONTENT
      ========================================================= */}
<section className="rounded-3xl bg-slate-50">
  <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-2">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-purple-700">
                Who I Am
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Building software with purpose
              </h2>
            </div>

            <div className="space-y-6 text-base font-bold text-justify leading-6 text-slate-600 md:text-lg">
              <p>
                I am a Full-Stack Software Developer with a background in
                Statistics and Computer Science and practical experience
                developing software applications, web systems and technology
                solutions.
              </p>

              <p>
                My development journey began with PHP and MySQL and progressed
                into Java and Java EE application development before expanding
                into modern JavaScript and TypeScript technologies.
              </p>

              <p>
                Today, I build full-stack applications using technologies such
                as React, Next.js, Node.js, Express, PostgreSQL, Prisma and
                MongoDB. I also have experience integrating authentication
                systems, third-party APIs, payment platforms and email services
                into production applications.
              </p>

              <div className="relative mt-10 overflow-hidden rounded-2xl border border-purple-100 bg-purple-50 p-2 md:p-2">
                <div className="absolute left-0 top-0 h-full w-1 bg-purple-900" />

                <p className="text-lg font-semibold leading-8 text-slate-800 md:text-xl">
                  My work is driven by a simple goal:
                  <span className="text-purple-800">
                    {" "}
                    to turn real-world problems and business requirements into
                    reliable, functional and user-friendly software solutions.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          DEVELOPER JOURNEY
      ========================================================= */}
<section className="overflow-hidden bg-slate-50">
  <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-4 max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-purple-700">
              My Evolution
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Developer Journey
            </h2>

            <p className="mt-2 text-lg font-bold text-slate-600">
              From traditional application development to modern full-stack
              engineering.
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="relative mx-auto max-w-4xl">

            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-purple-200 md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-2 md:space-y-2">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: isEven ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className={`relative flex flex-col md:flex-row ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Timeline point */}
                    <div className="absolute left-0 top-6 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-purple-900 text-white shadow-lg md:flex md:left-1/2">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Card */}
                    <div className="w-full md:w-[44%]">
                      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-800 md:hidden">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                              Step {index + 1}
                            </span>

                            <h3 className="mt-1 text-lg font-bold text-slate-900">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-l font-bold leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          STACK
      ========================================================= */}
 
<section className="bg-white">
  <div className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 md:px-8 md:py-10 lg:px-10">
    <div className="grid gap-8 text-center md:grid-cols-2 md:items-center md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-purple-700 sm:text-sm">
          What I Work With
        </p>

        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          Modern Full-Stack Technologies
        </h2>

        <p className="mt-4 text-base font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8">
          I work across the frontend, backend and database layers, connecting
          modern technologies to create complete software solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid min-w-0 grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-3"
      >
        {technologies.map((technology) => (
          <div
            key={technology}
            className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 sm:px-4 sm:py-4"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-700" />

            <span className="min-w-0 break-words text-sm font-bold leading-5 text-slate-700 sm:text-base">
              {technology}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
 
<section className="rounded-3xl bg-purple-900">
  <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16 md:px-10 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              From ideas to working software.
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-lg leading-8 text-purple-100">
              I am passionate about building technology that solves practical
              problems and creates meaningful value for users and businesses.
            </p>

            <div className="mt-2 flex flex-col justify-center gap-2 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-purple-900 transition hover:bg-purple-50"
              >
                View My Projects
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Let's Connect
                <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}