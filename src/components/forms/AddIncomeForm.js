import { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import Safe from '../../assets/icons/brangkas.png'
import PiggyBank from '../../assets/icons/piggy-bank.png'
import TakenFrom from '../../assets/icons/brangkas.svg'
import SelectIcon from '../../assets/icons/select.svg'
import { addIncomeAsync, getSafesAsc2 } from '../../redux/actions';
import './AddTransactionForm.scss'
import Loading from '../loading/Loading';
import { isThisMonth } from 'date-fns'


function AddIncomeForm({ handleOk }) {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.GetTransactionReducer)

  const safes = useSelector(
    (state) => state.GetSafeReducer.safes.map(safe => ({ ...safe, createdAt: new Date(safe.createdAt) }))
      .filter(safe => isThisMonth(safe.createdAt))
  );

  useEffect(() => {
    dispatch(getSafesAsc2(token))
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(addIncomeAsync(values.safe_id, values.expense))
      .then(res => handleOk())
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {isLoading ? <Loading /> : ''}
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
