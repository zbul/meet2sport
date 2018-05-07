import React from 'react';
import { Form, Text, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';

import AppLayout from '../../ui/AppLayout';

import { selectPlaceShape } from './SelectPlace.shapes';

import {
  FormWrapper,
  PageWrapper,
  BottomButton,
  UpperButton,
  PlaceLabel,
} from './SelectPlace.styles';

const SelectPlace = ({
  initialValues,
}) => (
  <AppLayout pageTitle="Wybierz miejsce">
    <PageWrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          render={({
          values,
          setFieldValue,
            }) => (
              <Form>
                <PlaceLabel>Wybierz:</PlaceLabel>
                <Picker
                  name="place"
                  selectedValue={values.place}
                  onValueChange={selectedValue => setFieldValue('place', selectedValue)}
                  iosHeader="Select one"
                  mode="dropdown"
                >
                  <Picker.Item label="os. Strzelców 3" value="key0" />
                  <Picker.Item label="os. Oświecenia 30" value="key1" />
                  <Picker.Item label="os. Złotego Wieku 36" value="key2" />
                  <Picker.Item label="Akademiki PK" value="key3" />
                  <Picker.Item label="Park Tysiąclecia" value="key4" />
                  <Picker.Item label="Centrum Sportowe Parkowa" value="key5" />
                </Picker>
                <UpperButton
                  full
                  onPress={() => Actions.home()}
                >
                  <Text>Dodaj nowe</Text>
                </UpperButton>
                <BottomButton
                  full
                  onPress={() => Actions.home()}
                >
                  <Text>Dalej</Text>
                </BottomButton>
              </Form>
              )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

SelectPlace.propTypes = {
  initialValues: selectPlaceShape.isRequired,
};

export default SelectPlace;
