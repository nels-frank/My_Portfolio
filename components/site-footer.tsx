"use client"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion} from "framer-motion";

export default function SiteFooter() {
  return (
    <footer>
      <div className="relative bg-gradient-to-br from-purple-900 to-purple-900 text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-[13px] py-12 md:px-[21px] md:py-8 lg:px-8 lg:py-24">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
         <h3 className="text-2xl font-bold tracking-tight text-amber-200 md:text-3xl lg:text-6xl">
          Get in Touch
        </h3>
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
            className="group rounded-xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4"
        >
            <FaGithub className="mx-auto mb-3 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9" />

            <h3 className="mb-1 text-lg font-bold text-white md:text-2xl">
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
            className="group rounded-xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4"
        >
            <FaLinkedin className="mx-auto mb-3 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9" />

            <h3 className="mb-1 text-lg font-bold text-white md:text-2xl">
            LinkedIn
            </h3>

            <p className="text-sm font-bold leading-6 text-amber-200 md:text-base">
            Connect with me
            </p>
        </a>

        {/* Email */}
        <a
            href="mailto:frankadzua@gmail.com"
            className="group rounded-xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4"
        >
            <FaEnvelope className="mx-auto mb-3 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9" />

            <h3 className="mb-1 text-lg font-bold text-white md:text-2xl">
            Email
            </h3>

            <p className="text-sm font-bold leading-6 text-amber-200 md:text-base">
            Send me a message
            </p>
        </a>

        {/* Phone */}
        <a
            href="tel:+2347066652626"
            className="group rounded-xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:p-4"
        >
            <FaPhone className="mx-auto mb-3 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9" />

            <h3 className="mb-1 text-lg font-bold text-white md:text-2xl">
              
            Phone
            </h3>

            <p className="text-xs font-bold leading-5 text-amber-200 md:text-base">
              +234 706 665 2626, +234 815 480 0458
            </p>
        </a>
        </motion.div>
       <div className="h-6 md:h-8" />
        <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-center"
        >
         <div className="text-sm font-bold leading-6 text-amber-50 md:text-base">
          <p>© {new Date().getFullYear()} Adzua Terhemen Frank. All rights reserved.</p>
          <p>Full-Stack Software Developer</p>
        </div>
        </motion.div>
        </div>
      </div>
    </div>
    </footer>
  );
}