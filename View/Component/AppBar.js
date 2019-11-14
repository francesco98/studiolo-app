import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AppBar extends Component {
  render () {
    return (
      <Header
        centerComponent={{
          text: 'STUDIOLO',
          style: { color: '#fff', marginTop: -23 }
        }}
        rightComponent={{ icon: 'access-alarm', color: '#fff', marginTop: -30 }}
        backgroundColor={'#009788'}
        containerStyle={{
          height: 50,
          justifyContent: 'space-around'
        }}
      />
    )
  }
}
