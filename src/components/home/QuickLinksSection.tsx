import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    label: "ตรวจสลาก",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    label: "เกม",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4m-2-2v4M15 12h.01M18 12h.01"/>
      </svg>
    ),
  },
  {
    label: "BUGABOO\nSHOP",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    label: "ละครมาใหม่",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
  },
  {
    label: "สมัครพรีเมียม",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
      </svg>
    ),
  },
  {
    label: "กีฬาสด",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><path d="M4.93 4.93c1.25 3.65 3.75 5.75 7.07 6.07s6-1.5 7.07-5.07M4.93 19.07c1.5-3.5 4-5.57 7.07-5.57s5.57 2.07 7.07 5.57"/>
      </svg>
    ),
  },
  {
    label: "หาที่ท่องเที่ยว",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.59 5.59l1.4-1.4a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/>
      </svg>
    ),
  },
  {
    label: "ดูหนังฟรี",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
      </svg>
    ),
  },
];

export default function QuickLinksSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-10 space-y-8">
        {/* ── Quick Link Icons Row ── */}
        <div className="flex items-start justify-center gap-6 md:gap-10 overflow-x-auto pb-2 hide-scrollbar">
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex flex-col items-center gap-2.5 group shrink-0"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 group-hover:bg-purple-100 border border-gray-200 group-hover:border-purple-400 flex items-center justify-center text-gray-600 group-hover:text-purple-600 transition-all duration-200 shadow-sm">
                {link.icon}
              </div>
              <span className="text-[11px] md:text-xs text-gray-700 font-medium text-center whitespace-pre-line leading-tight">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* ── Game Zone Banner ── */}
        <Link href="#" className="block w-full relative group">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16/3" }}>
            <Image
              src="/images/gamezone-banner.png"
              alt="Game Zone - เกมสนุกมากมายที่ BUGABOO"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="100vw"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
