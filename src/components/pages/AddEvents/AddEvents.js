import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text, Picker } from 'native-base';
import AppLayout from 'components/ui/AppLayout';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';

import {
  FormWrapper,
  PageWrapper,
  EventsLabel,
  EventsButton,
} from './AddEvents.styles';

const AddEvents = ({
  initialValues,
  onSubmit,
  selectedPlaceId,
}) => (
  <AppLayout pageTitle="Dodaj wydarzenie">
    <PageWrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={data => onSubmit(data, selectedPlaceId)}
          render={({
            values,
            setFieldValue,
            handleSubmit,
          }) => (
            <Form>
              <EventsLabel>Dyscyplina: {selectedPlaceId}</EventsLabel>
              <Picker
                name="discipline"
                selectedValue={values.discipline}
                onValueChange={(selectedValue) => { setFieldValue('discipline', selectedValue); }}
                iosHeader="Wybierz"
                mode="dropdown"
              >
                <Picker.Item label="Piłka nożna" value="Piłka nożna" />
                <Picker.Item label="Koszykówka" value="Koszykówka" />
                <Picker.Item label="Siatkówka" value="Siatkówka" />
              </Picker>
              <EventsLabel>Kogo szukamy?:</EventsLabel>
              <Picker
                name="lookingFor"
                selectedValue={values.lookingFor}
                onValueChange={(selectedValue) => { setFieldValue('lookingFor', selectedValue); }}
                iosHeader="Wybierz"
                mode="dropdown"
              >
                <Picker.Item label="Zespół" value="Zespół" />
                <Picker.Item label="Pojedynczy gracz" value="Pojedynczy gracz" />
              </Picker>
              <Text>Data:</Text>
              <DatePicker
                name="date"
                style={{ width: 200 }}
                date={values.date}
                mode="date"
                format="YYYY-MM-DD"
                onDateChange={(date) => { setFieldValue('date', date); }}
              />
              <Text>Godzina:</Text>
              <DatePicker
                name="time"
                time={values.time}
                style={{ width: 200 }}
                mode="time"
                androidMode="spinner"
                format="HH:mm"
                onDateChange={(time) => { setFieldValue('time', time); }}
              />
              <EventsButton
                full
                onPress={handleSubmit}
              >
                <Text>Dodaj</Text>
              </EventsButton>
            </Form>
          )}
        />
      </FormWrapper>
    </PageWrapper>
  </AppLayout>
);

AddEvents.propTypes = {
  selectedPlaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // TODO: add shape
  initialValues: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onSubmit: PropTypes.func.isRequired,
};

export default AddEvents;
