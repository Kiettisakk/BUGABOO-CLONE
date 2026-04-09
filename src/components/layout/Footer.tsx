import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16 mt-auto border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Social */}
          <div className="space-y-4 md:col-span-1">
            <div className="text-red-600 font-black text-3xl tracking-tighter">
              BUGABOO<span className="text-white">.TV</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm">
              แพลตฟอร์มวิดีโอสตรีมมิ่งที่รวบรวมความบันเทิงระดับพรีเมียมจากช่อง 7HD ละคร ซีรีส์ และรายการทีวีมากมาย
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">บริการของเรา</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">ละครช่อง 7HD</Link></li>
              <li><Link href="#" className="hover:text-white transition">รายการวาไรตี้</Link></li>
              <li><Link href="#" className="hover:text-white transition">ภาพยนตร์และซีรีส์</Link></li>
              <li><Link href="#" className="hover:text-white transition">ข่าวกีฬาและฟุตบอล</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">ติดต่อโฆษณา</Link></li>
              <li><Link href="#" className="hover:text-white transition">ร่วมงานกับเรา</Link></li>
              <li><Link href="#" className="hover:text-white transition">คำถามที่พบบ่อย (FAQ)</Link></li>
              <li><Link href="#" className="hover:text-white transition">แจ้งปัญหาการใช้งาน</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">นโยบายความเป็นส่วนตัว</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">เงื่อนไขการให้บริการ</Link></li>
              <li><Link href="#" className="hover:text-white transition">นโยบายคุกกี้</Link></li>
              <li><Link href="#" className="hover:text-white transition">การจัดการข้อมูลส่วนบุคคล</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col justify-center items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bugaboo.TV All rights reserved.</p>
          <p className="mt-1">พัฒนาโดย Ch7HD</p>
        </div>
      </div>
    </footer>
  );
}
