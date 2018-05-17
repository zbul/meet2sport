import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
import { MapView } from 'expo';
import StarRating from 'react-native-star-rating';

import AppLayout from '../../ui/AppLayout';

import {
  PageWrapper,
  MapEvent,
  MapWrapper,
  TextBold,
  RatingWrapper,
} from './PlacePreview.styles';

class PlacePreview extends React.Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    getPlace: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getPlace(this.props.placeId);
  }

  render() {
    return (
      <AppLayout pageTitle="Miejsce" activeTab="places" withGoBack>
        <PageWrapper>
          <MapWrapper>
            <MapEvent
              mapType="hybrid"
              region={{
                latitude: this.props.location.lat,
                longitude: this.props.location.lng,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.props.location.lat,
                  longitude: this.props.location.lng,
                }}
                title="os. Strzelców 3"
              />
            </MapEvent>
          </MapWrapper>
          <RatingWrapper>
            <StarRating
              disabled
              maxStars={5}
              rating={this.props.rating}
            />
          </RatingWrapper>
          <List>
            <ListItem>
              <TextBold>Ulica: </TextBold>
              <Text>{this.props.street}</Text>
            </ListItem>
            <ListItem>
              <TextBold>Numer: </TextBold>
              <Text>{this.props.number}</Text>
            </ListItem>
            <ListItem>
              <TextBold>Miasto: </TextBold>
              <Text>{this.props.city}</Text>
            </ListItem>
          </List>
        </PageWrapper>
      </AppLayout>
    );
  }
}

export default PlacePreview;

