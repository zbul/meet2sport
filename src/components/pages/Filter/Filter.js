import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Picker } from 'native-base';
import { Formik } from 'formik';

import AppLayout from '../../ui/AppLayout';

import { selectDisciplineShape, disciplineShape, lookingForShape } from './Filter.shapes';

import {
  FormWrapper,
  PageWrapper,
  BottomButton,
  PlaceLabel,
} from './Filter.styles';

const Filter = ({
  disciplines,
  lookingFors,
  initialValues,
  onSubmit,
}) => (
  <AppLayout pageTitle="Filtry" activeTab="events" withGoBack>
    <PageWrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({
            values,
            setFieldValue,
            handleSubmit,
          }) => (
            <Form>
              <PlaceLabel>Dyscyplina:</PlaceLabel>
              <Picker
                name="discipline"
                selectedValue={values.discipline}
                onValueChange={(selectedValue) => { setFieldValue('discipline', selectedValue); }}
                iosHeader="Kogo szukamy"
                mode="dropdown"
              >
                {disciplines.map(discipline => (
                  <Picker.Item
                    key={discipline.id}
                    label={discipline.discipline}
                    value={discipline.id}
                  />
                ))}
              </Picker>
              <PlaceLabel>Kogo szukamy:</PlaceLabel>
              <Picker
                name="lookingFor"
                selectedValue={values.lookingFor}
                onValueChange={(selectedValue) => { setFieldValue('lookingFor', selectedValue); }}
                iosHeader="Kogo szukamy"
                mode="dropdown"
              >
                {lookingFors.map(lookingFor => (
                  <Picker.Item
                    key={lookingFor.id}
                    label={lookingFor.lookingFor}
                    value={lookingFor.id}
                  />
                ))}
              </Picker>
              <BottomButton
                full
                onPress={handleSubmit}
              >
                <Text>Filtruj</Text>
              </BottomButton>
            </Form>
          )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

Filter.propTypes = {
  disciplines: PropTypes.arrayOf(disciplineShape).isRequired,
  lookingFors: PropTypes.arrayOf(lookingForShape).isRequired,
  initialValues: selectDisciplineShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Filter;
