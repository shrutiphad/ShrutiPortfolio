"use client";
import grainImage from "@/assets/images/grain.jpg"; 
import { motion } from "framer-motion";
 
const CONTACT_EMAIL = "shrutiphadwork@gmail.com"; 
 
export const ContactSection = () => { 
  return ( 
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="
            text-2xl md:text-3xl lg:text-4xl
            font-extrabold italic 
            tracking-wider 
            text-transparent bg-clip-text 
            bg-gradient-to-br from-pink-400/50 via-purple-500/80 to-pink-500/50
            bg-[length:300%_300%] 
            animate-gradientMove 
            drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] 
            animate-glowPulse 
            mb-8 
            text-center 
            block mt-2
            hover:drop-shadow-[0_0_18px_rgba(168,85,247,1)]
            transition-all duration-300
        "
      >
        Open to meaningful collaborations
      </motion.h1>
      <div className="container"> 
 
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
          className="mx-auto max-w-2xl gradient-card relative overflow-hidden" 
        >
            <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{ backgroundImage: `url(${grainImage.src})` }}
    />
 
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-white/80">
          Let&apos;s build something meaningful together
          </h3> 
    
              <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      className="mt-8 grid gap-4"
    >
     
      <input type="hidden" name="_captcha" value="false" />

     
      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Message from Shruti's Website"
      />

      <input type="hidden" name="_replyto" />

      <input
        type="hidden"
        name="_next"
        value="https://shruti-portfolio-rho.vercel.app/"
      />

      <input type="text" name="_honey" style={{ display: "none" }} />

      <motion.input
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        name="name"
        required
        placeholder="Your full name"
        className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 bg-gradient-to-br from-pink-400/10 via-purple-500/35 to-pink-500/10"
      />

      <motion.input
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        name="email"
        type="email"
        required
        placeholder="Your email address"
        className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 bg-gradient-to-br from-pink-400/10 via-purple-500/35 to-pink-500/10"
      />

      <motion.textarea
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        name="message"
        required
        rows={5}
        placeholder="Tell me about your idea"
        className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 bg-gradient-to-br from-pink-400/10 via-purple-500/35 to-pink-500/10"
      />

      <motion.button
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
        whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(236,72,153,0.35)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        type="submit"
        className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-9 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 hover:from-pink-400 hover:to-purple-500 hover:scale-[1.02] transition-all duration-300"
      >
        Send Message
      </motion.button>
    </motion.form>
            </motion.div> 
          </div> 
        </section> 
      ); 
    };

