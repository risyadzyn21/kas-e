import { Form, Input, InputNumber, Select } from "antd";

function EditSafeForm({ form, onFinish, onFinishFailed }) {
  return (
    <>
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
      >
        <Form.Item
          name="safeName"
          label="Safe Name"
          rules={[
            {
              required: true,
              message: "Please input your safe name!",
            },
          ]}
        >
          <Input placeholder="Jalan-jalan" className="input-style" />
        </Form.Item>

        <Form.Item
          name="income"
          label="Income"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]+$/),
              message: "Please set your income!",
            },
          ]}
        >
          <InputNumber
            placeholder="IDR 3.500.000"
            className="input-style"
            controls={false}
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default EditSafeForm
