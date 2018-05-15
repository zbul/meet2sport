import React from 'react';
import { connect } from 'react-redux';
import Places from 'components/pages/Places';

import { getPlaces } from './store';

const PlacesPage = props => (
  <Places {...props} />
);

const mapStateToProps = state => ({
  ...state.selectPlace,
});

export default connect(mapStateToProps, { getPlaces })(PlacesPage);
