"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const popularTags = [
  "เด่น รพพล",
  "นักแสดงช่อง 7HD",
  "เข้ม หัสวีร์",
  "ดูละคร",
  "ของทุกเดือน",
  "7 สีคอนเสิร์ต เฟสติวัล",
  "หยก ธัญยกันต์",
  "ดูละครย้อนหลังช่อง 7",
  "มิ้นท์ บารมิตา",
  "เรื่องย่อละคร ช่อง 7",
];

const dramaCards = [
  {
    id: 1,
    title: "บ้านนางรำ",
    meta: "",
    chip: "ดรามา",
    image: "https://picsum.photos/seed/drama-showcase-1/360/520",
  },
  {
    id: 2,
    title: "กุหลาบเล่นไฟ",
    meta: "",
    chip: "ดรามา",
    image: "https://picsum.photos/seed/drama-showcase-2/360/520",
  },
  {
    id: 3,
    title: "ลางปริศนา",
    meta: "",
    chip: "ดรามา",
    image: "https://picsum.photos/seed/drama-showcase-3/360/520",
  },
  {
    id: 4,
    title: "มาร้อยเล่ห์",
    meta: "3 ตอน",
    chip: "โรแมนติก",
    image: "https://picsum.photos/seed/drama-showcase-4/360/520",
  },
  {
    id: 5,
    title: "แก้วหน้าม้า",
    meta: "16 ตอน",
    chip: "นิทานพื้นบ้าน",
    image: "https://picsum.photos/seed/drama-showcase-5/360/520",
  },
];

export default function DramaShowcaseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1560px] px-5 pb-[42px] pt-[42px] md:px-8 xl:px-14">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
          แท็กยอดนิยม
        </h2>

        <div className="mt-[26px] flex max-w-[980px] flex-wrap gap-x-3 gap-y-[14px]">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="rounded-[6px] border border-[#b8adff] bg-[#f7f5ff] px-[14px] py-[7px] text-[14px] font-normal leading-5 text-[#6d4aff] transition hover:bg-[#f0edff]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#1d0f29]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 52% 42%, rgba(255,255,255,0.09), transparent 24%), linear-gradient(90deg, rgba(30,11,43,0.94) 0%, rgba(47,17,61,0.88) 42%, rgba(29,10,41,0.96) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] blur-[2px]"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/drama-background/1600/760')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="relative mx-auto max-w-[1560px] px-5 pb-[34px] pt-[70px] md:px-8 xl:px-14">
          <div className="flex items-center gap-4">
            <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-white md:text-[54px]">
              ละครช่อง 7HD
            </h2>
            <Link
              href="#"
              className="mt-1 inline-flex items-center gap-2 text-[18px] font-medium text-[#8f7cff] transition hover:text-[#b2a5ff]"
            >
              ดูทั้งหมด
              <span aria-hidden className="text-[28px] leading-none">
                →
              </span>
            </Link>
          </div>

          <div className="relative mt-[42px]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-0">
                {dramaCards.map((item) => (
                  <article key={item.id} className="min-w-0 flex-[0_0_248px] pr-[36px]">
                    <Link href="#" className="group block">
                      <div className="relative overflow-hidden rounded-[18px] bg-[#d3d0dc] shadow-[0_12px_28px_rgba(6,4,20,0.3)]">
                        <div className="relative aspect-[208/318]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="208px"
                          />
                        </div>
                      </div>

                      <div className="pt-[14px]">
                        <span className="inline-flex rounded-[7px] border border-[#7235ff] bg-[#2a1240] px-4 py-[5px] text-[14px] leading-5 text-[#e2d8ff]">
                          {item.chip}
                        </span>
                        <h3 className="mt-4 text-[17px] font-medium leading-8 text-white">
                          {item.title}
                        </h3>
                        <p className="min-h-[28px] text-[16px] leading-7 text-[#cbc1d8]">
                          {item.meta}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}

                <div className="flex-[0_0_390px] pl-[34px]">
                  <Link href="#" className="group block">
                    <div className="relative h-[282px] w-[364px] overflow-hidden rounded-[2px] bg-[#dad6e0] shadow-[0_14px_32px_rgba(6,4,20,0.25)]">
                      <Image
                        src="https://picsum.photos/seed/drama-advert/728/564"
                        alt="แบนเนอร์โฆษณา"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="364px"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="เลื่อนไปขวา"
              onClick={scrollNext}
              className="absolute right-[26.25rem] top-[161px] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-[#6a7384] shadow-[0_12px_32px_rgba(9,6,24,0.36)] transition hover:text-[#111827] xl:flex"
            >
              <span aria-hidden className="text-[30px] leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
