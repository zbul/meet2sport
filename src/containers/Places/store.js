import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  places: [],
  initialValues: {
    place: 0,
  },
};

const actions = {
  getPlaces: 'SELECT_PLACE_GET_PLACES',
  onSubmit: 'SELECT_PLACE_ON_SUBMIT',
};

export const onSubmit = (data) => {
  Actions.push('places');

  return {
    type: actions.onSubmit,
    selectedPlaceId: data.place,
  };
};

export const getPlaces = () => {
  const promise = ApiManager.getAll('/places');

  return ({
    type: actions.getPlaces,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getPlaces:
      return {
        ...state,
        places: action.payload,
      };
    case actions.onSubmit:
      return {
        ...state,
        selectedPlaceId: action.selectedPlaceId,
      };
    default:
      return state;
  }
};

export default reducer;
