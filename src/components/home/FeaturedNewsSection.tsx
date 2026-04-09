import Image from "next/image";
import Link from "next/link";

const featuredItem = {
  title: "ดวลเพลงดัง พลังอาชีพ | เพลงมหาลัยวิวชน | 7 เม.ย.69",
  date: "7 เม.ย. 2569",
  image: "https://picsum.photos/seed/featured-highlight/960/620",
};

const latestItems = [
  {
    id: 1,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 บังลาภากก น้ำมันหมด...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-1/360/220",
  },
  {
    id: 2,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 แถลงปริยาย แต่เรื่อง...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-2/360/220",
  },
  {
    id: 3,
    title: "มีเรื่องต้องคุย EP.67 โลกพิโรบ แต่ไทยยังวิกฤต",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-3/360/220",
  },
  {
    id: 4,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 เทฟโก แนะนำ วอนคุ้น ของโ...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-4/360/220",
  },
  {
    id: 5,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 วิกฤตน้ำมันหนัก ! แก้ปัญ...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-5/360/220",
  },
  {
    id: 6,
    title: "ซุปทางดาวทอง 9 เมษายน 2569",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/latest-6/360/220",
  },
];

export default function FeaturedNewsSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-t border-[#e6e7eb] bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="grid gap-10 xl:grid-cols-[1.12fr_1fr] xl:gap-8">
          <div>
            <h2 className="mb-9 text-[28px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[44px]">
              ไฮไลต์แนะนำ
            </h2>

            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-[18px] bg-[#ddd] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <div className="relative aspect-[758/420]">
                  <Image
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 758px"
                    priority
                  />
                </div>
                <button
                  type="button"
                  aria-label="ดูไฮไลต์ก่อนหน้า"
                  className="absolute left-4 top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#7a8191] shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                >
                  <span aria-hidden className="text-[28px] leading-none">
                    ←
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="ดูไฮไลต์ถัดไป"
                  className="absolute right-4 top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#7a8191] shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                >
                  <span aria-hidden className="text-[28px] leading-none">
                    →
                  </span>
                </button>
              </div>

              <div className="pt-5">
                <p className="text-[18px] leading-8 text-[#344054]">{featuredItem.date}</p>
                <h3 className="mt-2 text-[28px] font-semibold leading-[1.32] tracking-[-0.03em] text-[#101828]">
                  {featuredItem.title}
                </h3>
              </div>
            </Link>

            <div className="mt-18 flex items-center justify-center gap-5">
              {Array.from({ length: 7 }).map((_, index) => {
                const isActive = index === 4;

                return (
                  <span
                    key={index}
                    className={isActive ? "h-[14px] w-[46px] rounded-full bg-[#7c3aed]" : "h-[14px] w-[14px] rounded-full bg-[#dfe3ea]"}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-9 text-[28px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[44px]">
              เนื้อหามาใหม่
            </h2>

            <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {latestItems.map((item) => (
                <Link key={item.id} href="#" className="group block">
                  <div className="relative overflow-hidden rounded-[16px] bg-[#d9d9e6] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <div className="relative aspect-[291/155]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 291px"
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="text-[15px] leading-7 text-[#344054]">{item.date}</p>
                    <h3 className="line-clamp-2 text-[18px] font-normal leading-[1.45] text-[#101828]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
