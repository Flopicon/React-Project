import { useEffect, useState } from 'react'
import {
  Table,
  App,
  Space,
  Modal,
  Typography,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Popconfirm,
  Descriptions,
  Tag,
  Image,
} from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from '@ant-design/icons'

const { Title } = Typography

function ProductsPage() {
  const API_BASE_URL = ' http://127.0.0.1:8000/api'
  const API_URL = `${API_BASE_URL}/product`
  const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '')
  const { message } = App.useApp()

  // State Management
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const [updateForm] = Form.useForm()
  const [addForm] = Form.useForm()

  const [submitting, setSubmitting] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
  })

  // Helper to handle image paths
  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/44?text=No+Image'
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    if (imagePath.startsWith('/')) {
      return `${API_ORIGIN}${imagePath}`
    }
    return `${API_ORIGIN}/storage/${imagePath}`
  }

  // ---------------------------------------------------------------------------
  // 1. FETCH PRODUCTS FROM API
  // ---------------------------------------------------------------------------
  const fetchProducts = async (page = 1, pageSize = 10, sorter = {}) => {
    setLoading(true)

    try {
      const params = new URLSearchParams({
        page: String(page),
        per_page: String(pageSize),
        sortDir: sorter.order === 'descend' ? 'desc' : 'asc',
      })

      if (sorter.field) {
        params.set('sortBy', sorter.field)
      }

      const response = await fetch(`${API_URL}?${params}`)
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }

      const result = await response.json()
      const products = Array.isArray(result) ? result : result.data || []

      setData(products)

      setPagination((previous) => ({
        ...previous,
        current: result.current_page || page,
        pageSize,
        total: result.total || products.length,
      }))
    } catch (error) {
      console.error('Failed to fetch products:', error)
      message.error('Failed to load product data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(pagination.current, pagination.pageSize)
  }, [])

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchProducts(newPagination.current, newPagination.pageSize, sorter)
  }

  // ---------------------------------------------------------------------------
  // 2. VIEW / UPDATE / DELETE / CREATE HANDLERS
  // ---------------------------------------------------------------------------
  const handleView = (product) => {
    setSelectedProduct(product)
  }

  const handleUpdate = (product) => {
    setEditingProduct(product)
    updateForm.setFieldsValue({
      name: product.name || '',
      price: product.price || 0,
      stock: product.stock || 0,
      category_name: product.category?.name || product.category_name || '',
      skin_type: product.skin_type || '',
      description: product.description || '',
      product_image: product.product_image || '',
    })
  }

  const handleCreateSubmit = async (values) => {
    setSubmitting(true)
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to add product')
      }

      message.success('Product added successfully!')
      setIsAddModalOpen(false)
      addForm.resetFields()
      fetchProducts(pagination.current, pagination.pageSize)
    } catch (error) {
      console.error('Failed to add product:', error)
      message.error('Failed to add product')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdateSubmit = async (values) => {
    setSubmitting(true)

    try {
      const response = await fetch(`${API_URL}/${editingProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Update failed:', response.status, errorText)
        throw new Error('Update request failed')
      }

      message.success('Product updated successfully')
      setEditingProduct(null)
      updateForm.resetFields()
      fetchProducts(pagination.current, pagination.pageSize)
    } catch (error) {
      console.error('Failed to update product:', error)
      message.error('Failed to update product')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (product) => {
    try {
      const response = await fetch(`${API_URL}/${product.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Delete request failed')
      }

      message.success(`${product.name} was deleted successfully`)
      fetchProducts(pagination.current, pagination.pageSize)
    } catch (error) {
      console.error('Failed to delete product:', error)
      message.error('Failed to delete product')
    }
  }

  // ---------------------------------------------------------------------------
  // 3. TABLE COLUMNS DEFINITION
  // ---------------------------------------------------------------------------
  const columns = [
    {
      title: 'ID',
      key: 'id',
      width: 60,
      render: (_, __, index) =>
        (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: 'Category Name',
      key: 'category_name',
      sorter: true,
      render: (_, record) => record.category?.name || record.category_name || 'N/A',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render: (text, record) => (
        <Space size={12} align="center">
          <Image
            src={getImageUrl(record.product_image)}
            alt={text}
            width={44}
            height={44}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            fallback="https://via.placeholder.com/44?text=No+Img"
          />
          <span style={{ fontWeight: 500 }}>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      sorter: true,
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (price) => `$${Number(price || 0).toFixed(2)}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            size="small"
            type="link"
            onClick={() => handleView(record)}
          >
            View
          </Button>
          <Button
            icon={<EditOutlined />}
            size="small"
            type="link"
            onClick={() => handleUpdate(record)}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete this product?"
            description={`Are you sure you want to delete "${record.name}"?`}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
            onConfirm={() => handleDelete(record)}
          >
            <Button icon={<DeleteOutlined />} size="small" type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ padding: '24px', width: '100%', boxSizing: 'border-box' }}>
      {/* Header Bar - Positioned Title Left and Button Right */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '16px',
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Products
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Product
        </Button>
      </div>

      {/* Main Table */}
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />

      {/* VIEW PRODUCT MODAL */}
      <Modal
        title="Product Details"
        open={selectedProduct !== null}
        onCancel={() => setSelectedProduct(null)}
        footer={null}
        centered
        width={520}
      >
        {selectedProduct && (
          <Descriptions
            bordered
            column={1}
            size="middle"
            labelStyle={{ width: '130px', fontWeight: 600, background: '#fafafa' }}
            contentStyle={{ fontWeight: 500 }}
          >
            <Descriptions.Item label="ID">{selectedProduct.id}</Descriptions.Item>
            <Descriptions.Item label="Image">
              <Image
                src={getImageUrl(selectedProduct.product_image)}
                alt={selectedProduct.name}
                width={120}
                height={120}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                fallback="https://via.placeholder.com/120?text=No+Img"
              />
            </Descriptions.Item>
            <Descriptions.Item label="Name">{selectedProduct.name}</Descriptions.Item>
            <Descriptions.Item label="Category">
              {selectedProduct.category?.name || selectedProduct.category_name || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Price">
              ${Number(selectedProduct.price || 0).toFixed(2)}
            </Descriptions.Item>
            <Descriptions.Item label="Stock">{selectedProduct.stock}</Descriptions.Item>
            <Descriptions.Item label="Skin Type">
              <Tag color="green">{selectedProduct.skin_type || 'N/A'}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {selectedProduct.description || 'N/A'}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>

      {/* ADD PRODUCT MODAL */}
      <Modal
        title="Add Product"
        open={isAddModalOpen}
        onCancel={() => {
          setIsAddModalOpen(false)
          addForm.resetFields()
        }}
        footer={null}
        width={480}
        centered
      >
        <Form
          form={addForm}
          layout="vertical"
          onFinish={handleCreateSubmit}
          style={{ marginTop: '12px' }}
        >
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter product name' }]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>

          <Space style={{ display: 'flex' }} align="baseline">
            <Form.Item
              name="price"
              label="Price ($)"
              rules={[{ required: true, message: 'Please enter price' }]}
              style={{ flex: 1 }}
            >
              <InputNumber style={{ width: '100%' }} min={0} precision={2} placeholder="0.00" />
            </Form.Item>
            <Form.Item
              name="stock"
              label="Stock"
              rules={[{ required: true, message: 'Please enter stock' }]}
              style={{ flex: 1 }}
            >
              <InputNumber style={{ width: '100%' }} min={0} placeholder="0" />
            </Form.Item>
          </Space>

          <Form.Item
            name="category_name"
            label="Category Name"
            rules={[{ required: true, message: 'Please enter category' }]}
          >
            <Input placeholder="e.g. Toner, Serum, Cleanser" />
          </Form.Item>

          <Form.Item name="skin_type" label="Skin Type">
            <Select
              placeholder="Select skin type"
              options={[
                { value: 'All Skin Type', label: 'All Skin Type' },
                { value: 'Sensitive Skin', label: 'Sensitive Skin' },
                { value: 'Dry Skin', label: 'Dry Skin' },
                { value: 'Oily Skin', label: 'Oily Skin' },
                { value: 'Combination Skin', label: 'Combination Skin' },
              ]}
            />
          </Form.Item>

          <Form.Item name="product_image" label="Image Path/URL">
            <Input placeholder="e.g. cosrx_cleanser.jpg or https://..." />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Enter product description" />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right', marginBottom: 0, marginTop: '16px' }}>
            <Space>
              <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Save Product
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* UPDATE PRODUCT MODAL */}
      <Modal
        title="Update Product"
        open={editingProduct !== null}
        onCancel={() => {
          setEditingProduct(null)
          updateForm.resetFields()
        }}
        footer={null}
        width={480}
        centered
      >
        <Form
          form={updateForm}
          layout="vertical"
          onFinish={handleUpdateSubmit}
          style={{ marginTop: '12px' }}
        >
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter product name' }]}
          >
            <Input />
          </Form.Item>

          <Space style={{ display: 'flex' }} align="baseline">
            <Form.Item
              name="price"
              label="Price ($)"
              rules={[{ required: true, message: 'Please enter price' }]}
              style={{ flex: 1 }}
            >
              <InputNumber style={{ width: '100%' }} min={0} precision={2} />
            </Form.Item>
            <Form.Item
              name="stock"
              label="Stock"
              rules={[{ required: true, message: 'Please enter stock' }]}
              style={{ flex: 1 }}
            >
              <InputNumber style={{ width: '100%' }} min={0} />
            </Form.Item>
          </Space>

          <Form.Item
            name="category_name"
            label="Category Name"
            rules={[{ required: true, message: 'Please enter category' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="skin_type" label="Skin Type">
            <Select
              options={[
                { value: 'All Skin Type', label: 'All Skin Type' },
                { value: 'Sensitive Skin', label: 'Sensitive Skin' },
                { value: 'Dry Skin', label: 'Dry Skin' },
                { value: 'Oily Skin', label: 'Oily Skin' },
                { value: 'Combination Skin', label: 'Combination Skin' },
              ]}
            />
          </Form.Item>

          <Form.Item name="product_image" label="Image Path/URL">
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right', marginBottom: 0, marginTop: '16px' }}>
            <Space>
              <Button onClick={() => setEditingProduct(null)}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Update Product
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ProductsPage


// import { useEffect, useState } from 'react'
// import {
//   Table,
//   App,
//   Space,
//   Modal,
//   Typography,
//   Form,
//   Input,
//   InputNumber,
//   Select,
//   Button,
//   Popconfirm,
//   Descriptions,
//   Tag,
//   Image,
// } from 'antd'
// import { PlusOutlined } from '@ant-design/icons'

// const { Link, Title } = Typography

// function ProductsPage() {
//   // Safe fallback to prevent undefined.replace() crashes
//   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
//   const API_URL = `${API_BASE_URL}/product`
//   const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '')
//   const { message } = App.useApp()

//   // State Management
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [editingProduct, setEditingProduct] = useState(null)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false)

//   const [updateForm] = Form.useForm()
//   const [addForm] = Form.useForm()

//   const [submitting, setSubmitting] = useState(false)
//   const [pagination, setPagination] = useState({
//     current: 1,
//     pageSize: 10,
//     total: 0,
//     showSizeChanger: true,
//     pageSizeOptions: ['5', '10', '20', '50'],
//   })

//   // Helper to handle image paths safely
//   const getImageUrl = (imagePath) => {
//     if (!imagePath || typeof imagePath !== 'string') {
//       return 'https://via.placeholder.com/44?text=No+Image'
//     }
//     if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
//       return imagePath
//     }
//     if (imagePath.startsWith('/')) {
//       return `${API_ORIGIN}${imagePath}`
//     }
//     return `${API_ORIGIN}/storage/${imagePath}`
//   }

//   // ---------------------------------------------------------------------------
//   // 1. FETCH PRODUCTS FROM API
//   // ---------------------------------------------------------------------------
//   const fetchProducts = async (page = 1, pageSize = 10, sorter = {}) => {
//     setLoading(true)

//     try {
//       const params = new URLSearchParams({
//         page: String(page),
//         per_page: String(pageSize),
//         sortDir: sorter.order === 'descend' ? 'desc' : 'asc',
//       })

//       if (sorter.field) {
//         params.set('sortBy', sorter.field)
//       }

//       const response = await fetch(`${API_URL}?${params}`, {
//         headers: {
//           'Accept': 'application/json',
//         },
//       })

//       const contentType = response.headers.get('content-type')
//       if (!contentType || !contentType.includes('application/json')) {
//         throw new Error('Backend returned non-JSON response. Check if Laravel backend is running.')
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`)
//       }

//       const result = await response.json()
//       const products = Array.isArray(result) ? result : result.data || []

//       setData(products)

//       setPagination((previous) => ({
//         ...previous,
//         current: result.current_page || page,
//         pageSize,
//         total: result.total || products.length,
//       }))
//     } catch (error) {
//       console.error('Failed to fetch products:', error)
//       message.error(error.message || 'Failed to load product data.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchProducts(pagination.current, pagination.pageSize)
//   }, [])

//   const handleTableChange = (newPagination, filters, sorter) => {
//     fetchProducts(newPagination.current, newPagination.pageSize, sorter)
//   }

//   // ---------------------------------------------------------------------------
//   // 2. VIEW / UPDATE / DELETE / CREATE HANDLERS
//   // ---------------------------------------------------------------------------
//   const handleView = (product) => {
//     setSelectedProduct(product)
//   }

//   const handleUpdate = (product) => {
//     setEditingProduct(product)
//     updateForm.setFieldsValue({
//       name: product.name || '',
//       price: product.price || 0,
//       stock: product.stock || 0,
//       category_name: product.category?.name || product.category_name || '',
//       skin_type: product.skin_type || '',
//       description: product.description || '',
//       product_image: product.product_image || '',
//     })
//   }

//   const handleCreateSubmit = async (values) => {
//     setSubmitting(true)
//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(values),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to add product')
//       }

//       message.success('Product added successfully!')
//       setIsAddModalOpen(false)
//       addForm.resetFields()
//       fetchProducts(pagination.current, pagination.pageSize)
//     } catch (error) {
//       console.error('Failed to add product:', error)
//       message.error('Failed to add product')
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   const handleUpdateSubmit = async (values) => {
//     setSubmitting(true)

//     try {
//       const response = await fetch(`${API_URL}/${editingProduct.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(values),
//       })

//       if (!response.ok) {
//         const errorText = await response.text()
//         console.error('Update failed:', response.status, errorText)
//         throw new Error('Update request failed')
//       }

//       message.success('Product updated successfully')
//       setEditingProduct(null)
//       updateForm.resetFields()
//       fetchProducts(pagination.current, pagination.pageSize)
//     } catch (error) {
//       console.error('Failed to update product:', error)
//       message.error('Failed to update product')
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   const handleDelete = async (product) => {
//     try {
//       const response = await fetch(`${API_URL}/${product.id}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//         },
//       })

//       if (!response.ok) {
//         throw new Error('Delete request failed')
//       }

//       message.success(`${product.name} was deleted successfully`)
//       fetchProducts(pagination.current, pagination.pageSize)
//     } catch (error) {
//       console.error('Failed to delete product:', error)
//       message.error('Failed to delete product')
//     }
//   }

//   // ---------------------------------------------------------------------------
//   // 3. TABLE COLUMNS DEFINITION
//   // ---------------------------------------------------------------------------
//   const columns = [
//     {
//       title: 'ID',
//       key: 'id',
//       width: 60,
//       render: (_, __, index) =>
//         (pagination.current - 1) * pagination.pageSize + index + 1,
//     },
//     {
//       title: 'Category Name',
//       key: 'category_name',
//       sorter: true,
//       render: (_, record) => record.category?.name || record.category_name || 'N/A',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       sorter: true,
//       render: (text, record) => (
//         <Space size={12} align="center">
//           <Image
//             src={getImageUrl(record.product_image)}
//             alt={text}
//             width={44}
//             height={44}
//             style={{ objectFit: 'cover', borderRadius: '8px' }}
//             fallback="https://via.placeholder.com/44?text=No+Img"
//           />
//           <span style={{ fontWeight: 500 }}>{text}</span>
//         </Space>
//       ),
//     },
//     {
//       title: 'Stock',
//       dataIndex: 'stock',
//       key: 'stock',
//       sorter: true,
//     },
//     {
//       title: 'Price ($)',
//       dataIndex: 'price',
//       key: 'price',
//       sorter: true,
//       render: (price) => `$${Number(price || 0).toFixed(2)}`,
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//           <Link onClick={() => handleView(record)}>View</Link>
//           <Link onClick={() => handleUpdate(record)}>Update</Link>
//           <Popconfirm
//             title="Delete this product?"
//             description={`Are you sure you want to delete "${record.name}"?`}
//             okText="Delete"
//             cancelText="Cancel"
//             okButtonProps={{ danger: true }}
//             onConfirm={() => handleDelete(record)}
//           >
//             <Link type="danger">Delete</Link>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ]

//   return (
//     <div style={{ padding: '24px', width: '100%', boxSizing: 'border-box' }}>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: '100%',
//           marginBottom: '16px',
//         }}
//       >
//         <Title level={2} style={{ margin: 0 }}>
//           Products
//         </Title>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={() => setIsAddModalOpen(true)}
//         >
//           Add Product
//         </Button>
//       </div>

//       <Table
//         rowKey="id"
//         columns={columns}
//         dataSource={data}
//         pagination={pagination}
//         loading={loading}
//         onChange={handleTableChange}
//       />

//       {/* VIEW PRODUCT MODAL */}
//       <Modal
//         title="Product Details"
//         open={selectedProduct !== null}
//         onCancel={() => setSelectedProduct(null)}
//         footer={null}
//         centered
//         width={520}
//       >
//         {selectedProduct && (
//           <Descriptions
//             bordered
//             column={1}
//             size="middle"
//             labelStyle={{ width: '130px', fontWeight: 600, background: '#fafafa' }}
//             contentStyle={{ fontWeight: 500 }}
//           >
//             <Descriptions.Item label="ID">{selectedProduct.id}</Descriptions.Item>
//             <Descriptions.Item label="Image">
//               <Image
//                 src={getImageUrl(selectedProduct.product_image)}
//                 alt={selectedProduct.name}
//                 width={120}
//                 height={120}
//                 style={{ objectFit: 'cover', borderRadius: '8px' }}
//                 fallback="https://via.placeholder.com/120?text=No+Img"
//               />
//             </Descriptions.Item>
//             <Descriptions.Item label="Name">{selectedProduct.name}</Descriptions.Item>
//             <Descriptions.Item label="Category">
//               {selectedProduct.category?.name || selectedProduct.category_name || 'N/A'}
//             </Descriptions.Item>
//             <Descriptions.Item label="Price">
//               ${Number(selectedProduct.price || 0).toFixed(2)}
//             </Descriptions.Item>
//             <Descriptions.Item label="Stock">{selectedProduct.stock}</Descriptions.Item>
//             <Descriptions.Item label="Skin Type">
//               <Tag color="green">{selectedProduct.skin_type || 'N/A'}</Tag>
//             </Descriptions.Item>
//             <Descriptions.Item label="Description">
//               {selectedProduct.description || 'N/A'}
//             </Descriptions.Item>
//           </Descriptions>
//         )}
//       </Modal>

//       {/* ADD PRODUCT MODAL */}
//       <Modal
//         title="Add Product"
//         open={isAddModalOpen}
//         onCancel={() => {
//           setIsAddModalOpen(false)
//           addForm.resetFields()
//         }}
//         footer={null}
//         width={480}
//         centered
//       >
//         <Form
//           form={addForm}
//           layout="vertical"
//           onFinish={handleCreateSubmit}
//           style={{ marginTop: '12px' }}
//         >
//           <Form.Item
//             name="name"
//             label="Product Name"
//             rules={[{ required: true, message: 'Please enter product name' }]}
//           >
//             <Input placeholder="Enter product name" />
//           </Form.Item>

//           <Space style={{ display: 'flex' }} align="baseline">
//             <Form.Item
//               name="price"
//               label="Price ($)"
//               rules={[{ required: true, message: 'Please enter price' }]}
//               style={{ flex: 1 }}
//             >
//               <InputNumber style={{ width: '100%' }} min={0} precision={2} placeholder="0.00" />
//             </Form.Item>
//             <Form.Item
//               name="stock"
//               label="Stock"
//               rules={[{ required: true, message: 'Please enter stock' }]}
//               style={{ flex: 1 }}
//             >
//               <InputNumber style={{ width: '100%' }} min={0} placeholder="0" />
//             </Form.Item>
//           </Space>

//           <Form.Item
//             name="category_name"
//             label="Category Name"
//             rules={[{ required: true, message: 'Please enter category' }]}
//           >
//             <Input placeholder="e.g. Toner, Serum, Cleanser" />
//           </Form.Item>

//           <Form.Item name="skin_type" label="Skin Type">
//             <Select
//               placeholder="Select skin type"
//               options={[
//                 { value: 'All Skin Type', label: 'All Skin Type' },
//                 { value: 'Sensitive Skin', label: 'Sensitive Skin' },
//                 { value: 'Dry Skin', label: 'Dry Skin' },
//                 { value: 'Oily Skin', label: 'Oily Skin' },
//                 { value: 'Combination Skin', label: 'Combination Skin' },
//               ]}
//             />
//           </Form.Item>

//           <Form.Item name="product_image" label="Image Path/URL">
//             <Input placeholder="e.g. cosrx_cleanser.jpg or https://..." />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={2} placeholder="Enter product description" />
//           </Form.Item>

//           <Form.Item style={{ textAlign: 'right', marginBottom: 0, marginTop: '16px' }}>
//             <Space>
//               <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit" loading={submitting}>
//                 Save Product
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* UPDATE PRODUCT MODAL */}
//       <Modal
//         title="Update Product"
//         open={editingProduct !== null}
//         onCancel={() => {
//           setEditingProduct(null)
//           updateForm.resetFields()
//         }}
//         footer={null}
//         width={480}
//         centered
//       >
//         <Form
//           form={updateForm}
//           layout="vertical"
//           onFinish={handleUpdateSubmit}
//           style={{ marginTop: '12px' }}
//         >
//           <Form.Item
//             name="name"
//             label="Product Name"
//             rules={[{ required: true, message: 'Please enter product name' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Space style={{ display: 'flex' }} align="baseline">
//             <Form.Item
//               name="price"
//               label="Price ($)"
//               rules={[{ required: true, message: 'Please enter price' }]}
//               style={{ flex: 1 }}
//             >
//               <InputNumber style={{ width: '100%' }} min={0} precision={2} />
//             </Form.Item>
//             <Form.Item
//               name="stock"
//               label="Stock"
//               rules={[{ required: true, message: 'Please enter stock' }]}
//               style={{ flex: 1 }}
//             >
//               <InputNumber style={{ width: '100%' }} min={0} />
//             </Form.Item>
//           </Space>

//           <Form.Item
//             name="category_name"
//             label="Category Name"
//             rules={[{ required: true, message: 'Please enter category' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item name="skin_type" label="Skin Type">
//             <Select
//               options={[
//                 { value: 'All Skin Type', label: 'All Skin Type' },
//                 { value: 'Sensitive Skin', label: 'Sensitive Skin' },
//                 { value: 'Dry Skin', label: 'Dry Skin' },
//                 { value: 'Oily Skin', label: 'Oily Skin' },
//                 { value: 'Combination Skin', label: 'Combination Skin' },
//               ]}
//             />
//           </Form.Item>

//           <Form.Item name="product_image" label="Image Path/URL">
//             <Input />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={2} />
//           </Form.Item>

//           <Form.Item style={{ textAlign: 'right', marginBottom: 0, marginTop: '16px' }}>
//             <Space>
//               <Button onClick={() => setEditingProduct(null)}>Cancel</Button>
//               <Button type="primary" htmlType="submit" loading={submitting}>
//                 Update Product
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   )
// }

// export default ProductsPage