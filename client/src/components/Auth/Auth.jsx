import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

import AppLayout from '../../layout/AppLayout';
import AuthUserLoginForm from './UserLoginForm/UserLoginForm';





const Auth = (props) => {
    return (
        <AppLayout>
            <div style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Вход в личный кабинет</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
                    <AuthUserLoginForm
                        userLogin={props.userLogin}
                        errorMessage={props.errorMessage}
                    />
                    <p style={{ textAlign: 'center' }}><NavLink to="auth-admin">Вход от имени администратора</NavLink></p>
                </div>
            </div>
        </AppLayout>
    );
}

export default Auth;