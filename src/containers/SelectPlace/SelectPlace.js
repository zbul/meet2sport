import React from 'react';
import SelectPlace from 'components/pages/SelectPlace';

const SelectPlacePage = () => (
  <SelectPlace
    initialValues={{
      place: 1,
    }}
    places={[
      {
        id: 1,
        city: 'Kraków',
        street: 'os. Strzelców',
        number: '4',
      },
      {
        id: 2,
        city: 'Kraków',
        street: 'os. Oświecenia',
        number: '32',
      },
      {
        id: 3,
        city: 'Kraków',
        street: 'Akademiki PK',
        number: '',
      },
      {
        id: 4,
        city: 'Kraków',
        street: 'Park Tysiąclecia',
        number: '',
      },
      {
        id: 5,
        city: 'Kraków',
        street: 'AWF',
        number: '',
      },
      {
        id: 6,
        city: 'Kraków',
        street: 'os. Wysokie',
        number: '6',
      },
      {
        id: 7,
        city: 'Kraków',
        street: 'Centrum Sportowe Parkowa',
        number: '',
      },
    ]}
    onSubmit={() => {}}
  />
);

export default SelectPlacePage;
