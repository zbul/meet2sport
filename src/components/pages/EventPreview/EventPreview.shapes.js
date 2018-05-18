import PropTypes from 'prop-types';

const memberShape = PropTypes.shape({
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  email: PropTypes.string.isRequired,
});


export { memberShape };
