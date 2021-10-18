import { useState } from 'react'
import { useDispatch } from "react-redux";
import { getLoginAsync } from "../../redux/actions";

import { Form, Input, Button } from "antd";
import Show from "../../assets/icons/show.png";
import Hide from "../../assets/icons/hide.png";
import { Link, useHistory } from 'react-router-dom';

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await dispatch(getLoginAsync(email, password))
  //   console.log(response, "signIn")
  // }


  const { setPage } = props;

  const onFinish = (values) => {
    console.log(JSON.stringify(values, null, 2));
    const cb = (token) => {
      history.push('/transactions')
    }
    dispatch(getLoginAsync(values.email, values.password, cb))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      // onSubmit={handleSubmit}
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
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
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
        <Input placeholder="Please enter your email"

        />
      </Form.Item>

      <Form.Item
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
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
          {/* <Link to='/transactions'> */}
          Login
          {/* </Link> */}
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
