import { Form, Input, Button } from "antd";
import Show from "../../assets/icons/show.png";
import Hide from "../../assets/icons/hide.png";

const LoginForm = (props) => {
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
        <p>Let’s enter your E-mail and your Password to Sign In</p>
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

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? (
              <img src={Show} alt="Show" />
            ) : (
              <img src={Hide} alt="Hide" />
            )
          }
          placeholder="Please enter your password"
        />
      </Form.Item>

      <Form.Item>
        <a
          className="login-form-forgot"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage("forgot");
          }}
        >
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <p className="button-text">
          Don't have an account yet?{" "}
          <a
            className="login-form-register"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage("register");
            }}
          >
            Register here
          </a>
        </p>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
