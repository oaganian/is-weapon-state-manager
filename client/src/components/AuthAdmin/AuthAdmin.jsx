import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import AppLayout from '../../layout/AppLayout';
import AuthAdminAdminLoginForm from './AdminLoginForm/AdminLoginForm';


const AuthAdmin = (props) => {
  return (
    <AppLayout>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Вход в админ панель</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <AuthAdminAdminLoginForm
            adminLogin={props.adminLogin}
            errorMessage={props.errorMessage}
          />
          <p style={{ textAlign: 'center' }}><NavLink to="auth">Вход в личный кабинет пользователя</NavLink></p>
        </div>
      </div>
    </AppLayout>
  );
}

export default AuthAdmin;