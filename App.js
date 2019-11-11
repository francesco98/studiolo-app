import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';

import SignupPage from './View/Screen/Signup';
import Login from './View/Screen/Login';

class App extends Component {
  render() {
    return (
      Login()
    )
  }
}
// Create Stack Navigator gets two props createStackNavigator(routes, config)
const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  Signup: {
    screen: SignupPage
  }
})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
