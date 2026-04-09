คำสั่ง:
"คุณคือ Senior Front-end Architect ที่เชี่ยวชาญการทำ Web Reverse Engineering ภารกิจ: ให้คุณเข้าไปวิเคราะห์โครงสร้างหน้าแรกของเว็บไซต์ https://www.bugaboo.tv/th/ อย่างละเอียด เพื่อสร้างเว็บโคลนด้วย Next.js 15 (App Router), TypeScript, และ Tailwind CSS ให้มีความเหมือน (Fidelity) สูงที่สุดทั้งในด้าน UI/UX และ Performance

ขั้นตอนการดำเนินงาน (Required Steps):

1. Structural Analysis (วิเคราะห์โครงสร้าง):

วิเคราะห์ Visual Hierarchy ของหน้าเว็บ ตั้งแต่ Navbar, Hero Slider ไปจนถึง Footer

ตรวจสอบระบบ Grid และ Spacing (Padding/Margin) ที่ใช้ในการจัดเรียง Content Cards

วิเคราะห์ Typography (ขนาด Font, น้ำหนักตัวอักษร) และ Color Palette (ค่าสี Hex ของพื้นหลัง, ปุ่ม และสถานะ Hover)

สังเกต Interaction เช่น การสไลด์ของ Top 10, เอฟเฟกต์การ Hover ที่หน้าปกละคร และการทำ Infinite Scroll หรือ Lazy Loading

2. Component Engineering (การสร้างส่วนประกอบ):

Navbar: ต้องมีลักษณะ Semi-transparent พร้อม Backdrop-blur และเมนูที่ตอบสนองแบบ Responsive

Top 10 Section: ต้องมีตัวเลขลำดับขนาดใหญ่แบบ 'Outlined' หรือ 'Gradient' วางซ้อนหลังภาพตัวอย่างหนัง (Thumbnail) ให้ตรงตามต้นฉบับ

Section Mapping: สร้างหน้าแรกโดยรวมส่วนประกอบดังนี้:

เนื้อหาแนะนำ (Hero), เมนูย่อย, ไฮไลท์แนะนำ, ละครช่อง 7HD (มาใหม่/ดราม่า), Short Series, BUGABOO ORIGINALS, หนัง/ซีรีส์, กีฬา, ข่าวล่าสุด, ข่าวยอดนิยม, แท็กนิยม, รายการวาไรตี และไลฟ์สไตล์

Footer: ต้องจัด Layout ให้เหมือนต้นฉบับเป๊ะ ทั้งการวางคอลัมน์ลิงก์และไอคอน Social Media

3. Senior Coding Standards:

ใช้ Clean Architecture แยก Components, Types, และ Constants ออกจากกัน

ใช้ Framer Motion สำหรับ Micro-interactions และ Carousel

ใช้ next/image เพื่อทำ Image Optimization (WebP, Priority Loading สำหรับ Hero)

ออกแบบให้เป็น Mobile-First และรองรับ Desktop ได้อย่างสมบูรณ์

4. Final Output:

แสดงโครงสร้างโฟลเดอร์ของโปรเจกต์

เขียนโค้ดไฟล์ page.tsx ที่รวบรวมทุก Section

เขียนโค้ด Component ที่มีความซับซ้อนสูง (เช่น TopTenSlider.tsx และ HeroBanner.tsx)

แนะนำวิธี Deploy บน Vercel เพื่อให้ได้ประสิทธิภาพสูงสุด"