import React from 'react';
import { Form, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppLayout from '../../ui/AppLayout';

import {
  FormWrapper,
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
} from './EventPreview.styles';


const Home = () => (
  <AppLayout pageTitle="Wydarzenie">
    <PageWrapper>
      <MapWrapper>
        <MapEvent
          mapType="satellite"
          region={{
            latitude: 50.091875,
            longitude: 19.971997,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </MapWrapper>
      <FormWrapper>
        <Form>
          <List>
            <ListItem>
              <TextBold>Dyscyplina: </TextBold>
              <Text>Piłka nożna</Text>
            </ListItem>
            <ListItem>
              <TextBold>Kogo szukamy: </TextBold>
              <Text>Zespół</Text>
            </ListItem>
            <ListItem>
              <TextBold>Miejsce: </TextBold>
              <Text>Strzelców 3</Text>
            </ListItem>
            <ListItem>
              <TextBold>Data: </TextBold>
              <Text>12/12/2018</Text>
            </ListItem>
            <ListItem>
              <TextBold>Godzina: </TextBold>
              <Text>12:12</Text>
            </ListItem>
          </List>
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
