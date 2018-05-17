import ApiManager from 'utils/ApiManager';
import Geocoder from 'react-native-geocoding';

const initialState = {
  city: '',
  street: '',
  number: '',
  location: {
    lat: 0,
    lng: 0,
  },
};

const actions = {
  getPlace: 'PLACE_PREVIEW_GET_EVENT',
};

export const getPlace = (placeId) => {
  const promise = ApiManager.getOne('places', placeId).then((place) => {
    Geocoder.setApiKey('AIzaSyCMFNBJGpzyBM0jKj0ekrF4iQUD7F21K04');
    return Geocoder.from(`${place.street} ${place.number}, ${place.street}`).then((json) => {
      const placeWithCoords = place;
      placeWithCoords.location = json.results[0].geometry.location;
      return placeWithCoords;
    });
  });

  return ({
    type: actions.getPlace,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getPlace:
      return {
        ...state,
        city: action.payload.city,
        street: action.payload.street,
        number: action.payload.number,
        location: action.payload.location,
      };
    default:
      return state;
  }
};

export default reducer;
