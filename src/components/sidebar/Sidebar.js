import { useState } from 'react';
import './Sidebar.scss'
import { Layout, Menu, Radio, Space } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import UserAvatar from '../avatar/UserAvatar.js'



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
      <Layout className='sidebar-wrap'>
        <Sider className='sidebar'>
          <div className="sidebar-avatar"> <UserAvatar /> </div>
          <Menu mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              Transactions
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Report
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Time Range">
              <Radio.Group className='radio-group' onChange={onChange} value={value}>
                <Radio value={1}>Daily</Radio>
                <Radio value={2}>Monthly</Radio>
              </Radio.Group>
            </SubMenu>

            <SubMenu key="sub2" className='sub2' icon={<UserOutlined />} title="Edit">
              <Menu.Item key="3">Edit Safe</Menu.Item>
              <Menu.Item key="4">Edit Category Limit</Menu.Item>
            </SubMenu>

            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              My Profile
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>

    </div>
  )
}



export default Sidebar


