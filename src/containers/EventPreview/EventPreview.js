import React from 'react';
import { connect } from 'react-redux';
import EventPreview from 'components/pages/EventPreview';

import { getEvents } from './store';

const EventPreviewPage = props => (
  <EventPreview {...props} />
);

const mapStateToProps = state => ({
  ...state.selectEvents,
});

export default connect(mapStateToProps, { getEvents })(EventPreviewPage);
