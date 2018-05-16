import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { MapView } from 'expo';

import AppLayout from '../../ui/AppLayout';

import {
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
} from './EventPreview.styles';


class EventPreview extends React.Component {
  static propTypes = {
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    discipline: PropTypes.string.isRequired,
    lookingFor: PropTypes.string.isRequired,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    getEvent: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvent();
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
          <List>
            <ListItem>
              <TextBold>Dyscyplina: </TextBold>
              <Text>{this.props.discipline}</Text>
            </ListItem>
            <ListItem>
              <TextBold>Kogo szukamy: </TextBold>
              <Text>{this.props.lookingFor}</Text>
            </ListItem>
            <ListItem>
              <TextBold>Miejsce: </TextBold>
              <Text>Strzelców 3</Text>
            </ListItem>
            <ListItem>
              <TextBold>Data: </TextBold>
              <Text>{this.props.date}</Text>
            </ListItem>
            <ListItem>
              <TextBold>Godzina: </TextBold>
              <Text>{this.props.time}</Text>
            </ListItem>
          </List>
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

