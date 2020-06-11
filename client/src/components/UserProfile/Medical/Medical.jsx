import React from 'react';
import { Typography, Breadcrumb, Card } from 'antd';


const { Text } = Typography;

const UserProfileMedical = (props) => {
  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Информация о медицинской справке</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <Card title="Мед справка" bordered={true} style={{ width: 500 }} hoverable>
            <div>
              <Text style={{ fontSize: 16 }} code>Наименование учреждения:</Text>  <Text style={{ fontSize: 16 }}>
                {props.medical ? props.medical.institutionName : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Адрес учреждения:</Text>  <Text style={{ fontSize: 16 }}>
                {props.medical ? props.medical.institutionAddress : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Дата выдачи мед справки:</Text> <Text style={{ fontSize: 16 }}>
                {props.medical ? props.medical.giveDate : ''}
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfileMedical;