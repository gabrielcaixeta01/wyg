"use client";

import { MotionConfig } from "framer-motion";

/**
 * CSS handles `prefers-reduced-motion` for keyframe animations, but framer-motion
 * animates via JS and has to be told separately. `reducedMotion="user"` drops
 * transform/layout animations for those users while keeping opacity fades, so
 * content still appears instead of staying invisible.
 *
 * `children` is passed through, so wrapping the tree here does not turn Server
 * Components into Client Components.
 */
export default function MotionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
