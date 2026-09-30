import { useState } from "react";
import { Modal } from "antd";
import LoginForm from "../components/LoginForm.jsx";
import loginBg from "../assets/login.png";

function LoginPage({ onLogin }) {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  return (
    <div
      className="login-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Modal
        title="Log in"
        open={isLoginOpen}
        onCancel={() => setIsLoginOpen(false)}
        footer={null}
        centered
        mask={false}
      >
        <LoginForm onLogin={onLogin} />
      </Modal>
    </div>
  );
}

export default LoginPage;
