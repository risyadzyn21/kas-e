import { Layout } from 'antd';
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'
import EmptyPage from '../../components/empty-page/EmptyPage';
import SeeCard from '../../components/cards/card-see-all/SeeCard'
import SafeCard from '../../components/cards/safe-card/SafeCard';
import Main from '../../components/modals/create-modal/Main';
import TransactionCard from '../../components/cards/transaction-card/TransactionCard';

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
          <div className='page-title-wrapper'>
            <div className='page-title'>
              Transactions
            </div>
            <SafeCard />
          </div>
          <Content>
            <TransactionCard />
            {/* <Card /> */}
            {/* <EmptyPage /> */}
            <Main />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
