"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a3c2a] text-white">

      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* About */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#c9a96e]">
                  <span className="font-serif text-[18px] font-bold text-[#1a3c2a]">HB</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[14px] font-bold tracking-[1px] text-white">HOTEL BOOKING</span>
                  <span className="text-[7px] tracking-[3px] text-white/60">ORIENTAL</span>
                </div>
              </div>
              <p className="text-[13px] leading-7 text-white/60">
                Experience the finest hospitality where timeless oriental elegance meets modern comfort. Your perfect stay awaits.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-[12px] font-bold tracking-[2px] text-[#c9a96e]">QUICK LINKS</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Rooms & Suites", href: "/rooms" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "News & Blog", href: "/news" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group flex items-center gap-2 text-[13px] text-white/60 hover:text-[#c9a96e] transition-colors">
                      <ChevronRight size={12} className="text-[#c9a96e]/50 group-hover:text-[#c9a96e]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-[12px] font-bold tracking-[2px] text-[#c9a96e]">CONTACT INFO</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#c9a96e]" />
                  <span className="text-[13px] leading-6 text-white/60">
                    123 Oriental Avenue<br />Bangkok, Thailand 10110
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-[#c9a96e]" />
                  <a href="tel:+01234345894" className="text-[13px] text-white/60 hover:text-[#c9a96e] transition-colors">
                    +01 234 345 894
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#c9a96e]" />
                  <a href="mailto:info@hotelbooking.com" className="text-[13px] text-white/60 hover:text-[#c9a96e] transition-colors">
                    info@hotelbooking.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="shrink-0 text-[#c9a96e]" />
                  <span className="text-[13px] text-white/60">24/7 Reception</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-6 text-[12px] font-bold tracking-[2px] text-[#c9a96e]">NEWSLETTER</h4>
              <p className="mb-4 text-[13px] leading-6 text-white/60">
                Subscribe to get updates on special offers and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 px-4 py-3 text-[13px] text-white placeholder-white/40 border border-white/10 focus:border-[#c9a96e] focus:outline-none transition-colors"
                />
                <button className="bg-[#c9a96e] px-5 py-3 text-[11px] font-bold tracking-[1px] text-[#1a3c2a] hover:bg-[#b8944a] transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[12px] text-white/40">
            &copy; 2026 Hotel Booking. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[12px] text-white/40 hover:text-[#c9a96e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] text-white/40 hover:text-[#c9a96e] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
