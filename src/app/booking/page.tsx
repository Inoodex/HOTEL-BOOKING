"use client";

import { Suspense, useReducer, useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { bookingReducer, initialBookingState } from "@/lib/booking-reducer";
import StepIndicator from "@/components/booking/StepIndicator";
import DateStep from "@/components/booking/DateStep";
import GuestStep from "@/components/booking/GuestStep";
import ConfirmationStep from "@/components/booking/ConfirmationStep";
import BookingSummary from "@/components/booking/BookingSummary";
import BookingSuccess from "@/components/booking/BookingSuccess";

function BookingContent() {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  const [bookingId] = useState(() => `HB-${Date.now().toString(36).toUpperCase()}`);
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const room = searchParams.get("room");
    const guests = searchParams.get("guests");

    if (checkin) {
      const d = new Date(checkin);
      if (!isNaN(d.getTime())) dispatch({ type: "SET_CHECK_IN", payload: d });
    }
    if (checkout) {
      const d = new Date(checkout);
      if (!isNaN(d.getTime())) dispatch({ type: "SET_CHECK_OUT", payload: d });
    }
    if (room) dispatch({ type: "SET_ROOM", payload: room });
    if (guests) {
      const g = parseInt(guests, 10);
      if (!isNaN(g)) dispatch({ type: "SET_GUESTS", payload: g });
    }
  }, [searchParams]);

  if (state.confirmed) {
    return (
      <main>
        <BookingSuccess state={state} bookingId={bookingId} />
      </main>
    );
  }

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[250px] overflow-hidden bg-[#1a3c2a] sm:h-[350px] lg:h-[400px]">
        <Image
          src="/room/luxury room.jpg"
          alt="Book Now"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Reservation
            </span>
            <h1 className="mt-3 font-serif text-[32px] font-medium text-white sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Book Now
            </h1>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="bg-[#f8f6f2] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <StepIndicator
            currentStep={state.step}
            onStepClick={(s) => {
              if (s < state.step) {
                for (let i = 0; i < state.step - s; i++) {
                  dispatch({ type: "PREV_STEP" });
                }
              }
            }}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left - Steps */}
            <div className="lg:col-span-2">
              {state.step === 1 && <DateStep state={state} dispatch={dispatch} />}
              {state.step === 2 && <GuestStep state={state} dispatch={dispatch} />}
              {state.step === 3 && (
                <ConfirmationStep state={state} dispatch={dispatch} />
              )}
            </div>

            {/* Right - Summary */}
            <div className="lg:col-span-1">
              <BookingSummary state={state} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#245d55] border-t-transparent" />
            <span className="text-[13px] text-gray-400">Loading...</span>
          </div>
        </main>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
