"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import dockerImage from "@/assets/images/docker.png";
import Image from "next/image";
import CssIcon from "@/assets/icons/css3.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import NextIcon from "@/assets/icons/nextdotjs.svg";
import NodeIcon from "@/assets/icons/nodedotjs.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import PythonIcon from "@/assets/icons/python.svg";
import { TechIcon } from "@/components/TechIcon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

const words = ["CREATIVE", "CONFIDENT", "COMPETENT"];

const toolItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "Python",     iconType: PythonIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React",      iconType: ReactIcon },
  { title: "Next.js",    iconType: NextIcon },
  { title: "Node.js",    iconType: NodeIcon },
  { title: "Express",    iconType: ExpressIcon },
  { title: "MongoDB",    iconType: MongoIcon },
  { title: "PostgreSQL", iconType: PostgresIcon },
  { title: "HTML",       iconType: HtmlIcon },
  { title: "CSS",        iconType: CssIcon },
  { title: "Linux",      iconType: LinuxIcon },
];

const rotatingWords = [
  "PRESENTING",
  "PITCHING",
  "PRODUCT THINKING",
  "PUBLIC SPEAKING",
];

export const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="relative pb-64 overflow-hidden">
      {/* background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/10 via-pink-500/5 to-transparent pointer-events-none" />

      {/* ── section header ── */}
    
        <div className="text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase font-semibold tracking-[0.32em] text-[11px] md:text-sm bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(217,70,239,0.38)]"
          >
           About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-center mt-4 bg-gradient-to-r from-pink-100 via-fuchsia-200 to-purple-200 text-transparent bg-clip-text drop-shadow-[0_0_14px_rgba(236,72,153,0.28)]"
          >
            AI is my teammate, not my replacement.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-sm md:text-base text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Software Engineer by passion, self-taught by choice.
          </motion.p>
        </div>

      {/* ── CREATIVE • CONFIDENT • CONSISTENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center items-center gap-6 mt-6 md:mt-8"
      >
        {words.map((word, index) => (
          <div key={word} className="flex items-center gap-6">
            <motion.span
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 0.65,
                repeat: Infinity,
                repeatDelay: 1.2,
                delay: index * 0.22,
              }}
              className="
                text-xl md:text-3xl lg:text-4xl
                font-extrabold italic
                bg-gradient-to-r from-pink-400/65 via-purple-500/65 to-pink-500/65
                bg-clip-text text-transparent
                tracking-wider
                drop-shadow-[0_0_6px_rgba(236,72,153,0.55)]
              "
            >
              {word}
            </motion.span>

            {index < words.length - 1 && (
              <span className="text-2xl md:text-4xl font-bold text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]">
                •
              </span>
            )}
          </div>
        ))}
      </motion.div>

      {/* ── cards ── */}
      <div className="container mt-10 grid gap-8 md:grid-cols-2">

        {/* System Design */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
          style={{ perspective: 1000 }}
          className="h-full"
        >
          <Card className="gradient-card h-full flex flex-col">
            <div className="flex items-center gap-3 text-pink-300">
              <StarIcon className="size-5" />
              <h3 className="text-2xl font-semibold">System Design</h3>
            </div>
            <p className="mt-6 text-white/75">
              Learning Docker and CI/CD pipelines to strengthen deployment workflows and scalable architecture fundamentals.
            </p>
            <Image
              src={dockerImage}
              alt="Docker"
              width={500}
              height={300}
              className="mt-6 rounded-2xl"
            />
            <p className="mt-auto pt-6 text-base md:text-lg text-purple-200/90 font-semibold text-center">
              Hosting, Deploying and Systemn Design.
            </p>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90, delay: 0.05 }}
          style={{ perspective: 1000 }}
          className="h-full"
        >
          <Card className="gradient-card h-full flex flex-col">
            <div className="flex items-center gap-3 text-pink-300">
              <StarIcon className="size-5" />
              <h3 className="text-2xl font-semibold">Tech Stack</h3>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {toolItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-1 rounded-xl px-4 py-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 hover:scale-105 transition-all"
                >
                  <div className="text-pink-200 size-8">
                    <TechIcon component={item.iconType} />
                  </div>
                  <span className="text-xs font-semibold text-pink-100 text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 text-center text-sm md:text-base text-white/65">
              Always flexible to learn and adapt to new stacks with strong Fundamentals.
            </p>
          </Card>
        </motion.div>

        {/* Beyond the Code */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.85, type: "spring", stiffness: 85 }}
          className="md:col-span-2"
        >
          <Card className="gradient-card md:col-span-2">
            <div className="flex items-center gap-3 text-pink-300">
              <StarIcon className="size-5" />
              <h3 className="text-2xl font-semibold">Beyond the CODE.</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                    index === currentWordIndex
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-110 shadow-lg shadow-pink-500/25"
                      : "bg-white/[0.07] text-white/45 border border-white/[0.08]"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};