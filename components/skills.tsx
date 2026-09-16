"use client"

import {
  Code2,
  Monitor,
  Server,
  Database,
  Layers3,
  ShieldCheck,
  Webhook,
  CreditCard,
  Mail,
  Cloud,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    description: "Modern interfaces, responsive experiences and interactive web applications.",
    icon: Monitor,
    featured: true,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Redux",
      "React Hook Form",
    ],
  },
  {
    title: "Backend",
    description: "Server-side development, application logic and business systems.",
    icon: Server,
    featured: true,
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Java EE",
      "JSF",
      "PHP",
    ],
  },
  {
    title: "Databases",
    description: "Structured and document-based data storage and management.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "ORM / ODM",
    description: "Data modeling and database interaction through modern abstractions.",
    icon: Layers3,
    skills: [
      "Prisma",
      "Mongoose",
    ],
  },
  {
    title: "Authentication",
    description: "Secure authentication and session-based access management.",
    icon: ShieldCheck,
    skills: [
      "Google OAuth",
      "Session-Based Authentication",
    ],
  },
  {
    title: "APIs & Integrations",
    description: "Connecting applications with internal and third-party services.",
    icon: Webhook,
    skills: [
      "REST APIs",
      "Google APIs",
      "Third-Party API Integration",
    ],
  },
  {
    title: "Payments",
    description: "Payment processing and transaction workflows for web applications.",
    icon: CreditCard,
    skills: [
      "Stripe API",
      "Stripe Checkout",
      "Stripe Webhooks",
    ],
  },
  {
    title: "Email",
    description: "Application and transactional email delivery services.",
    icon: Mail,
    skills: [
      "Mailgun",
      "SendGrid",
    ],
  },
  {
    title: "Deployment",
    description: "Hosting, deployment and production application environments.",
    icon: Cloud,
    skills: [
      "Vercel",
      "Render",
      "Railway",
      "GlassFish",
    ],
  },
  {
    title: "Development Tools",
    description: "Tools used to build, manage, version and maintain software projects.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "NetBeans",
      "npm",
    ],
  },
]
export default function Skills() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-300 rounded-full bg-purple-100 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-[13px] py-12 md:px-[21px] md:py-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-2 text-xs font-semibold text-purple-900 md:px-4 md:text-sm">
                <Code2 className="h-4 w-4" />
                Technical Expertise
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Skills &{" "}
                <span className="text-purple-900">
                  Technologies
                </span>
              </h1>

              <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
               <p className="mt-2 max-w-3xl text-base leading-7 text-justify md:text-lg md:leading-8 lg:text-2xl">
                A practical full-stack toolkit for designing, developing,
                integrating and deploying modern web applications and
                business systems.
              </p>
            </motion.div>
            {/* Capability card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-3xl bg-purple-900 p-4 text-white shadow-xl md:p-5 lg:p-6">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Code2 className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold md:text-2xl">
                  Full-Stack Development
                </h2>
                <p className="mt-3 text-sm font-bold leading-6 text-purple-100 md:text-base">
                  From frontend interfaces to backend services, databases,
                  authentication, integrations and deployment.
                </p>
               <div className="mt-5 grid grid-cols-2 gap-2 md:mt-6 md:gap-3">
                  {[
                    "Frontend",
                    "Backend",
                    "Databases",
                    "APIs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-white/10 px-2 py-2 text-xs font-medium md:px-3 md:text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-purple-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Content */}
      <section className="mx-auto max-w-7xl px-[13px] py-6 md:px-[21px] md:py-10 lg:px-10 lg:py-6">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
            My Technical Stack
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Technologies I work with
          </h2>
        </motion.div>
        {/* Categories */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl md:p-6 ${
                  category.featured
                    ? "md:col-span-1 xl:col-span-1"
                    : ""
                }`}
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-purple-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Category heading */}
                <div className="flex items-start justify-between gap-2 md:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-900 transition-all duration-300 group-hover:bg-purple-900 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 md:text-lg">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-900" />
                </div>
                {/* Description */}
                <p className="mt-5 min-h-0 text-sm font-bold leading-6 text-slate-500 md:min-h-[48px] md:text-base">
                  {category.description}
                </p>
                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900 md:px-3 md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </motion.article>
            )
          })}
        </div>
      </section>
      {/* Bottom Statement */}
      <section className="mx-auto max-w-7xl bg-white px-[13px] py-10 pb-0 md:px-[21px] md:pb-0 lg:px-10 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-purple-800 px-4 py-8 text-center font-bold text-white md:px-4 md:py-4 lg:px-12"
        >
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
              Building with purpose
            </p>
            <h2 className="mt-3 text-xl font-bold md:text-3xl">
              From ideas to working software
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-purple-100 md:text-base">
              I combine modern web technologies with practical software
              engineering principles to create applications that solve
              real-world problems.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {[
                "Web Applications",
                "Business Systems",
                "REST APIs",
                "Database Solutions",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}