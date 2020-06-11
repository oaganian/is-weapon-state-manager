import React from 'react';
import { Breadcrumb, Popover, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'

import AdminProfileNewForm from './Form/Form';

const { Text } = Typography;

const AdminProfileNew = (props) => {
  const onClose = () => {
    props.closePopover();
  }
  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Регистрация нового пользователя</Breadcrumb.Item>
        </Breadcrumb>
        <Popover
          content={
            <div>
              <p style={{ color: 'green' }}><CheckCircleOutlined /> <Text>Пользователь успешно зарегистрирован!</Text></p>
              <a onClick={onClose}>Закрыть</a>
            </div >
          }
          visible={props.successVisible}
        >
        </Popover >
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <AdminProfileNewForm adminAddNewUser={props.adminAddNewUser}

          />
        </div>
      </div>
    </div>
  );
};

export default AdminProfileNew