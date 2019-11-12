import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';

import Home from './View/Screen/Home';
import Login from './View/Screen/Login';
import SignupPage from './View/Screen/Signup';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  Dashboard: {
    screen: Home
  },
  Signup: {
    screen: SignupPage
  }
})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
