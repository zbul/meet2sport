import React from 'react';
import { Form, Text, Picker } from 'native-base';
import AppLayout from 'components/ui/AppLayout';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import {
  FormWrapper,
  PageWrapper,
  EventsLabel,
  EventsButton,
} from './AddEvents.styles';

const actualDate = new Date();
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
          <Text>Data:</Text>
          <DatePicker
            style={{ width: 200 }}
            date={actualDate}
            mode="date"
            format="YYYY-MM-DD"
            onDateChange={(date) => { this.setState({ date }); }}
          />
          <Text>Godzina:</Text>
          <DatePicker
            style={{ width: 200 }}
            time={actualDate}
            mode="time"
            androidMode="spinner"
            format="HH-mm"
            onDateChange={(date) => { this.setState({ date }); }}
          />
          <EventsButton
            full
            onPress={() => Actions.home()}
          >
            <Text>Dodaj</Text>
          </EventsButton>
        </Form>
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);


export default AddEvents;
