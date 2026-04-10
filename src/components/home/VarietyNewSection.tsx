import Image from "next/image";
import Link from "next/link";

const featured = {
  title: "ไทยรักษ์สุขภาพ EP.254 | การกดจุดคลายอาการปวดหลังส่วนกลาง | 9 เม.ย.69",
  date: "10 เม.ย. 2569",
  image: "https://picsum.photos/seed/variety-featured/960/620",
};

const latestItems = [
  {
    id: 1,
    title: "ทำดีได้ดี EP.43 | ทหาร หัวใจของชาติไทย กับนอก ชาลี ศรีวรรณยา | 9...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-1/360/220",
  },
  {
    id: 2,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 บังลาภากก น้ำมันหมดประเทศ คนรับ ไทย ช้ารอ...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-2/360/220",
  },
  {
    id: 3,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 แถลงนโยบาย แต่เรื่องสำคัญ ไม่มี! | ป๋า...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-3/360/220",
  },
  {
    id: 4,
    title: "มีเรื่องต้องคุย EP.67 โลกพิโรบ แต่ไทยยังวิกฤต",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-4/360/220",
  },
  {
    id: 5,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 เทฟโก แนะนำ อุ่นใจ ของเป็นที่ปรึกษาฟ่าพ่น...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-5/360/220",
  },
  {
    id: 6,
    title: "โฮสต์ ฮับคุย ฮับลึก EP.278 วิกฤตน้ำมันหนัก ! แก้ปัญหาระยะสั้น คนละ...",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/variety-new-6/360/220",
  },
];

const tags = [
  "หนทางพารวย 8 ธันวาคม 2567",
  "หนทางพารวย ย้อนหลัง",
  "คลิปย้อนหลัง",
  "หนทางพารวย ช่อง7",
  "วัดประดู่ พระอารามหลวง",
  "หนุ่มแท่ง อารามกร้าว 29 มิถุนายน 2567",
  "ดูทีวีย้อนหลัง",
  "หนุ่มแท่งอารามกร้าว คลิปเต็ม",
  "พินกระ บุญยะรัตนา",
  "ดัง พันกร",
];

export default function VarietyNewSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-[28px]">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="grid gap-x-10 gap-y-10 xl:grid-cols-[1.12fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
                วาไรตี้มาใหม่
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

            <Link href="#" className="group mt-[30px] block">
              <div className="relative overflow-hidden rounded-[14px] bg-[#ddd] shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[740/400]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 740px"
                  />
                </div>
              </div>
              <p className="pt-4 text-[16px] leading-7 text-[#667085]">{featured.date}</p>
              <h3 className="text-[26px] font-normal leading-[1.4] text-[#101828]">
                {featured.title}
              </h3>
            </Link>

            <div className="mt-10">
              <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[38px]">
                แท็กยอดนิยม
              </h3>
              <div className="mt-7 flex max-w-[840px] flex-wrap gap-x-3 gap-y-[12px]">
                {tags.map((tag) => (
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
          </div>

          <div>
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {latestItems.map((item) => (
                <Link key={item.id} href="#" className="group block">
                  <div className="relative overflow-hidden rounded-[14px] bg-[#ddd] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <div className="relative aspect-[248/140]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="248px"
                      />
                    </div>
                  </div>
                  <p className="pt-3 text-[14px] leading-6 text-[#667085]">{item.date}</p>
                  <h3 className="line-clamp-2 text-[16px] font-normal leading-8 text-[#101828]">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
