"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  ArrowUpRight,
  MessageSquare,
  Send,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const contactDetails = [
  {
    label: "Phone",
    value: "+2347066652626",
    secondValue: "+2348154800458",
    thirdValue: "+2348127792748",
    href: "tel:+2347066652626",
    icon: Phone,
  },
  {
    label: "Email",
    value: "frankadzua@gmail.com",
    href: "mailto:frankadzua@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adzua-frank-523302324",
    href: "https://www.linkedin.com/in/adzua-frank-523302324/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/nels-frank",
    href: "https://github.com/nels-frank",
    icon: FaGithub,
  },
]

    export default function Contact() {
      return (
    <main className="min-h-screen bg-white text-slate-900">
    {/* Hero */}
    <section className="max-w-7xl rounded-3xl bg-white px-[13px] pb-2 md:px-[21px] lg:px-16">
      <div className="mx-auto max-w-5xl px-8 sm:px-6 sm:py-12 md:px-8 md:py-4">
          <div className="absolute -right-2 -top-100 h-200 w-200 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute -bottom-40 -left-60 h-40 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        
         <div className="relative mx-auto max-w-7xl px-0 py-10 md:px-0 md:py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900">
              <MessageSquare className="h-4 w-4" />
              CONTACT
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
              Let&apos;s Build Something Useful
            </h1>
            <br />

            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 md:text-2xl">
              Have a software project, business system or technology challenge
              in mind? Let&apos;s connect and discuss how technology can turn
              the idea into a practical solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-[13px] py-2 md:px-[21px] md:py-6 lg:px-16 lg:py-4 bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-900">
              Get In Touch
            </p>
            </div>

           <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
              Let&apos;s start a conversation
            </h1>

            <div className="mt-2 h-1.5 w-20 rounded-full bg-purple-900" />
            <p className="mt-2 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 md:text-2xl">
              Whether you have a project in mind, need help with a business
              system, or simply want to discuss a technology idea, I&apos;d be
              glad to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">
              {contactDetails.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.label === "LinkedIn" || contact.label === "GitHub"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.label === "LinkedIn" || contact.label === "GitHub"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/5 sm:items-center sm:gap-4 sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-900 transition-colors group-hover:bg-purple-900 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xm font-bold uppercase tracking-wider text-black">
                        {contact.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-bold text-purple-900 sm:text-base">
                        {contact.value}
                      </p>

                      {contact.secondValue && (
                        <p className="mt-1 break-all text-l font-bold text-purple-900">
                          {contact.secondValue}
                        </p>
                      )}

                      {contact.thirdValue && (
                        <p className="mt-1 break-all text-l font-bold text-purple-900">
                          {contact.thirdValue}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-900" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6 md:p-9"
          >
            <div className="mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-900 text-white">
                <Send className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                Send a message
              </h2>
              <p className="mt-2 text-xl leading-6 text-purple-900">
                Tell me a little about what you&apos;re looking to build or
                discuss.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-l font-bold text-slate-800"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border-3 border-grey-500 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-l font-bold text-slate-800"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border-3 border-grey-500 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-l font-bold text-slate-800"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-md border-3 border-grey-500 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-l font-bold text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full resize-none rounded-xl border-3 border-grey-500 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-purple-900 px-5 py-3.5 text-l font-bold text-white transition-all hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-900/20"
              >
                <Send className="h-4 w-4" />
                Send Message
                <ArrowUpRight className="h-4 w-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-100 bg-slate-950">
        <div className="mx-auto max-w-5xl px-[13px] py-12 text-center md:px-[21px] md:py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
              Open To Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Have an idea? Let&apos;s make it useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
              I&apos;m interested in meaningful software projects, business
              systems, web applications, and opportunities to build technology
              that solves real problems.
            </p>

            <a
              href="mailto:frankadzua@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition-all hover:bg-purple-50"
            >
              <Mail className="h-4 w-4" />
              Email Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  )
}