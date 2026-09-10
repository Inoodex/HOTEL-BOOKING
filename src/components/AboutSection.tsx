"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src="/images/hero-1.avif"
                alt="Hotel Resort"
                width={500}
                height={600}
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-[#245d55] px-6 py-5 sm:px-8 sm:py-6">
              <span className="block text-[36px] sm:text-[44px] font-bold leading-none text-white">+76</span>
              <span className="block text-[10px] sm:text-[11px] font-bold tracking-[3px] text-white/80 mt-1">BIG SUITES</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">

            {/* Small Heading */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
                Hotel Bayview
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
              Relax in our Hotel
              <br />
              Resort
            </h2>

            {/* Description - Two Columns */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              <p className="text-[13px] leading-7 text-gray-500">
                Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.
              </p>
              <p className="text-[13px] leading-7 text-gray-500">
                Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.
              </p>
              <p className="text-[13px] leading-7 text-gray-500">
                Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.
              </p>
              <p className="text-[13px] leading-7 text-gray-500">
                Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 lg:mt-10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
                  <Image
                    src="/images/hero-2.avif"
                    alt="Andrew Stuart"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">Andrew Stuart</span>
                  <span className="block text-[11px] text-gray-400 sm:text-[12px]">Hotel Manager</span>
                </div>
              </div>

              {/* Signature */}
              <div className="sm:ml-auto">
                <span className="font-serif italic text-[22px] text-gray-300 sm:text-[28px]">
                  Andrew Stuart
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
