"use client";
import { motion, type Variants } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const members = [
  { id: "1", name: "Ayah", role: "Kepala Keluarga", emoji: "👨", slug: "ayah", color: "bg-sky-100" },
  { id: "2", name: "Ibu", role: "Cahaya Keluarga", emoji: "👩", slug: "ibu", color: "bg-rose-100" },
  { id: "3", name: "Anak ke-1", role: "Si Sulung", emoji: "🧒", slug: "anak-1", color: "bg-amber-100" },
  { id: "4", name: "Anak ke-2", role: "Si Bungsu", emoji: "👶", slug: "anak-2", color: "bg-amber-50" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function MembersSection() {
  return (
    <SectionWrapper id="members">
      <div style={{ maxWidth: "1152px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: "inline-block",
              background: "#FEF3C7",
              color: "#D97706",
              fontSize: "11px",
              fontWeight: 500,
              padding: "4px 12px",
              borderRadius: "999px",
              marginBottom: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Kenal Kami 💛
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 36px)",
              color: "#292524",
              display: "block",
            }}
          >
            Anggota Keluarga
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#a8a29e", fontSize: "14px", marginTop: "12px" }}
          >
            Klik untuk mengenal kami lebih jauh ✨
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
        }}>
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link href={`/member/${member.slug}`} style={{ display: "block", textDecoration: "none" }} className="group">
                <div style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  border: "1px solid #f5f5f4",
                  textAlign: "center",
                  transition: "box-shadow 0.3s",
                }}>
                  <div style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "50%",
                    background: member.color === "bg-sky-100" ? "#e0f2fe"
                      : member.color === "bg-rose-100" ? "#ffe4e6"
                      : member.color === "bg-amber-100" ? "#fef3c7"
                      : "#fffbeb",
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                  }}>
                    {member.emoji}
                  </div>
                  <p style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "18px",
                    color: "#292524",
                    marginBottom: "4px",
                  }}>{member.name}</p>
                  <p style={{ color: "#a8a29e", fontSize: "12px" }}>{member.role}</p>
                  <p style={{
                    color: "#fb7185",
                    fontSize: "12px",
                    marginTop: "12px",
                    opacity: 0,
                    transition: "opacity 0.2s",
                  }} className="group-hover:opacity-100">
                    Lihat Profil →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}