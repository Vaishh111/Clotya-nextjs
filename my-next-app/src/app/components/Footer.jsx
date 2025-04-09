import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="max-w-9xl mx-auto"> {/* Increased max-w to make content wider */}
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-4  gap-9">
        
          <div>
            <h2 className="text-6xl font-bold">Clotya®</h2> {/* Increased font size for "Clotya" */}
            <p className="text-lg text-gray-600 mt-3"> {/* Increased font size of description */}
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis in temporol.
            </p>
            <p className="mt-2 text-sm">(+800) 1234 5678 90 – info@example.com</p>
          </div>

          <div className="secondpart pl-26 flex sm:text-left gap-32">
            {/* Added margin-bottom to create gap */}
            <div className="md:col-span-1 mt-6 md:mt-0">
              <h3 className="font-semibold text-3xl mb-6">Information</h3> {/* Increased font size */}
              <ul className="text-lg space-y-3"> {/* Increased space between list items */}
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Returns Policy</li>
                <li>Shipping Policy</li>
                <li>Dropshipping</li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold text-3xl mb-6">Account</h3> {/* Increased font size */}
              <ul className="text-lg space-y-3"> {/* Increased space between list items */}
                <li>Dashboard</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Account Details</li>
                <li>Track My Orders</li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold text-3xl mb-6">Shop</h3> {/* Increased font size */}
              <ul className="text-lg space-y-3"> {/* Increased space between list items */}
                <li>Affiliate</li>
                <li>Bestsellers</li>
                <li>Discount</li>
                <li>Latest Products</li>
                <li>Sale Products</li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold text-3xl mb-6">Categories</h3> {/* Increased font size */}
              <ul className="text-lg space-y-3"> {/* Increased space between list items */}
                <li>Women</li>
                <li>Men</li>
                <li>Bags</li>
                <li>Outerwear</li>
                <li>Shoes</li>
              </ul>
            </div>
            
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-lg text-gray-600"> {/* Increased font size */}
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
