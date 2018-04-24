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
    <Content padder>{children}</Content>
  </Container>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  withoutHeader: PropTypes.bool,
};

AppLayout.defaultProps = {
  pageTitle: null,
  withoutHeader: false,
};

export default AppLayout;
