"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Code2,
  Database,
  GraduationCap,
  Laptop,
  Rocket,
  Server,
  UserRound,
} from "lucide-react";

export default function DeveloperStory() {
  return (
   <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
  <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xl font-bold uppercase tracking-[0.2em] text-purple-700">
            Developer Story
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            My Developer Story
          </h2>

          <p className="mt-3 max-w-2xl text-xl font-bold leading-7 text-slate-600">
            From Curiosity to Building Real-World Software
          </p>
          </div>
          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm font-bold text-purple-900 shadow-sm transition hover:bg-purple-50 md:px-5"
          >
            Explore my Projects
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
         <br />
        {/* Main Story Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
          {/* Top Section */}
          <div className="p-4 md:p-6 lg:p-4">
            {/* Profile Image */}
            
            <div className="relative mb-6 flex justify-center lg:absolute lg:right-10 lg:top-6 lg:mb-0">
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:h-56 md:w-56 lg:h-80 lg:w-80">
              <Image
                src="/images/ProfileImage.webp"
                alt="Adzua Terhemen Frank"
                fill
                className="object-cover"
              />
            </div>
          </div>

            {/* Introduction */}
            <div className="max-w-2xl lg:pr-56">
              <h2 className="text-2xl text-sm text-justify font-bold leading-7 md:text-base md:leading-8 text-slate-900">
                From Curiosity to Building Real-World Software
              </h2>

              <p className="mt-5 text-base text-sm text-justify font-bold leading-7 md:text-base md:leading-8 leading-8 text-slate-600">
                My journey into software development has been a progression
                from learning how technology works to building systems that
                solve practical problems.
              </p>
            </div>

            {/* Story */}
            <div className="mt-10 space-y-6 text-slate-600 leading-8">

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                My academic background in{" "}
                <strong className="text-slate-900">
                  Statistics and Computer Science
                </strong>{" "}
                gave me a foundation in computational 
                <p></p> thinking,
                problem-solving and working with data. I later strengthened
                this foundation through a{" "}
                <strong className="text-slate-900">
                <p></p> Diploma in Software Development
                </strong>{" "}
                and continued practical training in full-stack web
                development.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                My early software development experience began with{" "}
                <strong className="text-slate-900">
                  PHP and MySQL
                </strong>
                , including an undergraduate Sales Forecasting System that
                used a linear regression model to forecast sales of Dangote
                products.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                I then moved into{" "}
                <strong className="text-slate-900">
                  Java and Java EE development
                </strong>
                , where I built a School Management System using Java EE,
                JSF, MySQL and GlassFish. This experience introduced me to
                structured enterprise application development and showed me
                how software could be designed around real organizational
                processes.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                As web technologies evolved, so did my development journey. I
                expanded into JavaScript, React and Node.js, and eventually
                into modern TypeScript and Next.js development. This
                transition allowed me to work across the entire application
                stack—from responsive user interfaces to backend APIs,
                databases, authentication and third-party integrations.
              </p>

              {/* Technology Highlight */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Code2 className="h-5 w-5 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    My Current Technology Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma",
                    "MongoDB",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-l font-bold text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                Today, I build modern full-stack applications using
                technologies such as TypeScript, JavaScript, React, Next.js,
                Node.js, Express, PostgreSQL, Prisma and MongoDB.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                My recent projects reflect this progression. I developed a
                modern{" "}
                <strong className="text-slate-900">
                  School Management System
                </strong>{" "}
                using Next.js, TypeScript, Node.js, Prisma and PostgreSQL,
                building on the experience gained from my earlier Java-based
                school management system.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                I also developed an{" "}
                <strong className="text-slate-900">
                  Emailing and Survey Platform
                </strong>{" "}
                integrating React, Next.js, Node.js, Express, MongoDB, Google
                OAuth, Mailgun and Stripe. Working on this project gave me
                practical experience with authentication, email services,
                payment processing, webhooks and production deployment.
              </p>

              <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                Alongside software development, my experience as an{" "}
                <strong className="text-slate-900">
                  ICT Director
                </strong>{" "}
                has exposed me to the practical side of technology within an
                organization—supporting users, managing technology operations,
                troubleshooting systems and helping people use technology
                effectively.
              </p>

              {/* Philosophy */}
              <div className="my-8 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Rocket className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      How I See Software
                    </h3>

                    <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8 text-slate-600 leading-7">
                      I don't see software simply as code. I see it as a tool
                      for solving problems, improving processes and creating
                      better ways for people and organizations to work.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Journey Section */}
          <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10">

            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-lg bg-blue-600 p-2">
                <Laptop className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  My Journey So Far
                </h2>

                <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8">
                  The evolution of my software development career
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="grid gap-4">

              {[
                {
                  icon: GraduationCap,
                  title: "Statistics & Computer Science",
                  description: "Academic foundation in computational thinking and data.",
                },
                {
                  icon: Code2,
                  title: "PHP & MySQL",
                  description: "Early development experience and undergraduate forecasting project.",
                },
                {
                  icon: Server,
                  title: "Java & Java EE",
                  description: "Enterprise application development with JSF, MySQL and GlassFish.",
                },
                {
                  icon: Code2,
                  title: "JavaScript & React",
                  description: "Transition into modern web application development.",
                },
                {
                  icon: Server,
                  title: "Node.js & Express",
                  description: "Backend APIs, authentication and server-side development.",
                },
                {
                  icon: Database,
                  title: "TypeScript, Next.js, PostgreSQL, Prisma & MongoDB",
                  description: "Modern full-stack application development.",
                },
                {
                  icon: Rocket,
                  title: "Production Full-Stack Applications",
                  description: "Building and deploying real-world software systems.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-xm font-bold text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    {index < 6 && (
                      <ArrowRight className="ml-auto mt-2 hidden h-4 w-4 text-slate-300 md:block" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Closing */}
          <div className="border-t border-slate-200 p-6 md:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <UserRound className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Where I Am Today
                </h2>

                <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8 text-slate-600">
                  Today, my focus is on continuing to grow as a{" "}
                  <strong className="text-slate-900">
                    Full-Stack Software Developer
                  </strong>{" "}
                  and building reliable, practical and user-focused web
                  applications and business systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}