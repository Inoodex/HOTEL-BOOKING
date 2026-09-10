"use client";

import { Clock, Leaf, Award, Utensils, Wine, Coffee } from "lucide-react";

const menuHighlights = [
  {
    title: "Oriental Breakfast Buffet",
    time: "6:30 AM – 10:30 AM",
    description: "Start your day with a lavish spread of fresh tropical fruits, artisan pastries, Asian specialties, and international favorites.",
    price: "$35",
    image: "/room/luxury room.jpg",
  },
  {
    title: "Lunch & All-Day Dining",
    time: "11:00 AM – 10:00 PM",
    description: "A curated menu featuring authentic Thai cuisine, Western classics, and fusion dishes crafted by our award-winning chefs.",
    price: "$45",
    image: "/room/family room .jpg",
  },
  {
    title: "Premium Dinner Experience",
    time: "6:00 PM – 11:00 PM",
    description: "An elegant evening of fine dining with a seven-course tasting menu, paired with selections from our extensive wine cellar.",
    price: "$85",
    image: "/room/double room.jpg",
  },
];

const features = [
  { icon: <Utensils size={24} />, title: "Award-Winning Chefs", desc: "Our culinary team brings Michelin-level expertise to every dish." },
  { icon: <Leaf size={24} />, title: "Farm-to-Table Fresh", desc: "Locally sourced ingredients for authentic, sustainable flavors." },
  { icon: <Award size={24} />, title: "Curated Wine List", desc: "Over 200 labels from world-renowned vineyards." },
  { icon: <Coffee size={24} />, title: "Artisan Cocktails", desc: "Handcrafted drinks using fresh herbs and premium spirits." },
  { icon: <Wine size={24} />, title: "Private Dining", desc: "Exclusive spaces for intimate gatherings and celebrations." },
  { icon: <Clock size={24} />, title: "24/7 Room Service", desc: "Gourmet dining delivered to your room around the clock." },
];

const cuisines = [
  { name: "Thai", desc: "Authentic local flavors with traditional recipes passed down through generations." },
  { name: "Japanese", desc: "Fresh sushi, sashimi, and teppanyaki prepared with precision." },
  { name: "Italian", desc: "Handmade pasta, wood-fired pizzas, and classic risottos." },
  { name: "International", desc: "A global culinary journey with dishes from every continent." },
];

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <img
          src="/room/luxury room.jpg"
          alt="Fine Dining"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] tracking-[4px] text-white/60 uppercase">Our restaurant</p>
          <h1 className="mt-3 font-serif text-[36px] font-medium text-white sm:text-[44px] lg:text-[52px]">
            Dining
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-[1250px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">A Culinary Journey</span>
            </div>
            <h2 className="mt-4 font-serif text-[36px] font-medium text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
              Where Flavor Meets<br />Elegance
            </h2>
            <p className="mt-6 max-w-[500px] text-[14px] leading-[28px] text-gray-500">
              At Hotel Booking Oriental, dining is not just a meal — it&apos;s an experience. Our restaurants blend traditional oriental ambiance with contemporary culinary artistry, offering a feast for both the palate and the soul.
            </p>
            <p className="mt-4 max-w-[500px] text-[14px] leading-[28px] text-gray-500">
              From sunrise breakfasts to candlelit dinners, every dish tells a story of passion, freshness, and craftsmanship.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden sm:h-[500px]">
            <img
              src="/room/apartment.jpg"
              alt="Restaurant Interior"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Why Dine With Us</span>
            <div className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="mt-4 text-center font-serif text-[36px] font-medium text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
            An Unforgettable Experience
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="group rounded border border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:border-[#245d55]/20 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#245d55]/10 text-[#245d55] transition-colors duration-300 group-hover:bg-[#245d55] group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-serif text-[18px] font-medium text-[#1a1a1a]">{f.title}</h3>
                <p className="mt-3 text-[13px] leading-[22px] text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Our Menu</span>
            <div className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="mt-4 text-center font-serif text-[36px] font-medium text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
            Menu Highlights
          </h2>

          <div className="mt-14 space-y-10">
            {menuHighlights.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-6 overflow-hidden rounded border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg sm:flex-row ${
                  i % 2 !== 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-[250px] w-full shrink-0 overflow-hidden sm:h-[300px] sm:w-[45%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-2 text-[12px] text-[#245d55]">
                    <Clock size={14} />
                    <span>{item.time}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-[22px] font-medium text-[#1a1a1a] sm:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[26px] text-gray-500">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-[28px] font-medium text-[#245d55]">{item.price}</span>
                    <span className="text-[12px] text-gray-400">/ person</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines */}
      <section className="bg-[#1a3c2a] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold tracking-[4px] text-[#c9a96e] uppercase">World Flavors</span>
            <div className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="mt-4 text-center font-serif text-[36px] font-medium text-white sm:text-[42px] lg:text-[48px]">
            Explore Our Cuisines
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cuisines.map((c, i) => (
              <div
                key={i}
                className="group rounded border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#c9a96e]/40 hover:bg-white/10"
              >
                <h3 className="font-serif text-[22px] font-medium text-[#c9a96e]">{c.name}</h3>
                <p className="mt-3 text-[13px] leading-[22px] text-white/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[350px] overflow-hidden sm:h-[450px]">
              <img
                src="/room/room with view .jpg"
                alt="Reserve a Table"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Reservations</span>
              </div>
              <h2 className="mt-4 font-serif text-[36px] font-medium text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
                Reserve Your<br />Table Today
              </h2>
              <p className="mt-6 max-w-[500px] text-[14px] leading-[28px] text-gray-500">
                Whether it&apos;s a romantic dinner for two, a family celebration, or a business luncheon, our team ensures every detail is perfect.
              </p>
              <a
                href="/booking"
                className="mt-8 inline-block bg-[#245d55] px-8 py-4 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
              >
                BOOK A TABLE
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
