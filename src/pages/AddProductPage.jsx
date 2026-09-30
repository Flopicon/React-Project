// import { Typography, Card, Tag } from 'antd'
// import { FormOutlined } from '@ant-design/icons'
// import ProductForm from '../components/ProductForm.jsx'

// const { Title, Paragraph } = Typography

// function AddProductPage({ onAddProduct }) {
//   return (
//     <div className="add-product-page">
//       <div style={{ marginBottom: 20 }}>
//         <Tag color="purple" icon={<FormOutlined />} style={{ marginBottom: 8 }}>
//           useState & Events
//         </Tag>
//         <Title level={2} style={{ margin: '4px 0 8px 0' }}>
//           Add a Product
//         </Title>
//         <Paragraph type="secondary" style={{ margin: 0, maxWidth: 600 }}>
//           Fill in the details below. Submitting the form updates the shared product state across the application.
//         </Paragraph>
//       </div>

//       <Card variant="borderless" style={{ background: '#fafafa', borderRadius: 12, border: '1px solid #f0f0f0' }}>
//         <ProductForm onAddProduct={onAddProduct} />
//       </Card>
//     </div>
//   )
// }

// export default AddProductPage


import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Space, Modal, message } from "antd";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

function AddProductPage({ onAddProduct }) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/products");
  };

  const onFinish = (values) => {
    const newProduct = {
      key: Date.now(),
      id: Date.now(),
      category_name: values.category_name,
      name: values.name,
      stock: values.stock,
      description: values.description || "No description provided",
      price: values.price,
      product_image: values.product_image || "/image/Skin 1004 Madagascar Centella Ampoule.jpg",
      skin_type: values.skin_type || "All Skin Type",
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    if (onAddProduct) {
      onAddProduct(newProduct);
    }
    message.success("Product successfully created!");
    navigate("/products");
  };

  return (
    <div style={{ padding: "32px", display: "flex", justifyContent: "center", minHeight: "80vh", alignItems: "center" }}>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={460}
        centered
        maskClosable={false}
      >
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: "12px" }}>
          <Form.Item name="name" label="Product Name" rules={[{ required: true, message: "Please input product name!" }]}>
            <Input placeholder="Enter product name" />
          </Form.Item>

          <Form.Item name="price" label="Price ($)" rules={[{ required: true, message: "Please input price!" }]}>
            <InputNumber style={{ width: "100%" }} placeholder="0.00" />
          </Form.Item>

          <Form.Item name="category_name" label="Category Name" rules={[{ required: true, message: "Please input category name!" }]}>
            <Input placeholder="e.g. Toner, Serum, Cleanser" />
          </Form.Item>

          <Form.Item name="stock" label="Quantity / Stock" rules={[{ required: true, message: "Please input stock quantity!" }]}>
            <InputNumber style={{ width: "100%" }} placeholder="Enter quantity" />
          </Form.Item>

          <Form.Item name="skin_type" label="Skin Type">
            <Input placeholder="e.g. Sensitive Skin, All Skin Type" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Enter product description" />
          </Form.Item>

          <Form.Item name="product_image" label="Image Path">
            <Input placeholder="e.g. /image/filename.jpg" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right", marginBottom: 0, marginTop: "16px" }}>
            <Space>
              <Button onClick={() => form.resetFields()}>Reset</Button>
              <Button type="primary" htmlType="submit">Save Product</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddProductPage;