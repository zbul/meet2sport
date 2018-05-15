import React from 'react';
import { connect } from 'react-redux';
import AddEvents from 'components/pages/AddEvents';

import { onSubmit } from './store';

const AddEventsPage = props => (
  <AddEvents {...props} />
);

const mapStateToProps = state => ({
  selectedPlaceId: state.selectPlace.selectedPlaceId,
  ...state.addEvents,
});

export default connect(mapStateToProps, { onSubmit })(AddEventsPage);
