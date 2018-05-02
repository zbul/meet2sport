import PropTypes from 'prop-types';

const loginShape = PropTypes.shape({
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export { loginShape };
