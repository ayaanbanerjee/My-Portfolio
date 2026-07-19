"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, FileText, Send } from "lucide-react";
import { personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

function CopyRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-base-border bg-base-surface/50 px-5 py-4 hover:border-signal/40 transition-colors">
      <a href={href} data-cursor-hover className="flex items-center gap-3 min-w-0">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-base-elevated text-signal">
          <Icon size={16} />
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-ink-faint">{label}</span>
          <span className="block truncate text-sm text-ink">{value}</span>
        </span>
      </a>
      <button
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        data-cursor-hover
        className="flex-shrink-0 text-ink-faint hover:text-signal transition-colors ml-3"
      >
        {copied ? <Check size={16} className="text-wire" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-base-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 06 — contact"
          title="Let's build something."
          description="Open to full-stack roles and freelance collaborations. Reach out directly, or send a message below."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            <CopyRow icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <CopyRow icon={Phone} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s+/g, "")}`} />
            <div className="flex items-center gap-3 rounded-xl border border-base-border bg-base-surface/50 px-5 py-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-base-elevated text-signal">
                <MapPin size={16} />
              </span>
              <span>
                <span className="block text-xs text-ink-faint">Location</span>
                <span className="block text-sm text-ink">{personal.location}</span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="flex flex-col items-center gap-2 rounded-xl border border-base-border bg-base-surface/50 py-4 hover:border-signal/40 hover:text-signal transition-colors text-ink-muted"
              >
                <Github size={18} />
                <span className="text-[11px] mono-tag">GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="flex flex-col items-center gap-2 rounded-xl border border-base-border bg-base-surface/50 py-4 hover:border-signal/40 hover:text-signal transition-colors text-ink-muted"
              >
                <Linkedin size={18} />
                <span className="text-[11px] mono-tag">LinkedIn</span>
              </a>
              <a
                href={personal.resumeUrl}
                download
                data-cursor-hover
                className="flex flex-col items-center gap-2 rounded-xl border border-base-border bg-base-surface/50 py-4 hover:border-signal/40 hover:text-signal transition-colors text-ink-muted"
              >
                <FileText size={18} />
                <span className="text-[11px] mono-tag">Resume</span>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl border border-base-border bg-base-elevated/40 p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="mono-tag block text-xs text-ink-faint mb-2">
                  name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-base-border bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mono-tag block text-xs text-ink-faint mb-2">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-base-border bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mono-tag block text-xs text-ink-faint mb-2">
                message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-base-border bg-base px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                placeholder="Tell me a bit about the project or role..."
              />
            </div>
            <MagneticButton type="submit" variant="solid" className="w-full md:w-auto">
              Send Message <Send size={15} />
            </MagneticButton>
            <p className="text-xs text-ink-faint">
              Opens your email client with this message pre-filled to {personal.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
