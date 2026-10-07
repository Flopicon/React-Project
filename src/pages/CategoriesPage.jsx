import { useEffect, useState } from 'react'
import {
  App,
  Button,
  Form,
  Input,
  Modal,
  Space,
  Table,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function CategoriesPage() {
  const API_URL = `${(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')}/category`
  const { message } = App.useApp()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm()

  const fetchCategories = async () => {
    setLoading(true)

    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }

      const result = await response.json()
      setCategories(Array.isArray(result) ? result : result.data || [])
    } catch (error) {
      console.error('Failed to load categories:', error)
      message.error('Failed to load categories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleCreateCategory = async (values) => {
    setSubmitting(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values.name.trim() }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Category create failed:', response.status, errorText)
        throw new Error('Category create request failed')
      }

      message.success('Category added successfully')
      setIsAddModalOpen(false)
      form.resetFields()
      fetchCategories()
    } catch (error) {
      console.error('Failed to add category:', error)
      message.error('Failed to add category')
    } finally {
      setSubmitting(false)
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Category Type',
      key: 'name',
      render: (_, record) => record.name || record.category_name || 'N/A',
    },
  ]

  return (
    <div style={{ padding: '24px', width: '100%', boxSizing: 'border-box' }}>
      <div className="page-heading-row">
        <h2 style={{ margin: 0 }}>Categories</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Category
        </Button>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={categories}
        loading={loading}
        pagination={{ pageSize: 10, showSizeChanger: true }}
      />

      <Modal
        title="Add Category"
        open={isAddModalOpen}
        onCancel={() => {
          setIsAddModalOpen(false)
          form.resetFields()
        }}
        footer={null}
        centered
        width={420}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateCategory}
          style={{ marginTop: 12 }}
        >
          <Form.Item
            label="Category Type"
            name="name"
            rules={[
              { required: true, message: 'Please enter a category type' },
              { min: 2, message: 'Category type must be at least 2 characters' },
            ]}
          >
            <Input placeholder="e.g. Toner" />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right', marginBottom: 0 }}>
            <Space>
              <Button onClick={() => form.resetFields()}>Reset</Button>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Save Category
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CategoriesPage
