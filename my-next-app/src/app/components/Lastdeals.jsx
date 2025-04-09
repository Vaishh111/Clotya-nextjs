import React from "react";

const LastDeals = () => {
  const products = [
    {
      id: 1,
      title: "Short Nylon-Effect Puffer Jacket",
      price: "$29.90 – $39.90",
      discount: "26%",
      image: "/drip-4.webp",
      oldPrice: "",
      reviews: 2,
      rating: 5,
      available: 15,
      sold: 84,
      timeLeft: { days: 68, hours: 23, minutes: 19, seconds: 47 },
    },
    {
      id: 2,
      title: "Blue Starter Logo T-shirt",
      price: "$18.70",
      discount: "18%",
      image: "/drip-3.webp",
      oldPrice: "$22.70",
      reviews: 1,
      rating: 5,
      available: 72,
      sold: 62,
      timeLeft: { days: 66, hours: 23, minutes: 19, seconds: 47 },
    },
  ];

  return (
    <div className="py-10 px-5 sm:px-6 md:px-12 xl:px-24 bg-white">
      <h2 className="text-2xl text-center font-bold mb-2">
        Don’t Miss The Last Deals
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-[#dee0ea] p-4 md:p-6 flex flex-col sm:flex-row items-start rounded-2xl shadow-sm"
          >
            <div className="relative w-full sm:w-1/3 mb-5 sm:mb-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-xl"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            </div>

            <div className="w-full sm:w-2/3 sm:pl-4">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-xl font-bold text-gray-900 mb-2">
                {product.price}
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-3 text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </p>

              <div className="flex items-center text-yellow-500 text-sm mb-3">
                {"★".repeat(product.rating)}
                <span className="text-gray-600 ml-2">
                  {product.reviews} review{product.reviews > 1 ? "s" : ""}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quidem,
                magnam.
              </p>

              <p className="text-sm font-medium mb-1">
                Offer ends in:{" "}
                <span className="font-bold">
                  {product.timeLeft.days} : {product.timeLeft.hours} : {product.timeLeft.minutes} : {product.timeLeft.seconds}
                </span>
              </p>

              <p className="text-gray-600 text-sm">
                Available: {product.available} - Sold: {product.sold}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastDeals;
