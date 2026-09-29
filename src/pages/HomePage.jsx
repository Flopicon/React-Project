function HomePage({ products }) {
  const outOfStockCount = products.filter(
    (product) => product.quantity === 0
  ).length

  const inStockCount = products.filter(
    (product) => product.quantity > 0
  ).length

  const dailySales = 120

  return (
    <section className="home-page">
      <div className="overview-banner">
        <img
          src="https://i.pinimg.com/736x/b8/ee/ed/b8eeed64f7af5d099945c89d0ab0b457.jpg"
          alt=""
        />
      </div>

      <h1>Korean Beauty Products</h1>

      <p className="intro-text">
        Manage your Korean beauty inventory, track product availability, and
        monitor daily sales.
      </p>

      <div className="summary-grid">
  <article className="summary-card total-products">
    <span>Total Products</span>
    <strong>{products.length}</strong>
  </article>

  <article className="summary-card daily-sales">
    <span>Daily Sales</span>
    <strong>${dailySales}</strong>
  </article>

  <article className="summary-card in-stock">
    <span>In Stock</span>
    <strong>{inStockCount}</strong>
  </article>

  <article className="summary-card out-of-stock">
    <span>Out of Stock</span>
    <strong>{outOfStockCount}</strong>
  </article>
</div>

      <div className="overview-actions">
        <a href="/add-product" className="add-product-button">
          + Add a product
        </a>
      </div>
    </section>
  )
}

export default HomePage
