import React, { useState } from "react";

import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Input,
  Select,
  Tag,
  Badge,
  Carousel,
  Space,
  Empty,
  Divider,
} from "antd";

import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  StarFilled,
} from "@ant-design/icons";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const { Title, Text } = Typography;

function Shop({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = products.filter((product) => {
    const name = product.name?.toLowerCase() || "";
    const productCategory = product.category || "";

    const matchSearch = name.includes(search.toLowerCase());

    const matchCategory = category === "all" || productCategory === category;

    return matchSearch && matchCategory;
  });

  // =========================
  // ADD TO CART
  // =========================

  function handleAddToCart() {
    setCartCount((count) => count + 1);
  }

  const bestSellers = filteredProducts.slice(0, 6);
  const newArrivals = filteredProducts.slice(6);

  return (
    <>
      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =========================
           SHOP PAGE
        ========================= */

        .shop-page {
          padding: 30px 50px 60px;
          background: #ffffff;
          min-height: 500vh;
        }


        /* =========================
           HEADER
        ========================= */

        .shop-header {
          margin-bottom: 25px;
        }

        .shop-title {
          margin-bottom: 5px !important;
        }


        /* =========================
           BANNER
        ========================= */

        .shop-carousel {
          margin-bottom: 30px;
          overflow: hidden;
          border-radius: 12px;
        }

        .shop-carousel img {
          width: 100%;
          height: 800px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
        }


        /* =========================
           SEARCH
        ========================= */

        .shop-filter-card {
          margin-bottom: 40px;
          border-radius: 12px;
        }


        /* =========================
           SECTION
        ========================= */

        .shop-section {
          margin-bottom: 50px;
        }
          


        /* =========================
           PRODUCT CARD
        ========================= */

        .shop-product-card {
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          transition: 0.3s;
        }

        .shop-product-card:hover {
          transform: translateY(-5px);
        }


        /* =========================
           PRODUCT IMAGE
        ========================= */

        .product-image-wrapper {
          width: 100%;
          height: 200px;
          align-item:center;
          justify-content:center;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position:center;
          display: block;
          transition: 0.3s;
        }

        .shop-product-card:hover .product-image {
          transform: scale(1.04);
        }


        /* =========================
           PRODUCT NAME
        ========================= */

        .product-name {
          margin: 0 !important;
        }


        /* =========================
           PRICE
        ========================= */

        .product-price {
          color: #6360f8;
          font-size: 20px;
        }


        /* =========================
           ANT DESIGN BUTTON
        ========================= */

        .shop-page .ant-btn-primary {
          background: #ff9bfa;
          border-color: #ff9bfa;
        }

        .shop-page .ant-btn-primary:hover {
          background: #d95763 !important;
          border-color: #d95763 !important;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {

          .shop-page {
            padding: 20px;
          }

          .shop-carousel img {
            height: 220px;
          }

          .product-image-wrapper {
            height: 220px;
          }

        }

      `}</style>

      {/* =====================================================
          SHOP CONTENT
      ===================================================== */}

      <div className="shop-page">
        
        {/* =========================
            BANNER
        ========================= */}

        <Carousel autoplay arrows className="shop-carousel">
          <div>
            <img src={banner1} alt="Korean Beauty" />
          </div>

          <div>
            <img src={banner2} alt="Beauty Products" />
          </div>

          <div>
            <img src={banner3} alt="Korean Skincare" />
          </div>
        </Carousel>


        {/* =========================
            BEST SELLERS
        ========================= */}

        <section className="shop-section">
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={3}>Best Sellers</Title>
            </Col>

            <Col>
              <Tag color="pink">Popular Products</Tag>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[24, 24]}>
            {bestSellers.map((product) => (
              <Col key={product.id} xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  className="shop-product-card"
                  cover={
                    <div className="product-image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                    </div>
                  }
                  actions={[
                    <HeartOutlined key="heart" />,

                    <ShoppingCartOutlined
                      key="cart"
                      onClick={handleAddToCart}
                    />,
                  ]}
                >
                  <Space
                    direction="vertical"
                    size={8}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Row justify="space-between" align="middle">
                      <Col>
                        <Tag color="pink">{product.category || "Beauty"}</Tag>
                      </Col>

                      <Col>
                        <Text type="secondary">{product.sold || 0} sold</Text>
                      </Col>
                    </Row>

                    <Title level={4} className="product-name">
                      {product.name}
                    </Title>

                    <Text type="secondary">{product.description}</Text>

                    <Space>
                      <StarFilled
                        style={{
                          color: "#e9cb09",
                        }}
                      />

                      <Text>5.0</Text>
                    </Space>

                    <Text strong className="product-price">
                      ${product.price}
                    </Text>

                    <Button
                      type="primary"
                      block
                      icon={<ShoppingCartOutlined />}
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* =========================
    NEW ARRIVALS
========================= */}

        {newArrivals.length > 0 && (
          <section className="shop-section">
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={3}>New Arrivals</Title>
              </Col>

              <Col>
                <Tag color="green">New</Tag>
              </Col>
            </Row>

            <Divider />

            <Row gutter={[24, 24]}>
              {newArrivals.map((product) => (
                <Col key={product.id} xs={24} sm={12} lg={8}>
                  <Card
                    hoverable
                    className="shop-product-card"
                    cover={
                      <div className="product-image-wrapper">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                      </div>
                    }
                    actions={[
                      <HeartOutlined key="heart" />,

                      <ShoppingCartOutlined
                        key="cart"
                        onClick={handleAddToCart}
                      />,
                    ]}
                  >
                    <Space
                      direction="vertical"
                      size={8}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Row justify="space-between" align="middle">
                        <Col>
                          <Tag color="pink">{product.category || "Beauty"}</Tag>
                        </Col>

                        <Col>
                          <Text type="secondary">{product.sold || 0} sold</Text>
                        </Col>
                      </Row>

                      <Title level={4} className="product-name">
                        {product.name}
                      </Title>

                      <Text type="secondary">{product.description}</Text>

                      <Space>
                        <StarFilled
                          style={{
                            color: "#e9cb09",
                          }}
                        />

                        <Text>5.0</Text>
                      </Space>

                      <Text strong className="product-price">
                        ${product.price}
                      </Text>

                      <Button
                        type="primary"
                        block
                        icon={<ShoppingCartOutlined />}
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        )}

        {/* =========================
            NO RESULTS
        ========================= */}

        {filteredProducts.length === 0 && (
          <Card>
            <Empty description="No products found" />
          </Card>
        )}
      </div>
    </>
  );
}

export default Shop;
