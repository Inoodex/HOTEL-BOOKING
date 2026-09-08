"use client";

import Image from "next/image";

const facilities = [
  {
    title: "Free Wi-Fi",
    desc: "High-speed internet access available throughout the hotel.",
    image: "/room/double room.jpg",
  },
  {
    title: "Free Parking",
    desc: "Complimentary parking for all hotel guests.",
    image: "/room/family room .jpg",
  },
  {
    title: "Restaurant",
    desc: "Fine dining with local and international cuisine.",
    image: "/room/luxury room.jpg",
  },
  {
    title: "Swimming Pool",
    desc: "Indoor and outdoor pools for relaxation.",
    image: "/room/apartment.jpg",
  },
  {
    title: "Fitness Center",
    desc: "State-of-the-art gym with personal trainers.",
    image: "/room/room with view .jpg",
  },
  {
    title: "24/7 Reception",
    desc: "Round the clock front desk and concierge service.",
    image: "/room/small room .jpg",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
              Our Facilities
            </span>
            <span className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
            Hotel Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group overflow-hidden border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-[18px] font-medium text-[#1a1a1a]">
                  {facility.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-gray-500">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
