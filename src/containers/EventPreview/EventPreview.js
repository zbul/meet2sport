import React from 'react';
import { connect } from 'react-redux';
import EventPreview from 'components/pages/EventPreview';

import { onJoin, getEvent } from './store';

const EventPreviewPage = props => (
  <EventPreview {...props} />
);

const mapStateToProps = state => ({
  ...state.eventPreview,
});

export default connect(mapStateToProps, { onJoin, getEvent })(EventPreviewPage);
