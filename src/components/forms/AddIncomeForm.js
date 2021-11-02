import { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import Safe from '../../assets/icons/brangkas.png'
import PiggyBank from '../../assets/icons/piggy-bank.png'
import { getSafe } from '../../services';
import TakenFrom from '../../assets/icons/brangkas.svg'
import SelectIcon from '../../assets/icons/select.svg'
import { addIncomeAsync } from '../../redux/actions';
import './AddTransactionForm.scss'
import Loading from '../loading/Loading';

function AddIncomeForm() {
  const [safes, setSafes] = useState([])
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const income = useSelector(state => state.incomeReducer)

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
    dispatch(addIncomeAsync(values.safe_id, values.expense))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {income.loading ? <Loading /> : ''}
      <Form
        name='addIncome'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>

        <Form.Item
          name='expense'
          label="Enter Your Income"
          rules={[
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Please input your expense!",
            }
          ]}>
          <div className='input-wrapper' >
            <img src={PiggyBank} alt='Expense' />
            <Input size='large' prefix='Rp' type='number' min='0' />
          </div>
        </Form.Item>

        <Form.Item
          name='safe_id'
          label="Add To"
        >
          <Select className='select-container' size='large' placeholder="Select" defaultValue='select' >
            <Select.Option value="select" className='transaction-modal-default'>
              <img src={SelectIcon} alt='Select' />
              Select
            </Select.Option>
            {safes?.map((safe) => {
              return (
                <Select.Option key={safe.id} value={safe.id}  >
                  <div className='transaction-modal-safe'>
                    <img src={TakenFrom} alt={safe.safeName} />
                    <div className='transaction-safe-title'>{safe.safeName}</div>
                  </div>
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>

        <Form.Item >
          <Button className='button-submit' htmlType="submit" block size='large'>
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddIncomeForm
