"use client";

import sleepcareImage     from "@/assets/images/sleepcare.jpeg";
import promptlyImage      from "@/assets/images/promptly.jpeg";
import stayescapeImage    from "@/assets/images/stayescape.jpeg";
import investoImage       from "@/assets/images/investo.jpeg";
import signInterpreterImage from "@/assets/images/sign.jpeg";
import Image              from "next/image";
import CheckCircleIcon    from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon   from "@/assets/icons/arrow-down.svg";
import grainImage         from "@/assets/images/grain.jpg";
import { motion }         from "framer-motion";
import { useState, useEffect } from "react";

/* ── project data ─────────────────────────────────────────────── */
const portfolioProjects = [
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
    accentFrom: "from-pink-500/30",
    accentTo:   "to-purple-600/20",
    glowColor:  "rgba(236,72,153,0.25)",
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
    link: "https://github.com/shrutiphad/SleepCare-IoT",
    image: promptlyImage,
    accentFrom: "from-purple-500/30",
    accentTo:   "to-fuchsia-600/20",
    glowColor:  "rgba(168,85,247,0.25)",
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
    accentFrom: "from-pink-400/30",
    accentTo:   "to-rose-600/20",
    glowColor:  "rgba(244,114,182,0.22)",
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
    accentFrom: "from-violet-500/30",
    accentTo:   "to-purple-600/20",
    glowColor:  "rgba(139,92,246,0.25)",
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
    accentFrom: "from-fuchsia-500/30",
    accentTo:   "to-pink-600/20",
    glowColor:  "rgba(217,70,239,0.25)",
  },
];

/* ── component ───────────────────────────────────────────────── */
export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="projects" className="pt-10 pb-18 lg:pt-16 lg:pb-24 relative overflow-hidden">

      {/* subtle section glow blob */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.14) 0%, rgba(168,85,247,0.1) 45%, transparent 75%)", filter: "blur(60px)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      <div className="container mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase font-semibold tracking-widest text-sm bg-gradient-to-r from-pink-300 to-purple-400 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-center mt-4 text-white"
          >
            Selected Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-base md:text-lg text-white/45 mt-4 max-w-sm mx-auto"
          >
            A curated set of projects across web development, AI, and real-time systems.
          </motion.p>
        </div>

        {/* ── Project cards ── */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, rotateY: i % 2 === 0 ? -220 : 220, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 1.1, type: "spring", stiffness: 72, damping: 16 }}
              whileHover={{
                rotateY: i % 2 === 0 ? 8 : -8,
                y: -10,
                scale: 1.02,
                transition: { duration: 0.35 },
              }}
              className="group relative rounded-3xl overflow-hidden"
              style={{
                perspective: 1200,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 60px ${project.glowColor}`,
              }}
            >
              {/* Gradient border via pseudo background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Glassmorphism card body */}
              <div className="relative bg-gradient-to-br from-gray-900/85 via-[#211030]/80 to-[#170d27]/80 backdrop-blur-xl m-px rounded-[calc(1.5rem-1px)]">

                {/* grain texture */}
                <div
                  className="absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                />

                <div className="relative z-10 p-8 md:p-10 lg:p-12">
                  <div className="lg:grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* ── Left: text content ── */}
                    <div className="flex flex-col">

                      {/* company + year badge */}
                      <div className="inline-flex items-center gap-2 self-start">
                        <span className="bg-gradient-to-r from-pink-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                          {project.company} &bull; {project.year}
                        </span>
                      </div>

                      {/* title */}
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mt-3 text-white leading-tight">
                        {project.title}
                      </h3>

                      {/* tech badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="
                              px-2.5 py-0.5 text-[11px] font-semibold rounded-full
                              border border-white/10 bg-white/5
                              text-white/60 backdrop-blur-sm
                              group-hover:border-pink-400/30 group-hover:text-white/80
                              transition-all duration-300
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <hr className="border-t border-white/5 mt-5" />

                      {/* result bullets */}
                      <ul className="flex flex-col gap-3 mt-5">
                        {project.results.map((result, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                            className="flex items-start gap-2.5 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon className="size-5 shrink-0 mt-0.5 text-pink-400/70" />
                            <span>{result.title}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(236,72,153,0.38)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="
                          mt-8 self-start inline-flex items-center justify-center gap-2
                          bg-gradient-to-r from-pink-500 to-purple-600
                          text-white font-semibold text-sm
                          px-7 h-12 rounded-xl
                          shadow-lg shadow-pink-500/20
                          hover:from-pink-400 hover:to-purple-500
                          transition-all duration-300
                        "
                      >
                        Explore Project
                        <ArrowUpRightIcon className="size-4 rotate-[-135deg]" />
                      </motion.a>
                    </div>

                    {/* ── Right: image ── */}
                    <div className="relative mt-10 lg:mt-0 min-h-[260px] md:min-h-[320px]">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.78, rotateX: -22 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.85, delay: 0.28, type: "spring", stiffness: 95 }}
                        whileHover={{ scale: 1.03 }}
                        className="relative"
                      >
                        {/* image glow */}
                        <div
                          className="absolute inset-0 rounded-xl blur-2xl scale-90 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ background: `radial-gradient(ellipse, ${project.glowColor} 0%, transparent 70%)` }}
                        />
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={380}
                          className="
                            relative z-10 w-full rounded-xl object-cover
                            border border-white/10
                            shadow-2xl
                            group-hover:border-white/20 transition-all duration-500
                            h-[240px] md:h-[320px] lg:h-[360px]
                          "
                        />
                      </motion.div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};