import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { ProfileOutlined, MedicineBoxOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';

import AdminProfileProfile from './Profile/Profile';
import AdminProfileAll from './All/All';
import AdminProfileNew from './New/New';




const { Header, Content, Footer, Sider } = Layout;

class AdminProfile extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    }
  }

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  adminLogout = () => {

    this.props.adminLogout();
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className="logo" style={{ height: 60 }} />
          <Button onClick={this.adminLogout.bind(this)} type="primary" style={{ marginBottom: 16 }}>
            {React.createElement(LogoutOutlined)}
          </Button>
          <Menu theme="dark" defaultSelectedKeys={['admin-profile']} mode="inline">
            <Menu.Item key="admin-profile">
              <ProfileOutlined />
              <NavLink to='/admin-profile'> <span>Профиль</span></NavLink>
            </Menu.Item>
            <Menu.Item key="all-users">
              <ProfileOutlined />
              <NavLink to='/admin-profile/all-users'> <span>Список всех пользователей</span></NavLink>
            </Menu.Item>
            <Menu.Item key="new-user">
              <ProfileOutlined />
              <NavLink to='/admin-profile/new-user'> <span>Регистрация нового пользователя</span></NavLink>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: 'white' }} />
          <div className="main">
            <Switch>
              <Route exact path="/admin-profile"
                render={() => <AdminProfileProfile profile={this.props.admin} />} />
              <Route path="/admin-profile/all-users"
                render={() => <AdminProfileAll
                  loading={this.props.loading}
                  data={this.props.data}
                  pagination={this.props.pagination}
                  limit={this.props.limit}
                  tableChange={this.props.tableChange}
                  drawer={this.props.drawer}
                  //openDrawer={this.props.openDrawer}
                  closeDrawer={this.props.closeDrawer}
                  adminFetchUserById={this.props.adminFetchUserById}
                  currentUser={this.props.currentUser}
                  adminDeleteUserById={this.props.adminDeleteUserById}
                />} />
              <Route path="/admin-profile/new-user"
                render={() => <AdminProfileNew adminAddNewUser={this.props.adminAddNewUser}
                  successVisible={this.props.successVisible}
                  closePopover={this.props.closePopover}
                />} />
            </Switch>
          </div>
        </Layout>
      </Layout>
    );
  }
}


export default AdminProfile;