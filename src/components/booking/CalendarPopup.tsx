"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
  isDateBefore,
  MONTH_NAMES,
} from "@/lib/calendar-utils";

interface CalendarPopupProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelect: (date: Date) => void;
}

export default function CalendarPopup({
  checkIn,
  checkOut,
  onSelect,
}: CalendarPopupProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const isDisabled = (day: number) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    if (d < today) return true;
    if (checkIn && !checkOut && isSameDay(d, checkIn)) return true;
    if (checkIn && !checkOut && isDateBefore(d, checkIn)) return true;
    return false;
  };

  const isSelected = (day: number) => {
    const d = new Date(year, month, day);
    if (checkIn && isSameDay(d, checkIn)) return "checkin";
    if (checkOut && isSameDay(d, checkOut)) return "checkout";
    if (checkIn && checkOut && d > checkIn && d < checkOut) return "range";
    return null;
  };

  return (
    <div className="border border-gray-100 p-3 sm:p-4 lg:p-6">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-8 w-8 items-center justify-center hover:bg-gray-100"
        >
          <ChevronLeft size={18} className="text-[#245d55]" />
        </button>
        <span className="text-[14px] font-medium text-[#1a1a1a]">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-8 w-8 items-center justify-center hover:bg-gray-100"
        >
          <ChevronRight size={18} className="text-[#245d55]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="py-2 text-[10px] font-bold uppercase tracking-[1px] text-gray-400 sm:text-[11px]"
          >
            {d}
          </div>
        ))}

        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const disabled = isDisabled(day);
          const selected = isSelected(day);

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => {
                const d = new Date(year, month, day);
                d.setHours(0, 0, 0, 0);
                onSelect(d);
              }}
              className={`flex h-7 w-7 items-center justify-center text-[11px] font-medium transition-all sm:h-9 sm:w-9 sm:text-[13px] ${
                disabled
                  ? "cursor-not-allowed text-gray-200"
                  : selected === "checkin" || selected === "checkout"
                  ? "bg-[#245d55] text-white"
                  : selected === "range"
                  ? "bg-[#245d55]/10 text-[#245d55]"
                  : "cursor-pointer text-[#1a1a1a] hover:bg-[#245d55]/10"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
