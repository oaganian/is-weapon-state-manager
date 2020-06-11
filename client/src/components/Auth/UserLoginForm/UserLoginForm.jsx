import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Input, Button, Typography } from "antd";
const { Text } = Typography;


// Define form items layout
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};
// Define tail form item layout
export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};
// Defile form item
const FormItem = Form.Item;

// Define render field methot that generates form items
const renderField = Component => ({ label, type, hasFeedback, input, meta: { touched, error }, children, ...rest }) => {
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      hasFeedback={hasFeedback && touched && error}
      validateStatus={touched && error ? "error" : "success"}
      help={touched && error}
    >
      <Component {...input} type={type} {...rest} children={children} />
    </FormItem>
  );
}



let AuthUserLoginForm = props => {
  const { handleSubmit } = props;

  const submit = ({ login, password }) => {
    let error = {};
    let isError = false;
    if (!login || login === '') {
      error.login = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (!password || password === '') {
      error.password = 'Поле является обязательным для заполнения!';
      isError = true;
    }
    if (isError) {
      throw new SubmissionError(error);
    }
    else {
      // Object  of login and password
      let data = {
        login: login,
        password: password
      }
      props.userLogin(data);

    }
  }


  return (

    <form onSubmit={handleSubmit(submit)}
    >
      <p style={{ textAlign: 'center', color: 'tomato' }}> {props.errorMessage ? props.errorMessage : ''}</p>
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
      <FormItem {...tailFormItemLayout}>
        <Button
          type="primary" htmlType="submit" style={{ marginRight: "10px" }}
        >
          Войти
        </Button>
      </FormItem>
    </form >
  );
}

AuthUserLoginForm = reduxForm({
  form: 'user-auth'
})(AuthUserLoginForm)

export default AuthUserLoginForm;