import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React, { Component } from 'react'

import Home from './View/Screen/Home'
import Login from './View/Screen/Login'
import SignupPage from './View/Screen/Signup'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import Placeholder from './View/Screen/Placeholder'
import HomePage from './View/Screen/Home'
import Icon from 'react-native-vector-icons/AntDesign'


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={30} color={tintColor} />
      )
      }
      
    },
    Placeholder: {
      screen: Placeholder,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="setting" size={30} color={tintColor} />
      )
      }
    }
  },
  {
    tabBarOptions: {
      //showIcon: true,
      activeTintColor: '#009788',
      inactiveTintColor: 'gray',
      showLabel: false, 
      style: {
        elevation: 5,
        borderTopColor: "transparent",
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
  //Home: TabNavigator, //DEVELOPING HOMESCREEN FASTER
Home: {
    screen:  Login
  },
  Dashboard: TabNavigator,
  Signup: {
    screen: SignupPage
  }
})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
