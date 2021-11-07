import { Form, Input, Button } from "antd";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './EditSafeForm.scss'
import Safe from '../../assets/icons/brangkas.svg'
import { deleteSafeIdAsync, updateSafeAsync } from '../../redux/actions';
import Loading from '../loading/Loading';


function EditSafeForm() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const { activeSafe } = useSelector((state) => state.SafesReducer);


  const onFinish = (values) => {
    dispatch(updateSafeAsync(values.safeName, values.amount))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handlerDelete = (e) => {
    dispatch(deleteSafeIdAsync(activeSafe?.id))
  }

  return (
    <>
      {/* {safesReducer.loading ? <Loading /> : ''} */}
      {/* {safesReducer.loading ? <Loading /> : ''}  */}

      <Form
        onFinish={onFinish}
        className='edit-safe-container'
        layout="vertical"
        name="edit-profile"
        wrapperCol={{
          span: 24,
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        fields={[
          {
            name: ["safeName"],
            value: activeSafe?.safeName
          },
          {
            name: ["amount"],
            value: activeSafe?.amount
          }
        ]}
      >
        <div className='edit-safe-card'>
          <div className='edit-safe-card-title'>
            Edit Safe
            <img src={Safe} alt='Safe' />
          </div>
          {/*           
          <h1>{currentSafe.safeName}</h1> */}
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
              name="amount"
              label="Amount"
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
            <Button onClick={handlerDelete} className='delete-safe-btn' block size='large'>
              Delete
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}

export default EditSafeForm;
