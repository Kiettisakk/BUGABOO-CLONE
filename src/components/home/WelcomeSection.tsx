"use client";
import Image from "next/image";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  "ดูซีรีส์":  "#6C3FC5",
  "ดูละคร":   "#7B3FC5",
  "ดูวาไรตี้": "#3A4CC5",
  "ดูออริจินัล":"#C53F6C",
};

const contentItems = [
  { label: "ดูซีรีส์",   title: "นที่รอยเสน่ห์", seed: "ser1" },
  { label: "ดูละคร",    title: "ลวง",           seed: "dra1" },
  { label: "ดูวาไรตี้",  title: "มีเรื่องต้องคุย", seed: "var1" },
  { label: "ดูวาไรตี้",  title: "ยิงคุย ยิงลึก",  seed: "var2" },
  { label: "ดูละคร",    title: "พรหมพยัค",       seed: "dra2" },
  { label: "ดูออริจินัล","title": "ป้ัมหัวใจ",     seed: "ori1" },
];

const liveChannels = [
  { id: "ch7", name: "ช่อง 7" , color: "#1a1a2e" },
  { id: "hotnews", name: "HOT\nNEWS", color: "#c0202a" },
  { id: "bugaboo", name: "BUGABOO", color: "#4a1a7a" },
];

export default function WelcomeSection() {
  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #120820 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── LEFT: Welcome + Content Grid ── */}
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                ยินดีต้อนรับสู่ BUGABOO.TV
              </h1>
              <p className="text-gray-400 text-sm mt-1">เนื้อหาแนะนำสำหรับคุณ</p>
            </div>

            {/* 2×3 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {contentItems.map((item, i) => (
                <Link key={i} href="#" className="relative group rounded-xl overflow-hidden bg-gray-900">
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={`https://picsum.photos/seed/welcome-${item.seed}/640/360`}
                      alt={item.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Category Badge */}
                  <div
                    className="absolute top-2 left-2 flex items-center gap-1 text-white text-[11px] font-bold px-2 py-0.5 rounded"
                    style={{ background: categoryColors[item.label] ?? "#6C3FC5" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {item.label}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 px-2 pb-2">
                    <p className="text-white text-xs font-semibold line-clamp-1 drop-shadow">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Live ช่อง 7HD ── */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">Live ช่อง 7HD</h2>

            {/* Live Player Area */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
              <Image
                src="https://picsum.photos/seed/live-ch7/1280/720"
                alt="Live ช่อง 7HD"
                fill
                priority
                className="object-cover"
              />
              {/* Live badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE
              </div>
              {/* Top-right info bar (simulate channel watermark) */}
              <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                ช่อง 7HD · ออกอากาศสด
              </div>

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>

            {/* Channel switcher row */}
            <div className="flex items-center gap-3">
              {liveChannels.map((ch) => (
                <button
                  key={ch.id}
                  className="flex flex-col items-center justify-center w-16 h-16 rounded-xl border border-white/20 hover:border-purple-400 transition-colors text-center text-[10px] font-bold text-white leading-tight"
                  style={{ background: ch.color }}
                >
                  {ch.id === "ch7" && (
                    <span className="text-lg font-black leading-none">7</span>
                  )}
                  <span className="whitespace-pre-line text-[9px]">{ch.name}</span>
                </button>
              ))}
            </div>

            {/* Footer link */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-gray-300 text-sm font-semibold">รายการช่อง 7HD</span>
              <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition">
                ดูรายการสด
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
