import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar, View, Image } from 'react-native'

export default class AppBar extends Component {
  render () {
    return (
      <View>
        <Header
          centerComponent={
            <Image
              source={require('../../assets/images/LogoStudiolo.png')}
              style={{ width: 150, height: 50, marginTop: -40 }}
            />
          }
          // rightComponent={{ icon: 'access-alarm', color: '#fff', marginTop: -30 }}
          backgroundColor={'#009788'}
          containerStyle={{
            height: 70,
            justifyContent: 'space-around'
          }}
        />
      </View>
    )
  }
}
