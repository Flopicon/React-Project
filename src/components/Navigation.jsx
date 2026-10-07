// import { useLocation, useNavigate } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { Menu } from 'antd'

import {
  AppstoreOutlined,
  TagsOutlined,
  HomeOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Logomakeup from '../assets/makeup.png'


function Navigation({ isCollapsed }) {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Overview',
    },
    {
      key: '/products',
      icon: <AppstoreOutlined />,
      label: 'Products',
    },
    {
      key: '/categories',
      icon: <TagsOutlined />,
      label: 'Categories',
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: 'Users',
    },
    {
      key: '/shop',
      icon: <ShopOutlined />,
      label: 'Shop',
    },
  ]

  // Find active key based on current pathname
  const activeKey = location.pathname

  const handleMenuClick = ({ key }) => {
    if (key.startsWith('/')) {
      navigate(key)
    }
  }

  return (
    <div className="nav-container">
      <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <span className="brand-mark">
          <img src={Logomakeup} width={30} alt="" />
        </span>
        {!isCollapsed && <span className="nav-label">Prettier Cosmestic </span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeKey]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, background: 'transparent' }}
      />
    </div>
  )
}

export default Navigation
