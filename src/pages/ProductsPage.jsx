// import { useNavigate } from 'react-router'
// import { Typography, Row, Col, Empty, Button, Tag, Flex } from 'antd'
// import { PlusOutlined, AppstoreOutlined } from '@ant-design/icons'
// import ProductCard from '../components/ProductCard.jsx'

// const { Title, Paragraph } = Typography

// function ProductsPage({ products }) {
//   const navigate = useNavigate()

//   return (
//     <div className="products-page">
//       <Flex justify="space-between" align="flex-start" wrap="wrap" gap="middle" style={{ marginBottom: 24 }}>
//         <div>
//           <Tag color="cyan" icon={<AppstoreOutlined />} style={{ marginBottom: 8 }}>
//             Reusable Component
//           </Tag>
//           <Title level={2} style={{ margin: '4px 0 8px 0' }}>
//             Products
//           </Title>
//           <Paragraph type="secondary" style={{ margin: 0, maxWidth: 600 }}>
//             Each card is rendered with the ProductCard component. React repeats it with distinct product props.
//           </Paragraph>
//         </div>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={() => navigate('/add-product')}
//         >
//           Add Product
//         </Button>
//       </Flex>

//       {products.length === 0 ? (
//         <Empty
//           image={Empty.PRESENTED_IMAGE_SIMPLE}
//           description="There are no products in the inventory yet."
//           style={{ padding: '40px 0' }}
//         >
//           <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/add-product')}>
//             Add First Product
//           </Button>
//         </Empty>
//       ) : (
//         <Row gutter={[16, 16]}>
//           {products.map((product) => (
//           </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   )
// }

// export default ProductsPage

//  





// import React, { useState } from "react";
// import { Table, Button, Space, Modal, Form, Input, InputNumber, Card, message } from "antd";
// import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";

// const { confirm } = Modal;

// const databaseProducts = [
//   {
//     key: 1,
//     id: 1,
//     category_id: 3,
//     category_name: "Serum",
//     name: "Skin 1004 Madagascar Centella Ampoule",
//     stock: 45,
//     description: "Soothing and calming facial ampoule with centella extract.",
//     price: 18.5,
//     product_image: "/image/Skin 1004 Madagascar Centella Ampoule.jpg",
//     skin_type: "All Skin Type",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 2,
//     id: 2,
//     category_id: 2,
//     category_name: "Toner",
//     name: "Anua Heartleaf 77 Soothing Toner",
//     stock: 30,
//     description: "Hydrating toner formulated with heartleaf extract to calm irritated skin.",
//     price: 20.0,
//     product_image: "/image/Anua Heartleaf 77 Soothing Toner.jpg",
//     skin_type: "Sensitive Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 3,
//     id: 3,
//     category_id: 3,
//     category_name: "Serum",
//     name: "Cosrx Advanced Snail 96 Mucin Power Essence",
//     stock: 50,
//     description: "Nourishing essence that protects skin from moisture loss and repairs skin texture.",
//     price: 21.0,
//     product_image: "/image/Cosrx Advanced Snail 96 Mucin Power Essence.jpg",
//     skin_type: "Dry Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 4,
//     id: 4,
//     category_id: 5,
//     category_name: "Sunscreen",
//     name: "Beauty of Joseon Relief Sun Rice + Probiotics",
//     stock: 25,
//     description: "Lightweight and creamy organic sunscreen that provides protection.",
//     price: 18.0,
//     product_image: "/image/Beauty of Joseon Relief Sun Rice + Probiotics.jpg",
//     skin_type: "Combination Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 5,
//     id: 5,
//     category_id: 8,
//     category_name: "Lip Care",
//     name: "Laneige Lip Sleeping Mask",
//     stock: 40,
//     description: "Soften lips overnight by gently melting dead skin...",
//     price: 24.0,
//     product_image: "/image/Laneige Lip Sleeping Mask.jpg",
//     skin_type: "All Skin Type",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 6,
//     id: 6,
//     category_id: 5,
//     category_name: "Sunscreen",
//     name: "Isntree Hyaluronic Acid Watery Sun Gel",
//     stock: 35,
//     description: "Moisturizing sunscreen infused with 8 types of hyaluronic acid.",
//     price: 22.0,
//     product_image: "/image/Isntree Hyaluronic Acid Watery Sun Gel.jpg",
//     skin_type: "Dry Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 7,
//     id: 7,
//     category_id: 2,
//     category_name: "Toner",
//     name: "Round Lab 107 Dokdo Toner",
//     stock: 60,
//     description: "Fresh water toner that clears dead skin cells for smooth skin.",
//     price: 19.5,
//     product_image: "/image/Round Lab 107 Dokdo Toner.jpg",
//     skin_type: "Sensitive Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 8,
//     id: 8,
//     category_id: 2,
//     category_name: "Toner",
//     name: "Some By Mi AHA BHA PHA 30 Days Miracle Toner",
//     stock: 20,
//     description: "Exfoliating toner designed to clear acne and blemishes.",
//     price: 23.0,
//     product_image: "/image/Some By Mi AHA BHA PHA 30 Days Miracle Toner.jpg",
//     skin_type: "Oily Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 9,
//     id: 9,
//     category_id: 3,
//     category_name: "Serum",
//     name: "Torriden Dive-In Low Molecular Hyaluronic Acid Serum",
//     stock: 55,
//     description: "Deeply hydrating serum that absorbs quickly without stickiness.",
//     price: 19.0,
//     product_image: "/image/Torriden Dive-In Low Molecular Hyaluronic Acid Serrum.jpg",
//     skin_type: "Dehydrated Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 10,
//     id: 10,
//     category_id: 1,
//     category_name: "Cleanser",
//     name: "COSRX Low Good Morning Gel Cleanser",
//     stock: 70,
//     description: "Gentle daily cleanser with mild acidic formula for sensitive skin.",
//     price: 12.0,
//     product_image: "/image/COSRX Low Good Morning Gel Cleanser.jpg",
//     skin_type: "All Skin Type",
//     created_at: "2026-09-15 10:38:23",
//   },
// ];

