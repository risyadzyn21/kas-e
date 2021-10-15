import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'


const EditSafePage = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderTimeDaily />
          <Content style={{ padding: 40 }} >
            Ini edit safe page
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}

export default EditSafePage
