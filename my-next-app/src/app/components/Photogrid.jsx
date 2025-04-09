import React from 'react';

const Photogrid = () => {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6 p-4 sm:px-6 md:px-12 xl:px-24 lg:h-[100vh]">

      <div className="relative bg-gray-100 flex flex-col justify-end md:col-span-2 lg:col-span-1 h-[400px] md:h-[500px] lg:h-auto">
        <img
          src="/photogrid-1.jpg"
          alt="Fashion Pattern"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-10 z-10 p-6 bg-opacity-80">
          <p className="text-sm font-semibold text-gray-500">NEW SEASON</p>
          <h2 className="text-2xl font-bold">Big patterns are back in fashion</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="text-black font-semibold mt-4 inline-block">
            Shop Now →
          </a>
        </div>
      </div>
   
      <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
        
        <div className="relative bg-gray-100 p-6 flex flex-col justify-end h-[300px] md:h-[400px] lg:h-[50%]">
          <img
            src="/photogrid-2.webp"
            alt="Men's Fashion"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-10 z-10 p-6 bg-opacity-80">
            <p className="text-sm font-semibold text-gray-500">NEW SEASON</p>
            <h2 className="text-xl font-bold">The latest men's trends this season</h2>
            <p className="text-gray-600 mt-2">Don't miss the opportunity.</p>
            <a href="#" className="text-black font-semibold mt-4 inline-block">
              Shop Now →
            </a>
          </div>
        </div>

        <div className="relative bg-gray-100 p-6 flex flex-col justify-end h-[300px] md:h-[400px] lg:h-[50%]">
          <img
            src="/photogrid-3.jpg"
            alt="Summer Shoes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-10 z-10 p-6 bg-opacity-80">
            <p className="text-sm font-semibold text-gray-500">NEW SEASON</p>
            <h2 className="text-xl font-bold">Show your fashion with summer shoes</h2>
            <p className="text-gray-600 mt-2">Don't miss the opportunity.</p>
            <a href="#" className="text-black font-semibold mt-4 inline-block">
              Shop Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogrid;