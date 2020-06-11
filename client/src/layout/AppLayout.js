import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import NavigationBar from '../components/NavigationBar/NavigationBar';

const { Footer } = Layout;



const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <Layout style={{ minHeight: '100vh' }}>
        <NavigationBar />
        <div className="main">
          {children}
        </div>
        <Footer style={{ textAlign: 'center' }}>Aganyan Oganes ©2018 Created by oaganian</Footer>
      </Layout>
    </div>
  );
}

export default AppLayout;
