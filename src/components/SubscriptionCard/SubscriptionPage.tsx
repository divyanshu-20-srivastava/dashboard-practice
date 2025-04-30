import SubscriptionCard from "@/components/SubscriptionCard/SubscriptionCard";
import CallBookingCard from "@/components/SubscriptionCard/CallBookingCard";

const SubscriptionPage = () => {
  return (
    <div className=" space-y-8  min-h-screen">
      <SubscriptionCard />
      <CallBookingCard />
    </div>
  );
};

export default SubscriptionPage;
