import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "OVERLAPPED SEQUIN TUBE GOWN",
    category: "Party",
    image:
      "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
    approval: "Approved",
    color: "White",
    material: "Cotton",
    quantity: 60,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "OVERLAPPED SEQUIN TUBE GOWN",
    category: "Party",
    image:
      "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
    approval: "Approved",
    color: "White",
    material: "Cotton",
    quantity: 60,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ProductCard = () => {
  const [selectedTab, setSelectedTab] = useState("white-label");

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Tabs */}
      <div className="flex justify-center md:justify-start mb-4">
        <div className="bg-gray-200 rounded-full p-1 inline-flex relative">
          <div
            className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 bg-black rounded-full transition-all duration-300 ${
              selectedTab === "custom" ? "translate-x-full" : ""
            }`}
          ></div>
          <button
            onClick={() => setSelectedTab("white-label")}
            className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              selectedTab === "white-label" ? "text-white" : "text-black"
            }`}
          >
            White Label
          </button>
          <button
            onClick={() => setSelectedTab("custom")}
            className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              selectedTab === "custom" ? "text-white" : "text-black"
            }`}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Products Loop */}
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl mb-8"
        >
          <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* Image */}
            <div className="w-full md:w-56 flex-shrink-0">
              <img
                className="w-full h-56 object-cover rounded-2xl"
                src={product.image}
                alt={product.title}
              />
            </div>

            {/* Info */}
            <div className="flex-grow space-y-4">
              {/* Title & Button */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 border-b md:border-b-0 md:border-r-2 md:pr-4 border-gray-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all whitespace-nowrap">
                  View Details &gt;
                </button>
              </div>

              {/* Product Meta */}
              <div className="text-sm text-gray-700 border-b pb-4 space-y-2">
                <p>
                  Approval:{" "}
                  <span className="text-green-500 font-semibold">
                    {product.approval}
                  </span>
                </p>
                <p>
                  Color: <span className="font-semibold">{product.color}</span>{" "}
                  | Material:{" "}
                  <span className="font-semibold">{product.material}</span> |
                  Quantity:{" "}
                  <span className="font-semibold">{product.quantity}</span>
                </p>
              </div>

              {/* Note */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Note</h4>
                <p className="text-sm text-gray-600">{product.note}</p>
              </div>
            </div>
          </div>

          {/* Product Stages */}
          <div className="px-4 pb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Product Stages</h4>
            <div className="bg-gray-100 p-4 rounded-2xl">
              <div className="flex flex-wrap justify-between text-sm text-gray-700 mb-3">
                {["Sampling", "Production", "Shipping", "Delivered"].map(
                  (stage) => (
                    <div key={stage} className="flex items-center mb-2 md:mb-0">
                      <span className="mr-2 w-4 h-4 bg-gray-400 rounded-full"></span>
                      {stage}
                    </div>
                  )
                )}
              </div>
              <div className="w-full bg-white rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gray-800 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
