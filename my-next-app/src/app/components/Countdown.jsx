"use client";

import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-06-11T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-auto md:h-[700px] bg-none md:bg-[url('/countdown.webp')] bg-cover bg-center py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5 flex items-center justify-end  text-black"
    >
      <div className=" bg-opacity-90 p-8 w-full max-w-2xl text-left ">
        <p className="text-lg font-bold uppercase">Deal of the Week</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-5">Roland Grand White Short Checkered T-shirt</h1>
        <p className="text-gray-800 mt-5 text-lg">
          Limited-time offer! Grab this exclusive deal before it ends. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam.
        </p>
        <div className="flex flex-wrap justify-start gap-4 text-2xl font-semibold my-7">
          <span className="w-12 text-center">{timeLeft.days}d</span>:
          <span className="w-12 text-center">{timeLeft.hours}h</span>:
          <span className="w-12 text-center">{timeLeft.minutes}m</span>:
          <span className="w-12 text-center">{timeLeft.seconds}s</span>
        </div>
        <button className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black border hover:border-black cursor-pointer font-bold transition-all w-full md:w-auto">
          Shop Now
        </button>
        <p className="text-lg text-gray-800 mt-6">
          Offer expires on <span className="font-bold">June 11, 2025</span>. Hurry up!
        </p>
      </div>
    </div>
  );
};

export default Countdown;
