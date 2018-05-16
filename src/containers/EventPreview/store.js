import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {};

const actions = {
  onJoin: 'EVENT_PREVIEW_ON_JOIN',
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.onJoin:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
