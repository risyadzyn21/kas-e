import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderSafePage from '../../components/header/HeaderSafePage';


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
          <Content style={{ padding: 40 }} >
            Ini edit safe page
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}

export default EditSafePage
