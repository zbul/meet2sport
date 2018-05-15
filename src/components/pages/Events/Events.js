import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppLayout from '../../ui/AppLayout';

import { eventShape } from './Events.shapes';

import { PageWrapper } from './Events.styles';

class Events extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(eventShape).isRequired,
    getEvents: PropTypes.func.isRequired,
  };


  componentWillMount() {
    this.props.getEvents();
  }


  render() {
    return (
      <AppLayout pageTitle="Wydarzenia" activeTab="places" withGoBack>
        <PageWrapper>
          <List>
            {this.props.events.map(event => (
              <ListItem onPress={() => { Actions.push('home'); }} ><Text>{`${event.discipline}  ${event.lookingFor}  ${event.time} ${event.date} `}</Text></ListItem>
                    ))}
          </List>
        </PageWrapper>
      </AppLayout>
    );
  }
}

export default Events;