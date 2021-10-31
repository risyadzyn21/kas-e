import { Form, Input, Button } from "antd";
import './EditSafeForm.scss'
import Safe from '../../assets/icons/brangkas.svg'

function EditSafeForm() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>

      <Form
        className='edit-safe-container'
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
        <div className='edit-safe-card'>
          <div className='edit-safe-card-title'>
            Edit Safe
            <img src={Safe} alt='Safe' />
          </div>
          <div className='edit-safe-content'>
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
              <Input
                placeholder="3.500.000"
                className="input-style"
                controls={false}
                prefix='Rp' type='number' min='0'
              />
            </Form.Item>
          </div>
        </div>

        <div className='safe-btn-wrapper'>
          <Form.Item >
            <Button className='save-safe-btn' htmlType="submit" block size='large'>
              Save
            </Button>
            <Button className='delete-safe-btn' block size='large'>
              Delete
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  )
}

export default EditSafeForm
