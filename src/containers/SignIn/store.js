import ApiManager from 'utils/ApiManager';
import { Actions } from 'react-native-router-flux';

const initialState = {
  initialValues: {
    email: '',
    password: '',
  },
  error: null,
};

const actions = {
  onSubmit: 'SIGN_IN_ON_SUBMIT',
};

export const onSubmit = (data) => {
  ApiManager.initializeFirebase();
  const promise = ApiManager.signIn(data.email, data.password)
    .then((result) => {
      Actions.push('login');
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
      if (action.error) {
        return {
          ...state,
          error: action.payload.message,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
