export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
}

export interface BookingState {
  step: 1 | 2 | 3;
  confirmed: boolean;
  loading: boolean;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  selectedRoom: string;
  arrivalTime: string;
  formData: BookingFormData;
  errors: Partial<Record<keyof BookingFormData | "dates" | "room", string>>;
}

export type BookingAction =
  | { type: "SET_CHECK_IN"; payload: Date }
  | { type: "SET_CHECK_OUT"; payload: Date }
  | { type: "SET_GUESTS"; payload: number }
  | { type: "SET_ROOM"; payload: string }
  | { type: "SET_ARRIVAL_TIME"; payload: string }
  | { type: "SET_FORM_DATA"; payload: Partial<BookingFormData> }
  | { type: "SET_ERRORS"; payload: Partial<BookingState["errors"]> }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "CONFIRM" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "RESET" };
