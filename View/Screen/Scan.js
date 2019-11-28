import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Linking,} from 'react-native'
import AppBar from '../Component/AppBar'
import User from '../../Model/User'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class Scan extends Component {
  static navigationOptions = {
    title: 'Scan',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }


 onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log(e.data)
    if (check === 'http'){
      Linking.openURL(e.data).catch((err)=> console.log('error'))
    }
  }
  render () {
    return (
      <SafeAreaView>
        <AppBar />
        <QRCodeScanner onRead={this.onSuccess}/>
      </SafeAreaView>
    )
  }
}
