import React from 'react';
import { connect } from 'react-redux';
import SignIn from 'components/pages/SignIn';

import { onSubmit } from './store';

const SignInPage = props => (
  <SignIn {...props} />
);

const mapStateToProps = state => ({
  ...state.signIn,
});

export default connect(mapStateToProps, { onSubmit })(SignInPage);
