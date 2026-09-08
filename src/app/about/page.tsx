"use client";

import Image from "next/image";

const team = [
  {
    name: "John Smith",
    role: "General Manager",
    image: "/room/double room.jpg",
  },
  {
    name: "Maria Santos",
    role: "Head Chef",
    image: "/room/luxury room.jpg",
  },
  {
    name: "David Chen",
    role: "Spa Director",
    image: "/room/room with view .jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Guest Relations",
    image: "/room/apartment.jpg",
  },
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "120+", label: "Rooms & Suites" },
  { number: "50+", label: "Team Members" },
  { number: "10K+", label: "Happy Guests" },
];

export default function AboutPage() {
  return (
    <main>

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <Image
          src="/room/luxury room.jpg"
          alt="About Us"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              Who We Are
            </span>
            <h1 className="mt-3 font-serif text-[42px] font-medium text-white sm:text-[52px] lg:text-[60px]">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div className="relative h-[350px] overflow-hidden sm:h-[400px] lg:h-[450px]">
              <Image
                src="/room/double room.jpg"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]" />
                <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[48px]">
                A Legacy of
                <br />
                Hospitality
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-gray-500">
                Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-gray-500">
                Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus. Curabitur a fringilla eros.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-gray-500">
                Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis. Donec a eros at sapien tincidunt ultricies.
              </p>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/room/family room .jpg"
                    alt="Andrew Stuart"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-[14px] font-bold text-[#1a1a1a]">Andrew Stuart</span>
                  <span className="block text-[11px] text-gray-400">Hotel Manager</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#245d55] py-16 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="font-serif text-[42px] font-medium text-[#c9a96e] sm:text-[52px]">
                  {stat.number}
                </span>
                <span className="mt-2 block text-[12px] font-bold uppercase tracking-[2px] text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
                Why Choose Us
              </span>
              <span className="h-px w-8 bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
              Best Reasons
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Luxury Rooms",
                desc: "Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non.",
                image: "/room/luxury room.jpg",
              },
              {
                title: "Fine Dining",
                desc: "Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc.",
                image: "/room/apartment.jpg",
              },
              {
                title: "Spa & Wellness",
                desc: "Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo.",
                image: "/room/room with view .jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden border border-gray-100"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-[20px] font-medium text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#245d55]">
                Our Team
              </span>
              <span className="h-px w-8 bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] sm:text-[44px] lg:text-[52px]">
              Meet Our Staff
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden bg-white"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-[18px] font-medium text-[#1a1a1a]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
