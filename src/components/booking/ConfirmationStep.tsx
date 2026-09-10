"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import type { BookingState, BookingAction } from "@/types/booking";
import { rooms } from "@/data/rooms";
import { formatDate, getNights } from "@/lib/calendar-utils";

interface ConfirmationStepProps {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}

export default function ConfirmationStep({ state, dispatch }: ConfirmationStepProps) {
  const roomData = rooms.find((r) => r.slug === state.selectedRoom);
  const nights =
    state.checkIn && state.checkOut ? getNights(state.checkIn, state.checkOut) : 0;

  const rows = [
    { label: "Guest Name", value: `${state.formData.firstName} ${state.formData.lastName}` },
    { label: "Email", value: state.formData.email },
    { label: "Phone", value: state.formData.phone },
    { label: "Room", value: roomData?.name },
    { label: "Check-in", value: formatDate(state.checkIn) },
    { label: "Check-out", value: formatDate(state.checkOut) },
    { label: "Nights", value: nights },
    { label: "Guests", value: `${state.guests} Adults` },
    { label: "Arrival Time", value: state.arrivalTime },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-5 sm:p-6 lg:p-8">
        <h2 className="mb-5 font-serif text-[20px] font-medium text-[#1a1a1a] sm:mb-6 sm:text-[24px] lg:text-[28px]">
          Booking Confirmation
        </h2>

        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between border-b border-gray-100 pb-3 sm:pb-4">
              <span className="text-[12px] text-gray-500 sm:text-[13px]">{row.label}</span>
              <span className="text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]">{row.value}</span>
            </div>
          ))}

          {state.formData.specialRequests && (
            <div className="border-b border-gray-100 pb-4">
              <span className="mb-1 block text-[13px] text-gray-500">Special Requests</span>
              <span className="text-[13px] text-[#1a1a1a]">
                {state.formData.specialRequests}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => dispatch({ type: "PREV_STEP" })}
          disabled={state.loading}
          className="border border-gray-200 bg-white px-5 py-4 text-[11px] font-bold tracking-[2px] text-gray-500 transition-colors hover:border-[#245d55] hover:text-[#245d55] disabled:opacity-40 sm:px-8"
        >
          BACK
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => dispatch({ type: "CONFIRM" }), 1500);
          }}
          disabled={state.loading}
          className="flex flex-1 items-center justify-center gap-2 bg-[#245d55] py-4 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a] disabled:opacity-70"
        >
          {state.loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              CONFIRMING...
            </>
          ) : (
            <>
              CONFIRM BOOKING
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
