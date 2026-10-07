import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

import makeup from '../assets/makeup.png'
import lotus from '../assets/lotus.png'

function Home4User() {
  const navigate = useNavigate()

  // =========================
  // BANNERS
  // =========================

  const banners = [
    banner1,
    banner2,
    banner3,
  ]

  const [currentBanner, setCurrentBanner] = useState(0)

  // Automatically change banner every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => {
        return (prev + 1) % banners.length
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [banners.length])

  // =========================
  // STYLES
  // =========================

  const styles = {

    home: {
      width: '100%',
      minHeight: '100vh',
      background: '#ffffff',
    },

    // =========================
    // BANNER
    // =========================

    banner: {
      position: 'relative',
      width: '100%',
      height: '380px',
      overflow: 'hidden',
      marginBottom: '40px',
    },

    bannerSlider: {
      display: 'flex',
      width: '100%',
      height: '100%',
      transition: 'transform 0.8s ease-in-out',
    },

    bannerImage: {
      flex: '0 0 100%',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block',
    },

    bannerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 210, 215, 0.15)',
      pointerEvents: 'none',
    },

    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '50px',
      transform: 'translateY(-50%)',
      zIndex: 5,
      color: '#222222',
    },

    bannerTitle: {
      fontSize: '38px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },

    bannerDescription: {
      fontSize: '17px',
      margin: '0 0 20px 0',
    },

    shopButton: {
      background: '#e8666a',
      color: '#ffffff',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
    },

    // =========================
    // DOTS
    // =========================

    dots: {
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 10,
    },

    dot: {
      width: '10px',
      height: '10px',
      border: 'none',
      padding: 0,
      borderRadius: '50%',
      background: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },

    // =========================
    // PRODUCT SECTION
    // =========================

    section: {
      width: '100%',
      padding: '0 50px',
      marginBottom: '40px',
    },

    sectionTitle: {
      fontSize: '20px',
      fontWeight: '700',
      margin: '0 0 25px 0',
      color: '#111111',
    },

    // =========================
    // PRODUCT GRID
    // =========================

    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '22px 25px',
    },

    // =========================
    // PRODUCT CARD
    // =========================

    productCard: {
      width: '100%',
      height: '180px',
      overflow: 'hidden',
      background: '#ffffff',
      cursor: 'pointer',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    },

    productImageContainer: {
      width: '100%',
      height: '105px',
      overflow: 'hidden',
      background: '#eeeeee',
    },

    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.4s ease',
    },

    productInfo: {
      width: '100%',
      height: '75px',
      padding: '9px 12px',
      background: '#e8666a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    productName: {
      margin: 0,
      fontSize: '12px',
      fontWeight: '500',
      color: '#111111',
    },

    productDescription: {
      margin: '4px 0 0 0',
      fontSize: '11px',
      color: '#111111',
    },

    productSold: {
      margin: 0,
      fontSize: '11px',
      color: '#111111',
      textAlign: 'right',
    },
  }

  // =========================
  // PRODUCTS
  // =========================

  const bestSellers = [
    {
      id: 1,
      name: 'Toner',
      description: 'Hydrating toner',
      sold: 99,
      image: makeup,
    },
    {
      id: 2,
      name: 'Lotus Toner',
      description: 'Korean skincare',
      sold: 99,
      image: lotus,
    },
    {
      id: 3,
      name: 'Beauty Cream',
      description: 'Moisturizing cream',
      sold: 99,
      image: makeup,
    },
    {
      id: 4,
      name: 'Face Toner',
      description: 'Refreshing toner',
      sold: 99,
      image: lotus,
    },
    {
      id: 5,
      name: 'Skin Cream',
      description: 'Soft skin cream',
      sold: 99,
      image: makeup,
    },
    {
      id: 6,
      name: 'Lotus Cream',
      description: 'Daily skincare',
      sold: 99,
      image: lotus,
    },
  ]

  const newArrivals = [
    {
      id: 7,
      name: 'New Toner',
      description: 'Fresh Korean toner',
      sold: 99,
      image: lotus,
    },
    {
      id: 8,
      name: 'Glow Cream',
      description: 'Brightening cream',
      sold: 99,
      image: makeup,
    },
    {
      id: 9,
      name: 'Lotus Serum',
      description: 'Hydrating serum',
      sold: 99,
      image: lotus,
    },
    {
      id: 10,
      name: 'Daily Toner',
      description: 'Gentle toner',
      sold: 99,
      image: makeup,
    },
    {
      id: 11,
      name: 'Beauty Serum',
      description: 'Skin care serum',
      sold: 99,
      image: lotus,
    },
    {
      id: 12,
      name: 'Soft Cream',
      description: 'Daily moisturizing',
      sold: 99,
      image: makeup,
    },
  ]

  // =========================
  // PRODUCT CARD
  // =========================

  const renderProduct = (product) => (
    <div
      key={product.id}
      style={styles.productCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow =
          '0 6px 18px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >

      <div style={styles.productImageContainer}>

        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />

      </div>

      <div style={styles.productInfo}>

        <div>

          <p style={styles.productName}>
            {product.name}
          </p>

          <p style={styles.productDescription}>
            {product.description}
          </p>

        </div>

        <p style={styles.productSold}>
          {product.sold} sold
        </p>

      </div>

    </div>
  )

  // =========================
  // RETURN
  // =========================

  return (
    <div style={styles.home}>

      {/* =========================
          ANIMATED BANNER
      ========================= */}

      <section style={styles.banner}>

        {/* Sliding images */}

        <div
          style={{
            ...styles.bannerSlider,
            transform: `translateX(-${currentBanner * 100}%)`,
          }}
        >

          {banners.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              style={styles.bannerImage}
            />
          ))}

        </div>

        {/* Overlay */}

        <div style={styles.bannerOverlay}></div>

        {/* Banner text */}

        <div style={styles.bannerText}>

          <h1 style={styles.bannerTitle}>
            Korean Beauty Products
          </h1>

          <p style={styles.bannerDescription}>
            Discover your favorite skincare products
          </p>

          <button
            type="button"
            style={styles.shopButton}
            onClick={() =>
              navigate('/shop/products')
            }
          >
            Shop Now
          </button>

        </div>

        {/* Dots */}

        <div style={styles.dots}>

          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                setCurrentBanner(index)
              }
              style={{
                ...styles.dot,
                opacity:
                  currentBanner === index
                    ? 1
                    : 0.5,

                transform:
                  currentBanner === index
                    ? 'scale(1.4)'
                    : 'scale(1)',
              }}
            />
          ))}

        </div>

      </section>


      {/* =========================
          BEST SELLERS
      ========================= */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Best Sellers
        </h2>

        <div style={styles.productGrid}>
          {bestSellers.map(renderProduct)}
        </div>

      </section>


      {/* =========================
          NEW ARRIVALS
      ========================= */}

      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          New Arrival
        </h2>

        <div style={styles.productGrid}>
          {newArrivals.map(renderProduct)}
        </div>

      </section>

    </div>
  )
}

export default Home4User