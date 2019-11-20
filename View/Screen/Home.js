import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  BackHandler,
  FlatList
} from 'react-native'
import AppBar from '../Component/AppBar'
import StudentCard from '../Component/StudentCard'
import HomeController from '../../Controller/HomeController'
import User from '../../Model/User';

export default class HomePage extends Component {
  _homeController = new HomeController()

  state = { data: [] }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)

    this._homeController
      .getStudentCenterInfo()
      .then(d => {
        this.setState({ data: d })
      })
      .catch(error => {
        alert(error)
      })
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
