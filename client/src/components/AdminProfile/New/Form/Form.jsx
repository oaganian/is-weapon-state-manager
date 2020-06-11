import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Input, Button, Typography, Card, DatePicker } from "antd";
import momemt from 'moment';

const { Text } = Typography;

// Defile form item
const FormItem = Form.Item;

// Define render field methot that generates form items
const renderField = Component => ({ label, type, hasFeedback, input, meta: { touched, error }, children, ...rest }) => {
  return (
    <FormItem

      label={label}
      hasFeedback={hasFeedback && touched && error}
      validateStatus={touched && error ? "error" : "success"}
      help={touched && error}
    >
      <Component {...input} type={type} {...rest} children={children} />
    </FormItem>
  );
}



let AdminProfileNewForm = props => {
  const { handleSubmit } = props;

  const submit = (
    { fio, passportSeries, passportNumber,
      registerPlace, login, password,
      name, model, type,
      caliber, usedCartridge, carbineWeight,
      carbineLength, magazineVolume, shooting,
      producer, factoryNumber, saleDate,
      getDate, shelfLife, carbine,
      magazine, passport, accessory,
      packaging, permission_type, certificateNumber,
      giveDate, controlDate, whoGived,
      institutionName, institutionAddress, medical_giveDate
    }) => {

    let error = {};
    let isError = false;

    if (!fio || fio === '') {
      error.fio = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!passportSeries || passportSeries === '') {
      error.passportSeries = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (passportSeries && passportSeries.length != 4) {
      error.passportSeries = 'Длина значения поля 4 символа!';
      isError = true;
    }
    if (!passportNumber || passportNumber === '') {
      error.passportNumber = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (passportNumber && passportNumber.length != 6) {
      error.passportNumber = 'Длина значения поля 6 символов!';
      isError = true;
    }
    if (!login || login === '') {
      error.login = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!password || password === '') {
      error.password = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!registerPlace || registerPlace === '') {
      error.registerPlace = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!name || name === '') {
      error.name = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!model || model === '') {
      error.model = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!type || type === '') {
      error.type = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!caliber || caliber === '') {
      error.caliber = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!usedCartridge || usedCartridge === '') {
      error.usedCartridge = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!carbineWeight || carbineWeight === '') {
      error.carbineWeight = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!carbineLength || carbineLength === '') {
      error.carbineLength = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!magazineVolume || magazineVolume === '') {
      error.magazineVolume = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!shooting || shooting === '') {
      error.shooting = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!producer || producer === '') {
      error.producer = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!factoryNumber || factoryNumber === '') {
      error.factoryNumber = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!saleDate || saleDate === '') {
      error.saleDate = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!getDate || getDate === '') {
      error.getDate = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!shelfLife || shelfLife === '') {
      error.shelfLife = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!carbine || carbine === '') {
      error.carbine = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!magazine || magazine === '') {
      error.magazine = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!passport || passport === '') {
      error.passport = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!accessory || accessory === '') {
      error.accessory = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!packaging || packaging === '') {
      error.packaging = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!permission_type || permission_type === '') {
      error.permission_type = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!certificateNumber || certificateNumber === '') {
      error.certificateNumber = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!giveDate || giveDate === '') {
      error.giveDate = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!controlDate || controlDate === '') {
      error.controlDate = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!whoGived || whoGived === '') {
      error.whoGived = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!institutionName || institutionName === '') {
      error.institutionName = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!institutionAddress || institutionAddress === '') {
      error.institutionAddress = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!medical_giveDate || medical_giveDate === '') {
      error.medical_giveDate = 'Поле является обязательным для заполнения!';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    }
    else {
      // Object  of login and password
      let data = {
        fio: fio,
        passportSeries: passportSeries,
        passportNumber: passportNumber,
        registerPlace: registerPlace,
        login: login,
        password: password,
        weapon: {
          name: name,
          model: model,
          type: type,
          caliber: caliber,
          usedCartridge: usedCartridge,
          carbineWeight: carbineWeight,
          carbineLength: carbineLength,
          magazineVolume: magazineVolume,
          shooting: shooting,
          producer: producer,
          factoryNumber: factoryNumber,
          saleDate: dateParser(saleDate),
          getDate: dateParser(getDate),
          shelfLife: shelfLife,
          set: {
            carbine: carbine,
            magazine: magazine,
            passport: passport,
            accessory: accessory,
            packaging: packaging
          },
          permission: {
            type: permission_type,
            certificateNumber: certificateNumber,
            giveDate: dateParser(giveDate),
            controlDate: dateParser(controlDate),
            whoGived: whoGived
          }
        },
        medical: {
          institutionName: institutionName,
          institutionAddress: institutionAddress,
          giveDate: dateParser(medical_giveDate)
        }
      }

      props.adminAddNewUser(data);

    }
  }

  const dateParser = (date) => {
    let unix = date._d.getTime() / 1000 | 0;
    let date_converter = new Date(unix * 1000);
    unix = `${date_converter.getDate()}/${date_converter.getMonth() + 1}/${date_converter.getFullYear()}`;
    return unix;
  }
  return (

    <form onSubmit={handleSubmit(submit)} style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Card title="Профиль" bordered={false} style={{ width: 300 }}>
        <Field
          name="fio"
          label={"ФИО"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback

        />
        <Field
          name="passportSeries"
          label={"Серия паспорта"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="passportNumber"
          label={"Номер паспорта"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="registerPlace"
          label={"Место прописки"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="login"
          label={"Логин"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="password"
          label={"Пароль"}
          type={"password"}
          component={renderField(Input)}
          hasFeedback
        />
      </Card>

      <Card title="Общая информация об оружии" bordered={false} style={{ width: 300 }}>
        <Field
          name="name"
          label={"Наименование"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback

        />
        <Field
          name="model"
          label={"Модель"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="type"
          label={"Тип оружия"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="caliber"
          label={"Калибр, мм"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="usedCartridge"
          label={"Применяемый патрон"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />

        <Field
          name="carbineWeight"
          label={"Масса карабина с магазином, кг"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="carbineLength"
          label={"Длина карабина, мм"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="magazineVolume"
          label={"Емкость магазина, шт патронов"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="shooting"
          label={"Кучность и точность стрельбы"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="producer"
          label={"Производитель"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="factoryNumber"
          label={"Заводской номер"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          label={'Дата продажи'}
          name="saleDate"
          component={renderField(DatePicker)}
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
          type={"YYYY/MM/DD"}
        />
        <Field
          label={'Дата приемки'}
          name="getDate"
          component={renderField(DatePicker)}
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
          type={"YYYY/MM/DD"}
        />
        <Field
          name="shelfLife"
          label={"Срок хранения, мес"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
      </Card>

      <Card title="Комплектность оружия" bordered={false} style={{ width: 300 }}>
        <Field
          name="carbine"
          label={"Карабин, шт"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="magazine"
          label={"Магазин, шт"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="passport"
          label={"Паспорт, шт"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />

        <Field
          name="accessory"
          label={"Принадлежности, шт"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="packaging"
          label={"Упаковка, шт"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />

      </Card>

      <Card title="Разрешение" bordered={false} style={{ width: 300 }}>
        <Field
          name="permission_type"
          label={"Тип разрешения"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="certificateNumber"
          label={"Номер удостоверения"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          label={'Дата выдачи'}
          name="giveDate"
          component={renderField(DatePicker)}
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
          type={"YYYY/MM/DD"}
        />
        <Field
          label={'Дата контроля'}
          name="controlDate"
          component={renderField(DatePicker)}
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
          type={"YYYY/MM/DD"}
        />
        <Field
          name="whoGived"
          label={"Кем выдано"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />

      </Card>
      <Card title="Мед справка" bordered={false} style={{ width: 300 }}>
        <Field
          name="institutionName"
          label={"Название учреждения"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          name="institutionAddress"
          label={"Адрес учреждения"}
          type={"text"}
          component={renderField(Input)}
          hasFeedback
        />
        <Field
          label={'Дата выдачи'}
          name="medical_giveDate"
          component={renderField(DatePicker)}
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
          type={"YYYY/MM/DD"}
        />
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
            Сохранить
        </Button>
        </FormItem>

      </Card>

    </form >
  );
}

AdminProfileNewForm = reduxForm({
  form: 'new-user'
})(AdminProfileNewForm)

export default AdminProfileNewForm;