import React from 'react';
import { Typography, Breadcrumb, Card } from 'antd';

const { Text } = Typography;


const UserProfileProfile = (props) => {
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
              <Text style={{ fontSize: 16 }} code>Ф.И.О:</Text>  <Text style={{ fontSize: 16 }}>{props.fio}</Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Серия паспорта:</Text>  <Text style={{ fontSize: 16 }}>{props.passportSeries}</Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Номер паспорта:</Text> <Text style={{ fontSize: 16 }}>{props.passportNumber}</Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Место прописки:</Text> <Text style={{ fontSize: 16 }}>{props.registerPlace}</Text>

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfileProfile;