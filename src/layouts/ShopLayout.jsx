import { Outlet } from 'react-router'
import { Layout } from 'antd'
import NavigationBar from '../components/NavigationBar'
import CustomFooter from '../components/Footer' 

const { Content } = Layout

function ShopLayout() {
  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
  }

  const contentStyle = {
    paddingTop: '76px', 
    flex: 1,            
    width: '100%',
  }

  return (
    <Layout style={layoutStyle}>
      {/* Top Fixed Navigation */}
      <NavigationBar />

      {/* Main Dynamic Page Content */}
      <Content style={contentStyle}>
        <Outlet />
      </Content>

      {/* Linked Custom Footer Component */}
      <CustomFooter />

    </Layout>
  )
}

export default ShopLayout