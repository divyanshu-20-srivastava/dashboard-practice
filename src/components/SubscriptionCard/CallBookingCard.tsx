import bookacall from "@/public/assets/bookacall.svg";

const CallBookingCard = () => {
  return (
    <div className="border rounded-2xl p-6 bg-white flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2 font-monster">
          Buy Subscription to Unlock Dashboard
        </h2>
        <p className="text-gray-600 text-base font-normal mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>

        <button className="bg-black  text-white rounded-xl py-3 px-6 font-semibold text-base min-w-full md:w-auto">
          Book a call
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bookacall}
          alt="Book a Call Illustration"
          className="max-w-xs w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CallBookingCard;
