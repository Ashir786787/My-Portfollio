import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import { submitContact } from "../../api/contactApi.js";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition duration-300 focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-violet-500/10";

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((previous) => ({ ...previous, [e.target.name]: e.target.value }));
    if (status.text) setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await submitContact(form);
      setStatus({
        type: "success",
        text: res?.message || "Message sent successfully. I'll get back to you soon!",
      });
      setForm(emptyForm);
    } catch (err) {
      setStatus({
        type: "error",
        text: err?.message || "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="card relative overflow-hidden p-5 sm:p-7 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
            Send a message
          </h3>
          <p className="mt-1 text-xs text-white/50">
            All fields are required. Your details stay private.
          </p>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-white/45 sm:block">
          24h reply
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/55"
            >
              Full name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/55"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/55"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/55"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline and goals..."
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        {status.text && (
          <div
            role="status"
            aria-live="polite"
            className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs leading-6 ${
              status.type === "error"
                ? "border-red-400/20 bg-red-500/10 text-red-300"
                : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
            }`}
          >
            {status.type === "error" ? (
              <FaExclamationCircle className="mt-1 shrink-0 text-[0.7rem]" />
            ) : (
              <FaCheckCircle className="mt-1 shrink-0 text-[0.7rem]" />
            )}
            {status.text}
          </div>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane className="text-[0.72rem]" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
