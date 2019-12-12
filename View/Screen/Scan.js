import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

import AppBar from '../Component/AppBar'
import User from '../../Model/User'
import Context from '../../Model/Context'
import Constants from '../../Model/Constants'

import ScanComponent from '../Component/ScanComponent'

export default class Scan extends Component {
  static navigationOptions = {
    title: 'Scan',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  state = {
    isDeviceConnecting: false,
    idDeviceConnected: false
  }

  componentDidMount () {
    Context.getInstance().subscribeToBleStatus((result, error) => {
      if (!result) {
        alert(error)
      }
    })
  }

  _onDeviceIdObtanied (deviceModel, operation) {
    this.setState({ isDeviceConnecting: true, isDeviceConnected: false })

    if (operation == Constants.NOT_FREE_STATUS) {
      alert('Ops... Il posto sembra non essere libero!')
      this.setState({ isDeviceConnecting: false, isDeviceConnected: false })
    } else if (operation == Constants.TO_RESERVE_STATUS) {
      alert('La funzione è in sviluppo, stai calmo!')
      this.setState({ isDeviceConnecting: false, isDeviceConnected: false })
    } else if (operation == Constants.TO_HOLD_STATUS) {
      Context.getInstance().connectToDevice(
        Platform.OS == 'ios' ? deviceModel.getUUID() : deviceModel.getMac(),
        (result, error, device, characteristic) => {
          if (result) {
            this.setState({ isDeviceConnecting: true, isDeviceConnected: true })

            Context.getInstance().sendBleMessage(
              characteristic,
              Constants.MESSAGE_TO_HOLD
            )

            Context.getInstance().subscribeToBleCharacteristic(
              characteristic,
              (result, value) => {
                if (result) {
                  // TODO sync with server
                  alert(value)
                } else {
                  alert(value)
                }
              }
            )
          } else {
            alert(error)
            this.setState({
              isDeviceConnecting: false,
              isDeviceConnected: false
            })
          }
        }
      )
    } else {
      alert('Operation not allowed!')
      this.setState({ isDeviceConnecting: false, isDeviceConnected: false })
    }
  }

  render () {
    return !this.state.isDeviceConnecting && !this.state.isDeviceConnected ? (
      <ScanComponent
        onResult={(deviceId, operation) =>
          this._onDeviceIdObtanied(deviceId, operation)
        }
      />
    ) : (
      <SafeAreaView>
        <AppBar />
        {!this.state.isDeviceConnected ? (
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              fontSize: 24
            }}
          >
            Connessione in corso...
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              fontSize: 24
            }}
          >
            Connesso (TO DO){' '}
          </Text>
        )}
      </SafeAreaView>
    )
  }
}
