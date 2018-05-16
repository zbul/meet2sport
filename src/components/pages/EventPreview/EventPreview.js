import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { MapView } from 'expo';

import AppLayout from '../../ui/AppLayout';

import { eventShape } from './EventPreview.shapes';

import {
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
} from './EventPreview.styles';


class EventPreview extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(eventShape).isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <AppLayout pageTitle="Wydarzenie" activeTab="events" withGoBack>
    <PageWrapper>
      <MapWrapper>
        <MapEvent
          mapType="hybrid"
          region={{
            latitude: 50.091875,
            longitude: 19.971997,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 50.091875,
              longitude: 19.971997,
            }}
            title="os. Strzelców 3"
          />
        </MapEvent>
      </MapWrapper>
      {this.props.events.map(event => (
      <List>
        <ListItem>
          <TextBold>Dyscyplina: </TextBold>
          <Text>{event.discipline}</Text>
        </ListItem>
        <ListItem>
          <TextBold>Kogo szukamy: </TextBold>
          <Text>{event.lookingFor}</Text>
        </ListItem>
        <ListItem>
          <TextBold>Miejsce: </TextBold>
          <Text>Strzelców 3</Text>
        </ListItem>
        <ListItem>
          <TextBold>Data: </TextBold>
          <Text>{event.date}</Text>
        </ListItem>
        <ListItem>
          <TextBold>Godzina: </TextBold>
          <Text>{event.time}</Text>
        </ListItem>
      </List>
      ))}
      <BottomButton
        full
        onPress={() => Actions.home()}
      >
        <Text>Dołącz</Text>
      </BottomButton>
    </PageWrapper>
  </AppLayout>
    );
  }
}

export default EventPreview;

