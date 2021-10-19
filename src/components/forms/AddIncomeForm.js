import { Form, Input, Button } from 'antd'
import Safe from '../../assets/icons/brangkas.png'
import PiggyBank from '../../assets/icons/piggy-bank.png'
import './AddTransactionForm.scss'

function AddIncomeForm() {
  return (
    <div>
      <Form layout='vertical'>

        <Form.Item label="Add Income" className='detail-expense-label'>
          <div className='input-wrapper' >
            <img src={PiggyBank} />
            <Input placeholder='IDR' size='large' />
          </div>
        </Form.Item>
        <Form.Item label="Add To">
          <div className='input-wrapper' >
            <img src={Safe} />
            <Input placeholder='Safe Name' size='large' />
          </div>
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
