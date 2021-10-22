import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderCategoryLimit from '../../components/header/HeaderCategoryLimit';
import EditCategoryLimitForm from '../../components/forms/EditCategoryLimitForm';


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
            <EditCategoryLimitForm />
            <div className="button-safe">
              <Button type="primary" onClick={() => form.submit()}>
                Save
              </Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default EditCategoryLimit
