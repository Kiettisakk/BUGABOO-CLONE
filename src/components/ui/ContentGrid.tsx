import VideoCard from "./VideoCard";

interface ContentGridProps {
  title: string;
  seedPrefix: string;
  count?: number;
}

export default function ContentGrid({ title, seedPrefix, count = 6 }: ContentGridProps) {
  const mockItems = Array.from({ length: count }).map((_, i) => ({
    id: i,
    title: `${title} เรื่องที่ ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${seedPrefix}-${i}/400/600`,
    tag: i === 0 ? "NEW" : undefined
  }));

  return (
    <section className="space-y-6 px-4 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
          <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" /> {title}
        </h2>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
          ดูทั้งหมด
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {mockItems.map((item) => (
          <VideoCard
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            tag={item.tag}
          />
        ))}
      </div>
    </section>
  );
}
