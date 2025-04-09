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
      
      <div className="bg-black h-10 flex items-center justify-center px-4 text-white text-xs sm:text-sm text-center">
        <p className="flex items-center gap-2">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
          <span className="font-bold cursor-pointer">SHOP NOW</span>
        </p>
      </div>


      <div className="hidden md:flex h-10 bg-white items-center justify-between px-4 lg:px-28 text-xs sm:text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaInstagram className="text-base" />
            <p className="font-bold">3.1M Followers</p>
          </div>
          <p className="hidden sm:flex text-black">
            Free Shipping Worldwide for all orders over $199.
            <span className="text-red-800 font-bold cursor-pointer"> Click and Shop Now.</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="cursor-pointer">Order Tracking</p>
          <div className="relative">
            <p onClick={() => setLanguageOpen(!languageOpen)} className="cursor-pointer">English ▼</p>
            {languageOpen && (
              <div className="absolute bg-white border shadow-md w-32 mt-2 right-0 z-50">
                <p className="p-2 hover:bg-gray-100 cursor-pointer">English</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">French</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">Spanish</p>
              </div>
            )}
          </div>
          <div className="relative">
            <p onClick={() => setCurrencyOpen(!currencyOpen)} className="cursor-pointer">USD ▼</p>
            {currencyOpen && (
              <div className="absolute bg-white border shadow-md w-20 mt-2 right-0 z-50">
                <p className="p-2 hover:bg-gray-100 cursor-pointer">USD</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">EUR</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer">INR</p>
              </div>
            )}
          </div>
        </div>
      </div>

     
      <div className="h-16 border flex items-center justify-between px-4 lg:px-28 bg-white">
        <div className="flex items-center gap-4">
          <button className="text-2xl md:hidden" onClick={() => setMenuOpen(true)}>
            <AiOutlineMenu />
          </button>
          <h1 className="text-2xl font-bold">Clotya®</h1>
        </div>

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

        <div className="flex items-center gap-4 text-2xl">
          <MdOutlinePerson className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
        </div>
      </div>

     
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>}

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
        <h3 className="font-semibold text-gray-700  mb-3">Main Menu</h3>
        <ul className="space-y-3 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop ▼</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Outerwear▼</li>
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
          <li className="cursor-pointer flex items-center gap-2">
            Shoes <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">HOT</span>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Topbar;
