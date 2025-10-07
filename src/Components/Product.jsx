function Product() {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-black flex items-center gap-2">
            📦 CCTV Product Form
          </h1>
          <p className="text-black text-md p-6">
            Fill in the product details to add to your inventory
          </p>
        </div>


      {/* Product Information */}
      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold border-b pb-2 flex justify-between items-center mb-10">
          📋 Product Information

          <div className="space-x-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            ✖ Clear
          </button>
          <button className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800">
            💾 Save
          </button>
        </div>

        </h2>

        {/* Basic Information */}
        <div className="mb-10">
          <h3 className="text-md font-medium mb-2 flex items-center gap-2">
            📝 Basic Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Model Number *
              </label>
              <input
                type="text"
                placeholder="Enter Model Number"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Brand & Category */}
        <div className="mb-10">
          <h3 className="text-md font-medium mb-2 flex items-center gap-2">
            🏷 Brand & Category
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Brand *</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select Brand</option>
                <option>Hikvision</option>
                <option>Dahua</option>
                <option>CP Plus</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select Category</option>
                <option>Bullet</option>
                <option>Dome</option>
                <option>PTZ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & Inventory */}
        <div className="mb-10">
          <h3 className="text-md font-medium mb-2 flex items-center gap-2">
            💰 Pricing & Inventory
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price *</label>
              <input
                type="number"
                placeholder="Enter Price"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stock Quantity *</label>
              <input
                type="number"
                placeholder="Enter Quantity"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div>
          <h3 className="text-md font-medium mb-2 flex items-center gap-2">
            ⚙️ Technical Specifications
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Resolution *</label>
              <input
                type="text"
                placeholder="Enter Resolution (e.g. 1080p)"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Lens Type *</label>
              <input
                type="text"
                placeholder="Enter Lens Type"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Power Supply *</label>
              <input
                type="text"
                placeholder="Enter Power Supply"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Storage *</label>
              <input
                type="text"
                placeholder="Enter Storage Capacity"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
