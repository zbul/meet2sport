import React from 'react';
import { connect } from 'react-redux';
import AddPlace from 'components/pages/AddPlace';

import { onSubmit } from './store';

const PlacesPage = props => (
  <AddPlace {...props} />
);

const mapStateToProps = state => ({
  ...state.addPlace,
});

export default connect(mapStateToProps, { onSubmit })(PlacesPage);
