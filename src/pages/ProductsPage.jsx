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
//             <Col xs={24} sm={12} md={8} lg={8} xl={6} key={product.id}>
//               <ProductCard product={product} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   )
// }

// export default ProductsPage

// import { Table } from "antd";
// import React from "react";
// // import { Button, Input, Space, Flex } from "antd";
// // import { SearchOutlined } from "@ant-design/icons";

// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//     key: "id",
//   },
//   {
//     title: "Category ID",
//     dataIndex: "category_id",
//     key: "ategory_i",
//   },

//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Stock",
//     dataIndex: "stock",
//     key: "stock",
//   },
//   {
//     title: "Description",
//     dataIndex: "description",
//     key: "description",
//   },
//   {
//     title: "Price ($)",
//     dataIndex: "price",
//     key: "price",
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: "Product Image",
//     dataIndex: "product_image",
//     key: "product_image",
//   },

//   {
//     title: "Skin Type",
//     dataIndex: "skin_type",
//     key: "skin_type",
//   },
//   {
//     title: "Created At",
//     dataIndex: "created_at",
//     key: "created_at",
//   },
// ];
// const data = [
//   {
//     key: 1,
//     id: 1,
//     category_id: 1,
//     name: "Skin 1004 Madagascar Centella Ampoule",
//     stock: 45,
//     description: "Soothing and calming facial ampoule with centella ...",
//     price: 18.5,
//     product_image: "skin1004.jpg",
//     skin_type: "All Skin Type",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 2,
//     id: 2,
//     category_id: 1,
//     name: "Anua Heartleaf 77 Soothing Toner",
//     stock: 30,
//     description: "Hydrating toner formulated with heartleaf extract ...",
//     price: 20.0,
//     product_image: "anua_toner.jpg",
//     skin_type: "Sensitive Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
//   {
//     key: 3,
//     id: 3,
//     category_id: 1,
//     name: "Cosrx Advanced Snail 96 Mucin Power Essence",
//     stock: 50,
//     description: "Nourishing essence that protects skin from moistur...",
//     price: 21.0,
//     product_image: "cosrx_snail.jpg",
//     skin_type: "Dry Skin",
//     created_at: "2026-09-15 10:38:23",

//     description: "Balances skin pH and provides deep hydration...",
//     price: 22.0,
//     skin_type: "Dry Skin",
//     created_at: "2026-09-16 09:12:00",
//   },
//   {
//     key: "19",
//     id: 19,
//     category_id: 4,
//     name: "Haruharu Wonder Black Rice Hyaluronic Toner",
//     stock: 50,
//     description:
//       "Provides powerful antioxidant care with fermented black rice...",
//     price: 24.0,
//     skin_type: "All Skin Type",
//     created_at: "2026-09-16 09:12:00",
//   },
//   {
//     key: "20",
//     id: 20,
//     category_id: 4,
//     name: "Mediheal Tea Tree Essential Mask",
//     stock: 100,
//     description: "Soothing sheet mask for blemish-prone skin...",
//     price: 2.0,
//     skin_type: "Sensitive Skin",
//     created_at: "2026-09-16 09:12:00",
//   },
//   {
//     key: "21",
//     id: 21,
//     category_id: 4,
//     name: "Isntree Green Tea Fresh Toner",
//     stock: 45,
//     description:
//       "Sebum-controlling toner infused with Jeju green tea extract...",
//     price: 20.0,
//     skin_type: "Oily Skin",
//     created_at: "2026-09-16 09:12:00",
//   },
// ];
// function ProductTable() {
//   return (
//     <div style={{ padding: "24px" }}>
//       <Table dataSource={data} columns={columns} />
//     </div>
//   );
// }

// export default ProductTable;


// import React, { useState } from "react";
// import { Table, Button, Space, Modal, Form, Input, InputNumber, Card, message } from "antd";
// import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";

// const { confirm } = Modal;

