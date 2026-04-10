"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const videos = [
  {
    id: 1,
    title: "โรงเรียนหลอน EP.59 อาถรรพ์คืน | เสียงจากหลุม มหาชนTalk",
    date: "4 เม.ย. 2569",
    image: "https://picsum.photos/seed/originals-new-1/640/360",
  },
  {
    id: 2,
    title: "เล่นใหญ่หูเบอ EP.4 ใครคือคนขุดกองต้องร้าย? | Internship Project",
    date: "3 เม.ย. 2569",
    image: "https://picsum.photos/seed/originals-new-2/640/360",
  },
  {
    id: 3,
    title: "ฝึกหอมใจ EP8 : ทดสอบ AI เพลง T-POP | Internship Project",
    date: "3 เม.ย. 2569",
    image: "https://picsum.photos/seed/originals-new-3/640/360",
  },
  {
    id: 4,
    title: "EP.41 โชว์รถ maison KEEPS วาดทุน 1,000 บาท แบรนด์ไก่ออกขายกลับกลายกว่า 300 ล้าน!",
    date: "1 เม.ย. 2569",
    image: "https://picsum.photos/seed/originals-new-4/640/360",
  },
  {
    id: 5,
    title: "ฝึกหอมใจ EP7 : ทดสอบ AI เพลงประกอบละคร | Internship Project",
    date: "1 เม.ย. 2569",
    image: "https://picsum.photos/seed/originals-new-5/640/360",
  },
];

export default function OriginalsNewSection() {
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
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#f1edf8] md:text-[38px]">
            ORIGINALS มาใหม่
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
              {videos.map((item) => (
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
                    <h3 className="line-clamp-2 text-[17px] font-normal leading-8 text-[#eceaf0]">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวาสำหรับ Originals มาใหม่"
            onClick={scrollNext}
            className="absolute right-[-2px] top-[74px] hidden h-[56px] w-[56px] items-center justify-center rounded-full bg-[#202534] text-white shadow-[0_12px_32px_rgba(15,23,42,0.22)] transition hover:bg-[#111827] xl:flex"
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
