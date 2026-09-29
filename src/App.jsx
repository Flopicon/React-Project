import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { starterProducts } from './data/products.js'
import Navigation from './components/Navigation.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AddProductPage from './pages/AddProductPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TeamOnePage from './pages/TeamOnePage.jsx'
import TeamTwoPage from './pages/TeamTwoPage.jsx'
import TeamLayout from './pages/TeamLayout.jsx'


function App() {
  // State is data that can change while the app is open.
  const [products, setProducts] = useState(starterProducts)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const location = useLocation()
  const pageNames = {
    '/': 'Overview',
    '/products': 'Products',
    '/add-product': 'Add product',
    '/team': 'Team',
    '/team/team-1': 'Team / Team 1',
    '/team/team-2': 'Team / Team 2',
  }
  const pageName = pageNames[location.pathname] || 'Page not found'

  // useEffect runs after React updates the page.
  useEffect(() => {
    document.title = `${products.length} products | Stock Starter`
  }, [products.length])

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
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
