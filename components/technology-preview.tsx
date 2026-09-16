"use client";

import * as React from "react";
import {
  ArrowRight,
  ArrowUp,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
} from "lucide-react";
import { FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

const technologies = [
  {
    name: "JavaScript",
    icon: <Code2 className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Language",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Language",
  },
  {
    name: "Java",
    icon: <FaJava className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Language",
  },
  {
    name: "React",
    icon: <FaReact className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="h-6 w-6 md:h-7 md:w-7" />,
    category: "ORM",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-6 w-6 md:h-7 md:w-7" />,
    category: "Version Control",
  },
];

export default function TechnologyPreview() {
  return (
    <section
      id="technologies"
      className="w-full bg-slate-100 px-[13px] py-12 md:px-[21px] md:py-8 lg:px-0 lg:py-4"
    >
      <div className="container mx-auto max-w-6xl px-0 lg:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-base font-bold leading-7 text-purple-900 md:text-lg lg:text-2xl">
            A selection of technologies I use to build modern, scalable web
            applications and business systems.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="group rounded-2xl border bg-card p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg md:p-5"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/40 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white md:mb-4 md:h-14 md:w-14">
                {technology.icon}
              </div>

              <h3 className="text-base font-bold md:text-xl">
                {technology.name}
                </h3>

              <p className="mt-1 text-xs font-bold text-purple-900 md:text-sm">
                {technology.category}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center md:mt-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg md:px-6"
          >
            Explore My Projects
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
