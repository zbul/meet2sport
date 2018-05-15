import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';

import AppLayout from 'components/ui/AppLayout';

import { ActionButton, ButtonWrapper, CenteredText } from './Home.styles';

const Home = () => (
  <AppLayout pageTitle="Home" activeTab="home">
    <ButtonWrapper>
      <Grid>
        <Row>
          <Col>
            <ActionButton>
              <CenteredText>MOJE WYDARZENIA</CenteredText>
            </ActionButton>
          </Col>
          <Col>
            <ActionButton onPress={() => { Actions.push('selectPlace'); }}>
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
            <ActionButton onPress={() => { Actions.push('addPlace'); }}>
              <CenteredText>DODAJ MIEJSCE</CenteredText>
            </ActionButton>
          </Col>
        </Row>
      </Grid>
    </ButtonWrapper>
  </AppLayout>
);

export default Home;
