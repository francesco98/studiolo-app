import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';

import Home from './View/Screen/Home';
import Login from './View/Screen/Login';
import SignupPage from './View/Screen/Signup';

import {createBottomTabNavigator} from 'react-navigation-tabs'
import Placeholder from './View/Screen/Placeholder'
import HomePage from './View/Screen/Home'


const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomePage
    },
    Placeholder: {
      screen: Placeholder
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginBottom: 10
      },
      style: {
        elevation: 5
      }
    }
  }
)




const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  Dashboard: TabNavigator,
  Signup: {
    screen: SignupPage
  }


})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
