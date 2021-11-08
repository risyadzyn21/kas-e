import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'
import Card from '../../components/cards/Card';

const Profile = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderTimeDaily />
          <Content style={{ padding: 40 }} >
            <h2 className='page-title'>My Profile</h2>
            <Card />
          </Content>
        </Layout>
      </Layout>

    </>
  )
}

export default Profile

