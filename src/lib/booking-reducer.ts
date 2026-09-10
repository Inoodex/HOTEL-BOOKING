import type { BookingState, BookingAction } from "@/types/booking";

export const initialBookingState: BookingState = {
  step: 1,
  confirmed: false,
  loading: false,
  checkIn: null,
  checkOut: null,
  guests: 2,
  selectedRoom: "",
  arrivalTime: "02:00 PM",
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",
  },
  errors: {},
};

export function bookingReducer(
  state: BookingState,
  action: BookingAction
): BookingState {
  switch (action.type) {
    case "SET_CHECK_IN":
      return {
        ...state,
        checkIn: action.payload,
        errors: { ...state.errors, dates: undefined },
        checkOut:
          state.checkOut && action.payload >= state.checkOut ? null : state.checkOut,
      };

    case "SET_CHECK_OUT":
      return {
        ...state,
        checkOut: action.payload,
        errors: { ...state.errors, dates: undefined },
      };

    case "SET_GUESTS":
      return { ...state, guests: Math.max(1, Math.min(10, action.payload)) };

    case "SET_ROOM":
      return { ...state, selectedRoom: action.payload, errors: { ...state.errors, room: undefined } };

    case "SET_ARRIVAL_TIME":
      return { ...state, arrivalTime: action.payload };

    case "SET_FORM_DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
        errors: { ...state.errors, ...Object.fromEntries(Object.keys(action.payload).map((k) => [k, undefined])) },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "NEXT_STEP":
      return { ...state, step: Math.min(3, state.step + 1) as 1 | 2 | 3 };

    case "PREV_STEP":
      return { ...state, step: Math.max(1, state.step - 1) as 1 | 2 | 3 };

    case "CONFIRM":
      return { ...state, confirmed: true, loading: false };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "RESET":
      return initialBookingState;

    default:
      return state;
  }
}
