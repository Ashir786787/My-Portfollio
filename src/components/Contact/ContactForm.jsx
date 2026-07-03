function ContactForm() {
  return (
    <form className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500"
      />
      <textarea
        rows="6"
        placeholder="Write your message..."
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 resize-none"
      />
      <button className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
