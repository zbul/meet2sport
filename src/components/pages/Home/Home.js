import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, List, ListItem } from 'native-base';

import AppLayout from 'components/ui/AppLayout';

import { ActionButton, ButtonWrapper, CenteredText, TimetableWrapper } from './Home.styles';

const Home = () => (
  <AppLayout pageTitle="Home" activeTab="home">
    <TimetableWrapper>
      <List>
        <ListItem>
          <Text>Terminarz</Text>
        </ListItem>
        <ListItem>
          <Text>Lorem ipsum dolor sit amet</Text>
        </ListItem>
        <ListItem>
          <Text>Lorem ipsum dolor sit amet</Text>
        </ListItem>
        <ListItem>
          <Text>Lorem ipsum dolor sit amet</Text>
        </ListItem>
      </List>
    </TimetableWrapper>
    <ButtonWrapper>
      <Grid>
        <Row>
          <Col>
            <ActionButton>
              <CenteredText>MOJE WYDARZENIA</CenteredText>
            </ActionButton>
          </Col>
          <Col>
            <ActionButton onPress={() => { Actions.push('addEvents'); }}>
              <CenteredText>DODAJ WYDARZENIE</CenteredText>
            </ActionButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <ActionButton>
              <CenteredText>MIEJSCA</CenteredText>
            </ActionButton>
          </Col>
          <Col>
            <ActionButton onPress={() => { Actions.push('places'); }}>
              <CenteredText>DODAJ MIEJSCE</CenteredText>
            </ActionButton>
          </Col>
        </Row>
      </Grid>
    </ButtonWrapper>
  </AppLayout>
);

export default Home;
