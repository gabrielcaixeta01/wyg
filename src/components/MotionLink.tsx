"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * `next/link` with framer-motion props, so animated CTAs keep client-side
 * navigation and prefetching instead of falling back to a full page load.
 *
 * Created at module scope on purpose: calling `motion.create` during render
 * returns a new component type every time, which remounts the subtree.
 */
export const MotionLink = motion.create(Link);
