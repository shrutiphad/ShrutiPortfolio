"use client";
import uniplacementImage    from "@/assets/images/uni.jpeg";
import sleepcareImage       from "@/assets/images/sleepcare.jpeg";
import promptlyImage        from "@/assets/images/promptly.jpeg";
import stayescapeImage      from "@/assets/images/stayescape.jpeg";
import investoImage         from "@/assets/images/investo.jpeg";
import signInterpreterImage from "@/assets/images/sign.jpeg";
import Image                from "next/image";
import CheckCircleIcon      from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon     from "@/assets/icons/arrow-down.svg";
import grainImage           from "@/assets/images/grain.jpg";
import { motion }           from "framer-motion";
import { useState, useEffect } from "react";

/* ── button gradient colours — single source of truth ─────────── */
const BTN_PINK   = "rgba(236,72,153,";   // pink-500
const BTN_PURPLE = "rgba(147,51,234,";   // purple-600

/* ── project data ─────────────────────────────────────────────── */
const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2026",
    title: "Uniplacement",
    tech: ["Next.JS", "LLMs", "RAG"],
    results: [
      { title: "Engineered an AI-powered SaaS platform with role-based Admin/Student workflows, enabling automated eligibility filtering." },
      { title: "Application tracking and resume customization via skill–JD matching algorithms." },
      { title: "Built an NLP-driven Resume Intelligence engine with RAG-based recommendations." },
    ],
    link: "https://github.com/shrutiphad/Uniplacement-AI",
    image: uniplacementImage,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "SleepCare",
    tech: ["ESP32", "WebSocket", "MERN", "IoT", "ECG/EEG"],
    results: [
      { title: "Integrated ESP32 with SpO2, BPM, respiration, and presence sensors." },
      { title: "Streamed real-time vitals using WebSocket pipelines." },
      { title: "Visualized ECG/EEG waveforms on a MERN dashboard." },
    ],
    link: "https://github.com/shrutiphad/SleepCare-IoT",
    image: sleepcareImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Promptly",
    tech: ["React", "Express", "LLM APIs", "Auth", "Node.js"],
    results: [
      { title: "Built AI chatbot with authentication and persistent chat history." },
      { title: "Integrated LLM APIs with React and Express backend." },
      { title: "Optimized state and request pipelines for low latency." },
    ],
    link: "https://github.com/shrutiphad/Promptly",
    image: promptlyImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "StayEscape",
    tech: ["MongoDB", "REST APIs", "Cloudinary", "Node.js", "Auth"],
    results: [
      { title: "Developed accommodation platform with role-based authentication and authorization." },
      { title: "Enabled image uploads via Cloudinary with owner-protected reviews." },
      { title: "Built REST APIs with MongoDB models for listings, users, and reviews." },
    ],
    link: "https://github.com/shrutiphad/StayEscape",
    image: stayescapeImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Investo-Dashboard",
    tech: ["React", "Modular Architecture", "State Management", "UI/UX"],
    results: [
      { title: "Built React UI using modular component architecture." },
      { title: "Designed scalable layouts and reusable components." },
      { title: "Improved UX with clean state-driven design." },
    ],
    link: "https://github.com/shrutiphad/Investo-DashBoard",
    image: investoImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Real-Time-SignVision-AI",
    tech: ["MediaPipe", "CNN", "Python", "TTS", "Computer Vision"],
    results: [
      { title: "Implemented real-time hand tracking with MediaPipe for gesture extraction." },
      { title: "Trained CNN models to classify ASL alphabets from live webcam input." },
      { title: "Integrated text-to-speech for converting predictions into audio output." },
    ],
    link: "https://github.com/shrutiphad/Real-Time-SignVision-AI",
    image: signInterpreterImage,
  },
];

