import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, BackHandler} from 'react-native'
import createAppContainer from 'react-navigation'
import createBottomTabNavigator from 'react-navigation-tabs'
import Placeholder from './Placeholder'


export default class HomePage extends Component {
   componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }

  render () {
    return (
        <SafeAreaView>
          <Text>Home</Text>
        </SafeAreaView>
    )
  }
}

