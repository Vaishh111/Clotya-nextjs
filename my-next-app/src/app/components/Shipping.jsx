import React from 'react';
import { FaShippingFast, FaUndo, FaHeadset, FaCreditCard } from 'react-icons/fa';

const Shipping = () => {
  return (
    <div className="flex flex-wrap justify-between mt-10 items-center px-4 sm:px-6 md:px-12 xl:px-24 p-6 border-t gap-6 md:gap-4 lg:flex-nowrap">
      <div className="flex items-center space-x-3 w-full sm:w-1/2 lg:w-auto">
        <FaShippingFast size={40} />
        <div>
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Free Shipping for orders over £130.</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 w-full sm:w-1/2 lg:w-auto">
        <FaUndo size={30} />
        <div>
          <h3 className="font-semibold">Money Guarantee</h3>
          <p className="text-gray-500 text-sm">Within 30 days for an exchange.</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 w-full sm:w-1/2 lg:w-auto">
        <FaHeadset size={30} />
        <div>
          <h3 className="font-semibold">Online Support</h3>
          <p className="text-gray-500 text-sm">24/7 support available.</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 w-full sm:w-1/2 lg:w-auto">
        <FaCreditCard size={30} />
        <div>
          <h3 className="font-semibold">Flexible Payment</h3>
          <p className="text-gray-500 text-sm">Pay with multiple credit cards.</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
