import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Select, Input, Button, message } from 'antd'
import NumberFormat from "react-number-format";
import FunAndRelax from '../../assets/icons/FunAndRelax.png'
import DetailExpense from '../../assets/icons/detail-expense.png'
import YourExpense from '../../assets/icons/your-expense.png'
import TakenFrom from '../../assets/icons/brangkas.svg'
import SelectIcon from '../../assets/icons/select.svg'
import './AddTransactionForm.scss'
import { getCategory, getSafe } from '../../services';
import { addTransactionAsync } from '../../redux/actions';
import Loading from '../loading/Loading';



function AddTransactionForm() {
  const [categories, setCategories] = useState([])
  const [safes, setSafes] = useState([])
  const dispatch = useDispatch()
  const transaction = useSelector(state => state.transactionReducer)
  const token = localStorage.getItem('token')

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategories(res?.data?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

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
    dispatch(addTransactionAsync(values.category_id, values.detailExpense, values.expense, values.safe_id))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>

      {transaction.loading ? <Loading /> : ''}

      <Form
        name='addTransaction'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          name='category_id'
          label="Category"
          className='category-wrapper'
        >
          <Select className='select-container' size='large' placeholder="Select" defaultValue='select'>
            <Select.Option value="select" className='transaction-modal-default'>
              <img src={SelectIcon} alt='Select' />
              Select
            </Select.Option>
            {categories?.map((category) => {
              return (
                <Select.Option key={category.category_id} value={category.category_id}  >
                  <div className='transaction-modal-select'>
                    <img src={category.Limit.image_url} alt={category.Limit.categoryName} />
                    <div style={{ flex: 1 }}>
                      <div className='transaction-category-title'>{category.Limit.categoryName}</div>
                      <div className='transaction-category-caption'>{category.Limit.caption}</div>
                      <div className='transaction-category-limit'>Limit: <NumberFormat
                        value={category.limit}
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="Rp"
                      />
                      </div>
                    </div>
                  </div>

                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name='detailExpense'
          label="Detail Expense"
          className='detail-expense-label'>
          {/* <p className='desc-label' >Explain to us in more detail, what are your expenses for?</p> */}
          <div className='input-wrapper' >
            <img src={DetailExpense} alt='Detail Expense' />
            <Input placeholder='Detail Expense' size='large' />
          </div>
        </Form.Item>

        <Form.Item
          name='expense'
          label="Your Expense"
          rules={[
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Please input your expense!",
            }
          ]}>
          <div className='input-wrapper' >
            <img src={YourExpense} alt='Your Expense' />
            <Input size='large' prefix='Rp' />
          </div>
        </Form.Item>

        <Form.Item
          name='safe_id'
          label="Taken From"
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

    </>
  )
}

export default AddTransactionForm
