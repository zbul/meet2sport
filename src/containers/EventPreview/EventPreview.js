import React from 'react';
import { connect } from 'react-redux';
import EventPreview from 'components/pages/EventPreview';

import { onJoin } from './store';

const EventPreviewPage = props => (
  <EventPreview {...props} />
);

export default connect(null, { onJoin })(EventPreviewPage);
