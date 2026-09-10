"use client";

import { Check } from "lucide-react";

const steps = ["Dates & Room", "Your Details", "Confirmation"];

interface StepIndicatorProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2 sm:mb-10 sm:gap-4">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = currentStep > stepNum;
        const isCurrent = currentStep === stepNum;

        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => isCompleted && onStepClick(stepNum)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold transition-all sm:h-10 sm:w-10 sm:text-[14px] ${
                isCompleted
                  ? "bg-[#245d55] text-white"
                  : isCurrent
                  ? "bg-[#c9a96e] text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {isCompleted ? <Check size={16} /> : stepNum}
            </button>
            <span
              className={`hidden text-[13px] font-medium sm:inline ${
                isCurrent ? "text-[#1a1a1a]" : "text-gray-400"
              }`}
            >
              {label}
            </span>
            {i < 2 && (
              <div
                className={`ml-1 h-px w-6 sm:w-10 ${
                  isCompleted ? "bg-[#245d55]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
