export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-teal-100">
      <div className="bg-white w-[380px] p-8 rounded-xl shadow-lg text-center">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-4xl">📹</span> CCTV Manage
          </h2>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="button"
            className="bg-teal-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-teal-800 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-4 text-gray-600 text-base">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-teal-700 font-bold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
