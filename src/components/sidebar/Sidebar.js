import { useState } from "react";
import "./Sidebar.scss";
import { Dropdown, Menu, Radio } from "antd";
import { Link } from "react-router-dom";

import UserAvatar from '../avatar/UserAvatar.js'
import AddTransactionModal from '../modals/AddTransactionModal';
import AddIncomeModal from '../modals/AddIncomeModal';
import LogoutBtn from '../../assets/icons/logout-btn.png'
import * as BiIcons from 'react-icons/bi'
import * as FiIcons from 'react-icons/fi'
import * as CgIcons from 'react-icons/cg'

const Sidebar = () => {
  const [value, setValue] = useState(1);
  const { SubMenu } = Menu;

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const menu = (
    <Menu className='corner-dropdown-content'>
      <Menu.Item key="0">
        <Link to='/my-profile' className='myprofile-side'>
          <CgIcons.CgProfile className='icon-profile-side' />
          My Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/' onClick={() => localStorage.clear()} className='logout-btn-side'>
          {/* <img src={LogoutBtn} className='icon-logout' /> */}
          <BiIcons.BiLogOut className='icon-logout' />
          Logout
        </Link>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );

  return (
    <div>
      <div>
        <UserAvatar />
      </div>

      <div className="side-modal">
        <AddTransactionModal />
        <AddIncomeModal />
      </div>

      <Menu mode="inline">
        <Menu.Item key="1">
          <Link to="/transactions">Transactions</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/report">Report</Link>
        </Menu.Item>

        <SubMenu key="sub1" title="Time Range">
          <Radio.Group
            className="radio-group"
            onChange={onChange}
            value={value}
          >
            <Radio value={1}>Daily</Radio>
            <Radio value={2}>Monthly</Radio>
          </Radio.Group>
        </SubMenu>

        <SubMenu key="sub2" className="edit-group" title="Edit">
          <Menu.Item key="3">
            <Link to="/edit-safe">Edit Safe</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/edit-category-limit'>
              Edit Category Limit
            </Link>
          </Menu.Item>
        </SubMenu>

      </Menu>

      <Dropdown overlay={menu} trigger={['click']} className='corner-dropdown' >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <FiIcons.FiMoreVertical />
        </a>
      </Dropdown>,


    </div>
  );
};

export default Sidebar;
