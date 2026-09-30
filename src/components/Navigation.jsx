// import { useLocation, useNavigate } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { Menu } from 'antd'

import {
  AppstoreOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Logomakeup from '/src/assets/makeup.png'


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
      key: '/add-product',
      icon: <PlusCircleOutlined />,
      label: 'Add product',
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
    {
      key: 'team-group',
      icon: <TeamOutlined />,
      label: 'Team',
      children: [
        {
          key: '/team/team-1',
          icon: <UserOutlined />,
          label: 'Team 1',
        },
        {
          key: '/team/team-2',
          icon: <UserOutlined />,
          label: 'Team 2',
        },
      ],
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
        defaultOpenKeys={['team-group']}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, background: 'transparent' }}
      />
    </div>
  )
}

export default Navigation
