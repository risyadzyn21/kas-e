import { useDispatch, useSelector } from "react-redux";
import { getLoginAsync } from "../../redux/actions";

import { Form, Input, Button } from "antd";
import Show from "../../assets/icons/show.png";
import Hide from "../../assets/icons/hide.png";
import { useHistory } from 'react-router-dom';
import Loading from '../loading/Loading';

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.userReducer)

  const { setPage } = props;

  const onFinish = (values) => {
    const cb = (token) => {
      history.push('/transactions')
      window.location.reload(false)
    }
    dispatch(getLoginAsync(values.email, values.password, cb))
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };


  return (
    <>
      {user.loading ? <Loading /> : ''}

      <Form
        // onSubmit={handleSubmit}
        name="login"
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
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
            size='large'
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
            size='large'
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
          <Button type="primary" htmlType="submit" block >
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
    </>
  );
};

export default LoginForm;
