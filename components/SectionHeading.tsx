import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      <Reveal>
        <div className="flex items-center gap-3 mb-5 justify-start" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="mono-tag text-xs uppercase tracking-[0.2em] text-signal">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-display-3 text-ink text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={cn("mt-4 text-ink-muted text-base md:text-lg max-w-xl", align === "center" && "mx-auto")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
