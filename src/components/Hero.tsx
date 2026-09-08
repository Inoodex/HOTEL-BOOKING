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

export default function Hero(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[#1a3c2a] md:min-h-[calc(100vh-78px)]">

      {/* Background Images - Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
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

      {/* Left Teal Shape */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <path
            d="M0 0 L1200 0 L900 1080 L0 1080 Z"
            fill="#1a3c2a"
            fillOpacity="0.92"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-[1250px] items-center px-4 py-20 sm:px-6 md:min-h-[calc(100vh-78px)] lg:px-8">

        <div className="max-w-[650px]">

          {/* Main Heading */}
          <h1 className="font-serif text-[42px] font-medium leading-[1.05] tracking-[-1px] text-white sm:text-[58px] md:text-[72px] lg:text-[88px]">
            {slides[currentSlide].title}
            <br />

            <span className="italic text-white">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/80 sm:mt-8 sm:max-w-[560px] sm:text-[15px] sm:leading-8">
            {slides[currentSlide].desc}
          </p>

          {/* Contact Info */}
          <div className="mt-8 flex items-center gap-4 sm:mt-10">
            <div className="flex items-center justify-center h-14 w-14 bg-[#c9a96e] text-[#1a3c2a]">
              <span className="font-serif text-[28px] font-bold">知</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold tracking-[1px] text-white">
                Book Your Trip !
              </span>
              <Link href="tel:+01234345894" className="flex items-center gap-2 text-[18px] font-bold text-white hover:text-[#c9a96e] transition-colors">
                <Phone size={16} className="text-[#c9a96e]" />
                + 01 234 345 894
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Calendar */}
      <BookingCalendar />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-3 lg:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
          <ChevronDown size={15} className="text-white/70" />
        </div>
        <span className="text-[9px] font-medium uppercase tracking-[3px] text-white/70">
          Scroll Down
        </span>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8 z-10 hidden text-right lg:block">
        <span className="font-serif text-[13px] text-white/50">
          0{currentSlide + 1}
        </span>
        <div className="mt-2 ml-auto h-px w-12 bg-[#c9a96e]" />
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-[#c9a96e]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
