import Link from "next/link";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#0B0D17" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

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
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><FacebookIcon /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><TwitterIcon /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><InstagramIcon /></a>
              <a href="#" className="p-2 bg-gray-800/50 hover:bg-red-600 text-white rounded-full transition"><YoutubeIcon /></a>
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
