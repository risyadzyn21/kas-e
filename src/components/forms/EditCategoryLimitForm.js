import { useState, useEffect } from "react";
import { Form, Input, Select, Button, Tooltip } from "antd";
import { getCategory } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import SelectIcon from '../../assets/icons/select.svg'
import FunNRelax from '../../assets/icons/FunAndRelax.svg'
import BillNPayment from '../../assets/icons/bill-payment.svg'
import DailyNeeds from '../../assets/icons/daily-need.svg'
import UrgentNeeds from '../../assets/icons/urgent-need.svg'
import NumberFormat from "react-number-format";
import './EditCategoryLimitForm.scss'
import { editCategoryLimitAsync } from "../../redux/actions";
import Loading from "../loading/Loading";

function EditCategoryLimit() {
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const limit = useSelector(state => state.editCategoryLimitReducer)

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategories(res?.data?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(editCategoryLimitAsync(values.category_id, values.limit))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {limit.loading ? <Loading /> : ''}
      <Form
        className='edit-category-container'
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
        <div className='edit-category-card'>
          <div className='edit-category-card-title'>
            Edit Category Limit
            <div className='category-icon-container'>
              <Tooltip placement="bottomLeft" title='Fun And Relax'>
                <img src={FunNRelax} alt='Fun And Relax' />
              </Tooltip>
              <Tooltip placement="bottomLeft" title='Bill And Payment'>
                <img src={BillNPayment} alt='Bill And Payment' />
              </Tooltip>
              <Tooltip placement="bottomLeft" title='Daily Needs'>
                <img src={DailyNeeds} alt='Daily Needs' />
              </Tooltip>
              <Tooltip placement="bottomLeft" title='Urgent Needs'>
                <img src={UrgentNeeds} alt='Urgent Needs' />
              </Tooltip>
            </div>
          </div>
          <div className='edit-category-content'>
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
                      <div className='edit-category-select'>
                        <img src={category.Limit.image_url} alt={category.Limit.categoryName} />
                        <div style={{ flex: 1 }}>
                          <div className='edit-category-title'>{category.Limit.categoryName}</div>
                          <div className='edit-category-caption'>{category.Limit.caption}</div>
                          <div className='edit-category-limit'>Current Limit: <NumberFormat
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
              name="limit"
              label="New Limit"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^[0-9]+$/),
                  message: "Please set your new limit!",
                },
              ]}
            >
              <Input size='large' prefix='Rp' type='number' min='0' />
            </Form.Item>
          </div>
        </div>

        <div className='save-category-btn-wrapper'>
          <Form.Item >
            <Button className='save-category-btn' htmlType="submit" block size='large'>
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  )
}

export default EditCategoryLimit
