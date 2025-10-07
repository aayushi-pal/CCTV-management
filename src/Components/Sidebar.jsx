import { HomeIcon, PlusCircleIcon, UsersIcon, ClipboardDocumentListIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

// SVG Camera Icon Component (no border)
function CameraIcon({ className }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 512 512" fill="none">
      <circle cx="256" cy="304" r="192" fill="#FF4A4A" />
      <rect x="128" y="176" width="256" height="256" rx="128" fill="#D3D3D3" />
      <circle cx="256" cy="304" r="64" fill="#E2C4F9" stroke="#3A323A" strokeWidth="32" />
      <rect x="128" y="32" width="256" height="96" rx="48" fill="#D3D3D3" />
      <rect x="128" y="32" width="256" height="96" rx="48" fill="#C4C4C4" opacity="0.5" />
    </svg>
  );
}

const sidebarItems = [
  {
    icon: <HomeIcon className="h-6 w-6 text-yellow-500" />,
    label: "Dashboard",
    path: "/dashboard",
    bg: "hover:bg-yellow-100",
    text: "hover:text-yellow-700"
  },
  {
    icon: <PlusCircleIcon className="h-6 w-6 text-green-500" />,
    label: "Add Product",
    path: "/product",
    bg: "hover:bg-green-100",
    text: "hover:text-green-700"
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-pink-500" />,
    label: "User Management",
    path: "/management",
    bg: "hover:bg-pink-100",
    text: "hover:text-pink-700"
  },
  {
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-purple-500" />,
    label: "Product List",
    path: "/productlist",
    bg: "hover:bg-purple-100",
    text: "hover:text-purple-700"
  }
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  // Dummy logout function
  const handleLogout = () => {
    alert("Logout successful!");
  };

  return (
    <>
      <aside
        className={`fixed md:static top-0 left-0 h-screen z-40 w-72 bg-gradient-to-b from-[#E2C4F9] via-[#FFEBEB] to-[#F6F0FB] shadow-2xl flex flex-col transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        <div
          className="p-6 flex items-center gap-3 border-b border-[#A259F7] bg-[#A259F7] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <CameraIcon className="h-10 w-12 rounded-lg shadow-lg" />
          <h1 className="text-2xl font-extrabold text-white tracking-tight drop-shadow flex-1">
            CCTV Manager
          </h1>
        </div>

        {/* Sidebar navigation items */}
        <nav className="flex-1 p-6 space-y-3 text-[#3A323A]">
          {sidebarItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 shadow font-medium ${item.bg} ${item.text}
                ${location.pathname === item.path ? "bg-white shadow-lg border-l-4 border-[#A259F7]" : ""}`}
            >
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white shadow mr-2">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout button */}
        <div className="p-6 border-t border-[#A259F7] text-xs text-[#A259F7] bg-[#F6F0FB] flex flex-col gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 focus:outline-none shadow hover:shadow-lg font-medium hover:bg-[#FFEBEB] hover:text-[#FF4A4A] text-[#FF4A4A]"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
