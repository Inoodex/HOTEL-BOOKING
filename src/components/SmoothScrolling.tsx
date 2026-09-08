"use client";

import { useEffect, createContext, useContext } from "react";
import Lenis from "lenis";

let globalLenis: Lenis | null = null;

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    globalLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      globalLenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={globalLenis}>
      {children}
    </LenisContext.Provider>
  );
}
