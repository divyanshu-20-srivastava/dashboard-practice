import { useState } from "react";
import { Bell, Settings, Menu } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import AnalyticsCards from "../Analytics/AnalyticsCards";
import ProposalStatus from "../Status/ProposalStatus";
import ProjectStatus from "../Status/ProjectStatus";
import RecentMessages from "../Messages/RecentMessages";
import Transactions from "../Transactions/Transactions";
import notifications from "@/public/assets/notifications.svg";
import avatarimg from "@/public/assets/profile.jpg";
import SubscriptionPage from "../SubscriptionCard/SubscriptionPage";
import Toggle from "../common/Toggle";
import ProductCard from "../productflow/productCard";
import ProductDetail from "../productflow/ProductDetails";
import MessagingInterface from "../message-flow/MessagingInterface";
import PersonalInformation from "../personal-information/PerosnalInformation";
import PersonalInfoForm from "../personal-information/PersonalInforForm";

const products = [
  {
    id: 1,
    name: "OVERLAPPED SEQUIN TUBE GOWN",
    category: "Party",
    image:
      "https://images.pexels.com/photos/6311449/pexels-photo-6311449.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "White Label",
    approval: "Approved",
    color: "White",
    material: "Cotton",
    quantity: 60,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stage: "Sampling",
  },
  {
    id: 2,
    name: "OVERLAPPED SEQUIN TUBE GOWN",
    category: "Party",
    image:
      "https://images.pexels.com/photos/6311449/pexels-photo-6311449.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "White Label",
    approval: "Approved",
    color: "White",
    material: "Cotton",
    quantity: 60,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stage: "Production",
  },
  {
    id: 3,
    name: "OVERLAPPED SEQUIN TUBE GOWN",
    category: "Party",
    image:
      "https://images.pexels.com/photos/6311449/pexels-photo-6311449.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "White Label",
    approval: "Approved",
    color: "White",
    material: "Cotton",
    quantity: 60,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stage: "Delivered",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<
    "projects" | "inbox" | "offers"
  >("projects");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        selectedMenu={selectedMenu}
        onSelect={(label) => {
          if (label === "Projects") {
            setSelectedMenu("projects");
            setSelectedProject(null);
          } else if (label === "Inbox") {
            setSelectedMenu("inbox");
          } else if (label === "Offers") {
            setSelectedMenu("offers");
          }
        }}
      />

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 block sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )} */}

      {/* Main content */}
      <div className="flex-1 p-6 md:p-4 bg-gray-100  z-10">
        {/* Top bar */}
        <div className="flex justify-between px-5 py-2 items-center mb-6">
          <div className="flex items-center gap-4">
            {/* Menu button on mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden pr-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>

            <h1 className="text-[24px] md:text-[28px] font-semibold font-playfair">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings size={20} />
            </button> */}
            <button className="p-3 bg-gray-200 rounded-full">
              <img
                src={notifications}
                alt="Notifications"
                className="w-5 h-5"
              />
            </button>
            <Toggle
              name="John Doe"
              email="john.doe@example.com"
              options={[
                {
                  label: "Profile",
                  icon: <Settings size={16} />, // You can use a user icon if available
                  link: "/profile",
                },
                {
                  label: "Terms and Conditions",
                  icon: <Bell size={16} />, // Replace with a document icon if available
                  link: "/terms",
                },
                {
                  label: "Privacy Policy",
                  icon: <Bell size={16} />, // Replace with a document icon if available
                  link: "/privacy",
                },
                {
                  label: "Logout",
                  icon: <Menu size={16} />,
                  onClick: () => alert("Logged out!"),
                  isDanger: true, // <-- mark this dangerous
                },
              ]}
              className="ml-2"
              contentClass=""
              position="left"
            >
              <div className="rounded-full size-10 overflow-hidden">
                <img
                  src={avatarimg}
                  alt="Profile"
                  className="rounded-full w-full h-full"
                />
              </div>
            </Toggle>
          </div>
        </div>

        {/* Main sections */}
        <div className="space-y-8 ">
          {/* <section className="bg-white p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 font-playfair">
              Summary Analytics
            </h2>
            <AnalyticsCards />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProposalStatus />
            <ProjectStatus />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentMessages />
            <Transactions />
          </div> */}

          <SubscriptionPage />
          {/* {products.map((product) => ( */}
          {/* <ProductCard key={product.id} product={product} /> */}
          {/* {selectedMenu === "projects" &&
            (selectedProject === null ? (
              <>
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProject(product.id)}
                  >
                    <ProductCard />
                  </div>
                ))}
              </>
            ) : (
              <ProductDetail />
            ))} */}
          {/* <ProductCard /> */}
          {/* {selectedMenu === "inbox" && <MessagingInterface />} */}
          {/* {selectedMenu === "offers" && <PersonalInformation />} */}
          {/* <ProductDetail /> */}
          {/* <MessagingInterface /> */}
          {/* <PersonalInformation /> */}
          {/* <PersonalInfoForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
