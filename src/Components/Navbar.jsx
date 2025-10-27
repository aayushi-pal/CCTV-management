export default function Navbar() {
  return (
    <nav className="w-full bg-[#a259f7] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        📹 CCTV Manage
      </h1>

      {/* Buttons */}
      <div className="flex gap-6">
        <button className="bg-transparent border-none text-white text-base cursor-pointer opacity-70 hover:opacity-100 transition">
          Login
        </button>
        <button className="bg-transparent border-none text-white text-base cursor-pointer border-b-2 border-white">
          Register
        </button>
      </div>
    </nav>
  );
}
