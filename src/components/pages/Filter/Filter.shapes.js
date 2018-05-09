import PropTypes from 'prop-types';

const disciplineShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discipline: PropTypes.string.isRequired,
});

const selectDisciplineShape = PropTypes.shape({
  discipline: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

const lookingForShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lookingFor: PropTypes.string.isRequired,
});

const selectLookingForShape = PropTypes.shape({
  lookingFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export { selectDisciplineShape, disciplineShape, selectLookingForShape, lookingForShape };
