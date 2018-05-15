import PropTypes from 'prop-types';

const eventShape = PropTypes.shape({
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discipline: PropTypes.string.isRequired,
  lookingFor: PropTypes.string.isRequired,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

const selectEventShape = PropTypes.shape({
  event: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export { selectEventShape, eventShape };
