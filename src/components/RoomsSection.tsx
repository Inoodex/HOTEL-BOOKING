"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Maximize } from "lucide-react";

const rooms = [
  {
    name: "Double Room",
    guests: 2,
    area: "23 FT",
    price: 25,
    image: "/room/double room.jpg",
    href: "/rooms/double",
  },
  {
    name: "Family Room",
    guests: 3,
    area: "30 FT",
    price: 30,
    image: "/room/family room .jpg",
    href: "/rooms/family",
  },
  {
    name: "Luxury Room",
    guests: 2,
    area: "50 FT",
    price: 67,
    image: "/room/luxury room.jpg",
    href: "/rooms/luxury",
  },
  {
    name: "Apartment",
    guests: 5,
    area: "70 FT",
    price: 56,
    image: "/room/apartment.jpg",
    href: "/rooms/apartment",
  },
  {
    name: "Room with View",
    guests: 4,
    area: "40 FT",
    price: 76,
    image: "/room/room with view .jpg",
    href: "/rooms/view",
  },
  {
    name: "Small Room",
    guests: 1,
    area: "15 FT",
    price: 56,
    image: "/room/small room .jpg",
    href: "/rooms/small",
  },
];

export default function RoomsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
              Our Rooms
            </span>
            <span className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
            Hotel Rooms &amp; Suites
          </h2>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Link
              key={index}
              href={room.href}
              className="group relative block overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden sm:h-[350px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Price Badge */}
                <div className="absolute right-4 top-4 bg-[#245d55] px-4 py-2">
                  <span className="text-[11px] font-bold tracking-[1px] text-white">
                    FROM {room.price} $
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="mb-2 font-serif text-[22px] font-medium text-white">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-white/70" />
                      <span className="text-[11px] font-medium tracking-[1px] text-white/80">
                        {room.guests} GUESTS
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize size={14} className="text-white/70" />
                      <span className="text-[11px] font-medium tracking-[1px] text-white/80">
                        {room.area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
