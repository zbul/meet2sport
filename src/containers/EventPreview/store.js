import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  date: '',
  time: '',
  discipline: '',
  lookingFor: '',
};

const actions = {
  onJoin: 'EVENT_PREVIEW_ON_JOIN',
  getEvent: 'EVENT_PREVIEW_GET_EVENT',
};

export const onJoin = (eventId) => {
  const promise = ApiManager.addDocument('events_users', {
    eventId,
    userId: ApiManager.getUserId(),
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
  const promise = ApiManager.getOne('events', eventId);

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
      };
    default:
      return state;
  }
};

export default reducer;
