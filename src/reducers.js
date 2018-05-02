import { combineReducers } from 'redux';

import LoginReducer from './containers/Login/store';

const RootReducer = combineReducers({
  login: LoginReducer,
});

export default RootReducer;
