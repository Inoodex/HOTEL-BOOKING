import type { BookingFormData } from "@/types/booking";

export function validateStep1(checkIn: Date | null, checkOut: Date | null, selectedRoom: string) {
  const errors: { dates?: string; room?: string } = {};

  if (!checkIn) errors.dates = "Please select a check-in date";
  else if (!checkOut) errors.dates = "Please select a check-out date";

  if (!selectedRoom) errors.room = "Please select a room";

  return errors;
}

export function validateStep2(data: BookingFormData) {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email address";
  if (!data.phone.trim()) errors.phone = "Phone number is required";

  return errors;
}
