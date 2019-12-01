import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Linking } from 'react-native'
import AppBar from '../Component/AppBar'
import User from '../../Model/User'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { BleManager } from 'react-native-ble-plx'

export default class Scan extends Component {
  _deviceId = ''
  _bleManager = new BleManager()

  static navigationOptions = {
    title: 'Scan',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  componentDidMount () {
    this._bleManager.onStateChange(state => {
      if (state === 'PoweredOn') {
        alert('BL OK iOS')
      }
    })
  }

  onSuccess = qrcode => {
    const deviceId = qrcode.data

    this._deviceId = deviceId

    this._bleManager.state().then(state => {
      if (state === 'PoweredOn') {
        this._bleManager.startDeviceScan(null, null, (error, device) => {
          if (error) {
            alert(error.message)
            return
          }

          if (device.name === 'HC-06') {
            this.manager.stopDeviceScan()
            device
              .connect()
              .then(device => {
                this.info('Discovering services and characteristics')
                return device.discoverAllServicesAndCharacteristics()
              })
              .then(device => {
                alert(device)
              })
          }
        })
      } else {
        alert('Devi abilitare il bluetooth del dispositivo')
      }
    })
  }
  render () {
    this._bleManager.state().then(state => {
      alert(state)
    })

    return (
      <SafeAreaView>
        <AppBar />
        <QRCodeScanner onRead={this.onSuccess} />
      </SafeAreaView>
    )
  }
}
