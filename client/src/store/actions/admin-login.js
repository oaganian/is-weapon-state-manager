import {
  ADMIN_LOGIN_START, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE,
  ADMIN_NOT_EXISTS

} from '../constants/admin-login'

import history from '../../history';

export const adminLogin = (data) => { // data = login and password
  return async dispatch => {

    dispatch({
      type: ADMIN_LOGIN_START
    });

    try {
      fetch(`http://localhost:5000/api/admin/login`, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      })
        .then((results) => {

          if (results.message) { // если приходит сообщение такого пользователя нет или неверный пароль
            dispatch({
              type: ADMIN_NOT_EXISTS,
              payload: results.message
            });
          } else {

            dispatch({
              type: ADMIN_LOGIN_SUCCESS
            });
            localStorage.setItem('admin-login', results.token);

            history.push('./admin-profile');
          }
        })

      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: data
      });


    } catch (err) {
      dispatch({
        type: ADMIN_LOGIN_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}