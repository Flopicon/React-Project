# Ant Design Integration & Usage Guide

This guide details how **Ant Design 5 (AntD)** is integrated and structured across this React inventory project.

---

## 1. Installation & Packages

Ant Design requires two core packages:

```bash
# Using bun (or npm/yarn/pnpm)
bun add antd @ant-design/icons
```

| Package | Purpose |
| :--- | :--- |
| `antd` | Core UI component library (Layout, Form, Card, Button, Typography, Modal, etc.) |
| `@ant-design/icons` | Official Ant Design icon set |

---

## 2. Root Setup & Theming

In `src/main.jsx`, the entire app is wrapped with two essential Ant Design providers:

1. **`ConfigProvider`**: Manages global design tokens (colors, border-radius, typography).
2. **`App`**: Context container enabling seamless static hooks such as `message`, `notification`, and `modal`.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ConfigProvider, App as AntdApp } from 'antd'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff', // Primary brand color
          borderRadius: 8,          // Global corner radius
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
        },
      }}
    >
      <AntdApp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  </StrictMode>
)
```

---

## 3. Layout & Navigation Architecture

### App Shell (`src/App.jsx`)

Ant Design's `Layout` system replaces raw HTML shells with accessible, responsive layout containers:

- `Layout`: Top-level flex container.
- `Layout.Sider`: Collapsible sidebar with responsive breakpoint handling.
- `Layout.Header`: Workspace bar.
- `Layout.Content`: Main content surface holding routes and breadcrumbs.
- `Layout.Footer`: Application footer.

```jsx
import { Layout, Breadcrumb } from 'antd'
const { Header, Content, Sider, Footer } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={240}
        collapsedWidth={80}
      >
        <Navigation isCollapsed={collapsed} />
      </Sider>

      <Layout style={{ background: '#f5f7fa' }}>
        <Header>...</Header>
        <Content style={{ margin: '20px 24px 0' }}>
          <Breadcrumb items={breadcrumbItems} />
          <div className="content-surface">
            {/* Routes */}
          </div>
        </Content>
        <Footer>Stock Starter © {new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  )
}
```

### Menu & Submenus (`src/components/Navigation.jsx`)

Integrates `Menu` with route-aware keys and submenus for nested routes (`/team/team-1`, `/team/team-2`):

```jsx
import { Menu } from 'antd'
import {
  HomeOutlined,
  AppstoreOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router'

const menuItems = [
  { key: '/', icon: <HomeOutlined />, label: 'Overview' },
  { key: '/products', icon: <AppstoreOutlined />, label: 'Products' },
  { key: '/add-product', icon: <PlusCircleOutlined />, label: 'Add product' },
  {
    key: 'team-group',
    icon: <TeamOutlined />,
    label: 'Team',
    children: [
      { key: '/team/team-1', icon: <UserOutlined />, label: 'Team 1' },
      { key: '/team/team-2', icon: <UserOutlined />, label: 'Team 2' },
    ],
  },
]

function Navigation({ isCollapsed }) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="nav-container">
      <div className="brand" onClick={() => navigate('/')}>
        <span className="brand-mark">S</span>
        {!isCollapsed && <span>Stock Starter</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['team-group']}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
      />
    </div>
  )
}
```

---

## 4. Component Patterns

### A. Forms & Validation (`src/components/ProductForm.jsx`)

Ant Design handles form state, controlled inputs, and validation rules declaratively:

```jsx
import { Form, Input, InputNumber, Select, Button, Space, App } from 'antd'
import { PlusOutlined, UndoOutlined } from '@ant-design/icons'

