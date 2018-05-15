import React from 'react';
import { connect } from 'react-redux';
import Events from 'components/pages/Events';

import { onSubmit, getEvents } from './store';

const EventsPage = props => (
  <Events {...props} />
);

const mapStateToProps = state => ({
  ...state.selectEvents,
});

export default connect(mapStateToProps, { onSubmit, getEvents })(EventsPage);
