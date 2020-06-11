import React from 'react';

import { Typography, Button } from 'antd';

const { Text } = Typography;

const AdminProfileAllDetail = (props) => {
  console.log(props);
  const onDeleteUser = () => {
    props.adminDeleteUserById(props.currentUser._id);
  }
  return (
    <div>
      {/*props.currentUser*/}
      <div style={{ paddingBottom: 30 }}>
        <p>Общая информация о пользователе</p>
        <Text style={{ fontSize: 16 }} code>ФИО:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser ? props.currentUser.fio : ''}
        </Text><br />
        <Text style={{ fontSize: 16 }} code>Серия паспорта:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser ? props.currentUser.passportSeries : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Номер паспорта:</Text> <Text style={{ fontSize: 16 }}>
          {props.currentUser ? props.currentUser.passportNumber : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Место прописки:</Text> <Text style={{ fontSize: 16 }}>
          {props.currentUser ? props.currentUser.registerPlace : ''}
        </Text>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <p>Общая информация об оружии</p>
        <Text style={{ fontSize: 16 }} code>Название:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.name : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Модель:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.model : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Тип:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.type : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Калибр мм:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.caliber : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Применяемый патрон:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.usedCartridge : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Масса карабина с магазином кг:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.carbineWeight : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Длина карабина мм:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.carbineLength : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Емкость магазина, шт патронов:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.magazineVolume : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Кучность и точность стрельбы:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.shooting : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Производитель:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.producer : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Заводской номер:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.factoryNumber : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Дата продажи:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.saleDate : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Дата приемки:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.getDate : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Срок хранения мес:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.shelfLife : ''}
        </Text>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <p>Комплектность оружия</p>
        <Text style={{ fontSize: 16 }} code>Карабин шт:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.set.carbine : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Магазин шт:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.set.magazine : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Паспорт шт:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.set.passport : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Принадлежности шт:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.set.accessory : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Упаковка шт:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.set.packaging : ''}
        </Text>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <p> Разрешение</p>
        <Text style={{ fontSize: 16 }} code>Тип разрешения:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.permission.type : ''}
        </Text>
        <br />

        <Text style={{ fontSize: 16 }} code>Номер удостоверения:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.permission.certificateNumber : ''}
        </Text>
        <br />

        <Text style={{ fontSize: 16 }} code>Дата выдачи:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.permission.giveDate : ''}
        </Text>
        <br />

        <Text style={{ fontSize: 16 }} code>Дата Контроля:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.permission.controlDate : ''}
        </Text>
        <br />

        <Text style={{ fontSize: 16 }} code>Кем выдано:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.weapon ? props.currentUser.weapon.permission.whoGived : ''}
        </Text>


      </div>
      <div style={{ paddingBottom: 30 }}>
        <p>Мед справка</p>
        <Text style={{ fontSize: 16 }} code>Наименование учреждения:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.medical ? props.currentUser.medical.institutionName : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Адрес учреждения:</Text>  <Text style={{ fontSize: 16 }}>
          {props.currentUser.medical ? props.currentUser.medical.institutionAddress : ''}
        </Text>
        <br />
        <Text style={{ fontSize: 16 }} code>Дата выдачи мед справки:</Text> <Text style={{ fontSize: 16 }}>
          {props.currentUser.medical ? props.currentUser.medical.giveDate : ''}
        </Text>
      </div>

      <Button onClick={onDeleteUser} type="danger" style={{ marginBottom: 40 }}>Удалить</Button>
    </div>
  );
}

export default AdminProfileAllDetail;