"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects, personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

function BrowserMockup({ name, index }: { name: string; index: number }) {
  // Abstract, generated representation of the project — not a real screenshot.
  const hue = index % 2 === 0 ? "from-signal/15" : "from-wire/15";
  return (
    <div className="relative overflow-hidden rounded-xl border border-base-border bg-base">
      <div className="flex items-center gap-1.5 border-b border-base-border bg-base-elevated px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mono-tag ml-3 truncate text-[11px] text-ink-faint">
          {name.toLowerCase().replace(/\s+/g, "-")}.app
        </span>
      </div>
      <div className={`relative h-56 md:h-64 bg-gradient-to-br ${hue} to-transparent`}>
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center gap-3 p-8">
          <div className="h-3 w-2/3 rounded-full bg-ink/10" />
          <div className="h-3 w-1/2 rounded-full bg-ink/10" />
          <div className="mt-4 flex gap-3">
            <div className="h-16 w-16 rounded-lg bg-ink/10" />
            <div className="h-16 w-16 rounded-lg bg-ink/10" />
            <div className="h-16 w-16 rounded-lg bg-ink/10" />
          </div>
        </div>
        <span className="mono-tag absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-ink-faint/70">
          preview
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-base-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 04 — projects"
          title="Selected builds."
          description="End-to-end applications — designed, coded, tested, and deployed."
        />

        <div className="mt-16 space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 rounded-2xl border border-base-border bg-base-elevated/30 p-6 md:p-10 hover:border-signal/40 transition-colors"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <BrowserMockup name={project.name} index={i} />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`mono-tag flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] ${
                      project.status === "Ongoing"
                        ? "border-signal/40 bg-signal/10 text-signal"
                        : "border-wire/40 bg-wire/10 text-wire"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Ongoing" ? "bg-signal animate-pulse" : "bg-wire"
                      }`}
                    />
                    {project.status}
                  </span>
                  <span className="mono-tag text-xs text-ink-faint">{project.period}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-ink">{project.name}</h3>
                <p className="mt-4 text-ink-muted leading-relaxed">{project.description}</p>

                <ul className="mt-5 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm text-ink-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="mono-tag rounded-full border border-base-border px-3 py-1 text-[11px] text-ink-faint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <MagneticButton href={project.liveUrl} variant="solid" target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink size={15} />
                    </MagneticButton>
                  )}
                  {project.githubUrl && (
                    <MagneticButton href={project.githubUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                      <Github size={15} /> Repository
                    </MagneticButton>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="mono-tag text-xs text-ink-faint italic">
                      Repository not yet public
                    </span>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-1 text-sm text-ink-muted hover:text-signal transition-colors"
                    >
                      Visit Website <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href={personal.github} variant="ghost" target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight size={15} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
