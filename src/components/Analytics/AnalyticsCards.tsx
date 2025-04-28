import dollar from "@/public/assets/dollar.svg";
import total from "@/public/assets/total.svg";
import confirmed from "@/public/assets/confirmed.svg";

const cardData = [
  { title: "Wallet Payments", value: "$150,000", icon: dollar },
  { title: "Total Submitted", value: "1,250", icon: total },
  { title: "Confirmed", value: "1,226", icon: confirmed },
];

const containerClasses = [
  "bg-black text-white rounded-3xl shadow",
  "bg-white rounded-3xl shadow",
  "bg-white rounded-3xl shadow",
];
const circleBgClasses = ["bg-teal-100", "bg-pink-100", "bg-blue-100"];
const textColors = ["text-white", "text-gray-600", "text-gray-600"];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className={`${containerClasses[idx]} p-6 flex items-center gap-4`}
        >
          <div className={`${circleBgClasses[idx]} rounded-full p-3`}>
            <img src={card.icon} alt={card.title} className="w-6 h-6" />
          </div>
          <div>
            <p className={`text-sm opacity-70 font-medium ${textColors[idx]}`}>
              {card.title}
            </p>
            <p className={`text-2xl font-semibold ${textColors[idx]}`}>
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
