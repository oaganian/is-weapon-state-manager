import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import AppLayout from '../../layout/AppLayout';

const { Content } = Layout;

const Home = (props) => {
    return (
        <AppLayout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
                    <h1 style={{ textAlign: 'center', fontSize: 40 }}>
                        Добро пожаловать!
                    </h1>
                    <h2 style={{ textAlign: 'center', marginBottom: 400, color: '#474747' }}>
                        Если вы являетесь владельцем оружия, при регистрации вам был выдан логин и пароль от личного кабинета, чтобы начать пользоваться нашим сервисом авторизуйтесь
                    </h2>
                </div>
            </Content>
        </AppLayout >
    );
}

export default Home;