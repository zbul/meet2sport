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
} from 'native-base';

const AppLayout = ({
  pageTitle,
  children,
  withoutHeader,
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
  </Container>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  withoutHeader: PropTypes.bool,
  withGoBack: PropTypes.bool,
};

AppLayout.defaultProps = {
  pageTitle: null,
  withoutHeader: false,
  withGoBack: false,
};

export default AppLayout;
