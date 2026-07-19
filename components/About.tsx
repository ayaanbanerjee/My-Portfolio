"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { personal, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stats = [
  { label: "Years in CS Program", value: "6+" },
  { label: "Internship Sprints Shipped", value: "20+" },
  { label: "Core Stack", value: "MERN" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="// 01 — about"
              title="Grounded in fundamentals, shipped in production."
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-ink-muted leading-relaxed">
                {personal.summary}
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex items-center gap-2 text-ink-muted">
                <MapPin size={16} className="text-signal" />
                <span className="text-sm">{personal.location}</span>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-base-border pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl text-ink">{s.value}</div>
                    <div className="mt-1 text-xs text-ink-faint leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-base-border bg-base-surface/60 p-6 md:p-8 shadow-card">
                <div className="mono-tag flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-signal mb-6">
                  <GraduationCap size={14} />
                  education
                </div>
                <div className="space-y-8">
                  {education.map((ed, i) => (
                    <motion.div
                      key={ed.degree}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pl-6 border-l border-base-border"
                    >
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                        <h3 className="font-display text-lg text-ink">{ed.degree}</h3>
                        <span className="mono-tag text-xs text-ink-faint whitespace-nowrap">
                          {ed.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">{ed.school}</p>
                      {"note" in ed && ed.note && (
                        <span className="mono-tag mt-2 inline-block text-xs text-wire">
                          {ed.note}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-6 rounded-2xl border border-base-border bg-gradient-to-br from-base-surface/80 to-base-surface/30 p-6 md:p-8">
                <p className="mono-tag text-xs uppercase tracking-[0.2em] text-ink-faint mb-3">
                  approach
                </p>
                <p className="text-ink-muted leading-relaxed">
                  Every feature moves through the same discipline as a
                  production sprint: understand the requirement, design the
                  data flow, write it, test it against real edge cases, and
                  document what changed — the same lifecycle used at
                  Vylex.ai, applied to every personal build too.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
