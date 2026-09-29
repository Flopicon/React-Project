import { useState } from 'react'
import { Modal } from 'antd'
import LoginForm from '../components/LoginForm.jsx'
import loginBg from '/src/assets/login-bg.png'
function LoginPage({ onLogin }) {
  const [isLoginOpen, setIsLoginOpen] = useState(true)

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <Modal
        title="Log in"
        open={isLoginOpen}
        onCancel={() => setIsLoginOpen(false)}
        footer={null}
        centered
        mask={{ enabled: false }}
      >
        <LoginForm onLogin={onLogin} />
      </Modal>
    </div>
  )
}

export default LoginPage