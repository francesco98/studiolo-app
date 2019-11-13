import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'


export default class Placeholder extends Component {
  static navigationOptions = {
    title: 'Placeholder',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  render () {
    return (
      <SafeAreaView>
        <Text>Placeholder</Text>
      </SafeAreaView>
    )
  }
}