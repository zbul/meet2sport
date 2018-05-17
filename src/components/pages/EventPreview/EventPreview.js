import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
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
    eventId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    place: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    onJoin: PropTypes.func.isRequired,
    getEvent: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvent(this.props.eventId);
  }

  render() {
    return (
      <AppLayout pageTitle="Wydarzenie" activeTab="events" withGoBack>
        <PageWrapper>
          <MapWrapper>
            <MapEvent
              mapType="hybrid"
              region={{
                latitude: this.props.place.location.lat,
                longitude: this.props.place.location.lng,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.props.place.location.lat,
                  longitude: this.props.place.location.lng,
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
              <Text>{this.props.place.street ? `${this.props.place.street} ${this.props.place.number}, ${this.props.place.city}` : null}</Text>
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
            onPress={() => this.props.onJoin(this.props.eventId)}
          >
            <Text>Dołącz</Text>
          </BottomButton>
        </PageWrapper>
      </AppLayout>
    );
  }
}

export default EventPreview;

