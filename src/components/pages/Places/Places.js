import React from 'react';
import { Form, Button, Text } from 'native-base';
import AppLayout from 'components/ui/AppLayout';
import Input from 'components/ui/Input';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  FormWrapper,
  PageWrapper,
} from './Places.styles';

const Places = ({
  initialValues,
  onSubmit,
}) => (
  <AppLayout pageTitle="Dodaj miejsce">
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
              <Input
                name="city"
                onChangeText={text => setFieldValue('city', text)}
                value={values.city}
                placeholder="Miasto"
              />
              <Input
                name="street"
                onChangeText={text => setFieldValue('street', text)}
                value={values.street}
                placeholder="Ulica"
              />
              <Input
                name="number"
                onChangeText={text => setFieldValue('number', text)}
                value={values.number}
                placeholder="Numer"
                keyboardtype="numeric"
              />
              <Button
                full
                onPress={handleSubmit}
              >
                <Text>Dodaj</Text>
              </Button>
            </Form>
            )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

Places.propTypes = {
  initialValues: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Places;
