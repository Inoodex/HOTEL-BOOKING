"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const diningAreas = [
  { id: "main", name: "Main Dining Hall", desc: "Elegant indoor dining with oriental decor" },
  { id: "garden", name: "Garden Terrace", desc: "Al fresco dining amid tropical greenery" },
  { id: "private", name: "Private Room", desc: "Exclusive space for intimate gatherings" },
  { id: "bar", name: "Lounge & Bar", desc: "Casual dining with craft cocktails" },
];

export default function ReservePage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState("main");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
          <img src="/room/apartment.jpg" alt="Reservation" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] tracking-[4px] text-white/60 uppercase">Thank you</p>
            <h1 className="mt-3 font-serif text-[36px] font-medium text-white sm:text-[44px] lg:text-[52px]">
              Reservation Confirmed
            </h1>
          </div>
        </section>
        <div className="mx-auto max-w-[600px] px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="rounded border border-[#245d55]/20 bg-[#245d55]/5 p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#245d55] text-white">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h2 className="mt-6 font-serif text-[26px] font-medium text-[#1a1a1a]">
              Your Table is Reserved!
            </h2>
            <p className="mt-3 text-[14px] leading-[24px] text-gray-500">
              A confirmation has been sent to <strong>{email}</strong>. We look forward to welcoming you.
            </p>
            <div className="mt-6 rounded border border-gray-100 bg-white p-5 text-left text-[13px] text-gray-600">
              <div className="flex justify-between py-1.5"><span>Date</span><strong>{date}</strong></div>
              <div className="flex justify-between py-1.5"><span>Time</span><strong>{time}</strong></div>
              <div className="flex justify-between py-1.5"><span>Guests</span><strong>{guests}</strong></div>
              <div className="flex justify-between py-1.5"><span>Area</span><strong>{diningAreas.find(a => a.id === area)?.name}</strong></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/" className="border border-[#245d55] bg-white px-8 py-3 text-[11px] font-bold tracking-[2px] text-[#245d55] transition-colors hover:bg-[#245d55]/5">
                BACK TO HOME
              </Link>
              <Link href="/dining" className="bg-[#245d55] px-8 py-3 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]">
                VIEW MENU
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <img src="/room/luxury room.jpg" alt="Reserve a Table" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] tracking-[4px] text-white/60 uppercase">Reservations</p>
          <h1 className="mt-3 font-serif text-[36px] font-medium text-white sm:text-[44px] lg:text-[52px]">
            Book a Table
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[1250px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">

          {/* Left — Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Your Details</span>
            </div>
            <h2 className="mt-4 font-serif text-[28px] font-medium text-[#1a1a1a] sm:text-[34px]">
              Dining Information
            </h2>
            <p className="mt-4 text-[14px] leading-[26px] text-gray-500">
              Fill in the details below and we&apos;ll secure your perfect table. For parties larger than 8, please call us directly.
            </p>
            <div className="mt-6 space-y-3 text-[13px] text-gray-500">
              <p><strong>Phone:</strong> +01 234 345 894</p>
              <p><strong>Email:</strong> dining@hotelbooking.com</p>
              <p><strong>Hours:</strong> 6:30 AM – 11:00 PM</p>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">

            {/* Dining Area */}
            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Select Area</label>
              <div className="grid grid-cols-2 gap-3">
                {diningAreas.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setArea(a.id)}
                    className={`rounded border p-4 text-left transition-all ${
                      area === a.id
                        ? "border-[#245d55] bg-[#245d55]/5 shadow-sm"
                        : "border-gray-200 hover:border-[#245d55]/50"
                    }`}
                  >
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{a.name}</span>
                    <span className="mt-1 block text-[11px] text-gray-400">{a.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] focus:border-[#245d55] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] focus:border-[#245d55] focus:outline-none"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Number of Guests</label>
              <div className="flex flex-wrap gap-2">
                {guestOptions.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGuests(g)}
                    className={`h-10 w-10 rounded border text-[13px] font-medium transition-all ${
                      guests === g
                        ? "border-[#245d55] bg-[#245d55] text-white"
                        : "border-gray-200 text-gray-600 hover:border-[#245d55]/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Name + Email + Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:border-[#245d55] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:border-[#245d55] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+01 234 345 894"
                className="w-full border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:border-[#245d55] focus:outline-none"
              />
            </div>

            {/* Special Notes */}
            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-[2px] text-gray-600 uppercase">Special Requests</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Allergies, celebrations, seating preference..."
                className="w-full resize-none border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:border-[#245d55] focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#245d55] py-4 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
            >
              CONFIRM RESERVATION
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}
