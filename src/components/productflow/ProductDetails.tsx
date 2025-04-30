import { FileAxis3d, FileImage, SendHorizontal } from "lucide-react";
import React, { useState } from "react";

interface ProductDetailProps {
  productName?: string;
  approvalStatus?: string;
  color?: string;
  material?: string;
  quantity?: number;
  note?: string;
  labelType?: string;
  managerName?: string;
  merchandiserName?: string;
  productImage?: string;
  files?: Array<{ name: string }>;
  trascationDate?: string;
  trascationID?: string;
  modeOfTransaction?: string;
  totalAmount?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productName = "OVERLAPPED SEQUIN TUBE GOWN",
  approvalStatus = "Approved",
  color = "White",
  material = "Cotton",
  quantity = 60,
  note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  labelType = "White Label",
  managerName = "Manager's Name",
  merchandiserName = "Merchandiser's Name",
  productImage = "/lovable-uploads/ad918eff-8036-47f8-b82d-65bc5b42e8d3.png",
  files = Array(6).fill({ name: "File Name" }),
  trascationDate = "20 Aug 2025",
  trascationID = "ID12345678",
  modeOfTransaction = "Stripe",
  totalAmount = "₹10,0001",
}) => {
  const [selectedTab, setSelectedTab] = useState("previous");
  return (
    <div className=" max-w-7xl mx-auto">
      {/* Product Details Card */}
      <div className="border border-gray-300 bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Product details */}
          <div className="lg:w-1/2 pr-4">
            <h1 className="text-xl font-semibold font-playfair mb-2">
              {productName}{" "}
              <span className="font-normal text-xl px-2 text-gray-500">|</span>{" "}
              <span className="font-normal font-monster">Party</span>
            </h1>
            <div className="mb-4">
              <span className="text-sm ">Approval : </span>
              <span
                className={`text-sm font-semibold ${
                  approvalStatus === "Approved"
                    ? "text-green-400"
                    : "text-red-500"
                }`}
              >
                {approvalStatus}
              </span>
            </div>

            {/* <div className="flex mb-4 text-sm">
              <div className="mr-8">
                <span className="mr-1">Color :</span>
                <span className="font-medium">{color}</span>
              </div>
              <div className="mr-8">
                <span className="mr-1">Material :</span>
                <span className="font-medium">{material}</span>
              </div>
              <div>
                <span className="mr-1">Quantity :</span>
                <span className="font-medium">{quantity}</span>
              </div>
            </div> */}

            <p className="text-sm text-gray-600 pb-8">
              Color{"  "}:{" "}
              <span className="font-bold text-gray-800">
                {"  "}
                {color}
              </span>{" "}
              &nbsp;|&nbsp; Material{"  "}:{" "}
              <span className="font-bold text-gray-800">
                {"  "}
                {material}
              </span>{" "}
              &nbsp;|&nbsp; Quantity {"  "} :{" "}
              <span className="font-bold text-gray-800">
                {"  "} {quantity}
              </span>
            </p>

            <div className="mb-4 border-t border-gray-200 pt-6">
              <p className="font-medium mb-1">Note</p>
              <p className="text-sm">{note}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2">Label Type</p>
              <div className="inline-block border border-gray-500 hover:bg-black hover:text-white rounded-full px-4 py-1">
                <span className="text-sm">{labelType}</span>
              </div>
            </div>

            <div className="flex justify-center w-full border-t pt-4">
              <div className="flex divide-x-2 items-center divide-gray-400 mb-10">
                {/* Manager Section */}
                <div className="flex flex-col items-center px-6 mr-20 text-center">
                  <p className="text-sm text-gray-600 mb-1">Assigned Manager</p>
                  <p className="text-base font-semibold mb-2">{managerName}</p>
                  <button className="bg-black text-white text-base px-5 py-1.5 rounded-full flex items-center justify-between">
                    Message
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg> */}
                    <SendHorizontal size={15} className="ml-3 mt-0.5" />
                  </button>
                </div>

                {/* Merchandiser Section */}
                <div className="flex flex-col items-center pl-20 text-center">
                  <p className="text-sm text-gray-600 mb-1">
                    Assigned Merchandiser
                  </p>
                  <p className="text-base font-semibold mb-2">
                    {merchandiserName}
                  </p>
                  <button className="bg-black text-white text-base px-5 py-1.5 rounded-full flex items-center justify-between">
                    Message
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg> */}
                    <SendHorizontal size={15} className="ml-3 mt-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className=" max-h-[480px] max-w-485px] mt-4 mx-auto lg:mt-0">
            <img
              src={
                "https://images.pexels.com/photos/5558228/pexels-photo-5558228.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt={productName}
              className="w-full h-full  rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="">
          <h4 className="text-md font-semibold text-gray-800 ml-5">
            Product Stages
          </h4>
          <div className="p-6 rounded-2xl bg-gray-100 m-4">
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              {["Sampling", "Production", "Shipping", "Delivered"].map(
                (stage) => (
                  <div
                    key={stage}
                    className="flex items-center text-gray-800 font-semibold"
                  >
                    <span className="mr-2 w-4 h-4 bg-gray-400 rounded-full inline-block"></span>
                    {stage}
                  </div>
                )
              )}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-white rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gray-800 h-2.5 rounded-full transition-all duration-500"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Files section */}
      <div className="mb-6 bg-white rounded-xl px-6 py-5">
        <h2 className="font-semibold text-lg mb-4">Files</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
          {files.map((file, index) => (
            <div key={index} className="flex flex-col  items-start">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full border mb-2 flex justify-center items-center">
                  {/* <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg> */}
                  <FileAxis3d size={40} />
                </div>
                <p className="text-xs font-medium text-center">{file.name}</p>
                <button className="bg-black text-white text-xs px-4 py-1 rounded-lg mt-1">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment summary */}
      <div className="bg-white rounded-xl px-6 py-5 mt-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">Payment Summary</h2>
          <div className="flex mb-2 border-gray-200 bg-white rounded-full border">
            {/* Sliding black background */}
            <div className="flex border-gray-200 rounded-full bg-white">
              <div className="bg-white rounded-full p-1 flex relative ">
                <div
                  className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 bg-black  rounded-full transition-all duration-300 ${
                    selectedTab === "custom" ? "translate-x-full" : ""
                  }`}
                ></div>
                <button
                  onClick={() => setSelectedTab("white-label")}
                  className={`relative z-10 px-4 py-2.5 text-sm font-semibold rounded-full mr-2 transition-all duration-300 ${
                    selectedTab === "white-label" ? "text-white" : "text-black"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setSelectedTab("custom")}
                  className={`relative z-10 px-4 mr-2 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    selectedTab === "custom" ? "text-white" : "text-black"
                  }`}
                >
                  Due
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 flex justify-between">
          <span className="text-sm">Trascation Date</span>
          <span className="text-sm font-semibold">{trascationDate}</span>
        </div>
        <div className=" py-3 flex justify-between">
          <span className="text-sm">Trascation ID</span>
          <span className="text-sm font-semibold">{trascationID}</span>
        </div>
        <div className=" py-3 flex justify-between">
          <span className="text-sm">Mode Of Transaction</span>
          <span className="text-sm font-semibold">{modeOfTransaction}</span>
        </div>
        <div className=" py-3 flex justify-between">
          <span className="text-sm font-semibold">Total Amount</span>
          <span className="text-sm font-semibold">{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
