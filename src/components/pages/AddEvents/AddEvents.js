import React from 'react';
import { Form, Button, Text, Picker } from 'native-base';
import AppLayout from 'components/ui/AppLayout';
import { Actions } from 'react-native-router-flux';
import {
  FormWrapper,
  PageWrapper,
  EventsLabel,
} from './AddEvents.styles';

const AddEvents = () => (
  <AppLayout pageTitle="Dodaj wydarzenie">
    <PageWrapper>
      <FormWrapper>
        <Form>
          <EventsLabel>Dyscyplina:</EventsLabel>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
          >
            <Picker.Item label="Piłka nożna" value="key0" />
            <Picker.Item label="Koszykówka" value="key1" />
            <Picker.Item label="Siatkówka" value="key2" />
          </Picker>
          <EventsLabel>Kogo szukamy?:</EventsLabel>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
          >
            <Picker.Item label="Zespół" value="key0" />
            <Picker.Item label="Pojedynczy gracz" value="key1" />
          </Picker>
          <Button
            full
            onPress={() => Actions.home()}
          >
            <Text>Dodaj</Text>
          </Button>
        </Form>
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);


export default AddEvents;
