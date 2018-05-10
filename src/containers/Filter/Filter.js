import React from 'react';
import Filter from 'components/pages/Filter';

const FilterPage = () => (
  <Filter
    initialValues={{
      discipline: 1,
      lookingFor: 1,
    }}
    disciplines={[
      {
        id: 1,
        discipline: 'Piłka nożna',
      },
      {
        id: 2,
        discipline: 'Koszykówka',
      },
      {
        id: 3,
        discipline: 'Siatkówka',
      },
    ]}
    lookingFors={[
      {
        id: 1,
        lookingFor: 'Zespół',
      },
      {
        id: 2,
        lookingFor: 'Pojedynczy gracz',
      },
    ]}
    onSubmit={() => {}}
  />
);

export default FilterPage;