// function ProductsPage({ products }) {
//   const initialData = (!products || products.some(p => p.name === "Notebook")) ? databaseProducts : products;

//   const [data, setData] = useState(initialData);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   const [updateForm] = Form.useForm();

//   const showDeleteConfirm = (record) => {
//     confirm({
//       title: "Are you sure you want to delete this product?",
//       icon: <ExclamationCircleFilled />,
//       content: `Product: "${record.name}" will be permanently removed.`,
//       okText: "Yes, Delete",
//       okType: "danger",
//       cancelText: "Cancel",
//       onOk() {
//         setData(data.filter((item) => item.key !== record.key));
//         message.success("Product deleted successfully!");
//       },
//     });
//   };

//   const handleUpdateProduct = (values) => {
//     const updatedData = data.map((item) => {
//       if (item.key === selectedProduct.key) {
//         return {
//           ...item,
//           name: values.name,
//           price: values.price,
//           skin_type: values.skin_type,
//         };
//       }
//       return item;
//     });

//     setData(updatedData);
//     setIsUpdateModalOpen(false);
//     message.success("Product updated successfully!");
//   };

//   const columns = [
//     { title: "ID", dataIndex: "id", key: "id", width: 60 },
//     {
//       title: "Category Name",
//       dataIndex: "category_name",
//       key: "category_name",
//       render: (text) => <span style={{ fontWeight: 400, color: "#333" }}>{text}</span>,
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text, record) => (
//         <Space size={12}>
//           <img 
//             src={record.product_image} 
//             alt={text} 
//             style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "8px", border: "1px solid #f0f0f0" }} 
//           />
//           <span style={{ fontWeight: 500 }}>{text}</span>
//         </Space>
//       ),
//     },
//     { title: "Stock", dataIndex: "stock", key: "stock" },
//     {
//       title: "Price ($)",
//       dataIndex: "price",
//       key: "price",
//       sorter: (a, b) => (a.price || 0) - (b.price || 0),
//       render: (price) => `$${Number(price || 0).toFixed(2)}`,
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
//           <Button icon={<EyeOutlined />} size="small" type="link" onClick={() => { setSelectedProduct(record); setIsViewModalOpen(true); }}>View</Button>
//           <Button icon={<EditOutlined />} size="small" type="link" onClick={() => {
//             setSelectedProduct(record);
//             updateForm.setFieldsValue({ name: record.name, price: record.price, skin_type: record.skin_type });
//             setIsUpdateModalOpen(true);
//           }}>Update</Button>
//           <Button icon={<DeleteOutlined />} size="small" type="link" danger onClick={() => showDeleteConfirm(record)}>Delete</Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: "24px" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" }}>
//         <h2>Products</h2>
//         <Button 
//           type="primary" 
//           icon={<PlusOutlined />} 
//           onClick={() => { window.location.href = "/add-product"; }}
//         >
//           Add Product
//         </Button>
//       </div>

//       <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />

//       {/* VIEW MODAL */}
//       <Modal title="Product Details" open={isViewModalOpen} onCancel={() => setIsViewModalOpen(false)} width={500} centered footer={[<Button key="close" type="primary" onClick={() => setIsViewModalOpen(false)}>Close</Button>]}>
//         {selectedProduct && (
//           <Card bordered={false} bodyStyle={{ padding: "12px 0 0 0" }}>
//             <div style={{ textAlign: "center", marginBottom: "20px", background: "#f8f9fa", padding: "20px", borderRadius: "12px" }}>
//               <img src={selectedProduct.product_image} alt={selectedProduct.name} style={{ width: "100%", maxHeight: "240px", objectFit: "contain", borderRadius: "8px" }} />
//             </div>
//             <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
//               <span style={{ background: "#e6f7ff", color: "#1890ff", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>{selectedProduct.category_name}</span>
//               <span style={{ background: "#f6ffed", color: "#52c41a", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>{selectedProduct.skin_type}</span>
//             </div>
//             <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#222", marginBottom: "8px" }}>{selectedProduct.name}</h3>
//             <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "16px" }}>{selectedProduct.description}</p>
//             <h2 style={{ color: "#2e7d32", fontSize: "24px", fontWeight: "bold" }}>${Number(selectedProduct.price || 0).toFixed(2)}</h2>
//           </Card>
//         )}
//       </Modal>

//       {/* UPDATE MODAL */}
//       <Modal title="Update Product" open={isUpdateModalOpen} onCancel={() => setIsUpdateModalOpen(false)} footer={null} width={460} centered>
//         <Form form={updateForm} layout="vertical" onFinish={handleUpdateProduct} style={{ marginTop: "12px" }}>
//           <Form.Item name="name" label="Product Name" rules={[{ required: true }]}><Input /></Form.Item>
//           <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}><InputNumber style={{ width: "100%" }} /></Form.Item>
//           <Form.Item name="skin_type" label="Skin Type" rules={[{ required: true }]}><Input /></Form.Item>
//           <Form.Item style={{ textAlign: "right", marginBottom: 0, marginTop: "16px" }}>
//             <Space>
//               <Button onClick={() => setIsUpdateModalOpen(false)}>Cancel</Button>
//               <Button type="primary" htmlType="submit">Update Product</Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

// export default ProductsPage;



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
import { PlusOutlined } from '@ant-design/icons'

const { Link, Title } = Typography

function ProductsPage() {
  const API_URL = 'http://127.0.0.1:8000/api/product'
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
      return `http://127.0.0.1:8000${imagePath}`
    }
    return `http://127.0.0.1:8000/storage/${imagePath}`
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
          <Link onClick={() => handleView(record)}>View</Link>
          <Link onClick={() => handleUpdate(record)}>Update</Link>
          <Popconfirm
            title="Delete this product?"
            description={`Are you sure you want to delete "${record.name}"?`}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
            onConfirm={() => handleDelete(record)}
          >
            <Link type="danger">Delete</Link>
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