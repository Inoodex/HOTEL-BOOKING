"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, Check } from "lucide-react";
import { rooms } from "@/data/rooms";
import { useParams } from "next/navigation";

export default function RoomDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return (
      <main className="bg-white py-32 text-center">
        <h1 className="font-serif text-[36px] text-[#1a1a1a]">Room Not Found</h1>
      
      </main>
    );
  }

  return (
    <main>

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Room Detail
            </span>
            <h1 className="mt-3 font-serif text-[42px] font-medium text-white sm:text-[52px] lg:text-[60px]">
              {room.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Room Detail */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

          

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Image */}
            <div className="relative h-[350px] overflow-hidden sm:h-[450px]">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-[32px] font-medium text-[#1a1a1a] sm:text-[36px]">
                {room.name}
              </h2>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[16px] text-gray-400">$</span>
                <span className="font-serif text-[42px] font-medium text-[#245d55]">
                  {room.price}
                </span>
                <span className="text-[14px] text-gray-400">/ night</span>
              </div>

              {/* Info */}
              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-400" />
                  <span className="text-[13px] text-gray-500">{room.guests} Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize size={18} className="text-gray-400" />
                  <span className="text-[13px] text-gray-500">{room.area}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-[14px] leading-7 text-gray-500">
                {room.description}
              </p>

              {/* Amenities */}
              <div className="mt-8">
                <h3 className="mb-4 font-serif text-[18px] font-medium text-[#1a1a1a]">
                  Amenities
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check size={16} className="text-[#245d55]" />
                      <span className="text-[13px] text-gray-500">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/booking"
                  className="inline-block bg-[#245d55] px-8 py-3 text-center text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
                >
                  BOOK NOW
                </Link>
                
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
