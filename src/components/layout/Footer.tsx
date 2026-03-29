"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #f5f5f4",
      }}
    >
      <p style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "24px",
        color: "#44403c",
        marginBottom: "8px",
      }}>🏡 MyFam</p>
      <p style={{ color: "#a8a29e", fontSize: "12px" }}>
        Dibuat dengan 💛 untuk keluarga tercinta · {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}