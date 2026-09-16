"use client";

import * as React from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="w-full px-[13px] py-10 md:px-[21px] md:py-8 lg:px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 px-4 py-12 text-center text-white shadow-xl md:px-8 md:py-10 lg:px-12 lg:py-6">
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <MessageCircle className="h-7 w-7" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s Build Something Great
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-7 text-blue-100 md:text-lg md:leading-8 lg:text-xl">
              Have a project, business system, or web application in mind?
              I&apos;m available to discuss your ideas and turn them into
              practical, reliable software.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:frankadzua@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:px-6 md:text-base"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:px-6 md:text-base"
              >
                View My Work
              </a>
            </div>

            {/* Small Closing Text */}
            <p className="mt-8 text-sm font-bold leading-6 text-blue-100 md:text-base lg:text-xl">
              JavaScript • TypeScript • Java • React • Next.js • Node.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
