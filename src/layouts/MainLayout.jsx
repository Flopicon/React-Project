import { useState } from 'react'
// import { Outlet, useLocation, Link } from 'react-router-dom'
import { Layout, Breadcrumb, Typography } from 'antd'
import Navigation from '../components/Navigation.jsx'
import { Link, Outlet, useLocation } from 'react-router'

const { Header, Content, Sider, Footer } = Layout
const { Text } = Typography

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const breadcrumbMap = {
    '/': ['Overview'],
    '/products': ['Products'],
    '/users': ['Users'],
    '/add-product': ['Add Product'],
  }

  const currentBreadcrumbs = breadcrumbMap[location.pathname] || ['Overview']

  const breadcrumbItems = [
    {
      title: <Link to="/">Inventory</Link>,
    },
    ...currentBreadcrumbs.map((crumb, index) => ({
      title: index === currentBreadcrumbs.length - 1 ? crumb : <Text>{crumb}</Text>,
    })),
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={240}
        collapsedWidth={80}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          background: '#090029',
        }}
      >
        <Navigation isCollapsed={collapsed} />
      </Sider>

      <Layout style={{ background: '#f5f7fa' }}>
        <Content style={{ margin: '20px 24px 0', minHeight: 280 }}>
          <Breadcrumb
            items={breadcrumbItems}
            style={{ marginBottom: 16 }}
          />
          <div
            className="content-surface"
            style={{
              padding: 28,
              background: '#ffffff',
              borderRadius: 10,
              minHeight: 'calc(100vh - 180px)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', color: '#8c8c8c', padding: '16px 50px' }}>
          Product from korea © {new Date().getFullYear()} — Use it to make your skin smooth and bright
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout

