import React from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { clientID } from "../../env";
import { registerThunk } from "../../reduxThunk/authThunk";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await dispatch(registerThunk(values));
    navigate("/login");
  };
  return (
    <div className="login-container-form">
      <h1 className="text-center">Register</h1>
      <Form
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your Fullname!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
            placeholder="Fullname"
          />
        </Form.Item>

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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            size="large"
            placeholder="Email"
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

        <Form.Item
          name="verifyPassword"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            size="large"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Link to={"/register"} className="login-form-forgot">
            Đã Có Tài Khoản, Register?
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            danger
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
