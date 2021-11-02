import { Form, Input, Button } from "antd";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './EditSafeForm.scss'
import Safe from '../../assets/icons/brangkas.svg'
import { deleteSafeAsync, updateSafeAsync } from '../../redux/actions';
import { getSafe, deleteSafe } from '../../services';

function EditSafeForm() {
  const [safes, setSafes] = useState([])

  const editSafe = useSelector(state => state.UpdateSafeReducer)
  const deleteSafes = useSelector(state => state.DeleteSafesReducer)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    getSafe(token)
      .then((res) => {
        setSafes(res?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(updateSafeAsync(values.safeName, values.amount))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handlerDelete = (id) => {
    // deleteSafe(id)
    // .then((res) =>{
      
      
    //   // console.log(res?.data)
    // })
    dispatch(deleteSafeAsync(id))
  }
  return (
    <>

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
              name="amount"
              label="amount"
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
