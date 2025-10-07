function ProductList() {
  const products = [
    {
      id: "i4rjui34",
      name: "rj34io",
      brand: "Reolink",
      category: "Access Control",
      price: "₹34.00",
      stock: 42,
      added: "20/09/2025 at 11:59:56 am",
      status: "In Stock",
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Product List</h1>
          <p className="text-black">
            View and manage all your products ({products.length} items)
          </p>
        </div>
        <button className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800">
          ⟳ Refresh
        </button>
      </header>

      {/* Search & Filter */}
      <div className="bg-white shadow rounded-2xl mb-6 p-4">
        <h2 className="text-lg font-medium text-teal-900 mb-3">
          🔍 Search & Filter Products
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search products, brands, or model numbers..."
            className="flex-1 border rounded px-3 py-2"
          />
          <select className="border rounded px-3 py-2">
            <option>All Categories</option>
            <option>Access Control</option>
            <option>Bullet </option>
            <option>Dome </option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <h2 className="bg-teal-100 text-teal-900 font-medium px-4 py-2 border-b">
          📦 Product List ({products.length} items)
        </h2>

        <table className="w-full text-left">
          <thead className=" text-teal-800">
            <tr>
              <th className="px-4 py-2">PRODUCT</th>
              <th className="px-4 py-2">BRAND</th>
              <th className="px-4 py-2">CATEGORY</th>
              <th className="px-4 py-2">PRICE</th>
              <th className="px-4 py-2">STOCK</th>
              <th className="px-4 py-2">ADDED</th>
              <th className="px-4 py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center rounded bg-gray-200">
                      📦
                    </span>
                    <div>
                      <p className="font-medium">{p.id}</p>
                      <p className="text-gray-500 text-sm">{p.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{p.brand}</td>
                <td className="px-4 py-2">{p.category}</td>
                <td className="px-4 py-2 font-semibold">{p.price}</td>
                <td className="px-4 py-2">{p.stock}</td>
                <td className="px-4 py-2 text-gray-600">{p.added}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
