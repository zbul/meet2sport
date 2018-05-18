import PropTypes from 'prop-types';

const eventPreviewShape = PropTypes.shape({
  member: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});


export { eventPreviewShape };
