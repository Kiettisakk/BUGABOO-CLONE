"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info } from "lucide-react";

const mockHeroData = [
  { id: 1, title: "ยอดรักนักรบ", image: "https://picsum.photos/seed/bugaboo-hero1/1920/1080", tag: "NEW EPISODE" },
  { id: 2, title: "สร้อยนาคี", image: "https://picsum.photos/seed/bugaboo-hero2/1920/1080", tag: "HIT SERIES" },
  { id: 3, title: "มาเฟียลำซิ่ง", image: "https://picsum.photos/seed/bugaboo-hero3/1920/1080", tag: "EXCLUSIVE" },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockHeroData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={mockHeroData[currentIndex].image}
            alt={mockHeroData[currentIndex].title}
            fill
            priority
            className="object-cover"
          />
          {/* Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-[#0B0D17]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D17]/80 to-transparent md:w-2/3" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-16 md:bottom-24 left-4 md:left-8 xl:left-12 z-10 space-y-5 max-w-2xl px-4">
        <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 text-xs rounded-sm tracking-wider">
          {mockHeroData[currentIndex].tag}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-xl leading-tight tracking-tight">
          {mockHeroData[currentIndex].title}
        </h1>
        <p className="text-gray-300 md:text-lg max-w-lg hidden md:block">
          เรื่องราวความเข้มข้นที่พร้อมให้คุณรับชมความสนุกและตื่นเต้นแบบไร้ขีดจำกัด ดูฟรีได้แล้ววันนี้ที่ Bugaboo!
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-white text-black font-extrabold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Play fill="currentColor" strokeWidth={0} className="w-5 h-5" /> เล่นเลย
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white border border-white/40 font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2">
            <Info className="w-5 h-5" /> รายละเอียด
          </button>
        </div>
      </div>
    </section>
  );
}
