"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Clapperboard, PlayCircle } from "lucide-react";
import { useCallback } from "react";

const originalsItems = [
  {
    id: 1,
    title: "ติดลมบน",
    image: "https://picsum.photos/seed/originals-1/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 2,
    title: "เสียงจากหลุม",
    image: "https://picsum.photos/seed/originals-2/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 3,
    title: "ดวงใจ STORY",
    image: "https://picsum.photos/seed/originals-3/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 4,
    title: "Star Cam",
    image: "https://picsum.photos/seed/originals-4/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 5,
    title: "TALK TO U",
    image: "https://picsum.photos/seed/originals-5/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 6,
    title: "อร่อยต้องแชร์",
    image: "https://picsum.photos/seed/originals-6/420/640",
    source: "BUGABOO.TV",
    sourceType: "bugaboo",
  },
  {
    id: 7,
    title: "หลงละคร",
    image: "https://picsum.photos/seed/originals-7/420/640",
    source: "Ch7HD",
    sourceType: "ch7",
  },
  {
    id: 8,
    title: "ป่าเดี๋ยว",
    image: "https://picsum.photos/seed/originals-8/420/640",
    source: "BUGABOO.TV",
    sourceType: "bugaboo",
  },
];

export default function OriginalsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#1d0f29]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 54% 42%, rgba(255,255,255,0.08), transparent 26%), linear-gradient(90deg, rgba(30,11,43,0.95) 0%, rgba(52,18,69,0.88) 45%, rgba(28,10,40,0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] blur-[2px]"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/originals-background/1600/760')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto max-w-[1560px] px-5 pb-[26px] pt-[44px] md:px-8 xl:px-14">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-white md:text-[40px]">
            ORIGINALS
          </h2>
          <Link
            href="#"
            className="mt-1 inline-flex items-center gap-2 text-[18px] font-medium text-[#8f7cff] transition hover:text-[#b9abff]"
          >
            ดูทั้งหมด
            <span aria-hidden className="text-[28px] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="relative mt-[28px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {originalsItems.map((item) => (
                <article key={item.id} className="min-w-0 flex-[0_0_208px] pr-[30px]">
                  <Link href="#" className="group block">
                    <div className="relative overflow-hidden rounded-[14px] bg-[#ddd] shadow-[0_12px_28px_rgba(8,4,24,0.34)]">
                      <div className="relative aspect-[208/286]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="208px"
                        />
                      </div>
                    </div>

                    <div className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-[2px] border border-[#6b5cff] bg-[#24113c] px-3 py-[6px] text-[14px] leading-5 text-white">
                      {item.sourceType === "bugaboo" ? (
                        <Clapperboard className="h-4 w-4" strokeWidth={1.8} />
                      ) : (
                        <PlayCircle className="h-4 w-4" strokeWidth={1.8} />
                      )}
                      <span>{item.source}</span>
                    </div>

                    <h3 className="pt-3 text-[17px] font-normal leading-8 text-white">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวาสำหรับ Originals"
            onClick={scrollNext}
            className="absolute right-[-2px] top-[103px] hidden h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#697386] shadow-[0_12px_32px_rgba(8,5,20,0.32)] transition hover:text-[#111827] xl:flex"
          >
            <span aria-hidden className="text-[30px] leading-none">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
