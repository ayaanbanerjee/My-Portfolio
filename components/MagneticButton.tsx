"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  download?: boolean | string;
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  target,
  rel,
  type = "button",
  download,
  disabled = false,
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>(0.25);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 whitespace-nowrap";

  const variants: Record<string, string> = {
    solid: "bg-signal text-base hover:bg-signal-soft",
    outline: "border border-base-borderStrong text-ink hover:border-signal hover:text-signal",
    ghost: "text-ink-muted hover:text-ink",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} download={download} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block disabled:cursor-not-allowed disabled:opacity-60">
      {content}
    </button>
  );
}
