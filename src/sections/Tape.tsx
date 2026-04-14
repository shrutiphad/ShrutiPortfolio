"use client";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

const words = [
  "Interactive",
  "Responsive",
  "Accessible",
  "Secure",
  "Usable",
  "Scalable",
  "Reliable",
  "User-Centered",
  "Maintainable",
];

export const TapeSection = () =>
{
  
  return (
    <section className="py-16 overflow-x-clip relative">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 -rotate-3 shadow-[0_0_32px_rgba(168,85,247,0.28)]"
      >
        <div className="flex">
          <div className="flex gap-6 py-4 animate-tape-scroll">
            {[...words, ...words, ...words].map((word, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="flex items-center gap-4"
              >
                <span className="uppercase font-bold text-white text-sm">
                  {word}
                </span>
                <StarIcon className="size-5 text-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};