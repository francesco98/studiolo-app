import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppBar from '../Component/AppBar'


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
      <AppBar/>
        <Text>Placeholder</Text>
      </SafeAreaView>
    )
  }
}