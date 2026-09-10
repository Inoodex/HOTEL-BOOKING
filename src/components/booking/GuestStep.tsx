"use client";

import type { BookingState, BookingAction } from "@/types/booking";
import { validateStep2 } from "@/lib/booking-validation";

interface GuestStepProps {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}

const fields = [
  { key: "firstName" as const, label: "First Name", type: "text", placeholder: "John", required: true, colSpan: false },
  { key: "lastName" as const, label: "Last Name", type: "text", placeholder: "Doe", required: true, colSpan: false },
  { key: "email" as const, label: "Email Address", type: "email", placeholder: "john@example.com", required: true, colSpan: false },
  { key: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+1 234 567 890", required: true, colSpan: false },
  { key: "country" as const, label: "Country / Region", type: "text", placeholder: "United States", required: false, colSpan: true },
] as const;

export default function GuestStep({ state, dispatch }: GuestStepProps) {
  const handleNext = () => {
    const errors = validateStep2(state.formData);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="space-y-8">
      {/* Personal Info */}
      <div className="bg-white p-5 sm:p-6 lg:p-8">
        <h2 className="mb-5 font-serif text-[20px] font-medium text-[#1a1a1a] sm:mb-6 sm:text-[24px] lg:text-[28px]">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.key} className={f.colSpan ? "sm:col-span-2" : ""}>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[2px] text-gray-400">
                {f.label} {f.required && "*"}
              </label>
              <input
                type={f.type}
                value={state.formData[f.key]}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FORM_DATA",
                    payload: { [f.key]: e.target.value },
                  })
                }
                className={`w-full border px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:outline-none transition-colors ${
                  state.errors[f.key]
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-[#245d55]"
                }`}
                placeholder={f.placeholder}
              />
              {state.errors[f.key] && (
                <p className="mt-1 text-[11px] text-red-500">{state.errors[f.key]}</p>
              )}
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[2px] text-gray-400">
              Special Requests
            </label>
            <textarea
              value={state.formData.specialRequests}
              onChange={(e) =>
                dispatch({
                  type: "SET_FORM_DATA",
                  payload: { specialRequests: e.target.value },
                })
              }
              rows={4}
              className="w-full resize-none border border-gray-200 px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-gray-300 focus:border-[#245d55] focus:outline-none transition-colors"
              placeholder="Any special requests or requirements..."
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="border border-gray-200 bg-white px-5 py-4 text-[11px] font-bold tracking-[2px] text-gray-500 transition-colors hover:border-[#245d55] hover:text-[#245d55] sm:px-8"
        >
          BACK
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex-1 bg-[#245d55] py-4 text-[11px] font-bold tracking-[2px] text-white transition-colors hover:bg-[#1a3c2a]"
        >
          REVIEW BOOKING
        </button>
      </div>
    </div>
  );
}
