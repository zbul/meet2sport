import PropTypes from 'prop-types';

const signInShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export { signInShape };
