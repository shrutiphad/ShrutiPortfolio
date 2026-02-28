import grainImage from "@/assets/images/grain.jpg";

const CONTACT_EMAIL = "shrutiphadwork@gmail.com";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
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
            <input type="hidden" name="_captcha" value="false" />

            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 bg-gradient-to-br  from-pink-400/10 via-purple-500/35 to-pink-500/10  "
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2  
              bg-gradient-to-br from-pink-400/10 via-purple-500/35 to-pink-500/10  "
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