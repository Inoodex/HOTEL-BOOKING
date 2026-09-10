"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Minus, Plus, Users, Check } from "lucide-react";
import type { BookingState, BookingAction } from "@/types/booking";
import { rooms } from "@/data/rooms";
import { formatDate } from "@/lib/calendar-utils";
import { validateStep1 } from "@/lib/booking-validation";
import CalendarPopup from "./CalendarPopup";

const TIME_SLOTS = [
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM",
];

interface DateStepProps {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}

export default function DateStep({ state, dispatch }: DateStepProps) {
  const [activeForm, setActiveForm] = useState<"checkin" | "checkout" | null>(null);

  const handleDateSelect = (date: Date) => {
    if (activeForm === "checkin") {
      dispatch({ type: "SET_CHECK_IN", payload: date });
      setActiveForm("checkout");
    } else if (activeForm === "checkout") {
      dispatch({ type: "SET_CHECK_OUT", payload: date });
      setActiveForm(null);
    }
  };

  const handleNext = () => {
    const errors = validateStep1(state.checkIn, state.checkOut, state.selectedRoom);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="space-y-8">
      {/* Error Banner */}
      {state.errors.dates && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
          {state.errors.dates}
        </div>
      )}

      {/* Date Selection */}
      <div className="bg-white p-5 sm:p-6 lg:p-8">
        <h2 className="mb-5 font-serif text-[20px] font-medium text-[#1a1a1a] sm:mb-6 sm:text-[24px] lg:text-[28px]">
          Select Dates
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setActiveForm(activeForm === "checkin" ? null : "checkin")}
            className={`flex items-center gap-3 border px-4 py-3 text-left transition-colors sm:px-5 sm:py-4 ${
              activeForm === "checkin"
                ? "border-[#245d55] bg-[#245d55]/5"
                : "border-gray-200 hover:border-[#245d55]/50"
            }`}
          >
            <Calendar size={18} className="shrink-0 text-[#245d55]" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                Check-in
              </span>
              <span
                className={`block text-[13px] font-medium sm:text-[14px] ${
                  state.checkIn ? "text-[#1a1a1a]" : "text-gray-300"
                }`}
              >
                {state.checkIn ? formatDate(state.checkIn) : "Select date"}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveForm(activeForm === "checkout" ? null : "checkout")}
            className={`flex items-center gap-3 border px-4 py-3 text-left transition-colors sm:px-5 sm:py-4 ${
              activeForm === "checkout"
                ? "border-[#245d55] bg-[#245d55]/5"
                : "border-gray-200 hover:border-[#245d55]/50"
            }`}
          >
            <Calendar size={18} className="shrink-0 text-[#c9a96e]" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                Check-out
              </span>
              <span
                className={`block text-[13px] font-medium sm:text-[14px] ${
                  state.checkOut ? "text-[#1a1a1a]" : "text-gray-300"
                }`}
              >
                {state.checkOut ? formatDate(state.checkOut) : "Select date"}
              </span>
            </div>
          </button>
        </div>

        {activeForm && (
          <div className="mt-5">
            <CalendarPopup
              checkIn={state.checkIn}
              checkOut={state.checkOut}
              onSelect={handleDateSelect}
            />
            <p className="mt-3 text-center text-[11px] text-gray-400">
              {activeForm === "checkin"
                ? "Select your check-in date"
                : "Select your check-out date"}
            </p>
          </div>
        )}

        {/* Arrival Time */}
        <div className="mt-6">
          <span className="mb-3 block text-[12px] font-bold uppercase tracking-[2px] text-gray-400">
            Estimated Arrival Time
          </span>
          <div className="flex flex-wrap gap-2">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => dispatch({ type: "SET_ARRIVAL_TIME", payload: t })}
                className={`border px-3 py-2 text-[11px] font-medium transition-all sm:px-4 sm:text-[12px] ${
                  state.arrivalTime === t
                    ? "border-[#245d55] bg-[#245d55] text-white"
                    : "border-gray-200 text-gray-500 hover:border-[#245d55]/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Room Selection */}
      <div className="bg-white p-5 sm:p-6 lg:p-8">
        <h2 className="mb-2 font-serif text-[20px] font-medium text-[#1a1a1a] sm:mb-2 sm:text-[24px] lg:text-[28px]">
          Choose Room
        </h2>
        {state.errors.room && (
          <p className="mb-4 text-[12px] text-red-500">{state.errors.room}</p>
        )}

        <RoomGrid
          selectedRoom={state.selectedRoom}
          onSelect={(slug) => dispatch({ type: "SET_ROOM", payload: slug })}
        />
      </div>

      {/* Guests */}
      <div className="bg-white p-5 sm:p-6 lg:p-8">
        <h2 className="mb-5 font-serif text-[20px] font-medium text-[#1a1a1a] sm:mb-6 sm:text-[24px] lg:text-[28px]">
          Guests
        </h2>
        <div className="flex items-center justify-between border border-gray-200 px-5 py-4 sm:px-6">
          <div>
            <span className="block text-[14px] font-medium text-[#1a1a1a]">Adults</span>
            <span className="block text-[11px] text-gray-400">12+ years</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              disabled={state.guests <= 1}
              onClick={() => dispatch({ type: "SET_GUESTS", payload: state.guests - 1 })}
              className="flex h-8 w-8 items-center justify-center border border-gray-200 text-gray-400 transition-colors hover:border-[#245d55] hover:text-[#245d55] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus size={14} />
            </button>
            <span className="w-6 text-center text-[16px] font-bold text-[#1a1a1a]">
              {state.guests}
            </span>
            <button
              type="button"
              disabled={state.guests >= 10}
              onClick={() => dispatch({ type: "SET_GUESTS", payload: state.guests + 1 })}
              className="flex h-8 w-8 items-center justify-center border border-gray-200 text-gray-400 transition-colors hover:border-[#245d55] hover:text-[#245d55] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="w-full bg-[#245d55] py-4 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a] disabled:cursor-not-allowed disabled:opacity-40"
      >
        CONTINUE TO DETAILS
      </button>
    </div>
  );
}

function RoomGrid({
  selectedRoom,
  onSelect,
}: {
  selectedRoom: string;
  onSelect: (slug: string) => void;
}) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {rooms.map((room) => (
        <div key={room.slug} className="relative">
          <button
            type="button"
            onClick={() => setExpandedSlug(expandedSlug === room.slug ? null : room.slug)}
            className={`group flex w-full items-center gap-3 border p-3 text-left transition-all sm:gap-4 sm:p-4 lg:p-5 ${
              selectedRoom === room.slug
                ? "border-[#245d55] bg-[#245d55]/5"
                : expandedSlug === room.slug
                ? "border-[#245d55]/50 shadow-md"
                : "border-gray-200 hover:border-[#245d55]/50 hover:shadow-md"
            }`}
          >
            <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]">
              <Image src={room.image} alt={room.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] font-medium text-[#1a1a1a] sm:text-[14px] lg:text-[15px]">
                {room.name}
              </h3>
              <div className="mt-1 flex items-center gap-3 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Users size={12} /> {room.guests} Guests
                </span>
                <span>{room.area}</span>
              </div>
              <span className="mt-2 block text-[13px] font-bold text-[#245d55] sm:text-[14px] lg:text-[16px]">
                ${room.price}
                <span className="text-[11px] font-normal text-gray-400"> /night</span>
              </span>
            </div>
            {selectedRoom === room.slug && (
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#245d55]">
                <Check size={12} className="text-white" />
              </div>
            )}
          </button>

          {/* Expanded Preview */}
          {expandedSlug === room.slug && (
            <div className="relative z-30 mt-2 w-full">
              <div className="overflow-hidden rounded border border-[#245d55]/20 bg-white shadow-2xl">
                <div className="relative h-[250px] w-full sm:h-[380px]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                    <h4 className="font-serif text-[20px] font-medium text-[#1a1a1a] sm:text-[26px] sm:text-[30px]">
                      {room.name}
                    </h4>
                    <p className="mt-2 max-w-[500px] text-[12px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
                      {room.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                      {room.amenities.slice(0, 5).map((a) => (
                        <span
                          key={a}
                          className="rounded bg-[#245d55]/15 px-2 py-0.5 text-[10px] font-medium text-[#245d55] backdrop-blur-sm sm:px-3 sm:py-1 sm:text-[11px]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(room.slug);
                        setExpandedSlug(null);
                      }}
                      className="mt-4 w-full bg-[#245d55] py-2.5 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
                    >
                      SELECT THIS ROOM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
