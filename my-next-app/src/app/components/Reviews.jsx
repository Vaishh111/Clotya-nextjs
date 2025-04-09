'use client'; // 👈 Add this line at the very top

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  {
    id: 1,
    name: 'Teresa Holland',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
  {
    id: 2,
    name: 'Scarlett Edwards',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
  {
    id: 3,
    name: 'Teresa Holland',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
  {
    id: 1,
    name: 'Teresa Holland',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
  {
    id: 4,
    name: 'Vishal',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
  {
    id: 2,
    name: 'Scarlett Edwards',
    review: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.',
  },
];

const Reviews = () => {
  return (
    <div className="max-w-8xl mx-auto text-center py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5">
      <h2 className="text-3xl font-bold">Latest Buyers Reviews</h2>
      <p className="text-gray-500 mt-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="mt-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-6 sm:p-8 md:p-10 rounded-lg shadow-lg h-[300px] flex flex-col justify-between bg-white">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-red-500 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-base sm:text-lg">{review.review}</p>
                <p className="text-gray-400 mt-4 text-sm sm:text-md">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
