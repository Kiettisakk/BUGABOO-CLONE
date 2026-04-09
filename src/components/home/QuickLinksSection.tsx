import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    label: "ตรวจสลาก",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: "เกม",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4m-2-2v4M15 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    label: "BUGABOO\nSHOP",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: "ละครมาใหม่",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
      </svg>
    ),
  },
  {
    label: "สมัครพรีเมียม",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      </svg>
    ),
  },
  {
    label: "กีฬาสด",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93c1.25 3.65 3.75 5.75 7.07 6.07s6-1.5 7.07-5.07M4.93 19.07c1.5-3.5 4-5.57 7.07-5.57s5.57 2.07 7.07 5.57" />
      </svg>
    ),
  },
  {
    label: "หาที่ท่องเที่ยว",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M10.5 13.5 2 10l20-8-8 20-3.5-8.5Z" />
        <path d="m10.5 13.5 11.5-11.5" />
      </svg>
    ),
  },
  {
    label: "ดูหนังฟรี",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="20" rx="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
];

export default function QuickLinksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-14 pt-6 md:pb-20 md:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32"
        style={{
          background:
            "radial-gradient(circle at 8% 20%, rgba(126, 87, 194, 0.14), transparent 28%), radial-gradient(circle at 28% 0%, rgba(177, 156, 217, 0.2), transparent 30%), linear-gradient(180deg, rgba(237, 231, 246, 0.9) 0%, rgba(255, 255, 255, 0.92) 62%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1560px] px-5 md:px-8 xl:px-14">
        <div className="hide-scrollbar flex items-start justify-start gap-8 overflow-x-auto px-1 pb-5 pt-10 md:justify-center md:gap-14 md:pt-12 xl:gap-16">
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="group flex shrink-0 flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#1A0A2E] text-white shadow-[0_2px_0_rgba(255,255,255,0.2)_inset,0_3px_10px_rgba(20,8,38,0.22)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#24103c] md:h-[72px] md:w-[72px]">
                {link.icon}
              </div>
              <span className="whitespace-pre-line text-[13px] font-medium leading-snug text-[#101828] md:text-[15px]">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <Link href="#" className="group mx-auto mt-6 block w-full max-w-[1540px] md:mt-9">
          <div
            className="relative w-full overflow-hidden bg-[#15091f] shadow-[0_24px_48px_rgba(17,12,34,0.08)]"
            style={{ aspectRatio: "1536 / 216" }}
          >
            <Image
              src="/images/gamezone-banner.png"
              alt="Game Zone - เกมสนุกมากมายที่ BUGABOO"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
              sizes="(max-width: 1600px) 100vw, 1540px"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
