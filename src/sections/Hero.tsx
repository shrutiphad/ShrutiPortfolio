"use client";

import memojiImage from '@/assets/images/shruticodes.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { motion } from 'framer-motion';

/* ─── animation variants ─── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay },
  },
});

export const HeroSection = () => {
  return (
    <div className="pt-28 pb-12 md:pt-40 md:pb-16 lg:pt-52 lg:pb-20 relative z-0 overflow-x-clip">

      {/* ── Background layer: grain + rings + orbits ── */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

        {/* grain texture */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* subtle radial glow */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(168,85,247,0.13) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)',
          }}
        />

        {/* rings */}
        <div className="size-[750px] hero-ring" />
        <div className="size-[950px] hero-ring" />
        <div className="size-[1150px] hero-ring" />
        <div className="size-[1350px] hero-ring" />
        <div className="size-[1550px] hero-ring" />

        {/* orbiting icons */}
        <HeroOrbit size={800} rotation={-72}>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
            className="drop-shadow-[0_0_14px_rgba(236,72,153,0.35)]"
          >
            <StarIcon className="size-28 text-pink-400/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]"
          >
            <StarIcon className="size-12 text-pink-300/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: 'linear' }}
            className="drop-shadow-[0_0_10px_rgba(168,85,247,0.45)]"
          >
            <StarIcon className="size-8 text-purple-300/70" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <motion.div
            animate={{ rotate: [0, 45, 0], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 3.4 }}
            className="drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          >
            <SparkleIcon className="size-8 text-purple-300/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <motion.div
            animate={{ rotate: [0, -35, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          >
            <SparkleIcon className="size-5 text-purple-300/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <motion.div
            animate={{ rotate: [0, 40, 0], scale: [1, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 3.8 }}
            className="drop-shadow-[0_0_12px_rgba(236,72,153,0.45)]"
          >
            <SparkleIcon className="size-10 text-pink-300/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <motion.div
            animate={{ rotate: [0, -38, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4.2 }}
            className="drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]"
          >
            <SparkleIcon className="size-10 text-purple-300/40" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={880} rotation={95}>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 11, ease: 'linear' }}
            className="drop-shadow-[0_0_14px_rgba(236,72,153,0.35)]"
          >
            <StarIcon className="size-28 text-pink-300/50" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={0}>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: 'linear' }}
            className="drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
          >
            <StarIcon className="size-3 text-pink-400/70" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={640} rotation={36}>
          <motion.div
            animate={{ rotate: [45, 95, 45], scale: [1, 1.14, 1] }}
            transition={{ repeat: Infinity, duration: 4.5 }}
            className="size-4 rotate-45 rounded-sm border border-fuchsia-300/70 bg-fuchsia-300/20 shadow-[0_0_12px_rgba(217,70,239,0.55)]"
          />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={12}>
          <motion.div
            animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 8.4, ease: 'linear' }}
            className="drop-shadow-[0_0_10px_rgba(217,70,239,0.45)]"
          >
            <SparkleIcon className="size-6 text-fuchsia-300/70" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={470} rotation={132}>
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.16, 1] }}
            transition={{ repeat: Infinity, duration: 7.2, ease: 'linear' }}
            className="drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <StarIcon className="size-6 text-pink-300/70" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={990} rotation={162}>
          <motion.div
            animate={{ rotate: [45, -45, 45], scale: [1, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="size-5 rotate-45 rounded-sm border border-pink-300/70 bg-pink-300/20 shadow-[0_0_12px_rgba(236,72,153,0.5)]"
          />
        </HeroOrbit>
        <HeroOrbit size={860} rotation={214}>
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 9.5, ease: 'linear' }}
            className="drop-shadow-[0_0_10px_rgba(168,85,247,0.45)]"
          >
            <SparkleIcon className="size-7 text-purple-300/70" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={1020} rotation={248}>
          <motion.div
            animate={{ rotate: [0, -360], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 10.5, ease: 'linear' }}
            className="drop-shadow-[0_0_12px_rgba(236,72,153,0.45)]"
          >
            <StarIcon className="size-8 text-fuchsia-300/65" />
          </motion.div>
        </HeroOrbit>
        <HeroOrbit size={690} rotation={286}>
          <motion.div
            animate={{ rotate: [45, 110, 45], scale: [1, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 5.2 }}
            className="size-4 rotate-45 rounded-sm border border-purple-200/75 bg-purple-300/30 shadow-[0_0_14px_rgba(168,85,247,0.55)]"
          />
        </HeroOrbit>
      </div>

      {/* ── Content ── */}
      <section id="home">
        <div className="container -mt-17 -mb-1">
          <div className="flex flex-col items-center -mt-20">

            {/* Avatar with glow ring */}
            <motion.div
              variants={fadeIn(0)}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* animated glow ring behind avatar */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(168,85,247,0.28), rgba(236,72,153,0.24), rgba(168,85,247,0))',
                  filter: 'blur(12px)',
                  transform: 'scale(1.08)',
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              />
              <Image
                src={memojiImage}
                className="size-[300px] rounded-full object-cover relative z-10"
                alt="Shruti — developer memoji"
              />
            </motion.div>

            {/* Status badge — glassmorphism */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="-mt-12 mb-1 animate-tilt origin-center"
            >
              <div
                className="
                  bg-gray-950/70 backdrop-blur-md border border-white/10
                  -mt-4 px-4 py-1.5 inline-flex items-center gap-3 rounded-xl
                  shadow-[0_0_20px_rgba(168,85,247,0.15)]
                "
              >
                {/* pulsing green dot */}
                <span className="relative flex size-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex size-3 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-white/80">
                  Building, learning, and shipping better every day.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Heading + subtext */}
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="
                font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-bold tracking-tight mt-6 leading-[1.12]
                bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-400
                text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(236,72,153,0.35)]
              "
            >
              Building websites and{' '}
              <span className="block mt-1">Exploring LLMs</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-5 text-white/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            >
              I am Shruti, an aspiring Software and AI/ML engineer focused on building
              thoughtful digital experiences and making complex technology easy to understand.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.65)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 mt-10"
          >
            {/* Ghost button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(168,85,247,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                inline-flex items-center justify-center gap-2
                border border-white/20 bg-white/5 backdrop-blur-sm
                px-7 h-12 rounded-xl font-semibold text-white/90
                hover:border-purple-400/50 hover:bg-white/10
                transition-colors duration-300 cursor-pointer
              "
            >
              <span>Explore My Work</span>
              <ArrowDown className="size-4" />
            </motion.a>

            {/* Solid button */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 28px rgba(236,72,153,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-pink-500 to-purple-600
                px-7 h-12 rounded-xl font-semibold text-white
                shadow-lg shadow-pink-500/20
                hover:from-pink-400 hover:to-purple-500
                transition-all duration-300 cursor-pointer
              "
            >
              <span>🤝</span>
              <span>Let&apos;s Collaborate</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shruti-phad-7901aa325/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(59,130,246,0.45)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                inline-flex items-center justify-center gap-2
                border border-blue-300/40 bg-blue-500/15 backdrop-blur-sm
                px-7 h-12 rounded-xl font-semibold text-blue-50
                hover:bg-blue-500/25 hover:border-cyan-300/70
                transition-all duration-300 cursor-pointer
              "
            >
              <span className="inline-flex items-center justify-center size-5 rounded-sm bg-blue-500/80 text-[11px] font-bold text-white">in</span>
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/shrutiphad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(168,85,247,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                inline-flex items-center justify-center gap-2
                border border-white/25 bg-white/8 backdrop-blur-sm
                px-7 h-12 rounded-xl font-semibold text-white/90
                hover:bg-white/15 hover:border-fuchsia-300/60
                transition-all duration-300 cursor-pointer
              "
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.33-1.76c-1.08-.74.08-.72.08-.72a2.52 2.52 0 0 1 1.84 1.23 2.56 2.56 0 0 0 3.5 1 2.57 2.57 0 0 1 .76-1.61c-2.66-.3-5.45-1.33-5.45-5.92a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.43 11.43 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.63 4.63 0 0 1 1.23 3.22c0 4.61-2.8 5.61-5.47 5.9a2.87 2.87 0 0 1 .81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
