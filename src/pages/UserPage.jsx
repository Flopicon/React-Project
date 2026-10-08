// import { useNavigate } from 'react-router'
// import { Typography, Row, Col, Empty, Button, Tag, Flex } from 'antd'
// import { PlusOutlined, AppstoreOutlined } from '@ant-design/icons'
// import ProductCard from '../components/ProductCard.jsx'

import UserTable from "../components/UserTable"

// const { Title, Paragraph } = Typography

function UserPage() {
  return (
    <div className="products-page">
     
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '4px 0 8px' }}>Users</h2>
        <p style={{ color: '#8c8c8c', margin: 0 }}>
          Manage user accounts and permissions from one place.
        </p>

      </div>
      <UserTable />
    </div>
  )
}

export default UserPage
