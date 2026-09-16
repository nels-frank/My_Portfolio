"use client";
import Image from "next/image";
import { motion} from "framer-motion";
import { ArrowRight, Section} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  return (
  <section className="relative overflow-hidden border-none bg-gradient-to-r from-purple-900 to-purple-900 shadow-lg md:mx-[21px] lg:mx-0">
  <div className="relative overflow-hidden bg-purple-950 text-white">
  {/* Hero Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero-background.webp"
      alt=""
      fill
      priority
      className="object-cover object-center"
    />
    {/* Purple cinematic overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-950/65 to-purple-950/20" />
    {/* Overall darkening */}
    <div className="absolute inset-0 bg-purple-950/10" />

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-950 to-transparent" />
  </div>

      {/* Existing Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-[13px] py-6 md:px-[21px] md:py-6 lg:px-8 lg:py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="mb-3 text-xl font-extrabold leading-8 text-amber-200 md:text-3xl md:leading-10 lg:text-4xl">
            Building modern web applications
            <br />
            <span className="text-green-300">And business systems that solve 
            real-world problems.</span>
          </h1>
          
          <div className="mb-2 py-4 text-base font-bold leading-7 tracking-tight text-white md:py-2 md:text-lg md:leading-8 lg:text-2xl">
            <p>Full-Stack Software Developer experienced in building</p>
            <p>modern web applications and business systems across frontend,</p>
            <p>backend, databases, authentication, APIs, payment integrations and deployment.</p>
          </div>

         <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-8 md:gap-4">
            <a
              href="projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-200 px-5 py-3 text-sm font-bold text-purple-950 shadow-lg transition hover:bg-amber-100 md:px-6 md:text-base">
              Explore My Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#developer-story"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 md:px-6 md:text-base">
              My Developer Story
            </a>
          </div>
        </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2 md:grid-cols-4 md:gap-4"
        >
        {/* GitHub */}
        <a
            href="https://github.com/nels-frank"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-4 shadow-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
        >
            <FaGithub className="mx-auto mb-3 h-9 w-9 font-bold text-white transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-1 text-2xl font-bold text-white">
            GitHub
            </h3>

            <p className="text-sm font-bold leading-6 text-amber-200 md:text-base">
            View my projects
            </p>
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/adzua-frank-523302324/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4">
            <FaLinkedin className="mx-auto mb-3 h-9 w-9 font-bold text-white transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-1 text-2xl font-bold text-white">
            LinkedIn
            </h3>

            <p className="text-sm font-bold leading-6 text-amber-200 md:text-base">
            Connect with me
            </p>
        </a>

        {/* Email */}
        <a
            href="mailto:frankadzua@gmail.com"
            className="group rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4">
            <FaEnvelope className="mx-auto mb-3 h-9 w-9 font-bold text-white transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-1 text-2xl font-bold text-white">
            Email
            </h3>

           <p className="text-sm font-bold leading-6 text-amber-200 md:text-base">
            Send me a message
            </p>
        </a>

        {/* Phone */}
        <a
            href="tel:+2347066652626"
            className="group rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4">
            <FaPhone className="mx-auto mb-3 h-9 w-9 font-bold text-white transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-1 text-2xl font-bold text-white">
            Phone
            </h3>

            <p className="text-xs font-bold leading-5 text-amber-200 md:text-base">
            +234 706 665 2626, +234 815 480 0458
          </p>
        </a>
        </motion.div>

      </div>
    </div>
    </section>
  );
}
