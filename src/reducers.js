import { combineReducers } from 'redux';

import LoginReducer from 'containers/Login/store';
import SignInReducer from 'containers/SignIn/store';

const RootReducer = combineReducers({
  login: LoginReducer,
  signIn: SignInReducer,
});

export default RootReducer;
