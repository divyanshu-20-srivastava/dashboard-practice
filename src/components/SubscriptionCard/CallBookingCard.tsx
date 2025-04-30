import bookacall from "@/public/assets/bookacall.svg";

const CallBookingCard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="border rounded-2xl p-6 bg-white flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 font-monster text-center md:text-left">
            Buy Subscription to Unlock Dashboard
          </h2>
          <p className="text-gray-600 text-base font-normal mb-6 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white rounded-xl py-3 px-6 font-semibold text-base w-full md:w-auto">
              Book a call
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bookacall}
            alt="Book a Call Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CallBookingCard;
