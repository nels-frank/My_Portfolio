"use client"

import Image from "next/image"
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  CalendarDays,
  Layers3,
} from "lucide-react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    number: "01",
    title: "Modern School Management System",
    year: "2026",
    type: "Full-Stack Web Application",
    image: "/images/projects/AdminDashboard.JPG",
    description:
      "   A modern full-stack school management platform designed to support school administration and academic management through a centralized digital system.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    features: [
      "Student management",
      "School management",
      "User & role management",
      "Database-driven operations",
      "Authentication",
      "Responsive dashboard",
      "Backend APIs",
      "Production deployment",
    ],
    liveUrl: "https://school-dashboard-kappa-three.vercel.app/",
    githubUrl: "https://github.com/nels-frank/school-dashboard",
    apiUrl: "https://github.com/nels-frank/school-dashboard-api",
    featured: true,
  },
  {
    number: "02",
    title: "Emailing & Survey Platform",
    year: "2025–2026",
    type: "Full-Stack Web Platform",
    image: "/images/projects/Dashboard.JPG",
    description:
      "A full-stack platform designed for emailing and survey-related operations, combining authentication, email delivery, data management and payment functionality.",
    stack: [
      "React",
      "Next.js",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Google OAuth",
      "Mailgun",
      "Stripe",
    ],
    features: [
      "React / Next.js frontend",
      "Node.js / Express backend",
      "MongoDB / Mongoose",
      "Google OAuth",
      "Session authentication",
      "Mailgun email delivery",
      "Stripe Checkout",
      "Stripe webhooks",
      "Production deployment",
    ],
    liveUrl: "https://emailing-mz0f.onrender.com",
    githubUrl: "https://github.com/nels-frank/Emailing",
    featured: true,
  },
  {
    number: "03",
    title: "School Management System",
    year: "2022",
    type: "Java Enterprise Application",
    image: "/images/projects/SubjectComputationByClass.JPG",
    description:
      "     A full-stack school management application developed using Java EE technologies to support school administration and management processes.",
    stack: [
      "Java",
      "Java EE",
      "JSF",
      "MySQL",
      "GlassFish",
    ],
    features: [
      "School administration",
      "Student management",
      "Academic management",
      "Database operations",
      "Java EE architecture",
      "JSF interfaces",
    ],
    githubUrl:
      "https://github.com/nels-frank/school-management-system-java",
    featured: true,
  },
  {
    number: "04",
    title: "Sales Forecasting System",
    year: "2021",
    type: "Data Analysis Application",
    image: "/images/projects/Sales_Forecast.JPG",
    description:
      "A sales forecasting application developed to forecast sales of Dangote products using a linear regression model.",
    stack: [
      "PHP",
      "MySQL",
      "Linear Regression",
      "Data Analysis",
    ],
    features: [
      "Sales data management",
      "Inventory support",
      "Sales analysis",
      "Linear regression forecasting",
      "Monthly sales forecasting",
    ],
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  return (
    <main className="min-h-screen">
      {/* Page Introduction */}
      <section className="relative max-w-7xl overflow-hidden bg-white px-[13px] pb-2 md:px-[21px] lg:px-4">
        <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-10 lg:py-6">
          <div className="absolute -right-2 -top-50 h-200 w-200 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-60 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-2 py-4 md:px-2 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-8xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-900">
              <Code2 className="h-4 w-4" />
              Selected Work
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Featured{" "}
              <span className="text-purple-900">
                Projects
              </span>
            </h1>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
              A selection of software projects demonstrating my experience
              building modern web applications, business systems,
              integrations and data-driven solutions.
            </p>
            <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
            My approach is building software that solves real problems, with 
            every project representing a step in my development journey—from 
            enterprise Java applications and data analysis to modern full-stack 
            web platforms.
          </p>
          </motion.div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl rounded-3xl bg-slate-50 px-[13px] py-12 md:px-[21px] md:py-10 lg:px-10 lg:py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
            Featured Projects
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Building solutions from concept to deployment
          </h2>
        </div>
        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900 md:px-3"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Screenshot */}
                {/* Project Image + Title + Description */}
            <div>
            {/* Image */}
            <div className="relative min-h-[220px] overflow-hidden bg-slate-100 sm:min-h-[280px] lg:min-h-[300px]">
                {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard screenshot`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.02] md:p-4"
                />
                ) : (
                <ProjectImagePlaceholder title={project.title} />
                )}
            </div>
            {/* Title + Description directly under image */}
            <div className="px-4 pb-4 pt-4 md:px-6 md:pb-6">
                <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                {project.title}
                </h2>
                <p className="mt-2 text-center text-sm font-bold leading-7 text-slate-600 md:text-base">
                {project.description}
                </p>
            </div>
        </div>

        {/* Project Details */}
          <div className="relative flex flex-col p-4 md:p-6 lg:p-10">
            {/* Year */}
            <div className="mb-5 self-start rounded-full bg-purple-900 px-4 py-1 text-sm font-bold text-white shadow-lg lg:absolute lg:right-10 lg:top-6 lg:mb-0">
              {project.year}
              </div>
                  {/* Technology Stack */}
                  <div className="mt-2">
                    <div></div>
                    <div className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-900 md:text-2xl">
                      <Layers3 className="h-4 w-4 text-purple-900" />
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900 md:px-3"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mt-3">
                    <p className="text-lg font-bold text-slate-900 md:text-2xl">
                      Key Areas
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm font-bold leading-6 text-slate-600 md:text-base"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-900" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Links */}
                  <div className="mt-6 flex flex-col gap-2 pt-4 sm:flex-row sm:flex-wrap">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:shadow-lg sm:w-auto"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:shadow-lg sm:w-auto"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </a>
                    )}

                    {project.apiUrl && (
                      <a
                        href={project.apiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:shadow-lg sm:w-auto"
                      >
                        <Code2 className="h-4 w-4" />
                        Backend API
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Additional Projects */}
      <section className="mx-auto max-w-7xl rounded-3xl bg-slate-50 px-[13px] py-4 md:px-[21px] md:py-4 lg:px-10 lg:py-4">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
            Additional Project
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Undergraduate-B.Sc. Statistics/Computer Science
          </h2>
        </div>
        <div className="space-y-10">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Screenshot */}
                {/* Project Image + Title + Description */}
            <div>
            {/* Image */}
            <div className="relative min-h-[220px] overflow-hidden bg-slate-100 sm:min-h-[280px] lg:min-h-[300px]">
                {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard screenshot`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.02] md:p-4"
                />
                ) : (
                <ProjectImagePlaceholder title={project.title} />
                )}
            </div>
            {/* Title + Description directly under image */}
            <div className="px-4 pb-4 pt-4 md:px-6 md:pb-6">
                <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                {project.title}
                </h2>
                <p className="mt-2 text-center text-sm font-bold leading-7 text-slate-600 md:text-base">
                {project.description}
                </p>
            </div>
        </div>

        {/* Project Details */}
          <div className="relative flex flex-col p-4 md:p-6 lg:p-10">
            {/* Year */}
            <div className="mb-5 self-start rounded-full bg-purple-900 px-4 py-1 text-sm font-bold text-white shadow-lg lg:absolute lg:right-10 lg:top-6 lg:mb-0">
                {project.year}
              </div>
                  {/* Technology Stack */}
                  <div className="mt-2">
                    <div></div>
                    <div className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-900 md:text-2xl">
                      <Layers3 className="h-4 w-4 text-purple-900" />
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mt-3">
                    <p className="text-2xl font-bold text-slate-900">
                      Key Areas
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-1xl font-bold text-slate-600"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-900" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Links */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-purple-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-800 hover:shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </a>
                    )}

                    {project.apiUrl && (
                      <a
                        href={project.apiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900"
                      >
                        <Code2 className="h-4 w-4" />
                        Backend API
                      </a>
                    )}

                  </div>

                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}

/* Screenshot placeholder */
function ProjectImagePlaceholder({
  title,
}: {
  title: string
}) {
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center bg-gradient-to-br from-purple-100 via-slate-100 to-indigo-100 p-8">
      <div className="w-full max-w-md rounded-2xl border border-white/80 bg-white/80 p-8 text-center shadow-lg backdrop-blur">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-900 text-white">
          <MonitorIcon />
        </div>

        <h4 className="mt-4 text-lg font-bold text-slate-900">
          {title}
        </h4>

        <p className="mt-2 text-sm text-slate-500">
          Add project screenshot
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Place the image in /public/images/projects/
        </p>

      </div>
    </div>
  )
}

function MonitorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}