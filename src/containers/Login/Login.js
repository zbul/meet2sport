import React from 'react';
import { connect } from 'react-redux';
import Login from 'components/pages/Login';

import { onSubmit } from './store';

const LoginPage = props => (
  <Login {...props} />
);

const mapStateToProps = state => ({
  ...state.login,
});

export default connect(mapStateToProps, { onSubmit })(LoginPage);
