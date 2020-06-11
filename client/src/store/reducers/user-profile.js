import {
  FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,
  USER_LOGOUT
} from '../constants/user-profile';
let initialState = {
  user: {}
}

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return { ...state, user: action.payload }
    }
    case USER_LOGOUT: {
      return { ...state, user: {} }
    }
    default: {
      return state;
    }
  }
}

export default userProfileReducer;