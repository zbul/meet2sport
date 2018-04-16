import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './AppLayout.styles';

const AppLayout = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
