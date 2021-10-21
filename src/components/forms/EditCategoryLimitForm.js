import './EditCategoryLimitForm.scss'
import { Form, Input, Button } from 'antd'
import FunnRelax from '../../assets/icons/FunAndRelax.png'

function EditCategoryLimitForm() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className='edit-category-container'>
        <div className='edit-category-card'>
          <div className='edit-title-category'>
            <img src={FunnRelax} />
            <h2>Fun and Relax</h2>
          </div>
          <div>
            <p>Your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
          </div>
          <Form
            className='edit-category-input'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
              name="nominal">
              <Input placeholder='Rp 200.000' />
            </Form.Item>

          </Form>
        </div>

        <div className='edit-category-card'>
          <div className='edit-title-category'>
            <img src={FunnRelax} />
            <h2>Bill and Payment</h2>
          </div>
          <div>
            <p>Your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
          </div>
          <Form
            className='edit-category-input'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
              name="nominal">
              <Input placeholder='Rp 200.000' />
            </Form.Item>

          </Form>
        </div>
        <div className='edit-category-card'>
          <div className='edit-title-category'>
            <img src={FunnRelax} />
            <h2>Daily Needs</h2>
          </div>
          <div>
            <p>Your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
          </div>
          <Form
            className='edit-category-input'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
              name="nominal">
              <Input placeholder='Rp 200.000' />
            </Form.Item>

          </Form>
        </div>

        <div className='edit-category-card'>
          <div className='edit-title-category'>
            <img src={FunnRelax} />
            <h2>Urgent Needs</h2>
          </div>
          <div>
            <p>Your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
          </div>
          <Form
            className='edit-category-input'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
              name="nominal">
              <Input placeholder='Rp 200.000' />
            </Form.Item>

          </Form>
        </div>
      </div>

    </>
  )
}

export default EditCategoryLimitForm
