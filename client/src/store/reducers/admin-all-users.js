import {
  ADMIN_FETCH_USERS_START, ADMIN_FETCH_USERS_SUCCESS, ADMIN_FETCH_USERS_FAILURE,
  SET_PAGINATION_TOTAL, SET_USERS,
  TABLE_CHANGE_START,
  SET_PAGINATION_CURRENT,
  TABLE_CHANGE_SUCCESS,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  ADMIN_FETCH_USER_BY_ID_SUCCESS,
  SET_ADMIN_DELETE_USER_BY_ID,
  ADMIN_ADD_NEW_USER_SUCCESS,
  CLOSE_POPOVER
} from '../constants/admin-all-users';

let initialState = {
  data: [],
  pagination: {
    current: 1,
    total: 0
  },
  loading: false,
  limit: 10,
  drawer: {
    visible: false
  },
  currentUser: {},
  successVisible: false
};


const adminAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_POPOVER: {

      return { ...state, successVisible: false }
    }
    case ADMIN_ADD_NEW_USER_SUCCESS: {
      return { ...state, successVisible: true }
    }
    case SET_ADMIN_DELETE_USER_BY_ID: {
      let stateCopy = { ...state };
      stateCopy.data = [...state.data];
      let current_realtor_index = stateCopy.data.indexOf(stateCopy.data.find(r => r._id == action.payload));
      stateCopy.data.splice(current_realtor_index, 1);
      return stateCopy;
    }
    case ADMIN_FETCH_USER_BY_ID_SUCCESS: {
      return { ...state, currentUser: action.payload }
    }
    case CLOSE_DRAWER: {
      let stateCopy = { ...state };
      stateCopy.drawer = { ...state.drawer };
      stateCopy.drawer.userId = '';
      stateCopy.drawer.visible = false;
      return stateCopy;
    }
    case OPEN_DRAWER: {
      let stateCopy = { ...state };
      stateCopy.drawer = { ...state.drawer };
      stateCopy.drawer.visible = true;
      return stateCopy;
    }
    case TABLE_CHANGE_SUCCESS: {
      return { ...state, loading: false }
    }
    case SET_PAGINATION_CURRENT: {
      let stateCopy = { ...state };
      stateCopy.pagination = { ...state.pagination };
      stateCopy.pagination.current = action.payload;
      return stateCopy;
    }
    case TABLE_CHANGE_START: {
      return { ...state, loading: true }
    }
    case ADMIN_FETCH_USERS_SUCCESS: {
      return { ...state, loading: false }
    }
    case SET_USERS: {
      return { ...state, data: action.payload }
    }
    case SET_PAGINATION_TOTAL: {

      let stateCopy = { ...state };
      stateCopy.pagination = { ...state.pagination };
      stateCopy.pagination.total = action.payload;
      return stateCopy;
    }
    case ADMIN_FETCH_USERS_START: {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
}

export default adminAllUsersReducer;
