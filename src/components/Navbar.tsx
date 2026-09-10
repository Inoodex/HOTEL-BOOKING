"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Topbar from "./Topbar";
import { useLang } from "@/components/providers/LangProvider";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Dining", href: "/dining" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const roomTypes = [
  { name: "Double Room", href: "/rooms/double" },
  { name: "Family Room", href: "/rooms/family" },
  { name: "Luxury Room", href: "/rooms/luxury" },
  { name: "Apartment", href: "/rooms/apartment" },
  { name: "Room with View", href: "/rooms/view" },
  { name: "Small Room", href: "/rooms/small" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isMobileRoomsOpen, setIsMobileRoomsOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMobileMenuWheel = (e: React.WheelEvent) => {
    const target = e.currentTarget;
    const isAtTop = target.scrollTop === 0;
    const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight;

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      return;
    }
    e.stopPropagation();
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Topbar />

      <div className="h-[2px] bg-[#c9a96e]" />

      <nav className="h-[70px] border-b border-[#245d55]/20 bg-white md:h-[78px] animate-[slideDown_0.6s_ease-out]">
        <div className="mx-auto flex h-full max-w-[1250px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="group flex items-center flex-shrink-0">
            <div className="flex items-center">
              <div className="relative mr-2 flex h-[35px] w-[42px] items-center justify-center md:mr-4 md:h-[45px] md:w-[55px]">
                <span className="absolute left-1/2 h-[32px] w-[1px] -translate-x-1/2 bg-[#c9a96e] md:h-[42px]" />
                <span className="font-serif text-[24px] leading-none tracking-[-5px] text-[#245d55] md:text-[31px]">H</span>
                <span className="ml-[-2px] font-serif text-[24px] leading-none text-[#245d55] md:text-[31px]">B</span>
              </div>
              <div className="mr-3 h-[35px] w-px bg-[#c9a96e]/60 md:mr-6 md:h-[43px]" />
              <div className="flex flex-col">
                <span className="text-[15px] font-medium leading-none tracking-[1.5px] text-[#183f3a] md:text-[22px] md:tracking-[2px] font-serif">
                  HOTEL BOOKING
                </span>
                <div className="mt-[3px] flex items-center justify-center gap-2 md:mt-[5px] md:gap-3">
                  <span className="h-px w-6 bg-[#c9a96e] md:w-9" />
                  <span className="text-[6px] font-medium tracking-[4px] text-[#245d55] md:text-[8px] md:tracking-[6px]">ORIENTAL</span>
                  <span className="h-px w-6 bg-[#c9a96e] md:w-9" />
                </div>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center xl:flex">
            <div className="flex items-center gap-[30px]">

              <Link href="/" className="group relative py-3 text-[14px] font-medium tracking-[0.3px] text-[#245d55] transition-colors duration-300">
                {t("home")}
                <span className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-[#245d55]" />
              </Link>

              {/* Rooms Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsRoomsOpen(true)}
                onMouseLeave={() => setIsRoomsOpen(false)}
              >
                <Link
                  href="/rooms"
                  className="group flex items-center gap-1 py-3 text-[14px] font-medium tracking-[0.3px] text-[#292929] transition-colors duration-300 hover:text-[#245d55]"
                >
                  {t("rooms")}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isRoomsOpen ? "rotate-180" : ""}`} />
                </Link>

                <div
                  className={`absolute left-0 top-full mt-6 w-[220px] border-t-2 border-[#245d55] bg-white shadow-lg transition-all duration-300 ${
                    isRoomsOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="py-2">
                    {roomTypes.map((room) => (
                      <Link key={room.name} href={room.href} className="block px-5 py-3 text-[13px] font-medium text-[#292929] transition-colors duration-200 hover:bg-[#245d55]/5 hover:text-[#245d55]">
                        {room.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="group relative py-3 text-[14px] font-medium tracking-[0.3px] text-[#292929] transition-colors duration-300 hover:text-[#245d55]">
                  {item.name}
                  <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 bg-[#245d55] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="mx-6 h-[35px] w-px bg-[#c9a96e]/50 xl:mx-8" />

            <Link
              href="/booking"
              className="hidden border border-[#245d55] bg-[#245d55] px-6 py-2.5 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a] xl:block"
            >
              {t("bookNow")}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#245d55] xl:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          onWheel={handleMobileMenuWheel}
          onTouchMove={(e) => e.stopPropagation()}
          className={`border-b border-[#245d55]/10 bg-white transition-all duration-300 xl:hidden ${
            isOpen ? "h-[calc(100vh-110px)] overflow-y-auto mobile-menu-scroll" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="mx-auto max-w-[1250px] px-4 pb-6 pt-3 sm:px-6">
          
            <Link href="/" onClick={() => setIsOpen(false)} className="block border-b border-gray-100 py-4 text-sm font-semibold tracking-wide text-[#245d55]">
              {t("home")}
            </Link>

            {/* Mobile Rooms Dropdown */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setIsMobileRoomsOpen(!isMobileRoomsOpen)}
                className="flex w-full items-center justify-between py-4 text-sm tracking-wide text-gray-700"
              >
                <span>{t("rooms")}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileRoomsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileRoomsOpen ? "max-h-[300px] pb-2" : "max-h-0"}`}>
                {roomTypes.map((room) => (
                  <Link key={room.name} href={room.href} onClick={() => setIsOpen(false)} className="block py-2 pl-4 text-sm text-gray-500 hover:text-[#245d55]">
                    {room.name}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block border-b border-gray-100 py-4 text-sm tracking-wide text-gray-700 hover:text-[#245d55]">
                {t(item.name === "About Us" ? "aboutUs" : item.name.toLowerCase())}
              </Link>
            ))}
            

            <Link href="/booking" onClick={() => setIsOpen(false)} className="mt-5 flex items-center justify-center gap-3 bg-[#245d55] py-3 text-xs font-bold tracking-[1.5px] text-white">
              {t("bookNow")}
              <ArrowRight size={16} />
            </Link>

            {/* Mobile: Extra links */}
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-500">
              <Link href="/review" onClick={() => setIsOpen(false)} className="hover:text-[#245d55]">Add Review</Link>
          
              <Link href="/account" onClick={() => setIsOpen(false)} className="hover:text-[#245d55]">My Account</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
