import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { starterProducts } from './data/products.js'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AddProductPage from './pages/AddProductPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TeamOnePage from './pages/TeamOnePage.jsx'
import TeamTwoPage from './pages/TeamTwoPage.jsx'
import TeamLayout from './pages/TeamLayout.jsx'
import UserPage from './pages/UserPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ShopLayout from './layouts/ShopLayout.jsx'


function App() {
  // State is data that can change while the app is open.
  const [products, setProducts] = useState(starterProducts)

  // useEffect runs after React updates the page.
  useEffect(() => {
    document.title = `${products.length} products | Stock Starter`
  }, [products.length])

  function addProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  return (
    <div className={isSidebarCollapsed ? 'app-shell sidebar-collapsed' : 'app-shell'}>
      <Navigation
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <section className="app-workspace">

        <main className="page-content" id="main-content">
          <p className="breadcrumb">Inventory <span>/</span> {pageName}</p>
          <div className="content-surface">
               <Routes>
              <Route path="/" element={<HomePage products={products} />} />
              <Route path="/products" element={<ProductsPage products={products} />} />
              <Route path="/add-product" element={<AddProductPage onAddProduct={addProduct} />} />
              <Route path="/team" element={<TeamLayout />}>
                <Route index element={<p>Select Team 1 or Team 2 from the sidebar.</p>} />
                <Route path="team-1" element={<TeamOnePage />} />
                <Route path="team-2" element={<TeamTwoPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App
