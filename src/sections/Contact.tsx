const CONTACT_EMAIL = "shrutiphad.dev@gmail.com";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl rounded-3xl border border-pink-300/30 bg-gradient-to-br from-pink-500/20 via-pink-400/10 to-purple-500/20 p-8 md:p-10">
          <p className="text-center uppercase tracking-[0.2em] text-pink-200">Contact Me</p>
          <h3 className="mt-3 text-center text-3xl font-semibold">Let&apos;s build something meaningful</h3>
          <p className="mt-3 text-center text-white/70">Send your message and it will be delivered to my inbox.</p>

          <form
            action={`https://formsubmit.co/${CONTACT_EMAIL}`}
            method="POST"
            className="mt-8 grid gap-4"
          >
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-pink-200/20 bg-black/40 px-4 py-3 outline-none transition focus:border-pink-300"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl border border-pink-200/20 bg-black/40 px-4 py-3 outline-none transition focus:border-pink-300"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="rounded-xl border border-pink-200/20 bg-black/40 px-4 py-3 outline-none transition focus:border-pink-300"
            />
            <button
              type="submit"
              className="mt-2 rounded-xl bg-pink-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-pink-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
