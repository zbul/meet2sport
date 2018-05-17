import React from 'react';
import { connect } from 'react-redux';
import PlacePreview from 'components/pages/PlacePreview';

import { getPlace } from './store';

const PlacePreviewPage = props => (
  <PlacePreview {...props} />
);

const mapStateToProps = state => ({
  ...state.placePreview,
});

export default connect(mapStateToProps, { getPlace })(PlacePreviewPage);
