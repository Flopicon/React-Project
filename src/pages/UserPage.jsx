// import { useNavigate } from 'react-router'
// import { Typography, Row, Col, Empty, Button, Tag, Flex } from 'antd'
// import { PlusOutlined, AppstoreOutlined } from '@ant-design/icons'
// import ProductCard from '../components/ProductCard.jsx'

import UserTable from "../components/UserTable"

// const { Title, Paragraph } = Typography

function UserPage() {
  // const navigate = useNavigate()
  

  return (
    <div className="products-page">
      <h1>Hello</h1>
      <UserTable />
    </div>
  )
}

export default UserPage
