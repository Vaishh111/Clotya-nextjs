import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-5 gap-9">
        
          <div>
            <h2 className="text-4xl font-bold">Clotya®</h2>
            <p className="text-sm text-gray-600 mt-3">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis in temporol.
            </p>
            <p className="mt-2 text-sm">(+800) 1234 5678 90 – info@example.com</p>
          </div>

        
          <div>
            <h3 className="font-semibold text-2xl mb-4">Information</h3>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li>Shipping Policy</li>
              <li>Dropshipping</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-2xl mb-4">Account</h3>
            <ul className="text-sm space-y-1">
              <li>Dashboard</li>
              <li>My Orders</li>
              <li>My Wishlist</li>
              <li>Account Details</li>
              <li>Track My Orders</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-2xl mb-4">Shop</h3>
            <ul className="text-sm space-y-1">
              <li>Affiliate</li>
              <li>Bestsellers</li>
              <li>Discount</li>
              <li>Latest Products</li>
              <li>Sale Products</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-2xl mb-4">Categories</h3>
            <ul className="text-sm space-y-1">
              <li>Women</li>
              <li>Men</li>
              <li>Bags</li>
              <li>Outerwear</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>

       
        <hr className="my-6 border-gray-300" />

        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>Copyright 2025 © Clotya WoordPress Theme. All rights reserved. Powered by KLBTheme.</p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <img src="/cards.png" alt="Payment Methods" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
