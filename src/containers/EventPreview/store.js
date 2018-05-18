import ApiManager from 'utils/ApiManager';
import Geocoder from 'react-native-geocoding';
import { Actions } from 'react-native-router-flux';

const initialState = {
  date: '',
  time: '',
  discipline: '',
  lookingFor: '',
  place: {
    city: '',
    street: '',
    number: '',
    location: {
      lat: 0,
      lng: 0,
    },
  },
};

const actions = {
  onJoin: 'EVENT_PREVIEW_ON_JOIN',
  getEvent: 'EVENT_PREVIEW_GET_EVENT',
};

export const onJoin = (eventId) => {
  const user = ApiManager.getUser();
  const promise = ApiManager.addDocument('events_users', {
    eventId,
    userId: user.id,
    email: user.email,
  }).then((result) => {
    Actions.push('home');
    return result;
  });

  return ({
    type: actions.onJoin,
    payload: promise,
  });
};

export const getEvent = (eventId) => {
  const promise = ApiManager.getOne('events', eventId).then(event => (
    ApiManager.getOne('places', event.placeId).then((place) => {
      const eventWithPlace = event;
      eventWithPlace.place = place;
      return eventWithPlace;
    }).then((eventWithPlace) => {
      Geocoder.setApiKey('AIzaSyCMFNBJGpzyBM0jKj0ekrF4iQUD7F21K04');
      const address = `${eventWithPlace.place.city}, ${eventWithPlace.place.street} ${eventWithPlace.place.number}`;
      return Geocoder.from(address).then((json) => {
        const eventWithPlaceAndCoords = eventWithPlace;
        eventWithPlaceAndCoords.place.location = json.results[0].geometry.location;
        return eventWithPlaceAndCoords;
      });
    })
  ));

  return ({
    type: actions.getEvent,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.onJoin:
      return {
        ...state,
      };
    case actions.getEvent:
      return {
        ...state,
        date: action.payload.date,
        time: action.payload.time,
        discipline: action.payload.discipline,
        lookingFor: action.payload.lookingFor,
        place: {
          city: action.payload.place.city,
          street: action.payload.place.street,
          number: action.payload.place.number,
          location: action.payload.place.location,
        },
      };
    default:
      return state;
  }
};

export default reducer;
