import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import ProductList from "./Components/ProductList.jsx";
import Product from "./Components/Product.jsx";
import Management from "./Components/Management.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar (fixed left). Pass state and setter */}
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />

      {/* Right content area: margin-left equals sidebar width when open */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-80" : "ml-0"
        }`}
      >
         

        <main className="p-6 overflow-y-auto flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product" element={<Product />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
