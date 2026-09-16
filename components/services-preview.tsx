"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Database,
  Globe,
  GraduationCap,
  Layers3,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "Modern web applications built across frontend, backend, databases, and deployment.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Systems",
    description:
      "Practical software solutions designed to improve business and organizational processes.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Reliable backend services, REST APIs, authentication, and database-driven applications.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Structured relational and NoSQL database solutions for applications and business systems.",
  },
  {
    icon: GraduationCap,
    title: "School Management Systems",
    description:
      "Technology solutions for student records, academic management, administration, and school operations.",
  },
  {
    icon: Layers3,
    title: "System Integration",
    description:
      "Connecting applications with payments, email services, authentication, and third-party APIs.",
  },
];

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="space-y-8 px-[13px] py-12 md:px-[21px] md:py-14 lg:px-0 lg:py-16"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-700 md:text-base lg:text-xl">
          What I Do
        </p>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
          Services & Solutions
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base font-bold leading-7 text-slate-600 md:text-lg lg:text-xl">
          I build practical software solutions that help individuals,
          businesses, and organizations solve real-world problems with
          technology.
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg md:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-900 transition duration-300 group-hover:bg-purple-900 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 md:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm font-bold leading-7 text-slate-600 md:text-base">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Full Services Link */}
      <div className="flex justify-center pt-2">
        <a
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-900 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-purple-800 md:px-6"
        >
          Explore My Services
          <ArrowRight className="h-5 w-4" />
        </a>
      </div>
    </section>
  );
}