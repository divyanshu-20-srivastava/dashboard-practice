import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

const PersonalInformation: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-8">
        {/* Personal Information Header */}
        <div className="flex justify-between items-center border-b-2 pb-4 mb-4 border-b-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h2>
          <Button
            variant="outline"
            className="h-9 px-5 py-6 bg-black text-white hover:bg-black/90 rounded-xl flex items-center gap-2"
          >
            <Pencil className="w-4 h-4" />
            <span>Edit Details</span>
          </Button>
        </div>

        {/* Personal Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6">
          {/* First Column */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <p className="text-sm font-semibold">Cristofer</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Website of your company</p>
              <p className="text-sm font-semibold">22 August, 1985</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-sm font-semibold">
                dr.cristofergeorge@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-sm font-semibold">12345676</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Job Title</p>
              <p className="text-sm font-semibold">English, French</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Session Mode</p>
              <p className="text-sm font-semibold">Inperson, Online</p>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Company Name</p>
              <p className="text-sm font-semibold">Cristofer</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Company Email</p>
              <p className="text-sm font-semibold">22 August, 1985</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Job Title</p>
              <p className="text-sm font-semibold">
                dr.cristofergeorge@gmail.com
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Currency Dealt In</p>
              <p className="text-sm font-semibold">Cristofer</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Tax Code</p>
              <p className="text-sm font-semibold">22 August, 1985</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">PAN Card</p>
              <p className="text-sm font-semibold">
                dr.cristofergeorge@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Address Section */}
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 divide-y-2 divide-gray-200">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Address</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
          {/* Billing Address */}
          <div className="space-y-1">
            <p className="text-sm text-gray-500 mb-4">Billing Address</p>
            <p className="text-sm font-semibold">123 Main Street,</p>
            <p className="text-sm font-semibold">Springfield, USA, 12345</p>
          </div>

          {/* Current Address */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Current Address</p>
            <p className="text-sm font-semibold">123 Main Street,</p>
            <p className="text-sm font-semibold">Springfield, USA, 12345</p>
          </div>

          {/* Shipping Address */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Shipping Address</p>
            <p className="text-sm font-semibold">123 Main Street,</p>
            <p className="text-sm font-semibold">Springfield, USA, 12345</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
