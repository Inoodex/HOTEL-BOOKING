"use client";

import Link from "next/link";
import { Phone, User } from "lucide-react";
import { useLang } from "@/components/providers/LangProvider";

export default function Topbar() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="bg-[#245d55] text-white w-full">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="hidden items-center gap-4 text-[12px] md:flex lg:gap-6">
          <Link href="tel:+01234345894" className="flex items-center gap-1.5 hover:text-[#c9a96e] transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">{t("callUs")}: +01 234 345 894</span>
          </Link>
          <div className="flex items-center gap-2 ml-2">
            {(["US", "IT", "ES"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code === "US" ? "en" : code === "IT" ? "it" : "es")}
                className={`cursor-pointer transition-colors ${
                  (code === "US" && lang === "en") ||
                  (code === "IT" && lang === "it") ||
                  (code === "ES" && lang === "es")
                    ? "text-[#c9a96e] font-bold"
                    : "hover:text-[#c9a96e]"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Only language + login */}
        <div className="flex items-center justify-between w-full text-[12px] md:hidden">
          <div className="flex items-center gap-2">
            {(["US", "IT", "ES"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code === "US" ? "en" : code === "IT" ? "it" : "es")}
                className={`cursor-pointer transition-colors ${
                  (code === "US" && lang === "en") ||
                  (code === "IT" && lang === "it") ||
                  (code === "ES" && lang === "es")
                    ? "text-[#c9a96e] font-bold"
                    : "hover:text-[#c9a96e]"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <Link href="/login" className="flex items-center gap-1 hover:text-[#c9a96e] transition-colors">
            <User size={14} />
            {t("login")}
          </Link>
        </div>

        {/* Right — Marquee Offer */}
        <div className="hidden md:block ml-auto overflow-hidden max-w-[350px] lg:max-w-[450px]">
          <div className="animate-marquee whitespace-nowrap">
            {["Book 3+ Nights & Get 15% Off", "Free Airport Shuttle for All Guests", "Spa Package Starting at $89", "Early Bird Special — Book 30 Days Ahead & Save 20%"].map((offer, i) => (
              <span key={i} className="mx-6 text-[11px] tracking-[1px] text-[#c9a96e]">
                {offer}
                <span className="mx-4 text-white/30">|</span>
              </span>
            ))}
            {["Book 3+ Nights & Get 15% Off", "Free Airport Shuttle for All Guests", "Spa Package Starting at $89", "Early Bird Special — Book 30 Days Ahead & Save 20%"].map((offer, i) => (
              <span key={`dup-${i}`} className="mx-6 text-[11px] tracking-[1px] text-[#c9a96e]">
                {offer}
                <span className="mx-4 text-white/30">|</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
