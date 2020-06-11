import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { ProfileOutlined, MedicineBoxOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';

import UserProfileWeapon from './Weapon/Weapon';
import UserProfileMedical from './Medical/Medical';
import UserProfileProfile from './Profile/Profile';


const { Header, Content, Footer, Sider } = Layout;

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    }
  }

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  userLogout() {
    this.props.userLogout();
  }
  render() {
    console.log(this.props);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className="logo" style={{ height: 60 }} />
          <Button onClick={this.userLogout.bind(this)} type="primary" style={{ marginBottom: 16 }}>
            {React.createElement(LogoutOutlined)}
          </Button>
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
            <Switch>
              <Route exact path="/user-profile"
                render={() => <UserProfileProfile
                  fio={this.props.user.fio}
                  registerPlace={this.props.user.registerPlace}
                  passportSeries={this.props.user.passportSeries}
                  passportNumber={this.props.user.passportNumber}
                />}
              />
              <Route path="/user-profile/weapon"
                render={() => <UserProfileWeapon
                  weapon={this.props.user.weapon}
                />} />

              />
              <Route path="/user-profile/medical"
                render={() => <UserProfileMedical
                  medical={this.props.user.medical}
                />} />
            </Switch>
          </div>
        </Layout>
      </Layout>
    );
  }
}


export default UserProfile;