import { Avatar } from "@/components/ui/avatar";

const transactions = [
  {
    name: "Product Name/List",
    date: "13/09/2022",
    amount: "$54,000",
    status: "Successful",
  },
  {
    name: "Product Name/List",
    date: "13/09/2022",
    amount: "$54,000",
    status: "Successful",
  },
  {
    name: "Product Name/List",
    date: "13/09/2022",
    amount: "$54,000",
    status: "Successful",
  },
  {
    name: "Product Name/List",
    date: "13/09/2022",
    amount: "$54,000",
    status: "Successful",
  },
  {
    name: "Product Name/List",
    date: "13/09/2022",
    amount: "$54,000",
    status: "Successful",
  },
];

const Transactions = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-playfair font-semibold mb-6">Transactions</h2>

      <div className="space-y-4 max-h-52 overflow-y-auto scrollbar-hide">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2"
                  alt="User"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{transaction.amount}</p>
              <p className="text-sm text-green-500">{transaction.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
