"use client";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "shrutiphadwork@gmail.com";

const fieldVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
};

/* guaranteed dark purple-pink — no Tailwind JIT ambiguity */
const inputStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(147,51,234,0.28) 50%, rgba(236,72,153,0.10) 100%)",
  border: "1px solid rgba(236,72,153,0.18)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  color: "#fff",
  outline: "none",
  width: "100%",
  transition: "border-color 0.3s, background 0.3s",
};

const sharedInputClass = "text-white placeholder-white/40 w-full focus:outline-none transition-all duration-300";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">

      {/* ── background ── */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />

      {/* ── ambient glow blob ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(236,72,153,0.14) 0%, rgba(147,51,234,0.10) 50%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container">

        {/* ── heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="uppercase font-semibold tracking-[0.32em] text-[11px] md:text-sm bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(217,70,239,0.38)]">
            Get In Touch
          </p>
          <h2 className="
            mt-3
            text-3xl md:text-4xl lg:text-5xl
            font-extrabold italic tracking-wide
            text-transparent bg-clip-text
            bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400
            drop-shadow-[0_0_22px_rgba(236,72,153,0.55)]
            hover:drop-shadow-[0_0_32px_rgba(236,72,153,0.85)]
            transition-all duration-300
          ">
            Open to meaningful collaborations
          </h2>
        </motion.div>

        {/* ── card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
          className="mx-auto max-w-2xl relative overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(47,18,68,0.94) 0%, rgba(61,32,96,0.90) 50%, rgba(36,18,63,0.94) 100%)",
            boxShadow: "0 0 0 1px rgba(236,72,153,0.15), 0 0 50px rgba(236,72,153,0.18), 0 0 50px rgba(147,51,234,0.15), 0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {/* grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "320px 320px",
              opacity: 0.09,
            }}
          />
          {/* top-edge highlight */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent pointer-events-none" />

          {/* card body */}
          <div className="relative z-10 p-8 md:p-10">
            <h3 className="text-center text-xl md:text-2xl font-semibold text-white/80 mb-8">
              Let&apos;s build something meaningful together
            </h3>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              action={`https://formsubmit.co/${CONTACT_EMAIL}`}
              method="POST"
              className="grid gap-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Message from Shruti's Website" />
              <input type="hidden" name="_replyto" />
              <input type="hidden" name="_next" value="https://shruti-portfolio-rho.vercel.app/" />
              <input type="text"   name="_honey"  style={{ display: "none" }} />

              <motion.input
                variants={fieldVariants}
                name="name"
                required
                placeholder="Your full name"
                className={sharedInputClass}
                style={inputStyle}
              />

              <motion.input
                variants={fieldVariants}
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className={sharedInputClass}
                style={inputStyle}
              />

              <motion.textarea
                variants={fieldVariants}
                name="message"
                required
                rows={5}
                placeholder="Tell me about your idea"
                className={sharedInputClass}
                style={inputStyle}
              />

              <motion.button
                variants={fieldVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 32px rgba(236,72,153,0.50), 0 0 32px rgba(147,51,234,0.40)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 px-9 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};