"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const techItems = [
  {
    id: 1,
    title: "วิธี Airdrop ไฟล์ระหว่าง Samsung กับ iPhone ทำได้ง่าย ๆ ไม่ต้องโหลดแอปเพิ่ม | How To Tricks...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/technology-1/640/360",
  },
  {
    id: 2,
    title: "วิธีแก้ไขลำดับรูปในโพสต์ของ Instagram | How To Tricks EP.347",
    date: "2 เม.ย. 2569",
    image: "https://picsum.photos/seed/technology-2/640/360",
  },
  {
    id: 3,
    title: "วิธีเปิดโหมดถนอมสายตาบน iPhone (Night Shift) | How To Tricks EP.346",
    date: "27 มี.ค. 2569",
    image: "https://picsum.photos/seed/technology-3/640/360",
  },
  {
    id: 4,
    title: "วิธีใช้ฟีเจอร์ Photo Assist แต่งภาพสุดล้ำ บน Galaxy AI | How To Trick EP.345",
    date: "20 มี.ค. 2569",
    image: "https://picsum.photos/seed/technology-4/640/360",
  },
  {
    id: 5,
    title: "วิธีแปลภาษาตอนไปพิมพ์ บนแป้นพิมพ์ iPhone แบบรวดเร็ว ไม่เสียเวลาเปลี่ยนแอป | How To Trick...",
    date: "13 มี.ค. 2569",
    image: "https://picsum.photos/seed/technology-5/640/360",
  },
];

export default function TechnologySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-[28px]">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
            เทคโนโลยี
          </h2>
          <Link
            href="#"
            className="mt-1 inline-flex items-center gap-2 text-[18px] font-medium text-[#8f66ff] transition hover:text-[#7b54f7]"
          >
            ดูทั้งหมด
            <span aria-hidden className="text-[28px] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="relative mt-[30px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {techItems.map((item) => (
                <article key={item.id} className="min-w-0 flex-[0_0_332px] pr-[34px]">
                  <Link href="#" className="group block">
                    <div className="relative overflow-hidden rounded-[12px] bg-[#111]">
                      <div className="relative aspect-[332/171]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="332px"
                        />
                      </div>
                    </div>
                    <p className="pt-3 text-[14px] leading-6 text-[#8f8f98]">{item.date}</p>
                    <h3 className="line-clamp-2 text-[17px] font-normal leading-8 text-[#101828]">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวาสำหรับเทคโนโลยี"
            onClick={scrollNext}
            className="absolute right-[-2px] top-[74px] hidden h-[56px] w-[56px] items-center justify-center rounded-full border border-[#d5dceb] bg-white text-[#697386] shadow-[0_12px_32px_rgba(15,23,42,0.14)] transition hover:text-[#111827] xl:flex"
          >
            <span aria-hidden className="text-[28px] leading-none">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
