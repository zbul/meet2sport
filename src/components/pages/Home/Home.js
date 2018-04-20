import React from 'react';
import { Text } from 'native-base';

import AppLayout from '../../ui/AppLayout';
import styles from './Home.styles';

const Home = () => (
  <AppLayout pageTitle="Home">
    <Text style={styles.text}>Home content</Text>
  </AppLayout>
);

export default Home;
