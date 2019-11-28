import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Linking,} from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppBar from '../Component/AppBar'
import User from '../../Model/User'
import QRCodeScanner from 'react-native-qrcode-scanner'
export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  render () {
    return (
      <SafeAreaView>
        <AppBar />
        <Text style={{ textAlign: 'center', fontFamily: 'Lato' }}>
          {User.getInstance().getFirstName()}
        </Text>
        <Text style={{ textAlign: 'center', fontFamily: 'Lato' }}>
          {User.getInstance().getLastName()}
        </Text>
        <Text style={{ textAlign: 'center', fontFamily: 'Lato' }}>
          {User.getInstance().getEmail()}
        </Text>
        <Text style={{ textAlign: 'center', fontFamily: 'Lato' }}>
          {User.getInstance().getMatricola()}
        </Text>
      </SafeAreaView>
    )
  }
}
