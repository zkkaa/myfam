"use client";
import { motion } from "framer-motion";

interface FloatingElementProps {
  emoji: string;
  className?: string;
  duration?: number;
}

export default function FloatingElement({
  emoji,
  className = "",
  duration = 3,
}: FloatingElementProps) {
  return (
    <motion.span
      className={`absolute select-none pointer-events-none text-2xl ${className}`}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {emoji}
    </motion.span>
  );
}