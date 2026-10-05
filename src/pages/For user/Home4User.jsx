
import React from 'react'
import { useNavigate } from 'react-router'
import makeup from '../assets/makeup.png'
import lotus from '../assets/lotus.png'

function Home4User() {
  const navigate = useNavigate()

  // All styles inside JSX
  const myStyle = {
    home: {
      width: '100%',
      background: '#ffffff',
    },

    banner: {
      position: 'relative',
      width: '100%',
      height: '380px',
      overflow: 'hidden',
      marginBottom: '40px',
      borderRadius: '12px',
    },

    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },

    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '40px',
      transform: 'translateY(-50%)',
      color: '#222222',
    },

    bannerTitle: {
      fontSize: '38px',
      fontWeight: '700',
      marginBottom: '10px',
    },

    bannerDescription: {
      fontSize: '18px',
      marginBottom: '20px',
    },

    shopButton: {
      background: '#ff69d2',
      color: '#ffffff',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
    },

    section: {
      marginBottom: '45px',
      padding: '0 20px',
    },

    sectionTitle: {
      fontSize: '22px',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#222222',
    },

    productGrid: {
      display: 'grid',
      gridTemplateColumns:
        'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },

    productCard: {
      background: '#ffffff',
      border: '1px solid #eeeeee',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    },

    productImage: {
      width: '100%',
      height: '230px',
      objectFit: 'cover',
      display: 'block',
      background: '#f5f5f5',
    },

    productInfo: {
      padding: '16px',
      background: '#fff0f5',
    },

    productName: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
    },

    productDescription: {
      fontSize: '14px',
      color: '#777777',
      marginBottom: '15px',
    },

    productBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
    },

    price: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#d77b94',
    },

    cartButton: {
      background: '#ff69d2',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '8px 12px',
      cursor: 'pointer',
    },
  }

  // Example products
  const products = [
    {
      id: 1,
      name: 'Toner',
      description: 'Hydrating toner',
      price: 15,
      image: makeup,
    },
    {
      id: 2,
      name: 'Lotus Toner',
      description: 'Korean skincare',
      price: 18,
      image: lotus,
    },
    {
      id: 3,
      name: 'Beauty Cream',
      description: 'Moisturizing cream',
      price: 20,
      image: makeup,
    },
    {
      id: 4,
      name: 'Face Toner',
      description: 'Refreshing toner',
      price: 16,
      image: lotus,
    },
    {
      id: 5,
      name: 'Skin Cream',
      description: 'Soft skin cream',
      price: 22,
      image: makeup,
    },
    {
      id: 6,
      name: 'Lotus Cream',
      description: 'Daily skincare',
      price: 19,
      image: lotus,
    },
  ]

  // Reusable product card
  const renderProduct = (product) => (
    <div
      key={product.id}
      style={myStyle.productCard}
    >
      <img
        src={product.image}
        alt={product.name}
        style={myStyle.productImage}
      />

      <div style={myStyle.productInfo}>
        <h3 style={myStyle.productName}>
          {product.name}
        </h3>

        <p style={myStyle.productDescription}>
          {product.description}
        </p>

        <div style={myStyle.productBottom}>
          <span style={myStyle.price}>
            ${product.price}
          </span>

          <button
            type="button"
            style={myStyle.cartButton}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div style={myStyle.home}>

      {/* Banner */}
      <section style={myStyle.banner}>
        <img
          src={makeup}
          alt="Korean Beauty"
          style={myStyle.bannerImage}
        />

        <div style={myStyle.bannerText}>
          <h1 style={myStyle.bannerTitle}>
            Korean Beauty Products
          </h1>

          <p style={myStyle.bannerDescription}>
            Discover your favorite skincare products
          </p>

          <button
            type="button"
            style={myStyle.shopButton}
            onClick={() => navigate('/shop/products')}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Best Sellers */}
      <section style={myStyle.section}>
        <h2 style={myStyle.sectionTitle}>
          Best Sellers
        </h2>

        <div style={myStyle.productGrid}>
          {products.map(renderProduct)}
        </div>
      </section>

      {/* New Arrivals */}
      <section style={myStyle.section}>
        <h2 style={myStyle.sectionTitle}>
          New Arrivals
        </h2>

        <div style={myStyle.productGrid}>
          {products.map(renderProduct)}
        </div>
      </section>

    </div>
  )
}

export default Home4User