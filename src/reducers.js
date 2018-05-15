import { combineReducers } from 'redux';

import LoginReducer from 'containers/Login/store';
import SignInReducer from 'containers/SignIn/store';
import SelectPlaceReducer from 'containers/SelectPlace/store';
import AddPlaceReducer from 'containers/AddPlace/store';
import AddEventsReducer from 'containers/AddEvents/store';

const RootReducer = combineReducers({
  login: LoginReducer,
  signIn: SignInReducer,
  selectPlace: SelectPlaceReducer,
  addPlace: AddPlaceReducer,
  addEvents: AddEventsReducer,
});

export default RootReducer;
