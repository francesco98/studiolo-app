import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { SafeAreaView, Text, Alert, Platform } from 'react-native'
import Context from '../../Model/Context'
import Constants from '../../Model/Constants'

import AppBar from '../Component/AppBar'
import DeviceController from '../../Controller/DeviceController'

export default class ScanComponent extends Component {
  _deviceController = new DeviceController()

  onValidRequest = device => {
    Alert.alert(
      device.getNome(),
      'Vuoi occuparlo o prenotarlo?',
      [
        {
          text: 'Occupa',
          onPress: () => this.props.onResult(device, Constants.TO_HOLD_STATUS)
        },
        {
          text: 'Prenota',
          onPress: () =>
            this.props.onResult(device, Constants.TO_RESERVE_STATUS),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  }

  onSuccess = qrcode => {
    const deviceId = qrcode.data

    this._deviceController
      .ottieniDevice(deviceId)
      .then(({ result, device }) => {
        if (result && device.getStato().toUpperCase() == 'FREE') {
          this.onValidRequest(device)
        } else {
          this.props.onResult(deviceId, Constants.NOT_FREE_STATUS)
        }
      })
      .catch(result => {
        this.props.onResult(deviceId, Constants.NOT_FREE_STATUS)
      })
  }

  render () {
    return <QRCodeScanner onRead={this.onSuccess} />
  }
}
