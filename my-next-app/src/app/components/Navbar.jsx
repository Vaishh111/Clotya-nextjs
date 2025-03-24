"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="px-5 md:px-12 xl:px-32">
        <div className="grid grid-cols-1  md:grid-cols-3 h-auto md:h-[600px] gap-4">
          {/* Left Sidebar with Dropdown */}
          <div className="p-4 ">
            <button
              className="flex items-center  gap-2 text-black text-lg font-semibold"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All Categories
              <ChevronDown className={`transform transition-all ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 bg-white border rounded-lg p-4"
              >
                <ul className="text-gray-800 space-y-2">
                  <li className="cursor-pointer">Men</li>
                  <li className="cursor-pointer">Women</li>
                  <li className="cursor-pointer">Kids</li>
                  <li className="cursor-pointer">Shoes</li>
                  <li className="cursor-pointer">Bags</li>
                  <li className="cursor-pointer">Accessories</li>
                  <li className="cursor-pointer">Watches</li>
                  <li className="cursor-pointer">Cargo Trousers</li>
                  <li className="cursor-pointer">Outwears</li>
                  <li className="cursor-pointer">Belt</li>
                  <li className="cursor-pointer">Best Sellers</li>
                  <li className="cursor-pointer">Featured Products</li>
                </ul>
                <hr className="my-4 border-gray-300" />
                <ul className="space-y-3">
                  <li className="cursor-pointer">New Arrivals</li>
                  <li className="cursor-pointer">Ready to Wear</li>
                  <li className="cursor-pointer">All for Men</li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right Content */}
          <div className="col-span-2 flex flex-col gap-10">
            {/* Navigation Menu */}
            <div className="nav p-4 border-b">
              <ul className="flex flex-wrap gap-6 text-black font-medium text-xl">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">Women</li>
                <li className="cursor-pointer">Men</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Outerwear</li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* Image Slider */}
            <div className="px-5">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-lg overflow-hidden"
              >
                <SwiperSlide>
                  <img src="/image-1.jpg" alt="Fashion 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/image-2.jpg" alt="Fashion 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/image-3.jpg" alt="Fashion 3" className="w-full h-auto" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
