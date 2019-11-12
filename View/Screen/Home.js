import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
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