// const initialData = [
//   {
//     key: 1,
//     id: 1,
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
//     category_name: "Essence",
//     name: "Cosrx Advanced Snail 96 Mucin Power Essence",
//     stock: 50,
//     description: "Nourishing essence that protects skin from moisture loss and repairs skin texture.",
//     price: 21.0,
//     product_image: "/image/Cosrx Advanced Snail 96 Mucin Power Essence.jpg",
//     skin_type: "Dry Skin",
//     created_at: "2026-09-15 10:38:23",
//   },
// ];

// function ProductsPage() {
//   const [data, setData] = useState(initialData);
  
//   // Modal states
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   const [addForm] = Form.useForm();
//   const [updateForm] = Form.useForm();

//   // Handle Add Product
//   const handleAddProduct = (values) => {
//     const newProduct = {
//       key: Date.now(),
//       id: data.length + 1,
//       category_name: values.category_name,
//       name: values.name,
//       stock: values.stock,
//       description: values.description || "No description provided",
//       price: values.price,
//       product_image: values.product_image || "/image/Skin 1004 Madagascar Centella Ampoule.jpg",
//       skin_type: values.skin_type || "All Skin Type",
//       created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
//     };

//     setData([...data, newProduct]);
//     setIsAddModalOpen(false);
//     addForm.resetFields();
//     message.success("Product added successfully!");
//   };

//   // Handle Delete with Confirmation Dialog
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

//   // Handle Update Product
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

//   // Table Columns Definition
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//       width: 60,
//     },
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
//     {
//       title: "Stock",
//       dataIndex: "stock",
//       key: "stock",
//     },
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
//           <Button 
//             icon={<EyeOutlined />} 
//             size="small" 
//             type="link" 
//             onClick={() => { setSelectedProduct(record); setIsViewModalOpen(true); }}
//           >
//             View
//           </Button>
//           <Button 
//             icon={<EditOutlined />} 
//             size="small" 
//             type="link" 
//             onClick={() => {
//               setSelectedProduct(record);
//               updateForm.setFieldsValue({
//                 name: record.name,
//                 price: record.price,
//                 skin_type: record.skin_type,
//               });
//               setIsUpdateModalOpen(true);
//             }}
//           >
//             Update
//           </Button>
//           <Button 
//             icon={<DeleteOutlined />} 
//             size="small" 
//             type="link" 
//             danger 
//             onClick={() => showDeleteConfirm(record)}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: "24px" }}>
//       {/* Header bar */}
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" }}>
//         <h2>Products</h2>
//         <Button 
//           type="primary" 
//           icon={<PlusOutlined />} 
//           onClick={() => setIsAddModalOpen(true)}
//         >
//           Add Product
//         </Button>
//       </div>

//       <Table dataSource={data} columns={columns} />

