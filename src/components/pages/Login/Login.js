import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Text } from 'native-base';
import { Formik } from 'formik';

import AppLayout from 'components/ui/AppLayout';
import Logo from 'components/ui/Logo';
import Input from 'components/ui/Input';

import { loginShape } from './Login.shapes';
import {
  FormWrapper,
  PageWrapper,
} from './Login.styles';

const Login = ({
  initialValues,
  onSubmit,
}) => (
  <AppLayout withoutHeader>
    <PageWrapper>
      <Logo />
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
                name="login"
                onChangeText={text => setFieldValue('login', text)}
                value={values.login}
                placeholder="Login"
              />
              <Input
                name="password"
                onChangeText={text => setFieldValue('password', text)}
                value={values.password}
                placeholder="Hasło"
                type="password"
              />
              <Button
                full
                onPress={handleSubmit}
              >
                <Text>Zaloguj</Text>
              </Button>
            </Form>
          )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

Login.propTypes = {
  initialValues: loginShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
