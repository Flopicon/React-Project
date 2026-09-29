import React, { useState } from 'react'
import { Button, Modal, message } from 'antd'
import LoginForm from '../components/LoginForm.jsx'
import RegisterForm from '../components/RegisterForm.jsx'

function LoginPage({ onLogin }) {
  const [loginOpen, setLoginOpen] = useState(true)
  const [registerOpen, setRegisterOpen] = useState(false)

  function handleLogin(values) {
    const users =
      JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(
      (item) =>
        item.username === values.username &&
        item.password === values.password
    )

    if (!user) {
      message.error('Invalid username or password')
      return
    }

    message.success(`Welcome back, ${user.username}!`)

    setLoginOpen(false)

    onLogin(user)
  }

  function handleRegister(values) {
    const users =
      JSON.parse(localStorage.getItem('users')) || []

    const existingUser = users.find(
      (item) => item.username === values.username
    )

    if (existingUser) {
      message.error('Username already exists')
      return
    }

    const newUser = {
      username: values.username,
      password: values.password,
      role: 'customer',
    }

    users.push(newUser)

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    )

    message.success('Account created successfully!')

    setRegisterOpen(false)
    setLoginOpen(true)
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Point of Sale</h2>

        <p className="login-welcome">
          Welcome back! Please sign in.
        </p>

        <Button
          type="primary"
          block
          onClick={() => setLoginOpen(true)}
        >
          Log in
        </Button>

        <p className="create-account-text">
          Don't have an account?
        </p>

        <Button
          block
          onClick={() => setRegisterOpen(true)}
        >
          Create an account
        </Button>

      </div>

      {/* LOGIN MODAL */}

      <Modal
        title="Log in"
        open={loginOpen}
        footer={null}
        onCancel={() => setLoginOpen(false)}
      >
        <LoginForm onLogin={handleLogin} />

        <div style={{ textAlign: 'center' }}>
          Don't have an account?{' '}

          <Button
            type="link"
            onClick={() => {
              setLoginOpen(false)
              setRegisterOpen(true)
            }}
          >
            Create an account
          </Button>
        </div>
      </Modal>

      {/* REGISTER MODAL */}

      <Modal
        title="Create an account"
        open={registerOpen}
        footer={null}
        onCancel={() => setRegisterOpen(false)}
      >
        <RegisterForm onRegister={handleRegister} />

        <div style={{ textAlign: 'center' }}>
          Already have an account?{' '}

          <Button
            type="link"
            onClick={() => {
              setRegisterOpen(false)
              setLoginOpen(true)
            }}
          >
            Log in
          </Button>
        </div>
      </Modal>

    </div>
  )
}

export default LoginPage