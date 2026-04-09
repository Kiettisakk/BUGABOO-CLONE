import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  tag?: string;
}

export default function VideoCard({ title, thumbnail, tag }: VideoCardProps) {
  return (
    <Link href="#" className="group flex flex-col gap-3">
      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
        <Image 
          src={thumbnail}
          alt={title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-1"><path d="M5 3l14 9-14 9V3z" /></svg>
          </div>
        </div>
        
        {tag && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
            {tag}
          </div>
        )}
      </div>
      <h3 className="text-sm md:text-base font-semibold group-hover:text-red-500 transition-colors line-clamp-2 leading-tight text-gray-100">
        {title}
      </h3>
    </Link>
  );
}
