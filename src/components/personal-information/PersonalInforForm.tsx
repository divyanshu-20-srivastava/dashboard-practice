"use client";

import React, { useState } from "react";

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    currencyDealtIn: "",
    website: "",
    companyEmail: "",
    taxCode: "",
    phoneNumber: "",
    jobTitle: "",
    sessionMode: "",
    billingAddress: "",
    currentAddress: "",
    shippingMode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-6">
      {" "}
      {/* Adjust xl:ml-64 based on your sidebar width */}
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
        {/* Personal Information */}
        <div className="border bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-semibold border-b border-gray-200 pb-4 mb-6">
            Edit Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-xs mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs mb-2">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="currencyDealtIn" className="block text-xs mb-2">
                Currency Dealt In
              </label>
              <input
                id="currencyDealtIn"
                name="currencyDealtIn"
                type="text"
                value={formData.currencyDealtIn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="website" className="block text-xs mb-2">
                Website of your company
              </label>
              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="companyEmail" className="block text-xs mb-2">
                Company Email
              </label>
              <input
                id="companyEmail"
                name="companyEmail"
                type="email"
                value={formData.companyEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="taxCode" className="block text-xs mb-2">
                Tax Code
              </label>
              <input
                id="taxCode"
                name="taxCode"
                type="text"
                value={formData.taxCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-xs mb-2">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="jobTitle" className="block text-xs mb-2">
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="sessionMode" className="block text-xs mb-2">
                Session Mode
              </label>
              <input
                id="sessionMode"
                name="sessionMode"
                type="text"
                value={formData.sessionMode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-semibold border-b border-gray-200 pb-3 mb-6">
            Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="billingAddress" className="block text-xs mb-2">
                Billing Address
              </label>
              <textarea
                id="billingAddress"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 h-24"
              />
            </div>

            <div>
              <label htmlFor="currentAddress" className="block text-xs mb-2">
                Current Address
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 h-24"
              />
            </div>

            <div>
              <label htmlFor="shippingMode" className="block text-xs mb-2">
                Shipping Mode
              </label>
              <textarea
                id="shippingMode"
                name="shippingMode"
                value={formData.shippingMode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 h-24"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pb-8">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
}
