import {
  HomeIcon,
  PlusCircleIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

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
  { icon: <HomeIcon className="h-6 w-6 text-yellow-500" />, label: "Dashboard", path: "/dashboard" },
  { icon: <PlusCircleIcon className="h-6 w-6 text-green-500" />, label: "Add Product", path: "/product" },
  { icon: <UsersIcon className="h-6 w-6 text-pink-500" />, label: "User Management", path: "/management" },
  { icon: <ClipboardDocumentListIcon className="h-6 w-6 text-purple-500" />, label: "Product List", path: "/productlist" },
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const handleLogout = () => {
    alert("Logout successful!");
  };

  return (
    <>
      {/* Sidebar container: width = w-80, translate toggled by `open` */}
      <aside
        className={`fixed top-0 left-0 h-screen z-40 w-80 bg-gradient-to-b from-[#E2C4F9] via-[#FFEBEB] to-[#F6F0FB]
          shadow-2xl flex flex-col transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header: camera + title + toggle chevron */}
        <div className="p-6 flex items-center justify-between border-b border-[#A259F7] bg-[#A259F7]">
          <div className="flex items-center gap-3">
            <CameraIcon className="h-10 w-12 rounded-lg shadow-lg" />
            <h1 className="text-2xl font-extrabold text-white tracking-tight drop-shadow">CCTV Manager</h1>
          </div>

          {/* Toggle button: chevron left when open, right when closed */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close sidebar" : "Open sidebar"}
            className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md"
          >
            {open ? (
              <ChevronLeftIcon className="h-5 w-5 text-[#A259F7]" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-[#A259F7]" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-3 text-[#3A323A] overflow-auto">
          {sidebarItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 shadow font-medium
                ${location.pathname === item.path ? "bg-white shadow-lg border-l-4 border-[#A259F7]" : ""}
              `}
            >
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white shadow mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-[#A259F7] text-xs text-[#A259F7] bg-[#F6F0FB]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 focus:outline-none shadow hover:shadow-lg font-medium hover:bg-[#FFEBEB] hover:text-[#FF4A4A] text-[#FF4A4A]"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Floating open button when closed (edge button) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-6 left-4 z-50 p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50"
          aria-label="Open sidebar"
        >
          <ChevronRightIcon className="h-5 w-5 text-[#A259F7]" />
        </button>
      )}
    </>
  );
}
