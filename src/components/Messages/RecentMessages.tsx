import { Avatar } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react"; // <-- For right arrow icon

const messages = [
  {
    name: "James Benny",
    message: "Hey, Let me know if you're still available...",
    avatar:
      "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2",
  },
  {
    name: "James Benny",
    message: "Hey, Let me know if you're still available...",
    avatar:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "James Benny",
    message: "Hey, Let me know if you're still available...",
    avatar:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const RecentMessages = () => {
  return (
    <div className="p-6 rounded-2xl bg-white shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-monster">Recent Messages</h2>
        <button className="text-sm text-black hover:underline font-medium">
          View All
        </button>
      </div>

      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg">
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="font-semibold text-base">{message.name}</p>
                <p className="text-sm text-gray-500">{message.message}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;
