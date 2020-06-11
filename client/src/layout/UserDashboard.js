import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ProfileOutlined, MedicineBoxOutlined, InfoCircleOutlined } from '@ant-design/icons';
import UserProfile from '../components/UserProfile/UserProfile';

const { Header, Content, Footer, Sider } = Layout;

class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    }
  }

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className="logo" style={{ height: 60 }} />
          <Menu theme="dark" defaultSelectedKeys={['user-profile']} mode="inline">
            <Menu.Item key="user-profile">
              <ProfileOutlined />
              <NavLink to='/user-profile'> <span>Профиль</span></NavLink>
            </Menu.Item>
            <Menu.Item key="weapon">
              <InfoCircleOutlined />
              <NavLink to='/user-profile/weapon'> <span>Информация об оружии</span></NavLink>
            </Menu.Item>
            <Menu.Item key="medical">
              <MedicineBoxOutlined />
              <NavLink to='/user-profile/medical'> <span>Мед справка</span></NavLink>
            </Menu.Item>


          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: 'white' }} />
          <div className="main">
            {this.props.children}
          </div>
        </Layout>
      </Layout>
    );
  }
}


export default UserDashboard;

