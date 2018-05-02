import ApiManager from 'utils/ApiManager';

const initialState = {
  initialValues: {
    login: 'asd',
    password: 'pass',
    loggedIn: '',
  },
};

const actions = {
  onSubmit: 'ON_SUBMIT',
};

export const onSubmit = (data) => {
  ApiManager.setUserId(123213);

  return ({
    type: actions.onSubmit,
    login: data.login,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.onSubmit:
      return {
        ...state,
        loggedIn: action.login,
      };
    default:
      return state;
  }
};

export default reducer;
