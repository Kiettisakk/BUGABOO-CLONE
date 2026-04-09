"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Globe, Menu, X, ChevronDown, Crown } from "lucide-react";

const navLinks = [
  { label: "สะอาด", href: "/" },
  { label: "หนัง / ซีรีส์", href: "/series" },
  { label: "ข่าว", href: "/news" },
  { label: "กีฬา", href: "/sports" },
  { label: "อื่น ๆ", href: "/more", hasDropdown: true },
  { label: "เกม", href: "/game", isNew: true },
];

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col">
      {/* ── 1) Top Announcement Strip ── */}
      <div
        className="w-full text-center py-1.5 text-sm font-semibold"
        style={{ background: "linear-gradient(90deg,#0e0019 0%,#1a0a2e 40%,#0e0019 100%)" }}
      >
        <span className="text-yellow-400 tracking-wide flex items-center justify-center gap-2.5">
          <span style={{ color: "#c8a84b" }}>✦</span>
          <span style={{ color: "#d4af37" }}>พระพันปีหลวง ในดวงใจ</span>
          <span style={{ color: "#c8a84b" }}>✦</span>
        </span>
      </div>

      {/* ── 2) Main Navbar ── */}
      <div className="w-full" style={{ background: "#1a0a2e" }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-10 h-14 flex items-center justify-between">
          {/* LEFT: Logo + Nav links */}
          <div className="flex items-center gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0">
              <div className="bg-red-600 text-white font-black text-[10px] px-1.5 py-0.5 rounded-sm leading-none tracking-tight">TV</div>
              <span className="text-white font-black text-lg tracking-tight">BUGABOO</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5 text-[13px] font-medium text-gray-300">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative flex items-center gap-1 px-2.5 py-1 rounded hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
                  {link.isNew && (
                    <span className="absolute -top-1 -right-0 bg-red-600 text-white text-[9px] font-bold px-1 py-px rounded-sm leading-none">
                      NEW
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-1.5 text-white">
            {/* Search */}
            <button className="p-2 hover:bg-white/10 rounded-full transition">
              <Search className="w-[18px] h-[18px]" />
            </button>
            {/* Language */}
            <button className="p-2 hover:bg-white/10 rounded-full transition hidden md:flex">
              <Globe className="w-[18px] h-[18px]" />
            </button>

            {/* Login */}
            <button className="hidden md:block border border-gray-400 text-gray-200 hover:bg-white/10 font-medium py-1 px-3.5 rounded-md text-[13px] transition">
              เข้าสู่ระบบ
            </button>

            {/* Shop */}
            <button
              className="hidden md:flex items-center gap-1.5 font-bold py-1 px-3.5 rounded-md text-[13px] transition"
              style={{ background: "#2d1154", color: "#fff" }}
            >
              <span className="text-base">🛍</span> ช้อป
            </button>

            {/* Premium */}
            <button
              className="hidden md:flex items-center gap-1.5 font-bold py-1 px-3.5 rounded-md text-[13px] transition"
              style={{ background: "linear-gradient(135deg,#c8a84b,#f0d080)", color: "#1a0a2e" }}
            >
              <Crown className="w-3.5 h-3.5" />ฟรีเปี่ยม
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-1 text-sm font-medium text-gray-200" style={{ background: "#1a0a2e" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 px-3 rounded hover:bg-white/10 hover:text-white transition flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.isNew && (
                  <span className="bg-red-600 text-white text-[9px] font-bold px-1 py-px rounded-sm">NEW</span>
                )}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
              <button className="flex-1 border border-gray-400 text-gray-200 font-medium py-1.5 rounded-md text-sm">เข้าสู่ระบบ</button>
              <button
                className="flex-1 flex items-center justify-center gap-1.5 font-bold py-1.5 rounded-md text-sm"
                style={{ background: "linear-gradient(135deg,#c8a84b,#f0d080)", color: "#1a0a2e" }}
              >
                <Crown className="w-3.5 h-3.5" /> ฟรีเปี่ยม
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── 3) App Download Strip ── */}
      {showBanner && (
        <div className="w-full hidden md:flex items-center justify-between px-4 md:px-6 xl:px-10 py-2" style={{ background: "#120820" }}>
          <span className="text-gray-300 text-xs">ดาวน์โหลด BUGABOO.TV ครบ จบในแอปเดียว</span>
          <div className="flex items-center gap-2">
            {/* App Store */}
            <a href="#" className="flex items-center gap-1.5 bg-black border border-gray-700 text-white text-[11px] font-medium px-3 py-1.5 rounded-lg hover:border-gray-500 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            {/* Google Play */}
            <a href="#" className="flex items-center gap-1.5 bg-black border border-gray-700 text-white text-[11px] font-medium px-3 py-1.5 rounded-lg hover:border-gray-500 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
              Google Play
            </a>
            {/* AppGallery */}
            <a href="#" className="flex items-center gap-1.5 bg-black border border-gray-700 text-white text-[11px] font-medium px-3 py-1.5 rounded-lg hover:border-gray-500 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              AppGallery
            </a>
          </div>
          <button
            className="p-1.5 hover:bg-white/10 rounded-full transition text-gray-400"
            onClick={() => setShowBanner(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
