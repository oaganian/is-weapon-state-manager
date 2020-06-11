import {
  FETCH_ADMIN_START, FETCH_ADMIN_SUCCESS, FETCH_ADMIN_FAILURE,
  ADMIN_LOGOUT
} from '../constants/admin-profile';
let initialState = {
  admin: {}
}

const adminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN_SUCCESS: {
      return { ...state, admin: action.payload }
    }
    case ADMIN_LOGOUT: {
      return { ...state, admin: {} }
    }
    default: {
      return state;
    }
  }
}

export default adminProfileReducer;