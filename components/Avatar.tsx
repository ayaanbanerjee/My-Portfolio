"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { personal } from "@/lib/data";

const initials = personal.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

type AvatarProps = {
  className?: string;
  /** Show the small "available" status dot in the corner. */
  showStatus?: boolean;
};

/**
 * Renders /avatar.jpg if it exists in /public. If no image is present
 * (or it fails to load), falls back to a styled initials monogram —
 * so the avatar always looks intentional, never broken.
 *
 * To use a real photo: drop a square image into `public/avatar.jpg`
 * (recommended: at least 400x400px). No code changes needed.
 */
export default function Avatar({ className, showStatus = true }: AvatarProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={cn("relative flex-shrink-0", className)}>
      <div className="absolute -inset-1.5 rounded-full bg-signal/20 blur-lg animate-float" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-signal/50 bg-base-surface shadow-glow-signal">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/avatar.jpeg"
            alt={personal.name}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-base-elevated to-base-surface">
            <span className="font-display text-lg text-signal">{initials}</span>
          </div>
        )}
      </div>
      {showStatus && (
        <span
          className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-wire"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
