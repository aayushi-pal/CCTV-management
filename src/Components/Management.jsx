function Management() {
  const users = [
    {
      id: "#68d22e850882d8ab38bfdd76",
      name: "shivam",
      email: "shivam12@gmail.com",
    },
    {
      id: "#68ce55ed76ce1d18432a0e1c",
      name: "yuvraj singh",
      email: "yuvraj@gmail.com",
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">
          User Management Dashboard
        </h1>

        <div className="space-x-2"> 
          <button className="px-4 py-2 bg-[#a259f7] text-white rounded hover:bg-[#8a2af7]">
            + Add User
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            ⟳ Refresh
          </button>
        </div>
      </header>

      {/* Search & Filter */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button className="px-4 py-2 border rounded hover:bg-gray-100">
          ⚙️ Filter
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <h2 className="bg-[#e6d7f8] text-[#a259f7] font-medium px-4 py-2 border-b flex items-center gap-2">
          👥 Users ({users.length})
        </h2>

        <table className="w-full text-left">
          <thead className="bg-[#a259f7] text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">EMAIL</th>
              <th className="px-4 py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  {user.name}
                </td>
                <td className="px-4 py-2 text-gray-600">{user.email}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-[#30c968] text-white rounded-md hover:bg-[#17d55d]">
                    ✏ Edit
                  </button>
                  <button className="px-3 py-1 bg-[#ff4a4a] text-white rounded-md hover:bg-[#f72323]">
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Management;
