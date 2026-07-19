"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 03 — skills"
          title="The stack, by category."
          description="Languages, frameworks, and practices used across internships and personal builds."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-base-border bg-base-surface/50 p-6 hover:border-signal/40 transition-colors"
            >
              <h3 className="mono-tag text-xs uppercase tracking-[0.2em] text-signal mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="mono-tag rounded-full border border-base-border bg-base-elevated px-3.5 py-1.5 text-[13px] text-ink-muted transition-colors hover:border-signal/50 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
