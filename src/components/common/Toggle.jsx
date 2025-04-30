import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ChevronDown,
  ChevronRight,
  User,
  Lock,
  FileText,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Toggle = ({
  className,
  options,
  name = "Name Of User",
  email = "User@gmail.com",
  contentClass,
  position = "left",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;

      if (buttonRect) {
        const spaceBelow = windowHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        setDropdownPosition(spaceBelow >= dropdownHeight ? "bottom" : "top");
      }
    }
  }, [isOpen]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative inline-block font-monster"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar Button */}
      <button
        ref={buttonRef}
        className={twMerge("flex items-center cursor-pointer", className)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {children ? (
          children // <-- render custom children if passed
        ) : (
          <div className="rounded-full bg-gray-800 text-white w-10 h-10 flex items-center justify-center font-semibold text-sm">
            {name?.charAt(0)?.toUpperCase()}
          </div>
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={twMerge(
            `absolute ${
              dropdownPosition === "bottom" ? "top-full" : "bottom-full"
            } 
          ${position === "left" ? "right-0" : "left-0"} 
          bg-white border border-gray-200 rounded-2xl shadow-md z-10 w-64 overflow-hidden
          animate-fade-slide`, // <-- Added custom animation class
            contentClass
          )}
          role="menu"
        >
          {/* User Information */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-3">
            <div className="rounded-full bg-gray-800 text-white w-10 h-10 flex items-center justify-center font-semibold text-lg">
              {name?.charAt(0)?.toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">{name}</p>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
          </div>

          {/* Options List */}
          <ul className="text-sm py-2">
            {options?.map((option, index) => (
              <li key={index}>
                {option?.link ? (
                  <Link
                    to={option?.link || "#"}
                    className={`flex items-center gap-3 px-4 py-3 transition font-medium ${
                      option.isDanger
                        ? "text-red-500 hover:bg-red-100"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      option?.onClick?.();
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 transition font-medium ${
                      option.isDanger
                        ? "text-red-500 hover:bg-red-100"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    role="menuitem"
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Toggle;
