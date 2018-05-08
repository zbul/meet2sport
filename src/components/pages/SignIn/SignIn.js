import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Text } from 'native-base';
import { Formik } from 'formik';

import AppLayout from 'components/ui/AppLayout';
import Input from 'components/ui/Input';

import { signInShape } from './SignIn.shapes';
import {
  FormWrapper,
  PageWrapper,
} from './SignIn.styles';

const SignIn = ({
  initialValues,
  onSubmit,
  error,
}) => (
  <AppLayout withGoBack withoutFooterTabs pageTitle="Zarejestruj się">
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
              {error ? <Text>{error}</Text> : null}
              <Input
                name="email"
                onChangeText={text => setFieldValue('email', text)}
                value={values.email}
                placeholder="Email"
                keyboardType="email-address"
              />
              <Input
                name="password"
                onChangeText={text => setFieldValue('password', text)}
                value={values.password}
                placeholder="Hasło"
                secureTextEntry
              />
              <Button
                full
                onPress={handleSubmit}
              >
                <Text>Dalej</Text>
              </Button>
            </Form>
          )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

SignIn.propTypes = {
  initialValues: signInShape.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  error: null,
};

export default SignIn;
