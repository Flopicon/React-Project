import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

function RegisterForm({ onRegister }) {
  const onFinish = (values) => {
    onRegister(values)
  }

  return (
    <Form
      name="register"
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter a username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter a password!',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(
                new Error('Passwords do not match!')
              )
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirm password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
        >
          Create Account
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm