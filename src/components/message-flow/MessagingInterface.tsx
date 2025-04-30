"use client";

import { useState } from "react";

export default function MessagingInterface() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage("");
    }
  };

  return (
    <div className="flex w-full h-screen rounded-xl ">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 rounded-3xl bg-white flex flex-col max-h-[600px]">
        <div className="px-5 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold font-playfair">Lorem Ipsum</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 px-2 text-xs font-medium border-b-2 border-black">
            Proposal
          </button>
          <button className="flex-1 py-3 px-2 text-xs font-medium text-gray-500">
            Projects
          </button>
          <button className="flex-1 py-3 px-2 text-xs font-medium text-gray-500">
            Add On
          </button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div
              key={item}
              className="p-4 hover:bg-[#EFE6DF] rounded-xl m-2 flex items-center space-x-3 "
            >
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5558228/pexels-photo-5558228.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div
                className="text-base font-semibold line-clamp-1 tracking-tight font-playfair"
                style={{ letterSpacing: "-1px" }}
              >
                OVERLAPPED SEQUIN TUNIC
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Messages */}
      <div className="flex-1 flex flex-col bg-white rounded-3xl shadow-3xl ml-4 mr-2 max-h-[600px] overflow-y-auto scrollbar-hide">
        <div className="px-5 py-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold font-playfair">Messages</h1>
        </div>

        {/* Messages Container */}
        <div className="flex-1 px-5 py-4 overflow-y-auto flex flex-col space-y-8 scrollbar-hide">
          {/* Date Header */}
          <div className="flex justify-center pt-2">
            <div className="text-sm text-gray-400">
              Thursday, Jan 4 • 6:21 PM
            </div>
          </div>

          {/* First User Messages */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-medium">
              MD
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-xs text-gray-900 font-semibold">
                Name | Manager
              </div>
              <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs">
                <p className="text-sm">Yo mandem</p>
              </div>
              <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs">
                <p className="text-sm">Cho dey house?</p>
              </div>
            </div>
          </div>

          {/* Second User Messages */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-medium">
              MD
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-xs text-gray-900 font-semibold">
                Name | Merchandiser
              </div>
              <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs">
                <p className="text-sm">Yo mandem</p>
              </div>
              <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs">
                <p className="text-sm">Cho dey house?</p>
              </div>
            </div>
          </div>

          {/* Your Messages */}
          <div className="flex flex-col items-end space-y-1 self-end">
            <div className="flex items-center space-x-2 mb-1">
              <div className="text-xs font-semibold text-gray-900">
                Your Name
              </div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs">
                You
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs">
              <p className="text-sm">Lorem ipsum dolor</p>
            </div>
            <div className="bg-gray-100 rounded-2xl py-2.5 px-4 max-w-xs mt-1">
              <p className="text-sm">Lorem ipsum</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-white shadow-2xl rounded-full  px-5 py-4 flex items-center">
              <input
                type="text"
                placeholder="Type Message"
                className="flex-1 bg-transparent outline-none text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button className="text-gray-400 hover:text-gray-600 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ transform: "rotate(90deg)" }}
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
