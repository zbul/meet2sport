import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  events: [],
  initialValues: {
    event: 0,
  },
};

const actions = {
  getEvents: 'SELECT_EVENT_GET_EVENTS',
};

export const onSubmit = (data) => {
  Actions.push('addEvents');

  return {
    type: actions.onSubmit,
    selectedEventId: data.event,
  };
};

export const getEvents = () => {
  const promise = ApiManager.getAll('/events');

  return ({
    type: actions.getEvents,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getEvents:
      return {
        ...state,
        events: action.payload,
      };
    case actions.onSubmit:
      return {
        ...state,
        selectedEventId: action.selectedEventId,
      };
    default:
      return state;
  }
};

export default reducer;
