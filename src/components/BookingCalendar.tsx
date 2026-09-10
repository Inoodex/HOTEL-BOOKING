"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ChevronDown, Calendar as CalendarIcon, X, Check, ChevronLeft, ChevronRight, LogIn, LogOut } from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const SHORT_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookingCalendar() {
  const today = new Date();
  const barRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const bookingBarRef = useRef<HTMLDivElement>(null);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [checkIn, setCheckIn] = useState<number | null>(today.getDate());
  const [checkInMonth, setCheckInMonth] = useState<number>(today.getMonth());
  const [checkInYear, setCheckInYear] = useState<number>(today.getFullYear());

  const [checkOut, setCheckOut] = useState<number | null>(today.getDate() + 3);
  const [checkOutMonth, setCheckOutMonth] = useState<number>(today.getMonth());
  const [checkOutYear, setCheckOutYear] = useState<number>(today.getFullYear());

  const [guests, setGuests] = useState(2);
  const [activeForm, setActiveForm] = useState<"checkin" | "checkout" | null>(null);
  const [popupPlacement, setPopupPlacement] = useState<"top" | "bottom">("bottom");
  const [isVisible, setIsVisible] = useState(false);
  const [popupPos, setPopupPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Check placement for desktop (below first, above if no space) + calculate fixed position
  const checkPlacement = useCallback(() => {
    if (barRef.current) {
      const barRect = barRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - barRect.bottom;
      const popupHeight = 450;

      // Use booking bar for left alignment, barRef for vertical placement
      let leftPos = barRect.left + 12;
      if (bookingBarRef.current) {
        leftPos = bookingBarRef.current.getBoundingClientRect().left;
      }

      if (spaceBelow >= popupHeight) {
        setPopupPlacement("bottom");
        setPopupPos({ top: barRect.bottom + 12, left: leftPos });
      } else {
        setPopupPlacement("top");
        setPopupPos({ top: barRect.top - popupHeight - 12, left: leftPos });
      }
    }
  }, []);

  const openCheckInForm = () => {
    setActiveForm("checkin");
    if (checkInMonth !== undefined && checkInYear !== undefined) {
      setCurrentMonth(checkInMonth);
      setCurrentYear(checkInYear);
    }
    checkPlacement();
    if (window.innerWidth >= 640) {
      setIsCalendarOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const openCheckOutForm = () => {
    setActiveForm("checkout");
    if (checkOutMonth !== undefined && checkOutYear !== undefined) {
      setCurrentMonth(checkOutMonth);
      setCurrentYear(checkOutYear);
    }
    checkPlacement();
    if (window.innerWidth >= 640) {
      setIsCalendarOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const closeForm = () => {
    if (window.innerWidth >= 640) {
      setIsVisible(false);
      setTimeout(() => {
        setActiveForm(null);
        setIsCalendarOpen(false);
      }, 200);
    } else {
      setActiveForm(null);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        barRef.current &&
        !barRef.current.contains(event.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setActiveForm(null);
      }
    }
    if (activeForm) {
      checkPlacement();
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", checkPlacement);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", checkPlacement);
    };
  }, [activeForm, checkPlacement]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleDateClick = (day: number) => {
    if (activeForm === "checkin") {
      const isPast =
        currentYear < today.getFullYear() ||
        (currentYear === today.getFullYear() && currentMonth < today.getMonth()) ||
        (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day < today.getDate());

      if (isPast) return;

      setCheckIn(day);
      setCheckInMonth(currentMonth);
      setCheckInYear(currentYear);

      // Auto update checkout if checkout is now invalid
      if (checkOut !== null) {
        const newInDate = new Date(currentYear, currentMonth, day);
        const curOutDate = new Date(checkOutYear, checkOutMonth, checkOut);
        if (curOutDate <= newInDate) {
          const defaultOut = new Date(newInDate);
          defaultOut.setDate(defaultOut.getDate() + 2);
          setCheckOut(defaultOut.getDate());
          setCheckOutMonth(defaultOut.getMonth());
          setCheckOutYear(defaultOut.getFullYear());
        }
      } else {
        const defaultOut = new Date(currentYear, currentMonth, day);
        defaultOut.setDate(defaultOut.getDate() + 2);
        setCheckOut(defaultOut.getDate());
        setCheckOutMonth(defaultOut.getMonth());
        setCheckOutYear(defaultOut.getFullYear());
      }
    } else if (activeForm === "checkout") {
      const checkInDate = checkIn !== null ? new Date(checkInYear, checkInMonth, checkIn) : new Date();
      const thisDate = new Date(currentYear, currentMonth, day);

      // Cannot select a checkout date on or before checkin date
      if (thisDate <= checkInDate) return;

      setCheckOut(day);
      setCheckOutMonth(currentMonth);
      setCheckOutYear(currentYear);
    }
  };

  const formatDate = (day: number | null, month: number, year: number, short = false) => {
    if (day === null) return "Select Date";
    return short
      ? `${day} ${SHORT_MONTHS[month]} ${year}`
      : `${day} ${MONTHS[month]} ${year}`;
  };

  const calculateNights = () => {
    if (checkIn === null || checkOut === null) return null;
    const d1 = new Date(checkInYear, checkInMonth, checkIn);
    const d2 = new Date(checkOutYear, checkOutMonth, checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : null;
  };

  const nights = calculateNights();

  const hoverCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const handleDesktopPopupEnter = () => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  };

  const handleDesktopPopupLeave = () => {
    if (window.innerWidth >= 640) {
      hoverCloseTimer.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setIsCalendarOpen(false);
          setActiveForm(null);
        }, 200);
      }, 150);
    }
  };

  return (
    <div className="relative z-30 w-full" ref={barRef}>
      <div className="mx-auto max-w-[1250px] px-3 sm:px-6 lg:px-8">

        {/* ----------------- 1. CHECK-IN DEDICATED POPUP FORM ----------------- */}
        {activeForm === "checkin" && (
          <>
            {/* Mobile Backdrop Overlay */}
            <div
              onClick={closeForm}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden animate-[fadeIn_0.2s_ease-out]"
            />

            {/* Check-In Pop-up Card */}
            <div
              ref={popupRef}
              onMouseEnter={handleDesktopPopupEnter}
              onMouseLeave={handleDesktopPopupLeave}
              className={`
                fixed z-[60] transition-all duration-200 ease-out
                inset-x-0 bottom-0 sm:inset-x-auto sm:top-auto sm:bottom-auto
                sm:w-[410px] sm:max-w-full max-h-[85vh] overflow-y-auto
                ${isVisible ? "sm:opacity-100 sm:scale-100" : "sm:opacity-0 sm:scale-95 sm:pointer-events-none"}
              `}
              style={{ top: typeof window !== "undefined" && window.innerWidth >= 640 ? popupPos.top : undefined, left: typeof window !== "undefined" && window.innerWidth >= 640 ? popupPos.left : undefined }}
            >
              <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#c9a96e]/40 bg-[#122b1e] text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">

                {/* Pop-up Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#173827] px-3 py-2 sm:px-5 sm:py-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <LogIn size={14} className="text-[#c9a96e] sm:hidden" />
                    <LogIn size={16} className="text-[#c9a96e] hidden sm:block" />
                    <div>
                      <h3 className="font-serif text-[12px] sm:text-[14px] font-semibold text-white">
                        Check-In Date
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-white/60">Choose your arrival date</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Close"
                  >
                    <X size={12} className="sm:hidden" />
                    <X size={14} className="hidden sm:block" />
                  </button>
                </div>

                {/* Selected Date Card */}
                <div className="mx-2 my-1.5 sm:mx-3 sm:my-2 flex items-center justify-between rounded-lg sm:rounded-xl border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-2.5 py-1.5 sm:px-3.5 sm:py-2">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[1px] text-[#c9a96e]">
                      Selected Check-In:
                    </span>
                    <p className="font-serif text-[12px] sm:text-[14px] font-bold text-white">
                      {formatDate(checkIn, checkInMonth, checkInYear)}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block rounded-full bg-[#c9a96e] px-2.5 py-0.5 text-[10px] font-bold text-[#1a3c2a]">
                    Step 1 of 2
                  </span>
                </div>

                {/* Month Navigator */}
                <div className="flex items-center justify-between px-3 pt-0.5 sm:px-5 sm:pt-1">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={13} className="sm:hidden" />
                    <ChevronLeft size={15} className="hidden sm:block" />
                  </button>
                  <span className="font-serif text-[12px] sm:text-[14px] font-semibold tracking-wide text-white">
                    {MONTHS[currentMonth]} {currentYear}
                  </span>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Next month"
                  >
                    <ChevronRight size={13} className="sm:hidden" />
                    <ChevronRight size={15} className="hidden sm:block" />
                  </button>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 gap-0.5 px-2 pt-1 text-center text-[8px] sm:text-[10px] font-bold uppercase text-[#c9a96e] sm:px-4">
                  {DAYS.map((day) => (
                    <div key={day} className="py-0.5">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days Grid */}
                <div className="grid grid-cols-7 gap-0.5 px-2 pb-2 sm:gap-1 sm:px-4 sm:pb-2.5">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-6 sm:h-8" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected =
                      checkIn === day &&
                      checkInMonth === currentMonth &&
                      checkInYear === currentYear;

                    const isToday =
                      day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();

                    const isPast =
                      currentYear < today.getFullYear() ||
                      (currentYear === today.getFullYear() && currentMonth < today.getMonth()) ||
                      (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day < today.getDate());

                    return (
                      <button
                        type="button"
                        key={day}
                        disabled={isPast}
                        onClick={() => handleDateClick(day)}
                        className={`relative flex h-6 sm:h-8 w-full items-center justify-center rounded-md sm:rounded-lg text-[11px] sm:text-[12px] font-medium transition-all ${
                          isPast
                            ? "cursor-not-allowed text-white/20"
                            : isSelected
                            ? "bg-[#c9a96e] font-bold text-[#1a3c2a] shadow-md shadow-[#c9a96e]/30 scale-105 z-10"
                            : isToday
                            ? "border border-[#c9a96e] text-[#c9a96e] font-bold hover:bg-white/10"
                            : "text-white/85 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between border-t border-white/10 bg-[#0d2217] px-3 py-2 sm:px-4 sm:py-2.5">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="text-[10px] sm:text-[11px] font-medium text-white/60 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={openCheckOutForm}
                    className="flex items-center gap-1 sm:gap-1.5 rounded-md sm:rounded-lg bg-[#c9a96e] px-3 py-1.5 sm:px-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[1px] text-[#1a3c2a] shadow-md transition-transform active:scale-95 hover:bg-[#d8be8d]"
                  >
                    Next: Check-Out
                    <ArrowRight size={12} className="sm:hidden" strokeWidth={2.5} />
                    <ArrowRight size={13} className="hidden sm:block" strokeWidth={2.5} />
                  </button>
                </div>

              </div>
            </div>
          </>
        )}

        {/* ----------------- 2. CHECK-OUT DEDICATED POPUP FORM ----------------- */}
        {activeForm === "checkout" && (
          <>
            {/* Mobile Backdrop Overlay */}
            <div
              onClick={closeForm}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden animate-[fadeIn_0.2s_ease-out]"
            />

            {/* Check-Out Pop-up Card */}
            <div
              ref={popupRef}
              onMouseEnter={handleDesktopPopupEnter}
              onMouseLeave={handleDesktopPopupLeave}
              className={`
                fixed z-[60] transition-all duration-200 ease-out
                inset-x-0 bottom-0 sm:inset-x-auto sm:top-auto sm:bottom-auto sm:z-50
                sm:w-[410px] sm:max-w-full max-h-[85vh] overflow-y-auto
                ${isVisible ? "sm:opacity-100 sm:scale-100" : "sm:opacity-0 sm:scale-95 sm:pointer-events-none"}
              `}
              style={{ top: typeof window !== "undefined" && window.innerWidth >= 640 ? popupPos.top : undefined, left: typeof window !== "undefined" && window.innerWidth >= 640 ? popupPos.left : undefined }}
            >
              <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#c9a96e]/40 bg-[#122b1e] text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">

                {/* Pop-up Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#173827] px-3 py-2 sm:px-5 sm:py-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <LogOut size={14} className="text-[#c9a96e] sm:hidden" />
                    <LogOut size={16} className="text-[#c9a96e] hidden sm:block" />
                    <div>
                      <h3 className="font-serif text-[12px] sm:text-[14px] font-semibold text-white">
                        Check-Out Date
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-white/60">Choose your departure date</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Close"
                  >
                    <X size={12} className="sm:hidden" />
                    <X size={14} className="hidden sm:block" />
                  </button>
                </div>

                {/* Selected Date Card with Stay Summary */}
                <div className="mx-2 my-1.5 sm:mx-3 sm:my-2 flex items-center justify-between rounded-lg sm:rounded-xl border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-2.5 py-1.5 sm:px-3.5 sm:py-2">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[1px] text-[#c9a96e]">
                      Selected Check-Out:
                    </span>
                    <p className="font-serif text-[12px] sm:text-[14px] font-bold text-white">
                      {formatDate(checkOut, checkOutMonth, checkOutYear)}
                    </p>
                  </div>
                  {nights !== null && (
                    <span className="rounded-full bg-[#245d55] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#c9a96e] border border-[#c9a96e]/30">
                      {nights} {nights === 1 ? "Night" : "Nights"} stay
                    </span>
                  )}
                </div>

                {/* Month Navigator */}
                <div className="flex items-center justify-between px-3 pt-0.5 sm:px-5 sm:pt-1">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={13} className="sm:hidden" />
                    <ChevronLeft size={15} className="hidden sm:block" />
                  </button>
                  <span className="font-serif text-[12px] sm:text-[14px] font-semibold tracking-wide text-white">
                    {MONTHS[currentMonth]} {currentYear}
                  </span>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-colors hover:bg-[#c9a96e] hover:text-[#1a3c2a]"
                    aria-label="Next month"
                  >
                    <ChevronRight size={13} className="sm:hidden" />
                    <ChevronRight size={15} className="hidden sm:block" />
                  </button>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 gap-0.5 px-2 pt-1 text-center text-[8px] sm:text-[10px] font-bold uppercase text-[#c9a96e] sm:px-4">
                  {DAYS.map((day) => (
                    <div key={day} className="py-0.5">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days Grid */}
                <div className="grid grid-cols-7 gap-0.5 px-2 pb-2 sm:gap-1 sm:px-4 sm:pb-2.5">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-6 sm:h-8" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const thisDate = new Date(currentYear, currentMonth, day);
                    const checkInFull = checkIn !== null ? new Date(checkInYear, checkInMonth, checkIn) : null;

                    const isCheckOutDay =
                      checkOut === day &&
                      checkOutMonth === currentMonth &&
                      checkOutYear === currentYear;

                    const isCheckInDay =
                      checkIn === day &&
                      checkInMonth === currentMonth &&
                      checkInYear === currentYear;

                    const isBeforeCheckIn = checkInFull ? thisDate <= checkInFull : false;

                    const isInRange =
                      checkInFull &&
                      checkOut !== null &&
                      thisDate > checkInFull &&
                      thisDate < new Date(checkOutYear, checkOutMonth, checkOut);

                    return (
                      <button
                        type="button"
                        key={day}
                        disabled={isBeforeCheckIn}
                        onClick={() => handleDateClick(day)}
                        className={`relative flex h-6 sm:h-8 w-full items-center justify-center rounded-md sm:rounded-lg text-[11px] sm:text-[12px] font-medium transition-all ${
                          isBeforeCheckIn
                            ? "cursor-not-allowed text-white/20"
                            : isCheckOutDay
                            ? "bg-[#c9a96e] font-bold text-[#1a3c2a] shadow-md shadow-[#c9a96e]/30 scale-105 z-10"
                            : isCheckInDay
                            ? "border border-dashed border-[#c9a96e] text-[#c9a96e] font-semibold"
                            : isInRange
                            ? "bg-[#245d55]/80 text-white font-semibold"
                            : "text-white/85 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between border-t border-white/10 bg-[#0d2217] px-3 py-2 sm:px-4 sm:py-2.5">
                  <button
                    type="button"
                    onClick={openCheckInForm}
                    className="text-[10px] sm:text-[11px] font-medium text-[#c9a96e] hover:underline"
                  >
                    &larr; Back to Check-In
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex items-center gap-1 sm:gap-1.5 rounded-md sm:rounded-lg bg-[#c9a96e] px-3 py-1.5 sm:px-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[1px] text-[#1a3c2a] shadow-md transition-transform active:scale-95 hover:bg-[#d8be8d]"
                  >
                    <Check size={12} className="sm:hidden" strokeWidth={3} />
                    <Check size={13} className="hidden sm:block" strokeWidth={3} />
                    Confirm Stay
                  </button>
                </div>

              </div>
            </div>
          </>
        )}

        {/* ----------------- BOTTOM BOOKING BAR ----------------- */}
        <div ref={bookingBarRef} className="overflow-hidden rounded-t-xl bg-[#1a3c2a]/95 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.4)] border border-white/15 border-b-0">
          
          {/* Mobile Layout (< 640px) */}
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:hidden">
            {/* Check In Button */}
            <div
              onClick={openCheckInForm}
              className={`cursor-pointer p-3 transition-colors active:bg-white/10 ${
                activeForm === "checkin" ? "bg-white/10 ring-1 ring-[#c9a96e]/50 inset-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold tracking-[1.5px] text-[#c9a96e]">CHECK IN</p>
                <ChevronDown
                  size={12}
                  className={`text-[#c9a96e] transition-transform duration-300 ${
                    activeForm === "checkin" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <CalendarIcon size={12} className="shrink-0 text-white/60" />
                <span className="truncate font-serif text-[12px] font-medium text-white">
                  {formatDate(checkIn, checkInMonth, checkInYear, true)}
                </span>
              </div>
            </div>

            {/* Check Out Button */}
            <div
              onClick={openCheckOutForm}
              className={`cursor-pointer p-3 transition-colors active:bg-white/10 ${
                activeForm === "checkout" ? "bg-white/10 ring-1 ring-[#c9a96e]/50 inset-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold tracking-[1.5px] text-[#c9a96e]">CHECK OUT</p>
                <ChevronDown
                  size={12}
                  className={`text-[#c9a96e] transition-transform duration-300 ${
                    activeForm === "checkout" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <CalendarIcon size={12} className="shrink-0 text-white/60" />
                <span className="truncate font-serif text-[12px] font-medium text-white">
                  {formatDate(checkOut, checkOutMonth, checkOutYear, true)}
                </span>
              </div>
            </div>

            {/* Guests Counter */}
            <div className="p-3">
              <p className="text-[9px] font-bold tracking-[1.5px] text-[#c9a96e]">GUESTS</p>
              <div className="mt-1 flex items-center justify-between gap-1">
                <span className="font-serif text-[12px] font-medium text-white truncate">
                  {guests} {guests === 1 ? "Adult" : "Adults"}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(Math.max(1, guests - 1));
                    }}
                    className="flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white/70 active:bg-white/20"
                    aria-label="Decrease guests"
                  >
                    <Minus size={11} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(Math.min(10, guests + 1));
                    }}
                    className="flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white/70 active:bg-white/20"
                    aria-label="Increase guests"
                  >
                    <Plus size={11} />
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Button */}
            <Link
              href="/rooms"
              className="flex items-center justify-center bg-[#245d55] p-3 text-white transition-colors duration-300 active:bg-[#183f3a]"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-bold tracking-[0.5px] leading-tight text-center sm:text-[9px] sm:tracking-[1px]">
                  CHECK AVAILABILITY
                </span>
                <ArrowRight size={12} className="shrink-0 text-[#c9a96e]" />
              </div>
            </Link>
          </div>

          {/* Desktop & Tablet Layout (>= 640px) */}
          <div className="hidden sm:flex sm:flex-row divide-x divide-white/10">
            {/* Check In */}
            <div
              onClick={openCheckInForm}
              className={`flex-1 cursor-pointer p-4 md:p-5 transition-all hover:bg-white/5 ${
                activeForm === "checkin" ? "bg-white/10 shadow-inner" : ""
              }`}
            >
              <p className="mb-1 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">CHECK IN</p>
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-[14px] font-medium text-white md:text-[16px]">
                  {formatDate(checkIn, checkInMonth, checkInYear)}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-white/50 transition-transform duration-300 ${
                    activeForm === "checkin" ? "rotate-180 text-[#c9a96e]" : ""
                  }`}
                />
              </div>
            </div>

            {/* Check Out */}
            <div
              onClick={openCheckOutForm}
              className={`flex-1 cursor-pointer p-4 md:p-5 transition-all hover:bg-white/5 ${
                activeForm === "checkout" ? "bg-white/10 shadow-inner" : ""
              }`}
            >
              <p className="mb-1 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">CHECK OUT</p>
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-[14px] font-medium text-white md:text-[16px]">
                  {formatDate(checkOut, checkOutMonth, checkOutYear)}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-white/50 transition-transform duration-300 ${
                    activeForm === "checkout" ? "rotate-180 text-[#c9a96e]" : ""
                  }`}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 p-4 md:p-5">
              <p className="mb-1 text-[10px] font-bold tracking-[2px] text-[#c9a96e]">GUESTS</p>
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-[14px] font-medium text-white md:text-[16px]">
                  {guests} {guests === 1 ? "Adult" : "Adults"}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white/70 transition-colors hover:border-[#c9a96e] hover:text-[#c9a96e]"
                    aria-label="Decrease guests"
                  >
                    <Minus size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white/70 transition-colors hover:border-[#c9a96e] hover:text-[#c9a96e]"
                    aria-label="Increase guests"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/rooms"
              className="flex min-h-[80px] items-center justify-center bg-[#245d55] px-6 text-center text-white transition-colors duration-300 hover:bg-[#183f3a] md:min-h-[88px] md:px-8 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold tracking-[2px]">CHECK AVAILABILITY</span>
                <ArrowRight size={16} strokeWidth={2} className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
