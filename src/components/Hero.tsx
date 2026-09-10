"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Phone } from "lucide-react";
import BookingCalendar from "./BookingCalendar";

const slides = [
  {
    src: "/room/double room.jpg",
    alt: "Luxury Hotel Room",
    title: "Explore the",
    highlight: "World Now !",
    desc: "Looking for your dream vacation destination but don't know where to start? With the help of our hotel agents, you can plan the trip of a lifetime with ease.",
  },
  {
    src: "/room/luxury room.jpg",
    alt: "Hotel Pool View",
    title: "Experience the",
    highlight: "Perfect Stay !",
    desc: "Immerse yourself in world-class amenities and breathtaking views. Every moment is crafted to perfection for your ultimate comfort and relaxation.",
  },
  {
    src: "/room/family room .jpg",
    alt: "Hotel Lobby",
    title: "Discover the",
    highlight: "Finest Luxury !",
    desc: "Create lasting memories in our stunning spaces. From elegant interiors to exceptional service, every detail is designed with you in mind.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-w-0 min-h-[calc(100svh-108px)] flex-col justify-between overflow-hidden bg-[#1a3c2a] md:min-h-[calc(100svh-118px)]">

      {/* Background Images - Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Background Teal Polygon Overlay for Desktop */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <svg className="h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <path
            d="M0 0 L1200 0 L900 1080 L0 1080 Z"
            fill="#1a3c2a"
            fillOpacity="0.92"
          />
        </svg>
      </div>

      {/* Mobile/Tablet Gradient Overlay for high legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a3c2a]/95 via-[#1a3c2a]/85 to-[#1a3c2a]/95 md:hidden" />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1250px] flex-1 flex-col justify-center px-4 pt-20 pb-6 sm:px-6 sm:pt-28 sm:pb-10 md:pt-28 md:pb-16 lg:px-8">
        <div className="max-w-[650px]">

          {/* Main Heading */}
          <h1 className="font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.5px] text-white sm:text-[52px] md:text-[72px] lg:text-[86px]">
            {slides[currentSlide].title}
            <br />
            <span className="italic text-white">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[380px] text-[13px] leading-6 text-white/80 sm:mt-6 sm:max-w-[540px] sm:text-[15px] sm:leading-8">
            {slides[currentSlide].desc}
          </p>

          {/* Contact Info & Mobile Slide Dots */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 sm:mt-8">
            {/* Phone Contact */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#c9a96e] text-[#1a3c2a] shadow-md sm:h-14 sm:w-14">
                <span className="font-serif text-[20px] font-bold sm:text-[28px]">知</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[1.5px] text-[#c9a96e] sm:text-[11px]">
                  Book Your Trip !
                </span>
                <Link
                  href="tel:+01234345894"
                  className="flex items-center gap-1.5 text-[14px] font-bold text-white transition-colors hover:text-[#c9a96e] sm:gap-2 sm:text-[18px]"
                >
                  <Phone size={15} className="text-[#c9a96e]" />
                  <span>+ 01 234 345 894</span>
                </Link>
              </div>
            </div>

            {/* Slide Dots for Mobile / Tablet */}
            <div className="flex items-center gap-2 lg:hidden">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-7 bg-[#c9a96e]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Desktop Slide Dots (Centered Bottom) */}
      <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#c9a96e]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-28 left-8 z-10 hidden items-center gap-3 xl:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
          <ChevronDown size={15} className="text-white/70" />
        </div>
        <span className="text-[9px] font-medium uppercase tracking-[3px] text-white/70">
          Scroll Down
        </span>
      </div>

      {/* Slide Number (Desktop Only) */}
      <div className="absolute bottom-28 right-8 z-10 hidden text-right xl:block">
        <span className="font-serif text-[14px] text-white/60">
          0{currentSlide + 1} / 0{slides.length}
        </span>
        <div className="mt-1.5 ml-auto h-px w-12 bg-[#c9a96e]" />
      </div>

      {/* Booking Calendar Form at Bottom */}
      <div className="relative z-20 w-full">
        <BookingCalendar />
      </div>

    </section>
  );
}
