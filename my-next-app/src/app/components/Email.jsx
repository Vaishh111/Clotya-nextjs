import React from "react";

const Email = () => {
  return (
    <div className="bg-black text-white py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5 flex flex-col md:flex-row justify-between items-center md:items-start">

      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold">
          Get our emails for info on <br className="hidden md:block" /> new items, sales and more.
        </h2>
        <p className="text-white mt-5">
          We’ll email you a voucher worth £10 off your first order over £50.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-stretch">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 text-black bg-white w-full sm:w-80 rounded-md focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-3 mt-5 sm:mt-0 sm:ml-2 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
        <p className="text-white text-sm mt-5">
          By subscribing you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy & Cookies Policy</a>.
        </p>
      </div>


      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-right">
        <h2 className="text-2xl font-semibold">Need help?</h2>
        <p className="text-lg font-bold text-gray-300">(+800) 1234 5678 90</p>
        <p className="text-gray-400 mt-3">We are available 8:00am – 7:00pm</p>
        <div className="mt-7 flex justify-center md:justify-end gap-2">
          <img src="/app-store.png" alt="Download on the App Store" className="w-36" />
          <img src="/google-play.png" alt="Get it on Google Play" className="w-36" />
        </div>
        <p className="text-gray-500 text-sm mt-5 font-semibold">
          Shopping App: <span className="font-normal">Try our View in Your Room feature, manage registries and save payment info.</span>
        </p>
      </div>
    </div>
  );
};

export default Email;
