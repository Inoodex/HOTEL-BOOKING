"use client";

import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Single Room",
    price: 45,
    features: [
      "Proin lacinia vehicula amet",
      "Lorem ipsum dolor sit amet",
      "Morbi lacinia sagittis acum",
      "consectetur adipiscing elit",
    ],
    featured: false,
  },
  {
    name: "Small Suite",
    price: 55,
    features: [
      "Proin lacinia vehicula amet",
      "Lorem ipsum dolor sit amet",
      "Morbi lacinia sagittis acum",
      "consectetur adipiscing elit",
      "Proin lacinia vehicula amet",
    ],
    featured: true,
  },
  {
    name: "Apartment",
    price: 72,
    features: [
      "Proin lacinia vehicula amet",
      "Lorem ipsum dolor sit amet",
      "Morbi lacinia sagittis acum",
      "consectetur adipiscing elit",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/room/room with view .jpg"
          alt="Pricing Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3c2a]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
            Our Room Prices
          </span>
          <h2 className="mt-3 font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-white sm:text-[44px] lg:text-[52px]">
            The Best Prices
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center px-8 pt-14 pb-12 text-center ${
                plan.featured
                  ? "bg-[#245d55] text-white lg:-mt-6 lg:pb-16 lg:pt-20"
                  : "bg-white text-[#1a1a1a]"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -right-6 top-8 lg:-right-5 lg:top-6">
                  <div className="relative h-[72px] w-[72px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-white/30">
                      <svg
                        className="absolute inset-0 h-full w-full animate-[spin_8s_linear_infinite]"
                        viewBox="0 0 100 100"
                      >
                        <path
                          id="circlePath"
                          d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                          fill="none"
                        />
                        <text className="fill-white text-[9px] font-bold uppercase tracking-[2px]">
                          <textPath href="#circlePath" startOffset="0%">
                            ★ Best Offer - Best Offer -{" "}
                          </textPath>
                        </text>
                      </svg>
                      <span className="text-[18px] font-bold text-white">✦</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`font-serif text-[26px] font-medium sm:text-[28px] ${
                  plan.featured ? "text-white" : "text-[#1a1a1a]"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span
                  className={`text-[16px] font-medium ${
                    plan.featured ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  $
                </span>
                <span
                  className={`font-serif text-[52px] font-medium leading-none ${
                    plan.featured ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-[14px] ${
                    plan.featured ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  / night
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`text-[13px] leading-6 ${
                      plan.featured ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/rooms"
                className={`mt-10 inline-block border px-8 py-3 text-[10px] font-bold tracking-[2px] transition-colors duration-300 ${
                  plan.featured
                    ? "border-white text-white hover:bg-white hover:text-[#245d55]"
                    : "border-[#245d55] text-[#245d55] hover:bg-[#245d55] hover:text-white"
                }`}
              >
                MORE INFO
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
