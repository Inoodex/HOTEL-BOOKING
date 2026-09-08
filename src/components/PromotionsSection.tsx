"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const promotions = [
  {
    duration: "One week",
    name: "Small Sea Room",
    price: 40,
    image: "/room/small room .jpg",
  },
  {
    duration: "Two weeks",
    name: "Family Suite",
    price: 56,
    image: "/room/family room .jpg",
  },
  {
    duration: "One month",
    name: "Apartments",
    price: 89,
    image: "/room/apartment.jpg",
  },
];

export default function PromotionsSection() {
  const promoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = promoRefs.current.filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const delay = Number(el.dataset.delay || "0") * 200;
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateX(0)";
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-gray-400">
              Best Summer Offers
            </span>
          </div>
          <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
            Check the
            <br />
            Promotions
          </h2>
          <p className="mt-5 max-w-[420px] text-[13px] leading-6 text-gray-500 sm:text-[14px] sm:leading-7">
            Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros.
          </p>
        </div>

        {/* Main Content: image left, promo list right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left - Main Image */}
          <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[450px]">
            <Image
              src="/room/luxury room.jpg"
              alt="Promotion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right - Promo List */}
          <div>
            <div className="space-y-6">
              {promotions.map((promo, index) => (
                <div
                  key={index}
                  ref={(el) => { promoRefs.current[index] = el; }}
                  data-delay={index}
                  className="group flex items-center gap-5"
                  style={{
                    opacity: 0,
                    transform: "translateX(40px)",
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}
                >
                  {/* Small Image */}
                  <div className="relative h-[80px] w-[100px] shrink-0 overflow-hidden">
                    <Image
                      src={promo.image}
                      alt={promo.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="100px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] text-gray-400">
                      {promo.duration}
                    </span>
                    <span className="block mt-1 font-serif text-[18px] text-[#1a1a1a] truncate">
                      {promo.name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="shrink-0 bg-[#245d55] px-4 py-2">
                    <span className="text-[12px] font-bold text-white">
                      $ {promo.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-6 border border-gray-100 bg-white p-6 sm:p-8">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image
                src="/room/double room.jpg"
                alt="Reception"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-[20px] font-medium text-[#1a1a1a] sm:text-[22px]">
                Reception 24h / 7 Days
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 border border-gray-100 bg-white p-6 sm:p-8">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image
                src="/room/family room .jpg"
                alt="Reservation"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-[20px] font-medium text-[#1a1a1a] sm:text-[22px]">
                Reservation Online
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
