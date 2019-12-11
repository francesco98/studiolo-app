import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Linking } from 'react-native'
import AppBar from '../Component/AppBar'
import User from '../../Model/User'
import Constants from '../../Model/Constants'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { BleManager } from 'react-native-ble-plx'
import { Buffer } from 'buffer'

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

          if (device.name === 'DSD TECH') {
            this._bleManager.stopDeviceScan()
            device
              .connect()
              .then(device => {
                return device.discoverAllServicesAndCharacteristics()
              })
              .then(device => {
                return device.services()
              })
              .then(services => {
                let i = 0;
                for(i = 0; i < services.length; i++) {
                  if(services[i].uuid.toUpperCase() === Constants.serviceUUID.toUpperCase()) {
                    return services[i].characteristics()
                  }
                }
              })
              .then(characteristics => {
                characteristics[0].monitor((e, c) => {
                  if (e) {
                    alert(e.message)
                    return
                  }
                  const buffer = new Buffer(c.value, 'base64')
                  const bufStr = buffer.toString()

                  alert(bufStr)
                })

                return characteristics[0]
              })
              .then(characteristic => {
                const buffer = new Buffer("Occupo")
                const bufBase64 = buffer.toString('base64');

                characteristic.writeWithoutResponse(bufBase64);
              })
              .catch(error => {
                alert(error)
              })
          }
        })
      } else {
        alert('Devi abilitare il bluetooth del dispositivo')
      }
    })
  }
  render () {

    return (
      <SafeAreaView>
        <AppBar />
        <View>
          <QRCodeScanner onRead={this.onSuccess} />
        </View>
      </SafeAreaView>
    )
  }
}
