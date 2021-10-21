import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderSafePage from '../../components/header/HeaderSafePage';
import EditSafeForm from '../../components/forms/EditSafeForm'
import SafeLogo from '../../assets/icons/brangkas.png'
import './EditSafe.scss'

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

        <Layout className="main-layout">
          <HeaderSafePage />
          <Content className="container">
            <div>
              <div className='safe-edit'>
                <Card>
                  <img src={SafeLogo} className='safe-logo-edit' />
                  <EditSafeForm />
                </Card>
              </div>

              <div className="button-safe">
                <Button type="primary" onClick={() => form.submit()}>
                  Save
                </Button>
                <Button type="danger" onClick={() => form.submit()}>
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
