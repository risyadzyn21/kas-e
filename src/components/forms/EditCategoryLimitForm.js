import './EditCategoryLimitForm.scss'
import { Form, Input, Button } from 'antd'
import FunnRelax from '../../assets/icons/FunAndRelax.svg'

function EditCategoryLimitForm() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>

    </>
  )
}

export default EditCategoryLimitForm
