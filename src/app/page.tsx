import DramaShowcaseSection from "@/components/home/DramaShowcaseSection";
import FeaturedNewsSection from "@/components/home/FeaturedNewsSection";
import MoviesSeriesSection from "@/components/home/MoviesSeriesSection";
import NewsHubSection from "@/components/home/NewsHubSection";
import OriginalsNewSection from "@/components/home/OriginalsNewSection";
import OriginalsSection from "@/components/home/OriginalsSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import SportsSection from "@/components/home/SportsSection";
import TechnologySection from "@/components/home/TechnologySection";
import TopTenSlider from "@/components/home/TopTenSlider";
import VarietyNewSection from "@/components/home/VarietyNewSection";
import VarietySection from "@/components/home/VarietySection";
import WelcomeSection from "@/components/home/WelcomeSection";
import ContentGrid from "@/components/ui/ContentGrid";

const melodramaItems = [
  { id: 1, title: "เงากามเทพ", thumbnail: "https://picsum.photos/seed/melodrama-1/420/640" },
  { id: 2, title: "ผีเสื้อสลับลาย", thumbnail: "https://picsum.photos/seed/melodrama-2/420/640" },
  { id: 3, title: "เล่ห์มยุรา", thumbnail: "https://picsum.photos/seed/melodrama-3/420/640" },
  { id: 4, title: "เล่ห์ร้ายเกมลวง", thumbnail: "https://picsum.photos/seed/melodrama-4/420/640" },
  { id: 5, title: "ไฟน้ำค้าง", thumbnail: "https://picsum.photos/seed/melodrama-5/420/640" },
  { id: 6, title: "รอยรักรอยบาป", thumbnail: "https://picsum.photos/seed/melodrama-6/420/640" },
  { id: 7, title: "ฟ้าหินดินทราย", thumbnail: "https://picsum.photos/seed/melodrama-7/420/640" },
  { id: 8, title: "ลูกไม้ลายสนธยา", thumbnail: "https://picsum.photos/seed/melodrama-8/420/640", premium: true },
];

const actionItems = [
  { id: 1, title: "เปิดโหมดล่า คดีเดือด", thumbnail: "https://picsum.photos/seed/action-1/420/640" },
  { id: 2, title: "เปิดโหมดล่า อย่าท้าทายระบบ", thumbnail: "https://picsum.photos/seed/action-2/420/640" },
  { id: 3, title: "โอม! พระยาไฟ", thumbnail: "https://picsum.photos/seed/action-3/420/640" },
  { id: 4, title: "มือเหนือเมฆ", thumbnail: "https://picsum.photos/seed/action-4/420/640", premium: true },
  { id: 5, title: "พระจันทร์ลายพยัคฆ์", thumbnail: "https://picsum.photos/seed/action-5/420/640" },
  { id: 6, title: "อินทรีแดง", thumbnail: "https://picsum.photos/seed/action-6/420/640" },
  { id: 7, title: "สมิงจ้าวท่า", thumbnail: "https://picsum.photos/seed/action-7/420/640", premium: true },
  { id: 8, title: "เสือสั่งฟ้า", thumbnail: "https://picsum.photos/seed/action-8/420/640", premium: true },
];

const shortSeriesItems = [
  { id: 1, title: "21 Days Sunshine 21 วันของฉันกับเธอ", thumbnail: "https://picsum.photos/seed/short-series-1/420/640" },
  { id: 2, title: "Bangsaen love story ความรักที่บางแสน", thumbnail: "https://picsum.photos/seed/short-series-2/420/640" },
  { id: 3, title: "Hello Monday สวัสดีวันจันทร์", thumbnail: "https://picsum.photos/seed/short-series-3/420/640" },
  { id: 4, title: "Simple Plan ชีวิต 800", thumbnail: "https://picsum.photos/seed/short-series-4/420/640" },
  { id: 5, title: "สยบรักแพทย์หญิง ดวงใจฟ้าปาก", thumbnail: "https://picsum.photos/seed/short-series-5/420/640" },
  { id: 6, title: "การกลับมาของราชันมังกร", thumbnail: "https://picsum.photos/seed/short-series-6/420/640" },
  { id: 7, title: "ทายาทเศรษฐี ผู้สืบของ", thumbnail: "https://picsum.photos/seed/short-series-7/420/640" },
  { id: 8, title: "แผนรัก ลวงใจท่านอ๋อง", thumbnail: "https://picsum.photos/seed/short-series-8/420/640" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D17] pb-16 pt-[110px] text-white md:pt-[120px]">
      <WelcomeSection />
      <QuickLinksSection />

      <div className="bg-white text-[#101828]">
        <div className="mx-auto max-w-[1440px] space-y-12 md:space-y-16 lg:px-8 xl:px-12">
          <TopTenSlider />
          <FeaturedNewsSection />
          <DramaShowcaseSection />
          <ContentGrid title="ดรามาน้ำตาคลอ" items={melodramaItems} />
          <ContentGrid title="แอคชั่น" items={actionItems} />
          <ContentGrid title="Short Series" items={shortSeriesItems} />
          <OriginalsSection />
          <OriginalsNewSection />
          <MoviesSeriesSection />
          <SportsSection />
          <NewsHubSection />
          <TechnologySection />
          <VarietySection />
          <VarietyNewSection />
        </div>
      </div>
    </main>
  );
}
