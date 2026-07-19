"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Server, GitPullRequest } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons = [Layers, Code2, Server, GitPullRequest];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 05 — services"
          title="What I can help you build."
          description="Focused on full-stack delivery — from data model to deployed interface."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-base-border bg-base-surface/50 p-8 transition-colors hover:border-signal/40"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-signal/5 blur-2xl transition-all duration-500 group-hover:bg-signal/15" />
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-base-border bg-base-elevated text-signal">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{service.description}</p>
                <span className="mono-tag mt-6 inline-block text-xs text-ink-faint">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
