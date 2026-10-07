import { useEffect, useState } from "react";
// import { Navigate, Route, Routes } from 'react-router'
// import { Navigate, Route, Routes } from 'react-router-dom'

import { starterProducts } from "./data/products.js";

import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ShopLayout from "./layouts/ShopLayout.jsx";
import { Navigate, Route, Routes } from "react-router";

function App() {
  const [products, setProducts] = useState(starterProducts);

  // Current logged-in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = `${products.length} products | Stock Starter`;
  }, [products.length]);

  function addProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  // Called after successful login
  function handleLogin(userData) {
    setUser(userData);
  }

  // Logout
  function handleLogout() {
    setUser(null);
  }

  return (
    <Routes>
      {/* =========================
          LOGIN
      ========================= */}

      <Route
        path="/login"
        element={
            <LoginPage onLogin={handleLogin} />
        }
      />

      {/* =========================
          ADMIN / MAIN LAYOUT
      ========================= */}

      <Route
        element={
            <MainLayout onLogout={handleLogout} />
        }
      >
        <Route path="/" element={<HomePage products={products} />} />

        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />

        <Route
          path="/add-product"
          element={<AddProductPage onAddProduct={addProduct} />}
        />

        <Route path="/users" element={<UserPage />} />

        <Route path="/categories" element={<CategoriesPage />} />
      </Route>

      {/* =========================
          CUSTOMER / SHOP LAYOUT
      ========================= */}

      <Route
        element={
            <ShopLayout onLogout={handleLogout} />
        }
      >
        <Route
          path="/shop"
          element={
            <div>
              <h1>Shop</h1>
              <p>Welcome to Korean Beauty Shop.</p>
            </div>
          }
        />
      </Route>

      {/* =========================
          PAGE NOT FOUND
      ========================= */}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
