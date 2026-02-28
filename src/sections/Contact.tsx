import grainImage from "@/assets/images/grain.jpg";

const CONTACT_EMAIL = "shrutiphadwork@gmail.com";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <h1 className="
            text-2xl md:text-3xl lg:text-4xl
            font-extrabold italic
            tracking-wider
            text-transparent bg-clip-text
            bg-gradient-to-br from-pink-400/50 via-purple-500/85 to-pink-500/400 
            bg-[length:300%_300%]
            animate-gradientMove
            drop-shadow-[0_0_30px_rgba(236,72,153,0.9)]
            animate-glowPulse
            mb-8
            text-center
        "> Open To Suggestions!</h1>
      <div className="container">

        <div
          className="mx-auto max-w-2xl gradient-card relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <h3 className="text-center text-3xl font-semibold text-white/70">
            Let’s build something meaningful
          </h3>

<form
action={`https://formsubmit.co/${CONTACT_EMAIL}`}
method="POST"
className="mt-8 grid gap-4"
>
{/* Disable captcha */}
<input type="hidden" name="_captcha" value="false" />

{/* Redirect after submit */}
<input
  type="hidden"
  name="_next"
  value="https://yourdomain.com/thank-you"
/>

{/* Email subject */}
<input
  type="hidden"
  name="_subject"
  value="New Portfolio Contact Message"
/>



            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 bg-gradient-to-br from-pink-400/10 via-purple-500/35 to-pink-500/10 "
            />

            <button
              type="submit"
              className="rounded-xl  bg-gradient-to-br from-pink-400/40 via-purple-500/50 to-pink-500/40 
              px-9 py-4 font-semibold text-white/70 hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};