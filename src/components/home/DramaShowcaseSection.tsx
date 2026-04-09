import Image from "next/image";
import Link from "next/link";

const popularTags = [
  "เด็ต รบพล",
  "นักแสดงช่อง 7HD",
  "เข้ม หัสวีร์",
  "ดูละคร",
  "ของทุกเดือน",
  "7 สีคอนเสิร์ต เฟสติวัล",
  "หยก ธัญยกันต์",
  "ดูละครย้อนหลังช่อง7",
  "มิ้นท์ บารมิตา",
  "เรื่องย่อละคร ช่อง7",
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
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto max-w-[1560px] px-5 pb-12 pt-10 md:px-8 md:pb-14 md:pt-12 xl:px-14">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[44px]">
          แท็กยอดนิยม
        </h2>

        <div className="mt-8 flex max-w-[980px] flex-wrap gap-4">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="rounded-[6px] border border-[#b7aaff] bg-[#f7f5ff] px-4 py-2 text-[15px] font-normal leading-6 text-[#6d4aff] transition hover:bg-[#f0edff]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#1b0c28]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "radial-gradient(circle at 18% 35%, rgba(151, 80, 255, 0.28), transparent 24%), radial-gradient(circle at 80% 50%, rgba(133, 56, 255, 0.2), transparent 28%), linear-gradient(90deg, rgba(28,13,44,0.94) 0%, rgba(40,17,56,0.88) 38%, rgba(28,10,42,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 scale-110 blur-sm"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/drama-background/1600/760')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.14,
          }}
        />

        <div className="relative mx-auto max-w-[1560px] px-5 py-12 md:px-8 md:py-14 xl:px-14">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[44px]">
              ละครช่อง 7HD
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-lg font-medium text-[#9c87ff] transition hover:text-[#b8a7ff]"
            >
              ดูทั้งหมด
              <span aria-hidden className="text-[24px] leading-none">
                →
              </span>
            </Link>
          </div>

          <div className="mt-10 flex items-start gap-9 overflow-x-auto pb-2 pr-6 hide-scrollbar">
            {dramaCards.map((item) => (
              <article key={item.id} className="w-[184px] shrink-0">
                <Link href="#" className="group block">
                  <div className="relative overflow-hidden rounded-[16px] bg-[#d3d0dc] shadow-[0_14px_32px_rgba(6,4,20,0.28)]">
                    <div className="relative aspect-[184/292]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="184px"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex rounded-[6px] border border-[#6f35ff] bg-[#2a1144] px-4 py-1 text-[14px] leading-6 text-[#d6c8ff]">
                      {item.chip}
                    </span>
                    <h3 className="mt-4 text-[18px] font-medium leading-8 text-white">
                      {item.title}
                    </h3>
                    <p className="min-h-[28px] text-[16px] leading-7 text-[#c2bacd]">
                      {item.meta}
                    </p>
                  </div>
                </Link>
              </article>
            ))}

            <div className="flex shrink-0 items-start pl-8">
              <Link href="#" className="group mt-0 block">
                <div className="relative h-[282px] w-[340px] overflow-hidden rounded-[2px] bg-[#dad6e0] shadow-[0_14px_32px_rgba(6,4,20,0.25)]">
                  <Image
                    src="https://picsum.photos/seed/drama-advert/680/564"
                    alt="โฆษณา"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="340px"
                  />
                </div>
              </Link>
            </div>
          </div>

          <button
            type="button"
            aria-label="เลื่อนไปขวา"
            className="absolute right-[27.5rem] top-[19.25rem] hidden h-[54px] w-[54px] items-center justify-center rounded-full bg-white text-[#697386] shadow-[0_12px_30px_rgba(9,6,24,0.35)] xl:flex"
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
