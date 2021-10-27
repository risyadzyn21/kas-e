import { useState, useEffect } from 'react';
import { Form, Select, Input, Button } from 'antd'
import FunAndRelax from '../../assets/icons/FunAndRelax.png'
import DetailExpense from '../../assets/icons/detail-expense.png'
import YourExpense from '../../assets/icons/your-expense.png'
import TakenFrom from '../../assets/icons/brangkas.png'
import './AddTransactionForm.scss'
import { getCategory, getSafe } from '../../services';



function AddTransactionForm() {
  const [categories, setCategories] = useState([])
  const [safes, setSafes] = useState([])

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
      <Form layout='vertical'>
        <Form.Item label="Category" className='category-wrapper'>
          {/* <img src={DetailExpense} /> */}
          <Select className='select-container' size='large' placeholder="Select" >
            {categories?.map((category) => {
              return (
                <Select.Option key={category.id} value={category.Limit.categoryName}  >
                  <div className='transaction-modal-select'>
                    <img src={category.Limit.image_url} />
                    <div>
                      <div>{category.Limit.categoryName}</div>
                      <div>{category.Limit.caption}</div>
                      <div>Limit: {category.limit}</div>
                    </div>
                  </div>

                </Select.Option>
              )
            })}
          </Select>
          {/* <Select.Option value="funnrelax" ><img src={FunAndRelax} /> Fun and Relax
              <p>This category is for your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
              <p>Limit : Rp. 200.000</p>
            </Select.Option>
            <Select.Option value="billnpayment" ><img src={FunAndRelax} /> Bill and Payment
              <p>This category is for things like rent bills, insurance, payments for electricity, water, gas and other arrears</p>
              <p>Limit : Rp. 500.000</p>
            </Select.Option>
            <Select.Option value="dailyneeds" ><img src={FunAndRelax} /> Daily needs
              <p>This category is for your daily needs, such as toiletries, household and others</p>
              <p>Limit : Rp. 300.000</p>
            </Select.Option>
            <Select.Option value="urgentneed" ><img src={FunAndRelax} /> Urgent need
              <p>This category is intended for funds in case of an emergency</p>
              <p>Limit : Rp. 500.000</p>
            </Select.Option> */}

        </Form.Item>
        <Form.Item label="Detail Expense" className='detail-expense-label'>
          <p className='desc-label' >Explain to us in more detail, what are your expenses for?</p>
          <div className='input-wrapper' >
            <img src={DetailExpense} />
            <Input placeholder='Detail Expense' size='large' />
          </div>
        </Form.Item>
        <Form.Item label="Your Expense">
          <div className='input-wrapper' >
            <img src={YourExpense} />
            <Input placeholder='IDR' size='large' />
          </div>
        </Form.Item>
        <Form.Item label="Taken From">
          <Select className='select-container' size='large' placeholder="Select" >
            {safes?.map((safe) => {
              return (
                <Select.Option key={safe.id} value={safe.safeName}  >
                  <div className='transaction-modal-select'>
                    <div>{safe.safeName}</div>
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
