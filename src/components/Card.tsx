"use client";

import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={twMerge(
        "relative rounded-3xl overflow-hidden p-6 bg-gray-950/75 backdrop-blur-lg border border-white/10 shadow-[0_0_36px_rgba(168,85,247,0.22)]",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        src={grainImage}
        alt=""
        fill
        className="object-cover opacity-5 -z-20"
      />

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent" />

      <div className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};