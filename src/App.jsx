import react from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import ProductList from "./Components/ProductList.jsx";
import Product from "./Components/Product.jsx";
import Management from "./Components/Management.jsx";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
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