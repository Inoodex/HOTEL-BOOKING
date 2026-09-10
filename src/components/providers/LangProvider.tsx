"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "it" | "es";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    rooms: "Rooms",
    dining: "Dining",
    news: "News",
    contact: "Contact",
    bookNow: "BOOK NOW",
    callUs: "Call Us",
    login: "LOG IN",
    ourRooms: "OUR ROOMS",
    viewAll: "VIEW ALL",
    readMore: "READ MORE",
    subscribe: "SUBSCRIBE",
    gallery: "Gallery",
    paymentOptions: "Payment Options",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    allRightsReserved: "All Rights Reserved.",
    copyright: "© 2026 Hotel Booking.",
    services: "Services",
  },
  it: {
    home: "Casa",
    aboutUs: "Chi Siamo",
    rooms: "Camere",
    dining: "Ristorazione",
    news: "Notizie",
    contact: "Contatto",
    bookNow: "PRENOTA ORA",
    callUs: "Chiamaci",
    login: "ACCEDI",
    ourRooms: "LE NOSTRE CAMERE",
    viewAll: "VEDI TUTTO",
    readMore: "LEGGI DI PIÙ",
    subscribe: "ISCRIVITI",
    gallery: "Galleria",
    paymentOptions: "Opzioni di Pagamento",
    termsConditions: "Termini e Condizioni",
    privacyPolicy: "Privacy",
    allRightsReserved: "Tutti i diritti riservati.",
    copyright: "© 2026 Hotel Booking.",
    services: "Servizi",
  },
  es: {
    home: "Inicio",
    aboutUs: "Sobre Nosotros",
    rooms: "Habitaciones",
    dining: "Restaurante",
    news: "Noticias",
    contact: "Contacto",
    bookNow: "RESERVAR AHORA",
    callUs: "Llámanos",
    login: "INICIAR SESIÓN",
    ourRooms: "NUESTRAS HABITACIONES",
    viewAll: "VER TODO",
    readMore: "LEER MÁS",
    subscribe: "SUSCRIBIRSE",
    gallery: "Galería",
    paymentOptions: "Opciones de Pago",
    termsConditions: "Términos y Condiciones",
    privacyPolicy: "Privacidad",
    allRightsReserved: "Todos los derechos reservados.",
    copyright: "© 2026 Hotel Booking.",
    services: "Servicios",
  },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
