<<<<<<< HEAD
import { useNavigate } from 'react-router'
import { Typography, Row, Col, Card, Statistic, Button, Space, Tag } from 'antd'
import {
  ShoppingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PlusCircleOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

function HomePage({ products }) {
  const navigate = useNavigate()
  const outOfStockCount = products.filter((product) => product.quantity === 0).length
  const inStockCount = products.filter((product) => product.quantity > 0).length

  return (
    <div className="home-page">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div>
          <Tag color="processing" icon={<ThunderboltOutlined />} style={{ marginBottom: 12 }}>
            React Fundamentals + Ant Design
          </Tag>
          <Title level={2} style={{ marginTop: 0, marginBottom: 8 }}>
            Product inventory, one small React idea at a time.
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 650 }}>
            This practice project stores products in React state. Add a product, visit another route, and see the same list update across views.
          </Paragraph>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: 12, marginBottom: 16 }}>
          <Col xs={24} sm={8}>
            <Card variant="borderless" style={{ background: '#f0f5ff', borderRadius: 8 }}>
              <Statistic
                title={<Text strong style={{ color: '#1d39c4' }}>Total Products</Text>}
                value={products.length}
                prefix={<ShoppingOutlined style={{ color: '#2f54eb' }} />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card variant="borderless" style={{ background: '#f6ffed', borderRadius: 8 }}>
              <Statistic
                title={<Text strong style={{ color: '#389e0d' }}>In Stock</Text>}
                value={inStockCount}
                valueStyle={{ color: '#389e0d' }}
                prefix={<CheckCircleOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card variant="borderless" style={{ background: '#fff1f0', borderRadius: 8 }}>
              <Statistic
                title={<Text strong style={{ color: '#cf1322' }}>Out of Stock</Text>}
                value={outOfStockCount}
                valueStyle={{ color: '#cf1322' }}
                prefix={<CloseCircleOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Space size="middle" wrap style={{ marginTop: 8 }}>
          <Button
            type="primary"
            size="large"
            icon={<PlusCircleOutlined />}
            onClick={() => navigate('/add-product')}
          >
            Add a product
          </Button>
          <Button
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={() => navigate('/products')}
          >
            Browse Products
          </Button>
        </Space>
      </Space>
    </div>
=======
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
>>>>>>> 0dda7dc (New)
  )
}

export default HomePage
