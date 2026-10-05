import { Outlet, useNavigate } from 'react-router'
import { Layout, Button, Space } from 'antd'
import {
  ShopOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer } = Layout

function ShopLayout() {
  const navigate = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Top Shop Navigation Header */}
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '0 32px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid #f0f0f0',
          height: 64,
        }}
      >
        <div
          onClick={() => navigate('/shop')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#1677ff',
              display: 'grid',
              placeItems: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            <ShopOutlined />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#1f2937' }}>
            Storefront
          </span>
        </div>

        <Space size="middle">
          <Button
            type="text"
            icon={<DashboardOutlined />}
            onClick={() => navigate('/')}
          >
            Back to Dashboard
          </Button>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
          >
            Cart
          </Button>
        </Space>
      </Header>

      {/* Main Content Area */}
      <Content
        style={{
          padding: '24px 32px',
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Outlet />
      </Content>

      {/* Shop Footer */}
      <Footer
        style={{
          textAlign: 'center',
          background: '#ffffff',
          borderTop: '1px solid #f0f0f0',
          color: '#8c8c8c',
          padding: '24px 50px',
        }}
      >
        Storefront Shop © {new Date().getFullYear()} — Powered by React & Ant Design
      </Footer>
    </Layout>
  )
}

export default ShopLayout