//       {/* 1. ADD PRODUCT MODAL */}
//       <Modal
//         title="Add Product"
//         open={isAddModalOpen}
//         onCancel={() => setIsAddModalOpen(false)}
//         footer={null}
//         width={460}
//         centered
//       >
//         <Form form={addForm} layout="vertical" onFinish={handleAddProduct} style={{ marginTop: "12px" }}>
//           <Form.Item name="name" label="Product Name" rules={[{ required: true, message: "Please enter product name!" }]}>
//             <Input placeholder="Enter product name" />
//           </Form.Item>
//           <Form.Item name="price" label="Price ($)" rules={[{ required: true, message: "Please enter price!" }]}>
//             <InputNumber style={{ width: "100%" }} placeholder="0.00" />
//           </Form.Item>
//           <Form.Item name="category_name" label="Category Name" rules={[{ required: true, message: "Please enter category!" }]}>
//             <Input placeholder="e.g. Toner, Serum, Cleanser" />
//           </Form.Item>
//           <Form.Item name="stock" label="Quantity / Stock" rules={[{ required: true, message: "Please enter stock!" }]}>
//             <InputNumber style={{ width: "100%" }} placeholder="Enter quantity" />
//           </Form.Item>
//           <Form.Item name="skin_type" label="Skin Type">
//             <Input placeholder="e.g. Sensitive Skin, All Skin Type" />
//           </Form.Item>
//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={2} placeholder="Enter product description" />
//           </Form.Item>
//           <Form.Item name="product_image" label="Image Path">
//             <Input placeholder="e.g. /image/Skin 1004 Madagascar Centella Ampoule.jpg" />
//           </Form.Item>
//           <Form.Item style={{ textAlign: "right", marginBottom: 0, marginTop: "16px" }}>
//             <Space>
//               <Button onClick={() => addForm.resetFields()}>Reset</Button>
//               <Button type="primary" htmlType="submit">Save Product</Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* 2. VIEW PRODUCT DETAIL MODAL */}
//       <Modal
//         title="Product Details"
//         open={isViewModalOpen}
//         onCancel={() => setIsViewModalOpen(false)}
//         width={500}
//         centered
//         footer={[
//           <Button key="close" type="primary" onClick={() => setIsViewModalOpen(false)}>
//             Close
//           </Button>
//         ]}
//       >
//         {selectedProduct && (
//           <Card bordered={false} bodyStyle={{ padding: "12px 0 0 0" }}>
//             <div style={{ textAlign: "center", marginBottom: "20px", background: "#f8f9fa", padding: "20px", borderRadius: "12px" }}>
//               <img 
//                 src={selectedProduct.product_image} 
//                 alt={selectedProduct.name} 
//                 style={{ width: "100%", maxHeight: "240px", objectFit: "contain", borderRadius: "8px" }} 
//               />
//             </div>
            
//             <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
//               <span style={{ background: "#e6f7ff", color: "#1890ff", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>
//                 {selectedProduct.category_name}
//               </span>
//               <span style={{ background: "#f6ffed", color: "#52c41a", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>
//                 {selectedProduct.skin_type}
//               </span>
//             </div>

//             <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#222", marginBottom: "8px" }}>
//               {selectedProduct.name}
//             </h3>
//             <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "16px" }}>
//               {selectedProduct.description}
//             </p>
//             <h2 style={{ color: "#2e7d32", fontSize: "24px", fontWeight: "bold" }}>
//               ${Number(selectedProduct.price || 0).toFixed(2)}
//             </h2>
//           </Card>
//         )}
//       </Modal>

//       {/* 3. UPDATE PRODUCT MODAL */}
//       <Modal
//         title="Update Product"
//         open={isUpdateModalOpen}
//         onCancel={() => setIsUpdateModalOpen(false)}
//         footer={null}
//         width={460}
//         centered
//       >
//         <Form form={updateForm} layout="vertical" onFinish={handleUpdateProduct} style={{ marginTop: "12px" }}>
//           <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
//             <Input placeholder="Enter product name" />
//           </Form.Item>
//           <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}>
//             <InputNumber style={{ width: "100%" }} placeholder="0.00" />
//           </Form.Item>
//           <Form.Item name="skin_type" label="Skin Type" rules={[{ required: true }]}>
//             <Input placeholder="Enter skin type" />
//           </Form.Item>
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


import React, { useState } from "react";
import { Table, Button, Space, Modal, Form, Input, InputNumber, Card, message } from "antd";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

