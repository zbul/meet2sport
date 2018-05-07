import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Text, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { Actions } from 'react-native-router-flux';

import ApiManager from 'utils/ApiManager';
import AppLayout from 'components/ui/AppLayout';
import Logo from 'components/ui/Logo';
import Input from 'components/ui/Input';

import { loginShape } from './Login.shapes';
import {
  FormWrapper,
  PageWrapper,
  SignInWrapper,
  SignInLink,
  SocialIconsWrapper,
} from './Login.styles';

const Login = ({
  initialValues,
  onSubmit,
  error,
}) => (
  <AppLayout withoutHeader withoutFooterTabs>
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
                <Text>Zaloguj</Text>
              </Button>
            </Form>
          )}
        />
      </FormWrapper>
      <SignInWrapper>
        <Text>Nie masz konta?</Text>
        <TouchableOpacity onPress={() => { Actions.push('signIn'); }}>
          <SignInLink>Zarejestruj się teraz</SignInLink>
        </TouchableOpacity>
      </SignInWrapper>
      <SocialIconsWrapper>
        <TouchableOpacity onPress={() => { ApiManager.signInWithGoogle(); }}>
          <Icon name="google" type="FontAwesome" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" type="FontAwesome" />
        </TouchableOpacity>
      </SocialIconsWrapper>
    </PageWrapper>
  </AppLayout>
);

Login.propTypes = {
  initialValues: loginShape.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: null,
};

export default Login;
