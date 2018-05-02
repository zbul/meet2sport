import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import ReduxPromise from 'redux-promise';

import Login from 'containers/Login';
import Home from 'containers/Home';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
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
  </Provider>
);

export default App;
