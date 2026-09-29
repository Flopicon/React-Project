import { Form, Input, InputNumber, Button, Select, Space, App } from 'antd'
import { PlusOutlined, UndoOutlined, TagOutlined, FontSizeOutlined } from '@ant-design/icons'

const defaultCategories = ['Stationery', 'Electronics', 'Kitchen', 'Office Supplies', 'Furniture', 'Clothing']

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
    message.success(`Product "${values.name}" added successfully! Open Products to view it.`)
  }

  const handleReset = () => {
    form.resetFields()
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ quantity: 1 }}
      style={{ maxWidth: 540 }}
      autoComplete="off"
    >
      <Form.Item
        label="Product Name"
        name="name"
        rules={[
          { required: true, message: 'Please enter a product name' },
          { min: 2, message: 'Product name must be at least 2 characters' },
        ]}
      >
        <Input
          prefix={<FontSizeOutlined style={{ color: '#bfbfbf' }} />}
          placeholder="e.g. Wireless Mouse"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select or enter a category' }]}
      >
        <Select
          showSearch
          size="large"
          placeholder="Select or enter a category"
          prefix={<TagOutlined style={{ color: '#bfbfbf' }} />}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={defaultCategories.map((cat) => ({ value: cat, label: cat }))}
        />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          { required: true, message: 'Please enter product quantity' },
          { type: 'number', min: 0, message: 'Quantity cannot be negative' },
        ]}
      >
        <InputNumber
          min={0}
          size="large"
          placeholder="0"
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item style={{ marginTop: 24 }}>
        <Space orientation="horizontal" size="middle">
          <Button type="primary" htmlType="submit" size="large" icon={<PlusOutlined />}>
            Save Product
          </Button>
          <Button size="large" onClick={handleReset} icon={<UndoOutlined />}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
