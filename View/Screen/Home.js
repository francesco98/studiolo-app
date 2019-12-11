import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  BackHandler,
  FlatList,
  Button
} from 'react-native'
import AppBar from '../Component/AppBar'
import StudentCard from '../Component/StudentCard'
import HomeController from '../../Controller/HomeController'
import User from '../../Model/User'

import BackgroundTask from 'react-native-background-task'
import AsyncStorage from '@react-native-community/async-storage'

BackgroundTask.define(async () => {
  let value = await AsyncStorage.getItem('prova3')

  if (value !== null) {
    await AsyncStorage.setItem('prova3', 'Valore aggiornato')
  } else {
    await AsyncStorage.setItem('prova3', 'Valore inizializzato')
  }

  BackgroundTask.finish()
})

export default class HomePage extends Component {
  _homeController = new HomeController()

  state = {
    data: [],
    status: 0
  }

  _scanQRCode () {
    const { navigate } = this.props.navigation
    navigate('Scan', {})
  }

  _retrieveStatus () {
    alert('VALUE RETRIEVED')

    AsyncStorage.getItem('prova3').then(value => this.setState({ status: value }))

  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)

    BackgroundTask.schedule()
    this.checkStatus()

    this._retrieveStatus()

    this._homeController
      .getStudentCenterInfo()
      .then(d => {
        this.setState({ data: d })
      })
      .catch(error => {
        alert(error)
      })
  }

  async checkStatus () {
    const status = await BackgroundTask.statusAsync()

    if (status.available) {
      // Everything's fine
      return
    }

    const reason = status.unavailableReason
    if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
      alert(
        'Denied',
        'Please enable background "Background App Refresh" for this app'
      )
    } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
      alert(
        'Restricted',
        'Background tasks are restricted on your device'
      )
    }
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }

  render () {
    // TODO: FlatList Styling
    return (
      <SafeAreaView>
        <AppBar />
        <Button
          title={'retrieve status'}
          onPress={() => this._retrieveStatus()}
        />
        <Text>Valore: {this.state.status}</Text>
        <View>
          <Text style={styles.text}>
            {User.getInstance()
              .getPlace()
              .getName()}
          </Text>
        </View>
        <View style={{}}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <StudentCard
                studentName={item.name}
                freeSits={item.free}
                data={item.lastUpdateDay}
                ora={item.lastUpdateHour}
                total={item.nposti}
                onScanQRCode={() => this._scanQRCode()}
              />
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}
// CONSTANTS

const styles = StyleSheet.create({
  text: {
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lato-Light'
  }
})
