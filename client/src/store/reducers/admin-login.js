import {
  ADMIN_LOGIN_START, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE,
  ADMIN_NOT_EXISTS

} from '../constants/admin-login';

let initialState = {
  errorMessage: ''

};

const adminLoginReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS: {
      return { ...state, errorMessage: '' }
    }
    case ADMIN_NOT_EXISTS: {
      return { ...state, errorMessage: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default adminLoginReducer;