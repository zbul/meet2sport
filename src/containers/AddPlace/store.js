import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  initialValues: {
    city: '',
    street: '',
    number: '',
  },
};

const actions = {
  onSubmit: 'ADD_PLACE_ON_SUBMIT',
};

export const onSubmit = (data) => {
  const promise = ApiManager.addDocument('places', data)
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
