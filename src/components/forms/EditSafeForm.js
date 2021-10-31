import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { updateSafe, getSafe } from "../../services/index";
import { setUpdateSafe } from "../../redux/actions/CreateSafeAction";
import { useDispatch, useSelector } from "react-redux";
import { updateSafeAsync } from "../../redux/actions";
import Loading from '../loading/Loading';

function EditSafeForm() {
 
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()
  const updateSafeAcc = useSelector(state => state.updateSafeReducer )
  const [ status, setStatus] = useState('')
  const [safes, setSafes] = useState([])
  const [ editSafe, seteditSafe] = useState([])
  const [form] = Form.useForm()


  const handleSubmit = (values) => {
    const data = form.setFieldsValue ([
      "safeName",
      "amount"
    ]);
    // console.log(JSON.stringify(data, values));
    console.log(data, values)
      updateSafe()
      .then((res) => {
        seteditSafe(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
     dispatch(updateSafeAsync(values.data.safeName, values.data.amount)) 
  }
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    getSafe()
      .then((res) => {
        setSafes(res?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])  
  return (
    <>
    {/* {updateSafeACc.loading ? <Loading /> : ''} */}
      <Form
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
        name="edit-profile"
        wrapperCol={{
          span: 24,
        }}
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
          <Input
            placeholder="Name"
            className="input-style"
          />
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
            placeholder="IDR"
            className="input-style"
            controls={false}
          />
        </Form.Item>
      </Form>
    </>
  );
}

export default EditSafeForm;
