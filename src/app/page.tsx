import HeroBanner from "@/components/home/HeroBanner";
import CategoryNav from "@/components/home/CategoryNav";
import TopTenSlider from "@/components/home/TopTenSlider";
import ContentGrid from "@/components/ui/ContentGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D17] text-white overflow-hidden pb-16">
      <HeroBanner />
      
      <div className="max-w-[1440px] mx-auto pt-8 md:pt-12 space-y-12 md:space-y-16 lg:px-8 xl:px-12">
        <CategoryNav />
        
        <TopTenSlider />
        
        <ContentGrid title="ละครช่อง 7HD มาใหม่" seedPrefix="ch7new" count={6} />
        
        <ContentGrid title="ดราม่าเข้มข้น" seedPrefix="drama" count={6} />
        
        <ContentGrid title="BUGABOO ORIGINALS" seedPrefix="originals" count={6} />
        
        <ContentGrid title="ข่าวยอดนิยม" seedPrefix="news" count={6} />
      </div>
    </main>
  );
}
