import React from 'react';
import { Form, Button, Text } from 'native-base';

import AppLayout from '../../ui/AppLayout';
import Logo from '../../ui/Logo';
import Input from '../../ui/Input';

import {
  FormWrapper,
  PageWrapper,
} from './Login.styles';

const Home = () => (
  <AppLayout withoutHeader>
    <PageWrapper>
      <Logo />
      <FormWrapper>
        <Form>
          <Input placeholder="Login" />
          <Input placeholder="Hasło" type="password" />
          <Button full>
            <Text>Zaloguj</Text>
          </Button>
        </Form>
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

export default Home;
