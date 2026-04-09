"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mockTopTen = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Top ${i + 1}`,
  thumbnail: `https://picsum.photos/seed/top${i + 1}/400/600`,
}));

export default function TopTenSlider() {
  const constraintsRef = useRef(null);

  return (
    <section className="space-y-6 overflow-visible py-4">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 px-4 md:px-0">
        <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" /> Top 10 มาแรง
      </h2>
      
      <div className="relative overflow-visible w-full -ml-4 pl-4 md:ml-0 md:pl-0" ref={constraintsRef}>
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          className="flex gap-8 md:gap-14 cursor-grab active:cursor-grabbing w-max pr-12 xl:pr-24"
        >
          {mockTopTen.map((item, index) => (
            <div key={item.id} className="relative flex-shrink-0 w-[140px] md:w-[200px] group isolate">
              {/* Stroke outline number */}
              <div
                className="absolute -left-6 md:-left-10 -bottom-4 z-[-1] font-black italic select-none pointer-events-none drop-shadow-2xl"
                style={{ 
                  fontSize: "clamp(5rem, 15vw, 12rem)",
                  lineHeight: 0.8,
                  WebkitTextStroke: "2px rgba(255,255,255,0.7)", 
                  WebkitTextFillColor: "var(--color-background)", // match bg for hollow effect
                  opacity: 0.9
                }}
              >
                {index + 1}
              </div>

              {/* Card Thumbnail */}
              <div className="relative z-10 w-full aspect-[2/3] rounded-xl overflow-hidden group-hover:-translate-y-2 lg:group-hover:scale-105 transition-all duration-300 shadow-xl bg-gray-800">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 140px, 200px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
