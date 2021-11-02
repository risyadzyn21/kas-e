import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderCategoryLimit from '../../components/header/HeaderCategoryLimit';
import EditCategoryLimitForm from '../../components/forms/EditCategoryLimitForm';


function EditCategoryLimit() {
  const { Sider, Content } = Layout;

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
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default EditCategoryLimit
