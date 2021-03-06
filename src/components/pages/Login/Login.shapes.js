import PropTypes from 'prop-types';

const loginShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export { loginShape };
