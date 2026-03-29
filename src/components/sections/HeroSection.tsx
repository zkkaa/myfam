"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import FloatingElement from "@/components/ui/FloatingElement";

const collagePhotos = [
  { id: 1, src: "/images/family-1.jpg", alt: "Momen keluarga 1", rotate: "-6deg", top: "5%", left: "2%", width: "42%", zIndex: 2 },
  { id: 2, src: "/images/family-2.jpg", alt: "Momen keluarga 2", rotate: "4deg", top: "0%", left: "48%", width: "36%", zIndex: 3 },
  { id: 3, src: "/images/family-3.jpg", alt: "Momen keluarga 3", rotate: "-3deg", top: "42%", left: "18%", width: "38%", zIndex: 4 },
  { id: 4, src: "/images/family-4.jpg", alt: "Momen keluarga 4", rotate: "5deg", top: "38%", left: "55%", width: "34%", zIndex: 2 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (custom: { rotate: string }) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.rotate,
    transition: { duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FFFDF9] overflow-hidden flex flex-col">
      {/* Background blob */}
      <div className="absolute top-[-10%] right-[-15%] w-125 h-125 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-100 h-100 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      {/* Floating decorative elements */}
      <FloatingElement emoji="🌸" className="top-[12%] right-[8%]" duration={3.5} />
      <FloatingElement emoji="✨" className="top-[30%] left-[5%]" duration={2.8} />
      <FloatingElement emoji="🍀" className="bottom-[25%] right-[12%]" duration={4} />
      <FloatingElement emoji="💛" className="bottom-[15%] left-[8%]" duration={3.2} />

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col md:hidden px-5 pt-28 pb-10 gap-8">
        {/* Teks hero mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-block bg-rose-100 text-rose-500 text-xs font-medium px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Keluarga Kami 🏡
          </span>
          <h1 className="font-playfair text-4xl text-stone-800 leading-tight mb-4">
            Setiap Momen
            <br />
            <span className="text-rose-400 italic">Berharga</span>
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
            Tempat kami mengabadikan tawa, cinta, dan kenangan indah bersama — karena keluarga adalah rumah sejati.
          </p>
        </motion.div>

        {/* Collage mobile — stack vertikal artistik */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative h-95 mx-auto w-full max-w-sm"
        >
          {collagePhotos.map((photo) => (
            <motion.div
              key={photo.id}
              custom={{ rotate: photo.rotate }}
              variants={photoVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="absolute bg-white p-2 pb-6 shadow-md cursor-pointer"
              style={{
                top: photo.top,
                left: photo.left,
                width: photo.width,
                zIndex: photo.zIndex,
                rotate: photo.rotate,
              }}
            >
              <div className="w-full aspect-square bg-rose-100 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background = `hsl(${photo.id * 40 + 10}, 60%, 88%)`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote mobile */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center text-stone-400 italic text-sm px-4"
        >
          &quot;Keluarga bukan tentang darah — tapi tentang siapa yang selalu ada untukmu.&quot;
        </motion.blockquote>

        {/* CTA mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#members"
            className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Kenalan Yuk 👋
          </a>
          <a href="#memory" className="text-stone-400 text-xs underline underline-offset-4">
            Lihat Memory Kami
          </a>
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-1 w-full px-10 items-center gap-16 pt-20 justify-center">
        {/* Kiri — Collage */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-120 h-130 shrink-0"
        >
          {collagePhotos.map((photo) => (
            <motion.div
              key={photo.id}
              custom={{ rotate: photo.rotate }}
              variants={photoVariants}
              whileHover={{ scale: 1.06, zIndex: 10, transition: { duration: 0.2 } }}
              className="absolute bg-white p-2.5 pb-8 shadow-lg cursor-pointer"
              style={{
                top: photo.top,
                left: photo.left,
                width: photo.width,
                zIndex: photo.zIndex,
                rotate: photo.rotate,
              }}
            >
              <div className="w-full aspect-square bg-rose-100 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background = `hsl(${photo.id * 40 + 10}, 60%, 88%)`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Kanan — Teks */}
        <div className="flex flex-col gap-6 max-w-lg">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-rose-100 text-rose-500 text-xs font-medium px-3 py-1 rounded-full w-fit tracking-widest uppercase"
          >
            Keluarga Kami 🏡
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-5xl xl:text-6xl text-stone-800 leading-tight"
          >
            Setiap Momen
            <br />
            <span className="text-rose-400 italic">Berharga</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-stone-500 text-base leading-relaxed max-w-md"
          >
            Tempat kami mengabadikan tawa, cinta, dan kenangan indah bersama — karena keluarga adalah rumah sejati.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border-l-4 border-rose-200 pl-4 text-stone-400 italic text-sm"
          >
            &quot;Keluarga bukan tentang darah — tapi tentang siapa yang selalu ada untukmu.&quot;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-4 pt-2"
          >
            
            <a href="#members"
              className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Kenalan Yuk 👋
            </a>
            <a href="#memory" className="text-stone-500 text-sm hover:text-rose-400 transition-colors underline underline-offset-4">
              Lihat Memory Kami
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-stone-300 text-xs tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-linear-to-b from-stone-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}