"use client";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-8 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.55 }}
        className="container text-center text-sm text-pink-200/80"
      >
        Crafted with love by Shruti Phad, 2026.
      </motion.div>
    </footer>
  );
};
