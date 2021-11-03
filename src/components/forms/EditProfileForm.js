import { Form, Input, InputNumber, Select } from "antd";
import Show from "../../assets/icons/show.png";
import Hide from "../../assets/icons/hide.png";

function EditProfile({ form, onFinish, onFinishFailed, userData }) {
  const { Option } = Select;

  return (
    <Form
      form={form}
      layout="vertical"
      name="edit-profile"
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
      fields={[
        {
          name: ["fullName"],
          value: userData ? userData.fullName : null,
        },
        {
          name: ["email"],
          value: userData ? userData.User.email : null,
        },
        {
          name: ["gender"],
          value: userData ? userData.gender : null,
        },
        {
          name: ["age"],
          value: userData ? userData.age : null,
        },
      ]}
    >
      <Form.Item
        name="fullName"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input placeholder="Full Name" className="input-style" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
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
        <Input placeholder="Please enter your email" className="input-style" />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
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
        label="Age"
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
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
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
          placeholder="Please enter your new password"
        />
      </Form.Item>
    </Form>
  );
}

export default EditProfile;
