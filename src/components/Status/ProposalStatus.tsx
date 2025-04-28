import { ArrowRight } from "lucide-react";

const productCards = [
  {
    id: 1,
    title: "Product List / Name",
    quantity: "25 - Quantity",
    status: "Pending",
    image:
      "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al...",
  },
  {
    id: 2,
    title: "Product List / Name",
    quantity: "30 - Quantity",
    status: "Pending",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al...",
  },
  {
    id: 3,
    title: "Product List / Name",
    quantity: "15 - Quantity",
    status: "Pending",
    image:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=600",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al...",
  },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-2xl p-4 bg-white shadow-sm relative">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-semibold text-[18px] font-monster">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500">{product.quantity}</p>
      </div>

      {/* Small Icon Button */}
      <button className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    {/* Image with Badge on top-right */}
    <div className="relative aspect-[4/3] mb-4">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Status Badge */}
      <span className="absolute top-2 right-2 inline-flex items-center rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-yellow-500 shadow-sm">
        {product.status}
      </span>
    </div>

    <div>
      <h4 className="font-semibold mb-2 text-base font-monster">Note</h4>
      <p className="text-sm font-normal text-gray-500">{product.note}</p>
    </div>
  </div>
);

const ProposalStatus = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {" "}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Proposal Status</h2>
        <button className="inline-flex items-center text-sm text-gray-500 hover:underline">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide -ml-4 pl-4">
        {productCards.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProposalStatus;
