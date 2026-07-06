import { useState } from "react";
import { submitContact } from "../../api/contactApi.js";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", text: "Please fill all required fields." });
      return;
    }
    setLoading(true);
    try {
      const res = await submitContact(form);
      setStatus({ type: "success", text: res.message || "Message sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
      {status.text && (
        <div
          className={`p-4 rounded-xl text-sm ${
            status.type === "error"
              ? "bg-red-500/10 border border-red-500/20 text-red-400"
              : "bg-green-500/10 border border-green-500/20 text-green-400"
          }`}
        >
          {status.text}
        </div>
      )}

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 text-white"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 text-white"
      />
      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 text-white"
      />
      <textarea
        rows="6"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Write your message..."
        className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 resize-none text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 transition cursor-pointer text-white font-semibold"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
