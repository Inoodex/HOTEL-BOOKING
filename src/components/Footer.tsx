"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

const socialIcons = [
  { name: "Instagram", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { name: "Twitter", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "Facebook", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: "Pinterest", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
  { name: "YouTube", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#1a1a1a]">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Phone Support */}
          <div>
            <h3 className="text-[16px] font-medium tracking-wide text-white">Phone Support</h3>
            <p className="mt-2 text-[11px] font-bold tracking-[3px] text-white/40">24 HOURS A DAY</p>
            <p className="mt-4 text-[20px] font-light tracking-wide text-white">+01 234 345 894</p>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-[16px] font-medium tracking-wide text-white">Connect With Us</h3>
            <p className="mt-2 text-[11px] font-bold tracking-[3px] text-white/40">SOCIAL MEDIA CHANNELS</p>
            <div className="mt-5 flex items-center gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="text-white/50 transition-colors hover:text-white"
                  aria-label={icon.name}
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[16px] font-medium tracking-wide text-white">Newsletter</h3>
            <p className="mt-2 text-[11px] font-bold tracking-[3px] text-white/40">SIGN UP FOR SPECIAL OFFERS</p>
            <div className="mt-5 flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert your email"
                className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-[13px] text-white placeholder-white/30 focus:border-white/50 focus:outline-none"
              />
              <button className="bg-[#245d55] px-6 py-3 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] text-white/50 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <p className="text-[11px] text-white/30">
            &copy; 2026 Hotel Booking. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
