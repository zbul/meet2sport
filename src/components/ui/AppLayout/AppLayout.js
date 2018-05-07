import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Footer,
  FooterTab,
  Text,
} from 'native-base';

const AppLayout = ({
  pageTitle,
  children,
  withoutHeader,
  withoutFooterTabs,
  activeTab,
  withGoBack,
}) => (
  <Container>
    {
      withoutHeader ?
        null :
        <Header>
          <Left>
            <Button transparent>
              {
                withGoBack ?
                  <Icon onPress={() => { Actions.pop(); }} name="arrow-back" /> :
                  <Icon name="menu" />
              }
            </Button>
          </Left>
          <Body>
            <Title>{pageTitle}</Title>
          </Body>
          <Right />
        </Header>
    }
    <Content padder>{children}</Content>
    {
      withoutFooterTabs ?
        null :
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={activeTab === 'home'}
              onPress={() => { Actions.push('home'); }}
            >
              <Icon name="home" />
              <Text>Start</Text>
            </Button>
            <Button
              vertical
              active={activeTab === 'events'}
              onPress={() => { Actions.push('eventPreview'); }}
            >
              <Icon name="camera" />
              <Text>Wydarzenia</Text>
            </Button>
            <Button
              vertical
              active={activeTab === 'places'}
              onPress={() => { Actions.push('selectPlace'); }}
            >
              <Icon name="navigate" />
              <Text>Miejsca</Text>
            </Button>
          </FooterTab>
        </Footer>
    }
  </Container>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.oneOf(['home', 'events', 'places']),
  pageTitle: PropTypes.string,
  withoutHeader: PropTypes.bool,
  withoutFooterTabs: PropTypes.bool,
  withGoBack: PropTypes.bool,
};

AppLayout.defaultProps = {
  pageTitle: null,
  activeTab: 'home',
  withoutHeader: false,
  withoutFooterTabs: false,
  withGoBack: false,
};

export default AppLayout;
