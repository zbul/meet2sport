import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  initialValues: {
    discipline: 'Piłka nożna',
    lookingFor: 'Zespół',
    date: '2018-05-14',
    time: '12:00',
  },
};

const actions = {
  onSubmit: 'ADD_EVENTS_ON_SUBMIT',
};

export const onSubmit = (data, selectedPlaceId) => {
  const newData = data;
  newData.placeId = selectedPlaceId;
  const promise = ApiManager.addDocument('events', newData)
    .then((result) => {
      Actions.push('home');
      return result;
    });

  return ({
    type: actions.onSubmit,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.onSubmit:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
