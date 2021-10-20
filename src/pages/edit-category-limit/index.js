import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderCategoryLimit from '../../components/header/HeaderCategoryLimit';


function EditCategoryLimit() {
  const { Sider, Content } = Layout;

  const [form] = Form.useForm();


  return (
    <>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderCategoryLimit />
          <Content style={{ padding: 40 }} >
            Ini Category Limit
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default EditCategoryLimit