function ProductForm({ onAddProduct }) {
  const [form] = Form.useForm()
  const { message } = App.useApp()

  const onFinish = (values) => {
    onAddProduct({
      id: Date.now(),
      name: values.name.trim(),
      category: values.category.trim(),
      quantity: Number(values.quantity),
    })

    form.resetFields()
    message.success(`Product "${values.name}" added successfully!`)
  }

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ quantity: 1 }}>
      <Form.Item
        label="Product Name"
        name="name"
        rules={[
          { required: true, message: 'Please enter a product name' },
          { min: 2, message: 'Name must be at least 2 characters' },
        ]}
      >
        <Input placeholder="e.g. Wireless Mouse" size="large" />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select a category' }]}
      >
        <Select
          showSearch
          size="large"
          placeholder="Select category"
          options={[
            { value: 'Stationery', label: 'Stationery' },
            { value: 'Electronics', label: 'Electronics' },
            { value: 'Kitchen', label: 'Kitchen' },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[{ required: true, type: 'number', min: 0 }]}
      >
        <InputNumber min={0} size="large" style={{ width: '100%' }} />
      </Form.Item>

      <Space size="middle">
        <Button type="primary" htmlType="submit" size="large" icon={<PlusOutlined />}>
          Save Product
        </Button>
        <Button size="large" onClick={() => form.resetFields()} icon={<UndoOutlined />}>
          Reset
        </Button>
      </Space>
    </Form>
  )
}
```

---

### B. Product Cards & Badges (`src/components/ProductCard.jsx`)

Displays item metadata with `Card`, `Tag`, `Badge`, and `Typography`:

```jsx
import { Card, Tag, Badge, Typography } from 'antd'
import { InboxOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

function ProductCard({ product }) {
  const isOutOfStock = product.quantity === 0

  return (
    <Card hoverable className="product-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <Tag color="blue" icon={<InboxOutlined />}>{product.category}</Tag>
        <Badge
          status={isOutOfStock ? 'error' : 'success'}
          text={isOutOfStock ? 'Unavailable' : 'Available'}
        />
      </div>

      <Title level={4}>{product.name}</Title>

      <div style={{ paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
        {isOutOfStock ? (
          <Tag color="error" icon={<CloseCircleOutlined />}>Out of stock</Tag>
        ) : (
          <Tag color="success" icon={<CheckCircleOutlined />}>
            <strong>{product.quantity}</strong> in stock
          </Tag>
        )}
      </div>
    </Card>
  )
}
```

---

### C. Statistics Dashboard (`src/pages/HomePage.jsx`)

Responsive dashboard cards powered by `Row`, `Col`, and `Statistic`:

```jsx
import { Row, Col, Card, Statistic, Typography } from 'antd'
import { ShoppingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const { Text } = Typography

<Row gutter={[16, 16]}>
  <Col xs={24} sm={8}>
    <Card variant="borderless" style={{ background: '#f0f5ff' }}>
      <Statistic
        title={<Text strong style={{ color: '#1d39c4' }}>Total Products</Text>}
        value={products.length}
        prefix={<ShoppingOutlined style={{ color: '#2f54eb' }} />}
      />
    </Card>
  </Col>
  <Col xs={24} sm={8}>
    <Card variant="borderless" style={{ background: '#f6ffed' }}>
      <Statistic
        title={<Text strong style={{ color: '#389e0d' }}>In Stock</Text>}
        value={inStockCount}
        valueStyle={{ color: '#389e0d' }}
        prefix={<CheckCircleOutlined />}
      />
    </Card>
  </Col>
  <Col xs={24} sm={8}>
    <Card variant="borderless" style={{ background: '#fff1f0' }}>
      <Statistic
        title={<Text strong style={{ color: '#cf1322' }}>Out of Stock</Text>}
        value={outOfStockCount}
        valueStyle={{ color: '#cf1322' }}
        prefix={<CloseCircleOutlined />}
      />
    </Card>
  </Col>
</Row>
```

---

### D. Empty States & 404 Routing

- **Empty State (`src/pages/ProductsPage.jsx`)**:
  ```jsx
  <Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description="There are no products in the inventory yet."
  >
    <Button type="primary" onClick={() => navigate('/add-product')}>
      Add First Product
    </Button>
  </Empty>
  ```

- **404 Page (`src/pages/NotFoundPage.jsx`)**:
  ```jsx
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" icon={<HomeOutlined />} onClick={() => navigate('/')}>
        Back Home
      </Button>
    }
  />
  ```

---

## 5. Adding New Features with Ant Design

When building new components in this project:

1. **Import components & icons directly**:
   ```jsx
   import { Table, Modal, Switch, Tooltip } from 'antd'
   import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
   ```

2. **Leverage Flex & Space for alignment**:
   ```jsx
   <Flex justify="space-between" align="center">
     <Title level={3}>Section Title</Title>
     <Button type="primary">Action</Button>
   </Flex>
   ```

3. **Use App Hooks for Popups & Notifications**:
   ```jsx
   const { message, modal, notification } = App.useApp()

   // Modal confirmation
   modal.confirm({
     title: 'Delete Product',
     content: 'Are you sure you want to delete this item?',
     onOk() {
       // Delete logic
       message.success('Item deleted')
     },
   })
   ```

