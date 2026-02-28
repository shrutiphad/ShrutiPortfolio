import grainImage from "@/assets/images/grain.jpg";

const CONTACT_EMAIL = "shrutiphad.dev@gmail.com";

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

          <h3 className="text-center text-3xl font-semibold text-white">
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
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 
              px-6 py-3 font-semibold text-white hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};