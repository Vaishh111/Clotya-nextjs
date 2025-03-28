import React from 'react';
import { FaShippingFast, FaUndo, FaHeadset, FaCreditCard } from 'react-icons/fa';

const Shipping = () => {
  return (
    <div className="flex justify-between items-center p-6 border-t">
      <div className="flex items-center space-x-3">
        <FaShippingFast size={30} />
        <div>
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Free Shipping for orders over £130.</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <FaUndo size={30} />
        <div>
          <h3 className="font-semibold">Money Guarantee</h3>
          <p className="text-gray-500 text-sm">Within 30 days for an exchange.</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <FaHeadset size={30} />
        <div>
          <h3 className="font-semibold">Online Support </h3>
          <p className="text-gray-500 text-sm">Within 30 days for an exchange. </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <FaCreditCard size={30} />
        <div>
          <h3 className="font-semibold">Flexible Payment</h3>
          <p className="text-gray-500 text-sm">Pay with Multiple Credit Cards.</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
