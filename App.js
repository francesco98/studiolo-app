import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './Login';
import React, {Component} from 'react';
import SignupPage from './Signup';

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
