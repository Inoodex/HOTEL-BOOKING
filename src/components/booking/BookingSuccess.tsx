"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Home } from "lucide-react";
import type { BookingState } from "@/types/booking";
import { rooms } from "@/data/rooms";
import { formatDate, getNights } from "@/lib/calendar-utils";

interface BookingSuccessProps {
  state: BookingState;
  bookingId: string;
}

export default function BookingSuccess({ state, bookingId }: BookingSuccessProps) {
  const roomData = rooms.find((r) => r.slug === state.selectedRoom);
  const nights =
    state.checkIn && state.checkOut ? getNights(state.checkIn, state.checkOut) : 0;
  const total = roomData ? roomData.price * Math.max(nights, 1) : 0;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[250px] overflow-hidden bg-[#1a3c2a] sm:h-[350px] lg:h-[400px]">
        <Image
          src="/room/luxury room.jpg"
          alt="Booking Confirmed"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Booking Confirmed
            </span>
            <h1 className="mt-3 font-serif text-[32px] font-medium text-white sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Thank You!
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[700px] px-4 text-center sm:px-6">
          <div className="bg-white p-6 sm:p-8 lg:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#245d55]/10 sm:h-20 sm:w-20">
              <CheckCircle size={32} className="text-[#245d55] sm:h-10 sm:w-10" />
            </div>

            <h2 className="font-serif text-[24px] font-medium text-[#1a1a1a] sm:text-[28px] lg:text-[34px]">
              Booking Confirmed!
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-gray-500">
              Your reservation has been successfully confirmed. A confirmation
              email has been sent to{" "}
              <span className="font-medium text-[#1a1a1a]">
                {state.formData.email}
              </span>
              .
            </p>

            {/* Summary */}
            <div className="mx-auto mt-8 max-w-[400px] space-y-3 border-t border-gray-100 pt-6 sm:pt-8">
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Booking ID</span>
                <span className="font-bold text-[#245d55]">{bookingId}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Room</span>
                <span className="font-medium text-[#1a1a1a]">{roomData?.name}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Check-in</span>
                <span className="font-medium text-[#1a1a1a]">
                  {formatDate(state.checkIn)}
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Check-out</span>
                <span className="font-medium text-[#1a1a1a]">
                  {formatDate(state.checkOut)}
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500">Guests</span>
                <span className="font-medium text-[#1a1a1a]">
                  {state.guests} Adults
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-3">
                <span className="text-[14px] font-bold text-[#1a1a1a]">Total</span>
                <span className="text-[18px] font-bold text-[#245d55]">${total}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#245d55] px-6 py-3 text-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a] sm:w-auto sm:px-8"
              >
                <Home size={14} />
                BACK TO HOME
              </Link>
              <Link
                href="/rooms"
                className="inline-flex w-full items-center justify-center gap-2 border border-gray-200 bg-white px-6 py-3 text-[10px] font-bold tracking-[2px] text-gray-500 transition-colors hover:border-[#245d55] hover:text-[#245d55] sm:w-auto sm:px-8"
              >
                VIEW ROOMS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
