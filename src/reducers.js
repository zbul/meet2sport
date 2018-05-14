import { combineReducers } from 'redux';

import LoginReducer from 'containers/Login/store';
import SignInReducer from 'containers/SignIn/store';
import SelectPlaceReducer from 'containers/SelectPlace/store';
import AddPlaceReducer from 'containers/AddPlace/store';

const RootReducer = combineReducers({
  login: LoginReducer,
  signIn: SignInReducer,
  selectPlace: SelectPlaceReducer,
  addPlace: AddPlaceReducer,
});

export default RootReducer;
