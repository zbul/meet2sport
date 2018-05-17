import { combineReducers } from 'redux';

import LoginReducer from 'containers/Login/store';
import SignInReducer from 'containers/SignIn/store';
import SelectPlaceReducer from 'containers/SelectPlace/store';
import AddPlaceReducer from 'containers/AddPlace/store';
import AddEventsReducer from 'containers/AddEvents/store';
import SelectEventsReducer from 'containers/Events/store';
import EventPreviewReducer from 'containers/EventPreview/store';
import PlacePreviewReducer from 'containers/PlacePreview/store';

const RootReducer = combineReducers({
  login: LoginReducer,
  signIn: SignInReducer,
  selectPlace: SelectPlaceReducer,
  addPlace: AddPlaceReducer,
  addEvents: AddEventsReducer,
  selectEvents: SelectEventsReducer,
  eventPreview: EventPreviewReducer,
  placePreview: PlacePreviewReducer,
});

export default RootReducer;
