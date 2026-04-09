import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "BUGABOO.TV | ดูทีวีออนไลน์ ละครย้อนหลัง ซีรีส์ใหม่ฟรี",
  description: "Bugaboo.TV เว็บไซต์รวบรวมความบันเทิง ละครย้อนหลัง ละครใหม่ล่าสุด ซีรีส์ และรายการวาไรตี้จากช่อง 7HD วิดีโอสตรีมมิ่งที่ครบครันที่สุด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} font-sans`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-white bg-[#0B0D17]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
