import axios from 'axios';


import {
  FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,
  USER_LOGOUT

} from '../constants/user-profile';
import history from '../../history';

export const fetchUser = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_USER_START
    });

    // get user 
    try {
      const token = localStorage.getItem('user-login');

      await axios.get(`http://localhost:5000/api/users/profile`, {
        headers: { Authorization: token }
      }).then((response) => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: response.data
        });
      });

    } catch (err) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}

//Define user logout
export const userLogout = () => {
  return dispatch => {
    // удалить токен из local storage
    localStorage.removeItem('user-login')
    //удалить пользователя из store
    dispatch({
      type: USER_LOGOUT
    });

    history.push('/auth');

  }
}


