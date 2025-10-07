function Dashboard() {
  return (
    <div className="flex">
      
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            CCTV Inventory Dashboard
          </h1>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1"
          />
        </header>

        {/* Cards */}
        <section className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded p-4 text-center">
            <p>Total Products</p>
            <h2 className="text-xl font-bold">2</h2>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p>Inventory Value</p>
            <h2 className="text-xl font-bold">₹76,230.00</h2>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p>Today's New</p>
            <h2 className="text-xl font-bold">2</h2>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p>Low Stock</p>
            <h2 className="text-xl font-bold">0</h2>
          </div>
        </section>

        {/* Product Table */}
        <section className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Today's New Products (2)</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">PRODUCT</th>
                <th className="border p-2 text-left">CATEGORY</th>
                <th className="border p-2 text-left">PRICE</th>
                <th className="border p-2 text-left">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Wireless CCTV Camera</td>
                <td className="border p-2">Bullet</td>
                <td className="border p-2">₹2,030.00</td>
                <td className="border p-2 text-green-600 font-bold">In Stock</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
