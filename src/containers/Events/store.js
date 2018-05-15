import ApiManager from 'utils/ApiManager';

const initialState = {
  events: [],
  initialValues: {
    event: 0,
  },
};

const actions = {
  getEvents: 'SELECT_EVENT_GET_EVENTS',
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
    default:
      return state;
  }
};

export default reducer;
