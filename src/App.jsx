import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import ProductList from "./Components/ProductList.jsx";
import Product from "./Components/Product.jsx";
import Management from "./Components/Management.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar open={isOpen} setOpen={setIsOpen} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isOpen ? "ml-72" : "ml-0"
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

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
          </>
        }
      />
      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Register />
          </>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
