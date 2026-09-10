"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import type { BookingState } from "@/types/booking";
import { rooms } from "@/data/rooms";
import { formatDate, getNights } from "@/lib/calendar-utils";

interface BookingSummaryProps {
  state: BookingState;
}

export default function BookingSummary({ state }: BookingSummaryProps) {
  const roomData = rooms.find((r) => r.slug === state.selectedRoom);
  const nights =
    state.checkIn && state.checkOut ? getNights(state.checkIn, state.checkOut) : 0;
  const total = roomData ? roomData.price * Math.max(nights, 1) : 0;

  return (
    <div className="bg-white p-5 sm:p-6 lg:sticky lg:top-[140px] lg:p-8">
      <h3 className="mb-6 font-serif text-[20px] font-medium text-[#1a1a1a]">
        Booking Summary
      </h3>

      {roomData && state.checkIn && state.checkOut ? (
        <div className="space-y-4">
          <div className="relative h-[150px] overflow-hidden sm:h-[180px]">
            <Image
              src={roomData.image}
              alt={roomData.name}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>

          <div>
            <h4 className="text-[16px] font-medium text-[#1a1a1a]">{roomData.name}</h4>
            <p className="mt-1 text-[12px] text-gray-400">
              {roomData.guests} Guests &middot; {roomData.area}
            </p>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500">Check-in</span>
              <span className="font-medium text-[#1a1a1a]">
                {formatDate(state.checkIn)}
              </span>
            </div>
            <div className="mt-2 flex justify-between text-[13px]">
              <span className="text-gray-500">Check-out</span>
              <span className="font-medium text-[#1a1a1a]">
                {formatDate(state.checkOut)}
              </span>
            </div>
            <div className="mt-2 flex justify-between text-[13px]">
              <span className="text-gray-500">Guests</span>
              <span className="font-medium text-[#1a1a1a]">{state.guests}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500">
                ${roomData.price} x {Math.max(nights, 1)} nights
              </span>
              <span className="font-medium text-[#1a1a1a]">${total}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between">
              <span className="text-[14px] font-bold text-[#1a1a1a]">Total</span>
              <span className="text-[20px] font-bold text-[#245d55]">${total}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 text-center">
          <Calendar size={32} className="mx-auto mb-3 text-gray-200" />
          <p className="text-[13px] text-gray-400">
            Select dates and a room to see your booking summary
          </p>
        </div>
      )}

      <div className="mt-6 border-t border-gray-100 pt-6">
        <p className="text-[12px] font-bold uppercase tracking-[2px] text-gray-400">
          Need Help?
        </p>
        <a
          href="tel:+01234345894"
          className="mt-2 block text-[14px] font-medium text-[#245d55] hover:text-[#1a3c2a] transition-colors"
        >
          + 01 234 345 894
        </a>
      </div>
    </div>
  );
}
