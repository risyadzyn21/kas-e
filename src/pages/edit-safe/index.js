import { Button, Card, Layout, PageHeader, Form } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderSafePage from '../../components/header/HeaderSafePage';
import EditSafeForm from '../../components/forms/EditSafeForm'
import SafeLogo from '../../assets/icons/brangkas.svg'
import './EditSafe.scss'
import SafeCard from '../../components/cards/safe-card/SafeCard';

const EditSafePage = () => {
  const { Sider, Content } = Layout;

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

          <Content className="container-edit-safe-page">
            <EditSafeForm className='content-edit-safe-page' />
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}

export default EditSafePage
