import { Card, Tag, Typography, Space, Badge } from 'antd'
import { InboxOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

function ProductCard({ product }) {
  const isOutOfStock = product.quantity === 0

  return (
    <Card
      hoverable
      className="product-card"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#e5e7eb',
      }}
      styles={{
        body: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '20px',
        },
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <Tag color="blue" icon={<InboxOutlined />}>
            {product.category}
          </Tag>
          <Badge
            status={isOutOfStock ? 'error' : 'success'}
            text={
              <Text type={isOutOfStock ? 'danger' : 'secondary'} style={{ fontSize: 12 }}>
                {isOutOfStock ? 'Unavailable' : 'Available'}
              </Text>
            }
          />
        </div>

        <Title level={4} style={{ margin: '8px 0 16px 0', fontSize: 18 }}>
          {product.name}
        </Title>
      </div>

      <div style={{ paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
        <Space orientation="horizontal" align="center">
          {isOutOfStock ? (
            <Tag color="error" icon={<CloseCircleOutlined />} style={{ padding: '4px 10px', fontSize: 13 }}>
              Out of stock
            </Tag>
          ) : (
            <Tag color="success" icon={<CheckCircleOutlined />} style={{ padding: '4px 10px', fontSize: 13 }}>
              <strong>{product.quantity}</strong> in stock
            </Tag>
          )}
        </Space>
      </div>
    </Card>
  )
}

export default ProductCard
