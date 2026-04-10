"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const movies = [
  { id: 1, title: "ดูหนัง : ส้ม ภัค เสี้ยม", image: "https://picsum.photos/seed/movies-1/420/640" },
  { id: 2, title: "ดูหนัง : โมจิน ปริศนาวงกตนคร", image: "https://picsum.photos/seed/movies-2/420/640" },
  { id: 3, title: "ดูหนัง : สลีมบอย ซอยติด", image: "https://picsum.photos/seed/movies-3/420/640" },
  { id: 4, title: "มาร้อยเล่ห์", image: "https://picsum.photos/seed/movies-4/420/640" },
  { id: 5, title: "ดูหนัง : ป้าแฮปปี้ SHE ท่าเยอะ", image: "https://picsum.photos/seed/movies-5/420/640" },
];

export default function MoviesSeriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-[26px]">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
            หนังและซีรีส์
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

        <div className="relative mt-[28px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-start">
              {movies.map((item) => (
                <article key={item.id} className="min-w-0 flex-[0_0_226px] pr-[30px]">
                  <Link href="#" className="group block">
                    <div className="relative overflow-hidden rounded-[14px] bg-[#ddd] shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                      <div className="relative aspect-[226/308]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="226px"
                        />
                      </div>
                    </div>
                    <h3 className="pt-3 text-[17px] font-normal leading-8 text-[#101828]">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}

              <div className="flex-[0_0_394px] pl-[34px]">
                <Link href="#" className="group block">
                  <div className="relative h-[235px] w-[354px] overflow-hidden bg-[#ddd] shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                    <Image
                      src="https://picsum.photos/seed/movies-advert/708/470"
                      alt="โฆษณา"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="354px"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวาสำหรับหนังและซีรีส์"
            onClick={scrollNext}
            className="absolute right-[25.8rem] top-[113px] hidden h-[56px] w-[56px] items-center justify-center rounded-full border border-[#d5dceb] bg-white text-[#697386] shadow-[0_12px_32px_rgba(15,23,42,0.14)] transition hover:text-[#111827] xl:flex"
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
