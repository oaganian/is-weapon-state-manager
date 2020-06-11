import React from 'react';
import { Typography, Breadcrumb, Card } from 'antd';

const { Text } = Typography;


const AdminProfileProfile = (props) => {

  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Профиль</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="no-user.jpg"
              />
            }
          >
            <div>
              <Text style={{ fontSize: 16 }} code>Логин</Text>  <Text style={{ fontSize: 16 }}>
                {props.profile ? props.profile.login : ''}
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileProfile;