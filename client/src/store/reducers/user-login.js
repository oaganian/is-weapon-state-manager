import {
  USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
  USER_NOT_EXISTS

} from '../constants/user-login';

let initialState = {
  errorMessage: ''

};

const userLoginReducer = (state = initialState, action) => {

  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return { ...state, errorMessage: '' }
    }
    case USER_NOT_EXISTS: {
      return { ...state, errorMessage: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default userLoginReducer;