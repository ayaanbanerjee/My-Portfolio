"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-base-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 02 — experience"
          title="Where the work has happened."
          description="Real sprint cycles, real production code, real code review."
        />

        <div className="mt-16 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-base-border bg-base-elevated/40 p-6 md:p-10 transition-colors hover:border-signal/40"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl md:text-3xl text-ink">{job.role}</h3>
                    
                  </div>
                  <p className="mt-1 text-signal font-medium">{job.company}</p>
                  <p className="text-sm text-ink-faint">{job.meta}</p>
                </div>
                <span className="mono-tag text-xs text-ink-faint whitespace-nowrap md:text-right">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-signal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
