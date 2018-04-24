import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/components/pages/Login';
import Home from './src/components/pages/Home';

const App = () => (
  <Router>
    <Scene hideNavBar key="root">
      <Scene
        key="login"
        component={Login}
        initial
      />
      <Scene
        key="home"
        component={Home}
      />
    </Scene>
  </Router>
);

export default App;
