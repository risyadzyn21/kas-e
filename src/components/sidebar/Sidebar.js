import { useState } from 'react';
import './Sidebar.scss'
import { Layout, Menu, Radio, Space } from 'antd';


import UserAvatar from '../avatar/UserAvatar.js'
import AddTransactionModal from '../modals/AddTransactionModal';
import AddIncomeModal from '../modals/AddIncomeModal';



const Sidebar = () => {
  const [value, setValue] = useState(1);
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Layout>
        <Sider>

          <div>
            <UserAvatar />
          </div>

          <div className='side-modal'>
            <AddTransactionModal />
            <AddIncomeModal />
          </div>

          <Menu mode="inline">
            <Menu.Item key="1" >
              Transactions
            </Menu.Item>
            <Menu.Item key="2" >
              Report
            </Menu.Item>

            <SubMenu key="sub1" title="Time Range">
              <Radio.Group className='radio-group' onChange={onChange} value={value}>
                <Radio value={1}>Daily</Radio>
                <Radio value={2}>Monthly</Radio>
              </Radio.Group>
            </SubMenu>

            <SubMenu key="sub2" className='edit-group' title="Edit">
              <Menu.Item key="3">Edit Safe</Menu.Item>
              <Menu.Item key="4">Edit Category Limit</Menu.Item>
            </SubMenu>

            <Menu.Item key="5" >
              My Profile
            </Menu.Item>
          </Menu>

          <div className='logout-btn-side'>
            <div>Logout</div>
          </div>
        </Sider>
      </Layout>

    </div>
  )
}

export default Sidebar