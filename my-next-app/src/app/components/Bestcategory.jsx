"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const categories = [
  { name: "Shoes", image: "/shoe.jpg" },
  { name: "Outerwear", image: "/outwear.webp" },
  { name: "Cargo Trousers", image: "/cargo-trouser.webp" },
  { name: "Accessories", image: "/accessories.webp" },
  { name: "Men", image: "/men.webp" },
  { name: "Women", image: "/women.webp" },
];

const BestCategory = () => {
  return (
    <div className="w-full py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5">
      <h2 className="text-xl text-center font-semibold mb-4">
        Best for your categories
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg overflow-hidden 
                            w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px]">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestCategory;
