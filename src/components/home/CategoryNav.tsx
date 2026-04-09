import Image from "next/image";

const categories = [
  { id: 1, name: "มาใหม่", icon: "https://picsum.photos/seed/cat1/200/200" },
  { id: 2, name: "ละคร", icon: "https://picsum.photos/seed/cat2/200/200" },
  { id: 3, name: "ซีรีส์", icon: "https://picsum.photos/seed/cat3/200/200" },
  { id: 4, name: "รายการทีวี", icon: "https://picsum.photos/seed/cat4/200/200" },
  { id: 5, name: "กีฬา", icon: "https://picsum.photos/seed/cat5/200/200" },
  { id: 6, name: "ข่าว", icon: "https://picsum.photos/seed/cat6/200/200" },
  { id: 7, name: "มิวสิค", icon: "https://picsum.photos/seed/cat7/200/200" },
  { id: 8, name: "ตลก", icon: "https://picsum.photos/seed/cat8/200/200" },
];

export default function CategoryNav() {
  return (
    <section className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex gap-6 md:gap-10 min-w-max px-2">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-red-500 transition-all duration-300">
              <Image 
                src={cat.icon} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
