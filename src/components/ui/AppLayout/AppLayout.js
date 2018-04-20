import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
  <Container>
    {
      withoutHeader ?
        null :
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{pageTitle}</Title>
          </Body>
          <Right />
        </Header>
    }
    <Content>{children}</Content>
  </Container>
);

AppLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  withoutHeader: PropTypes.bool,
};

AppLayout.defaultProps = {
  withoutHeader: false,
};

export default AppLayout;
