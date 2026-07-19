import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { personal, nav } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-base-border bg-base">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#home" className="font-display text-2xl text-ink">
              {personal.name}
            </a>
            <p className="mt-2 text-sm text-ink-muted">Full Stack Web Developer</p>
            <p className="mt-4 max-w-sm text-sm text-ink-faint leading-relaxed">
              {personal.subtitle}. Building end-to-end software, from
              database schema to deployed interface.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mono-tag text-xs uppercase tracking-[0.2em] text-ink-faint mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-muted hover:text-signal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mono-tag text-xs uppercase tracking-[0.2em] text-ink-faint mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  <Mail size={15} /> {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  <Phone size={15} /> {personal.phone}
                </a>
              </li>
              <li>
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  <FileText size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-base-border pt-8">
          <p className="mono-tag text-xs text-ink-faint">
            © {year} {personal.name}. All Rights Reserved.
          </p>
          <p className="mono-tag text-xs text-ink-faint">
            built with next.js · tailwind · framer-motion
          </p>
        </div>
      </div>
    </footer>
  );
}
