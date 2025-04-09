"use client";

import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperCore = dynamic(() => import("swiper/react"), { ssr: false });

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const products = [
    {
        id: 1,
        image: "drip-1.webp",
        discount: "24%",
        title: "Basic Colored Sweatpants With Elastic Hems",
        price: "$19.90",
        oldPrice: "$25.90",
        reviews: "2 reviews",
    },
    {
        id: 2,
        image: "drip-2.webp",
        tag: "TRENDING",
        title: "Basic High-Neck Puff Jacket",
        price: "$89.00",
        reviews: "1 review",
    },
    {
        id: 3,
        image: "drip-3.webp",
        discount: "17%",
        title: "Basic Relax Fit Leggings",
        price: "$24.90",
        oldPrice: "$29.90",
        reviews: "1 review",
    },
    {
        id: 4,
        image: "drip-4.webp",
        discount: "14%",
        title: "Check Overshirt With Pocket Detail",
        price: "$112.00",
        oldPrice: "$129.00",
        reviews: "1 review",
    },
    {
        id: 1,
        image: "drip-1.webp",
        discount: "24%",
        title: "Basic Colored Sweatpants With Elastic Hems",
        price: "$19.90",
        oldPrice: "$25.90",
        reviews: "2 reviews",
    },
    {
        id: 2,
        image: "drip-2.webp",
        tag: "TRENDING",
        title: "Basic High-Neck Puff Jacket",
        price: "$89.00",
        reviews: "1 review",
    },
    {
        id: 3,
        image: "drip-3.webp",
        discount: "17%",
        title: "Basic Relax Fit Leggings",
        price: "$24.90",
        oldPrice: "$29.90",
        reviews: "1 review",
    },
    {
        id: 4,
        image: "drip-4.webp",
        discount: "14%",
        title: "Check Overshirt With Pocket Detail",
        price: "$112.00",
        oldPrice: "$129.00",
        reviews: "1 review",
    },
];

const Bestseller = () => {
  return (
    <section className="py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5">
      <h2 className="text-3xl font-bold text-center">Best Seller Products</h2>
      <p className="text-gray-500 text-center mt-2 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay running even when user interacts
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col relative min-h-[500px]">
              {product.discount && (
                <span className="bg-green-500 text-white px-2 py-1 text-sm absolute top-2 left-2">
                  {product.discount}
                </span>
              )}
              {product.tag && (
                <span className="bg-gray-700 text-white px-2 py-1 text-sm absolute top-2 right-2">
                  {product.tag}
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded"
              />
              <p className="text-sm text-gray-500 mt-2">{product.reviews}</p>
              <h3 className="text-lg font-semibold mt-1 flex-grow">{product.title}</h3>
              <div className="mt-auto">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                )}
                <span className=" text-xl font-bold">{product.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Bestseller;
