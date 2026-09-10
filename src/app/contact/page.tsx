"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main>

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <Image
          src="/room/room with view .jpg"
          alt="Contact"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Get In Touch
            </span>
            <h1 className="mt-3 font-serif text-[42px] font-medium text-white sm:text-[52px] lg:text-[60px]">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            {/* Reception Always Open */}
            <div className="flex items-start gap-5 border border-gray-100 p-5 sm:gap-6 sm:p-8">
              <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/room/double room.jpg"
                  alt="Reception"
                  fill
                  className="object-cover"
                  sizes="90px"
                />
              </div>
              <div>
                <h3 className="font-serif text-[22px] font-medium text-[#1a1a1a]">
                  Reception Always Open
                </h3>
                <p className="mt-3 text-[13px] leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* Online Reservations */}
            <div className="flex items-start gap-5 border border-gray-100 p-5 sm:gap-6 sm:p-8">
              <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/room/luxury room.jpg"
                  alt="Reservations"
                  fill
                  className="object-cover"
                  sizes="90px"
                />
              </div>
              <div>
                <h3 className="font-serif text-[22px] font-medium text-[#1a1a1a]">
                  Online Reservations
                </h3>
                <p className="mt-3 text-[13px] leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Left - Text */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
                  Contact Us
                </span>
              </div>
              <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[48px]">
                Get In Touch
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim pulvinar. Sed d at gravida.
              </p>
              <Link
                href="/rooms"
                className="mt-8 inline-block bg-[#245d55] px-8 py-3 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
              >
                VIEW PRICES
              </Link>
            </div>

            {/* Right - Form */}
            <div>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-200 px-5 py-3.5 text-[13px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#245d55] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-200 px-5 py-3.5 text-[13px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#245d55] focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full resize-none border border-gray-200 px-5 py-3.5 text-[13px] text-[#1a1a1a] placeholder-gray-400 focus:border-[#245d55] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] py-4 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#333]"
                >
                  SEND
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map + Hotel Info */}
      <section className="relative h-[450px]">
        {/* Map Placeholder */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Hotel Info Overlay */}
        <div className="absolute left-1/2 top-1/2 z-10 w-[calc(100%-2rem)] max-w-[380px] -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] p-6 text-white shadow-xl sm:p-8">
          <h3 className="font-serif text-[24px] font-medium">Hotel Info</h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#c9a96e]" />
              <span className="text-[13px] leading-6 text-white/80">
                111 8th Ave, New York U.S.A.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#c9a96e]" />
              <a href="tel:+12025550153" className="text-[13px] text-white/80 hover:text-[#c9a96e] transition-colors">
                Ph +1-202-555-0153
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-[#c9a96e]" />
              <a href="mailto:info@hotel.com" className="text-[13px] text-white/80 hover:text-[#c9a96e] transition-colors">
                info@hotel.com
              </a>
            </div>
          </div>

          <Link
            href="tel:+12025550153"
            className="mt-6 block w-full border border-white bg-white py-3 text-center text-[10px] font-bold tracking-[2px] text-[#1a1a1a] transition-colors hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white"
          >
            CONTACT US
          </Link>
        </div>
      </section>

    </main>
  );
}
