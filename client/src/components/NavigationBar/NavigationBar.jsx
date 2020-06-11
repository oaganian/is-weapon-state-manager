import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;


const NavigationBar = () => {
    return (
        <div>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="main">
                        <NavLink to="/">Главная</NavLink >
                    </Menu.Item>

                    <Menu.Item key="laws">
                        <NavLink to="/laws">Законы</NavLink >
                    </Menu.Item>

                    <Menu.Item key="adresa-sluzhb-po-registracii-oruzhiya">
                        <NavLink to="/adresa-sluzhb-po-registracii-oruzhiya">Адреса служб по регистрации оружия</NavLink >
                    </Menu.Item>

                    <Menu.Item key="adresa-med-uchrezhdenij">
                        <NavLink to="/adresa-med-uchrezhdenij">Адреса мед учреждений</NavLink >
                    </Menu.Item>

                    <Menu.Item key="auth">
                        <NavLink to="/auth">Вход в личный кабинет</NavLink >
                    </Menu.Item>

                </Menu>
            </Header>
        </div>
    )
}

export default NavigationBar;