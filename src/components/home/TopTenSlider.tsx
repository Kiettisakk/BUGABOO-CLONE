"use client";

import { useRef } from "react";
import Image from "next/image";

const mockTopTen = [
  {
    id: 1,
    title: "สะใภ้อิมพอร์ต",
    subtitle: "17 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-import/420/620",
  },
  {
    id: 2,
    title: "โนห์รา",
    subtitle: "18 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-nohra/420/620",
  },
  {
    id: 3,
    title: "ไฟน้ำค้าง",
    subtitle: "34 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-love/420/620",
  },
  {
    id: 4,
    title: "เพลิงพระนาง",
    subtitle: "26 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-queen/420/620",
  },
  {
    id: 5,
    title: "สมปานหัวใจ",
    subtitle: "16 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-heart/420/620",
  },
  {
    id: 6,
    title: "มวยไทย 7 สี",
    subtitle: "287 คลิป",
    thumbnail: "https://picsum.photos/seed/topten-boxing/420/620",
  },
  {
    id: 7,
    title: "คุณชายตำระเบิด",
    subtitle: "12 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-bomb/420/620",
  },
  {
    id: 8,
    title: "ผู้บ่าวอินดี้",
    subtitle: "20 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-indie/420/620",
  },
  {
    id: 9,
    title: "ล่ารักสุดขอบฟ้า",
    subtitle: "14 ตอน",
    thumbnail: "https://picsum.photos/seed/topten-sky/420/620",
  },
  {
    id: 10,
    title: "ข่าวเด็ด 7 สี",
    subtitle: "95 คลิป",
    thumbnail: "https://picsum.photos/seed/topten-news/420/620",
  },
];

export default function TopTenSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const amount = Math.min(920, container.clientWidth * 0.9);
    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-16 text-[#0f172a] md:py-20">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
              Top 10 Today
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-medium text-[#6d4aff] transition-colors hover:text-[#5636ff]"
            >
              ดูทั้งหมด
              <span aria-hidden className="text-[24px] leading-none">
                →
              </span>
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="เลื่อนซ้าย"
              onClick={() => scrollCards("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5dceb] bg-white text-[#475467] transition hover:border-[#b8c3d9] hover:text-[#111827]"
            >
              <span aria-hidden className="text-[26px] leading-none">
                ←
              </span>
            </button>
            <button
              type="button"
              aria-label="เลื่อนไปขวา"
              onClick={() => scrollCards("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5dceb] bg-white text-[#475467] transition hover:border-[#b8c3d9] hover:text-[#111827]"
            >
              <span aria-hidden className="text-[26px] leading-none">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            ref={scrollRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-10 overflow-x-auto pb-4 pr-8"
          >
            {mockTopTen.map((item, index) => (
              <article key={item.id} className="w-[224px] shrink-0 snap-start">
                <a href="#" className="group block">
                  <div className="relative overflow-hidden rounded-[18px] bg-[#d9d9e6] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <div className="absolute left-0 top-0 z-10 flex h-[54px] min-w-[42px] items-start justify-start overflow-hidden rounded-br-[14px] bg-[#6b5cff] px-4 py-3 text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(107,92,255,0.25)]">
                      {index + 1}
                    </div>
                    <div className="relative aspect-[224/358]">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="224px"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 px-0 pt-4">
                    <h3 className="text-[18px] font-medium leading-8 text-[#101828]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-7 text-[#344054]">
                      {item.subtitle}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวา"
            onClick={() => scrollCards("right")}
            className="absolute right-0 top-[124px] hidden h-14 w-14 items-center justify-center rounded-full border border-[#cfd8ea] bg-white text-[#475467] shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition hover:text-[#111827] xl:flex"
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
