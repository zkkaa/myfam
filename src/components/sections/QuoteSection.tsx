"use client";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section style={{ position: "relative", padding: "80px 20px", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, #fff1f2, #fffbeb, #fff1f2)",
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          maxWidth: "640px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "96px",
          color: "#fecdd3",
          lineHeight: 1,
          marginBottom: "-20px",
        }}>&quot;</div>

        <p style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(18px, 3vw, 24px)",
          color: "#44403c",
          lineHeight: 1.8,
          fontStyle: "italic",
        }}>
          Dalam setiap foto ada cerita. Dalam setiap video ada tawa.
          Dan dalam setiap momen bersama, ada cinta yang tak terhitung.
        </p>

        <div style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "96px",
          color: "#fecdd3",
          lineHeight: 1,
          marginTop: "-20px",
          transform: "rotate(180deg)",
        }}>&quot;</div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            width: "64px",
            height: "2px",
            background: "#fda4af",
            marginTop: "24px",
          }}
        />
        <p style={{ color: "#a8a29e", fontSize: "14px", marginTop: "12px" }}>
          — Keluarga Kami 🏡
        </p>
      </motion.div>
    </section>
  );
}