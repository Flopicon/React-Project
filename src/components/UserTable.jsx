import { useEffect, useState } from 'react'
import {
  Table,
  App,
  Space,
  Modal,
  Typography,
  Form,
  Input,
  Select,
  Button,
  Popconfirm,
  Descriptions,
  Tag,
} from 'antd'

const { Link } = Typography

function UserTable() {
  const API_URL = 'http://127.0.0.1:8000/api/users'
  const { message } = App.useApp()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [editingUser, setEditingUser] = useState(null)
  const [form] = Form.useForm()
  const [updating, setUpdating] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
  })

  const handleView = (user) => {
    setSelectedUser(user)
  }

  const handleUpdate = (user) => {
    setEditingUser(user)

    form.setFieldsValue({
      name: user.name || '',
      email: user.email || '',
      role: user.role || '',
    })
  }

  const handleDelete = async (user) => {
    try {
      const response = await fetch(`${API_URL}/${user.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Delete request failed')
      }

      setData((previousUsers) =>
        previousUsers.filter((previousUser) => previousUser.id !== user.id)
      )

      setPagination((previous) => ({
        ...previous,
        total: Math.max(previous.total - 1, 0),
      }))

      message.success(`${user.name} was deleted`)
    } catch (error) {
      console.error('Failed to delete user:', error)
      message.error('Failed to delete user')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Link onClick={() => handleView(record)}>View</Link>
          <Link onClick={() => handleUpdate(record)}>Update</Link>
          <Popconfirm
            title="Delete this user?"
            description={`Are you sure you want to delete ${record.name}?`}
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

  const fetchUsers = async (page = 1, pageSize = 10, sorter = {}) => {
    setLoading(true)

    try {
      const skip = (page - 1) * pageSize
      const sortField = sorter.field || ''
      const sortOrder =
        sorter.order === 'ascend'
          ? 'asc'
          : sorter.order === 'descend'
            ? 'desc'
            : ''

      const params = new URLSearchParams({
        perpage: String(pageSize),
      })

      if (sorter.field) {
        params.set('sortBy', sorter.field)
        params.set(
          'sortDir',
          sorter.order === 'ascend' ? 'asc' : 'desc'
        )
      }

      const response = await fetch(`${API_URL}?${params}`)
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      const result = await response.json()

      // Use this if the API returns an array.
      const users = Array.isArray(result)
        ? result
        : result.data || result.users || []

      setData(users)

      setPagination((previous) => ({
        ...previous,
        current: page,
        pageSize,
        total: result.total || result.meta?.total || users.length,
      }))
    } catch (error) {
      console.error('Failed to fetch users:', error)
      message.error('Failed to load user data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(pagination.current, pagination.pageSize)
  }, [])

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchUsers(newPagination.current, newPagination.pageSize, sorter)
  }

  const handleUpdateSubmit = async (values) => {
    setUpdating(true)

    try {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('role', values.role)

      const response = await fetch(`${API_URL}/${editingUser.id}`, {
        method: 'PUT',
        body: formData,
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Update failed:', response.status, errorText)
        throw new Error('Update request failed')
      }

      const updatedUser = await response.json()

      setData((previousUsers) =>
        previousUsers.map((user) =>
          user.id === updatedUser.id
            ? { ...user, ...updatedUser }
            : user
        )
      )

      message.success('User updated successfully')
      setEditingUser(null)
      form.resetFields()
    } catch (error) {
      console.error('Failed to update user:', error)
      message.error('Failed to update user')
    } finally {
      setUpdating(false)
    }
  }

  return (
    <>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />

      <Modal
        title="User Details"
        open={selectedUser !== null}
        onCancel={() => setSelectedUser(null)}
        footer={null}
        centered
        width={520}
      >
        {selectedUser && (
          <Descriptions
            bordered
            column={1}
            size="middle"
            labelStyle={{
              width: '120px',
              fontWeight: 600,
              background: '#fafafa',
            }}
            contentStyle={{
              fontWeight: 500,
            }}
          >
            <Descriptions.Item label="ID">
              {selectedUser.id}
            </Descriptions.Item>

            <Descriptions.Item label="Name">
              {selectedUser.name || 'N/A'}
            </Descriptions.Item>

            <Descriptions.Item label="Email">
              {selectedUser.email || 'N/A'}
            </Descriptions.Item>

            <Descriptions.Item label="Role">
              <Tag color={selectedUser.role === 'admin' ? 'red' : 'blue'}>
                {selectedUser.role || 'N/A'}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>

      <Modal
        title="Update User"
        open={editingUser !== null}
        onCancel={() => {
          setEditingUser(null)
          form.resetFields()
        }}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateSubmit}
        >

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter the email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select a role' }]}
          >
            <Select
              options={[
                { value: 'user', label: 'User' },
                { value: 'admin', label: 'Admin' },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={updating}
              >
                Update user
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UserTable

