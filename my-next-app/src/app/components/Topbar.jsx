"use client";

import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdOutlinePerson } from "react-icons/md";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <>
      {/* Black Announcement Bar */}
      <div className="bg-black h-[40px]  w-full flex items-center justify-center px-4">
        <p className="text-white text-[10px] sm:text-[12px] md:text-[13px] text-center flex items-center gap-2 sm:gap-3">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
          <span className="font-bold text-white cursor-pointer">SHOP NOW</span>
        </p>
      </div>

      {/* White Top Bar */}
      <div className="h-[40px] w-full md:flex bg-white hidden items-center justify-between px-4 lg:px-28">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaInstagram className="text-sm sm:text-base" />
            <p className="text-[10px] sm:text-[12px] md:text-[13px] font-bold">3.1M Followers</p>
          </div>
          <p className="hidden sm:flex text-black text-[10px] sm:text-[12px] md:text-[13px] items-center gap-2 sm:gap-3">
            Free Shipping Worldwide for all orders over $199.
            <span className="text-red-800 font-bold cursor-pointer">Click and Shop Now.</span>
          </p>
        </div>

        {/* Icons & Dropdowns */}
        <div className="flex items-center gap-3 sm:gap-5 text-[12px]">
          <p className="cursor-pointer">Order Tracking</p>
          <div className="relative">
            <p onClick={() => setLanguageOpen(!languageOpen)} className="cursor-pointer">English ▼</p>
            {languageOpen && (
              <div className="absolute bg-white border z-50 shadow-md w-32 mt-2 right-0">
                <p className="p-2 hover:bg-gray-100 cursor-pointer">English</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">French</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">Spanish</p>
              </div>
            )}
          </div>
          <div className="relative">
            <p onClick={() => setCurrencyOpen(!currencyOpen)} className="cursor-pointer">USD ▼</p>
            {currencyOpen && (
              <div className="absolute bg-white z-50 border shadow-md w-20 mt-2 right-0">
                <p className="p-2 hover:bg-gray-100 cursor-pointer">USD</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">EUR</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">INR</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-[60px] w-full border  flex bg-white items-center justify-between px-4 lg:px-28">
        <div className="flex items-center gap-3">
          <button className="text-2xl" onClick={() => setMenuOpen(true)}>
            <AiOutlineMenu />
          </button>
          <h1 className="text-2xl font-bold">Clotya®</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg bg-gray-100 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search your favorite product..."
            className="px-3 py-2 w-full outline-none text-sm"
          />
          <button className="px-4 bg-gray-100">
            <FiSearch />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex flex-row gap-4 items-center text-2xl">
          <MdOutlinePerson className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
        </div>
      </div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>
      )}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-50 p-6"
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl">
          <AiOutlineClose />
        </button>

        <h2 className="text-2xl font-bold mb-6">Clotya®</h2>
        <h3 className="font-semibold text-gray-700 mb-3">Main Menu</h3>
        <ul className="space-y-3 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop ▼</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Outerwear</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
     
      <hr className="my-4 border-gray-300" />
          <h3 className="font-semibold text-gray-700 mt-6 mb-3">Categories</h3>
          <ul className="space-y-3 text-lg">
            <li className="cursor-pointer">Men ▼</li>
            <li className="cursor-pointer">Women ▼</li>
            <li className="cursor-pointer">Kids</li>
            <li className="cursor-pointer">Baby</li>
            <li className="cursor-pointer flex items-center gap-2">Shoes <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">HOT</span></li>
          </ul>
          </motion.div>
    
    
    </>
  );
};

export default Topbar;
