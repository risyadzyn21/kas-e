import { Form, Input, Button } from "antd";

import React from "react";

function ForgotPassForm(props) {
  const { setPage } = props;
  const onFinish = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item>
        <h2>Welcome Back!</h2>
        <p>
          Seems like you forgot your password, enter your E-mail and reset your
          password!
        </p>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not a valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Please enter your email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
        <p className="button-text">
          You don't forget your password?{" "}
          <a
            className="login-form-register"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage("login");
            }}
          >
            Sign In here.
          </a>
        </p>
      </Form.Item>
    </Form>
  );
}

export default ForgotPassForm;
