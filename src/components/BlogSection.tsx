"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[4px] text-gray-400">
            Hotel News &amp; Event
          </span>
          <h2 className="mt-3 font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
            Stay Tuned
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[13px] leading-7 text-gray-500 sm:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a,
            scelerisque sollicitudin arcu.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 - Text Card */}
          <div className="flex flex-col">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/room/double room.jpg"
                alt="New Website"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1 border border-t-0 border-gray-100 p-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-[2px] bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                  March 14, 2022
                </span>
              </div>
              <h3 className="font-serif text-[22px] font-medium text-[#1a1a1a]">
                New Website
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-gray-500">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
              </p>
              <Link
                href="/news"
                className="mt-6 inline-block border border-[#245d55] bg-[#245d55] px-6 py-3 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Card 2 - Quote Card */}
          <div className="flex flex-col">
            <div className="flex flex-1 items-center justify-center bg-[#245d55] p-10 text-center">
              <div>
                <h3 className="font-serif text-[24px] font-medium leading-[1.3] text-white sm:text-[26px]">
                  Follow our Resort Luxury Hotels
                </h3>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[3px] text-white/70">
                  John Doe
                </p>
                <div className="mt-4 text-[28px] text-[#c9a96e]">&ldquo;</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Image Overlay Card */}
          <div className="relative h-[280px] overflow-hidden">
            <Image
              src="/room/luxury room.jpg"
              alt="Relax Zone"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="mb-2 flex items-center gap-3">
                <span className="h-4 w-[2px] bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/80">
                  March 14, 2022
                </span>
              </div>
              <h3 className="font-serif text-[24px] font-medium text-white">
                Relax Zone
              </h3>
            </div>
          </div>

          {/* Card 4 - Link Card */}
          <div className="flex items-center justify-center bg-[#245d55] p-10 text-center">
            <div>
              <p className="text-[16px] font-medium text-white">
                www.nicdark.com
              </p>
              <div className="mt-4 text-[24px] text-white/40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 5 - Image Overlay Card */}
          <div className="relative h-[280px] overflow-hidden">
            <Image
              src="/room/room with view .jpg"
              alt="Daily Walk"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="mb-2 flex items-center gap-3">
                <span className="h-4 w-[2px] bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/80">
                  March 14, 2022
                </span>
              </div>
              <h3 className="font-serif text-[24px] font-medium text-white">
                Daily Walk
              </h3>
            </div>
          </div>

          {/* Card 6 - Text Card */}
          <div className="flex flex-col">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/room/apartment.jpg"
                alt="Around Us"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1 border border-t-0 border-gray-100 p-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-4 w-[2px] bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                  March 14, 2022
                </span>
              </div>
              <h3 className="font-serif text-[22px] font-medium text-[#1a1a1a]">
                Around Us
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-gray-500">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci utet.
              </p>
              <Link
                href="/news"
                className="mt-6 inline-block border border-[#245d55] bg-[#245d55] px-6 py-3 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
              >
                READ MORE
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
