import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import createAppContainer from 'react-navigation'
import createBottomTabNavigator from 'react-navigation-tabs'
import Placeholder from './Placeholder'


export default class HomePage extends Component {
  static navigationOptions = {
    title: 'HomePage',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  render () {
    return (
        <SafeAreaView>
          <Text>Home</Text>
        </SafeAreaView>
    )
  }
}

