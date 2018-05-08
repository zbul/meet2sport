import React from 'react';
import SelectPlace from 'components/pages/SelectPlace';

const SelectPlacePage = () => (
  <SelectPlace
    initialValues={{
      place: 2,
    }}
    places={[
      {
        id: 1,
        city: 'Kraków',
        street: 'Strzelców',
        number: '3',
      },
      {
        id: 2,
        city: 'Kraków2',
        street: 'Strzelców2',
        number: '32',
      },
      {
        id: 3,
        city: 'Kraków3',
        street: 'Strzelców3',
        number: '33',
      },
    ]}
    onSubmit={() => {}}
  />
);

export default SelectPlacePage;
