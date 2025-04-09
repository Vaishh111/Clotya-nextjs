import React from "react";

const Newseason = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-12 xl:px-24 mt-10 md:flex-row gap-4 p-4">
      
      <div
        className="relative w-full md:w-1/2 h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('season-1.webp')" }}
      >
        <div className=" p-6 md:p-8 w-2/3">
          <p className="text-sm font-semibold">NEW SEASON</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Show your best jewellery of your life
          </h2>
          <p className="text-gray-600 mt-2">Don’t miss the opportunity.</p>
          <a href="#" className="mt-4 inline-block font-semibold text-black">
            Shop Now →
          </a>
        </div>
      </div>
      <div
        className="relative w-full md:w-1/2 h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('season-2.webp')" }}
      >
        <div className=" p-6 md:p-8 w-2/3">
          <p className="text-sm font-semibold">NEW SEASON</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Big patterns are back in fashion.
          </h2>
          <p className="text-gray-600 mt-2">Don't miss the opportunity.</p>
          <a href="#" className="mt-4 inline-block font-semibold text-black">
            Shop Now 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newseason;