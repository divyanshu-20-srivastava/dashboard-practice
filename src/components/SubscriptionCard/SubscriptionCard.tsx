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
    <div className="border rounded-2xl p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-2 font-monster">
        Buy Subscription to Unlock Dashboard
      </h2>
      <p className="text-gray-600 text-base font-normal mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="text-blue-500 w-5 h-5 bg-gray-200 rounded-md p-1 " />
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