const databaseProducts = [
  {
    key: 1,
    id: 1,
    category_id: 3,
    category_name: "Serum",
    name: "Skin 1004 Madagascar Centella Ampoule",
    stock: 45,
    description: "Soothing and calming facial ampoule with centella extract.",
    price: 18.5,
    product_image: "/image/Skin 1004 Madagascar Centella Ampoule.jpg",
    skin_type: "All Skin Type",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 2,
    id: 2,
    category_id: 2,
    category_name: "Toner",
    name: "Anua Heartleaf 77 Soothing Toner",
    stock: 30,
    description: "Hydrating toner formulated with heartleaf extract to calm irritated skin.",
    price: 20.0,
    product_image: "/image/Anua Heartleaf 77 Soothing Toner.jpg",
    skin_type: "Sensitive Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 3,
    id: 3,
    category_id: 3,
    category_name: "Serum",
    name: "Cosrx Advanced Snail 96 Mucin Power Essence",
    stock: 50,
    description: "Nourishing essence that protects skin from moisture loss and repairs skin texture.",
    price: 21.0,
    product_image: "/image/Cosrx Advanced Snail 96 Mucin Power Essence.jpg",
    skin_type: "Dry Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 4,
    id: 4,
    category_id: 5,
    category_name: "Sunscreen",
    name: "Beauty of Joseon Relief Sun Rice + Probiotics",
    stock: 25,
    description: "Lightweight and creamy organic sunscreen that provides protection.",
    price: 18.0,
    product_image: "/image/Beauty of Joseon Relief Sun Rice + Probiotics.jpg",
    skin_type: "Combination Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 5,
    id: 5,
    category_id: 8,
    category_name: "Lip Care",
    name: "Laneige Lip Sleeping Mask",
    stock: 40,
    description: "Soften lips overnight by gently melting dead skin...",
    price: 24.0,
    product_image: "/image/Laneige Lip Sleeping Mask.jpg",
    skin_type: "All Skin Type",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 6,
    id: 6,
    category_id: 5,
    category_name: "Sunscreen",
    name: "Isntree Hyaluronic Acid Watery Sun Gel",
    stock: 35,
    description: "Moisturizing sunscreen infused with 8 types of hyaluronic acid.",
    price: 22.0,
    product_image: "/image/Isntree Hyaluronic Acid Watery Sun Gel.jpg",
    skin_type: "Dry Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 7,
    id: 7,
    category_id: 2,
    category_name: "Toner",
    name: "Round Lab 107 Dokdo Toner",
    stock: 60,
    description: "Fresh water toner that clears dead skin cells for smooth skin.",
    price: 19.5,
    product_image: "/image/Round Lab 107 Dokdo Toner.jpg",
    skin_type: "Sensitive Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 8,
    id: 8,
    category_id: 2,
    category_name: "Toner",
    name: "Some By Mi AHA BHA PHA 30 Days Miracle Toner",
    stock: 20,
    description: "Exfoliating toner designed to clear acne and blemishes.",
    price: 23.0,
    product_image: "/image/Some By Mi AHA BHA PHA 30 Days Miracle Toner.jpg",
    skin_type: "Oily Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 9,
    id: 9,
    category_id: 3,
    category_name: "Serum",
    name: "Torriden Dive-In Low Molecular Hyaluronic Acid Serum",
    stock: 55,
    description: "Deeply hydrating serum that absorbs quickly without stickiness.",
    price: 19.0,
    product_image: "/image/Torriden Dive-In Low Mole...yaluronic Acid Serrum.jpg",
    skin_type: "Dehydrated Skin",
    created_at: "2026-09-15 10:38:23",
  },
  {
    key: 10,
    id: 10,
    category_id: 1,
    category_name: "Cleanser",
    name: "COSRX Low Good Morning Gel Cleanser",
    stock: 70,
    description: "Gentle daily cleanser with mild acidic formula for sensitive skin.",
    price: 12.0,
    product_image: "/image/COSRX Low Good Morning Gel Cleanser.jpg",
    skin_type: "All Skin Type",
    created_at: "2026-09-15 10:38:23",
  },
];

