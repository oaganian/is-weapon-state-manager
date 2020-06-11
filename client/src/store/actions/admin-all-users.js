import {
  ADMIN_FETCH_USERS_START, ADMIN_FETCH_USERS_SUCCESS, ADMIN_FETCH_USERS_FAILURE,
  SET_PAGINATION_TOTAL, SET_USERS,
  TABLE_CHANGE_START, TABLE_CHANGE_SUCCESS, TABLE_CHANGE_FAILURE,
  SET_PAGINATION_CURRENT,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  ADMIN_FETCH_USER_BY_ID_START, ADMIN_FETCH_USER_BY_ID_SUCCESS, ADMIN_FETCH_USER_BY_ID_FAILURE,
  ADMIN_DELETE_USER_BY_ID_START, ADMIN_DELETE_USER_BY_ID_SUCCESS, ADMIN_DELETE_USER_BY_ID_FAILURE,
  SET_ADMIN_DELETE_USER_BY_ID,
  ADMIN_ADD_NEW_USER_START, ADMIN_ADD_NEW_USER_SUCCESS, ADMIN_ADD_NEW_USER_FAILURE,
  CLOSE_POPOVER

} from '../constants/admin-all-users';

import axios from 'axios';

export const adminFetchUsers = (current, limit) => {
  return async dispatch => {
    dispatch({
      type: ADMIN_FETCH_USERS_START
    });

    const token = localStorage.getItem('admin-login');

    try {
      let result = await axios.get(`http://localhost:5000/api/admin/all-users?page=${current}&limit=${limit}`, {
        headers: { Authorization: token }
      })
      dispatch({
        type: SET_PAGINATION_TOTAL,
        payload: result.data.total
      });

      dispatch({
        type: SET_USERS,
        payload: result.data.results
      });

      dispatch({
        type: ADMIN_FETCH_USERS_SUCCESS
      });
    }
    catch (err) {
      dispatch({
        type: ADMIN_FETCH_USERS_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}

// Define table change 
export const tableChange = (current, limit) => {
  //debugger;
  return async dispatch => {
    dispatch({
      type: TABLE_CHANGE_START // loading : true
    });

    dispatch({
      type: SET_PAGINATION_CURRENT,
      payload: current
    });

    const token = localStorage.getItem('admin-login');

    try {
      let result = await axios.get(`http://localhost:5000/api/admin/all-users?page=${current}&limit=${limit}`, {
        headers: { Authorization: token }
      });

      dispatch({
        type: SET_USERS,
        payload: result.data.results
      });

      dispatch({
        type: TABLE_CHANGE_SUCCESS
      })

    } catch (err) {
      dispatch({
        type: TABLE_CHANGE_FAILURE,
        payload: err,
        error: true
      });
    }


    /*fetch(`http://localhost:5000/api/realtors?page=${current}&limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dateConvertFromTimestamp(data.results)
        dispatch(setData(data.results));
        dispatch(toggleLoading());

      });*/
  }
}

// Define closeDrawer
export const closeDrawer = () => {
  return {
    type: CLOSE_DRAWER
  }
}
//Define admin get user by id
export const adminFetchUserById = (id) => {

  return async dispatch => {
    dispatch({
      type: OPEN_DRAWER
    });
    dispatch({
      type: ADMIN_FETCH_USER_BY_ID_START
    });

    try {
      const token = localStorage.getItem('admin-login');

      let result = await axios.get(`http://localhost:5000/api/admin/current-user/${id}`, {
        headers: { Authorization: token }
      })

      dispatch({
        type: ADMIN_FETCH_USER_BY_ID_SUCCESS,
        payload: result.data
      });

    } catch (err) {
      dispatch({
        type: ADMIN_FETCH_USER_BY_ID_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}

// Define admin delete user by id
export const adminDeleteUserById = (id) => {
  return async dispatch => {
    dispatch({
      type: ADMIN_DELETE_USER_BY_ID_START
    });

    console.log(id);
    const token = localStorage.getItem('admin-login');
    try {
      let result = await axios.delete(`http://localhost:5000/api/admin/delete-user/${id}`, {
        headers: { Authorization: token }
      });
      //result.data.message

      dispatch({ // delete user in state
        type: SET_ADMIN_DELETE_USER_BY_ID,
        payload: id
      });

      dispatch({
        type: CLOSE_DRAWER
      });

      dispatch({
        type: ADMIN_DELETE_USER_BY_ID_SUCCESS //not

      });
    } catch (err) {
      dispatch({ //not
        type: ADMIN_DELETE_USER_BY_ID_FAILURE,
        payload: err,
        error: true
      });
    }
  }
}

//Define admin add new user
export const adminAddNewUser = (data) => {

  return async dispatch => {
    dispatch({
      type: ADMIN_ADD_NEW_USER_START
    });
    try {
      const token = localStorage.getItem('admin-login');

      const result = await fetch(`http://localhost:5000/api/admin/new-user`, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(data)
      })

      dispatch({
        type: ADMIN_ADD_NEW_USER_SUCCESS
      });

    } catch (err) {
      dispatch({
        type: ADMIN_ADD_NEW_USER_FAILURE,
        payload: err,
        error: true
      });
    }

  }
}

//Define closePopover 
export const closePopover = () => {
  return {
    type: CLOSE_POPOVER
  }
}
export default adminFetchUsers;