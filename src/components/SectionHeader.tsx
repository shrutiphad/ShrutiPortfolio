import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl px-4 py-2">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center"
      >
        <p className="text-center text-sm uppercase font-semibold tracking-[0.25em] bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="text-center font-sans text-2xl md:text-3xl mt-5 text-white"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-center font-sans text-2xl md:text-5xl lg:text-6xl mt-3 max-w-3xl mx-auto leading-tight bg-gradient-to-r from-pink-300/80 via-fuchsia-300/70 to-purple-400/80 text-transparent bg-clip-text"
      >
        {description}
      </motion.div>
    </div>
  );
};

