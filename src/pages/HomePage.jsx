function HomePage({ products }) {
  const outOfStockCount = products.filter(
    (product) => product.quantity === 0
  ).length

  const inStockCount = products.filter(
    (product) => product.quantity > 0
  ).length
  function HomePage({ products }) {
  const outOfStockCount = products.filter(
    (product) => product.quantity === 0
  ).length

  const inStockCount = products.filter(
    (product) => product.quantity > 0
  ).length

  const dailySales = 120
}

  return (
    <section className="home-page">
      <div className= "overview-banner">
        <img src="https://i.pinimg.com/736x/b8/ee/ed/b8eeed64f7af5d099945c89d0ab0b457.jpg" alt="" />

      </div>

      <h1>Korean Beauty Products</h1>

      <p className="intro-text">
        Manage your Korean beauty inventory, track product availability,and monitor daily sales.
      </p>

      <div className="summary-grid">
        <article>
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </article>

        <article>
          <span>Daily Sales</span>
          <strong>$120</strong>
        </article>
        <article>
           <span>In Stock</span>
          <strong>{inStockCount}</strong>
        </article>
        <article>
          <span>Out of Stock</span>
          <strong>{outOfStockCount}</strong>
        </article>
        <div className="overview-actions">
  <a href="/add-product" className="add-product-button">
    + Add a product
  </a>
</div>

      </div>

    </section>
  )
}

export default HomePage
