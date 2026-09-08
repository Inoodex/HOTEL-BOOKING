"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ChevronDown } from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookingCalendar() {
  const today = new Date();
  const calendarRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [checkIn, setCheckIn] = useState<number | null>(today.getDate());
  const [checkOut, setCheckOut] = useState<number | null>(today.getDate() + 3);
  const [guests, setGuests] = useState(2);
  const [selecting, setSelecting] = useState<"checkin" | "checkout">("checkin");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    if (selecting === "checkin") {
      setCheckIn(day);
      if (checkOut && day >= checkOut) {
        setCheckOut(null);
      }
      setSelecting("checkout");
    } else {
      if (checkIn && day > checkIn) {
        setCheckOut(day);
      } else {
        setCheckIn(day);
        setCheckOut(null);
      }
      setSelecting("checkin");
    }
  };

  const formatDate = (day: number | null) => {
    if (day === null) return "Select Date";
    return `${day} ${MONTHS[currentMonth]} ${currentYear}`;
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20"
      ref={calendarRef}
      onMouseLeave={() => setIsCalendarOpen(false)}
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Calendar Dropdown - Only visible when open */}
        {isCalendarOpen && (
          <div className="mb-0 flex flex-col lg:flex-row items-end gap-0">
            <div className="bg-[#1a3c2a] shadow-[0_15px_50px_rgba(0,0,0,0.3)] w-full lg:w-auto lg:min-w-[480px]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <button onClick={prevMonth} className="text-[11px] font-bold tracking-[1px] text-white/70 hover:text-[#c9a96e] transition-colors">
                  PREV
                </button>
                <span className="text-[14px] font-medium tracking-[1px] text-white">
                  {MONTHS[currentMonth]} {currentYear}
                </span>
                <button onClick={nextMonth} className="text-[11px] font-bold tracking-[1px] text-white/70 hover:text-[#c9a96e] transition-colors">
                  NEXT
                </button>
              </div>

              <div className="grid grid-cols-7 px-5 pt-4">
                {DAYS.map((day) => (
                  <div key={day} className="text-center text-[10px] font-bold tracking-[1px] text-white/50 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 px-5 pb-5">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isCheckIn = checkIn === day;
                  const isCheckOut = checkOut === day;
                  const isInRange = checkIn !== null && checkOut !== null && day > checkIn && day < checkOut;
                  const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`relative flex h-9 w-full items-center justify-center text-[13px] transition-all duration-200 ${
                        isCheckIn || isCheckOut
                          ? "bg-[#245d55] text-white font-bold"
                          : isInRange
                          ? "bg-[#245d55]/20 text-white"
                          : isToday
                          ? "border border-[#c9a96e]/50 text-[#c9a96e] font-bold"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar - Always visible */}
        <div
          className="bg-[#1a3c2a] shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
          onMouseEnter={() => setIsCalendarOpen(false)}
        >
          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 sm:hidden">
            {/* Check In */}
            <div
              onClick={() => { setIsCalendarOpen(!isCalendarOpen); setSelecting("checkin"); }}
              className="cursor-pointer border-b border-r border-white/10 p-4"
            >
              <p className="mb-1 text-[9px] font-bold tracking-[2px] text-[#c9a96e]">CHECK IN</p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif text-[13px] text-white truncate">{formatDate(checkIn)}</span>
                <ChevronDown size={14} className={`shrink-0 text-white/40 transition-transform duration-300 ${isCalendarOpen ? "rotate-180" : ""}`} />
              </div>
            </div>

            {/* Check Out */}
            <div
              onClick={() => { setIsCalendarOpen(!isCalendarOpen); setSelecting("checkout"); }}
              className="cursor-pointer border-b border-white/10 p-4"
            >
              <p className="mb-1 text-[9px] font-bold tracking-[2px] text-[#c9a96e]">CHECK OUT</p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif text-[13px] text-white truncate">{formatDate(checkOut)}</span>
                <ChevronDown size={14} className="shrink-0 text-white/40" />
              </div>
            </div>

            {/* Guests */}
            <div className="border-r border-white/10 p-4">
              <p className="mb-1 text-[9px] font-bold tracking-[2px] text-[#c9a96e]">GUESTS</p>
              <div className="flex items-center gap-2">
                <span className="font-serif text-[13px] text-white">{guests} Adults</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex h-5 w-5 items-center justify-center border border-white/20 text-white/60"
                  >
                    <Minus size={10} />
                  </button>
                  <button
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="flex h-5 w-5 items-center justify-center border border-white/20 text-white/60"
                  >
                    <Plus size={10} />
                  </button>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/rooms"
              className="flex items-center justify-center bg-[#245d55] px-4 text-white transition-colors duration-300 hover:bg-[#183f3a]"
            >
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold tracking-[1.5px]">CHECK AVAILABILITY</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </div>
            </Link>
          </div>

          {/* Desktop: row */}
          <div className="hidden sm:flex sm:flex-row">
            {/* Check In */}
            <div
              onClick={() => { setIsCalendarOpen(!isCalendarOpen); setSelecting("checkin"); }}
              className="cursor-pointer border-b sm:border-b-0 sm:border-r border-white/10 p-5 flex-1"
            >
              <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">CHECK IN</p>
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-[16px] text-white">{formatDate(checkIn)}</span>
                <ChevronDown size={16} className={`text-white/40 transition-transform duration-300 ${isCalendarOpen ? "rotate-180" : ""}`} />
              </div>
            </div>

            {/* Check Out */}
            <div
              onClick={() => { setIsCalendarOpen(!isCalendarOpen); setSelecting("checkout"); }}
              className="cursor-pointer border-b sm:border-b-0 sm:border-r border-white/10 p-5 flex-1"
            >
              <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">CHECK OUT</p>
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-[16px] text-white">{formatDate(checkOut)}</span>
                <ChevronDown size={16} className="text-white/40" />
              </div>
            </div>

            {/* Guests */}
            <div className="border-b sm:border-b-0 sm:border-r border-white/10 p-5 flex-1">
              <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">GUESTS</p>
              <div className="flex items-center gap-3">
                <span className="font-serif text-[16px] text-white">{guests} Adults</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex h-6 w-6 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <button
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="flex h-6 w-6 items-center justify-center border border-white/20 text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/rooms"
              className="flex min-h-[90px] items-center justify-center bg-[#245d55] px-6 text-center text-white transition-colors duration-300 hover:bg-[#183f3a]"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[2px]">CHECK AVAILABILITY</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