/* ── component ───────────────────────────────────────────────── */
export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="projects" className="pt-10 pb-18 lg:pt-16 lg:pb-24 relative overflow-hidden">

      {/* ── ambient section glow ── */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{
          background: `radial-gradient(ellipse, ${BTN_PINK}0.15) 0%, ${BTN_PURPLE}0.10) 50%, transparent 75%)`,
          filter: "blur(80px)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/[0.07] via-purple-600/[0.06] to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "980px 980px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8">

        {/* ── section header ── */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase font-semibold tracking-[0.32em] text-[11px] md:text-sm bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(217,70,239,0.38)]"
          >
            Featured Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-center mt-4 bg-gradient-to-r from-pink-100 via-fuchsia-200 to-purple-200 text-transparent bg-clip-text drop-shadow-[0_0_14px_rgba(236,72,153,0.28)]"
          >
            Selected Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-sm md:text-base text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            A curated set of projects across web development, AI, and real-time systems.
          </motion.p>
        </div>

        {/* ── project cards ── */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {portfolioProjects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 48, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative rounded-3xl"
                style={{
                  /* resting shadow: soft pink-purple matching the button */
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.09),
                    0 0 40px ${BTN_PINK}0.22),
                    0 0 40px ${BTN_PURPLE}0.16),
                    0 2px 12px rgba(0,0,0,0.5)
                  `,
                }}
              >
                {/* ── hover glow — button gradient sweeping in from text side ── */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: isEven
                      ? `radial-gradient(ellipse at 20% 50%, ${BTN_PINK}0.20) 0%, ${BTN_PURPLE}0.13) 45%, transparent 70%)`
                      : `radial-gradient(ellipse at 80% 50%, ${BTN_PINK}0.20) 0%, ${BTN_PURPLE}0.13) 45%, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />

                {/* ── glass card body — near-black, zero warm tint ── */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#13091f]/95 via-[#0e0618]/95 to-[#110820]/95 backdrop-blur-xl border border-white/[0.07] rounded-3xl group-hover:border-pink-500/25 transition-colors duration-500">

                  {/* grain */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url(${grainImage.src})`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "400px 400px",
                    }}
                  />

                  {/* top-edge highlight */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                  <div className="relative z-10 p-7 md:p-10 lg:p-12">
                    <div
                      className={`flex flex-col gap-10 xl:gap-16 items-center ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >

                      {/* ── text content ── */}
                      <div className="flex flex-col flex-1 min-w-0">

                        {/* index + meta */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-[10px] text-white/20 select-none tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-8 bg-white/10 shrink-0" />
                          <span className="bg-gradient-to-r from-pink-300 to-purple-400 font-bold uppercase tracking-widest text-[10px] text-transparent bg-clip-text">
                            {project.company}&nbsp;&bull;&nbsp;{project.year}
                          </span>
                        </div>

                        {/* title */}
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                          {project.title}
                        </h3>

                        {/* tech badges */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 text-[10px] font-semibold rounded-full border border-white/[0.09] bg-white/[0.04] text-white/50 backdrop-blur-sm group-hover:border-pink-500/30 group-hover:text-white/70 transition-all duration-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* fade divider */}
                        <div className="mt-5 h-px bg-gradient-to-r from-white/0 via-white/[0.08] to-white/0" />

                        {/* result bullets */}
                        <ul className="flex flex-col gap-3 mt-5">
                          {project.results.map((result, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.12 + idx * 0.09, duration: 0.42 }}
                              className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed"
                            >
                              <CheckCircleIcon className="size-4 shrink-0 mt-0.5 text-pink-400/65" />
                              <span>{result.title}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA — the single source of the pink→purple gradient */}
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.04,
                            boxShadow: `0 0 28px ${BTN_PINK}0.45), 0 0 28px ${BTN_PURPLE}0.35)`,
                          }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 320, damping: 22 }}
                          className="mt-8 self-start inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold text-sm px-6 h-11 rounded-xl shadow-lg shadow-pink-500/20 transition-all duration-300"
                        >
                          Explore Project
                          <ArrowUpRightIcon className="size-4 rotate-[-135deg]" />
                        </motion.a>
                      </div>

                      {/* ── image panel ── */}
                      <div className="relative w-full lg:w-[46%] shrink-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.96 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="relative"
                        >
                          {/* image glow — button gradient behind the frame */}
                          <div
                            className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-2xl pointer-events-none"
                            style={{
                              background: `linear-gradient(135deg, ${BTN_PINK}0.75) 0%, ${BTN_PURPLE}0.75) 100%)`,
                            }}
                          />

                          {/* image frame */}
                          <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] group-hover:border-pink-500/25 transition-colors duration-500 shadow-2xl">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={1200}
                              height={750}
                              className="w-full object-cover object-top aspect-video transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                            {/* bottom vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </motion.div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};