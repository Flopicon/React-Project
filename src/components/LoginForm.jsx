import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Flex, Form, Input, message } from 'antd'

function LoginForm({ onLogin }) {

  const onFinish = (values) => {

    // ADMIN LOGIN
    if (
      values.username === 'admin' &&
      values.password === '123456'
    ) {
      onLogin({
        username: values.username,
        role: 'admin',
      })

      return
    }

    // CUSTOMER LOGIN
    if (
      values.username === 'customer' &&
      values.password === '123456'
    ) {
      onLogin({
        username: values.username,
        role: 'customer',
      })

      return
    }

    // WRONG LOGIN
    message.error('Invalid username or password')
  }

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >

      {/* USERNAME */}

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>


      {/* PASSWORD */}

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      {/* REMEMBER + FORGOT */}

      <Form.Item>
        <Flex
          justify="space-between"
          align="center"
        >
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>
              Remember me
            </Checkbox>
          </Form.Item>

          <a href="#forgot-password">
            Forgot password?
          </a>
        </Flex>
      </Form.Item>


      {/* LOGIN BUTTON */}

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
        >
          Log in
        </Button>
      </Form.Item>

    </Form>
  )
}

export default LoginForm