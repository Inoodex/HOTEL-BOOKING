"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Maximize } from "lucide-react";
import { rooms } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <main>

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <Image
          src="/room/luxury room.jpg"
          alt="Our Rooms"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Accommodation
            </span>
            <h1 className="mt-3 font-serif text-[42px] font-medium text-white sm:text-[52px] lg:text-[60px]">
              Our Rooms
            </h1>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group relative block overflow-hidden"
              >
                <div className="relative h-[300px] overflow-hidden sm:h-[350px]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute right-4 top-4 bg-[#245d55] px-4 py-2">
                    <span className="text-[11px] font-bold tracking-[1px] text-white">
                      FROM {room.price} $
                    </span>
                  </div>
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

    </main>
  );
}
