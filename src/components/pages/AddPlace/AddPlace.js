import React from 'react';
import { Form, Button, Text } from 'native-base';
import AppLayout from 'components/ui/AppLayout';
import Input from 'components/ui/Input';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import StarRating from 'react-native-star-rating';

import {
  FormWrapper,
  PageWrapper,
  RatingWrapper,
} from './AddPlace.styles';

const AddPlace = ({
  initialValues,
  onSubmit,
}) => (
  <AppLayout pageTitle="Dodaj miejsce" activeTab="places" withGoBack>
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
              <RatingWrapper>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={values.rating}
                  selectedStar={rating => setFieldValue('rating', rating)}
                />
              </RatingWrapper>
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

AddPlace.propTypes = {
  // TODO: add shape
  initialValues: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onSubmit: PropTypes.func.isRequired,
};

export default AddPlace;
