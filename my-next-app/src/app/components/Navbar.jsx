"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 xl:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[600px] gap-6">
        {/* Dropdown - hidden on small screens */}
        <div className="p-4 relative hidden md:block" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 text-black text-lg font-semibold hover:text-blue-600 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            All Categories
            <ChevronDown className={`transform transition-all ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
          </button>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-white shadow-lg border rounded-lg p-4 absolute z-10 w-64"
            >
              <ul className="text-gray-800 space-y-2">
                {[
                  "Men", "Women", "Kids", "Shoes", "Bags", "Accessories", "Watches",
                  "Cargo Trousers", "Outerwear", "Belt", "Best Sellers", "Featured Products"
                ].map((item) => (
                  <li key={item} className="cursor-pointer hover:text-blue-600 transition">{item}</li>
                ))}
              </ul>
              <hr className="my-4 border-gray-300" />
              <ul className="space-y-3">
                {["New Arrivals", "Ready to Wear", "All for Men"].map((item) => (
                  <li key={item} className="cursor-pointer hover:text-blue-600 transition">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          <div className="nav p-4 border-b">
            <ul className="flex flex-wrap gap-4 sm:hidden sm:gap-6 text-black font-medium text-sm sm:text-md">
              {["Home", "Shop", "Women", "Men", "Blog", "Outerwear", "Contact Us"].map((item) => (
                <li key={item} className="cursor-pointer hover:text-blue-600 transition">{item}</li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              breakpoints={{
                640: { pagination: { clickable: true } }, // Pagination only for devices above 640px
                0: { pagination: false }, // No pagination for small devices
              }}
              className="mySwiper"
            >
              {[
                { src: "/girl.webp", title: "WINTER 2022 COLLECTION", text: "Street Fashion not only for the street" },
                { src: "/girl-2.webp", title: "Exclusive Collection", text: "Shop our premium handpicked items." },
                { src: "/image-3.jpg", title: "Limited Edition", text: "Don't miss out on our exclusive designs." }
              ].map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img src={slide.src} alt={`Fashion ${index + 1}`} className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-20">
                      <h2 className="text-base sm:text-lg font-light pb-2">{slide.title}</h2>
                      <p className="text-2xl sm:text-4xl font-semibold">{slide.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
