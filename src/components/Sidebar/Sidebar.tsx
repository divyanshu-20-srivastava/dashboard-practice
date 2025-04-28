import { useState } from "react";
import {
  Home,
  FileText,
  FolderDot,
  Wallet,
  Tag,
  Award,
  Inbox,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/public/assets/logo.svg";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: FileText, label: "Proposals" },
  { icon: FolderDot, label: "Projects" },
  { icon: Wallet, label: "Wallet & Payments" },
  { icon: Tag, label: "Offers" },
  { icon: Award, label: "White Label" },
  { icon: Settings, label: "Add On" },
  { icon: Inbox, label: "Inbox" },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={cn(
        "bg-white border-r p-6 fixed md:static top-0 left-0 h-full w-64 z-40 transition-transform",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0"
      )}
    >
      <div className="flex items-center justify-between md:hidden mb-6">
        <img src={logo} alt="" />
        <button onClick={onClose} className="text-black text-2xl font-bold">
          &times;
        </button>
      </div>

      <div className="hidden md:flex items-center gap-2 mb-8">
        <img src={logo} alt="" />
      </div>

      <nav>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer transition-colors text-gray-400 hover:bg-gray-100 hover:text-black"
          >
            <item.icon size={20} />
            <span className="text-[18px] font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
