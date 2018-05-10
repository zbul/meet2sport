import React from 'react';
import { connect } from 'react-redux';
import SelectPlace from 'components/pages/SelectPlace';

import { onSubmit, getPlaces } from './store';

const SelectPlacePage = props => (
  <SelectPlace {...props} />
);

const mapStateToProps = state => ({
  ...state.selectPlace,
});

export default connect(mapStateToProps, { onSubmit, getPlaces })(SelectPlacePage);
