import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderSafePage from '../../components/header/HeaderSafePage';
import EditSafeForm from '../../components/forms/EditSafeForm'
import SafeLogo from '../../assets/icons/brangkas.svg'
import './EditSafe.scss'
import SafeCard from '../../components/cards/safe-card/SafeCard';

const EditSafePage = () => {
  const { Sider, Content } = Layout;

  const [form] = Form.useForm();

  const onFinish = () => {
    const formData = form.getFieldsValue([
      "safeName",
      "income",
    ]);
    alert(JSON.stringify(formData, null, 2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderSafePage />
          <div className='safe-title-wrapper'>
            <div className='safe-title'>
            </div>
            <SafeCard />
          </div>

          <Content className="container">
            <div className='safe-edit-container'>

              <Card className='safe-edit-card'>
                <img src={SafeLogo} className='safe-logo-edit' />
                <EditSafeForm className='edit-safe-form' />
              </Card>

              <div className="button-safe">
                <Button className='btn-save-safe' onClick={() => form.submit()}>
                  Save
                </Button>
                <Button className='btn-delete-safe' onClick={() => form.submit()}>
                  Delete
                </Button>

              </div>

            </div>

          </Content>
        </Layout>
      </Layout>

    </div>
  )
}

export default EditSafePage
