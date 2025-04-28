import SubscriptionCard from "@/components/SubscriptionCard/SubscriptionCard";
import CallBookingCard from "@/components/SubscriptionCard/CallBookingCard";

const SubscriptionPage = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <SubscriptionCard />
      <CallBookingCard />
    </div>
  );
};

export default SubscriptionPage;
