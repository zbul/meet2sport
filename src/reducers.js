import { combineReducers } from 'redux';

import LoginReducer from 'containers/Login/store';
import SignInReducer from 'containers/SignIn/store';
import SelectPlaceReducer from 'containers/SelectPlace/store';

const RootReducer = combineReducers({
  login: LoginReducer,
  signIn: SignInReducer,
  selectPlace: SelectPlaceReducer,
});

export default RootReducer;
