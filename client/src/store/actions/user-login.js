import {
  USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
  USER_NOT_EXISTS

} from '../constants/user-login'
import { userLoginApi } from '../../api/api'

import history from '../../history';

export const userLogin = (data) => {
  return async dispatch => {
    dispatch({
      type: USER_LOGIN_START
    });

    try {
      fetch(`http://localhost:5000/api/users/login`, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).then((results) => {
        if (results.message) { // если приходит сообщение такого пользователя нет или неверный пароль
          dispatch({
            type: USER_NOT_EXISTS,
            payload: results.message
          });
        } else {

          dispatch({
            type: USER_LOGIN_SUCCESS
          });
          localStorage.setItem('user-login', results.token);

          history.push('./user-profile');
        }
      })



      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      });


    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}