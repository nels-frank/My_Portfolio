"use client";

import { ArrowDown, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MasterCv } from "./master-cv";
import Image from "next/image";

export function WelcomeBanner() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Git",
    "GitHub",
    "APIs",
    "Web Applications",
    "Business Systems",
  ];

  return (
    <section className="relative overflow-hidden border-none bg-gradient-to-r from-purple-900 to-purple-900 shadow-lg md:mx-[21px] lg:mx-0">
    <div className="absolute inset-0">
          <Image
            src="/images/hero-background.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-950/65 to-purple-950/20" />
      <div className="absolute inset-0 bg-purple-950/10" />
      </div>
      {/* Rolling Technology Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.10]">
        {/* Row 1 */}
        <div className="absolute top-6 flex min-w-max animate-banner-left whitespace-nowrap">
          {[...technologies, ...technologies].map((technology, index) => (
            <span
              key={`top-${technology}-${index}`}
              className="mx-3 text-2xl font-extrabold tracking-wide text-white md:mx-5 md:text-3xl lg:text-4xl"
            >
              {technology}
              <span className="ml-6 text-white md:ml-10">•</span>
            </span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="absolute top-45 flex min-w-max animate-banner-right whitespace-nowrap">
          {[...technologies, ...technologies].map((technology, index) => (
            <span
              key={`middle-${technology}-${index}`}
                className="mx-3 text-2xl font-bold tracking-wide text-white md:mx-5 md:text-3xl lg:text-4xl"
             >
              {technology}
              <span className="ml-10 text-white">•</span>
            </span>
          ))}
        </div>
        {/* Row 3 */}
        <div className="absolute bottom-4 flex min-w-max animate-banner-left whitespace-nowrap">
          {[...technologies, ...technologies].map((technology, index) => (
            <span
              key={`bottom-${technology}-${index}`}
              className="mx-3 text-2xl font-extrabold tracking-wide text-white md:mx-5 md:text-3xl lg:text-4xl"
            >
              {technology}
              <span className="ml-10 text-amber-200">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Subtle overlay to keep content readable */}
      <div className="pointer-events-none absolute inset-0 bg-purple-950/20" />

      <CardContent className="relative z-10 px-2 py-6 md:px-6 md:py-8 lg:px-6 lg:py-8">
        <div className="flex flex-col gap-6 lg:items-center lg:justify-center">
          {/* Left: Profile / Welcome */}
         <div className="flex flex-col items-center text-center">
          <div className="mb-3 rounded-full bg-white p-2">
            <User className="h-6 w-6 text-blue-500 md:h-9 md:w-9 lg:h-12 lg:w-12" />
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl font-bold leading-8 text-white md:text-3xl lg:text-3xl">
              Welcome to my portfolio
            </h2>
            <br />
            <p className="mt-1 text-3xl font-extrabold leading-7 text-amber-200 md:text-5xl md:py-2 lg:text-5xl lg:py-1">
              Adzua Terhemen Frank
            </p>

            <p className="mt-1 max-w-2xl text-xl font-bold leading-7 text-amber-50 py-2 md:text-2xl md:leading-8 md:py-2 lg:text-2xl lg:leading-8 lg:py-2">
              <p>Full-Stack Software Developer</p> <p>| JavaScript, TypeScript &amp; Java |</p><p>
              Web Applications &amp; Business Systems</p>
            </p>
          </div>
        

          {/* Right: Action Buttons */}
         <div className="flex flex-col items-stretch justify-center gap-3 py-4 sm:flex-row sm:flex-wrap sm:items-center lg:justify-center">
           <MasterCv />
            <Button
              variant="outline"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-bold text-purple-900 shadow-md hover:bg-blue-50 md:text-base lg:text-base"
            >
              <a href="#dashboard-content">Explore my Projects</a>
              <a href="#dashboard-content" aria-label="Explore my Projects">
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-bold text-purple-900 shadow-md hover:bg-blue-50 md:text-base lg:text-base"
            >
              <a href="#developer-story">Developer Story</a>
              <a href="#developer-story" aria-label="Developer Story">
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        </div>
      </CardContent>

      {/* Banner Animation */}
      <style jsx>{`
        @keyframes banner-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes banner-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .animate-banner-left {
          animation: banner-left 45s linear infinite;
        }

        .animate-banner-right {
          animation: banner-right 55s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-banner-left,
          .animate-banner-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
