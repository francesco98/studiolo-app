import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './View/Screen/Home'
import Login from './View/Screen/Login'
import SignupPage from './View/Screen/Signup'
import Settings from './View/Screen/Settings'
import HomePage from './View/Screen/Home'


import Scan from './View/Screen/Scan'
import Icon from 'react-native-vector-icons/AntDesign'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' size={30} color={tintColor} />
        )
      }
    },
    Scan: {
      screen: Scan,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='plus' size={30} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name='setting' size={30} color={tintColor} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      // showIcon: true,
      activeTintColor: '#009788',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        elevation: 5,
        borderTopColor: 'transparent'
      }
    },
    navigationOptions: {
      headerLeft: null,
      gesturesEnabled: false,
      headerStyle: {
        display: 'none'
      }
    }
  }
)

const AppNavigator = createStackNavigator({
  // Home: TabNavigator, //DEVELOPING HOMESCREEN FASTER
  Home: {
    screen: Login
  },
  Dashboard: TabNavigator,
  Signup: {
    screen: SignupPage
  },
  Scan: {
    screen: Scan
  }
})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
