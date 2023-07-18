import React from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginSuccess } from "../../stores/authSlide";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { clientID } from "../../env";
import { loginThunk } from "../../reduxThunk/authThunk";

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleAuthGoogle = (data) => {
    console.log(data);
    // dispatch(loginSuccess(data));
    message.success("Đăng Nhập Thành Công Với Google");
  };

  const onFinish = (values) => {
    console.log(values);
    dispatch(loginThunk(values));
  };
  return (
    <div className="login-container-form">
      <h1 className="text-center">Login</h1>
      <Form
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            size="large"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to={"/register"} className="login-form-forgot">
            Chưa Có Tài Khoản, Register?
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            danger
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Form>
    </div>
  );
}
