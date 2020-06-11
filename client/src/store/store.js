import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import userLoginReducer from './reducers/user-login';
import userProfileReducer from './reducers/user-profile';
import adminLoginReducer from './reducers/admin-login';
import adminProfileReducer from './reducers/admin-profile';
import adminAllUsersReducer from './reducers/admin-all-users';


const reducers = combineReducers({
    userLoginReducer: userLoginReducer,
    userProfileReducer: userProfileReducer,
    adminLoginReducer: adminLoginReducer,
    adminProfileReducer: adminProfileReducer,
    adminAllUsersReducer: adminAllUsersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
