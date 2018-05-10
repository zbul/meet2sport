import React from 'react';
import PropTypes from 'prop-types';
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import ReduxPromise from 'redux-promise';
import RobotoFont from 'native-base/Fonts/Roboto.ttf';
import RoboToMediumFont from 'native-base/Fonts/Roboto_medium.ttf';

import Login from 'containers/Login';
import SignIn from 'containers/SignIn';
import Home from 'containers/Home';
import EventPreview from 'containers/EventPreview';
import SelectPlace from 'containers/SelectPlace';
import Filter from 'containers/Filter';
import AddEvents from 'containers/AddEvents';
import Places from 'containers/Places';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropTypes.bool,
  };

  static defaultProps = {
    skipLoadingScreen: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
    };
  }

  loadResourcesAsync = async () => (
    Promise.all([
      Font.loadAsync({
        Roboto: RobotoFont,
        Roboto_medium: RoboToMediumFont,
      }),
    ])
  );

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Scene hideNavBar key="root">
            <Scene
              key="login"
              component={Login}
            />
            <Scene
              key="signIn"
              component={SignIn}
            />
            <Scene
              key="home"
              component={Home}
            />
            <Scene
              key="selectPlace"
              component={SelectPlace}
            />
            <Scene
              key="eventPreview"
              component={EventPreview}
            />
            <Scene
              key="filter"
              component={Filter}
            />
            <Scene
              key="addEvents"
              component={AddEvents}
            />
            <Scene
              key="places"
              component={Places}
              initial
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
