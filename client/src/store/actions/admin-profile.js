import axios from 'axios';


import {
  FETCH_ADMIN_START, FETCH_ADMIN_SUCCESS, FETCH_ADMIN_FAILURE,
  ADMIN_LOGOUT

} from '../constants/admin-profile';

import history from '../../history';

export const fetchAdmin = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_ADMIN_START
    });

    // get admin
    try {
      const token = localStorage.getItem('admin-login');

      await axios.get(`http://localhost:5000/api/admin/profile`, {
        headers: { Authorization: token }
      }).then((response) => {
        dispatch({
          type: FETCH_ADMIN_SUCCESS,
          payload: response.data
        });
      });

    } catch (err) {
      dispatch({
        type: FETCH_ADMIN_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}

//Define admin logout
export const adminLogout = () => {
  return dispatch => {
    // удалить токен из local storage
    localStorage.removeItem('admin-login')
    //удалить админа из store
    dispatch({
      type: ADMIN_LOGOUT
    });

    history.push('/auth-admin');

  }
}


