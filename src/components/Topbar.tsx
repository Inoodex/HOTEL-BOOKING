"use client";

import Link from "next/link";
import { CreditCard, FileCheck, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-[#245d55] text-white w-full">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="hidden items-center gap-4 text-[12px] md:flex lg:gap-6">
          <Link href="/payment" className="flex items-center gap-1.5 hover:text-[#c9a96e] transition-colors">
            <CreditCard size={14} />
            <span className="hidden lg:inline">Payment Options</span>
          </Link>
          <Link href="/terms" className="flex items-center gap-1.5 hover:text-[#c9a96e] transition-colors">
            <FileCheck size={14} />
            <span className="hidden lg:inline">Terms Conditions</span>
          </Link>
          <div className="flex items-center gap-2 ml-2">
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">US</span>
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">IT</span>
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">ES</span>
          </div>
        </div>

        {/* Mobile: Only language + login */}
        <div className="flex items-center gap-4 text-[12px] md:hidden">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">US</span>
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">IT</span>
            <span className="cursor-pointer hover:text-[#c9a96e] transition-colors">ES</span>
          </div>
          <Link href="/login" className="flex items-center gap-1 hover:text-[#c9a96e] transition-colors">
            <User size={14} />
            LOG IN
          </Link>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-4 text-[12px] md:flex lg:gap-6">
          <Link href="/review" className="hidden lg:inline hover:text-[#c9a96e] transition-colors">
            Add Your Review
          </Link>
         
          <div className="flex items-center gap-3 border-l border-white/30 pl-4 lg:pl-6">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
              <User size={16} />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <Link href="/account" className="hover:text-[#c9a96e] transition-colors t  font-medium">
                My Account
              </Link>
              <Link href="/login" className="text-[10px] tracking-wider text-white/70 hover:text-[#c9a96e] transition-colors">
                LOG IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
