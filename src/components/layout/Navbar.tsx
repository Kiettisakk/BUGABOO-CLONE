import Link from "next/link";
import { Search, Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent transition-all duration-300">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-red-600 font-black text-2xl tracking-tighter">
            BUGABOO<span className="text-white">.TV</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-200">
            <Link href="/" className="hover:text-white transition">หน้าแรก</Link>
            <Link href="/drama" className="hover:text-white transition">ละคร</Link>
            <Link href="/series" className="hover:text-white transition">ซีรีส์</Link>
            <Link href="/sports" className="hover:text-white transition">กีฬา</Link>
            <Link href="/news" className="hover:text-white transition">ข่าว</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-white">
          <button className="p-2 hover:bg-white/10 rounded-full transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition hidden md:block">
            <Bell className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition">
            <Menu className="w-5 h-5" />
          </button>
          <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded-full text-sm transition ml-2">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </nav>
  );
}
