import React from 'react';
import { Typography, Breadcrumb, Card } from 'antd';

const { Text } = Typography;

const UserProfileWeapon = (props) => {
  console.log(props);
  const gridStyle = {
    width: '31%',

  };

  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Информация об оружии</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <Card title="Оружие">
            <Card.Grid style={gridStyle} >
              <Text style={{ fontSize: 16 }} code>Название:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.name : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Модель:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.model : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Тип:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.type : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Калибр мм:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.caliber : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Применяемый патрон:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.usedCartridge : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Масса карабина с магазином кг:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.carbineWeight : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Длина карабина мм:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.carbineLength : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Емкость магазина, шт патронов:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.magazineVolume : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Кучность и точность стрельбы:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.shooting : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Производитель:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.producer : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Заводской номер:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.factoryNumber : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Дата продажи:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.saleDate : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Дата приемки:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.getDate : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Срок хранения мес:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.shelfLife : ''}
              </Text>
              <br />

            </Card.Grid>

            <Card.Grid style={gridStyle}>
              <Text style={{ fontSize: 16 }} code>Карабин шт:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.set.carbine : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Магазин шт:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.set.magazine : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Паспорт шт:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.set.passport : ''}
              </Text>
              <br />
              <Text style={{ fontSize: 16 }} code>Принадлежности шт:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.set.accessory : ''}
              </Text>
              <br />
            </Card.Grid>

            <Card.Grid style={gridStyle}>
              <Text style={{ fontSize: 16 }} code>Тип разрешения:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.permission.type : ''}
              </Text>
              <br />

              <Text style={{ fontSize: 16 }} code>Номер удостоверения:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.permission.sertificateNumber : ''}
              </Text>
              <br />

              <Text style={{ fontSize: 16 }} code>Дата выдачи:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.permission.giveDate : ''}
              </Text>
              <br />

              <Text style={{ fontSize: 16 }} code>Дата Контроля:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.permission.controlDate : ''}
              </Text>
              <br />

              <Text style={{ fontSize: 16 }} code>Кем выдано:</Text>  <Text style={{ fontSize: 16 }}>
                {props.weapon ? props.weapon.permission.whoGived : ''}
              </Text>
              <br />

            </Card.Grid>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfileWeapon;