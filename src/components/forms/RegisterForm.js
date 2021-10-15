import { Form, Input, Button, Select, InputNumber } from "antd";
import { useState } from "react";
import Show from "../../assets/icons/show.png";
import Hide from "../../assets/icons/hide.png";

function RegisterForm(props) {
  const { setPage } = props;
  const { Option } = Select;
  const [stepForm] = Form.useForm();
  const [step, setStep] = useState(1);

  const onFinish = () => {
    const formData = stepForm.getFieldsValue([
      "email",
      "password",
      "confirm",
      "fullName",
      "gender",
      "age",
    ]);
    alert(JSON.stringify(formData, null, 2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const checkNext = () => {
    if (
      stepForm.getFieldValue("password") !== stepForm.getFieldValue("confirm")
    ) {
      return;
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Form
      form={stepForm}
      name="register"
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item>
        <h2>Register</h2>
        <p>Let’s create an account first before we start.</p>
      </Form.Item>
      {step === 1 ? (
        <>
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
                pattern: new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
                ),
                message:
                  "Your password need to be at least 8 characters, contain at least 1 uppercase and number",
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

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
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
              placeholder="Confirm your password"
            />
          </Form.Item>

          <Form.Item shouldUpdate>
            {({ getFieldsValue }) => {
              const { email, password, confirm } = getFieldsValue();
              const formIsComplete = !!email && !!password && !!confirm;
              return (
                <>
                  <Button
                    type="primary"
                    disabled={!formIsComplete}
                    onClick={() => checkNext()}
                    block
                  >
                    Create New Account
                  </Button>
                  <p className="button-text">
                    Already have an account?{" "}
                    <a
                      className="login-form-register"
                      href="/"
                      htmlType="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("login");
                      }}
                    >
                      Login here
                    </a>
                  </p>
                </>
              );
            }}
          </Form.Item>
        </>
      ) : step === 2 ? (
        <>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="age"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[0-9]+$/),
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber
              placeholder="Age"
              className="input-style"
              controls={false}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="danger"
              onClick={() => setStep(step - 1)}
              className="btn-step"
              block
            >
              Back
            </Button>
            <Button type="primary" htmlType="submit" block>
              Create New Account
            </Button>
            <p className="button-text">
              Already have an account?{" "}
              <a
                className="login-form-register"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Login here
              </a>
            </p>
          </Form.Item>
        </>
      ) : null}
    </Form>
  );
}

export default RegisterForm;
