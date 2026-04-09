import DramaShowcaseSection from "@/components/home/DramaShowcaseSection";
import FeaturedNewsSection from "@/components/home/FeaturedNewsSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import TopTenSlider from "@/components/home/TopTenSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import ContentGrid from "@/components/ui/ContentGrid";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D17] pb-16 pt-[110px] text-white md:pt-[120px]">
      <WelcomeSection />
      <QuickLinksSection />

      <div className="bg-white text-[#101828]">
        <div className="mx-auto max-w-[1440px] space-y-12 lg:px-8 xl:px-12 md:space-y-16">
          <TopTenSlider />
          <FeaturedNewsSection />
          <DramaShowcaseSection />
          <ContentGrid title="BUGABOO ORIGINALS" seedPrefix="originals" count={6} />
          <ContentGrid title="ข่าวยอดนิยม" seedPrefix="news" count={6} />
        </div>
      </div>
    </main>
  );
}
