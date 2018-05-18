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
  onSubmit: 'LOGIN_ON_SUBMIT',
};

export const onSubmit = (data) => {
  const promise = ApiManager.login(data.email, data.password)
    .then((result) => {
      ApiManager.setUser({
        id: result.user.uid,
        email: data.email,
      });
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
