import React from 'react';
import { Form, Text, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppLayout from '../../ui/AppLayout';

import {
  FormWrapper,
  PageWrapper,
  BottomButton,
  UpperButton,
  PlaceLabel,
} from './SelectPlace.styles';

const Home = () => (
  <AppLayout pageTitle="Wybierz miejsce">
    <PageWrapper>
      <FormWrapper>
        <Form>
          <PlaceLabel>Wybierz:</PlaceLabel>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
          >
            <Picker.Item label="Strzelców 3, Kraków" value="key0" />
            <Picker.Item label="os. Oświecenia 30" value="key1" />
            <Picker.Item label="os. Złotego Wieku 36" value="key2" />
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
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

export default Home;
