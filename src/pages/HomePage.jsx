import { useState } from "react";

function HomePage({ products }) {

  const [dailySales, setdailySales] = useState(120);

  const outOfStockCount = products.filter(
    (product) => product.quantity === 0,
  ).length;

  const inStockCount = products.filter(
    (product) => product.quantity > 0,
  ).length;
  function HomePage({ products }) {
    const outOfStockCount = products.filter(
      (product) => product.quantity === 0,
    ).length;

    const inStockCount = products.filter(
      (product) => product.quantity > 0,
    ).length;

  }

  return (
    <section className="home-page">
      <div className="overview-banner">
        <img
          src="https://instagram.fpnh11-2.fna.fbcdn.net/v/t51.82787-15/663276148_17881039050538388_809664960508349936_n.webp?_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg3MTg2MDkzMTIwMjg2NTYyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQwMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=n6xF400pY-YQ7kNvwFrnaaW&_nc_oc=AdoAL-y-ynGhBCduHLAnE4MH67cSMCyFFQBSNL7hbVAMZ-SC0Y4LicFYQWYHTVrcMp4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpnh11-2.fna&_nc_gid=_wKWNfzjMLJbITWPK6j4GQ&_nc_ss=7a22e&oh=00_AQOmykI3crNxVPlLjw3tdzU7R2a5CxGoAB2I9l625GQ7UA&oe=6AC2BEB3"
          alt=""
        />
      </div>

      <h1>Korean Beauty Products</h1>

      <p className="intro-text">
        Manage your Korean beauty inventory, track product availability,and
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
    </section>
  );
}

export default HomePage;
