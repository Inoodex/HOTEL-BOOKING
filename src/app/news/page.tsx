"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "top-10-things-to-do-in-bangkok",
    title: "Top 10 Things to Do in Bangkok",
    excerpt: "Discover the vibrant street life, majestic temples, and hidden gems that make Bangkok one of the world's most exciting destinations.",
    date: "August 20, 2026",
    author: "Editorial Team",
    category: "Travel",
    image: "/room/luxury room.jpg",
  },
  {
    slug: "the-art-of-thai-cuisine",
    title: "The Art of Thai Cuisine",
    excerpt: "From the fiery streets of Bangkok to the tranquil kitchens of Chiang Mai, explore the rich tapestry of Thai culinary traditions.",
    date: "August 15, 2026",
    author: "Chef Somchai",
    category: "Dining",
    image: "/room/family room .jpg",
  },
  {
    slug: "luxury-meets-tradition",
    title: "Luxury Meets Tradition",
    excerpt: "How Hotel Booking Oriental blends timeless oriental elegance with world-class modern amenities for an unforgettable stay.",
    date: "August 10, 2026",
    author: "Marketing Team",
    category: "Hotel",
    image: "/room/apartment.jpg",
  },
  {
    slug: "wellness-retreat-guide",
    title: "Your Complete Wellness Retreat Guide",
    excerpt: "Rejuvenate your body and mind with our curated spa treatments, yoga sessions, and holistic wellness programs.",
    date: "August 5, 2026",
    author: "Spa Director",
    category: "Wellness",
    image: "/room/room with view .jpg",
  },
  {
    slug: "best-cocktails-in-bangkok",
    title: "Best Cocktails in Bangkok",
    excerpt: "Our mixologist shares the secrets behind our signature oriental-inspired cocktails that you must try during your stay.",
    date: "July 30, 2026",
    author: "Bar Manager",
    category: "Dining",
    image: "/room/double room.jpg",
  },
  {
    slug: "family-friendly-hotel-tips",
    title: "Family-Friendly Hotel Tips",
    excerpt: "Everything you need to know to make your family vacation comfortable, fun, and memorable at Hotel Booking Oriental.",
    date: "July 25, 2026",
    author: "Guest Relations",
    category: "Travel",
    image: "/room/small room .jpg",
  },
];

const categories = ["All", "Travel", "Dining", "Hotel", "Wellness"];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden bg-[#1a3c2a] sm:h-[400px]">
        <img
          src="/room/apartment.jpg"
          alt="News & Blog"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] tracking-[4px] text-white/60 uppercase">Latest stories</p>
          <h1 className="mt-3 font-serif text-[36px] font-medium text-white sm:text-[44px] lg:text-[52px]">
            News & Blog
          </h1>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-[1250px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[300px] overflow-hidden sm:h-[400px]">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Featured</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-[12px] text-gray-400">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {blogPosts[0].date}</span>
              <span className="flex items-center gap-1.5"><User size={13} /> {blogPosts[0].author}</span>
            </div>
            <h2 className="mt-4 font-serif text-[28px] font-medium text-[#1a1a1a] sm:text-[34px] lg:text-[40px]">
              {blogPosts[0].title}
            </h2>
            <p className="mt-5 max-w-[500px] text-[14px] leading-[28px] text-gray-500">
              {blogPosts[0].excerpt}
            </p>
            <Link
              href={`/news/${blogPosts[0].slug}`}
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-[2px] text-[#245d55] transition-colors hover:text-[#1a3c2a]"
            >
              READ MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#f8f6f2] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <span className="text-[10px] font-bold tracking-[4px] text-[#245d55] uppercase">Our Blog</span>
            <div className="h-px w-8 bg-[#c9a96e]" />
          </div>
          <h2 className="mt-4 text-center font-serif text-[36px] font-medium text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
            Latest Articles
          </h2>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="rounded-full border border-[#245d55]/20 bg-white px-5 py-2 text-[12px] font-medium text-gray-500 transition-all hover:border-[#245d55] hover:bg-[#245d55] hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#245d55] px-3 py-1 text-[10px] font-bold tracking-[1px] text-white uppercase">
                      <Tag size={10} /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-[18px] font-medium text-[#1a1a1a] transition-colors group-hover:text-[#245d55]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[22px] text-gray-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#245d55] transition-colors hover:text-[#1a3c2a]"
                  >
                    READ MORE <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          <div className="rounded bg-[#1a3c2a] px-6 py-14 text-center sm:px-12">
            <h2 className="font-serif text-[30px] font-medium text-white sm:text-[36px]">
              Stay Updated
            </h2>
            <p className="mx-auto mt-3 max-w-[500px] text-[14px] leading-[26px] text-white/60">
              Subscribe to our newsletter for the latest news, exclusive offers, and travel inspiration.
            </p>
            <div className="mx-auto mt-8 flex max-w-[450px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-white/20 bg-white/10 px-4 py-3 text-[13px] text-white placeholder-white/40 focus:border-white/50 focus:outline-none"
              />
              <button className="bg-[#c9a96e] px-6 py-3 text-[11px] font-bold tracking-[2px] text-[#1a3c2a] transition-colors hover:bg-[#b8944a]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
