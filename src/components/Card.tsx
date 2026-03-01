"use client";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "relative rounded-3xl overflow-hidden p-6",
        className
      )}
    >
      
      <Image
      src={grainImage}
      alt=""
      fill
      className="object-cover opacity-5 -z-20"
    />
      

      <div className="absolute inset-0 -z-10 rounded-3xl ring-8 ring-white/10 pointer-events-none" />

      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};