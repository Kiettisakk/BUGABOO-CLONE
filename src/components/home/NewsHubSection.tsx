import Image from "next/image";
import Link from "next/link";

const latestNews = [
  {
    id: 1,
    title: "วิเคราะห์บอล : แมนยู พบ ลีดส์ ยูไนเต็ด พรีเมียร์ลีก 2025/26 วันที่ 13 เม.ย. 2569",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/news-latest-1/320/180",
  },
  {
    id: 2,
    title: "วิเคราะห์บอล : เชลซี พบ แมนซิตี้ พรีเมียร์ลีก 2025/26 วันที่ 12 เม.ย. 2569",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/news-latest-2/320/180",
  },
  {
    id: 3,
    title: "วิเคราะห์บอล : ลิเวอร์พูล พบ ฟูแล่ม พรีเมียร์ลีก 2025/26 วันที่ 11 เม.ย. 2569",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/news-latest-3/320/180",
  },
  {
    id: 4,
    title: "วิเคราะห์บอล : อาร์เซน่อล พบ บอร์นมัธ พรีเมียร์ลีก 2025/26 วันที่ 11 เม.ย. 2569",
    date: "9 เม.ย. 2569",
    image: "https://picsum.photos/seed/news-latest-4/320/180",
  },
];

const popularNews = [
  {
    id: 1,
    title: "วิเคราะห์บอล : แมนยู พบ ลีดส์ ยูไนเต็ด พรีเมียร์ลีก 2025/26 วันที่ 13 เม.ย. 2569",
    date: "12 ชั่วโมงที่แล้ว",
    image: "https://picsum.photos/seed/news-popular-1/320/180",
  },
  {
    id: 2,
    title: "แฟนๆ เฮสนั่น! ช่อง 7 สี ส่ง ฟ้าใหม่ ที่สุดของละครฟอร์มใหญ่ งวดอีกครั้ง 6 ต.ค.นี้",
    date: "28 ก.ย. 2560",
    image: "https://picsum.photos/seed/news-popular-2/320/180",
  },
  {
    id: 3,
    title: "แฟนๆ สุดฟิน! 4 คู่พระนางจากซีรีส์ ภารกิจรัก นำทัพนักแสดงบวงสรวงคันคิง (มีภาพ)",
    date: "29 มิ.ย. 2560",
    image: "https://picsum.photos/seed/news-popular-3/320/180",
  },
  {
    id: 4,
    title: "วิเคราะห์บอล : เชลซี พบ แมนซิตี้ พรีเมียร์ลีก 2025/26 วันที่ 12 เม.ย. 2569",
    date: "12 ชั่วโมงที่แล้ว",
    image: "https://picsum.photos/seed/news-popular-4/320/180",
  },
];

const popularTags = [
  "เส้นทางบันเทิง 31 ธันวาคม 2564",
  "ตัวอย่างหนัง Bride Hard อึดนรกแต่ง",
  "บงคมมอเร่",
  "ข่าวบันเทิง",
  "ดาบพิฆาตอสูร ภาคปราสาทไร้ขอบเขต",
  "Despicable Me 4 มินเนี่ยน ร้ายเกินพิกัด 4",
  "เที่ยวบินหัตถิณ",
  "รายการบันเทิงช่อง7",
  "ท่านขุน",
  "เข้ม หัสวีร์",
];

const timeTabs = ["ชั่วโมงที่แล้ว", "1 วัน", "7 วัน", "1 เดือน"];

export default function NewsHubSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-[28px]">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="grid gap-x-14 gap-y-10 xl:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
                ข่าวล่าสุด
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

            <div className="mt-[30px] space-y-4">
              {latestNews.map((item) => (
                <Link key={item.id} href="#" className="grid grid-cols-[170px_1fr] gap-4">
                  <div className="relative overflow-hidden rounded-[12px] bg-[#ddd]">
                    <div className="relative aspect-[170/95]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="170px"
                      />
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-[14px] leading-6 text-[#667085]">{item.date}</p>
                    <h3 className="text-[16px] font-normal leading-8 text-[#101828]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[38px]">
                แท็กยอดนิยม
              </h3>
              <div className="mt-7 flex max-w-[820px] flex-wrap gap-x-3 gap-y-[12px]">
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
          </div>

          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[42px]">
                ข่าวยอดนิยม
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

            <div className="mt-[30px] flex rounded-[10px] border border-[#e4e7ec] bg-[#fafafa] p-[4px]">
              {timeTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 rounded-[8px] px-4 py-3 text-[16px] leading-6 ${
                    index === 0 ? "bg-white text-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.06)]" : "text-[#667085]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {popularNews.map((item) => (
                <Link key={item.id} href="#" className="grid grid-cols-[170px_1fr] gap-4">
                  <div className="relative overflow-hidden rounded-[12px] bg-[#ddd]">
                    <div className="relative aspect-[170/95]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="170px"
                      />
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-[14px] leading-6 text-[#667085]">{item.date}</p>
                    <h3 className="text-[16px] font-normal leading-8 text-[#101828]">
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
