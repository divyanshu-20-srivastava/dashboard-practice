import { Check, CheckCircle } from "lucide-react";

const benefits = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const SubscriptionCard = () => {
  return (
    <div className="border container rounded-2xl p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-2 font-playfair">
        Buy Subscription to Unlock Dashboard
      </h2>
      <p className="text-gray-600 text-base font-normal mb-6 border-b-2 border-gray-200 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>

      <p className="mb-6 font-semibold text-lg">Benifits</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="text-blue-500 w-6 h-6 bg-gray-100 rounded-full p-1 " />
            <span className=" text-gray-700 font-medium text-base">
              {benefit}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full bg-black text-white rounded-xl py-3 font-semibold">
        Buy Subscription
      </button>
    </div>
  );
};

export default SubscriptionCard;