function ProductsPage({ products }) {
  const initialData = (!products || products.some(p => p.name === "Notebook")) ? databaseProducts : products;

  const [data, setData] = useState(initialData);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [updateForm] = Form.useForm();

  const showDeleteConfirm = (record) => {
    confirm({
      title: "Are you sure you want to delete this product?",
      icon: <ExclamationCircleFilled />,
      content: `Product: "${record.name}" will be permanently removed.`,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        setData(data.filter((item) => item.key !== record.key));
        message.success("Product deleted successfully!");
      },
    });
  };

  const handleUpdateProduct = (values) => {
    const updatedData = data.map((item) => {
      if (item.key === selectedProduct.key) {
        return {
          ...item,
          name: values.name,
          price: values.price,
          skin_type: values.skin_type,
        };
      }
      return item;
    });

    setData(updatedData);
    setIsUpdateModalOpen(false);
    message.success("Product updated successfully!");
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 60 },
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
      render: (text) => <span style={{ fontWeight: 400, color: "#333" }}>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space size={12}>
          <img 
            src={record.product_image} 
            alt={text} 
            style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "8px", border: "1px solid #f0f0f0" }} 
            onError={(e) => { e.target.src = "/image/Skin 1004 Madagascar Centella Ampoule.jpg"; }} 
          />
          <span style={{ fontWeight: 500 }}>{text}</span>
        </Space>
      ),
    },
    { title: "Stock", dataIndex: "stock", key: "stock" },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => (a.price || 0) - (b.price || 0),
      render: (price) => `$${Number(price || 0).toFixed(2)}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} size="small" type="link" onClick={() => { setSelectedProduct(record); setIsViewModalOpen(true); }}>View</Button>
          <Button icon={<EditOutlined />} size="small" type="link" onClick={() => {
            setSelectedProduct(record);
            updateForm.setFieldsValue({ name: record.name, price: record.price, skin_type: record.skin_type });
            setIsUpdateModalOpen(true);
          }}>Update</Button>
          <Button icon={<DeleteOutlined />} size="small" type="link" danger onClick={() => showDeleteConfirm(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" }}>
        <h2>Products</h2>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={() => { window.location.href = "/add-product"; }}
        >
          Add Product
        </Button>
      </div>

      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />

      {/* VIEW MODAL */}
      <Modal title="Product Details" open={isViewModalOpen} onCancel={() => setIsViewModalOpen(false)} width={500} centered footer={[<Button key="close" type="primary" onClick={() => setIsViewModalOpen(false)}>Close</Button>]}>
        {selectedProduct && (
          <Card bordered={false} bodyStyle={{ padding: "12px 0 0 0" }}>
            <div style={{ textAlign: "center", marginBottom: "20px", background: "#f8f9fa", padding: "20px", borderRadius: "12px" }}>
              <img src={selectedProduct.product_image} alt={selectedProduct.name} style={{ width: "100%", maxHeight: "240px", objectFit: "contain", borderRadius: "8px" }} />
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
              <span style={{ background: "#e6f7ff", color: "#1890ff", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>{selectedProduct.category_name}</span>
              <span style={{ background: "#f6ffed", color: "#52c41a", padding: "4px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: 500 }}>{selectedProduct.skin_type}</span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#222", marginBottom: "8px" }}>{selectedProduct.name}</h3>
            <p style={{ color: "#666", lineHeight: "1.5", marginBottom: "16px" }}>{selectedProduct.description}</p>
            <h2 style={{ color: "#2e7d32", fontSize: "24px", fontWeight: "bold" }}>${Number(selectedProduct.price || 0).toFixed(2)}</h2>
          </Card>
        )}
      </Modal>

      {/* UPDATE MODAL */}
      <Modal title="Update Product" open={isUpdateModalOpen} onCancel={() => setIsUpdateModalOpen(false)} footer={null} width={460} centered>
        <Form form={updateForm} layout="vertical" onFinish={handleUpdateProduct} style={{ marginTop: "12px" }}>
          <Form.Item name="name" label="Product Name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}><InputNumber style={{ width: "100%" }} /></Form.Item>
          <Form.Item name="skin_type" label="Skin Type" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item style={{ textAlign: "right", marginBottom: 0, marginTop: "16px" }}>
            <Space>
              <Button onClick={() => setIsUpdateModalOpen(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">Update Product</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ProductsPage;