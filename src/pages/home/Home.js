import { Layout } from 'antd';
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'
import EmptyPage from '../../components/empty-page/EmptyPage';

const Home = () => {
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
            <div className='page-title'>Transactions</div>
            <EmptyPage />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
