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


const words = ["CREATIVE", "CONFIDENT", "COMPETENT"];

const toolItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "Node.js", iconType: NodeIcon },
  { title: "Express", iconType: ExpressIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "PostgreSQL", iconType: PostgresIcon },
  { title: "HTML", iconType: HtmlIcon },
  { title: "CSS", iconType: CssIcon },
  { title: "Linux", iconType: LinuxIcon },
];

const rotatingWords = [
  "PRESENTING",
  "PITCHING",
  "PRODUCT THINKING",
  "PUBLIC SPEAKING",
]

export const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

useEffect(() => {
  setMounted(true);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;
  
  return (
    <section id="about" className="pb-24">
      <SectionHeader
        eyebrow="About Me"
        title="currently focusing on the upskilling qualities"
        description={
          <>
            <span className="
               block mt-2
               text-xl md:text-5xl lg:text-6xl
                tracking-wide
               bg-gradient-to-r text-white
               bg-clip-text
               drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]
               hover:drop-shadow-[0_0_18px_rgba(168,85,247,1)]
               transition-all duration-300
             ">
              AI WON'T REPLACE
            </span>
          </>
        }
      />

      
      <div className="flex justify-center items-center gap-6 mt-6">
  {words.map((word, index) => (
    <div key={word} className="flex items-center gap-6">

      <motion.span
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatDelay: 1,
          delay: index * 0.25,
        }}
        className="
          text-2xl md:text-3xl lg:text-4xl
          font-extrabold italic
          bg-gradient-to-r from-pink-400/60 via-purple-500/60 to-pink-500/60
          bg-clip-text text-transparent
          tracking-wider
          drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]
        "
      >
        {word}
      </motion.span>

      {index < words.length - 1 && (
        <span
          className="
            text-3xl md:text-4xl
            font-bold
            text-purple-400
            drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]
          "
        >
          •
        </span>
      )}
    </div>
  ))}
</div>
   

      <div className="container mt-12 grid gap-8 md:grid-cols-2">
        
        
        <Card className="gradient-card">
          <div className="flex items-center gap-3 text-pink-300">
            <StarIcon className="size-5" />
            <h3 className="text-2xl font-semibold">System Design</h3>
          </div>

          <p className="mt-12 text-white/80">
            Learning Docker, understanding CI/CD pipelines for infrastructure and scalable architecture fundamentals.
          </p>

          <Image
            src={dockerImage}
            alt="Docker"
            width={500}
            height={300}
            className="mt-6 rounded-2xl"
          />
          <p className="mt-12 text-xl text-purple-700/90 font-semibold">   &nbsp; &nbsp; &nbsp; Hosting & Deploying </p>
        </Card>

       
        <Card className="gradient-card">
          <div className="flex items-center gap-3 text-pink-300">
            <StarIcon className="size-5" />
            <h3 className="text-2xl font-semibold">Tech Stack</h3>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {toolItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-0.05
                rounded-xl px-4 py-4
                bg-gradient-to-br from-pink-500/20 to-purple-500/20
                hover:scale-105 transition-all"
              >
                <div className="text-pink-200 size-8">
                  <TechIcon component={item.iconType} />
                </div>
                <span className="text-xs font-semibold text-pink-100 text-center">
                  <br/>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </Card>


        <Card className="gradient-card md:col-span-2">
          <div className="flex items-center gap-3 text-pink-300">
            <StarIcon className="size-5" />
            <h3 className="text-2xl font-semibold">Beyond the Code
            </h3>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {rotatingWords.map((word, index) => (
              <span
                key={word}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                  index === currentWordIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-110"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {word}
              </span>
            ))}
            
           

            
          </div>

        </Card>
      </div>
    </section>
  );

};



