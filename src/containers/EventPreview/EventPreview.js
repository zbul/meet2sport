import React from 'react';
import { connect } from 'react-redux';
import EventPreview from 'components/pages/EventPreview';

import { onJoin } from './store';

const EventPreviewPage = props => (
  <EventPreview
    {...props}
    getEvent={() => {}}
    date="2018-05-16"
    discipline="Piłka nożna"
    lookingFor="Zespół"
    time="12:00"
  />
);

export default connect(null, { onJoin })(EventPreviewPage);
