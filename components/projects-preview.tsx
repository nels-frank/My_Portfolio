"use client";

import * as React from "react";
import { ArrowDown, ArrowRight, ExternalLink} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Modern School Management System",
    description:
      "A modern full-stack school management platform designed to manage school operations, users, students, academic records and administrative workflows.",
    image: "/images/projects/AdminDashboard.JPG",
    imageAlt: "Modern School Management System Dashboard",
    year: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
    link: "https://school-dashboard-kappa-three.vercel.app/",
    linkText: "Go Live",
    featured: true,
  },
  {
    number: "02",
    title: "Emailing & Survey Platform",
    description:
      "A web platform for creating and managing email campaigns and surveys, with authentication, credits, payment processing and email delivery integrations.",
    image: "/images/projects/Dashboard.JPG",
    imageAlt: "Emailing and Survey Platform Dashboard",
    year: "2025–2026",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    link: "https://emailing-mz0f.onrender.com/",
    linkText: "Go Live",
    featured: true,
  },
  {
    number: "03",
    title: "Java EE School Management System",
    description:
      "An enterprise-style school management application built with Java EE, JSF and MySQL for managing students, staff, fees and academic results.",
    image: "/images/projects/SubjectComputationByClass.JPG",
    imageAlt: "Java EE School Management System",
    year: "2022",
    technologies: ["Java", "Java EE", "JSF", "MySQL", "GlassFish"],
    link: "https://github.com/nels-frank/school-management-system-java/",
    linkText: "Check on GitHub",
    featured: false,
  },
  {
    number: "04",
    title: "Linear Regression Sales Forecast",
    description:
      "A data-driven sales forecasting system developed with PHP and MySQL to analyze sales information and forecast future monthly sales.",
    image: "/images/projects/Sales_Forecast.JPG",
    imageAlt: "Linear Regression Sales Forecast System",
    year: "Undergraduate-2021",
    technologies: ["PHP", "MySQL", "Linear Regression"],
    link: null,
    linkText: "",
    featured: false,
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="space-y-8 px-[13px] md:px-[21px] lg:px-0">
      {/* Section Heading */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700 md:text-base lg:text-xl">
            Selected Work
          </p>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            Projects I&apos;ve Built
          </h2>

          <p className="mt-3 max-w-2xl text-base font-bold leading-7 text-slate-600 md:text-lg lg:text-xl">
            A selection of software projects that reflect my journey from
            enterprise Java applications and data analysis to modern
            full-stack web platforms.
          </p>
        </div>

        <a
          href="#developer-story"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-purple-200 bg-white px-5 py-3 text-sm font-bold text-purple-900 shadow-sm transition hover:bg-purple-50"
        >
          View Developer Story
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      {/* Featured Projects */}
     <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden bg-slate-100 sm:h-[260px] md:h-[300px]">
                <a
                  href={project.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>

                <div className="absolute left-1 top-2 rounded-full bg-purple-900 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {project.number}
                </div>

                <div className="absolute right-1 top-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg backdrop-blur">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm font-bold leading-7 text-justify text-slate-600 md:text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-900 md:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-purple-800"
                  >
                    {project.linkText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
      </div>

      {/* Supporting Projects */}
      <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
        {projects
          .filter((project) => !project.featured)
          .map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden bg-slate-100 sm:h-[260px] md:h-[320px] lg:h-[360px]">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}

                <div className="absolute left-1 top-2 rounded-full bg-purple-900 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {project.number}
                </div>

                <div className="absolute right-2 top-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg backdrop-blur">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-bold leading-7 text-justify text-slate-600 md:text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-900 md:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-5 py-2.5 text-sm font-bold text-purple-900 transition hover:bg-purple-100"
                  >
                    <FaGithub className="h-4 w-4" />
                    {project.linkText}
                  </a>
                )}
              </div>
            </article>
          ))}
      </div>

      {/* Bottom message */}
      <div className="rounded-2xl border border-purple-100 bg-purple-50 px-4 py-6 text-center md:px-6 md:py-8">
        <p className="text-lg font-bold leading-7 text-purple-950 md:text-xl lg:text-2xl">
          From data analysis to enterprise Java applications and modern
          full-stack platforms.
        </p>

        <p className="mx-auto mt-2 max-w-2xl text-sm font-bold leading-6 text-purple-800 md:text-base lg:text-xl">
          Each project represents a step in my development journey and a
          practical approach to solving real-world problems with software.
        </p>
      </div>
    </section>
  );
}