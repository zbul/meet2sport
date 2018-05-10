import PropTypes from 'prop-types';

const placeShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

const selectPlaceShape = PropTypes.shape({
  place: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export { selectPlaceShape, placeShape };
