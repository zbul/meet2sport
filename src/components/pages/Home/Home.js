import React from 'react';
import {
  Platform,
  Text,
} from 'react-native';

import AppLayout from '../../ui/AppLayout';

import styles from './Home.styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Home = () => (
  <AppLayout>
    <Text style={styles.welcome}>
      Welcome to React Native!asdsa
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </AppLayout>
);

export default Home;
